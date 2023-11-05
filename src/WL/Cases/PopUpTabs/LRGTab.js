import { Button, Col, Row } from "reactstrap"
import InputBox from "../../../HOC/InputBox"
import { Form, Formik } from "formik"
import PageHeader from "../../../HOC/PageHeader"
import axios from "axios"
import * as Yup from 'yup'

const LRGTab = () => {
    const validationSchema = Yup.object({
        medicareID: Yup.string().required(),
        medicareNumber: Yup.string().required(),
        medicareStartDate: Yup.string().required(),
        disease: Yup.string().required(),
        dateOfDiagnosis: Yup.string().required()
    })
    const handleSubmit = values => {
        debugger
        axios.post('http://localhost:47112//org/wl/peer/peer0/addMedicareData', values).then((res) => {

        })
    }
    return <div>
        <PageHeader header='Add Medicare Information' />
        <Formik
            initialValues={{}}
             validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({ errors, values, setFieldValue, resetForm }) => {
                const handleChange = (name, value) => {
                    setFieldValue(name, value)
                }
                return <Form>
                    <Row>
                        <Col>  <InputBox name='medicareID' label='Medicare ID:' handleChange={handleChange} required={true} />
                            <p style={{ color: 'red' }}>{errors && errors.medicareID}</p></Col>
                        <Col>   <InputBox name='medicareNumber' label='Medicare Number:' handleChange={handleChange} required={true} />
                            <p style={{ color: 'red' }}>{errors && errors.medicareNumber}</p></Col>
                        <Col>   <InputBox name='medicareStartDate' type='date' label='Medicare Start Date:' handleChange={handleChange} required={true} />
                            <p style={{ color: 'red' }}>{errors && errors.medicareStartDate}</p></Col>
                    </Row>
                    <Row>
                        <Col>   <InputBox name='disease' label='Disease:' handleChange={handleChange} required={true} />
                            <p style={{ color: 'red' }}>{errors && errors.disease}</p></Col>
                        <Col>   <InputBox name='dateOfDiagnosis' type='date' label='Date Of Diagnosis' handleChange={handleChange} required={true} />
                            <p style={{ color: 'red' }}>{errors && errors.dateOfDiagnosis}</p></Col>
                        <Col></Col>
                    </Row>


                    <Row className="pt-4">
                        <Col ><Button type="submit" className="btn btn-success">Send To LRG</Button></Col>
                        {/* <Col><Button type="reset" className="btn btn-danger" onClick={() => resetForm()}>Clear</Button></Col> */}

                    </Row>
                </Form>
            }}
        </Formik>
    </div>
}
export default LRGTab;