import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: rgb(28,30,33);
        font-size: 62.5%;
        color: #ffffff;
    }

    #icon-notRegistered {
        font-size: 90px;
        color: unset;
    }

    .swal2-icon.swal2-error {
    border-color: #f27474;
}
   

`
