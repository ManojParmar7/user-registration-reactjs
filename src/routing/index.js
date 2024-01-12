
 import AddList from '../userManagement/AddUser'
import List from '../userManagement/User';
 import UpdateUser from '../userManagement/UpdateUser'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div >
           <BrowserRouter>
      <Routes>


        
        <Route path="/list" element={<List/>}> </Route>
        <Route path="/" element={<AddList/>}></Route>
        <Route path="/:id" element={<UpdateUser/>}></Route>

     {/* <Route path="/edit/:id" element={<Edit/>}>


   
   </Route> */}
      </Routes>
    </BrowserRouter>      
    
    {/* </GlobalProvider> */}
    </div>
  );
}

export default App;
