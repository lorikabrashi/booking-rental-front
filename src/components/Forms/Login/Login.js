import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import api, { endpoints } from '../../../lib/api'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessages, setErrorMessages] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = []
    setErrorMessages(errors)
    if (!email) {
      errors.push('Please provide an email!')
    }
    if (!password) {
      errors.push('Please provide an password!')
    }
    if (errors.length) {
      setErrorMessages(errors)
      return
    }

    const response = await api.call(endpoints.login, { email, password })
    if (!response.confirm) {
      setErrorMessages([response.results])
      return
    }

    navigate('/profile')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {errorMessages.length > 0 &&
        errorMessages.map((elem, index) => (
          <Alert key={index} variant="danger">
            {elem}
          </Alert>
        ))}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </Form>
  )
}
export default LoginForm
