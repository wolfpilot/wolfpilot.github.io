import React from "react"

export interface Props {
  className?: string
}

const LogoLetter: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="604"
    height="264"
    viewBox="0 0 604 264"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={`${className}__contour-path`}
      d="M449.552 125.75C449.552 125.75 418.733 169.342 401.413 169.342C384.092 169.342 325.778 75 302 75C278.222 75 219.909 169.342 202.587 169.342C185.266 169.342 154.448 125.75 154.448 125.75L104.861 166.833C104.861 166.833 179.938 263.5 199.197 263.5C218.456 263.5 287.816 165.625 302 165.625C316.184 165.625 385.544 263.5 404.803 263.5C424.062 263.5 499.139 166.833 499.139 166.833L449.552 125.75Z"
      stroke="#151515"
      pathLength="1"
    />
    <path
      className={`${className}__shading-path`}
      d="M449.552 125.75C449.552 125.75 418.733 169.342 401.413 169.342C384.092 169.342 325.778 75 302 75C278.222 75 219.909 169.342 202.587 169.342C185.266 169.342 154.448 125.75 154.448 125.75L104.861 166.833C104.861 166.833 179.938 263.5 199.197 263.5C218.456 263.5 287.816 165.625 302 165.625C316.184 165.625 385.544 263.5 404.803 263.5C424.062 263.5 499.139 166.833 499.139 166.833L449.552 125.75Z"
      fill="white"
    />
  </svg>
)

export default LogoLetter
