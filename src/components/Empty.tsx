import data from "../data.json";
import iconEmpty from "../assets/empty.svg";
import "../css/empty.css";

export const Empty = () => {
  const { emptyTitle, emptyDesc } = data;

  return (
    <section className="empty_container">
      <img src={iconEmpty} alt="no result illustration" />
      <h3>{emptyTitle}</h3>
      <p>{emptyDesc}</p>
    </section>
  );
};
