import "./Filters.css";

const Filters = ({ status, setStatus }) => {
  return (
    <section className="filters">
      <h1>Extensions List</h1>

      <div className="filters__buttons">
        <button
          onClick={() => setStatus("all")}
          className={`filters__button ${status === "all" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => setStatus("active")}
          className={`filters__button ${status === "active" ? "active" : ""}`}
        >
          Active
        </button>
        <button
          onClick={() => setStatus("inactive")}
          className={`filters__button ${status === "inactive" ? "active" : ""}`}
        >
          Inactive
        </button>
      </div>
    </section>
  );
};

export default Filters;
