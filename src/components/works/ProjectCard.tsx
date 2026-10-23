import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { type Project } from "../../data";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}
export default function ProjectCard({
  project,
  index,
  onSelect,
}: ProjectCardProps) {
  return (
    <Card variant="outlined" className="project-card">
      <CardActionArea
        onClick={() => onSelect(project)}
        aria-haspopup="dialog"
        sx={{ height: "100%" }}
      >
        <Box className="project-image-wrap">
          <Box
            component="img"
            src={project.image}
            alt={`Interface do ${project.title}`}
            loading="lazy"
            width={640}
            height={400}
            className="project-image"
          />
        </Box>
        <CardContent sx={{ p: 3 }}>
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="primary">
              {project.category}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              0{index + 1}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h3" sx={{ fontSize: "1.5rem" }}>
              {project.title}
            </Typography>
            <ArrowOutwardIcon fontSize="small" />
          </Stack>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ mt: 2, minHeight: 60 }}
          >
            {project.description}
          </Typography>
          <Stack direction="row" sx={{ gap: 1, flexWrap: "wrap", mt: 3 }}>
            {project.technologies.slice(0, 3).map((tech) => (
              <Chip label={tech} key={tech} size="small" variant="outlined" />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
