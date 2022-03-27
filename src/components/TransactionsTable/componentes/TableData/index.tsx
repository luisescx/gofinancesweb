import { useMemo } from "react";
import { Transaction } from "../../../../context/TransactionsContext";
import { formatValueToCurrency } from "../../../../utils";

interface TableDataProps {
  transaction: Transaction;
}

export const TableData = ({ transaction }: TableDataProps) => {
  const amount = useMemo(() => {
    return formatValueToCurrency(transaction.amount);
  }, [transaction.amount]);

  return (
    <tr>
      <td>{transaction.title}</td>
      <td className={transaction.type}>{amount}</td>
      <td>{transaction.category}</td>
      <td>
        {new Intl.DateTimeFormat("pt-BR").format(
          new Date(transaction.createdAt)
        )}
      </td>
    </tr>
  );
};
