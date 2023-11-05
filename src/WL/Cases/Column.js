import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import TabExample from "./Tabs";
import { FcDocument } from 'react-icons/fc'
import AmPmFormat from "../../utils";

export const columns = [
  {
    Header: "Serial No",
    accessor: "serial"
  },
  {
    Header: "Date",
    accessor: "date",
    Cell:({value,row})=>{
return value.replace('T', ' ')
   }
  },
  {
    Header: "Plaintiff",
    accessor:'caseId',
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value, row }) => {
          const [state, setState] = useState(false)
          return <div>
            <p onClick={() => { setState(!state) }} style={{ color: 'blue' }}>{value}</p>
            <Modal isOpen={state} className="div-padding-center-modal-lg div-center mt-5" size="lg">
              <ModalBody className="bg-info" >
                <Row className="d-flex">
                  <Col md='11'> <h5 style={{ color: 'white' }}>Plaintiff: {value}</h5> </Col>
                  <Col className="flex-end">   <AiOutlineClose onClick={() => { setState(!state) }} size={30} title="CLOSE" /></Col>
                </Row>
              </ModalBody>
              <Card className="ms-3 me-3 mt-3 mb-3">
                <CardBody>
                  <Row>
                    <TabExample data={row.original}/>
                  </Row>

                </CardBody>
              </Card>
            </Modal>
          </div>
          // return <PopUp/>
        }
      },
      {
        Header: 'DOB',
        accessor: 'dob',
         Cell:({value,row})=>{
          return AmPmFormat(value)
        }
      },
      {
        Header: 'Disease',
        accessor: 'disease'
      }
      ,
      {
        Header: 'Deceased',
        accessor: 'diceased'
      },
    ]
  }
  ,
  {
    Header: "Defendants",
    columns: [
      {
        Header: 'Total',
        accessor: 'total'
      },
      {
        Header: "Server Assigned",
        accessor: "serverAssigned"
      }, {
        Header: "Served",
        accessor: "server"
      }, {
        Header: "Payments",
        accessor: "payments"
      },
    ]
  },
  {
    Header: "Documents",
    columns: [{
      Header: 'S&C',
      accessor: "sc",
      Cell: ({ value, row }) => {
        if (value) {

          return <FcDocument />
        } else {
        return  <p>N/A</p>
        }
      }
    },
    {
      Header: "Subpoena",
      accessor: "subpoena",
      Cell: ({ value, row }) => {
        if (value) {

          return <FcDocument size={30}/>
        } else {
         return <p>N/A</p>
        }
      }
    }]
  }
]

export const JOBS = [{ id: 1, name: 'WL-NH' }, { id: 2, name: 'WL-NH:EDI' }]

const PopUp = () => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal)

  return <div>
    <Modal isOpen={modal} toggle={toggle} className="div-padding-center-modal-lg div-center" size="lg">
      <ModalHeader >
        <h5 className="div-text-bold">details</h5>
      </ModalHeader>
      <ModalBody>
        <Row className="pt-5">
          <Col>Name:</Col>
          <Col> Branch:</Col>
        </Row>

      </ModalBody>
    </Modal>
  </div>
}
export default PopUp;