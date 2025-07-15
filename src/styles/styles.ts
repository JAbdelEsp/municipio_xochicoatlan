import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
    :root {
        --main-color-1: #BE0811;
        --main-color-2: #D2A968:
        --gray: #9D9D9C;
        --dark: #1D1D1B;
        --sans-font:  "Montserrat", sans-serif;
        --white: #fff;
        --serif-font: "Merriweather", serif;
        --transparent: #fff0;
        --radius: 0px;
        --radius-large: 50em;
    }
    * {
        margin: 0;
        padding: 0;
    }
    ::-webkit-scrollbar {
        display: none;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100vh;
        width: 100%;
    }
    .item {
        position: relative;
        img {
            width: 100%;
            object-fit: cover;
            height: 100vh;
        }
        .bg-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.46);
            position: 
        }
        .header-text {
            position: absolute;
            bottom: 0;
            margin: 1.2rem;
            h1 {
                color: var(--white);
                text-transform: uppercase;
                font-size: 4rem;
                font-family: var(--serif-font);
                text-shadow: 3px 6px 8px rgba(0,0,0,0.65);
                letter-spacing: 0.3rem; 
            }
            h4 {
                color: var(--white);
                text-transform: uppercase;
                font-size: .9rem;
                letter-spacing: 0.005rem;
                text-shadow: 3px 6px 8px rgba(0,0,0,0.65);
            }
        }
    }
`;
