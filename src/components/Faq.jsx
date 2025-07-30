import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  Fade,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "Can I pursue a property case in India without traveling there?",
    answer:
      "Absolutely. Our India-based legal team, led by Sr. Advocate Daalvi, handles all on-ground representation while you coordinate from the U.S.",
  },
  {
    question: "What documents do I need to file for inheritance or succession?",
    answer:
      "We guide you step-by-step. Typically, you’ll need the death certificate, identity proof, property documents, and relationship proof. We assist in notarization, affidavits, and submission.",
  },
  {
    question: "What if someone is illegally occupying my land in India?",
    answer:
      "We specialize in such cases. We’ll initiate legal action, verify title records, and recover rightful possession through court or settlement.",
  },
  {
    question: "Can you draft my Power of Attorney from the U.S.?",
    answer:
      "Yes. We handle drafting, notarization, apostille, and Indian compliance. You won’t need to visit an embassy unless legally required.",
  },
  {
    question: "I don’t understand how Indian probate works. Can you help?",
    answer:
      "Absolutely. We handle estate petitions, court filings, and execute the distribution legally and seamlessly—without the emotional or logistical burden on your family.",
  },
  {
    question: "What’s the cost of hiring you?",
    answer:
      "Your first consultation is free. We provide transparent, case-based pricing, and offer premium legal value compared to long-distance travel or uncertain agents.",
  },
];

export default function FAQSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        bgcolor: "#f9f9fb",
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 6 },
        maxWidth: 1500,
        mx: "auto",
      }}
    >
      <style>{`
        .MuiAccordionSummary-root:hover {
          background-color: transparent !important;
        }
        .MuiAccordionSummary-root.Mui-focusVisible {
          background-color: transparent !important;
        }
        .MuiAccordionSummary-root.Mui-focusVisible:after {
          outline: none !important;
          box-shadow: none !important;
        }
        .MuiAccordion-root:hover {
          background-color: transparent !important;
        }
        .MuiAccordion-root.Mui-expanded {
          background-color: #e6f0ff !important;
        }
        .MuiTouchRipple-root {
          display: none !important;
        }
      `}</style>

      <Grid
        container
        spacing={6}
        alignItems="center"
        direction={isMobile ? "column" : "row"}
      >
        <Grid item xs={12} md={12}>
          <Fade in={faqInView} timeout={800}>
            <Box ref={faqRef}>
              <Typography
                variant="h3"
                fontWeight={700}
                gutterBottom
                sx={{
                  color: "#272c3f",
                  textAlign: "center",
                  fontSize: "1.8rem",
                  [theme.breakpoints.up("md")]: {
                    fontSize: "2.25rem",
                  },
                }}
              >
                Frequently Asked Questions
              </Typography>

              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === index}
                  onChange={handleChange(index)}
                  sx={{
                    boxShadow: 3,
                    mb: 2,
                    borderRadius: 2,
                    "&:before": { display: "none" },
                    bgcolor: expanded === index ? "#e6f0ff" : "white",
                    transition: "background-color 0.3s ease",
                    cursor: "default",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#272c3f",
                          transform:
                            expanded === index ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    }
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={{ px: 3, py: 2 }}
                    disableRipple
                  >
                    <Typography
                      fontWeight={600}
                      sx={{
                        color: "#272c3f",
                        fontSize: "0.95rem",
                        [theme.breakpoints.up("md")]: {
                          fontSize: "1rem",
                        },
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                        [theme.breakpoints.up("md")]: {
                          fontSize: "1rem",
                        },
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
}
