import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';

import slide4 from '../assets/images/legal-law-justice-concept_218381-34437.avif';
import slide5 from '../assets/images/close-up-law-scale.jpg';

const slides = [
  {
    image: slide4,
    caption: 'Built for NRIs, Global Indians & Families',
    headingLine1: 'From Confusion to',
    headingLine2: 'Clarity, We Represent What Matters.',
  },
  {
    image: slide5,
    caption: 'Built for NRIs, Global Indians & Families',
    headingLine1: 'From Confusion to',
    headingLine2: 'Clarity, We Represent What Matters.',
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
                backgroundPosition: 'center',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark overlay
                  zIndex: 1,
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: isSmall ? '30%' : isMedium ? '30%' : '30%',
                  left: isSmall ? '5%' : '8%',
                  zIndex: 2,
                  maxWidth: '750px',
                  color: 'white',
                }}
              >
                <Typography
  sx={{
    textTransform: 'uppercase',
    fontSize: '1rem',
    color: '#d4c291',
    display: 'inline-block', // ensures border only under text
    pb: 0.5, // spacing between text and border
  }}
>
  Championing the Rights of NRIs & Global Indians Worldwide
</Typography>

                {/* Headline */}
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: isSmall ? 28 : isMedium ? 42 : 60,
                    lineHeight: isSmall ? '38px' : isMedium ? '56px' : '80px',
                    my: 1,
                    color: '#fff',
                    fontWeight: 500,
                        borderBottom: '1px solid #d4c291',

                  }}
                >
                  {slide.headingLine1}
                  
                    Clarity
          , We Represent What Matters.
                </Typography>
    <Typography
  sx={{
    textTransform: 'uppercase',
    fontSize: '1rem',
    color: '#d4c291',
    display: 'inline-block', // ensures border only under text
    pb: 0.5, // spacing between text and border
  }}
>
Delivering Legal Excellence Beyond Borders</Typography> <br/>
                {/* CTA Button */}
                <Button
                  href="/contact"
                  variant="contained"
                  sx={{
                    backgroundColor: '#c1a05f',
                    color: '#fff',
                    px: isSmall ? 3 : 5,
                    py: isSmall ? 1.2 : 1.8,
                    fontSize: isSmall ? 14 : 16,
                    textTransform: 'capitalize',
                    fontWeight: '700',
                    mt: 3,
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#a7854f',
                      transform: 'scale(1.05)',
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

      {/* Custom Prev Button */}
     {!isSmall && (
  <>
    {/* Custom Prev Button */}
    <Box
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
          backgroundColor: 'transparent',
          color: '#fff',
          padding: '10px',
        }}
      />
    </Box>

    {/* Custom Next Button */}
    <Box
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
          backgroundColor: 'transparent',
          color: '#fff',
          padding: '10px',
        }}
      />
    </Box>
  </>
)}

    </Box>
  );
}
