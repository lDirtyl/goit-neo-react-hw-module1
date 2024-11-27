import TransactionData from "./TransactionData";
import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.transactionThead}>
        <tr className={css.transactionThead}>
          <th className={css.transactionTh}>Type</th>
          <th className={css.transactionTh}>Amount</th>
          <th className={css.transactionTh}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map((item) => (
          <TransactionData key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
