import React from "react";
import propTypes, {array} from "prop-types";
import './index.scss'

export default function Star({value, height, width, spacing, className}) {
  const decimals = Number(value) % 1
  const star = []
  let leftPos = 0
  for (let index = 0; index < array.length && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className={"star"}
        key={`star-${index}`}
        style={{left: index * width, height:height, width: width, marginRight: spacing}}
      ></div>
    );
  }

  if(decimals > 0 && value <= 5) {
    star.push(
      <div
        className={"star"}
        key={`starWithDecimal`}
        style={{
          left: leftPos,
          height:height,
          width: decimals * width -spacing}
        }
      ></div>
    )
  }

  const startPlaceHolder = []
  for (let index = 0; index < 5; index++) {
    startPlaceHolder.push(
      <div
        className={"star placeholder"}
        key={`starPlaceholder-${index}`}
        style={{left: index * width, height:height, width: width, marginRight: spacing}}
      ></div>
    );
  }
  return (
    <>
      <div className={['stars', className].join(" ")} style={{height: height}}>
        {startPlaceHolder}
        {star}
      </div>
    </>
  )

}

Star.propsTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number
}