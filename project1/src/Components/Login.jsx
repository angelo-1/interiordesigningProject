import React from 'react'
import AXIOS from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pic from './images/logi.jpg'


function Login() {
  const navigate=useNavigate()
    const [email,setmail]=useState("");
    const [passw,setpass]=useState("");
    const [msg,setmsg]=useState("")
    function Log(){
        AXIOS.post("http://localhost:9002/log",{email:email,passw:passw}).then((response)=>{
            console.log(response.data.msg)
            setmail("")
            setpass("")
            if(response.data.msg){
              navigate("/")
            }else{
            setmsg("Wrong Credentials")
            }
        })
    }
  return (
    <>
    <h3>{msg}</h3>
      <div className='container'>
        <div className='row'>
        <div className='col m-auto'>
          <h2>Login </h2>
          <br />
    <form className='' action="" method="post"> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setmail(e.target.value)}}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={passw} onChange={(e)=>{setpass(e.target.value)}}/>
  </div>
  <button type="button" class="btn btn-primary" onClick={Log} >Submit</button>
</form>
    </div>
    <div className='col'><img src={pic} alt="" className='w-100' /></div>
    </div>
    </div>
    <br />
    </>
  )
}

export default Login