import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';

import slide4 from '../assets/images/photorealistic-lawyer-environment.jpg';
import slide5 from '../assets/images/close-up-law-scale.jpg';

const slides = [
  {
    image: slide4,
    caption: 'Seamless Cross-Border Legal Solutions',
    headingLine1: 'Bridging U.S. Confidence',
    headingLine2: 'With Indian Legal Authority.',
  },
  {
    image: slide5,
    caption: 'Built for NRIs, Global Indians & Families',
    headingLine1: 'From Confusion to Clarity,',
    headingLine2: 'We Represent What Matters.',
  },
];

export default function HeroSection() {
  const [swiper, setSwiper] = useState(null);
  const isSmall = useMediaQuery('(max-width:600px)');
  const isMedium = useMediaQuery('(max-width:960px)');

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: '80vh',
        overflow: 'hidden',
        zIndex: 20,
        padding: 0,
        margin: 0,
      }}
    >
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiper}
        loop
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: 'relative',
                height: '80vh',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                
                backgroundPosition: 'top',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  zIndex: 1,
                  padding: '0px',
                  margin:'0px'
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: isSmall ? '20%' : isMedium ? '10%' : '20%',
                  left: isSmall ? '5%' : '8%',
                  zIndex: 2,
                  maxWidth: '700px',
                  color: 'white',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: isSmall ? 16 : 20, fontWeight: 300, color: '#fff' }}
                >
                  {slide.caption}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: isSmall ? 28 : isMedium ? 42 : 60,
                    lineHeight: isSmall ? '38px' : isMedium ? '56px' : '80px',
                    my: 2,
                    color: '#fff',
                  }}
                >
                  {slide.headingLine1}
                  <br />
                  {slide.headingLine2}
                </Typography>

                <Button
                  href="/contact"
                  variant="contained"
                  sx={{
                    backgroundColor: '#d4c291',
                    color: '#fff',
                    px: isSmall ? 2 : 4,
                    py: isSmall ? 1 : 1.5,
                    fontSize: isSmall ? 14 : 16,
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '-60px',
                      transform: 'translateY(-50%)',
                      width: '85px',
                      height: '2px',
                      backgroundColor: '#fff',
                      transition: 'left 0.3s ease',
                      display: isMedium ? 'none' : 'block',
                    },
                    '&:hover::before': {
                      left: '-95px',
                    },
                    '&:hover': {
                      backgroundColor: '#d4c291',
                    },
                  }}
                >
                  Talk to us today
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <Box
        className="custom-prev"
        onClick={() => swiper?.slidePrev()}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          transform: 'translateY(-50%)',
          zIndex: 30,
          cursor: 'pointer',
        }}
      >
        <ArrowBackIosNewIcon
          sx={{
            width: 50,
            height: 50,
            border: '1px solid #959595',
            borderRadius: '5px',
            backgroundColor: '#362c2c00',
            color: '#fff',
            padding: '10px',
          }}
        />
      </Box>

      <Box
        className="custom-next"
        onClick={() => swiper?.slideNext()}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          zIndex: 30,
          cursor: 'pointer',
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            width: 50,
            height: 50,
            border: '1px solid #959595',
            borderRadius: '5px',
            backgroundColor: '#362c2c00',
            color: '#fff',
            padding: '10px',
          }}
        />
      </Box>
    </Box>
  );
}
