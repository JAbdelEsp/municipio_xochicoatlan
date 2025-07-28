import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
    :root {
        --main-color-1: #BE0811;
        --main-color-2: #D2A968;
        --main-color-blue: #003467;
        --transparent: transparent;
        --gray: #9D9D9C;
        --dark: #1D1D1B;
        --dark-opacity-3: #00000008;
        --sans-font:  "Montserrat", sans-serif;
        --white: #fff;
        --serif-font: "Merriweather", serif;
        --transparent: #fff0;
        --radius: 0px;
        --radius-large: 50em;
        --text-shadow-45: rgba(0,0,0,0.45);
    }
    * {
        margin: 0;
        padding: 0;
    }
    #root {
        overflow: clip;
    }
    // ::-webkit-scrollbar {
    //     display: none;
    // }
    .row-text-wrapper-bottom {
        flex-flow: wrap !important;
        justify-content: space-between !important;
        align-items: flex-end !important;
    }
    .show {
        transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        opacity: 1;
        height: 100svh !important;
        background-color: var(--white) !important ;
    }

    .star-line-2 {
        display: none;
        transform: rotate(45deg);
    }
    .star-line-3 {
        transform: rotate(90deg);
    }
    .star-line-4 {
        display: none;
        transform: rotate(135deg);
    }
    @media screen and (max-width: 460px) {
        .container {
            grid-template-columns: 1fr;
        }
        .header-text {
            h1 {
             font-size: 2.5rem !important;
            }
        }
    }
`;
