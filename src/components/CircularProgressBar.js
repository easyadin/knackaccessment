import React from "react";
import styled, { css, keyframes } from "styled-components";

function CircularProgressBar(props) {
  const sqSize = props.sqSize;
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (props.sqSize - props.strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * props.percentage) / 10;

  const kframe = keyframes`0% {stroke-dashoffset: ${dashArray}} 100% {stroke-dashoffset: ${dashOffset}}`;
  const animation = () =>
    css`
      ${kframe} ${Math.floor(Math.random() * Math.floor(4))}s ease-out
    `;
  const AnimateCircle = styled.circle`
    stroke-dasharray: ${dashArray};
    transform: rotateY(-180deg);
    transform-origin: center;
    stroke-dashoffset: ${dashOffset};
    stroke-width: ${props.strokeWidth}px;
    cx: ${props.sqSize / 2};
    cy: ${props.sqSize / 2};
    r: ${radius};
    animation: ${animation};
  `;

  return (
    <div className="flex relative justify-center items-center">
      <svg
        width={props.sqSize}
        height={props.sqSize}
        viewBox={viewBox}
        className="circular__progress"
      >
        <circle
          className="circle-background"
          cx={props.sqSize / 2}
          cy={props.sqSize / 2}
          r={radius}
          strokeWidth={`${props.innerStrokeWidth}px`}
        />

        <AnimateCircle className="circle-progress"></AnimateCircle>
      </svg>

      <p
        className="circle-text absolute text-center"
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {props.percentage}
      </p>
    </div>
  );
}

export default CircularProgressBar;
