import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Button, Typography } from "@mui/material";
import { social } from "../../data";

import { externalLinkProps as external } from "../../utils/links";

export default function PersonalProjectsSection() {
  return (
    <Box
      component="section"
      id="projetos"
      className="personal-section"
      sx={{ bgcolor: "background.paper", border: 1, borderColor: "divider" }}
    >
      <Box>
        <Typography className="eyebrow" color="primary">
          05 / PROJETOS PESSOAIS
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, mt: 2 }}
        >
          Sempre construindo
          <br />o próximo passo.
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 500 }}>
          Esta seleção está em atualização. Enquanto isso, explore meus
          repositórios e acompanhe meus projetos no GitHub.
        </Typography>
      </Box>
      <Button
        href={social.github}
        {...external}
        variant="outlined"
        startIcon={<GitHubIcon />}
        endIcon={<ArrowOutwardIcon />}
        sx={{ flexShrink: 0 }}
      >
        Explorar GitHub
      </Button>
    </Box>
  );
}
