import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";
import ExtensionsList from "./components/ExtensionsList/ExtensionsList";
import Container from "./components/Container/Container";
import { useTheme } from "./context/ThemeContext/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  return (
    <main className="app" data-theme={theme}>
      <Container>
        <Navbar />

        <Filters />

        <ExtensionsList />
      </Container>
    </main>
  );
};

export default App;
