import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { projects, type Project } from "../../data";

import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../works/ProjectCard";
import ProjectDialog from "../works/ProjectDialog";
export default function WorksSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <>
      <Box component="section" id="trabalhos" className="section">
        <Box className="section-heading">
          <SectionTitle
            number="03"
            label="TRABALHOS PROFISSIONAIS"
            title="Interfaces em ação."
          />
          <Typography color="text.secondary" sx={{ maxWidth: 330 }}>
            Uma seleção de produtos nos quais contribuí com o desenvolvimento
            Front-end.
          </Typography>
        </Box>
        <Box className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </Box>
      </Box>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
