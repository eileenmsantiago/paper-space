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
const weeks = [
    {
        dateRange: "Jan 1-7",
        detail: "journal 1",
        entries: [1]
    },
    {
        dateRange: "Jan 8-15",
        detail: "journal 1",
        entries: []
    },
    {
        dateRange: "Jan 16-21",
        detail: "journal 1",
        entries: []
    }
]

const Home = (props) => {

    let hasEntries = false;
    weeks.forEach(week => {
        if(week.entries.length > 0) {
            hasEntries = true;
        }
    })

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
                            {hasEntries ? `Here are your past journal collections.` : 'Welcome to your PaperSpace, click “+” to write your first entry.'}
                        </Text>
                    </div>
                </div>
            </PSContainer>
            <CardCarousel weeks={weeks}/>
        </div>
    );
}

export default Home;