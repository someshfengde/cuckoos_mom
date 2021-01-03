import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";

const rotate = keyframes`
    0% {
		transform: rotate(0);
	}
	30%{
		transform: rotate(200deg);
	}
	50%{
		
		transform: rotate(1200deg) scale(0.4);
		
	}
	75%{
		transform: rotate(70deg)  scale(0.7);
	}
`;

const rotate_step = css`
    animation: ${rotate} 1s infinite steps(8);
`;
const rotate_stepSmall = css`
    animation: ${rotate} 2s infinite linear;
`;

function RotateSpinner({ component: Component, ...rest }) {
    return <Component css={rotate_stepSmall} />;
}

export default RotateSpinner;
