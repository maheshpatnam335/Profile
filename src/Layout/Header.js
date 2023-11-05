import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap";
import UserBox from "./UserBox";

const Header = () => {
    return <Fragment>
        <Card className="bg-info d-flex" style={{height:'70px', width:'100%'}}>
            <CardBody>
                <Row>
                    <Col md='11'>
                        <h1 className="fw-bold" style={{color:'white'}}>DAVID SMITH P.C.</h1>
                    </Col>
                    <Col>
                        <UserBox />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Fragment>
}
export default Header;