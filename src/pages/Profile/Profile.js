import { useSelector } from 'react-redux'
import withLayout from '../../hoc/withLayout'

const Profile = () => {
  const token = useSelector((state) => state.auth.value)

  return <>{token}</>
}
export default withLayout(Profile) 
