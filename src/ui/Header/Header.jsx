import React from 'react';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import SearchIcon from '@material-ui/icons/Search';
import Icon from '../Icon/Icon';
function Header(props) {

    const {title, subtitle, backLink} = props;

    return (
        <div className="header">
            <div className="header__title">
                {backLink ? 
                    <a href={backLink}>
                        <Icon name="back"/>
                    </a>
                : null}
                {title ?  
                    <Heading level="h1">
                        {title}
                    </Heading> 
                : null}
                <button type="button" className="close" aria-label="Close">
                    <SearchIcon />
                </button>
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