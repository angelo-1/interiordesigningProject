import React from 'react'
import './style.css'
function Contact() {
  return (
    <div className="banner">

        <br />
         <h1 style={{textAlign:'center'}}>Send your message here!</h1>
        <form className="form" method="post">
            <div className="rows">
                <div className="cols">
                    <label className="label-text" htmlFor="">Name</label>
                    <input className="form-input" type="text" name="" id="" />
                </div>
            </div>
            <div className="rows">
            <div className="cols">
                    <label className="label-text" htmlFor="">Email</label>
                    <input className="form-input" type="text" name="" id="" />
                    </div>
                    </div>

                <div className="rows">
                <div className="cols">
                    <label className="label-text" htmlFor="">Phone</label>
                    <input className="form-input" type="text" name="" id="" />
                </div>
                </div>
            <div className="rows">
                <h4 className="label-text">Message</h4>

            </div>
            <div className="rows">
                <textarea className="textarea" name="" id="" cols="30" rows="10"></textarea>

            </div>
            <div className="rows">
                <button className="btn">Submit</button>
                <button className="btn">Cancel</button>
            </div>
        </form>
        </div>
  )
}

export default Contact