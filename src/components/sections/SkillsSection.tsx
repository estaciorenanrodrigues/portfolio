import { Box, Chip, Stack, Typography } from "@mui/material";
import { skills } from "../../data";

import SectionTitle from "../common/SectionTitle";

export default function SkillsSection() {
  return (
    <Box component="section" id="tecnologias" className="section">
      <SectionTitle
        number="04"
        label="TECNOLOGIAS"
        title="Minha caixa de ferramentas."
      />
      <Box className="skills-grid" sx={{ mt: 5 }}>
        {skills.map((group, index) => (
          <Box
            key={group.title}
            sx={{ borderTop: 1, borderColor: "divider", pt: 3 }}
          >
            <Typography variant="caption" color="primary">
              0{index + 1} /
            </Typography>
            <Typography variant="h3" sx={{ fontSize: "1.3rem", mt: 2 }}>
              {group.title}
            </Typography>
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{ mt: 1, mb: 3 }}
            >
              {group.description}
            </Typography>
            <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
              {group.items.map((item) => (
                <Chip key={item} label={item} variant="outlined" />
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
