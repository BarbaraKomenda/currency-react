import { EndResult } from "./styled.js";

export const Result = ({ result}) => (
    <EndResult>
        {!!result && (
            < >
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
            {" "}
              <strong>
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
                </>
        )}
    </EndResult>
);
