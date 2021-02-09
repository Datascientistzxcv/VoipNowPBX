import React from "react";
import LabelIcon from "@material-ui/icons/Label";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import VoicemailIcon from "@material-ui/icons/Voicemail";
import SpeakerPhoneIcon from "@material-ui/icons/SpeakerPhone";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import VideocamIcon from "@material-ui/icons/Videocam";

const Profile = (props) => {
  return (
    <div className="card" style={{ maxWidth: "300px" }}>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="py-2 px-2">
          <img
            className="rounded"
            height="120px"
            src="https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753_960_720.jpg"
            alt=""
          />
        </div>
        <div className="py-2 pl-1 pr-3">
          <h4 className="text-primary">Neha Sharma</h4>
          <h6>sania12garg@gmail.com</h6>
          <p>Accounts Executive Main Headquarter, Texas</p>
        </div>
      </div>

      <div style={{ backgroundColor: "#e2e2e2" }}>
        <div className="p-2 d-flex" style={{ justifyContent: "space-evenly" }}>
          <div className="text-center d-flex text-success align-self-center">
            <i
              class="fas fa-phone-square-alt"
              style={{ fontSize: "1.5rem" }}
            ></i>
            &nbsp; Idle
          </div>
          <div className="text-center d-flex align-self-center">
            <i
              class="fas fa-user-circle text-success"
              style={{ fontSize: "1.5rem" }}
            ></i>{" "}
            &nbsp; Available
          </div>
          <br />
        </div>
        <div className="d-flex">
          <LabelIcon />
          &nbsp; <p>Employee Primary Extensions, Sales all (Meta)</p>
        </div>
      </div>
      <div className="p-2">
        Extensions: 305
        <div className="d-flex p-2" style={{ justifyContent: "space-between" }}>
          <div
            className="text-center d-flex text-success"
            style={{ flexDirection: "column" }}
          >
            <AddIcCallIcon />
            Chat
          </div>
          <div
            className="text-center d-flex text-secondary"
            style={{ flexDirection: "column" }}
          >
            <PhoneForwardedIcon />
            Transfer
          </div>
          <div
            className="text-center d-flex text-success"
            style={{ flexDirection: "column" }}
          >
            <VoicemailIcon />
            Dial VM
          </div>
          <div
            className="text-center d-flex text-success"
            style={{ flexDirection: "column" }}
          >
            <SpeakerPhoneIcon />
            Intercom
          </div>
        </div>
      </div>
      <div className="p-2 d-flex" style={{ justifyContent: "space-around", backgroundColor:"#e2e2e2" }}>
        <div className='text-success'>
          <QuestionAnswerIcon /> Chat
        </div>
        <div className='text-success'>
          <VideocamIcon /> Video
        </div>
      </div>
    </div>
  );
};

export default Profile;
