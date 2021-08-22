import Image from 'next/image'
import cover from '../public/images/cover.svg';
import Link from "next/link";
import {ArrowRightOutlined} from '@ant-design/icons'
const MainLayout = () => {
    return (
        <div className="main">
      
            <div className="left">
                <h1>Book Your Table Now</h1>
                <p>Get restaurant table reservations Better online than keep a busy phone line</p>
              
                <Link href="/signup"><a className="btn"> Get Started <ArrowRightOutlined style={{ fontSize: '16px'}} /> </a></Link>
             

                </div>
            <div className="right">
            <Image className="cover" src={cover}  /> 
            </div>
     
        </div>
    )
}
export default MainLayout