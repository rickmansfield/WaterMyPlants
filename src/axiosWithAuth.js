import axios from "axios";
  
// export const axiosWithAuth = () => {
//   return axios.create({
//     baseURL:'https://wmp-api.herokuapp.com',
//     headers: {
//       Authorization: localStorage.getItem("token"),
//     }
//   });
// };
export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  console.log('token', token)
  return axios.create({
      headers: {
          Authorization: token
      },
      baseURL: 'https://wmp-api.herokuapp.com'
  });
}
//   export const axiosWithAuth = () => {
//     const token = JSON.parse(localStorage.getItem('token'))
//     console.log('token', localStorage.getItem('token'))
//     return axios.create({
//         headers: {
//             Authorization: token
//         },
//         baseURL: "https://wmp-api.herokuapp.com/"
//     })
// }
