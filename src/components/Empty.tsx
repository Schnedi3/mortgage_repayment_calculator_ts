import iconEmpty from "../assets/empty.svg";

export const Empty = () => {
  return (
    <section>
      <img src={iconEmpty} />
      <h3>Results shown here</h3>
      <p>
        Complete the form and clcik "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </section>
  );
};
