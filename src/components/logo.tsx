import React from "react";
import styles from './logo.module.css'


const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 370 203"
      className={styles.logo}
    >
      <defs>
        <linearGradient
          id="w-linear-gradient-1"
          x1="180.023"
          y1="132.44"
          x2="188.189"
          y2="101.902"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.227" stop-color="#363636"></stop>
          <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="w-linear-gradient-2"
          x1="213.506"
          y1="135.522"
          x2="220.945"
          y2="107.701"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0"></stop>
          <stop offset="1" stop-color="#fff"></stop>
        </linearGradient>
      </defs>
      <title>New³ie</title>
      <g id="newie" style={{ isolation: "isolate" }}>
        <path
          id="n"
          className="char char--n"
          d="M49.04,86.563H63.329V92c1.752-2.489,4.978-7.19,14.106-7.19,17.241,0,18.993,14.013,18.993,20.927v31.992H81.123V109.8c0-5.624-1.2-10.6-8.02-10.6-7.56,0-8.759,5.439-8.759,10.694v27.843H49.04Z"
        ></path>
        <path
          id="e-1"
          className="char char--e1"
          d="M116.161,117.448c.647,5.441,5.809,9.035,11.8,9.035a10.311,10.311,0,0,0,9.311-4.793h15.675a30.009,30.009,0,0,1-10.419,13.091,24.868,24.868,0,0,1-14.566,4.61,27.15,27.15,0,0,1-27.106-27.105c0-14.29,11.247-27.474,26.83-27.474a26.173,26.173,0,0,1,19.361,8.113c6.453,6.914,8.39,15.12,7.191,24.523Zm23.05-11.615c-.37-2.4-3.5-8.114-11.434-8.114s-11.062,5.717-11.431,8.114Z"
        ></path>
        <g id="w">
          <path
            id="w-char"
            className="cls-4"
            style={{ fill: "currentColor" }}
            d="M152.434,69.507h17.7l9.311,44.347L189.5,69.507h13.366l10.051,44.531,9.31-44.531h17.61l-18.068,68.224H206.461l-10.418-44.16-10.234,44.16H170.043Z"
          ></path>
          <polygon
            id="w-left-shadow"
            style={{
              fill: "url(#w-linear-gradient-1)",
              opacity: 0.2,
              mixBlendMode: "multiply",
            }}
            points="188.662 73.2 179.447 113.854 185.809 137.731 194.324 100.985 188.662 73.2"
          ></polygon>
          <polygon
            id="w-right-shadow"
            style={{
              fill: "url(#w-linear-gradient-2)",
              opacity: 0.2,
              mixBlendMode: "multiply",
            }}
            points="221.942 70.87 212.916 114.038 221.768 137.731 233.879 92.003 221.942 70.87"
          ></polygon>
        </g>
        <path
          id="power-of-3"
          className="power-of-3"
          style={{ fill: "currentColor" }}
          d="M251.628,73.708a2.367,2.367,0,0,0,2.705,2.057c1.678,0,2.6-.865,2.6-2.327,0-.921-.7-2.056-2.651-2.056H251.3V66.512h1.3c.811,0,3.246,0,3.246-2.273a1.646,1.646,0,0,0-1.732-1.787c-1.842,0-1.894,1.246-1.949,1.895h-6.82c.057-6.548,6.173-7.738,8.985-7.738,5.143,0,8.225,3.247,8.225,6.655a5.52,5.52,0,0,1-3.082,4.979,6.1,6.1,0,0,1,4.489,5.737c0,4.218-4.436,7.628-9.686,7.628-3.138,0-6.494-1.134-8.115-3.354a8.592,8.592,0,0,1-1.519-4.546Z"
        ></path>
        <path
          id="i"
          className="char char--i"
          d="M246.654,86.563H261.96v51.168H246.654Z"
        ></path>
        <path
          id="e-2"
          className="char char--e2"
          d="M284.549,117.448c.645,5.441,5.809,9.035,11.8,9.035a10.312,10.312,0,0,0,9.313-4.793h15.673a30.029,30.029,0,0,1-10.417,13.091,24.878,24.878,0,0,1-14.569,4.61,27.147,27.147,0,0,1-27.1-27.105c0-14.29,11.246-27.474,26.828-27.474a26.175,26.175,0,0,1,19.362,8.113c6.454,6.914,8.389,15.12,7.19,24.523ZM307.6,105.833c-.368-2.4-3.5-8.114-11.432-8.114s-11.065,5.717-11.432,8.114Z"
        ></path>
      </g>
    </svg>
  );
};

export default Logo;
