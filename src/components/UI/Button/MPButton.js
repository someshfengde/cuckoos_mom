/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { darken, grayscale, lighten, transparentize } from "polished";

const baseBackgroundColor = "#E0E1E2";
const baseColor = "#333333";

const lightenOrDarken = (props, numLighten, numDarken) => {
  const { lighten: light, background } = props;

  return light
    ? lighten(numLighten, background || baseBackgroundColor)
    : darken(numDarken, background || baseBackgroundColor);
};

const transparentizeOrDarken = (props, numTransparentize, numDarken) => {
  const { lighten: light, background } = props;

  return light
    ? transparentize(numTransparentize, props.background || baseBackgroundColor)
    : darken(numDarken, background || baseBackgroundColor);
};

export const BaseButton = styled.button`
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  min-height: 1em;
  outline: 0;
  vertical-align: baseline;
  border: none;
  color: ${(props) => transparentize(0.15, props.color || baseColor)};
  background: ${(props) => props.background || baseBackgroundColor};
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  font-size: ${(props) => props.size || "1rem"};
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 0 0 0 1px transparent;
  transition: all 0.1s ease-in-out;

  &:disabled {
    background: ${(props) =>
      props.grayOut && grayscale(props.background || baseBackgroundColor)};
    opacity: ${(props) => (props.grayOut ? 1 : "0.65!important")};
    user-select: none;
    cursor: default;
    background-image: none !important;
    box-shadow: none !important;
    pointer-events: none !important;
  }

  &:hover {
    background: ${(props) => lightenOrDarken(props, 0.05, 0.05)};
    color: ${(props) => props.color || baseColor};
  }
  &:focus {
    background: ${(props) => lightenOrDarken(props, 0.05, 0.05)};
    outline: none;
    color: ${(props) => props.color || baseColor};
    box-shadow: 0 0 0 1px
      ${(props) => darken(0.01, props.background || baseBackgroundColor)};
  }
  &:active {
    background: ${(props) => lightenOrDarken(props, 0.09, 0.09)};
  }

  ${(props) =>
    props.loading &&
    css`
      color: #ffffff00;
      position: relative;

      &:hover {
        color: #ffffff00;
      }
      &:focus {
        color: #ffffff00;
      }
    `}

  ${(props) =>
    props.circle &&
    css`
      border-radius: 50%;
      padding: 0.78571429em;
    `}
`;

export const TBaseButton = styled.button`
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.block ? "100%" : "auto")};
  cursor: pointer;
  min-height: 1em;
  outline: 0;
  vertical-align: baseline;
  border: none;
  color: ${(props) => transparentize(0.1, props.color || baseColor)};
  background: ${(props) => props.background || baseBackgroundColor};
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  font-size: ${(props) => props.size || "1rem"};
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 0 0 0 1px transparent;
  transition: all 0.1s ease-in-out;

  &:disabled {
    background: ${(props) =>
      props.grayOut && grayscale(props.background || baseBackgroundColor)};
    opacity: ${(props) => (props.grayOut ? 0.9 : "0.65!important")};
    user-select: none;
    cursor: default;
    background-image: none !important;
    box-shadow: none !important;
    pointer-events: none !important;
  }

  &:hover {
    background: ${(props) => transparentizeOrDarken(props, 0.06, 0.05)};
    color: ${(props) => props.color || baseColor};
  }
  &:focus {
    outline: none;
    background: ${(props) => transparentizeOrDarken(props, 0.07, 0.05)};
    color: ${(props) => props.color || baseColor};
    box-shadow: 0 0 0 1px
      ${(props) => darken(0.01, props.background || baseBackgroundColor)};
  }
  &:active {
    background: ${(props) => transparentizeOrDarken(props, 0.09, 0.03)};
  }

  ${(props) =>
    props.circle &&
    css`
      border-radius: 50%;
      padding: 0.78571429em;
    `}
`;

/* ${(props) =>
    props.loading &&
    css`
      color: #ffffff00;
      position: relative;

      &:hover {
        color: #ffffff00;
      }
      &:focus {
        color: #ffffff00;
      }
    `} */
