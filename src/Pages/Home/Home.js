import React from 'react';
import Heading from '../../ui/Heading/Heading';
import Text from '../../ui/Text/Text';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CardCarousel from '../../ui/CardCarousel/CardCarousel';

library.add(faSearch)

const Home = (props) => {
    return(
        <div className="home">
            <div className="home__wrapper">
                <div className="header">
                    <div className="header__title">
                        <Heading level="h1">
                            Emilie's PaperSpace
                        </Heading>
                        <div className="header__title-icon">
                            <a href="index.html"><FontAwesomeIcon icon="search" size="lg"/></a>
                        </div>
                    </div>
                    <Text size="large" color="light-grey">
                        Welcome to your paperspace, click “+” to write your first entry.
                    </Text>
                </div>
            </div>
            <CardCarousel/>
        </div>
    );

}

export default Home;