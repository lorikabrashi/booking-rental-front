import withLayout from '../../hoc/withLayout'
import { Row, Col } from 'react-bootstrap'
import RegisterForm from '../../components/Forms/Register'
import { useState } from 'react'
const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false)

  return (
    <div className="main">
      <h2>Register</h2>
      <Row>
        <Col md={{ span: 4, offset: 6 }}>{!isRegistered ? <RegisterForm setRegistered={setIsRegistered} /> : <h3>Please verify your account</h3>}</Col>
      </Row>
    </div>
  )
}
export default withLayout(Register)
