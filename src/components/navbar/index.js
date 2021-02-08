import React, { useState } from 'react';
import 'bulma/css/bulma.css'
import 'bulma-divider/dist/css/bulma-divider.min.css';
import icon from 'assets/health_icon.png';

const Nav = () => {

    const [jwt, setJwt] = useState(localStorage.getItem('jwt'));
    const [active, setActive] = useState(false);

    const logout = () => {
        localStorage.removeItem('jwt');
        setJwt(null);
        window.location = '/';  
    };

    let menuClasses = 'navbar-menu';
    let burgerClasses = 'navbar-burger burger';

    if(active) {
        menuClasses += ' is-active';
        burgerClasses += ' is-active';
    }

    return (
        <div className='navbar-wrapper navbar-wrapper-custom'>  
            <nav className='navbar ' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand navbar-brand-custom' >

                    <div className='navbar-brand-inner' onClick={() => window.location.pathname='/'} >
                        <img src={icon} alt='logo' width='60px' />
                        <h5 className='subtitle has-text-weight-normal' style={{margin: '0 5px'}}>Quantifi Health</h5>
                        <img src={icon} alt='logo' width='60px' />
                    </div>

                    <a onClick={() => setActive(!active)} role='button' className={burgerClasses} aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>

                
                <div id='navbarBasicExample' className={menuClasses} style={{marginLeft: '5px'}}>
                    <div className='navbar-start'>
                        <a href='/' className='navbar-item'>
                            About
                        </a>

                        <a href='/' className='navbar-item'>
                           How to Use
                        </a>


                        <a href='/' className='navbar-item'>
                           More Info
                        </a>
                </div>

                <div className='navbar-end'>
                    <div className='navbar-item'>

                        <div className='buttons'>
                            {jwt ? <OptionsWithUser logout={logout} /> : <OptionsWithNoUser/>}
                        </div>
                        
                    </div>
                </div>
            </div>
    
            </nav>
        </div>
    );
}

const OptionsWithNoUser = () => (
    <div>
        <a href='/register' className='button' style={{backgroundColor: "#2596be", color: "#ffffff"}}>
           Sign Up
        </a>

        <a href='/login' className='button is-light'>
            Log in
        </a>
    </div>
);

const OptionsWithUser = ({ logout }) => {
     return(
        <div>
            <a href='/portal' className='button is-info'>
                <strong>Account Portal</strong>
            </a>

            <button onClick={logout} className='button is-light'>
                Logout
            </button>
        </div>
    )
};

 
export default Nav;