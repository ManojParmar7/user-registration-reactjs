import React, { useState,useEffect } from "react";
import "./AddUser.css";
// import Card from "../Card/Card";
import { useParams,useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../helper/api";
const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    number: yup.string().required('Phone no is required')

  })

const LoginForm = ({ setIsLoggedIn }) => {
const [status , setStatus] = useState('')

console.log("<><><",);
const {id} = useParams()
const navigate = useNavigate()
    const {
        handleSubmit,
        setValue,
        formState: { errors },
        control,
      } = useForm({ resolver: yupResolver(schema)});
  
      const onSubmit = data => {
        let postData = {
            name: data.name,
            number: data.number,
            status: status,
            
          }
    
        api.put(id, postData)
          .then((res) => {
            navigate('/list')
    
            
          })
          .catch((error) => {
            
          })
      }


      const getAll = () => {
        api.get("/" + id)
          .then((res) => {
            let data = res.data.data.user
            setValue('name', data.name)
            setValue('number', data.number)
            setStatus(data.status)
    
          })
          .catch((error) => {
          })
      }
    
      useEffect(() => {
        getAll()
      }, [])
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
        <input type="Number" placeholder="Enter Contact here" required="" {...field} />
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
              <select  value={status}onChange={(e)=>setStatus(e.target.value)}>
                <option hidden>No status</option>
                <option value='Done'>Done</option>
                <option value="Pending">Not Done</option>
               
              </select>
            </div>
            
            


        </div>
        <button className="btndesign"  type="submit">Submit</button>

      </div>
    </form>
  </section>
  </div>
</>

      
    
  );
};

export default LoginForm;