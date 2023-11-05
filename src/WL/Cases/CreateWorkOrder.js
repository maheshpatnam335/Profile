import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap';
import PageHeader from '../../HOC/PageHeader';
import { Form, Formik } from 'formik';
import InputBox from '../../HOC/InputBox';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import DropdownList from "react-widgets/DropdownList";
import * as Yup from 'yup'
const CreateWorkOrder = () => {
    const history = useHistory();
    const validationSchema = Yup.object({
        plaintiffFirstName: Yup.string().required('Please Enter Plaintiff First Name'),
        plaintiffLastName: Yup.string().required('Please Enter Plaintiff Last Name'),
        plaintiffReferenceID: Yup.string().required('Please Enter Plaintiff Reference Id'),
        plaintiffPhoneDetails: Yup.number().min(10).max(10).required('Please fill Plaintiff Phone (10 digits)'),
        plaintiffEmailDetails: Yup.string().email().required('Please Fill Email(abc@gmail.com)'),
        plaintiffDateOfBirth: Yup.string().required('Please Enter Date Of Birth'),
        plaintiffMaritalStatus: Yup.string().required('Please Enter Marital Status'),
        plaintiffAddress1: Yup.string().required('plaintiffAddress1'),
        plaintiffAddressCity: Yup.string().required('Please Enter City'),
        plaintiffAddressCountry: Yup.string().required('Please Enter Country'),
        plaintiffAddressState: Yup.string().required('Please Enter State'),
        plaintiffAddressZipCode: Yup.string().required('Please Enter zipcode'),
        defendantName: Yup.string().required('Please Enter Defendant Name'),
        defendantAddress: Yup.string().required('Please Enter Defendant Address')
    })
    const handleSubmit = (values) => {
        let org = '';
        let peer = ''

        axios.post(`http://localhost:47112/org/${org}/peer/${peer}/createCase`, values).then((res) => {

        })
        history.push('/WL/Cases/CaseList')
    }
    return <div>
        <div style={{ marginLeft: '15%' }}> <PageHeader header='Create WorkOder' /></div>
        <Card style={{ marginLeft: '15%', marginRight: '15%', marginBottom: '5%' }}>
            <CardBody>
                <Formik
                    initialValues={{}}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleSubmit(values)}>
                    {({ values, errors, setFieldValue }) => {
                        const handleChange = (name, value) => {
                            setFieldValue(name, value)
                        }
                        return <Form>
                            <p className='fw-bold ms-3 mt-2'> Serving film :</p>
                            <Card className='ms-3 me-3'>
                                <CardBody>
                                    <Row>
                                        <Col>Name:</Col>
                                        <Col>Email:</Col>
                                        <Col>Phone:</Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <p className='fw-bold ms-3  mt-5'> Plaintiff :</p>
                            <Card className='ms-3 me-3'>
                                <CardBody>
                                    <Row >
                                        <Col>
                                            <InputBox name='plaintiffFirstName' label='First Name' handleChange={handleChange} />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffFirstName}</p> </Col>
                                        <Col>  <InputBox name='plaintiffLastName' label='Last Name' handleChange={handleChange} />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffLastName}</p>
                                        </Col>
                                        <Col>
                                            <InputBox name='plaintiffReferenceID' label='Client Ref Id' handleChange={handleChange} />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffReferenceID}</p> </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col>
                                            <InputBox name='plaintiffPhoneDetails' label='Phone Number' placeholder="xxxxxxxxxx" handleChange={handleChange} />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffPhoneDetails}</p>
                                        </Col>
                                        <Col>  <InputBox type='email' name='plaintiffEmailDetails' label='Email' handleChange={handleChange} />
                                            <p style={{ color: 'red' }}> {errors && errors.plaintiffEmailDetails}</p>
                                        </Col>
                                        <Col>
                                            <InputBox type='date' name='plaintiffDateOfBirth' label='Date Of Birth' handleChange={handleChange} />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffDateOfBirth}</p>
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col>  <InputBox type='number' name='plaintiffAge' label='Age' handleChange={handleChange} /></Col>
                                        <Col><label>Gender</label>
                                            <DropdownList name='plaintiffGender'
                                                defaultValue="Choose Gender"
                                                data={["Male", "Female", "Other"]}
                                            /></Col>
                                        <Col> <label>Maritial Status</label>
                                            <DropdownList name='plaintiffMaritalStatus'
                                                defaultValue=" Choose Marital Status"
                                                data={["Married", "Unmarried"]}
                                            />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffMaritalStatus}</p>
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col>  <InputBox name='plaintiffSpouseName' label='Spouse Name' handleChange={handleChange} /></Col>
                                        <Col className='mt-4'>
                                            <label>Deceased</label>
                                            <Input className='ms-2 mt-1' name='plaintiffDeceased' type='checkbox' onChange={(e) => handleChange(e.target.name, e.target.value)} />
                                        </Col>
                                        <Col>  <InputBox name='plaintiffDateOfDeath' label='Date Of Death' type='date' handleChange={handleChange} /></Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col>
                                            <InputBox name='plaintiffAddress1' label='Address Line1' handleChange={handleChange} />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffAddress1}</p>
                                        </Col>
                                        <Col>   <InputBox name='plaintiffAddress2' label='Address Line2' handleChange={handleChange} /></Col>
                                        <Col>
                                            <InputBox name='plaintiffAddressCity' label='City' handleChange={handleChange} />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffAddressCity}</p>
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col>
                                            <label className='mt-2'>Country:</label>
                                            <DropdownList name='plaintiffAddressCountry'
                                                defaultValue=" Choose Country"
                                                data={["United States", "Canada"]}
                                            />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffAddressCountry}</p>

                                        </Col>
                                        <Col>
                                            <label className='mt-2'>State:</label>
                                            <DropdownList name='plaintiffAddressState'
                                                defaultValue=" Choose State"
                                                data={["State1", "State2"]}
                                            />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffAddressState}</p>

                                        </Col>

                                        <Col>
                                            <InputBox name='plaintiffAddressZipCode' label='Zip Code' handleChange={handleChange} required={true} />
                                            <p style={{ color: 'red' }}>{errors && errors.plaintiffAddressZipCode}</p>

                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col>  <InputBox type='number' name='plaintiffEin' label='EIN' handleChange={handleChange} /></Col>
                                        <Col>  <InputBox name='plaintiffSsn' label='SSN' placeholder="xxx-xx-xxxx" maxlength="11" handleChange={handleChange} /></Col>
                                        <Col>  </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            <p className='fw-bold mt-5 ms-3 '> Defendants :</p>
                            <Card className='ms-3 me-3'>
                                <CardBody>
                                    <Row className=''>
                                        <Col>
                                            <InputBox name='defendantName' label='Name' handleChange={handleChange} required={true} />
                                            <p style={{ color: 'red' }}>{errors && errors.defendantName}</p>

                                        </Col>
                                        <Col>
                                            <InputBox name='defendantAddress' label='Address' handleChange={handleChange} required={true} />
                                            <p style={{ color: 'red' }}>{errors && errors.defendantAddress}</p>

                                        </Col>
                                    </Row>
                                    <Row className='mt-3'><Col md='2'><Button className='bg-info'>Add Defendent</Button></Col></Row>
                                </CardBody>
                            </Card>

                            <p className='fw-bold mt-5 ms-3 '> Documents :</p>
                            <Card className='ms-3 me-3'>
                                <CardBody>
                                    <Row className=''>

                                        <Col>  <Button className='bg-info' type='reset'>
                                            <input type='file' id='uploaddoc' style={{ display: 'none' }} />
                                            <label htmlFor='uploaddoc'>Upload S&C</label>
                                        </Button>
                                        </Col>
                                        <Col>  </Col>
                                        <Col>   <Button className='bg-info' type='reset'>
                                            <input type='file' id='uploaddoc' style={{ display: 'none' }} />
                                            <label htmlFor='uploaddoc'>Upload Subpoena</label>
                                        </Button></Col>
                                        <Col> </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            <p className='fw-bold mt-5 ms-3 '> Description :</p>
                            <Card className='ms-3 me-3'>
                                <CardBody>
                                    <Row className=''>
                                        <textarea></textarea>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Row className='mt-3 me-5 ms-5'>
                                <Button className='bg-success' type='submit' >Create WorkOder</Button>
                            </Row>
                        </Form>
                    }}
                </Formik>
            </CardBody>
        </Card>
    </div>
}
export default CreateWorkOrder;