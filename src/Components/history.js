import React, {useState, useEffect} from 'react';
import axios from 'axios';



const CREDENTIALS = {
    "accountKey": "ui9rko7u-s58i-coyz-1ztw-n6permymbnn",
    "custID": 22
}

export const Balance = (props) => {

    const [accBalance, setaccBalance] = useState([])

    useEffect (() => {
        fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', {
            method: 'POST',//POST method
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'//token key
            },
            body: JSON.stringify({// body data type must match username and password
                custID: props?.mystate?.accountInfo?.custID,
                accountKey: props?.mystate?.accountInfo?.accountKey
            })
        })//if successful fetch and it match body match username and password
            .then(response => response.text())
            .then(data => {
                try {
                    var responseJson = JSON.parse(data);
                    console.log("responseJson", responseJson);
                    //console.log(props);
                    if(Array.isArray(responseJson))
                    setaccBalance(responseJson)
                    //props.handleAccountInfo(responseJson);
                    //console.log(props);
                }
                catch (e) {
                    console.log(e)
                }
            });
    },[]) 
 

    return (
      <>
        <h1> Transaction History </h1>
        {accBalance?.map((e) => {
            return (
                <>
                <h4 >Customer ID</h4>
                <h6>{e.custID}</h6>
                <h4>payeeID</h4>
                <h6>{e.payeeID}</h6>
                <h4>date</h4>
                <h6>{e.date}</h6>
                <h4>amount</h4>
                <h6>{e.amount}</h6>
                <h4>eGift</h4>
                <h6>{e.eGift}</h6>
                <h4>message</h4>
                <h6>{e.message}</h6>
                </>
            )
        })}
        
      </>
    )
  }

