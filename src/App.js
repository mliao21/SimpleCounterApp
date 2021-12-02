/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState } from "react";
import "bulma/css/bulma.css";

function App() {
  const [counter, setCounter] = useState(0);

  const assignHandler = () => {
    setCounter(document.getElementsByClassName("input")[0].valueAsNumber);
  };

  const keyHandler = (event) => {
    if(event.key === "Enter") {
      setCounter(event.target.valueAsNumber);
    }        
  };

  const decrement = () => {
    return setCounter(counter - 1);
  };

  const increment = () => {
    return setCounter(counter + 1);
  };

  return (
      <div classname="container">
        <div className="title">
          <div className="notification is-warning">Counter App</div>
        </div>

        <div className="columns is-mobile">
          <div>
            <div css={css`margin-left: 200px; margin-top: 10px;`}>
                <input
                  onKeyPress={keyHandler}
                  css={css`max-width: 70%`}  
                  type="number" 
                  className="input is-medium" 
                  placeholder="Put a number"
                />
                <button 
                  onClick={assignHandler}
                  className="button is-medium is-dark">
                    assign
                </button>
            </div>
            <div css={css`margin-left: 220px;`} className="column has-text-left">
                <button onClick={increment} className="button is-medium is-success"><strong>Up</strong></button>
                <button onClick={decrement} className="button is-medium is-danger"><strong>Down</strong></button>
            </div>
          </div>

          <div css={css`margin-left: 300px`}> 
              <h3 css={css`font-size: 500%`}><strong>{counter}</strong></h3>
          </div>
        </div>

      </div>
  )
}

export default App;
