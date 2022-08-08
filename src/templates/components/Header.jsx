import {Link, NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo">VIN DECODER</Link>
        <nav className="header__nav">
          <NavLink to="/"
                   className={({isActive}) => isActive ? '--active' : ''}>
            Search
          </NavLink>
          <NavLink to="/variables"
                   className={({isActive}) => isActive ? '--active' : ''}>
            Variables
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
