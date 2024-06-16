import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: solid red 2px; */

  & h1 {
    color: var(--grey);
    font-size: 1.8rem;
  }

  /* ----------------- media queries ----------------- */
  @media screen and (max-width: 500px) {
    padding: 0 2rem;

    & h1 {
      font-size: 1.5rem;
    }
  }
`;

export const PasswordDisplay = styled.div`
  /* border: solid red 2px; */
  width: 25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  background-color: var(--dark-grey);

  & p {
    overflow: auto;
    font-weight: bold;
    font-size: 1.5rem;
  }

  & img {
    /* border: solid green 2px; */
    width: 1.5rem;
    height: 1.5rem;

    &:hover {
      cursor: pointer;
    }

    &.copied {
      display: none;
    }
  }

  /* ----------------- media queries ----------------- */
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const PasswordOptions = styled.section`
  /* border: solid red 2px; */
  width: 25rem;
  margin-top: 1rem;
  padding: 0rem 1rem 2rem;
  background-color: var(--dark-grey);
  font-weight: bold;

  & .length {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p:last-child {
      color: var(--neon-green);
      font-size: 1.5rem;
    }
  }

  & form {
    & > input[type="range"] {
      width: 100%;
      margin-bottom: 1rem;
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      cursor: pointer;

      &::-webkit-slider-runnable-track,
      &::-moz-range-track {
        background: var(--neon-green);
        height: 0.4rem;
      }

      &::-webkit-slider-thumb,
      &::-moz-range-thumb {
        background-color: var(--almost-white);
        border: solid var(--almost-white) 2px;
        border-radius: 50%;
        height: 1rem;
        width: 1rem;
      }

      &:hover::-webkit-slider-thumb,
      &:hover::-moz-range-thumb {
        background-color: var(--very-dark-grey);
        border: solid var(--neon-green) 2px;
      }
    }

    & > label {
      display: none;
    }

    & .checkboxes input {
      margin-right: 0.5rem;

      &:checked {
        outline: none;
      }
    }

    & .strength {
      background-color: var(--very-dark-grey);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      margin: 2rem 0;

      & > p {
        color: var(--grey);
      }

      & div {
        display: flex;
        gap: 0.3rem;
        align-items: center;

        & p {
          margin-right: 0.8rem;
          font-weight: bold;
        }

        & div.password-strength {
          width: 0.8rem;
          height: 1.5rem;
          background-color: var(--neon-green);
          border: solid var(--almost-white) 2px;
        }
      }
    }

    & button {
      width: 100%;
      background-color: var(--neon-green);
      border: none;
      display: inline-block;
      padding: 1rem 0;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-weight: bold;
      font-size: 1rem;
    }
  }

  /* ----------------- media queries ----------------- */
  @media screen and (max-width: 500px) {
    width: 100%;

    & form {
      & .strength {
        & div {
          & div.password-strength {
            width: 0.5rem;
            height: 1rem;
          }
        }
      }
    }
  }
`;
