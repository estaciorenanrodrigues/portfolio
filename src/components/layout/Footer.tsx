import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider" }}>
      <Container maxWidth="lg" className="footer-inner">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Estácio Renan
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Feito com React & Material UI.
        </Typography>
        <Box component="a" href="#inicio" className="nav-link">
          Voltar ao topo ↑
        </Box>
      </Container>
    </Box>
  );
}
