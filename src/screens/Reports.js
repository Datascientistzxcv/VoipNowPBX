import React from "react";
import Navbar from "../components/Navbar";
import { Col, Row } from "react-bootstrap";

import MyCalls from "../components/charts/MyCalls";
import GoogleMaps from "../components/charts/GoogleMaps";
import QuickDials from "../components/charts/QuickDials";
import CallActivity from "../components/charts/CallActivity";
import QueueMemberActivity from "../components/charts/QueueMemberActivity";
import QueueOverview from "../components/charts/QueueOverview";
import Profile from "../components/Profile";

const Reports = () => {
  const NewAdmin = () => {
    return (
      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <label for="exampleInputEmail1">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <label for="exampleInputEmail1">Email Id</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <label for="exampleInputEmail1">Mobile Number</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };

  const WebPermission = () => {
    return (
      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Id</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Id"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Role Id</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Role Id"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Module Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Module Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Module URL</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Module URL"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Menu Name</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Menu Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Permissions</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Permissions"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Status</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Status"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };

  const WebRole = () => {
    return (
      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Role Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Role"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Active</label>
            <select
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            >
              <option>True</option>
              <option>False</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };

  const WebLogin = () => {
    return (
      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Role Id</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Role Id"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter First Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Last Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Role Id"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">User Profile</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter User Profile"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">BirthDate</label>
            <input
              type="date"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Mobile Number</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Active</label>
            <select
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter User Profile"
            >
              <option>True</option>
              <option>False</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Balance</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Balance"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Minimum Balance</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Minimum Balance"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="p-3">
        <Row>
          <Col md={3} className="p-2">
            <MyCalls />
            <GoogleMaps />
            {/* my calls  */}
            {/* parked calls  */}
          </Col>
          <Col md={4} className="p-2">
            <QuickDials />
            <CallActivity />
            <QueueOverview />
            {/* quick dial  */}
            {/* call Activity */}
          </Col>
          <Col md={5} className="p-2">
            {/* Queue */}
            <QueueMemberActivity />
          </Col>
        </Row>
        {/* <!-- Button trigger modal --> */}
      </div>
      <NewAdmin />
      <hr />
      <WebRole />
      <hr />
      <WebPermission />
      <hr />
      <WebLogin />
    </>
  );
};

export default Reports;
