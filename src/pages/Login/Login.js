import { Row, Col } from 'react-bootstrap'
import withLayout from '../../hoc/withLayout'
import LoginForm from '../../components/Forms/Login'

function Login() {
 

  return (
    <div className="main">
      <h2>Login</h2>
      <Row>
        <Col md={4}>Photo</Col>
        <Col md={{ span: 4, offset: 6 }}>
          <LoginForm />
        </Col>
      </Row>
    </div>
  )
}

export default withLayout(Login)
