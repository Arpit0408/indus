import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
// import aboutMainImage from '../assets/images/about/2.jpg';
// import signatureImage from '../assets/images/about/1.png';
import founders from '../assets/images/founders.jpeg';
export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: '70px', md: '100px' },
        pb: { xs: '40px', md: '80px' },
      }}
    >
      <Box
  sx={{
    px: { xs: '10px', md: '2rem' },
    maxWidth: '1500px',
    mx: 'auto',
  }}
>

        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={{ xs: 'column', md: 'row' }}
        >
          {/* Image Section first on mobile */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }} sx={{ maxWidth: { md: '49vw' } }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 520,
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    backgroundColor: '#d4c291',
                    width: '100%',
                    height: '100%',
                    left: '-15px',
                    top: '-15px',
                    zIndex: -1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={founders}
                  alt="About IndUS Synergy Partners "
                  sx={{ width: '100%', display: 'block', borderRadius: 1 }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Text Content second on mobile */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }} sx={{ maxWidth: { md: '49vw' } }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: '#282e3f',
                  mb: 1.5,
                  fontWeight: 600,
                  fontSize: { xs: '1.8rem', md: '2.25rem' },
                  lineHeight: 1.2,
                }}
              >
                About Us
              </Typography>

              <Typography
                sx={{
                  color: '#666',
                  fontSize: { xs: '1.2rem', md: '1.28rem' },
                  lineHeight: 1.5,
                  mb: 2,
                }}
              >
                <strong>Legal Authority | Strategic Foresight | Seamless Cross-Border Solutions.</strong><br />
                “When your legacy crosses continents, your legal partner should too.”
              </Typography>

              <Typography
                sx={{
                  color: '#666',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.5,
                  mb: 2,
                }}
              >
                At IndUS Synergy Partners Partners, we are not just attorneys or advisors. We are your partners in clarity—bridging the complexity of Indian legal systems with the confidence of U.S.-based coordination.
              </Typography>

              <Typography
                sx={{
                  color: '#666',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.5,
                  mb: 2,
                }}
              >
                Founded by a renowned Indian High Court Advocate and a globally respected development strategist based in the United States, our firm delivers elite legal representation, wealth planning, and business advisory services specially tailored for NRIs, international families, and professionals managing affairs across India and the U.S.
              </Typography>

              <Typography
                sx={{
                  color: '#666',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.5,
                  mb: 3,
                }}
              >
                No confusion.
                No corruption.
                Just action, structure, comfort.
              </Typography>

              <Button
                variant="contained"
                href="/about"
                sx={{
                  backgroundColor: '#d4c291',
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 600,
                  px: 5,
                  py: 1.25,
                  textTransform: 'capitalize',
                  '&:hover': {
                    backgroundColor: '#d4c291',
                  },
                  mb: 2,
                }}
              >
                More About Us..
              </Button>

         
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
