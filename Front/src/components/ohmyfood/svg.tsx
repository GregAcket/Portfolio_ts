export default function Svg() {
  return (
    <>
      <svg
        className="omf_gradient_svg"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <linearGradient id="omf_gradient">
          <stop offset="0%" stopColor="#ff79da" />
          <stop offset="100%" stopColor="#9356dc" />
        </linearGradient>
      </svg>
    </>
  )
}
