import React from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#000000', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Terms and Conditions – IndUS Synergy Partners
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Effective Date: May 1, 2025
        </Typography>
        <Typography paragraph>
          By accessing or using our website [www.indussynergypartners.org] or services, you agree to these Terms and Conditions. If you do not agree, please refrain from using our website or services.
        </Typography>

        <Typography variant="h6" gutterBottom>1. Use of Website</Typography>
        <Typography paragraph>
          Our website provides general information about our legal services and does not constitute legal advice. You agree not to:
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem disablePadding>• Use the website for unlawful purposes or in violation of these Terms.</ListItem>
          <ListItem disablePadding>• Interfere with the website’s functionality or security.</ListItem>
        </List>
        <Typography paragraph>
          We reserve the right to restrict or terminate access for violations of these Terms.
        </Typography>

        <Typography variant="h6" gutterBottom>2. No Attorney–Client Relationship</Typography>
        <Typography paragraph>
          Viewing our website or contacting us does not establish an attorney–client relationship. Such a relationship requires a signed engagement agreement. Communications sent to us may not be treated as confidential until an agreement is in place. We take reasonable steps to protect the confidentiality of inquiries.
        </Typography>

        <Typography variant="h6" gutterBottom>3. Intellectual Property</Typography>
        <Typography paragraph>
          All content, logos, designs, and materials on our website are owned by IndUS Synergy Partners and protected by U.S. and Indian copyright laws. You may not reproduce, distribute, or use them without written permission.
        </Typography>

        <Typography variant="h6" gutterBottom>4. Limitation of Liability</Typography>
        <Typography paragraph>
          To the fullest extent permitted by law, IndUS Synergy Partners is not liable for any damages (e.g., direct, indirect, incidental) arising from your use of our website or services, except where such limitations are prohibited by applicable law (e.g., in cases of gross negligence).
        </Typography>

        <Typography variant="h6" gutterBottom>5. Third-Party Links</Typography>
        <Typography paragraph>
          Our website may link to external sites for convenience. We do not endorse or control their content, services, or privacy practices and are not liable for them.
        </Typography>

        <Typography variant="h6" gutterBottom>6. Indemnification</Typography>
        <Typography paragraph>
          You agree to indemnify and hold harmless IndUS Synergy Partners, its affiliates, and employees from claims, liabilities, or expenses arising from your misuse of the website or violation of these Terms, provided such indemnification is reasonable under applicable law.
        </Typography>

        <Typography variant="h6" gutterBottom>7. Accessibility</Typography>
        <Typography paragraph>
          We are committed to making our website accessible in compliance with the Americans with Disabilities Act (ADA) and Web Content Accessibility Guidelines (WCAG 2.1). Contact us if you encounter accessibility issues.
        </Typography>

        <Typography variant="h6" gutterBottom>8. Governing Law and Dispute Resolution</Typography>
        <Typography paragraph>
          These Terms are governed by the laws of the State of Texas, USA, for U.S.-based users, and Indian law for India-based users, without regard to conflict of law principles. Disputes will be resolved through arbitration in Dallas, Texas (for U.S. users) or New Delhi, India (for Indian users), unless otherwise required by law.
        </Typography>

        <Typography variant="h6" gutterBottom>9. Consumer Protections (India)</Typography>
        <Typography paragraph>
          For Indian users, our services comply with the Consumer Protection Act, 2019. Details on cancellations, refunds, or service terms will be provided in engagement agreements.
        </Typography>

        <Typography variant="h6" gutterBottom>10. Changes to Terms</Typography>
        <Typography paragraph>
          We may update these Terms at any time. Updates will be posted on our website with a revised effective date, and we will notify users via email or a website notice for material changes. Continued use constitutes acceptance of the revised Terms.
        </Typography>

        <Typography variant="h6" gutterBottom>11. Contact Us</Typography>
        <Typography paragraph>
          For questions or concerns:
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem disablePadding>• Email: contact@indussynergypartners.org</ListItem>
          <ListItem disablePadding>• Phone: +1 (361) 910-5313</ListItem>
          <ListItem disablePadding>• Address: IndUS Synergy Partners, Dallas, Texas, USA</ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
