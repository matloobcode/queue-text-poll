import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";

export function ToDo() {
  const [appointments, setappointments] = useState([]);
  const formik = useFormik({
    initialValues:{
      Id: 0,
      Title: '',
      Description: '',
      Date: new Date()
    },
    onSubmit : (appointment) =>{
      axios.post('http://127.0.0.1:4000/addtask', appointment);
      alert('Appointment Added Successfully..');
      window.location.reload();
    }
  })

  function loadAppointments(){
    axios.get("http://127.0.0.1:4000/appointments")
    .then(response =>{
      setappointments(response.data)
    })
  }

  useEffect(()=>{
    loadAppointments();
  },[]);

  function handleDeleteClick(e){
    alert(e.target.value); 
  }
  return (
    <div className="container-fluid">
      <h1 className="text-center">To Do App</h1>
      <header>
        <div aria-label="AddAppointment">
          <label htmlFor="" className="form-label">Add New Appointments</label>
          <div>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="d-flex w-50">
                <input
                  type="number"
                  name="Id"
                  className="form-control"
                  placeholder="Id" onChange={formik.handleChange}
                />
                <input
                  type="text"
                  name="Title"
                  className="form-control ms-1"
                  placeholder="Title" onChange={formik.handleChange}
                />
                <input type="date" name="Date" className="form-control ms-1" onChange={formik.handleChange} />
              </div>
              <div>
                <textarea
                  className="mt-2 form-control w-50"
                  name="Description"
                  id=""
                  cols=""
                  rows="" onChange={formik.handleChange}
                ></textarea>
              </div>
              <button className="btn btn-info mt-2 w-50">Add</button>
            </form>
          </div>
        </div>

        <div aria-label=" EditAddAppointment">
          <label htmlFor="" className="form-label">Add New Appointments</label>
          <div>
            <form action="">
              <div className="d-flex w-50">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Id"
                />
                <input
                  type="text"
                  className="form-control ms-1"
                  placeholder="Title"
                />
                <input type="date" className="form-control ms-1" />
              </div>
              <div>
                <textarea
                  className="mt-2 form-control w-50"
                  name="description"
                  id=""
                  cols=""
                  rows=""
                ></textarea>
              </div>
              <button className="btn btn-info mt-2 w-50">Add</button>
            </form>
          </div>
        </div>
      </header>
      <main>
        <div>
        <label htmlFor="yorappointment">Your Appointment</label>
        <div className="d-flex flex-wrap">
            {
              appointments.map(appointment =>
                <div className="alert alert-dismissible alert-success w-25 ms-2" key={appointment.id}>
                  <button onClick={handleDeleteClick} value={appointment.Id} className="btn btn-close"></button>
                  <div className="h5 alert title">{appointment.Title}</div>
                  <p>{appointment.Description}</p>
                  <span className="bi bi-calendar"></span> {appointment.Date}
                </div>
                )
            }
        </div>
        </div>
      </main>
    </div>
  );
}
