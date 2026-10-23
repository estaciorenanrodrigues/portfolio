import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { profile } from "../data";

export default function LinkedInProfile() {
  return (
    <Card
      component="aside"
      variant="outlined"
      aria-labelledby="linkedin-profile-title"
      sx={{ mt: 4 }}
    >
      <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <LinkedInIcon sx={{ fontSize: 36, color: "primary.main" }} />
          <Box>
            <Typography
              id="linkedin-profile-title"
              component="h3"
              sx={{ fontWeight: 700 }}
            >
              Minha trajetória no LinkedIn
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profile.fullName}
            </Typography>
          </Box>
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Conheça minha experiência profissional, formação e publicações.
          Conecte-se comigo para continuarmos a conversa.
        </Typography>
        <Button
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer me"
          endIcon={<ArrowOutwardIcon />}
          sx={{ mt: 1, px: 0 }}
        >
          Ver perfil no LinkedIn
        </Button>
        <Button
          href={profile.linkedinPdf}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<ArrowOutwardIcon />}
          sx={{ mt: 1, ml: { xs: 0, sm: 2 } }}
        >
          Ler perfil em PDF
        </Button>
      </CardContent>
    </Card>
  );
}
