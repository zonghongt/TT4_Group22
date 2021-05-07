import React, {useState, useEffect} from 'react'



export const AddTransaction = (props) => {

    useEffect(() => {
      const accountInfo = props?.mystate?.accountInfo?.accountKey
  }, [])

    const handleChange = (event) => {
      this.setState({value: event.target.value});
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', {
          method: 'POST',//POST method
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'//token key
          },
          body: JSON.stringify({// body data type must match username and password
              username: props?.mystate?.statusCode,
              password: props?.mystate?.message,
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
  };
  
    return (
      <>
        <h3>Transfer Money</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Payee ID
            <input type="text" value={this.state.value} onChange={handleChange} />
          </label>
          <label>
            Account Key
            <input type="number" value={this.state.value} onChange={handleChange} />
          </label>
          <label>
            Amount
            <input type="number" value={this.state.value} onChange={handleChange} />
          </label>
          <label>
            Message
            <input type="text" value={this.state.value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
      </form>
      </>
    )
  }