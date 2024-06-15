import image1 from './image1.jpg'
function ImageEvent(){
    const a=(e)=>{
        e.target.style.height='500px'
        e.target.style.width='600px'
        
    }
    const b=(e)=>{
        e.target.style.height='200px'
        e.target.style.width='300px'
    }
    return(
        <div>
            <img src={image1} alt="img" onMouseOver={a} onMouseOut={b}/>
            <button>Change background</button>
        </div>
        
    )
}
export default ImageEvent;