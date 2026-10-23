import { Container, CssBaseline, Divider, ThemeProvider } from "@mui/material";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProfessionalBackground from "./components/sections/ProfessionalBackground";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import PersonalProjectsSection from "./components/sections/PersonalProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import WorksSection from "./components/sections/WorksSection";
import useInitialSection from "./hooks/useInitialSection";
import usePortfolioTheme from "./hooks/usePortfolioTheme";

export default function App() {
  const { mode, theme, toggleTheme } = usePortfolioTheme();
  useInitialSection();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header mode={mode} onToggleTheme={toggleTheme} />
      <Container component="main" id="conteudo" maxWidth="lg">
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ProfessionalBackground />
        <Divider />
        <WorksSection />
        <Divider />
        <SkillsSection />
        <PersonalProjectsSection />
        <ContactSection />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
