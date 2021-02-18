import React, { useState } from "react";
import Phone from "./Phone";
import Permission from "./Permission";
import Outgoing from "./Outgoing";
import Assignment from "./Assignment";
import Profile from "./Profile";

const CreateExtension = () => {
  const [profile, setProfile] = useState(true);
  const [phone, setPhone] = useState(false);
  const [permission, setPermission] = useState(false);
  const [outgoing, setOutgoing] = useState(false);
  const [assignment, setAssignment] = useState(false);

  const makeReject = () => {
    setPermission(false);
    setProfile(false);
    setAssignment(false);
    setPhone(false);
    setOutgoing(false);
  };

  return (
    <div className="container">
      <div class="d-flex">
        <button
          className={`btn btn-secondary btn-block  ${
            profile ? "active-menu-class" : ""
          }`}
          onClick={() => {
            makeReject();
            setProfile(true);
          }}
        >
          <h5>Profile</h5>
          <small>Information</small>
        </button>
        <button
          className={`btn btn-secondary btn-block  ${
            phone ? "active-menu-class" : ""
          }`}
          onClick={() => {
            makeReject();
            setPhone(true);
          }}
        >
          <h2>Phone</h2>
          <h6>Setting</h6>
        </button>
        <button
          className={`btn btn-secondary btn-block  ${
            permission ? "active-menu-class" : ""
          }`}
          onClick={() => {
            makeReject();
            setPermission(true);
          }}
        >
          <h2>Permission</h2>
          <h6>Information</h6>
        </button>
        <button
          className={`btn btn-secondary btn-block  ${
            outgoing ? "active-menu-class" : ""
          }`}
          onClick={() => {
            makeReject();
            setOutgoing(true);
          }}
        >
          <h2>Profile</h2>
          <h6>Outgoing</h6>
        </button>
        <button
          className={`btn btn-secondary btn-block  ${
            assignment ? "active-menu-class" : ""
          }`}
          onClick={() => {
            makeReject();
            setAssignment(true);
          }}
        >
          <h2>Profile</h2>
          <h6>Information</h6>
        </button>
      </div>

      {profile ? (
        <Profile />
      ) : phone ? (
        <Phone />
      ) : permission ? (
        <Permission />
      ) : outgoing ? (
        <Outgoing />
      ) : (
        <Assignment />
      )}
    </div>
  );
};

export default CreateExtension;
