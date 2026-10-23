import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { navigation, profile } from "../../data";

interface HeaderProps {
  mode: "light" | "dark";
  onToggleTheme: () => void;
}
export default function Header({ mode, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          bgcolor: "background.default",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg" className="header-inner">
          <Box
            component="a"
            href="#inicio"
            className="brand"
            aria-label={`er. — ${profile.name}, início`}
          >
            er
            <Box component="span" sx={{ color: "primary.main" }}>
              .
            </Box>
          </Box>
          <Stack
            component="nav"
            aria-label="Navegação principal"
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navigation.slice(1, 5).map((item) => (
              <Box
                component="a"
                className="nav-link"
                href={`#${item.id}`}
                key={item.id}
              >
                {item.label}
              </Box>
            ))}
          </Stack>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Tooltip
              title={
                mode === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
              }
            >
              <IconButton
                aria-label={
                  mode === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
                }
                onClick={onToggleTheme}
              >
                {mode === "dark" ? (
                  <LightModeOutlinedIcon fontSize="small" />
                ) : (
                  <DarkModeOutlinedIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
            <Button
              href="#contato"
              variant="outlined"
              size="small"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
              endIcon={<ArrowOutwardIcon />}
            >
              Vamos conversar
            </Button>
            <IconButton
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "mobile-navigation" : undefined}
              aria-haspopup="dialog"
              onClick={() => setMenuOpen(true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{
          paper: {
            id: "mobile-navigation",
            "aria-labelledby": "mobile-navigation-title",
          },
        }}
      >
        <Box sx={{ width: 280, maxWidth: "100vw", p: 3 }}>
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h6" id="mobile-navigation-title">
              Navegação
            </Typography>
            <IconButton
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={1}>
            {navigation.map((item) => (
              <Button
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                sx={{ justifyContent: "flex-start" }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
