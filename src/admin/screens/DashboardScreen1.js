import React, { useState } from "react";

const DashboardScreen1 = () => {
  const [setup, setSetup] = useState(false);

  const Setup = () => {
    return (
      <div
        class="container  bg-dark text-white"
        onMouseEnter={() => setSetup(true)}
        onMouseLeave={() => setSetup(false)}
      >
        <a class="dropdown-item" href="#">
          Another action
        </a>
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="#"
                  onMouseEnter={() => setSetup(true)}
                  onMouseLeave={() => setSetup(false)}
                >
                  Domains <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="#"
                  onMouseEnter={() => setSetup(true)}
                  onMouseLeave={() => setSetup(false)}
                >
                  Settings <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="#"
                  onMouseEnter={() => setSetup(true)}
                  onMouseLeave={() => setSetup(false)}
                >
                  Phones <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="#"
                  onMouseEnter={() => setSetup(true)}
                  onMouseLeave={() => setSetup(false)}
                >
                  Maintenance <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="#"
                  onMouseEnter={() => setSetup(true)}
                  onMouseLeave={() => setSetup(false)}
                >
                  Customization <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Status
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* {setup && <Setup />}  */}
    </div>
  );
};

export default DashboardScreen1;

/*

<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Domains
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">List</a>
          <a class="dropdown-item" href="#">DID Management</a>
          <a class="dropdown-item" href="#">Monthly Billing</a>
         
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Settings
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Domains
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">List</a>
          <a class="dropdown-item" href="#">DID Management</a>
          <a class="dropdown-item" href="#">Monthly Billing</a>
         
        </div>
          </a>
         
         
        </div>
      </li>

      */
