import axios from "axios"

// const apiEndpoint = "http://localhost:3000/api/v1/recipes"

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectedError) {
    // console.log(error);
    console.error("An unexpected error occurred.")
  }

  return Promise.reject(error)
})

// axios({
//   method: "get",
//   url: apiEndpoint,
//   params: {
//     title: "kaali daal"
//   }
// })
//   .then(response => {
//     console.log(response)
//     console.log("response recieved...")
//   })
//   .catch(error => {
//     console.log("error...")
//     console.log(error)
//   })

export default axios

// export default {
//   get: axios.get,
//   put: axios.put,
//   post: axios.post
// }
