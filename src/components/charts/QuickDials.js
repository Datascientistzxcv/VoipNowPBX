import React from "react";
import { data } from "../../dummyData/Data";
import VoicemailSharpIcon from "@material-ui/icons/VoicemailSharp";

import { Card, Table } from "react-bootstrap";
import Profile from "../Profile";
const QuickDials = () => {
  return (
    <>
      <Card
        className="m-2"
        style={{
          maxHeight: "180px",
          overflowX: "scroll",
        }}
      >
        <Card.Header>Quick Dial - Contacts</Card.Header>
        <Table hover size="sm">
          <thead>
            <tr>
              <td>&nbsp; Members</td>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id} data-toggle="modal" data-target="#exampleModal">
                <td>
                  {d.name}
                  <i className="fas fa-user-circle text-success float-right mr-3"></i>
                </td>
                <td>
                  <i className="fas fa-phone-alt text-success"></i>
                </td>
                <td>
                  <i className="fas fa-phone-alt text-secondary"></i>
                </td>
                <td>
                  <VoicemailSharpIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickDials;
