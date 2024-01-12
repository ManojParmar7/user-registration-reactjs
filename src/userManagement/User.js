import React ,{useState,useEffect}from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../helper/api';
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import './User.css'
function User() {
  const navigate = useNavigate();
  const [data,setData]=useState([])
  const MySwal = withReactContent(Swal)

  console.log(',.,.,.,.,.',data);
  const getAll = () => {
    api.get()
      .then((res) => {
        let data = res.data.data.user
        setData(data)
        
      })
      .catch((error) => {
      })
  }
  useEffect(() => {
    getAll()
  
  }, [])

  const deleteAddonUser = (id) => {
    return MySwal.fire({
      text: "Are you sure you want to delete this AddonUser?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-secondary ms-1"
      },
      buttonsStyling: false,
      width: "auto"
    })
      .then(function (result) {
        if (result.value) {
          api.delete("/"+ id)
            .then((res) => {
              getAll();
            }).catch((error) => {
            })
        }
      })
  }
  return (
    <div className="table-container">
      <div>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="btn btn-primary mb-2"
        >
          Add User
        </button>
      </div>

      <div className="responsive-table-container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id No</th>
              <th scope="col">Player Name</th>
              <th scope="col">Contact No</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>

{data && data.map((data)=>(



<tr>
              <th scope="row">1</th>
              <td>{data.name}</td>
              <td>{data.number}</td>
              <td>
                <button type="button" className={`btn btn-${data.status == 'Done'? "success": data.status=='Pending'? "warning":"secondary"}`}>
                {data.status}
                </button>
              </td>
              <td>
                <div className='action-btn'>
                <button type="button" className="btn btn-primary" onClick={()=>navigate(`/${data._id}`)}>
Edit                </button>
                <button type="button" className="btn btn-danger" onClick={() => deleteAddonUser(data._id)}>
Delete                </button>
                </div>
              </td>
            </tr>

))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
