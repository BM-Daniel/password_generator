import styled from "styled-components";

interface SliderValue {
  value: string;
}

export const SliderContainer = styled.div<SliderValue>`
  margin-bottom: 1rem;

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    /* background: var(--neon-green); */
    background: linear-gradient(
      to right,
      var(--neon-green) 0%,
      var(--neon-green) ${({ value }) => value},
      var(--very-dark-grey) ${({ value }) => value},
      var(--very-dark-grey) 100%
    );

    &::-webkit-slider-runnable-track,
    &::-moz-range-track,
    &::-ms-track {
      width: 100%;
      height: 5px;
      background: linear-gradient(
        to right,
        var(--neon-green) 0%,
        var(--neon-green) ${({ value }) => value},
        var(--very-dark-grey) ${({ value }) => value},
        var(--very-dark-grey) 100%
      );
      border-radius: 5px;
    }

    &::-ms-fill-lower {
      background: var(--neon-green);
      border-radius: 5px;
    }

    &::-ms-fill-upper {
      background: var(--very-dark-grey);
      border-radius: 5px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--almost-white);
      border: solid var(--almost-white) 2px;
      cursor: pointer;

      &:hover {
        background: var(--very-dark-grey);
        border: solid var(--neon-green) 2px;
      }
    }

    &::-moz-range-thumb {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--almost-white);
      border: solid var(--almost-white) 2px;
      cursor: pointer;

      &:hover {
        background: var(--very-dark-grey);
        border: solid var(--neon-green) 2px;
      }
    }

    &::-ms-thumb {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--almost-white);
      border: solid var(--almost-white) 2px;
      cursor: pointer;

      &:hover {
        background: var(--very-dark-grey);
        border: solid var(--neon-green) 2px;
      }
    }
  }
`;
