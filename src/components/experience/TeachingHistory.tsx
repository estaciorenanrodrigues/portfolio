import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { teachingExperience } from "../../data";

export default function TeachingHistory() {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        bgcolor: "transparent",
        border: 1,
        borderColor: "divider",
        "&&": { borderRadius: "var(--radius-control)" },
        "&::before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="teaching-heading"
        aria-controls="teaching-content"
      >
        <Typography component="h3" sx={{ fontWeight: 650 }}>
          Minha base no ensino de tecnologia · 2008 a 2015
        </Typography>
      </AccordionSummary>
      <AccordionDetails id="teaching-content">
        <Stack spacing={3}>
          {teachingExperience.map((experience) => (
            <Box key={experience.company}>
              <Typography component="h4" sx={{ fontWeight: 650 }}>
                {experience.company}
              </Typography>
              <Typography variant="body2" color="primary">
                {experience.role} · {experience.period}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {experience.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
