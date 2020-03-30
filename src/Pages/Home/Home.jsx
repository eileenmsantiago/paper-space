import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchIcon from '@material-ui/icons/Search';
import PSContainer from '../../ui/PSContainer/PSContainer';
import Heading from '../../ui/Heading/Heading';
import Text from '../../ui/Text/Text';
import CardCarousel from '../../ui/CardCarousel/CardCarousel';

// library.add(faSearch)

const Home = (props) => {
    return(
        <div className="home">
            <PSContainer>
                <div className="home__wrapper">
                    <div className="header">
                        <div className="header__title">
                            <Heading level="h1">
                                Emilie's PaperSpace 
                            </Heading>
                            <button type="button" className="close" aria-label="Close">
                                <SearchIcon />
                            </button>
                        </div>
                        <Text size="large" color="light-grey">
                            Welcome to your PaperSpace, click “+” to write your first entry.
                        </Text>
                    </div>
                </div>
            </PSContainer>
            <CardCarousel/>
        </div>
    );
}

export default Home;