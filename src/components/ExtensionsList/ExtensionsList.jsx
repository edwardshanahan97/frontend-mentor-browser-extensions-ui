import "./ExtensionsList.css";
import ExtensionCard from "../ExtensionCard/ExtensionCard";

const ExtensionsList = ({
  filteredExtensions,
  removeExtension,
  toggleExtension,
}) => {
  return (
    <section className="extensions-list">
      {filteredExtensions.map((extension) => (
        <ExtensionCard
          key={extension.id}
          id={extension.id}
          logo={extension.logo}
          name={extension.name}
          description={extension.description}
          isActive={extension.isActive}
          removeExtension={removeExtension}
          toggleExtension={toggleExtension}
        />
      ))}
    </section>
  );
};

export default ExtensionsList;
