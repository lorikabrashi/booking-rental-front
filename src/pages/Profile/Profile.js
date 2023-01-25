import { useSelector } from 'react-redux'

const Profile = () => {
  const token = useSelector((state) => state.auth.value)

  return <>{token}</>
}
export default Profile
