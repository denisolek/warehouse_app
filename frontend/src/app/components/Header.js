import React from 'react';
import {Link} from 'react-router';

export class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-inverse">
            <a className="navbar-brand" href="#">WAREHOUSE</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item"><Link to={'/home'} className="nav-link" activeClassName="active">Store</Link></li>
                    <li className="nav-item"><Link to={'/newItem'} className="nav-link" activeClassName="active">Add items</Link></li>
                    <li className="nav-item"><Link to={'/login'} className="nav-link" activeClassName="active">LOGIN</Link></li>
                </ul>
        </nav>
    );
  }
}
