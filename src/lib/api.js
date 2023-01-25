import axios from 'axios'

export const endpoints = {
  login: {
    url: '/auth/login',
    method: 'POST',
  },
  register: {
    url: '/auth/register',
    method: 'POST',
  },
  verifyAccount: {
    url: '/auth/verify-account',
    method: 'GET'
  }
}

const api = {
  call: async (endpoint, data = {}) => {
    try {
      const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })
      const config = {
        ...endpoint,
        data: { ...data },
      }
      const result = await axiosInstance(config)
      return result.data
    } catch (err) {
       console.log(err)
      return err.response.data
    }
  },
}

export default api
