 import React from 'react';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

function Header(props) {

    const { title, subtitle, backLink, search } = props;

    return (
        <div className="header">
            <div className="header__title">
                {backLink ? 
                    <a href={backLink}>
                        <Icon name="back"/>
                    </a>
                : null}
                {title ?  
                <>
                    <Heading level="h1">
                        {title}
                    </Heading> 
                    <a className="header__icon" href={search}>
                        <Icon name="search"/>
                    </a>
                </>
                : null}
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