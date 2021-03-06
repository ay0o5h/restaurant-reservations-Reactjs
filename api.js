import Cookies from "js-cookie";

export const URL = "https://restaurant-reservation-systme.herokuapp.com/v1/";

export const ApiLogin = (info, callback) => {
  console.log(info);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(info);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch(`${URL}/user/login`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.status) return callback(result, null);
      console.log(result.data);
      callback(null, result.errMsg);
    })
    .catch((error) => console.log("error", error));
};
export const ApiRegister = (info, callback) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(info);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${URL}/user/register`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.status) return callback(result, null);
      callback(null, result.errMsg);
    })
    .catch((error) => console.log("error", error));
};
export const ApiRestaurant = async (callback) => {
  const token = await Cookies.get("token");
  var myHeaders = new Headers();
  myHeaders.append("token", token);
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${URL}/restaurant`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      console.log(result.data);
      if (result.status) return callback(result.data);
      return callback(null, "Error Occured");
    })
    .catch((error) => console.log("error", error));
};
export const ApiReservation = async (info, callback) => {
  const token = await Cookies.get("token");
  var myHeaders = new Headers();
  myHeaders.append("token", token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(info);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${URL}/reservations`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.status) return callback(result, null);
      callback(null, result.errMsg);
    })
    .catch((error) => console.log("error", error));
};
