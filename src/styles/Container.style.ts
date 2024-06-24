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


