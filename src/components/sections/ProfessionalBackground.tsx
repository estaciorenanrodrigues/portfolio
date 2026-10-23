import { Box, Stack } from "@mui/material";
import { experiences } from "../../data";
import SectionTitle from "../common/SectionTitle";
import Education from "../experience/Education";
import ExperienceItem from "../experience/ExperienceItem";
import TeachingHistory from "../experience/TeachingHistory";

export default function ProfessionalBackground() {
  return (
    <Box component="section" id="experiencia" className="section">
      <Box sx={{ mb: 5 }}>
        <SectionTitle
          number="02"
          label="TRAJETÓRIA PROFISSIONAL"
          title={
            <>
              Experiência que conecta
              <br />
              tecnologia e negócio.
            </>
          }
        />
      </Box>
      <Stack spacing={0}>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </Stack>
      <TeachingHistory />
      <Education />
    </Box>
  );
}
