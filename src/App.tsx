import { Global } from "./styles/Global.style";
import {
  Container,
  PasswordDisplay,
  PasswordOptions,
} from "./styles/Shared.style";
import { useState } from "react";

// Typescript Interfaces
interface CheckedItems {
  [key: string]: boolean;
}

interface Characters {
  [key: string]: string;
}

function App() {
  const [password, setPassword] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [characterLength, setCharacterLength] = useState<number>(8);
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [strength, setStrength] = useState<string>("medium");
  const [strengthColor, setStrengthColor] = useState<string>("yellow");
  const [strengthBox, setStrengthBox] = useState<number>(2);

  // Event handler for slider value
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCharacterLength(value);

    // Set values of password strength using divisions of 4
    if (value <= 3) {
      setStrength("TOO WEAK!");
      setStrengthColor("red");
      setStrengthBox(1);
    } else if (value <= 7) {
      setStrength("WEAK");
      setStrengthColor("orange");
      setStrengthBox(2);
    } else if (value <= 11) {
      setStrength("MEDIUM");
      setStrengthColor("yellow");
      setStrengthBox(3);
    } else {
      setStrength("STRONG");
      setStrengthColor("neon-green");
      setStrengthBox(4);
    }
  };

  // Event handler for checkboxes values
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  // Function to copy generated password to clipboard
  async function copyPassword(): Promise<void> {
    // Return from function if password field is empty
    if (password.length === 0) return

    try {
      await navigator.clipboard.writeText(password);
      // console.log("Copied to clipboard: ", password);
      setIsCopied(!isCopied);
    } catch (error) {
      console.error("Unable to copy to clipboard: ", error);
    }
  }

  function generatePassword(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const characters: Characters = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+={}",
    };

    let newString = "";
    let passwordString = "";

    // Place required characters in one string
    for (const property in checkedItems) {
      if (checkedItems[property]) {
        newString = newString.concat(characters[property]);
      }
      // console.log(newString);
    }

    // Return from function if no checkbox selected
    if (newString.length === 0) return setPassword("Select a property");

    // randomly select characters from newString
    for (let i = 0; i < characterLength; i++) {
      const randomNumber = Math.floor(Math.random() * newString.length);

      passwordString += newString.substring(randomNumber, randomNumber + 1);
    }

    setPassword(passwordString);
  }

  return (
    <>
      <Global />

      <Container>
        <h1>Password Generator</h1>

        <PasswordDisplay>
          {password && <p>{password}</p>}
          {!password && <p className="placeholder">P4$5W0rD!</p>}

          <div>
            {isCopied && <p>COPIED</p>}

            <img
              className="copy"
              src="./src/assets/images/icon-copy.svg"
              alt="copy"
              onClick={copyPassword}
            />
          </div>
        </PasswordDisplay>

        <PasswordOptions>
          <div className="length">
            <p>Character Length</p>
            <p>{characterLength}</p>
          </div>

          <form onSubmit={generatePassword}>
            <input
              type="range"
              name="slider"
              id="slider"
              min="0"
              max="15"
              value={characterLength}
              onChange={handleSliderChange}
            />
            <label htmlFor="slider">Slider</label>

            <div className="checkboxes">
              <input
                type="checkbox"
                name="uppercase"
                id="uppercase"
                checked={checkedItems.uppercase}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="uppercase">Include Uppercase Letters</label>
              <br />
              <br />

              <input
                type="checkbox"
                name="lowercase"
                id="lowercase"
                checked={checkedItems.lowercase}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="lowercase">Include Lowercase Letters</label>
              <br />
              <br />

              <input
                type="checkbox"
                name="numbers"
                id="numbers"
                checked={checkedItems.numbers}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="numbers">Include Numbers</label>
              <br />
              <br />

              <input
                type="checkbox"
                name="symbols"
                id="symbols"
                checked={checkedItems.symbols}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="symbols">Include Symbols</label>
              <br />
            </div>

            <div className="strength">
              <p>Strength</p>

              <div>
                <p>{strength}</p>

                {[...Array(strengthBox)].map((index) => (
                  <div
                    key={index}
                    className={`strength-${strengthColor}`}
                  ></div>
                ))}

                {[...Array(4 - strengthBox)].map((index) => (
                  <div key={index} className="strength-empty"></div>
                ))}
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
