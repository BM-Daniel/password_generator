import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'JetBrainsMono';
    src: url('/assets/fonts/JetBrainsMono-Italic-VariableFont_wght.ttf') format('truetype');

    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'JetBrainsMono';
    src: url('/assets/fonts/JetBrainsMono-VariableFont_wght.ttf') format('truetype');

    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'JetBrainsMono';
    src: url('/assets/fonts/static/JetBrainsMono-Bold.ttf') format('truetype');

    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'JetBrainsMono';
    src: url('/assets/fonts/static/JetBrainsMono-BoldItalic.ttf') format('truetype');

    font-weight: bold;
    font-style: italic;
  }

  :root {
    --red: #F64A4A;
    --orange: #FB7C58;
    --yellow: #F8CD65;
    --neon-green: #A4FFAF;
    --almost-white: #E6E5EA;
    --grey: #817D92;
    --dark-grey: #24232C;
    --very-dark-grey: #18171F;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--very-dark-grey);
    color: var(--almost-white);
    font-family: 'JetBrainsMono', sans-serif;
    font-style: normal;
  }
`;
