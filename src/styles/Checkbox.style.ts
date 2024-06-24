import styled from "styled-components";

export const CheckboxContainer = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: solid var(--almost-white) 2px;
    cursor: pointer;
    position: relative;

    &:checked {
      background-color: var(--neon-green);
      border-color: var(--neon-green);

      &::after {
        content: "✔";
        color: var(--very-dark-grey);
        position: absolute;
        left: 1px;
        font-size: 16px;
      }
    }
  }
`;
