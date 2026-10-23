import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { type Project } from "../../data";

import { externalLinkProps as external } from "../../utils/links";
interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}
export default function ProjectDialog({
  project: selected,
  onClose,
}: ProjectDialogProps) {
  return (
    <Dialog
      open={selected !== null}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      aria-labelledby="project-dialog-title"
    >
      {selected && (
        <>
          <DialogTitle
            id="project-dialog-title"
            aria-label={selected.title}
            sx={{ pr: 7 }}
          >
            {selected.title}
            <IconButton
              aria-label="Fechar detalhes"
              onClick={onClose}
              sx={{ position: "absolute", right: 12, top: 12 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent
            dividers
            tabIndex={0}
            role="region"
            aria-label={`Detalhes de ${selected.title}`}
          >
            <Box
              component="img"
              src={selected.image}
              alt={`Captura da interface do ${selected.title}`}
              sx={{ width: "100%", height: "auto", borderRadius: 1, mb: 3 }}
            />
            <Typography variant="overline" color="primary">
              {selected.category}
            </Typography>
            <Typography variant="h6" component="h3" sx={{ mt: 1 }}>
              {selected.description}
            </Typography>
            <Typography component="h3" sx={{ fontWeight: 700, mt: 3, mb: 1 }}>
              Minha contribuição
            </Typography>
            <Typography color="text.secondary">
              {selected.contribution}
            </Typography>
            <Typography component="h3" sx={{ fontWeight: 700, mt: 3, mb: 2 }}>
              Tecnologias utilizadas
            </Typography>
            <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
              {selected.technologies.map((tech) => (
                <Chip label={tech} key={tech} size="small" />
              ))}
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 2, flexWrap: "wrap", gap: 1 }}>
            <Button href={selected.aboutUrl} {...external}>
              Sobre o produto
            </Button>
            <Button
              href={selected.projectUrl}
              {...external}
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
            >
              Visitar plataforma
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
