import React, {useState} from 'react';
import axios from 'axios';


  const ALL_USERS = [
    { accountName: 'John', accountNumber: 123451, availableBal: 20 },
    { accountName: "Brie", accountNumber: 567891, availableBal: 60 },
    { accountName: "Harry", accountNumber: 99002, availableBal: 500 }
  ]


  export const Balance = () => {
    const [balance , setBal] = useState(ALL_USERS)
    // const { transactions } = useContext(GlobalContext);
    // const amounts = transactions.map(transaction => transaction.amount);
    // const total = amounts.reduce((acc, item) => (acc += item), 0);
  
    return (
      <>
        <h1> View Balance </h1>
        <h4 style="float:center">Account Number</h4>
        <h1>{''}</h1>
        <h4>Your Balance</h4>
        <h1>{''} </h1>
      </>
    )
  }