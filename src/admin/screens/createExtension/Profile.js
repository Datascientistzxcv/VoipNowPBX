import React from "react";

const Profile = () => {
  return (
    <div className="pt-4">
      <div className="container-fluid d-flex justify-content-center">
        <form style={{ width: "95%" }}>
          <div className="row ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Entension name
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the alphanumeric extension. The default configuration
                allows 2 - 15 digits extension.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Number Alias
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                If the extension is numeric then the Alias Name is optional.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Range
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the number of extension to create. Increments each
                extension by 1.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              User
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Assign users to this extension.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Voicemail Password
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the numeric Voicemail Password here.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Account Code
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the account code here.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Device provisioning
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Select a device and line number to assign to this extension.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Effective Caller ID Name
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the internal caller ID name here.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Effective Caller ID Number
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the internal caller ID number here.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Outbound Caller ID Name
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the external (public) caller ID name here.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Outbound Caller ID Number
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the external (public) caller ID number here.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Emergency Caller ID Name
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the emergency caller ID name here.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Emergency Caller ID Number
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the emergency caller ID number here.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Directory Full Name
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the first name followed by the last name.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Directory Visible
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Select whether to hide the name from directory.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Directory Extension Visible
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Select whether announce the extension when calling the
                directory.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Limit MAX
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the maximum number of outgoing calls from this user.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Limit Destination
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the destination to send the calls when max number of
                outgoing calls has been reached.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Voicemail Enabled
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enable/Disable voicemail for this extension.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Voicemail Mail To
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the email address to send voicemail to (optional).
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Voicemail File
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Select a listening option to include with the email
                notification.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Voicemail Keep Local
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Choose whether to keep the voicemail in the system after sending
                the email notification.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Missed Call
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Select the notification type, and enter the appropriate
                destination.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Toll Allow
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the toll allow value here. (Examples: domestic,
                international, local).
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Call Timeout
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the call timeout.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Call Group
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the user call group here. Groups available by default:
                sales, support, billing.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Call Screen
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Choose whether to enable or disable call screening.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Record
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Choose whether to record local, inbound,outbound or all.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Hold Music
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Select the MOH category here.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Domain
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Select the domain.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Context
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the user context here.
              </small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Enabled
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Set the status of extension.
              </small>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 form-box d-flex  justify-content-end">
              Description
            </div>
            <div className="col-md-8 form-input-box">
              <input type="text" class="form-control custom-input" />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Enter the description.
              </small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
