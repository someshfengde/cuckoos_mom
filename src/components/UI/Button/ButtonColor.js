import React, { useMemo } from "react";
import { BaseButton } from "./MPButton";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import DefaultSpinner from "../Spinner/DefaultSpinner";

const test = (props) =>
  css`
    color: ${props.color};
  `;

const whatToRender = (loading, children, Spinner, color, size) => {
  if (loading) {
    return (
      <React.Fragment>
        <div
          css={css`
            position: absolute;
            display: inline-block;
            color: ${color};
          `}
        >
          {Spinner}
        </div>

        <span
          css={css`
            visibility: hidden;
          `}
        >
          {children}
        </span>
      </React.Fragment>
    );
  } else {
    return children;
  }
};

function Button({
  children,
  loading,
  color,
  size = "1rem",
  spinner: Spinner = <DefaultSpinner />,
  icon: Icon,
  iconPosition = "left",
  ...rest
}) {
  const thisRender = useMemo(
    () => whatToRender(loading, children, Spinner, color, size),
    [loading, children, Spinner, color, size]
  );

  const iconPositionSet = css`
    order: ${iconPosition === "right" ? 2 : 0};
    margin-left: ${iconPosition === "right" ? "0.4rem" : "-0.2rem"};
    margin-right: ${iconPosition === "right" ? "-0.2rem" : "0.4rem"};
    visibility: ${loading ? "hidden" : "visible"};
  `;

  return (
    <BaseButton
      loading={loading}
      color={color}
      {...rest}
      icon={Icon}
      iconPosition={iconPosition}
    >
      {Icon && <Icon css={iconPositionSet} />}
      {thisRender}
    </BaseButton>
  );
}

export default Button;
