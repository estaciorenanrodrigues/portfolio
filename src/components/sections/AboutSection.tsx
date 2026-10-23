import { Box, Typography } from "@mui/material";
import { profile } from "../../data";
import LinkedInProfile from "../LinkedInProfile";

import SectionTitle from "../common/SectionTitle";

export default function AboutSection() {
  return (
    <Box component="section" id="sobre" className="section about-grid">
      <SectionTitle
        number="01"
        label="SOBRE MIM"
        title={
          <>
            Prazer,
            <br />
            {profile.name}.
          </>
        }
      />
      <Box>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "1.65rem", md: "2rem" }, mb: 3 }}
        >
          Front-end Sênior.
          <br />
          Da web ao mobile.
        </Typography>
        <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
          {profile.location}
        </Typography>
        {profile.about.map((paragraph) => (
          <Typography key={paragraph} color="text.secondary" sx={{ mb: 2 }}>
            {paragraph}
          </Typography>
        ))}
        <LinkedInProfile />
      </Box>
    </Box>
  );
}
