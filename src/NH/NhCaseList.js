import React, { useEffect, useState } from 'react';
import { Button, Col, Input, Row } from 'reactstrap';
import Excel from '../Images/download.jpg';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UseMyTable from '../HOC/PaginationTable';
import { JOBS, columns } from './Column';
const NHCaseList = () => {
    const [state, setState] = useState({ cases: [] });
    var data = [];
    document.title = 'Law Firm'
    useEffect(() => {
        axios.get('http://localhost:47112/org/nh/peer/peer0/allCasesData', {
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            },
        }).then((res) => {
            if (res.data.Code == 200) {
                setState({ ...state, cases: res.data.cases });
            }
        })
    }, [])

    const handleChange = (name, value) => {

    }


    state.cases.length > 0 && state.cases.forEach(element => {
        debugger
        data.push({
            serial: element.Serial,
            date: element.Date,
            name: element.Plaintiff,
            dob: element.Plaintiffobj.dateOfBirth,
            disease: '',
            diceased: element.Plaintiffobj.deceased == false ? 'No' : 'Yes',
            total: element.Defendants.length,
            serverAssigned: element.Defendants[0].ServerAssigned===true?'Yes':'No',
            server: element.DefNumServed,
            payments: element.Defendants[0].isPaid === true ? 'Yes' : 'No',
            subpoena: element.DocumentType === 'SubPoena' ? true : false,
            sc: element.DocumentType === 'S&C' ? true : false,
        })
    });
    return <div>
        <Row className='mt-3'>
            <Col md='2' className='d-flex ms-5'><Col>
                <label className='mt-2 ms-3'>Job Listing :</label></Col>
                <Col><Input type="select" name='gender' onChange={(e) => handleChange(e.target.name, e.target.value)}>
                    {JOBS.map((i, j) => {
                        return <option value={i.id}>{i.name}</option>
                    })}
                </Input></Col>
            </Col>
            <Col md='8' />
            <Col className='d-flex mt-2'>
                <Col />
                <Col>  <img src={Excel} width={20} height={20} title='EXPORT TO EXCEL' /> </Col>
            </Col>
        </Row>
        <Row className='ms-5 me-5'>
            <UseMyTable columns={columns} data={data} />
        </Row>
    </div>
}
export default NHCaseList;