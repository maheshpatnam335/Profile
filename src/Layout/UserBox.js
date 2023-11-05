import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Col, DropdownMenu, DropdownToggle, NavLink, Row, UncontrolledButtonDropdown } from 'reactstrap';
import image from '../Images/icon-5359553_1280.webp';
// import { handleSuccess } from '../../../utils/Sweetalert';
 import bgImage from '../Images/abstract3.jpg';

const UserBox = () => {
    var username = localStorage.getItem('login');
    const [user, setUser] = useState({});
    useEffect(() => {
        // axios.get(`https://localhost:44323/api/Register/Id?Id=${logId}`).then((res) => {
        //     setUser(res.data);
        // })
    }, [])
    var history = useHistory();
    const Logout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('refreshTokenExpiry');
        localStorage.removeItem('roleId');
        localStorage.removeItem('login');
        history.push('/')
        // handleSuccess("Logged out successfully.")
        setTimeout(() => {
            window.location.reload();
        }, 1500)
    }
    const ChangePassword = () => {
        history.push('/ChangePassword')
    }
    const UpdateUser=()=>{
        history.push('/UpdateProfile') 
    }
    return (
        <Fragment>
            <div className="header-btn-lg pe-0">
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                            <Row>
                                <Col md='5' />
                                <Col md='7'>
                                    <UncontrolledButtonDropdown style={{ paddingRight: '50px', width: '10px' }} >
                                        <DropdownToggle color="link" className="p-0">
                                            <img width={42} className="rounded-circle" src={image} alt="Mahesh Patnam"/>
                                            {/* <FontAwesomeIcon className="ms-2 opacity-8" icon={faAngleDown} /> */}
                                        </DropdownToggle>
                                        <DropdownMenu style={{ width: '20px', backgroundImage: `url(${bgImage}) `}}  >
                                            <div className='text-center ms-1 me-1'>
                                                <div ><img src={image} width="70px" height={"60px"} className='ms-xxl-3' onClick={()=>UpdateUser()}/></div>
                                                <div > <strong >Email: {username}</strong></div>
                                                <div > <strong>Department: {username}</strong></div>
                                                <div className='ms-xxl-5'>  <NavLink href="#" onClick={() => Logout()} className="pl-2 ms-4">  Log out</NavLink></div>
                                                {/* <div ><NavLink href="#" onClick={() => ChangePassword()} className="pl-1">Change Password</NavLink></div> */}
                                            </div>
                                        </DropdownMenu>
                                    </UncontrolledButtonDropdown>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default UserBox;