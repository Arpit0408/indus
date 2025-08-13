import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import indusabout from '../assets/images/indusabout.jpeg';
import Breadcrumb from '../components/Breadcrumb';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // You can change this icon
import PracticeAreaSection from '../components/Homeservice'
import ReviewSlider from '../components/Review'
import Counter from '../components/CounterSection';
import BlogSection from '../components/BlogSection'

export default function AboutSection() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About' },
  ];

  const coreFeatures = [
    'On-ground legal authority across all major jurisdictions in India',
    'Strategic vision drawn from decades of global business experience',
    'Seamless communication, complete confidentiality, and client-first execution',
  ];

  const whoWeWorkWith = [
    'Families resolving property or inheritance issues in India',
    'Professionals & entrepreneurs launching ventures or safeguarding assets',
    'Elders & heirs transferring wealth legally and securely',
    'Victims of fraud or encroachment needing swift and ethical litigation support',
  ];

  return (
    <>
      <Breadcrumb title="About" items={breadcrumbItems} />

      <Box
        component="section"
        sx={{
          pt: { xs: '40px', md: '70px' },
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
            {/* Image Section */}
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
                    src={indusabout}
                    alt="About IndUS Synergy Partners Partners"
                    sx={{ width: '100%', display: 'block', borderRadius: 1 }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Text Section */}
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
                  Built on Trust. Driven by Integrity. Defined by Results.
                </Typography>

                <Typography
                  sx={{
                    color: '#666',
                    fontSize: { xs: '1.2rem', md: '1.28rem' },
                    lineHeight: 1.5,
                    mb: 2,
                  }}
                >
                  Legal matters involving India often feel like navigating a maze — slow, uncertain, and culturally disconnected.
                </Typography>

                <Typography
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.5,
                    mb: 2,
                  }}
                >
                  That’s why we created IndUS Synergy Partners Partners — to give U.S.-based NRIs and global Indian families a reliable, ethical, and powerful alternative to navigating India’s legal and financial systems alone.
                </Typography>

                {/* Core Features as List Buttons */}
                <Typography
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    fontWeight: 500,
                    mb: 1,
                  }}
                >
                  At our core, we are a U.S.-based advisory powerhouse with:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, mb: 3 }}>
                  {coreFeatures.map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 2,
                        px: 2,
                        py: 1.2,
                        fontSize: '0.95rem',
                        color: '#333',
                        fontWeight: 500,
                        boxShadow: 1,
                        '&:hover': {
                          backgroundColor: '#eaeaea',
                        },
                      }}
                    >
                      <CheckCircleIcon sx={{ color: '#d4c291', mr: 1 }} fontSize="small" />
                      {item}
                    </Box>
                  ))}
                </Box>

                {/* Who We Work With as List Buttons */}
                <Typography
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    fontWeight: 500,
                    mb: 1,
                  }}
                >
                  We work with:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, mb: 3 }}>
                  {whoWeWorkWith.map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 2,
                        px: 2,
                        py: 1.2,
                        fontSize: '0.95rem',
                        color: '#333',
                        fontWeight: 500,
                        boxShadow: 1,
                        '&:hover': {
                          backgroundColor: '#eaeaea',
                        },
                      }}
                    >
                      <CheckCircleIcon sx={{ color: '#d4c291', mr: 1 }} fontSize="small" />
                      {item}
                    </Box>
                  ))}
                </Box>

                <Typography
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.5,
                  }}
                >
                  We don’t just respond — we represent, restore, and redefine the outcome.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <PracticeAreaSection />
      <div className="bg-[#fff] mt-10 py-10">
      <ReviewSlider />
      </div>
      <Counter/>
      <BlogSection />
    </>
  );
}
