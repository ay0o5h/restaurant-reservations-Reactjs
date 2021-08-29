import { DatePicker, Space,Form,Button } from 'antd';
const { RangePicker } = DatePicker;
import Image from 'next/image'
// import cover from '../public/images/3.png';
import {ArrowRightOutlined} from '@ant-design/icons';
import Cookies from "js-cookie";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { URL } from "../../api";
import {ApiRestaurant} from '../../api'
const singleRestaurant=()=>{
  const Router = useRouter();
  const [tables, setTables] = useState();
  const { id } = Router.query;
  const [restaurant, setRestaurant] = useState();
  useEffect(() => {
    ApiRestaurant((data, error) => { 
      console.log(data)
      if (error) return message.error(error);
      setRestaurant(data);
      console.log(data)
    });
  }, []);
  useEffect(() => {
    const token = Cookies.get("token");
    var myHeaders = new Headers();
    myHeaders.append("token", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${URL}/tables/restaurant/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setTables(result.data))
      .catch((error) => console.log("error", error));
  }, [Router]);
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
    return(
        <>
    
        <div className="singleRestaurant">
        {restaurant?.map((res) => (
                
                <div className="left" key={res.id}>
                <img className="cover" width="100%" src={res.mapUrl}  /> 
              </div>
              ))}
            
       
     
         <div className="right">
           <Form
     className="form"
      
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
          <Form.Item
     
        name="date"
        rules={[
          {
            required: true,
            message: 'Please select a date',
          },
        ]}
     >
   
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
      className="picker"
    />
 
      </Form.Item>
       <Form.Item >
        <Button type="primary" htmlType="submit">
         <ArrowRightOutlined style={{padding:20,fontSize:16,color:"white"}}/>
        </Button>
      </Form.Item>
    </Form>
        </div>
       
        </div>
        </>
    )
}
export default singleRestaurant;