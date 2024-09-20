import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Button } from "@material-ui/core";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import { homeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CoursesSection";
import { tutorsSection, tutorsList } from "../data/TutorsSection";
import { partnersSection, partnersList } from "../data/PartnersSection";
import { contactSection } from "../data/ContactSection";

import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

import parse from "html-react-parser";
import "../styles/Home.css";
import { getLocalStorage } from "../utils/helpers";
import { pathNameCONFIG } from "../config";

// const useStyles = makeStyles({
//   button: {
//     background: "#fc5185",
//     borderRadius: "20px",
//     marginTop: "20px",
//     padding: "15px 20px 15px 20px",
//     color: "#ffffff",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
// });

const ButtonContent = styled(Button)(() => ({
  background: "#fc5185",
  borderRadius: "20px",
  marginTop: "20px",
  padding: "15px 20px 15px 20px",
  color: "#ffffff",
  cursor: "pointer",
  fontWeight: "bold",
  "&:hover": {
    background: "blue",
    textDecoration: "none",
  },
}));

const Home = () => {
  // const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataStorage = getLocalStorage("user");
    setData(dataStorage);
  }, []);

  const handleClick = () => {
    if (data) {
      history.push(pathNameCONFIG.DASHBOARD);
    } else {
      history.push(pathNameCONFIG.LOGIN);
    }
  };
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* home  */}
        <section id="home">
          <img src={homeSection.image} />
          {/* <div className="kolom">{parse(homeSection.content)}</div> */}
          <div className="kolom">
            <p className="deskripsi">Belajar Programming #dirumahaja</p>
            <h2>Tetap Sehat, Tetap Semangat</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nesciunt, nobis.
            </p>
            <p>
              <ButtonContent
                variant="contained"
                color="success"
                onClick={handleClick}
              >
                Pelajari Lebih lanjut
              </ButtonContent>
            </p>
          </div>
        </section>
        {/* online course */}
        <section id="courses">
          <div className="kolom">
            <p className="deskripsi">You Will Need This</p>
            <h2>Online Courses</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              deserunt voluptatibus possimus blanditiis reiciendis. Qui,
              facilis! Delectus exercitationem dolores sapiente?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              deserunt voluptatibus possimus blanditiis reiciendis. Qui,
              facilis! Delectus exercitationem dolores sapiente?
            </p>
            <p>
              <ButtonContent
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Pelajari Lebih lanjut
              </ButtonContent>
            </p>
          </div>
          <img src={coursesSection.image} />
        </section>
        {/* Tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>
        {/* partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnersSection.content)}</div>
            <Partners partnersList={partnersList} />
          </div>
        </section>
      </div>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  );
};

export default Home;
