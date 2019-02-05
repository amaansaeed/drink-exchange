import axios from 'axios'

// axios.interceptors.response.use(null, error => {
//   const expectedError =
//     error.response && error.response.status >= 400 && error.response.status < 500

//   if (!expectedError) {
//     // console.log(error);
//     console.error("An unexpected error occurred.")
//   }

//   return Promise.reject(error)
// })

// export default axios

const http = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: { 'x-requested-by': 'drink-exchange' }
})

export default http
