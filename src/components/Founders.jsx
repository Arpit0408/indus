import React from 'react';
import { Box, Typography, Paper, useMediaQuery, useTheme, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import gdalviImg from '../assets/images/gdalvi.jpeg';
import kaantiImg from '../assets/images/kaanti.jpeg';

const founders = [
  {
    name: "Sr. Advocate Gaanesh R. Daalvi",
    title: "Senior High Court Advocate | Supreme Court Litigator",
    quote: "Delay is the deadliest form of denial. We eliminate delay with decisive action.",
    description: `With over 25 years of litigation experience, Gaanesh Daalvi has become a trusted name across India’s courts—from the High Courts of Mumbai and Delhi to family and property tribunals nationwide. He is a seasoned litigator for inheritance disputes, land encroachment, family separation, and civil/criminal representation. As your advocate, he represents your interests and relentlessly pursues your legal victory—without you ever needing to step into an Indian courtroom.`,
     image: gdalviImg,
     alt: "Sr. Advocate Gaanesh R. Daalvi"
  },
  {
    name: "Kaanti Suresh Shetty",
    title: "Global Strategy Leader | Legacy Architect | DFW-Based",
    quote: "You don’t need to navigate legal India alone. We’ve built the bridge. Walk it with confidence.",
    description: `Kaanti Suresh Shetty brings decades of leadership across international development, strategic franchising, real estate investment, and legacy consulting. Formerly Sr. Assessor for Dubai Quality Awards, she now advises families and entrepreneurs on converting chaos into clarity and risk into structure—while mentoring future leaders and guiding legacy transitions across borders.`,
     image: kaantiImg,
    alt: "Kaanti Suresh Shetty"
  }
];

const FounderCard = ({ founder, reverse }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Fade in={inView} timeout={800}>
      <Paper
        elevation={4}
        ref={ref}
        sx={{
          p: { xs: 2, md: 4 },
          mb: 8,
          bgcolor: 'background.paper',
          borderRadius: 3,
          maxWidth: 1400,
          mx: 'auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : reverse ? 'row-reverse' : 'row',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Box
          component="img"
          src={founder.image}
          alt={founder.alt}
          sx={{
            width: isMobile ? '100%' : 400,
            height: 400,
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: 3,
            boxShadow: 0,
            flexShrink: 0,
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="700" gutterBottom>
            {founder.name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: '#272c3f', fontWeight: 600 }}
            gutterBottom
          >
            {founder.title}
          </Typography>
          <Typography
            variant="body1"
            fontStyle="italic"
            color="text.secondary"
            sx={{ borderLeft: `4px solid #272c3f`, pl: 2, mb: 3 }}
          >
            “{founder.quote}”
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.6, xs: '0.95rem', md: '1rem' }}>
            {founder.description}
          </Typography>
        </Box>
      </Paper>
    </Fade>
  );
};

export default function FoundersSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        bgcolor: 'white',
        py: { xs: 8, md: 16 },
        px: isMobile ? '10px' : '2rem',
        maxWidth: 1500,
        mx: 'auto',
      }}
    >
   <Typography
                  variant="h4"
                  sx={{
                    color: '#282e3f',
                    mb: 4.5,
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: { xs: '1.8rem', md: '2.25rem' },
                    lineHeight: 1.2,
                  }}
                >
               


        Meet Our Founders
      </Typography>

      {founders.map((founder, index) => (
        <FounderCard key={founder.name} founder={founder} reverse={index % 2 === 1} />
      ))}
    </Box>
  );
}
