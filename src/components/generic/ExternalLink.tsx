export type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>

const ExternalLink: React.FC<Props> = ({ className, children, ...props }) => (
  <a {...props} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

export default ExternalLink
