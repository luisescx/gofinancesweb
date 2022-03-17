import { Container, Card, CardHeader, Name, Value } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <Name>Entradas</Name>
          <img src={incomeImg} alt="Entradas" />
        </CardHeader>

        <Value>R$ 1000,00</Value>
      </Card>

      <Card>
        <CardHeader>
          <Name>Saídas</Name>
          <img src={outcomeImg} alt="Saídas" />
        </CardHeader>

        <Value>- R$ 500,00</Value>
      </Card>

      <Card isTotal>
        <CardHeader>
          <Name isTotal>Total</Name>
          <img src={totalImg} alt="Total" />
        </CardHeader>

        <Value isTotal>R$ 1000,00</Value>
      </Card>
    </Container>
  );
}
