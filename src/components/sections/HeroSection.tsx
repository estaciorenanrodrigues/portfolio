import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button, Stack, Typography } from "@mui/material";
import { profile } from "../../data";

import { externalLinkProps as external } from "../../utils/links";

export default function HeroSection() {
  return (
    <Box component="section" id="inicio" className="hero section">
      <Box className="hero-copy">
        <Typography className="eyebrow" color="primary">
          {profile.name.toLocaleUpperCase("pt-BR")} ·{" "}
          {profile.headline.toLocaleUpperCase("pt-BR")}
        </Typography>
        <Typography variant="h1" sx={{ my: 3 }}>
          Ideias ganham
          <br />
          forma na
          <Box
            component="span"
            sx={{ display: "block", color: "primary.main" }}
          >
            interface.
          </Box>
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 480, fontSize: "1.1rem" }}
        >
          {profile.introduction}
        </Typography>
        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 2, mt: 4 }}>
          <Button
            href="#trabalhos"
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
          >
            Conheça meu trabalho
          </Button>
          <Button
            href={profile.linkedinPdf}
            {...external}
            startIcon={<DownloadOutlinedIcon />}
          >
            Ver perfil em PDF
          </Button>
          <Button
            href={profile.linkedin}
            {...external}
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center", mt: 5 }}>
          <Box sx={{ width: 30, height: 1, bgcolor: "divider" }} />
          <Typography variant="body2" color="text.secondary">
            Código, colaboração e aprendizado contínuo.
          </Typography>
        </Stack>
      </Box>
      <Box
        component="img"
        src={profile.photo}
        alt={profile.name}
        width={440}
        height={440}
        className="portrait"
        fetchPriority="high"
      />
      <Box
        component="a"
        href="#sobre"
        className="explore"
        sx={{ color: "text.secondary" }}
      >
        <ArrowDownwardIcon fontSize="small" /> Explore o portfólio
      </Box>
    </Box>
  );
}
