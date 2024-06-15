import image1 from './image1.jpg'
//importing from samefolder
import image2 from '../image2.jpg'
//importing image from current folder parent 
const Image=()=>{
    return(
        <div>
            <h1>Image</h1>
            <img src={image1} style={{width:"400px",height:"300px",borderRadius:"20px"}} alt="img"/>
            <h1>Image 2</h1>
            <img src={image2} alt="img"/>
            <h1>Image 3</h1>
            {/* importing image from public folder */}
            <img src="/image3.jpg" alt="img"/>
        </div>
    )
}
export default Image;