import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap";
import UserBox from "./UserBox";

const NHHeader = () => {
    return <Fragment>
        <Card className="bg-success" style={{ height: '70px' }}>
            <CardBody>
                <Row>
                    <Col md={11}>
                        <h2 className="" style={{ color: 'white' }}>NH SERVING COMPANY
                        </h2>
                    </Col>
                    <Col>
                        <UserBox />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Fragment>
}
export default NHHeader;