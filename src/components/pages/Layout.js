import { Outlet, Link } from "react-router-dom";
import './style.css';

const Layout = () => {
  return (
    <>
    
      <nav>
        <ul className="flex">
          <li id='one'>
            <Link id='l1' className='link' to="/">Home</Link>
          </li>
          <li id='two' >
            <Link id='l2' className='link' to="/page1">Page 1</Link>
          </li>
          <li id='three' >
            <Link id='l2' className='link' to="/page2">Page 2</Link>
          </li>
          <li id='four' >
            <Link id='l2' className='link' to="/page3">Page 3</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;