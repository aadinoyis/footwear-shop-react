import logo from '../../public/logo.svg'

const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="logo" width={135}/>
      </a>
      
      <nav>
        <ul>
          <li><a href="#" className='active'>Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header