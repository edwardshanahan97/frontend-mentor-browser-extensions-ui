import "./ExtensionCard.css";

const ExtensionCard = ({
  id,
  logo,
  name,
  description,
  isActive,
  removeExtension,
  toggleExtension,
}) => {
  return (
    <div className="extension-card">
      <img src={logo} alt={name} />

      <div className="extension-card__content">
        <h2 className="extension-card__name">{name}</h2>

        <p className="extension-card__description">{description}</p>
      </div>

      <div className="extension-card__buttons">
        <button
          onClick={() => removeExtension(id)}
          className="extension-card__button"
        >
          Remove
        </button>

        <label className="extension-card__switch">
          <input
            onChange={() => toggleExtension(id)}
            type="checkbox"
            checked={isActive}
          />
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default ExtensionCard;
