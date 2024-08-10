export function MarkerCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="50px"
      height="50px"
      viewBox="0 0 50 50"
    >
      <line pathLength="100" className="stroke" x1="8.5" y1="8.5" x2="41.5" y2="41.5" />
      <line pathLength="100" className="stroke" x1="41.5" y1="8.5" x2="8.5" y2="41.5" />
    </svg>
  );
}
