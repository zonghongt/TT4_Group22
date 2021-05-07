import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import personlogosmall from '../images/personlogosmall.png';
import keylogo from '../images/keylogo.png';

import { UserInfoWrapper } from './styles';

const UserInfo = (props) => {
    
    const [toggleInfo, setToggleInfo] = useState(false)

    return(
        <React.Fragment> 
            <UserInfoWrapper>
                <div >
                    <div style={{display:'flex'}}> 
                        <img src={personlogosmall} style={{maxHeight:'50px',maxWidth:'50px'}}></img>
                        <b>{props?.mystate?.accountInfo?.firstName} {props?.mystate?.accountInfo?.lastName}</b>
                    </div>
                    <div style={{display:'flex'}}>
                        <img src={keylogo} style={{maxHeight:'50px',maxWidth:'50px'}}></img>
                        <b>{props?.mystate?.accountInfo?.accountKey}</b>
                    </div>
                </div>   

                <Button onClick={()=>{setToggleInfo(!toggleInfo)}}>
                    Detailed Information
                </Button>
                {toggleInfo && <div> 
                <div><b>NRIC:</b> {props?.mystate?.accountInfo?.nric}</div>  
                <div><b>Address:</b> {props?.mystate?.accountInfo?.address}</div>  
                <div><b>Phone Number:</b> {props?.mystate?.accountInfo?.phoneNumber}</div>  
                <div><b>Email:</b> {props?.mystate?.accountInfo?.email}</div>  
                </div>
                }
            </UserInfoWrapper>
        </React.Fragment>
    )
}

export default UserInfo;