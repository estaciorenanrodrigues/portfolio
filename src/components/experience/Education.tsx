import { Box, Chip, Stack, Typography } from "@mui/material";
import { certifications, education } from "../../data";

export default function Education() {
  return (
    <>
      <Typography variant="h3" sx={{ fontSize: "1.8rem", mt: 7, mb: 3 }}>
        Formação acadêmica
      </Typography>
      <Box className="education-grid">
        {education.map((item) => (
          <Box
            key={item.institution + item.degree}
            sx={{ borderTop: 1, borderColor: "divider", pt: 3 }}
          >
            <Typography variant="caption" color="primary">
              {item.period}
            </Typography>
            <Typography component="h4" sx={{ fontWeight: 650, my: 1 }}>
              {item.degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.institution}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography
        component="h3"
        sx={{ fontSize: "1.2rem", fontWeight: 650, mt: 5, mb: 2 }}
      >
        Certificações
      </Typography>
      <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
        {certifications.map((certification) => (
          <Chip
            label={certification}
            key={certification}
            variant="outlined"
            sx={{
              maxWidth: "100%",
              height: "auto",
              "& .MuiChip-label": { whiteSpace: "normal", py: 1 },
            }}
          />
        ))}
      </Stack>
    </>
  );
}
