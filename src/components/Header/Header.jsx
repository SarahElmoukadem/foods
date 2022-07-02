import React from 'react'
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';

const nav__links = [
    {
        display:'Home',
        path:'/home'
    },
    {
        display:'Foods',
        path:'/foods'
    },
    {
        display:'Cart',
        path:'/cart'
    }
]

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h5>Greek</h5>
                    </div>

                    <div className="navigation">
                        <div className="menu">
                            {
                                nav__links.map((item,index) => (
                                    <NavLink to={item.path} key={index}>
                                        {item.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header