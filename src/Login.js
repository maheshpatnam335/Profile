import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Col, Input, Row } from 'reactstrap';
import * as Yup from 'yup'
import { Form, Formik } from "formik"
import InputBox from './HOC/InputBox';
import PageHeader from './HOC/PageHeader';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    document.title = 'Login';
    const history = useHistory();
    const handleSubmit = async (values) => {
        localStorage.setItem('login', values.username)
        const data = {
            userNameLogin_: values.username,
            userPasswordLogin_: values.password,
            org1: 'wl',
            peer1: 'peer0'
        }
        axios.post('http://localhost:47112/login', data).then((res) => {
        })
        history.push('/WL/Cases/CaseList')
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("UserName is required."),
        password: Yup.string().required("Password is required.")
    })
    return <div>
        <Row md='12' className="pt-5 p-4 pb-5">
            <Col md='4'></Col>
            <Col md='4'>
                <p className='text-center'> <PageHeader header="Login" /></p>
                <Card className="p-4" style={{ borderRadius: '15px' }}>
                    <CardBody className="pt-4" style={{ borderRadius: '15px' }} >
                        <Formik
                            initialValues={{}}
                            validationSchema={validationSchema}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            {({ errors, values, setFieldValue, resetForm }) => {
                                const handleChange = (name, value) => {
                                    setFieldValue(name, value)
                                }
                                return <Form className="">
                                    <InputBox name='username' label='UserName' handleChange={handleChange} />
                                    <p style={{ color: 'red' }}>{errors && errors.username}</p>
                                    <InputBox name='password' type='password' label='Password' handleChange={handleChange} />
                                    <p style={{ color: 'red' }}>{errors && errors.password}</p>
                                    <Row className="pt-4">
                                        <Col></Col>
                                        <Col ><Button type="submit" className="btn btn-success">Login</Button></Col>
                                        {/* <Col><Button type="reset" className="btn btn-danger" onClick={() => resetForm()}>Clear</Button></Col> */}
                                        <Col></Col>

                                    </Row>
                                </Form>
                            }}
                        </Formik>
                    </CardBody>
                </Card>
            </Col>
            <Col></Col>

        </Row>
    </div>
}
export default Login;