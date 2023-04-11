import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { MainForm, Header, LabelText, Field, Button, Info } from "./styled.js";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <MainForm onSubmit={onSubmit}>
      <Header>Currency Converter</Header>
      <p>
        <label>
          <LabelText> Amount in PLN*:</LabelText>
          <Field
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Enter the amount"
            type="number"
            required
            step="0.01"
          />
        </label>
      </p>
      <p>
        <label>
          <LabelText>Currency:</LabelText>
          <Field
            as="select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </Field>
        </label>
      </p>
      <p>
        <Button>Convert</Button>
      </p>
      <Result result={result} />
      <Info>Source: www.oanda.pl of December 15, 2022.</Info>
    </MainForm>
  );
};
