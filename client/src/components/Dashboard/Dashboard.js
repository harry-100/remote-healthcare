import React from "react";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-text text-center ">
        <h3>Dashboard</h3>
      </div>
      <div className="container dashboard-bgp">
        <div className="row dashboard-form-heading">
          <div className=" col-md-6 text-center">
            <h3>Book An Appointment</h3>
          </div>
          <div className=" col-md-6 text-center">
            <h3>Your Upcoming Appointments</h3>
          </div>
        </div>

        <div className="row dashboard-content ">
          <div className="dashboard-left  col-md-6  ">
            {/* appointment foem start here */}

            <div className="well-block">
              <form>
                {/* <!-- Form start --> */}
                <div className="row">
                  {/* <!-- Text input--> */}
                  <div className="col-md-6">
                    <div className="form-group form-style">
                      <label className="control-label" for="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="E-Mail"
                        className="form-control input-md"
                      />
                    </div>
                  </div>
                  {/* <!-- Text input--> */}
                  <div className="col-md-6">
                    <div className="form-group form-style">
                      <label className="control-label" for="date">
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="text"
                        placeholder="Preferred Date"
                        className="form-control input-md"
                      />
                    </div>
                  </div>
                  {/* <!-- Select Basic --> */}
                  <div className="col-md-6">
                    <div className="form-group form-style-2">
                      <label className="control-label" for="time">
                        Preferred Time
                      </label>
                      <select id="time" name="time" className="form-control">
                        <option value="8:00 to 9:00">8:00 to 9:00</option>
                        <option value="9:00 to 10:00">9:00 to 10:00</option>
                        <option value="10:00 to 1:00">10:00 to 1:00</option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- Select Basic --> */}
                  <div className="col-md-12">
                    <div className="form-group form-style-2">
                      <label className="control-label" for="appointmentfor">
                        Appointment For
                      </label>
                      <select
                        id="appointmentfor"
                        name="appointmentfor"
                        className="form-control"
                      >
                        <option value="Service#1">Service#1</option>
                        <option value="Service#2">Service#2</option>
                        <option value="Service#3">Service#3</option>
                        <option value="Service#4">Service#4</option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- Button --> */}
                  <div className="col-md-12">
                    <div className="form-group  ">
                      <button
                        id="singlebutton"
                        name="singlebutton"
                        className="btn btn-default btn-dashboard "
                      >
                        Make An Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- form end --> */}
            </div>

            {/* ends */}
          </div>
          <div className="dashboard-right  col-md-6 text-center">
            <table className="table dashboard-table ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email</th>
                  <th scope="col">Last</th>
                  <th scope="col">Date/Time</th>
                  <th scope="col">Appointment For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
