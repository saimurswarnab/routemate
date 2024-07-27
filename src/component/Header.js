import Logo from "../assets/logo.png";
export const Header = () => {
  return (
    <header>
      <a href="" className="logo">
        <img src={Logo} alt="RouteMate Logo"/>
        <span>Routemate</span>
      </a>
      <nav className="navigation">
        <a href="/" className="link">Home</a>
        <a href="/products" className="link">Products</a>
        <a href="/contact" className="link">Contact</a>

      </nav>
    </header>
  )
}
