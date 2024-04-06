import { Link } from "react-scroll"
import Logo from '../images/logo.jpg'
export const NavbarComponent = () => {
    return ( 
      <header className="text-gray-600  sticky z-10 top-0 bg-amber-600">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link to='home' smooth={true} offset={-50}  duration={900} className="flex title-font text-4xl  font-medium items-center text-gray-700 mb-4 md:mb-0">
       <img src={Logo}  alt="logo" className='rounded-full hover:rotate-12 cursor-pointer 'style={{height:"50px",width:"50px"}} />
        <span className="ml-3 text-x4l font-bold  hover:text-gray-900 cursor-pointer">Abrar</span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap font-semibold text-center justify-center items-center text-2xl">
        <Link to='home' smooth={true} offset={-50}  duration={900}  className="mr-5 hover:text-gray-900 cursor-pointer ">Home</Link>
        <Link to='about' smooth={true} offset={-80}  duration={900} className="mr-5 hover:text-gray-900 cursor-pointer">About</Link>
        <Link to='projects' smooth={true} offset={-50}  duration={900} className="mr-5 hover:text-gray-900 cursor-pointer">Projects</Link>
        
        <Link to='contact' smooth={true} offset={-10}  duration={900}  className="mr-5 hover:text-gray-900 cursor-pointer">Contact</Link>
        <Link to='/contact1' className="mr-5 hover:text-gray-900 cursor-pointer"></Link>
      </nav>
    </div>
  </header>
    )
}