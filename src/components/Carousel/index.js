import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Box from "@mui/material/Box";


const Crsl = ({ images, onChange, onClickItem, onClickThumb }) => {
  return (
    // <Box sx={{ width: 500, marginRight: 20, marginTop: 8 }}>
      <Carousel
        // showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
        infiniteLoop
        useKeyboardArrows
        autoPlay
      >
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    // </Box>
  );
};

export default Crsl;
