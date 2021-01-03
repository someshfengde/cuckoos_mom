/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";


export const MineNav = styled.div`
    position:fixed;
    top:0;
    left:0;
    display: ${props => props.type || 'block'};
    height: 100%;
    width: 300px;
    background-color: ${props => props.background || '#fff76a'};



`;