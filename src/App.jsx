import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";
import ExtensionsList from "./components/ExtensionsList/ExtensionsList";
import Container from "./components/Container/Container";

const App = () => {
  return (
    <main>
      <Container>
        <Navbar />

        <Filters />

        <ExtensionsList />
      </Container>
    </main>
  );
};

export default App;
