import React, { useState } from 'react';
import './Loginsignup.css';

function Loginsignup() {
  const [applicant, setApplicant] = useState({
    fname: '',
    sname:'',
    dbirth:'',
    ylocation:'',
    country:'',
    city:'',
    email: '',
    phone: '',
    resume: '',
    coverLetter: '',
    skills: [],
  });

  // ... Add your `handleSubmit` function here ...

  const handleSubmit = (event) => {
    event.preventDefault();
    // ... Implement your submission logic here ...
    console.log("Submitted application data:", applicant);
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <label htmlFor="name">First Name:</label> 
      <input type="text" id="fname" name="fname"  value={applicant.fname} onChange={(event) => setApplicant({ ...applicant, fname: event.target.value })}/> <br/> <br/><label>Second Name :</label>
      <input type="text" id='sname' name ="sname" value={applicant.sname}  onChange={(event) => setApplicant({ ...applicant, sname: event.target.value })}/> <br/><br/>
      <label>Date of birth:</label>
      <input type="text" id='dbirth' name="dbirth" value={applicant.dbirth}  onChange={(event) => setApplicant({ ...applicant, dbirth: event.target.value })}/> <br/><br/>
      <label>Your Location:</label>
      <input type="text" id='email'  name="email" value={applicant.ylocation}  onChange={(event) => setApplicant({ ...applicant, ylocation: event.target.value })}/> <br/><br/>
      <label>City:</label>
      <input type="text" id='city' name="ylocation" value={applicant.email}  onChange={(event) => setApplicant({ ...applicant, city: event.target.value })}/> <br/><br/>
      <label>Email Address:</label>
      <input type="text" id='email' name="email" value={applicant.email}  onChange={(event) => setApplicant({ ...applicant, email: event.target.value })}/> <br/><br/>
      <label>Phone number:</label>
      <input type="text" id='phone' name="phone" value={applicant.email}  onChange={(event) => setApplicant({ ...applicant, phone: event.target.value })}/> <br/><br/>
      
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default Loginsignup;

