import React from "react";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 border p-4 shadow bg-light">
            <div className="col-12 text-center">
              <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">
                Appointment form
              </h3>
            </div>
            <form action="">
              <div className="row g-3 form">
                <div className="col-md-6 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter Date"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="col-12">
                  <select className="form-select">
                    <option selected>Purpose Of Appointment</option>
                    <option value="1">Dental</option>
                    <option value="2">Psychiatrist</option>
                    <option value="3">Dermatology</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-12 mt-5">
                  <button type="submit" className="btn btn-primary float-end ">
                    Book Appointment
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary float-end me-2 "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
