import styled from "styled-components";

export const PasswordDisplay = styled.div`
  /* border: solid red 2px; */
  width: 25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  background-color: var(--dark-grey);

  & > p {
    overflow: auto;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.3rem 0;
  }

  & > p.placeholder {
    color: var(--grey);
  }

  & div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: var(--neon-green);

      &:hover {
        cursor: pointer;
        fill: var(--almost-white);
      }
    }
  }

  /* ----------------- media queries ----------------- */
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const PasswordOptions = styled.section`
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
    & > label.slider {
      display: none;
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

        & div {
          width: 0.8rem;
          height: 1.5rem;
        }

        & div.strength-red {
          background-color: var(--red);
          border: solid var(--red) 2px;
        }

        & div.strength-orange {
          background-color: var(--orange);
          border: solid var(--orange) 2px;
        }

        & div.strength-yellow {
          background-color: var(--yellow);
          border: solid var(--yellow) 2px;
        }

        & div.strength-neon-green {
          background-color: var(--neon-green);
          border: solid var(--neon-green) 2px;
        }

        & div.strength-empty {
          background-color: transparent;
          border: solid var(--almost-white) 2px;
        }
      }
    }

    & button {
      width: 100%;
      background-color: var(--neon-green);
      cursor: pointer;
      border: solid var(--neon-green) 2px;
      display: inline-block;
      padding: 1rem 0;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-weight: bold;
      font-size: 1rem;

      &:hover {
        background-color: var(--dark-grey);
        color: var(--neon-green);

        & svg {
          fill: var(--neon-green);
        }
      }
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
