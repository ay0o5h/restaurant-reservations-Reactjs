import { DatePicker, Space,Form,Avatar, Button, Popover,InputNumber} from 'antd';
const { RangePicker } = DatePicker;
import Image from 'next/image'
import {ArrowRightOutlined,UserOutlined} from '@ant-design/icons';
import Cookies from "js-cookie";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { URL } from "../../api";
import {ApiRestaurant} from '../../api'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
const singleRestaurant=()=>{
  const [tables, setTables] = useState([]);

  const Router = useRouter();
  const [token, setToken] = useState();
  const [restaurant, setRestaurant] = useState();
  const { id } = Router.query;
   let x=200;
   let y=200;
   let mapUrl="https://i.ibb.co/7kg8Yxw/1.png"
  useEffect(() => {
    const user = Cookies.get("user");
    user ? setToken(user) :Router.push("/login")
    var myHeaders = new Headers();
    myHeaders.append("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjMwNjIxNjMyfQ.GdBjxrJ5mFsCIHNJudoIhSRlgZXn9GhW9Iboz99WgXo" );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(`https://restaurant-reservation-systme.herokuapp.com/v1/tables/restaurant/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) =>  (setTables(result.data)))
      .catch((error) => console.log("error", error));
      console.log(tables);
  }, [Router]);
  const handleRect =  () => {
    console.log("hello")
  };

     const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}
function onChangeNum(value) {
  console.log('changed', value);
}

    return(
      
       <>
       
    <Navbar/>
        <div className="singleRestaurant">
          <div className="left"  >
          {!! tables? (
          <p>{tables.x}</p>
          ) :null}
              <svg version="1.1" baseProfile="full"  width="500" height="500" >
          
             <image  href={mapUrl}   x="0" y="0" height="400px" width="400px"/>

             
      
                 <circle className="circle" cx={x} cy={y} r="10" fill="green"></circle>
      
</svg>
             {/* <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/7kg8Yxw/1.png"   x="0" y="0" height="400px" width="400px"/>
               <circle cx="50" cy="60" r="10" fill="red" onClick={handleRect} ></circle>
                <circle cx="140" cy="60" r="10" fill="green"></circle>
                <circle cx="50" cy="150" r="10" fill="green"></circle>
                <circle cx="140" cy="150" r="10" fill="green"></circle>
                <circle cx="100" cy="100" r="10" fill="green"></circle>
                <circle cx="50" cy="210" r="10" fill="green" ></circle>
                <circle cx="140" cy="210" r="10" fill="green"></circle>
                <circle cx="100" cy="180" r="10" fill="green"></circle>
                <circle cx="50" cy="270" r="10" fill="green"></circle>
                <circle cx="140" cy="270" r="10" fill="green"></circle>
                <circle cx="100" cy="240" r="10" fill="green"></circle>
                 </svg>        */}
                  {/* <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/fSQs9pY/restaurant-3.png"   x="0" y="0" height="400px" width="400px"/>
               <circle cx="100" cy="60" r="10" fill="red" onClick={handleRect} ></circle>
               <circle cx="100" cy="120" r="10" fill="green"></circle>
               <circle cx="100" cy="180" r="10" fill="green"></circle>
                <circle cx="100" cy="300" r="10" fill="green"></circle>
                <circle cx="100" cy="240" r="10" fill="green"></circle>
               <circle cx="180" cy="60" r="10" fill="green"></circle>
               <circle cx="180" cy="120" r="10" fill="green"></circle>
               <circle cx="180" cy="180" r="10" fill="green"></circle>
                <circle cx="180" cy="300" r="10" fill="green"></circle>
                <circle cx="180" cy="240" r="10" fill="green"></circle>
               <circle cx="270" cy="60" r="10" fill="green"></circle>
               <circle cx="270" cy="120" r="10" fill="green"></circle>
               <circle cx="270" cy="180" r="10" fill="green"></circle>
                <circle cx="270" cy="300" r="10" fill="green"></circle>
                <circle cx="270" cy="240" r="10" fill="green"></circle>
               <circle cx="360" cy="60" r="10" fill="green"></circle>
               <circle cx="360" cy="120" r="10" fill="green"></circle>
               <circle cx="360" cy="180" r="10" fill="green"></circle>
                <circle cx="360" cy="300" r="10" fill="green"></circle>
                <circle cx="360" cy="240" r="10" fill="green"></circle>
                 </svg>      */}
                    {/* <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/25p9g6T/restaurant-2.png"   x="0" y="0" height="400px" width="400px"/>
               <circle cx="180" cy="60" r="10" fill="green"></circle>
               <circle cx="270" cy="60" r="10" fill="green"></circle>
               <circle cx="360" cy="60" r="10" fill="green"></circle>
               <circle cx="180" cy="120" r="10" fill="green"></circle>
               <circle cx="270" cy="120" r="10" fill="green"></circle>
               <circle cx="360" cy="120" r="10" fill="green"></circle>
               <circle cx="180" cy="180" r="10" fill="green"></circle>
               <circle cx="270" cy="180" r="10" fill="green"></circle>
               <circle cx="360" cy="180" r="10" fill="green"></circle>
               <circle cx="40" cy="300" r="10" fill="green"></circle>
             <circle cx="100" cy="300" r="10" fill="green"></circle>
             <circle cx="270" cy="300" r="10" fill="green"></circle>
             <circle cx="180" cy="300" r="10" fill="green"></circle>
             <circle cx="360" cy="300" r="10" fill="green"></circle>
                 </svg>   */}
                     {/* <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/B3G6gyz/restaurant-4.png"   x="0" y="0" height="400px" width="400px"/>
             <circle cx="40" cy="60" r="10" fill="green"></circle>
             <circle cx="100" cy="60" r="10" fill="green"></circle>
               <circle cx="180" cy="60" r="10" fill="green"></circle>
               <circle cx="270" cy="60" r="10" fill="green"></circle>
               <circle cx="40" cy="120" r="10" fill="green"></circle>
             <circle cx="100" cy="120" r="10" fill="green"></circle>
               <circle cx="180" cy="120" r="10" fill="green"></circle>
               <circle cx="270" cy="120" r="10" fill="green"></circle>
               <circle cx="40" cy="180" r="10" fill="green"></circle>
             <circle cx="100" cy="180" r="10" fill="green"></circle>
               <circle cx="180" cy="180" r="10" fill="green"></circle>
               <circle cx="270" cy="180" r="10" fill="green"></circle>
               <circle cx="40" cy="240" r="10" fill="green"></circle>
             <circle cx="100" cy="240" r="10" fill="green"></circle>
             <circle cx="270" cy="240" r="10" fill="green"></circle>
             <circle cx="180" cy="240" r="10" fill="green"></circle>
             <circle cx="40" cy="300" r="10" fill="green"></circle>
             <circle cx="100" cy="300" r="10" fill="green"></circle>
                 </svg>   */}
              </div> 
         <div className="right">
           <Form className="form" initialValues={{remember: true,}} 
           onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item name="date"
        rules={[{required: true, message: 'Please select a date',},]}>
      <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm"
      onChange={onChange} onOk={onOk} className="picker"/>
      </Form.Item>
      <Form.Item name="numOfPeoplr"
     rules={[{required: true,message: 'Please select a number',},]}>
    <InputNumber className="picker-num" min={1} max={100}  onChange={onChangeNum} />
     </Form.Item>
     <Form.Item >
    <Button type="primary" htmlType="submit">Book now</Button>
    </Form.Item>
    </Form>
    </div>
    </div>
    <Footer/>
    </>
    )
}
export default singleRestaurant;