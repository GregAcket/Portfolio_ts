import { useContext } from "react"
import { ThemeContext } from "../../utils/ThemeProvider"
import { styled } from "styled-components"
import { ThemeProps } from "../../utils/type"

const StyledPath = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
`

const Svg = styled.svg`
  max-height: 36px;
  max-width: 72px;

  @media (min-width: 768px) {
    max-height: 60px;
    max-width: 120px;
  }
`

export default function Logodev() {
  const { theme } = useContext(ThemeContext)

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="167.25"
      height="83.62"
      version="1.1"
      viewBox="0 0 4.425 2.213"
    >
      <g
        fillOpacity="1"
        fillRule="evenodd"
        transform="translate(-26.91 -112.56)"
      >
        <StyledPath
          $isDarkMode={theme === "dark"}
          strokeWidth="0.235"
          d="M28.118 112.56c-1.174 1.105.001 0-1.179 1.104 1.184 1.08.006.007 1.18 1.08v-.347l-.8-.743.8-.75v-.344zm-1.206 1.07c-.003 0 0 .002 0 0z"
          fontSize="3.175"
        />
        <StyledPath
          $isDarkMode={theme === "dark"}
          strokeWidth="0.235"
          d="M30.128 114.768c1.174-1.104 0 0 1.18-1.104-1.184-1.079-.007-.007-1.18-1.08v.347l.798.743-.798.75v.344zm1.206-1.07c.004 0 0-.002 0 0z"
          fontSize="3.175"
        />
        <text
          x="24.154"
          y="114.968"
          fill="green"
          strokeWidth="0.265"
          fontSize="3.175"
          xmlSpace="preserve"
        />
        <text
          x="30.654"
          y="108.627"
          fill="green"
          strokeWidth="0.316"
          fontSize="2.528"
          transform="scale(.9485 1.0543)"
          xmlSpace="preserve"
        >
          <tspan
            x="30.654"
            y="108.627"
            fill="green"
            fillOpacity="1"
            strokeWidth="0.316"
            fontSize="2.528"
          >
            /
          </tspan>
        </text>
        <path
          fill="green"
          stroke="none"
          strokeDasharray="none"
          strokeOpacity="1"
          strokeWidth="0.444"
          d="M28.174 114.404v.344c1.174-1.105-.001 0 1.179-1.105l-.38.002m.407.033c.002-.001 0-.002 0 0z"
          fontSize="3.175"
        ></path>
        <path
          fill="green"
          stroke="none"
          strokeDasharray="none"
          strokeOpacity="1"
          strokeWidth="0.386"
          d="M27.761 113.89v-.251h1.127l-.266.248m.271-.29c.002 0 .001.003 0 0z"
          fontSize="3.175"
        ></path>
        <path
          fill="green"
          stroke="none"
          strokeDasharray="none"
          strokeOpacity="1"
          strokeWidth="0.321"
          d="M30.276 113.174l-.16-.156v1.328c.153-.13.02-.02.16-.137m-.193.175c0 .002 0 0 0 0z"
          fontSize="3.175"
        ></path>
      </g>
    </Svg>
  )
}
