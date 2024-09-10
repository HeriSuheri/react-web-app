import React, { useState, useContext, useEffect } from "react";
import "../../styles/Dashboard.css";
import { getLocalStorage, removeLocalStorage } from "../../utils/helpers";
// import { RootContext } from "../../App";

const Dashboard = () => {
  const [data, setData] = useState(null);
  // const { user } = useContext(RootContext);

  useEffect(() => {
    const data = getLocalStorage("user");
    setData(data);
  }, []);

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
      </div>
    </div>
  );
};

export default Dashboard;
