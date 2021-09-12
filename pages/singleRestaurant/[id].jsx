import Head from 'next/head';
import {Modal, DatePicker, Empty,Form, Button,InputNumber,Spin,Popover,Card, message } from 'antd';
const { RangePicker } = DatePicker;
import Cookies from "js-cookie";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { URL ,ApiReservation } from "../../api";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import moment from 'moment';
const singleRestaurant=()=>{
  const [tables, setTables] = useState([]);
  const Router = useRouter();
  const [token, setToken] = useState();
  const [restaurant, setRestaurant] = useState();
  const [book, setBook] = useState(false);
  const { id } = Router.query;
  const [tableId, setTableId] = useState()
  const [bookTime, setBookTime] = useState()
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const [numOfPeople, setNumOfPeople] = useState(0)
  const [show , setShow]= useState(false)
  const getSingleResturant = async () => {
    var myHeaders = new Headers();
    myHeaders.append("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjMwNzA0NjU4fQ.yfRmxPDxAXvdl5Xzms6Y6nK0FJfgDYmQNgXbZu1Qkr0");
    myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch(`${URL}/restaurant/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {setRestaurant(result.data); console.log(restaurant)  ; })
        .catch((error) => console.log("error", error));
  }
  const getTables = () => {
    const user = Cookies.get("user");
    user ? setToken(user) :Router.push("/login")
    var myHeaders = new Headers();
    myHeaders.append("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjMwNzA0NjU4fQ.yfRmxPDxAXvdl5Xzms6Y6nK0FJfgDYmQNgXbZu1Qkr0");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(`${URL}/tables/restaurant/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) =>  setTables(result.data))
      .catch((error) => console.log("error", error));
      console.log(tables);
  }
  useEffect(() => {
    getSingleResturant();
    getTables();
  }, [Router]);

  const handleRect =  (id) => {
    const tableId=id
    setTableId(tableId);
    console.log(tableId);
    var myHeaders = new Headers();
myHeaders.append("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjMwNzA0NjU4fQ.yfRmxPDxAXvdl5Xzms6Y6nK0FJfgDYmQNgXbZu1Qkr0");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${URL}/tables/${tableId}/reservations`, requestOptions)
  .then(response => response.json())
  .then(result => {
    const bookTime=result.data;
    setBookTime(bookTime);})
  .catch(error => console.log('error', error));

  setShow(true)
  // Modal.info({
  //   title: 'This is a notification message',
  //   content: (
  //     <div>
  //     {!!bookTime ? (!bookTime?.length > 0 ? (<Empty />) : 
  //      ( bookTime.map((b) =>(
         
  //         <p key={b.id}>{b.reservationsDate}</p>
  //       )))):(<Spin className="spin" size="large" /> )}
  //      </div>),
  //   onOk() {},
  // })
  };

function onChangeStart( value ,dateString) {
  const startTime=dateString;
  setStartTime(startTime)
  console.log(startTime);
}
function onChangeEnd( value ,dateString) {
  const endTime=dateString;
  setEndTime(endTime)
  console.log(endTime);
}
function onChangeNum(value) {
  const numOfPeople=value
  setNumOfPeople(numOfPeople)
  console.log(numOfPeople);
}
const onFinish = () => {
  const packet= {
    discription:"ok",
    reservationsDate:startTime,
    reservationsExpires:endTime,
    noumberOfPeople:numOfPeople,
    restaurantId:parseInt(id),
    tableId
  }
  console.log(packet)
  ApiReservation(packet, (data, error) => {
    console.log(data)
    if (error) return message.error(error);
    message.success("Successfully booked")
  });
};
function disabledDate(current) {
  return current && current < moment().startOf('day');
}
useEffect(() => {
  show?
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
        {
          bookTime?.map((b) =>(
           
            <p key={b.id}>{b.reservationsDate}</p>
          ))}
         </div>),
      onOk() {},
    }):null
  
},[bookTime])
    return(
       <>  
        <Head>
        <title>{!!restaurant ? restaurant.name : null }</title>  
      </Head>  
    <Navbar/>
    {!!restaurant ? 
    <img src={restaurant.imgUrl }  width="100%" height="600px"/> :null}
        <div className="singleRestaurant">
          <div className="left"  >
              <svg  version="1.1" baseProfile="full"  width="500" height="500" >
              {!!restaurant ? (       
             <image className="imgMap" href={restaurant.mapUrl}   x="0" y="0" height="500px" width="500px"/>
            ):null}
             
              {!!tables ? (!tables?.length > 0 ? (<Empty />) : 
              ( tables.map((table) => (              
                  <Popover content={"this table has " +table.chairs + " seats"} title={"table number " + table.number }>
                 <circle stroke="orange" onClick={()=>handleRect(table.id)} strokeWidth={book?20:0} className="circle" 
                 key={table.id} cx={table.x} cy={table.y} r="15" fill={tableId===table.id ? "red":"#882121"  }></circle>
                 </Popover>
                )))) : (<Spin className="spin" size="large" />  )}     
               </svg>  
              </div> 
         <div className="right">
         <div className="site-card-border-less-wrapper">
    <Card className="card-res" title="Make Reseravation" bordered={true}  style={{ width: 500 }}>
    <Form className="form" initialValues={{remember: true,}} 
           onFinish={onFinish} >
          <Form.Item name="reservationsDate"
        rules={[{required: true, message: 'Please select a start reservation time',},]}>
       <DatePicker disabledDate={disabledDate}   disabledHours={() => [0, 2, 4, 6, 8, 10, 13, 15, 17, 19, 21, 23]} showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm"
      onChange={onChangeStart}  className="picker" placeholder="pleace choice  date of reservation"/>
      </Form.Item>
      <Form.Item name="reservationsExpires"
        rules={[{required: true, message: 'Please select a end reservation time',},]}>
       <DatePicker disabledDate={disabledDate} showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm"
      onChange={onChangeEnd}  className="picker" placeholder="pleace enter expier  date of reservation"/>
      </Form.Item>
      <Form.Item name="noumberOfPeople">
    <InputNumber  placeholder="pleace enter no of people"  className="picker-num" min={1} max={100}  onChange={onChangeNum} />
     </Form.Item>
     <Form.Item >
    <Button type="primary" htmlType="submit">Book now</Button>
    </Form.Item>
    </Form>
    </Card>
  </div>,
    </div>
    {/* <div>
      {!!bookTime ? (!bookTime?.length > 0 ? (<Empty />) : 
       ( bookTime.map((b) =>(
         <div className="pop-test">
          <p key={b.id}>{ moment(b.reservationsDate).utc().format('YYYY-MM-DD HH:mm ')}</p>
          <p key={b.id}>{ moment(b.reservationsExpires).utc().format('YYYY-MM-DD HH:mm')}</p>
          <p>{moment().utc(30).format('YYYY-MM-DD HH:mm ')}</p>
          </div>
        )))):(<p>  </p>)}
        </div>
    </div> */}
    </div>
    <Footer/>
    </>
    )
}
export default singleRestaurant;