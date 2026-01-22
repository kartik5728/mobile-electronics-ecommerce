const DeleteIcon = ({ size=18, fill = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    xmlSpace="preserve"
  >
    <g
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
    >
      <path
        d="M 78.321 22.213 H 11.679 c -2.209 0 -4 -1.791 -4 -4 s 1.791 -4 4 -4 h 66.643 c 2.209 0 4 1.791 4 4 S 80.53 22.213 78.321 22.213 z"
        fill={fill}
        strokeLinecap="round"
      />

      <path
        d="M 57.815 22.213 h -25.63 c -2.209 0 -4 -1.791 -4 -4 V 7.696 C 28.185 3.453 31.637 0 35.881 0 h 18.238 c 4.244 0 7.696 3.453 7.696 7.696 v 10.517 C 61.815 20.422 60.024 22.213 57.815 22.213 z M 36.185 14.213 h 17.63 V 8 h -17.63 V 14.213 z"
        fill={fill}
        strokeLinecap="round"
      />

      <path
        d="M 13.461 30.213 v 52.09 c 0 4.251 3.446 7.696 7.696 7.696 h 47.684 c 4.251 0 7.696 -3.446 7.696 -7.696 v -52.09 H 13.461 z M 39.216 74.235 c 0 2.209 -1.791 4 -4 4 s -4 -1.791 -4 -4 V 44.976 c 0 -2.209 1.791 -4 4 -4 s 4 1.791 4 4 V 74.235 z M 58.784 74.235 c 0 2.209 -1.791 4 -4 4 s -4 -1.791 -4 -4 V 44.976 c 0 -2.209 1.791 -4 4 -4 s 4 1.791 4 4 V 74.235 z"
        fill={fill}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default DeleteIcon;
