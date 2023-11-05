import React, { Fragment, useEffect, useState } from 'react';
import Tabs from 'react-responsive-tabs';
import PlaintiffTab from './PopUpTabs/PlaintiffTab';
import NHTab from './PopUpTabs/NHTab';
import LRGTab from './PopUpTabs/LRGTab';
import axios from 'axios';
import Loading from '../../HOC/Loading';
import { Col, Row } from 'reactstrap';






export default function TabExample(props) {
    const [state, setState] = useState({ cases: [] });

    const tabsContent = [
        {
            title: 'Plaintiff',
            content: <PlaintiffTab data={state} />
        },
        {
            title: 'NH',
            content: <NHTab data={state} />
        }, {
            title: 'LRG',
            content: <LRGTab />
        },
    ];

    useEffect(() => {
        axios.get('http://localhost:47112/org/wl/peer/peer0/allCasesData', {
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            },
        }).then((res) => {
            if (res.data.Code == 200) {
                setState({ ...state, cases: res.data.cases.filter(x=>x.CaseId==props.data.caseId) });
            }
        })
    }, [])

    function getTabs() {
        return tabsContent.map((tab, index) => ({
            title: tab.title,
            getContent: () => tab.content,
            key: index,
        }));
    }
    return (
        <Fragment>
           {state.cases.length>0? 
           <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()} />
           :<Row className='mt-xxl-5 mb-xxl-5'>
            <Col></Col>
            <Col><Loading/></Col>
            </Row>}
        </Fragment>
    );
}