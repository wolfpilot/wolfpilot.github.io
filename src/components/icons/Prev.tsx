import { Icon } from "@ts/icons"

const Prev: React.FC<Icon> = ({
  className,
  width = 20,
  height = 20,
  color = "#000000",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#svg-prev)">
      <path
        className="path path__triangle"
        d="M16.1359 20.02C15.9263 20.02 15.7228 19.947 15.5632 19.8149L4.31797 10.687C4.1155 10.5188 4.00098 10.2767 4.00098 10.0195C4.00098 9.76135 4.11551 9.51919 4.31593 9.35309L15.5591 0.223152C15.7187 0.0930671 15.9211 0.0200195 16.1267 0.0200195C16.2555 0.0200195 16.3823 0.047037 16.4999 0.100071C16.8108 0.243165 17.001 0.54436 17.001 0.890585V19.1525C17.001 19.4967 16.8087 19.7989 16.4999 19.939C16.3752 19.995 16.2596 20.02 16.1359 20.02ZM15.0826 16.972C15.2565 16.869 15.2258 16.5318 15.2258 16.5318V3.57433C15.2258 3.57433 15.2442 3.31416 15.0315 3.21009C14.8168 3.10603 14.5642 3.30015 14.5642 3.30015L6.78545 9.57823C6.78545 9.57823 6.52162 9.79838 6.52162 10.0185C6.52162 10.2387 6.75068 10.4308 6.75068 10.4308L14.6797 16.8349C14.6797 16.8349 14.9108 17.0751 15.0836 16.971L15.0826 16.972Z"
      />
      <path
        className="path path__line"
        d="M19 20C18.4483 20 18 19.608 18 19.13V0.871953C18 0.391953 18.4506 0.00195312 19 0.00195312C19.5494 0.00195312 20 0.391953 20 0.871953V19.13C20 19.608 19.5517 20 19 20Z"
      />
    </g>
    <defs>
      <clipPath id="svg-prev">
        <rect
          width={width}
          height={height}
          fill={color}
          transform="matrix(-1 0 0 1 20 0)"
        />
      </clipPath>
    </defs>
  </svg>
)

export default Prev
