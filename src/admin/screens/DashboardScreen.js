import React from "react";
import ExtensionIcon from "@material-ui/icons/Extension";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import SaveIcon from "@material-ui/icons/Save";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Data from "../dummyData/AllExtensions";
const DashboardScreen = () => {
  return (
    <div>
      <div className="container m-5 " style={{ maxWidth: "600px" }}>
        <div className="custom-card">
          <div className="bg-primary text-white p-2">Manage Extensions</div>
          <div className="d-flex">
            <button
              className="btn ml-1 my-1 text-center d-flex"
              style={{ flexDirection: "column", backgroundColor: "#e2e2e2" }}
            >
              <ExtensionIcon />
              Create Extension
            </button>
            <button
              className="btn ml-1 my-1 text-center d-flex"
              style={{ flexDirection: "column", backgroundColor: "#e2e2e2" }}
            >
              <ExtensionIcon />
              Bulk Modify Extension
            </button>
            <button
              className="btn ml-1 my-1 text-center d-flex"
              style={{ flexDirection: "column", backgroundColor: "#e2e2e2" }}
            >
              <ExtensionIcon />
              Import Extension
            </button>
          </div>
          <h5>
            <div className="d-flex p-2 align-items-center">
              View <input className="form-control mx-2" />
            </div>
          </h5>
          <div className="p-2 d-flex" style={{ backgroundColor: "#e2e2e2" }}>
            All Extensions
            <div className="ml-auto">
              <input
                type="text"
                placeholder="Enter your search"
                className="form-control"
              />
            </div>
          </div>
          <div>
            <p className="p-2">Showing 100 records</p>
            <table class="table table-striped" style={{ overflow: "scroll" }}>
              <thead>
                <tr style={{ backgroundColor: "#e2e2e2" }}>
                  <th scope="col">Extension</th>
                  <th scope="col">ExtensionType</th>
                  <th scope="col">Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((data) => {
                  return (
                    <tr>
                      <td>{data.Extension}</td>
                      <td>{data.ExtensionType}</td>
                      <td>{data.Name}</td>
                      <td>
                        <ExitToAppIcon
                          style={{
                            border: "1px solid gray",
                            borderRadius: "4px",
                            margin: "2px",
                          }}
                        />
                        <EditIcon
                          style={{
                            color: "yellowgreen",
                            margin: "2px",
                            border: "1px solid gray",
                            borderRadius: "4px",
                          }}
                        />
                        <SaveIcon
                          style={{
                            margin: "2px",
                            border: "1px solid gray",
                            borderRadius: "4px",
                          }}
                        />
                        <ClearIcon
                          style={{
                            color: "red",
                            border: "1px solid gray",
                            margin: "2px",
                            borderRadius: "4px",
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
