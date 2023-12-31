
import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <header>
        <nav className={'flex justify-between items-center bg-cyan-100 p-5'}>
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" title="logo" alt="logo" className={'w-[50px] rounded-full' }/>
          <ul className={'flex gap-[4vw]'}>
            <li> <Link to="/Home">Articles</Link></li>
            <li><Link to="/Myarticle">Your Articles</Link></li>
            <li><Link to="/Editor">Write New Article</Link></li>
            <li><Link to="/Login"><b>Login</b></Link></li>
            <li><Link to="/Signup"><b>Create Account</b></Link></li>
          </ul>
        </nav>
      </header>
    );
  }

}

export default Header;
