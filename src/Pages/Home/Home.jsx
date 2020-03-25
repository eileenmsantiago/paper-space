import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Heading from '../../ui/Heading/Heading';
import Text from '../../ui/Text/Text';
import CardCarousel from '../../ui/CardCarousel/CardCarousel';
import TapBar from '../../ui/TapBar/TapBar';

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
                            {/* <a href="index.html"><img src="assets/icon-prompts-cards.svg"/></a> */}
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