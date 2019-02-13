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
        <div>
            <Link to='/'>Designs</Link>
            <div>
                <Link to='/users'>Users</Link>
                <Link to='/admins'>Admins</Link>
                {authButton}
            </div>
        </div>
    );
};

function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps)(Header);