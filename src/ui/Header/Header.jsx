import React from 'react';

function Header(props) {

    return (
        <nav>
            <ul>
                <li>
                    <a>
                        {props.homeText}
                    </a>
                </li>
                <li>
                    <a>
                        About
                    </a>
                </li>
                <li>
                    <a>
                        Contact
                    </a>
                </li>

            </ul>
        </nav>
    )
};

export default Header;