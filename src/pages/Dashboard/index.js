import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { pathNameCONFIG } from "../../config";
import "../../styles/Dashboard.css";
import { getLocalStorage, removeLocalStorage } from "../../utils/helpers";
import { Button } from "@material-ui/core";
// import { RootContext } from "../../App";

const Dashboard = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  // const { user } = useContext(RootContext);

  useEffect(() => {
    const data = getLocalStorage("user");
    setData(data);
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then((res) => {
        removeLocalStorage("user");
        history.push(pathNameCONFIG.HOME);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="center">
      <div className="profile">
        <h1
          style={{
            color: "black",
            marginBottom: "5px",
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          Profile
        </h1>
        <div className="box">
          <div>
            <p>
              <strong style={{ color: "black", fontWeight: "bold" }}>
                Email :{" "}
              </strong>
            </p>
          </div>

          <div>
            <p style={{ color: "black", fontWeight: "bold" }}>{data?.email}</p>
          </div>
        </div>

        <div className="box" style={{ marginTop: "-15px" }}>
          <div>
            <p>
              <strong style={{ color: "black", fontWeight: "bold" }}>
                Email Verified:{" "}
              </strong>
            </p>
          </div>

          <div>
            <p style={{ color: "black", fontWeight: "bold" }}>
              {data?.emailVerified
                ? "Email Terverifikasi"
                : "Email Belum Terverifikasi "}
            </p>
          </div>
        </div>
        <Button
          variant="outlined"
          color="warning"
          onClick={handleLogOut}
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            background: "red",
            borderRadius: "20px",
            marginTop: "20px",
            padding: "10px 15px 10px 15px",
            color: "#ffffff",
            cursor: "pointer",
            "&:hover": {
              background: "blue",
              textDecoration: "none",
            },
          }}
        >
          Log Out
        </Button>
        {error ? (
          <div className="error-user">
            <p className="errors">{error}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
