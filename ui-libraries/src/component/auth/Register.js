import React from "react";
import "bulma/css/bulma.min.css";
import { NavLink } from "reactstrap";
// import { Logo } from "../../images/logo1.jpeg";

const Register = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <form className="box">
                <div class="field has-text-centered">
                  <NavLink to={"/"}>
                    {/* <img src={Logo} alt="logo-github" width={64} className="ml-3" /> */}
                  </NavLink>
                    <h3 className="title has-text-primary ml-auto mr-3">Register</h3>
                </div>
                <div class="field">
                  <label for="nama">Nama</label>
                  <input
                    type="nama"
                    className="input"
                    placeholder="Masukkan nama"
                  />
                </div>
                <div class="field">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Masukkan email"
                  />
                </div>
                <div class="field">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Masukkan password"
                  />
                </div>
                <div class="field">
                  <label for="confPassword">Confirm Password</label>
                  <input
                    type="confPassword"
                    className="input"
                    placeholder="Konfirmasi Password"
                  />
                </div>
                <div class="field">
                  <button className="button is-success is-fullwidth">
                    Register
                  </button>
                </div>
                <div class="field">
                  <p>Sudah Punya Akun?  <NavLink style={{ display: "inline-flex" }} to="/login">Login</NavLink></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;