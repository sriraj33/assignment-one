import { Outlet, Link } from "react-router-dom"
import Heading from './Heading';
import './style.css';

const Layout = () => {
  return (
    <>
      <Heading />
      <nav>
        <ul className="flex">
          <li>
            <Link className='link' to="/">Home</Link>
          </li>
          <li id='two' >
            <Link className='link' to="/page1">Page 1</Link>
          </li>
          <li id='three' >
            <Link className='link' to="/page2">Page 2</Link>
          </li>
          <li id='four' >
            <Link className='link' to="/page3">Page 3</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;