import withLayout from '../../hoc/withLayout'
import {Row, Col} from 'react-bootstrap'
import RegisterForm from '../../components/Forms/Register'

const Register = () => {
  return (
    <div className="main">
      <h2>Register</h2>
      <Row>
        <Col md={{ span: 4, offset: 6 }}>
          <RegisterForm />
        </Col>
      </Row>
    </div>
  )
}
export default withLayout(Register)
