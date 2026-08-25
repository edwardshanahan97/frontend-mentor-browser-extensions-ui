import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";
import ExtensionsList from "./components/ExtensionsList/ExtensionsList";
import Container from "./components/Container/Container";
import { useTheme } from "./context/ThemeContext/ThemeContext";
import { useState } from "react";

const App = () => {
  const { theme } = useTheme();
  const [status, setStatus] = useState("all");

  return (
    <main className="app" data-theme={theme}>
      <Container>
        <Navbar />

        <Filters status={status} setStatus={setStatus} />

        <ExtensionsList />
      </Container>
    </main>
  );
};

export default App;
