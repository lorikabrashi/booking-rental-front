import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import withLayout from '../../hoc/withLayout'
import api, { endpoints } from '../../lib/api'

const Profile = () => {
  const token = useSelector((state) => state.auth.value)
  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await api.call(endpoints.me, {}, token)
      setData(response.results)
    }
    getData()
  }, [token])
  
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
export default withLayout(Profile)
