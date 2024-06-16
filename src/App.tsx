import { Global } from "./styles/Global.style";
import { Container, PasswordDisplay, PasswordOptions } from "./styles/Shared.style";

function App() {
  function copyPassword() {

  }

  return (
    <>
      <Global />

      <Container>
        <h1>Password Generator</h1>

        <PasswordDisplay>
          <p>P4$5W0rD!</p>
          <img
            className="copy"
            src="./src/assets/images/icon-copy.svg"
            alt="copy"
          />
          <img
            className="copied"
            src="./src/assets/images/icon-check.svg"
            alt="copied"
          />
        </PasswordDisplay>

        <PasswordOptions>
          <div className="length">
            <p>Character Length</p>
            <p>10</p>
          </div>

          <form>
            <input type="range" name="slider" id="slider" min="0" max="15" />
            <label htmlFor="slider">Slider</label>

            <div className="checkboxes">
              <input type="checkbox" name="set-properties" id="uppercase" />
              <label htmlFor="uppercase">Include Uppercase Letters</label>
              <br />
              <br />

              <input type="checkbox" name="set-properties" id="lowercase" />
              <label htmlFor="lowercase">Include Lowercase Letters</label>
              <br />
              <br />

              <input type="checkbox" name="set-properties" id="numbers" />
              <label htmlFor="numbers">Include Numbers</label>
              <br />
              <br />

              <input type="checkbox" name="set-properties" id="symbols" />
              <label htmlFor="symbols">Include Symbols</label>
              <br />
            </div>

            <div className="strength">
              <p>Strength</p>

              <div>
                <p>Medium</p>

                <div className="password-strength"></div>
                <div className="password-strength"></div>
                <div className="password-strength"></div>
                <div className="password-strength"></div>
              </div>
            </div>

            <button type="submit">
              Generate{" "}
              <img
                src="./src/assets/images/icon-arrow-right.svg"
                alt="right arrow"
              />
            </button>
          </form>
        </PasswordOptions>
      </Container>
    </>
  );
}

export default App;
