import React from "react";

const Logo = ({
  style = {},
  fill = "#0b2c71",
  width = "100px",
  height= "auto",
  className = "",
  viewBox = "0 0 70 50"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <polygon fill={fill} points="43.74 25.41 49 17.98 47.77 17.11 42.79 24.16 42.78 24.15 41.87 25.44 41.88 25.45 33.44 37.37 26.1 26.74 26.1 26.65 21.54 26.65 32.15 12.68 39.01 21.68 39.91 20.39 32.15 10.2 22.92 22.35 16.54 13.1 15.3 13.96 21.96 23.61 13.86 34.26 15.06 35.17 20.4 28.15 25.25 28.15 33.42 40 42.83 26.7 52.95 39.98 54.15 39.07 43.74 25.41"/>
    <path fill={fill} d="M11.37,37.43a1.26,1.26,0,1,0,1.26,1.26A1.26,1.26,0,0,0,11.37,37.43Z"/>
    <circle fill={fill} cx="50.39" cy="14.03" r="1.26"/>
  </svg>
);


const Help = ({
    style = {},
    fill = "#0b2c71",
    width = "50px",
    className = "",
    viewBox = "0 0 50 50"
  }) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <path fill={fill} d="M24.75,18.78a4,4,0,0,1,1.82.41,3.32,3.32,0,0,1,1.3,1.16A3,3,0,0,1,28.35,22,2.08,2.08,0,0,1,28,23.15a4.37,4.37,0,0,1-.77.9c-.31.27-.61.52-.91.75a5.28,5.28,0,0,0-.76.71,1,1,0,0,0-.28.73l0,.35H23.71v-.67a1.12,1.12,0,0,1,.29-.71,5.41,5.41,0,0,1,.73-.68l.88-.71a4.31,4.31,0,0,0,.74-.74,1.37,1.37,0,0,0,.29-.82,1.83,1.83,0,0,0-.53-1.36,2.07,2.07,0,0,0-1.53-.53,3.21,3.21,0,0,0-1.66.39,4.54,4.54,0,0,0-1.27,1.16V20.1a3.54,3.54,0,0,1,1.29-.94A4.23,4.23,0,0,1,24.75,18.78ZM24.6,28.2a1.17,1.17,0,0,1,.83.34,1.13,1.13,0,0,1,.34.83,1.2,1.2,0,0,1-1.17,1.18,1.1,1.1,0,0,1-.83-.36,1.11,1.11,0,0,1-.34-.82,1.13,1.13,0,0,1,.34-.83A1.16,1.16,0,0,1,24.6,28.2Z"/>
    <circle stroke-miterlimit="10" stroke={fill} fill="none" opacity="0.3" cx="25" cy="24.89" r="14.89"/>
    </svg>
  );

  const Wifi = ({
    style = {},
    fill = "#0b2c71",
    width = "50px",
    className = "",
    viewBox = "0 0 50 50"
  }) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <path fill={fill} d="M20.71,29.89l3.81,3.81,3.81-3.81A5.38,5.38,0,0,0,20.71,29.89Z"/>
    <path fill={fill} d="M24.52,21.67a10.81,10.81,0,0,0-8.44,3.81l1.81,1.37a8.52,8.52,0,0,1,6.63-2.92,8.56,8.56,0,0,1,6.63,2.91L33,25.48A10.81,10.81,0,0,0,24.52,21.67Z"/>
    <path fill={fill} d="M24.71,14.66a18.38,18.38,0,0,0-13.64,5.63l1.74,1.46a16.21,16.21,0,0,1,11.9-4.83c7.67,0,11.34,4.59,11.49,4.79L38,20.33C37.82,20.09,33.54,14.66,24.71,14.66Z"/>
    </svg>
  );


  const Error = ({
    style = {},
    fill = "#0b2c71",
    width = "50px",
    className = "",
    viewBox = "0 0 50 50"
  }) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={fill} d="M24.92,31.44a1.28,1.28,0,0,1,0,2.56,1.25,1.25,0,0,1-.91-.38,1.28,1.28,0,0,1,0-1.8A1.25,1.25,0,0,1,24.92,31.44ZM25.81,23v7H24V23Z"/>
      <path stroke-miterlimit="10" stroke={fill} fill="none" d="M11,36.27c-.55.95-.1,1.73,1,1.73H38c1.1,0,1.55-.78,1-1.73L26,13.73a1.06,1.06,0,0,0-2,0Z"/>
    </svg>
  );

  const Cancel = ({
    style = {},
    fill = "#0b2c71",
    width = "50px",
    className = "",
    viewBox = "0 0 50 50"
  }) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon fill={fill} points="35 16.63 33.77 15.4 25.09 24.09 16.4 15.4 15.17 16.63 23.86 25.32 15.17 34 16.4 35.23 25.09 26.54 33.77 35.23 35 34 26.31 25.32 35 16.63"/>
    </svg>
  );


export default { Logo, Help, Wifi, Error, Cancel };