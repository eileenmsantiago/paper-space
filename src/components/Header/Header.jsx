 import React from 'react';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

function Header(props) {

    const {title, subtitle, backLink, search} = props;

    return (
        <div className="header">
            <div className="header__title">
                {search ? 
                    <a href={search}>
                        <Icon name="search"/>
                    </a>
                : null}
                {title ?  
                    <Heading level="h1">
                        {title}
                    </Heading> 
                : null}
                    <a href={backLink}>
                        <Icon name="back"/>
                    </a>
            </div>
            {subtitle ? 
              <Text size="large" color="light-grey">
                {subtitle}
                </Text>
            : null}
        </div>
    )
};

export default Header;