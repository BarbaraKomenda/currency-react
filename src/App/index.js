import { useState } from "react";
import { Container } from "./styled.js";
import { Form } from "./Form";
import { currencies } from "./currencies";
import { Time } from "./Time";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container>
      <Time />
      <Form result={result} calculateResult={calculateResult} />
    </Container>
  );
}

export default App;
