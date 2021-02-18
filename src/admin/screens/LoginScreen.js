import React from "react";

const LoginScreen = () => {
  return (
    <div className='container-fluid'>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-8 login-image">
          <p className="display-1 p-4 text-white">Voip Now PBX</p>
        </div>
        <div className="col-md-4 pt-5" style={{ backgroundColor: "#f6f6f6" }}>
            <div>
                <h3 className='text-center'>VoipNow PBX</h3>
            </div>
          <div className="card login-form mt-5 ">
            <div className="card-body">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Account"
                  />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
