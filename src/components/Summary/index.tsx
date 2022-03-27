import { Container, Card, CardHeader, Name, Value } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { useMemo } from "react";
import { formatValueToCurrency } from "../../utils";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = useMemo(() => {
    const values = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "deposit") {
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
        } else {
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount;
        }

        return acc;
      },
      { deposits: 0, withdraws: 0, total: 0 }
    );

    return {
      deposits: formatValueToCurrency(values.deposits),
      withdraws:
        values.withdraws === 0
          ? formatValueToCurrency(values.withdraws)
          : `- ${formatValueToCurrency(values.withdraws)}`,
      total: formatValueToCurrency(values.total),
    };
  }, [transactions]);

  return (
    <Container>
      <Card>
        <CardHeader>
          <Name>Entradas</Name>
          <img src={incomeImg} alt="Entradas" />
        </CardHeader>

        <Value>{summary.deposits}</Value>
      </Card>

      <Card>
        <CardHeader>
          <Name>Saídas</Name>
          <img src={outcomeImg} alt="Saídas" />
        </CardHeader>

        <Value>{summary.withdraws}</Value>
      </Card>

      <Card isTotal>
        <CardHeader>
          <Name isTotal>Total</Name>
          <img src={totalImg} alt="Total" />
        </CardHeader>

        <Value isTotal>{summary.total}</Value>
      </Card>
    </Container>
  );
}
