import Image from 'next/image'
import logo from '../public/images/logo2.svg'
import Link from "next/link";
const Navbar =() => {
    return (
        <nav>
        <div className="container">
        <div className="logoDiv">
       <Image className="logo" src={logo}  width="40px" height="40px"/> 
      <h1>reservtable</h1>
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