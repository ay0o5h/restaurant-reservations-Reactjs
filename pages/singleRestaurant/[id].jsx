import { DatePicker, Empty,Form, Button,InputNumber,Spin} from 'antd';
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
      .then((result) =>  setTables(result.data))
      .catch((error) => console.log("error", error));
      console.log(tables);
  }, [Router]);

  const handleRect =  () => {
    console.log("hello")
  };

     const onFinish = (values) => {
    console.log('Success:', values);
  };
  
function onChange( dateString) {
 
  console.log('Formatted Selected Time: ', dateString);
}
function onChangeNum(value) {
  console.log('changed', value);
}

    return(
       <>    
    <Navbar/>
        <div className="singleRestaurant">
          <div className="left"  >
              <svg  className="css-outline" version="1.1" baseProfile="full"  width="500" height="400" >
              {!!tables ? (
              !tables?.length > 0 ? (
                <Empty />
              ) : (
                tables.map((table) => (              
                  <circle className="circle" key={table.id} cx={table.x} cy={table.y} r="10" fill={!table.isAvailable ? "green" : "red"}></circle>

                ))
              )
            ) : (
              <Spin className="spin" size="large" />
             
            )}
          
            
       
             
        
      
</svg>
        
              </div> 
         <div className="right">
           <Form className="form" initialValues={{remember: true,}} 
           onFinish={onFinish} >
          <Form.Item name="reservationStart"
        rules={[{required: true, message: 'Please select a start reservation time',},]}>
       <DatePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm"
      onChange={onChange}  className="picker"/>
      </Form.Item>
      <Form.Item name="reservationExp"
        rules={[{required: true, message: 'Please select a end reservation time',},]}>
       <DatePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm"
      onChange={onChange}  className="picker"/>
      </Form.Item>
      <Form.Item name="numOfPeoplr"
     rules={[{required: true,message: 'Please select a number',},]}>
    <InputNumber  placeholder="no of people"  className="picker-num" min={1} max={100}  onChange={onChangeNum} />
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