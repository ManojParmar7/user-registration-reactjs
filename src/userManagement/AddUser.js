import React, { useState } from "react";
import "./AddUser.css";
// import Card from "../Card/Card";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { api } from "../helper/api";
import { toast } from "react-toastify";

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    number: yup.string().required('Phone no is required')

  })

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()
const [status , setStatus] = useState('')
    const {
        handleSubmit,
        setValue,
        formState: { errors },
        control,
      } = useForm({ resolver: yupResolver(schema)});
  
  const onSubmit=(data)=>{
    let postData = {
        name: data.name,
        number: data.number,
        status: status,
        
       
      }
      api.post("/",postData)
      .then((res) => {

if(res.status == 201){

  navigate('/list')
        
  toast.success(res.data.message)

}
  else{
    toast.error(res.data.message)

  }     

      }).catch((error) => {
        // handleErrorMessage(error,t)
        toast.error(error.message)

      })
  }

  return (
  
    <>
     
 <div className="mainBody">
  <section className="form-add">
    <header>SPL 2-Registration</header>
    <form onSubmit={handleSubmit(onSubmit)}className="form">
      <div className="input-box">
        <label>Full Name</label>
        <Controller
              name="name"
              control={control}
              render={({ field }) => (
        <input type="text" placeholder="Enter full name" required="" {...field} />
        )}
        />
         {errors.name && (
              <span className="field_level_error">{errors.name.message}</span>
            )}
      </div>
     
      <div className="input-box">
        <label>Phone Number</label>
        <Controller
              name="number"
              control={control}
              render={({ field }) => (
        <input maxlength="10" type="Number" placeholder="Enter Contact here" required="" {...field} />
        )}
        />
         {errors.number && (
              <span className="field_level_error">{errors.number.message}</span>
            )}
      </div>
      <div class="input-box address">
          <label>Payment</label>
          
          <div class="column">
            <div class="select-box">
              <select onChange={(e)=>setStatus(e.target.value)}>
                <option hidden>No status</option>
                <option value='Done'>Done</option>
                <option value="Pending">Not Done</option>
               
              </select>
            </div>
            


        </div>
        <button   type="submit">Submit</button>


      </div>
    </form>
  </section>
  </div>
</>

      
    
  );
};

export default LoginForm;