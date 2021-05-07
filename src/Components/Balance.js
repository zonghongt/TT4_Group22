import React, {useState} from 'react';
import axios from 'axios';


  const ALL_USERS = [
    { accountName: 'John', accountNumber: 123451, availableBal: 20 },
    { accountName: "Brie", accountNumber: 567891, availableBal: 60 },
    { accountName: "Harry", accountNumber: 99002, availableBal: 500 }
  ]

const CREDENTIALS = {
    "accountKey": "ui9rko7u-s58i-coyz-1ztw-n6permymbnn",
    "custID": 22
}


const Balance = (props) => {
    const [accounts , setAcc] = useState(ALL_USERS)
    // const { transactions } = useContext(GlobalContext);
    // const amounts = transactions.map(transaction => transaction.amount);
    // const total = amounts.reduce((acc, item) => (acc += item), 0);
    

    // componentDidMount() {
    //     fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
    //         method: 'POST',//POST method
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'x-api-key': '4EJDDbJ33d3aZNn8s1xKE4MW5nGpRowL2el5LHkS'//token key
    //         },
    //         body: JSON.stringify({// body data type must match username and password
    //             username: state.username,
    //             password: state.password,
    //         }) 
    //     })//if successful fetch and it match body match username and password
    //     .then(response => response.json())
    //     .then(data => {
    //         setState({accountInfo: data})
    //     });
    // }

    return (
      <>
        <h1> View Balance </h1>
        <h4 >Account Number</h4>
        <h6>{accounts.accountNumber}</h6>
        <h4>Your Balance</h4>
        <h6>{accounts.availableBal}</h6>
      </>
    )
  }

  export default Balance;