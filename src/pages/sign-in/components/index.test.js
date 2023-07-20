import React from "react";
import "./styles.scss";
// import image from "../../../assets/images/ludovic.jpg";
// import "w3-css/w3.css";

export const SignInPage = () => {
  return (
    <div className="SIGN_IN_PAGE_STYLES">
      <div className="card" style={{ height: "520px" }}>
        <div className="w3-row w3-padding container" id="menu" style={{}}>
          <div className="w3-col l6 w3-padding-large">
            <div
              className="container"
              style={{ textAlign: "left", marginTop: "1%" }}
            >
              <div>
                <h3>
                  <strong>Bienvenue!</strong>
                </h3>
                <p style={{ textAlign: "" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  libero. Quis rerum, assumenda consequuntur, at adipisci quod
                  voluptas
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <button className="btn btn-warning" style={{ margin: "2%" }}>
                  Google
                </button>
                <button className="btn btn-primary" style={{ margin: "2%" }}>
                  facebook
                </button>
                <button className="btn btn-success" style={{ margin: "2%" }}>
                  Github
                </button>
              </div>
              <div>
                <p style={{ textAlign: "center" }}>OR</p>
              </div>
              <form action="" method="post">
                <label htmlFor="" style={{ textAlign: "left" }}>
                  <strong>Email</strong>
                </label>
                <br />
                <div style={{ textAlign: "center" }}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Entrer votre adresse mail"
                    style={{
                      fontSize: "19px",
                      borderRadius: "30px",
                      margin: "2%",
                      textAlign: "center",
                    }}
                  />
                </div>
                <br />
                <label htmlFor="">
                  <strong>Mot de pass</strong>
                </label>
                <br />
                <div style={{ textAlign: "center" }}>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Entrer votre mot de pass"
                    style={{
                      fontSize: "19px",
                      borderRadius: "30px",
                      margin: "2%",
                      textAlign: "center",
                    }}
                  />
                </div>
                <div className="containe" style={{ textAlign: "center" }}>
                  <button
                    className="btn btn-primary btn-lg"
                    style={{ width: "75%", marginLeft: "2%", marginTop: "2%" }}
                  >
                    Se connecter
                  </button>
                  <br /> <br />
                </div>
                <div>
                  <input type="checkbox" name="remember" id="remember" />
                  <span>
                    <strong>Souviens-moi</strong>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div
            class="w3-left w3-col m6 w3-padding-large div1"
            style={{
              backgroundColor: "pink",
              height: "100%",
              marginTop: "0px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
