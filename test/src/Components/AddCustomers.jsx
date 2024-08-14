import axios from "axios";
import React, { useState } from "react";
import {AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useEffect } from "react";


const AddCustomer= () => {
  const [customersName, setCustomersName] = useState('');
  const [nameErr, setNameErr] = useState(false);

  const [customersEmail, setCustomersEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);

  const [customersPhonenumber, setCustomersPhonenumber] = useState('');
  const [phoneErr, setPhoneErr] = useState(false);

  const [customersLocation, setCustomersLocation] = useState('');
  const [locationErr, setLocationErr] = useState(false);

  const [customersPinCode, setCustomersPinCode] = useState('');
  const [pincodeErr, setPincodeErr] = useState(false);

  const [rowData,setrowData]=useState([]);
  
 const name = new RegExp('^[A-Za-z]+$');
 const email = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
 const phoneNumber = new RegExp('^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[789]\\d{9}$');
 const location = new RegExp('^[A-Za-z]+$');
 //const pinCode= new RegExp('^[0-9]*$'); 
const pincode = new RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$");

let group1 = false;
let group2 = false;
let group3 = false;
let group4 = false;
let group5 = false;
 
const validate = () => {  
    if (!email.test(customersEmail)) {
      setEmailErr(true);
      group1 = false;
    } else{
      setEmailErr(false);
      group1 = true;
    }

    if(!name.test(customersName)){
      setNameErr(true);
      group2 = false;
    }else{
      setNameErr(false);
      group2 = true;
    }

    if(!phoneNumber.test(customersPhonenumber)){
      setPhoneErr(true);
      group3=false;
    }else{
      setPhoneErr(false);
      group3=true;
    }

    if(!pincode.test(customersPinCode)){
      setPincodeErr(true);
      group4=false;
    }else{
      setPincodeErr(false);
      group4=true;
    }

    if(!location.test(customersLocation)){
      setLocationErr(true);
      group5=false;
    }else{
      setLocationErr(false);
      group5=true;
    }

    if(group1 === true && group2 === true && group3 === true && group4 === true && group5 === true){
      console.log(customersName);
      console.log(customersEmail);
      console.log(customersPhonenumber);
      console.log(customersLocation);
      console.log(customersPinCode);
      axios.post("http://localhost:8080/customers/saveCustomer",
      {customersName,customersEmail,customersPhonenumber,customersLocation,customersPinCode})
      .then(
        result=>console.log(result)
      )
    }

  }
  
  const handleSubmit = event => {
    event.preventDefault();
    validate();        
  }

 useEffect(() => {
            axios.get("http://localhost:8080/customers/getCustomer").then(response=>{
              setrowData(response.data);
            })
           });
        
 return  (
        
    <div className = "main">
          <div className = "Container">

      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          id="first"
          name="first"
          placeholder="Customers Name"
          value={customersName}
          onChange={event => setCustomersName(event.target.value)}
          autoComplete="off"/> 
       
       <div style={{ color: "#F61C04" }}>{nameErr && <p>your Name is invalid</p>}</div><br/>
        
 <input
          type="text"
          id="last"
          name="last"
          placeholder="Customers Email"
          value={customersEmail} 
          onChange={event => setCustomersEmail(event.target.value)}
          autoComplete="off" />

        <div style={{ color: "#F61C04" }}>{emailErr && <p>your Email is invalid</p>}</div><br/>

<input
          type="text"
          id="last"
          name="last"
          placeholder="Customers Phonenumber"
          value={customersPhonenumber}
          onChange={event => setCustomersPhonenumber(event.target.value)}
          autoComplete="off"/>
          
          <div style={{ color: "#F61C04" }}>{phoneErr && <p>your Phonenumber is invalid</p>}</div><br/>

<input
          type="text"
          id="last"
          name="last"
          placeholder="Customers Location"
          value={customersLocation}
          onChange={event => setCustomersLocation(event.target.value)}
          autoComplete="off" />
          
          <div style={{ color: "#F61C04" }}>{locationErr && <p>your Location is invalid</p>}</div><br/>

<input
          type="text"
          id="last"
          name="last"
          placeholder="Customers Pincode"
          value={customersPinCode}
          onChange={event => setCustomersPinCode(event.target.value)}
          autoComplete="off"/>
          
          <div style={{ color: "#F61C04" }}>{pincodeErr && <p>your pincode is invalid</p>}</div><br/>

                     <button type="submit">Submit</button>
        </form>
      
     </div>

          <div className="ag-theme-alpine" style={{height: 400}}>   
                <AgGridReact
                      rowData={rowData}>
           
             <AgGridColumn field="customersId"></AgGridColumn>
             <AgGridColumn field="customersName"></AgGridColumn>
             <AgGridColumn field="customersEmail"></AgGridColumn>
             <AgGridColumn field="customersPhonenumber"></AgGridColumn>
             <AgGridColumn field="customersLocation"></AgGridColumn>
             <AgGridColumn field="customersPinCode"></AgGridColumn>
        </AgGridReact>
  
    </div>

 </div>
    
  );
};

export default AddCustomer;