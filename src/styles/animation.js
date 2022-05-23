import {css, keyframes} from 'styled-components'

const FadeInKeyFrames= keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    50% {
        filter: blur(1px);
    }

    to {
        filter: blur(0);
        opacity: 1;
    }
`

export const fadeIn= ({time='1s', type= 'ease'}) => {
    
    return css`animation: ${time} ${FadeInKeyFrames} ${type}; `;
}