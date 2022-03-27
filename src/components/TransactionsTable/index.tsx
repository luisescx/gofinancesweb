import { useTransactions } from "../../hooks/useTransactions";
import { TableData } from "./componentes/TableData";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <TableData key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
