import React from "react";
import "./Appointment.css";
function Appointment() {
  return (
    <div>
      <div className="container">
        <h3 className="text-center ">My Upcoming Appointments</h3>

        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Amal</th>
              <td>Lohith</td>
              <td>lohith05amal@gmail.com</td>
              <td>02/02/2023</td>
              <td>Dental</td>
            </tr>
            <tr>
              <th scope="row">Amal</th>
              <td>Lohith</td>
              <td>lohith05amal@gmail.com</td>
              <td>02/02/2023</td>
              <td>Dental</td>
            </tr>
            <tr>
              <th scope="row">Amal</th>
              <td>Lohith</td>
              <td>lohith05amal@gmail.com</td>
              <td>02/02/2023</td>
              <td>Dental</td>
            </tr>
            <tr>
              <th scope="row">Amal</th>
              <td>Lohith</td>
              <td>lohith05amal@gmail.com</td>
              <td>02/02/2023</td>
              <td>Dental</td>
            </tr>
            <tr>
              <th scope="row">Amal</th>
              <td>Lohith</td>
              <td>lohith05amal@gmail.com</td>
              <td>02/02/2023</td>
              <td>Dental</td>
            </tr>
            <tr>
              <th scope="row">Amal</th>
              <td>Lohith</td>
              <td>lohith05amal@gmail.com</td>
              <td>02/02/2023</td>
              <td>Dental</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointment;
