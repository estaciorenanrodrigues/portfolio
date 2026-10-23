import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, Stack, Typography } from "@mui/material";
import { profile, social } from "../../data";

import { externalLinkProps as external } from "../../utils/links";

export default function ContactSection() {
  return (
    <Box component="section" id="contato" className="section contact-section">
      <Typography className="eyebrow" color="primary">
        06 / VAMOS CONVERSAR
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2.8rem", md: "4.8rem" }, mt: 3 }}
      >
        Seu próximo projeto
        <br />
        começa com uma conversa.
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ my: 3, maxWidth: 680, mx: "auto" }}
      >
        {profile.opportunity}
      </Typography>
      <Stack
        direction="row"
        sx={{ justifyContent: "center", flexWrap: "wrap", gap: 2 }}
      >
        <Button
          href={social.whatsapp}
          {...external}
          variant="contained"
          startIcon={<WhatsAppIcon />}
        >
          Fale comigo
        </Button>
        <Button
          href={social.linkedin}
          {...external}
          variant="outlined"
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
        <Button
          href={social.github}
          {...external}
          variant="outlined"
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      </Stack>
    </Box>
  );
}
