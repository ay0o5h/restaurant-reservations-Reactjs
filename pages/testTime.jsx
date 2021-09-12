import React, { useState } from "react";
import moment from "moment";
import { DatePicker, TimePicker,Space } from "antd";

const TestTime = () => {
//   const [startTime, setStartTime] = useState("");
//   const [test, setTest] = useState("00:00");

//   const onChange = (value, string) => {
//     setStartTime(string);
//   };

//   function range(start, end) {
//     const result = [];
//     for (let i = start; i < end; i++) {
//       result.push(i);
//     }
//     return result;
//   }

//   function disabledDateEndPicker(current) {
//     if (!startTime) return true;
//     return current && current < moment(startTime, "YYYY-MM-DD");
//   }

//   function disabledDateTimeEndPicker(current) {
//     let currentD = moment(current).format("YYYY-MM-DD");
//     let start = moment(startTime).format("YYYY-MM-DD");
//     let test = new Date(currentD) - new Date(start);

//     let ddr3 = moment(startTime).format("HH:mm");
//     setTest(ddr3);

//     if (test === 0) {
//       let hoursDisable = +moment(startTime).format("HH");

//       let minutesDisable = 0;

//       if (hoursDisable >= moment(current).format("HH")) {
//         minutesDisable = +moment(startTime).format("mm");
//       }

//       return {
//         disabledHours: () => range(0, 24).splice(0, hoursDisable), //первые 4 это то что не дизейблит 20 дизейблит
//         disabledMinutes: () => range(0, minutesDisable) //тут нужно подставить
//       };
//     }
//   }
//   function getDisabledHours(start,end) {
//     var hours = [1,2,4,5];
//     for (let i = start; i < end; i++) {
//       hours.push(i);
//     }
//     return hours;
//   }
//   function getDisabledMinutes(start,end) {
//     var hours = [1,2,4,5];
//     for (let i = start; i < end; i++) {
//       hours.push(i);
//     }
//     return hours;
//   }
  
//   return (
//     <Space direction="vertical" size={12}>
//         <TimePicker disabledHours={getDisabledHours} disabledMinutes={getDisabledMinutes} />
//         <TimePicker
//     disabledHours={() => [0, 2, 4, 6, 8, 10, 13, 15, 17, 19, 21, 23]}
//   />,
//       <DatePicker
//         showNow={false}
//         onChange={onChange}
//         format="YYYY-MM-DD HH:mm"
//         showTime={{ defaultValue: moment("00:00", "HH:mm") }}
//       />
//       <DatePicker
//         showNow={false}
//         disabledDate={disabledDateEndPicker}
//         format="YYYY-MM-DD HH:mm"
//         disabledTime={disabledDateTimeEndPicker}
//         showTime={{ defaultValue: moment(test, "HH:mm") }}
//       />
//     </Space>
//   );
};
export default TestTime

