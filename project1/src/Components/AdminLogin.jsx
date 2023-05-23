import React from 'react'
import AXIOS from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pic from './images/logi.jpg'

function AdminLogin() {
    const navigate=useNavigate()
    const [usname,setusname]=useState("");
    const [passw,setpass]=useState("");
    const [msg,setmsg]=useState("")
    function Log(){
        AXIOS.post("http://localhost:9002/adm",{usname:usname,passw:passw}).then((response)=>{
            console.log(response.data.msg)
            setusname("")
            setpass("")
            if(response.data.msg){
              navigate("/admin")
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
          <h2>Admin Login </h2>
          <br />
    <form className='' action="" method="post"> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={usname} onChange={(e)=>{setusname(e.target.value)}}/>
    
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

export default AdminLogin