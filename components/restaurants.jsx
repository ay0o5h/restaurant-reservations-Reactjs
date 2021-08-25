import {ApiRestaurant} from '../api'
import { useEffect,useState } from "react";
import {Spin,Empty} from 'antd';
const Restaurants =() => {
  const [restaurant, setRestaurant] = useState();
  useEffect(() => {
    ApiRestaurant((data, error) => { 
      if (error) return message.error(error);
      setRestaurant(data);
      console.log(data)
    });
  }, []);
    return (
        <div className="restaurants">
            <h1>Restaurants</h1>
            <div className="cards-list">
            {!!restaurant ? (
              !restaurant?.length > 0 ? (
                <Spin className="spin" size="large" />
              ) : (
                restaurant?.map((rest) => (
                  <div className="card" key={rest.id}>
                  <div className="card_image"> <img src={rest.image} /> </div>
                     <div className="card_title title-white">
                       <p>{rest.name}</p>
                         </div>
                           </div>
                ))
              )
            ) : (
              <Empty />
            )}
          </div>
        </div>
    )
}
export default Restaurants