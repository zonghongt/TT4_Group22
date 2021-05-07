import React, {useState, useEffect} from 'react';
import axios from 'axios';


//   const ALL_USERS = [
//     { accountName: 'John', accountNumber: 123451, availableBal: 20 },
//     { accountName: "Brie", accountNumber: 567891, availableBal: 60 },
//     { accountName: "Harry", accountNumber: 99002, availableBal: 500 }
//   ]

const CREDENTIALS = {
    "accountKey": "ui9rko7u-s58i-coyz-1ztw-n6permymbnn",
    "custID": 22
}

export const Balance = (props) => {
    
    useEffect(() => {
        // const accountInfo = props?.mystate?.accountInfo?.accountKey
        const accountInfo = CREDENTIALS
    }, [])

    fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts', {
        method: 'POST',//POST method
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'//token key
        },
        body: JSON.stringify({// body data type must match username and password
            accountName: props?.mystate?.accountName,
            accountNumber: props?.mystate?.accountNumber,
            balance: props?.mystate?.availableBal
        })
    })//if successful fetch and it match body match username and password
        .then(response => response.text())
        .then(data => {
            try {
                var responseJson = JSON.parse(data);
                console.log("responseJson", responseJson);
                //console.log(props);
                props.handleAccountInfo(responseJson);
                console.log(props);
                props.history.push('/Mainpage');
            }
            catch (e) {
                console.log(e)
            }
        });
 

    return (
      <>
        <h1> View Balance </h1>
        <h4 >Account Number</h4>
        <h6>{accountNumber}</h6>
        <h4>Your Balance</h4>
        <h6>{availableBal}</h6>
      </>
    )
  }
