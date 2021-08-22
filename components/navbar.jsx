import Image from 'next/image'
import logo from '../public/images/logo.png'
import Link from "next/link";
const Navbar =() => {
    return (
        <nav>
        <div className="container">
        <div className="logoDiv">
       <Image className="logo" src={logo}  width="50px" height="50px"/> 
      <h1>reserv<span>table</span></h1>
       </div>
       
       <div className="btns">
        <Link href="/login"><a className="btn"  >login</a></Link>
        <Link href="/signup"><a   className="btn">sign up</a></Link>
        
     </div>
   </div>
 
 </nav>
    )
}
export default Navbar