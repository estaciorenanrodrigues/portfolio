import { Box, Chip, Stack, Typography } from "@mui/material";

import type { Experience } from "../../data";
export default function ExperienceItem({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <Box
      component="article"
      className="experience-row"
      sx={{ borderTop: 1, borderColor: "divider", py: 4 }}
    >
      <Box>
        <Typography variant="body2" color="primary">
          {experience.period}
        </Typography>
        <Typography component="h3" variant="h6" sx={{ mt: 1 }}>
          {experience.company}
        </Typography>
      </Box>
      <Box>
        <Typography component="h4" sx={{ fontWeight: 700, mb: 1 }}>
          {experience.role}
        </Typography>
        <Typography color="text.secondary">{experience.summary}</Typography>
        <Box component="ul" sx={{ pl: 2.5, my: 2, color: "text.secondary" }}>
          {experience.highlights.map((highlight) => (
            <Typography
              component="li"
              variant="body2"
              key={highlight}
              sx={{ mb: 1, lineHeight: 1.8 }}
            >
              {highlight}
            </Typography>
          ))}
        </Box>
        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
          {experience.technologies.map((technology) => (
            <Chip
              key={technology}
              label={technology}
              size="small"
              variant="outlined"
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
