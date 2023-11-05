import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { Card, CardBody, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { FcDocument } from 'react-icons/fc'
import PlaintiffPopUp from "./PopUps/PlaintiffPopUp";

export const columns = [
  {
    Header: "Serial No",
    accessor: "serial"
  },
  {
    Header: "Date",
    accessor: "date"
  },
  {
    Header: "Plaintiff",
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value, row }) => {
          const [state, setState] = useState(false)
          return <div>
            <p onClick={() => { setState(!state) }} style={{ color: 'blue' }}>{value}</p>
            <Modal isOpen={state} className="div-padding-center-modal-lg div-center mt-5" size="lg">
              <ModalBody className="bg-success" >
                <Row className="d-flex">
                  <Col md='11'> <h5 style={{ color: 'white' }}>Plaintiff: {value}</h5> </Col>
                  <Col className="flex-end">   <AiOutlineClose onClick={() => { setState(!state) }} size={30} title="CLOSE" /></Col>
                </Row>
              </ModalBody>
              <Card>
                <CardBody>
                  <PlaintiffPopUp />
                </CardBody>
              </Card>
            </Modal>
          </div>
        }
      },
      {
        Header: 'DOB',
        accessor: 'dob'
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
          return <p>N/A</p>
        }
      }
    },
    {
      Header: "Subpoena",
      accessor: "subpoena",
      Cell: ({ value, row }) => {
        if (value) {

          return <FcDocument />
        } else {
          return <p>N/A</p>
        }
      }
    }]
  }
]

export const JOBS = [{ id: 1, name: 'WL-NH' }, { id: 2, name: 'WL-NH:EDI' }]
