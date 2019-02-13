import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({auth}) => {

    const authButton = auth ? (
        <a href='/api/logout'>Log out</a> 
    ) : (
        <a href='/api/auth/google'>Log in</a>
    );

    return (
        <nav className='nav-wrapper'>
            <div>
                <Link to='/' className='brand-logo'>Designs</Link>
                <ul className='right'>
                    <li><Link to='/users'>Users</Link></li>
                    <li><Link to='/admins'>Admins</Link></li>
                    <li>{authButton}</li>
                </ul>
            </div>
        </nav>
    );
};

function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps)(Header);