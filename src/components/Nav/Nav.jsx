import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

const Nav = (props) => {
    return (
        <div className="nav">
                {/* {props.children} */}
                <ul className="nav__list">
                    <li>
                        <NavLink
                            to="/"
                            exact
                            className="nav__link"
                            activeClassName="nav__link--active"
                        >
                            <Icon name="home" className="nav__link-icon"></Icon>
                            <Text size="labels">Home</Text>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/entry"
                            className="nav__link"
                            activeClassName="nav__link--active"
                        >
                            <Icon name="add" className="nav__link-icon"></Icon>
                            <Text size="labels">Write</Text>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className="nav__link"
                            activeClassName="nav__link--active"
                        >
                            <Icon name="profile" className="nav__link-icon"></Icon>
                            <Text size="labels">Profile</Text>
                        </NavLink>
                    </li>
                </ul>
        </div>
    )
}

export default Nav;
