import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './routing/index'
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (

    <div><Routing/>
        <ToastContainer position='top-right'></ToastContainer>
</div>
  )
}

export default App