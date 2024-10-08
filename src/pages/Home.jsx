import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Button } from "@material-ui/core";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { CircularProgress, Paper } from "@mui/material";
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
import PopupOther from "../components/Popup/Others";
import Colors from "../utils/helpers/Colors";
import TextStyle from "../components/TextStyle";
import CheckBox from "../components/Checkbox";
import purify from "dompurify";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CarouselResponsive from "../components/Carousel";

const useStyles = makeStyles({
  tableBlank: {
    width: "100%",
    height: 416,
    boxShadow: `0px 3px 10px rgba(188, 200, 231, 0.2)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: -10,
  },
});

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

const BoxContent = styled("div")(() => ({
  borderRadius: "10px",
  border: "1px solid #E6EAF3",
  padding: "20px",
}));

const SubmitWrapper = styled("div")(() => ({
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const TncContainer = styled("div")(
  ({
    overflow = true,
    padding = "15px 25px 15px 25px",
    isloading = "false",
  }) => ({
    // borderRadius: "10px",
    padding,
    // border: "1px solid #E6EAF3",
    fontSize: "12px",
    maxHeight: "40vh",
    borderRadius: "10px",
    border: "1px solid #E6EAF3",
    minHeight: "100px",
    display: isloading === "true" ? "flex" : "block",
    alignItems: isloading === "true" ? "center" : "flex-start",
    justifyContent: "center",
    overflowY: overflow ? "scroll" : "auto",
    "::-webkit-scrollbar": {
      width: "6px",
    },
    "::-webkit-scrollbar-track": {
      background: "#F4F7FB",
      marginTop: "10px",
    },
    "::-webkit-scrollbar-thumb": {
      background: Colors.primary.hard,
    },
    ".c5, .c15": {
      lineHeight: "24px",
      fontFamily: "FuturaMdBT",
      letterSpacing: "0.01em",
    },
    ".c4": {
      lineHeight: "18px",
      fontSize: "13px",
      fontFamily: "FuturaBQ",
      letterSpacing: "0.01em",
      color: "#374062",
      fontWeight: "400",
    },
    ".c14, .c11, .c3, .c0, .li-bullet-0": {
      lineHeight: "18px",
      fontSize: "13px",
      fontFamily: "FuturaBkBT",
      letterSpacing: "0.01em",
      color: "#374062",
      fontWeight: "400 !important",
    },
    ol: {
      fontFamily: "FuturaBkBT",
      lineHeight: "18px",
    },
  })
);

const PaperC = styled(Paper)(() => ({
  width: "645px",
  minHeight: "100px",
  borderRadius: "20px",
  padding: "30px 20px",
  ".title-tnc": {
    marginTop: "0px",
    textAlign: "center",
    marginBottom: "15px",
  },
}));

const CheckBoxWrapper = styled("div")(() => ({
  marginTop: "40px",
}));

const ButtonInfoNext = styled(Button)(() => ({
  fontSize: "15px",
  fontWeight: "700",
  width: "134px",
  height: "43px",
  lineHeight: "20px",
  borderRadius: "10px",
  "&:hover": {
    // backgroundColor: "#ADD8E6",
    textDecoration: "none",
    border: "solid",
  },
}));

const ButtonInfoBack = styled(Button)(() => ({
  fontSize: "15px",
  fontWeight: "700",
  width: "107px",
  height: "43px",
  lineHeight: "20px",
  borderRadius: "10px",
  "&:hover": {
    // backgroundColor: "#ADD8E6",
    textDecoration: "none",
    border: "solid",
  },
}));

// const btnBackSty = {
//   fontSize: "15px",
//   fontWeight: "700",
//   width: "107px",
//   height: "43px",
//   lineHeight: "20px",
// };

// const btnNextSty = {
//   fontSize: "15px",
//   fontWeight: "700",
//   width: "134px",
//   height: "43px",
//   lineHeight: "20px",
// };
const images1 = [
  //   "https://media.istockphoto.com/id/1154261893/id/foto/konsep-bahasa-pemrograman-rekayasa-sistem-pengembangan-perangkat-lunak.jpg?s=1024x1024&w=is&k=20&c=2Pa3JbD11WMKeJkWusI1bghb2MkkArKWz8XkTxM2Pqo=",
  //   "https://www.istockphoto.com/photo/closeup-young-asian-man-software-developers-mentor-leader-manager-talking-to-gm1646501115-533728581?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprogramming&utm_medium=affiliate&utm_source=unsplash&utm_term=programming%3A%3Areduced-affiliates%3Aquarter",
  //   "https://unsplash.com/photos/female-programmer-writing-programming-code-on-laptops-and-desktop-computer-at-cozy-home-workplace-close-up-on-hands-and-keyboard-YXC9PuBblTA",
  "https://images.unsplash.com/photo-1670057037226-b3d65909424f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1667372393138-3a5dc3ba517d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1535551951406-a19828b0a76b?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://www.istockphoto.com/id/foto/dewasa-muda-pria-asia-wanita-pengembang-perangkat-lunak-program-pengkodean-di-gm2161506354-581946895",
  //   "https://media.istockphoto.com/id/1411610158/id/foto/contoh-desain-kode-sumber-bahasa-pemrograman-multi-warna-komposisi-tampak-depan-pada-permukaan.jpg?s=1024x1024&w=is&k=20&c=t_Az-v_qg8BL5gUrfXNZPRDnPbmIkSOXO87sHD0vJQc=",
  //   "https://www.istockphoto.com/id/foto/programmer-asia-menulis-kode-di-laptop-gm1390285717-447301502",
  //   "https://www.istockphoto.com/id/foto/pengembang-insinyur-perangkat-lunak-pria-amerika-menggunakan-komputer-laptop-di-gm1894073868-554023921",
];

const images2 = [
  "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.2.1769275626.1605867161",
  "https://img.freepik.com/free-vector/online-learning-isometric-concept_1284-17947.jpg?size=626&ext=jpg&ga=GA1.2.1769275626.1605867161",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({ handleClose, open }) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hmmm...data masih kosong bro !
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Coba lagi lain waktu.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState(null);
  const [openInfo, setOpenInfo] = useState(false);
  const [openNext, setOpenNext] = useState(false);
  const [isReaded, setIsReaded] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const dataStorage = getLocalStorage("user");
    setData(dataStorage);
  }, []);

  const handleClick = () => {
    setOpenInfo(true);
  };

  const handleScroll = (e, id) => {
    const node = e?.target;
    if (node?.clientHeight + node?.scrollTop >= node?.scrollHeight - 20) {
      setIsReaded(true);
    }
  };

  const tnc = {
    value: `Milan - Legenda Inter Milan, Beppe Bergomi, mengkritik buruknya penampilan lini pertahanan Si Ular melawan AC Milan. Ia menilai bek Inter tua dan lambat.
Inter kalah 1-2 dari AC Milan dalam laga bertajuk Derby della Madonnina pada laga lanjutan Liga Italia di Giuseppe Meazza, Senin (23/9/2024) dini hari WIB. Milan memimpin lebih dulu lewat Christian Pulisic.
Nerazzurri membalasnya lewat Federico Dimarco. Gol penentu Il Diavolo lahir melalui Matteo Gabbia di menit akhir laga.
Baca artikel sepakbola, "Lini Pertahanan Inter Tua dan Lambat" selengkapnya https://sport.detik.com/sepakbola/liga-italia/d-7554950/lini-pertahanan-inter-tua-dan-lambat.
Download Apps Detikcom Sekarang.
Pada laga ini, Inter sebenarnya mampu tampil lebih dominan dari Milan. Mereka mencatatkan penguasaan bola sebesar 57 persen dibanding Rossoneri yang hanya 43 persen.
Namun lini belakang Si Ular tampil buruk di laga ini. Hal tersebut bikin Milan bikin banyak peluang meski lebih sedikit menguasai bola.
Baca artikel sepakbola, "Lini Pertahanan Inter Tua dan Lambat" selengkapnya https://sport.detik.com/sepakbola/liga-italia/d-7554950/lini-pertahanan-inter-tua-dan-lambat.
Download Apps Detikcom Sekarang https://apps.detik.com/detik/ 
Milan mampu melepas 16 tembakan dengan delapan mengarah ke gawang. Sementara, Inter hanya bikin empat tembakan ke arah gawang dari 14 percobaan.
Legenda Inter, Beppe Bergomi, mengkritik buruknya penampilan lini belakang Nerazzurri di laga melawan Milan. Ia menilai lini pertahanan Inter terlalu banyak diisi pemain tua.
Milan mampu mengeksploitasi hal tersebut dengan para pemain cepatnya. Belum lagi, Inter menghadapi Derby Milan di tengah jadwal padat. Para pemain tua ini tentu bakallebih mudah dilanda kelelahan.
"Saat melawan Milan, mereka harus menyadari bahwa Milan dalam kondisi yang lebih baik. Mereka punya waktu jeda. Kami membutuhkan langkah yang tepat. Tanpa itu, semuanya menjadi sulit," ujar Bergomi dikutip dari Football Italia.
"Tanpa pemain tertentu yang kuat dalam satu lawan satu, mereka akan kesulitan saat harus mendominasi jalannya pertandingan. Mereka sangat bagus dalam menjaga pertahanan lawan musim lalu, tetapi apakah Anda melihatnya saat melawan Milan? Saat pemain lain berakselerasi, pertahanan mereka sudah tua dan lambat," jelasnya.
Baca artikel sepakbola, "Lini Pertahanan Inter Tua dan Lambat" selengkapnya https://sport.detik.com/sepakbola/liga-italia/d-7554950/lini-pertahanan-inter-tua-dan-lambat.
Download Apps Detikcom Sekarang https://apps.detik.com/detik/.
Milan - Legenda Inter Milan, Beppe Bergomi, mengkritik buruknya penampilan lini pertahanan Si Ular melawan AC Milan. Ia menilai bek Inter tua dan lambat.
Inter kalah 1-2 dari AC Milan dalam laga bertajuk Derby della Madonnina pada laga lanjutan Liga Italia di Giuseppe Meazza, Senin (23/9/2024) dini hari WIB. Milan memimpin lebih dulu lewat Christian Pulisic.
Nerazzurri membalasnya lewat Federico Dimarco. Gol penentu Il Diavolo lahir melalui Matteo Gabbia di menit akhir laga.
Baca artikel sepakbola, "Lini Pertahanan Inter Tua dan Lambat" selengkapnya https://sport.detik.com/sepakbola/liga-italia/d-7554950/lini-pertahanan-inter-tua-dan-lambat.
Download Apps Detikcom Sekarang.
Pada laga ini, Inter sebenarnya mampu tampil lebih dominan dari Milan. Mereka mencatatkan penguasaan bola sebesar 57 persen dibanding Rossoneri yang hanya 43 persen.
Namun lini belakang Si Ular tampil buruk di laga ini. Hal tersebut bikin Milan bikin banyak peluang meski lebih sedikit menguasai bola.
Baca artikel sepakbola, "Lini Pertahanan Inter Tua dan Lambat" selengkapnya https://sport.detik.com/sepakbola/liga-italia/d-7554950/lini-pertahanan-inter-tua-dan-lambat.
Download Apps Detikcom Sekarang https://apps.detik.com/detik/ 
Milan mampu melepas 16 tembakan dengan delapan mengarah ke gawang. Sementara, Inter hanya bikin empat tembakan ke arah gawang dari 14 percobaan.
Legenda Inter, Beppe Bergomi, mengkritik buruknya penampilan lini belakang Nerazzurri di laga melawan Milan. Ia menilai lini pertahanan Inter terlalu banyak diisi pemain tua.
Milan mampu mengeksploitasi hal tersebut dengan para pemain cepatnya. Belum lagi, Inter menghadapi Derby Milan di tengah jadwal padat. Para pemain tua ini tentu bakallebih mudah dilanda kelelahan.
"Saat melawan Milan, mereka harus menyadari bahwa Milan dalam kondisi yang lebih baik. Mereka punya waktu jeda. Kami membutuhkan langkah yang tepat. Tanpa itu, semuanya menjadi sulit," ujar Bergomi dikutip dari Football Italia.
"Tanpa pemain tertentu yang kuat dalam satu lawan satu, mereka akan kesulitan saat harus mendominasi jalannya pertandingan. Mereka sangat bagus dalam menjaga pertahanan lawan musim lalu, tetapi apakah Anda melihatnya saat melawan Milan? Saat pemain lain berakselerasi, pertahanan mereka sudah tua dan lambat," jelasnya.
Baca artikel sepakbola, "Lini Pertahanan Inter Tua dan Lambat" selengkapnya https://sport.detik.com/sepakbola/liga-italia/d-7554950/lini-pertahanan-inter-tua-dan-lambat.
Download Apps Detikcom Sekarang https://apps.detik.com/detik/.
`,
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <PopupOther type="others" open={openInfo} width="40vw" height="50vw">
          <PaperC>
            <React.Fragment>
              <TextStyle className="title-tnc" size="24px" weight={500}>
                STEP SATU DARI DUA
              </TextStyle>
              <BoxContent>
                <TncContainer
                  id="tnc-container"
                  className="tnc-container"
                  // ref={tncContainerRef}
                  dangerouslySetInnerHTML={{
                    __html: purify.sanitize(tnc?.value || ""),
                  }}
                  onScroll={(e) => handleScroll(e, "blur-TNC")}
                />
              </BoxContent>

              <CheckBoxWrapper>
                <CheckBox
                  checked={check}
                  disabled={!isReaded}
                  onChange={() => {
                    if (isReaded) {
                      setCheck(!check);
                    }
                  }}
                  className="checkBox-label"
                  label="Saya telah membaca, memahami dan menyetujui syarat & ketentuan"
                />
              </CheckBoxWrapper>
            </React.Fragment>

            <SubmitWrapper>
              <ButtonInfoBack
                onClick={() => {
                  setIsReaded(false);
                  setCheck(false);
                  setOpenInfo(false);
                }}
                variant="outlined"
                // style={btnBackSty}
                // onClick={() => {
                //   if (step === 0) {
                //     dispatch(setIsFirstLoginPopup(false));
                //   } else {
                //     setStep(step - 1);
                //   }
                // }}
              >
                KEMBALI
              </ButtonInfoBack>
              <ButtonInfoNext
                onClick={() => setOpenNext(true)}
                variant="outlined"
                disabled={!check}
                // style={btnNextSty}
                // onClick={() => {
                //   if (step < 1) {
                //     setStep(step + 1);
                //     setCheck(false);
                //     setIsReaded(false);
                //   } else {
                //     dispatch(
                //       handleGenerateOtp(() => {
                //         dispatch(setIsFirstLoginPopup(false));
                //         dispatch(setIsOpenOTP(true));
                //       })
                //     );
                //   }
                // }}
              >
                SELANJUTNYA
              </ButtonInfoNext>
            </SubmitWrapper>
          </PaperC>
        </PopupOther>
        <BasicModal open={openNext} handleClose={() => setOpenNext(false)} />
        {/* home  */}
        <section id="home">
          {/* <img src={homeSection.image} /> */}
          <Box sx={{ width: 500, marginRight: 20, marginTop: 8 }}>
            <CarouselResponsive images={images1} />
          </Box>
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
          {/* <img src={coursesSection.image} /> */}
          <Box sx={{ width: 500, marginLeft: 5, marginTop: 8, marginRight: 20}}>
            <CarouselResponsive images={images2} />
          </Box>
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
