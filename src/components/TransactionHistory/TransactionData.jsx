import css from "./TransactionHistory.module.css";
const TransactionHeader = ({ type, amount, currency }) => {
  return (
    <tr className={css.transactionTr}>
      <td className={css.transactionTd}>{type}</td>
      <td className={css.transactionTd}>{amount}</td>
      <td className={css.transactionTd}>{currency}</td>
    </tr>
  );
};

export default TransactionHeader;
