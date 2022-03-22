import Logo from '../../../Logo'

export default function LogoWrap({ children }) {
  return (
    <a
      className="navbar-brand d-none d-md-block"
      href="#/"
      onClick={(e) => e.preventDefault()}
    >
      <Logo />
      <span>
        &nbsp;
        <b className="small">
          Drone Training <span className="small">Ltd.</span>
        </b>
      </span>
      {children && children}
    </a>
  )
}
