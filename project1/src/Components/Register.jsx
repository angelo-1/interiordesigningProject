import React from 'react'
import pic from './images/reg.jpg'
import Login from './Login'
import { useState } from 'react'
import AXIOS from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css'

function Register() {
    const navigate=useNavigate();
    const [uname,setname]=useState("");
    const [phone,setphone]=useState("");
    const [email,setmail]=useState("");
    const [passw,setpass]=useState("");
    const [msg,setmsg]=useState("");
    function Reg(){
        AXIOS.post("http://localhost:9002/create",{uname:uname,phone:phone,email:email,passw:passw}).then((response)=>{
            console.log(response.data.msg)
            setname("")
            setphone("")
            setmail("")
            setpass("")
            setmsg(response.data.msg)
            navigate("/Login")
        })
    }
  return (
    <>
    <h3>{msg}</h3>
    <div className="banners">
    <form className='forms' action="" method="post">  
    <div className='container'>
        <div className='row'>
        <div className='col m-auto'>
    <h2 className='text-center'>Register Here for More...</h2> 
    <div class="mb-3">
    <label for="exampleInputName" class="form-label">Full Name</label>
    <input type="uname" class="form-control" id="exampleInputName" aria-describedby="NameHelp" value={uname} onChange={(e)=>{setname(e.target.value)}}/>
    <div id="NameHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Phone Number</label>
    <input type="phone" class="form-control" id="exampleInputPhone" aria-describedby="PhoneHelp" value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
    <div id="PhoneHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setmail(e.target.value)}}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={passw} onChange={(e)=>{setpass(e.target.value)}}/>
  </div>
  <button type="button" class="btn btn-primary" onClick={Reg} >Submit</button>

    </div>
    <div className='col m-auto'><img src={pic} alt="" className='w-100'/></div>
    </div>
    </div>
    </form>
    </div>
    <br />
    </>
  )
}

export default Register