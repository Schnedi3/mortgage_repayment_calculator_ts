import iconEmpty from "../assets/empty.svg";
import "../css/empty.css";

export const Empty = () => {
  return (
    <section className="empty_container">
      <img src={iconEmpty} alt="no result illustration" />
      <h3>Results shown here</h3>
      <p>
        Complete the form and clcik "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </section>
  );
};
