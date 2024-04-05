import React from "react";
import "bulma/css/bulma.min.css";
import { NavLink } from "reactstrap";
// import { logo } from "../../images/logo1.jpeg";

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
            <form className="box">
               <div class="field has-text-centered">
                <NavLink to={"/home"}>
                  {/* <img src={logo} alt="" width={264}/> */}
               <h3 className="title has-text-primary ml-auto">Login</h3>
                </NavLink>
               </div>
                <div class="field">
                  <label for="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Masukkan email"
                  />
                </div>
                <div class="field">
                  <label for="password" className="label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input"
                    placeholder="************"
                  />
                </div>
                <div class="field">
                  <button className="button is-success has-text-white is-fullwidth">
                    login
                  </button>
                </div>
                <div class="field">
                  <p>
                    Belum punya akun? <NavLink to={"/register"} style={{display:"inline-flex"}}>Daftar</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;