export function MarkerCross() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="50px"
      height="50px"
      viewBox="0 0 50 50"
      style={{
        transform: "rotate(45deg)",
      }}
    >
      <circle
        className="stroke"
        pathLength="100"
        cx="25"
        cy="25"
        r="18"
        style={{
          transform: "rotate(-90) scale(1 -1)",
          transformOrigin: "25 25",
        }}
      />
    </svg>
  );
}
