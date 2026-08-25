import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";
import ExtensionsList from "./components/ExtensionsList/ExtensionsList";
import Container from "./components/Container/Container";
import { useTheme } from "./context/ThemeContext/ThemeContext";
import { useState } from "react";
import extensionsData from "./data/extensionsData.json";

const App = () => {
  const { theme } = useTheme();
  const [status, setStatus] = useState("all");
  const [extensions, setExtensions] = useState(extensionsData);

  const filteredExtensions = extensions.filter((extension) => {
    if (status === "active") {
      return extension.isActive;
    } else if (status === "inactive") {
      return !extension.isActive;
    } else {
      return extension;
    }
  });

  const removeExtension = (id) => {
    setExtensions((prev) => prev.filter((extension) => extension.id !== id));
  };

  const toggleExtension = (id) => {
    setExtensions((prev) =>
      prev.map((extension) =>
        extension.id === id
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  };

  return (
    <main className="app" data-theme={theme}>
      <Container>
        <Navbar />

        <Filters status={status} setStatus={setStatus} />

        <ExtensionsList
          filteredExtensions={filteredExtensions}
          removeExtension={removeExtension}
          toggleExtension={toggleExtension}
        />
      </Container>
    </main>
  );
};

export default App;
