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
  const [characterLength, setCharacterLength] = useState<number>(10);
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [strength, setStrength] = useState<string>("medium");
  const [strengthColor, setStrengthColor] = useState<string>("yellow");
  const [strengthBox, setStrengthBox] = useState<number>(3);

  // Event handler for slider value
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCharacterLength(value);

    // Set values of password strength
    if (value == 0) {
      setStrength("");
      setStrengthColor("");
      setStrengthBox(0);
    }
    else if (value <= 4) {
      setStrength("TOO WEAK!");
      setStrengthColor("red");
      setStrengthBox(1);
    } else if (value <= 8) {
      setStrength("WEAK");
      setStrengthColor("orange");
      setStrengthBox(2);
    } else if (value <= 12) {
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
    if (password.length === 0) return;

    try {
      await navigator.clipboard.writeText(password);
      // console.log("Copied to clipboard: ", password);
      setIsCopied(true);
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

            <svg
              width="21"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={copyPassword}
              className="copy"
            >
              <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
            </svg>
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
              max="17"
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
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
              </svg>
            </button>
          </form>
        </PasswordOptions>
      </Container>
    </>
  );
}

export default App;
