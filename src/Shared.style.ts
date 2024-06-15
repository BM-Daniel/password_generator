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
    overflow: scroll;
  }

  & img {
    /* border: solid green 2px; */
    width: 2rem;
    height: 2rem;

    &:hover {
      cursor: pointer;
    }

    &.copied {
      display: none;
    }
  }
`;

export const PasswordOptions = styled.section`
  /* border: solid red 2px; */
  width: 25rem;
  margin-top: 2rem;
  padding: 1rem 1rem 2rem;
  background-color: var(--dark-grey);

  & .length {
    display: flex;
    justify-content: space-between;
    /* border: solid red 2px; */

    & p:last-child {
      color: var(--neon-green);
    }
  }

  & form {
    & > input {
      width: 100%;
      /* color: var(--very-dark-grey); */
      accent-color: var(--neon-green);
      margin-bottom: 1rem;
    }

    & > label {
      display: none;
    }

    /* & .checkboxes input {
      background: red;

      &:checked {
        
      }
    } */

    & .strength {
      background-color: var(--very-dark-grey);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      margin: 2rem 0;

      & div {
        display: flex;
        gap: 0.3rem;
        align-items: center;

        & p {
          margin-right: 0.8rem;
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
      /* margin-bottom: 0rem; */
    }
  }
`;
