import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import student from "./models/student";
import usercomp from "./models/usercomp";
import userpass from "./models/userpass";
import nodemailer from "nodemailer";
import multer from "multer";
import signup from "./models/signup";
import jwt from "jsonwebtoken";
import middleware from "./models/middleware";
import product from "./models/product";
const app = express();
// app.use("/api",(req,res,next)=>{
//     res.send("hi hello")
// })
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

//For displaying the images in the frontend
app.use('/images',express.static('public/images'))

mongoose.connect('mongodb+srv://admin:wqEvxOFHvYuF7UNS@cluster0.sjy8afl.mongodb.net/Driveready?retryWrites=true&w=majority')
  .then(() => app.listen(1234))
  .then(() =>
    console.log("Connected to Database & Listining to localhost 1234")
  )
  .catch((err) => console.log(err));
// app.post('/adddata', (req, res, next) => {
//     console.log(req.body.formdata)

// })
// app.post('/addstudent',(req,res,next)=>{
//     // console.log(req.body)
//     // res.send("success")
//     const {name,rollno,college,branch}=req.body;


// })
app.post('/addstud', (req, res, next) => {
  console.log(req.body.formdata)
  const { name, rollno, college, branch } = req.body.formdata
  const stud = new student({
    name,
    rollno,
    college,
    branch
  })
  try {
    stud.save()
  }//for saving the data into the database
  catch (err) {
    console.log(err);
  }
  return res.send({ msg: "inserted", result: stud })
})

//fetching data from the backend

app.get('/getstuddata', async (req, res, next) => {
  let studentdata
  // res.send("Success")
  try {
    studentdata = await student.find()
  }
  catch (err) {
    console.log(err);

  }
  if (!studentdata) {
    console.log("no data found")

  }
  return res.status(200).json({ studentdata })
})

//For updating puropose getting the data from the backend

app.get('/getstudbyid/:id', async (req, res, next) => {
  let studentdata
  const _id = req.params.id
  try {
    studentdata = await student.findById(_id)
    console.log(studentdata)
  }
  catch (err) {
    console.log(err);

  }
  if (!studentdata) {
    console.log("no data found")

  }
  return res.status(200).json({ studentdata })
})

//Updating the data

app.put('/updatestudentbyid/:id', async (req, res, next) => {
  //let studentdata
  const _id = req.params.id
  const { name, rollno, college, branch } = req.body
  let stud
  try {
    stud = await student.findByIdAndUpdate(_id, { name, rollno, college, branch });
    console.log(stud)
  }
  catch (err) {
    console.log(err);

  }
  if (!stud) {
    console.log("no data found")

  }
  return res.status(200).json({ stud })
})

//Deleting the data

app.delete('/deleteuser/:id', async (req, res, next) => {
  const _id = req.params.id
  let studentdata
  try {
    studentdata = await student.findByIdAndDelete(_id)
  }
  catch (err) {
    console.log(err)
  }
  if (!studentdata) {
    return res.status(400).json({ msg: "unable to delete" })
  }
  return res.status(200).json({ msg: "deleted" })
})

//     app.post('/adduser', (req, res, next) => {
//      console.log(req.body.userdata)
//      const{user,password}=req.body.userdata
//      const user1=new usercomp({
//         user,
//         password
//      })
//      user1.save()
//    })




//posting the registeruserdata

app.post('/addregisteruser', async (req, res, next) => {
  console.log(req.body.signdata)
  const { username, email, password, cpassword } = req.body.signdata
  const registeruser = new signup({
    username,
    email,
    password,
    cpassword,

  })
  try {
    let exist = await signup.findOne({ email })
    if (exist) {
      return res.status(400).send('User Already Exist')
    }
    if (password != cpassword) {
      return res.status(400).send('passwords are not matching')
    }
    registeruser.save()
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'venkatadurgareddysathi@gmail.com',
        pass: 'aalq spot vytl ujey'
      }
    });

    var mailOptions = {
      from: 'venkatadurgareddysathi@gmail.com',
      to: email,
      text: 'Thank you for registering 😊!',

    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    return res.status(200).send('Registered successfully')
  }
  catch (err) {
    console.log(err);
  }
  return res.send({ msg: "inserted", result: registeruser })
})


//posting the loginuser data and generate the token

app.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body.logindata
    let exist = await signup.findOne({ email });
    if (!exist) {
      return res.status(400).send('user Not found')
    }
    if (exist.password !== password) {
      return res.status(400).send('Invalid password')
    }
    let payload = {
      user: {
        id: exist.id
      }
    }
    jwt.sign(payload, 'jwtSecret', { expiresIn: 36000000 },
      (err, token) => {
        if (err) throw err;
        return res.json({ token })
      })
  }
  catch (err) {
    console.log(err)
    return res.send(500).send('Server Errr')
  }
})

//By using the Generated token getting the data

app.get('/myprofile', middleware, async (req, res) => {
  try {
    let exist = await signup.findById(req.user.id);
    if (!exist) {
      return res.status(400).send('user not found')
    }
    res.json(exist);
  }
  catch (err) {
    console.log(err);
    return res.send(500).send('Server Error')
  }
})

//For uploding the image and dynamic details

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/images')
  },
  filename: function (req, file, callback) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    callback(null, Date.now()+"_"+file.originalname)
  }
})

const upload = multer({ storage: storage })
//add product 
app.post("/addproduct",upload.single("myfile"),async(req, res, next)=>{
  const productpic=(req.file)? req.file.filename:null
  //console.log(req.body.formdata)
  const {title,price,category} =req.body
  const prod = new product({
      title,
      price,
      category,
      productpic,
    })
  try{
      prod.save()//for saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  }catch(err){
         return res.status(400).json({message:"not uploaded"})
  }      
})

//For getting the products

app.get('/getallproduts',async(req,res,next)=>{
  let productsdata; 
  try{
      productsdata=await product.find();
  }catch(err){
      console.log(err);
  }
  if(!productsdata){

      return res.status(404).json({message:"no student found."})

  }
  return res.status(200).json(productsdata)
})
app.get('/getproductbyid/:id', async (req, res, next) => {
  let productdata
  const _id = req.params.id
  try {
    productdata = await product.findById(_id)
    console.log(productdata)
  }
  catch (err) {
    console.log(err);

  }
  if (!productdata) {
    console.log("no data found")

  }
  return res.status(200).json({productdata})
})
