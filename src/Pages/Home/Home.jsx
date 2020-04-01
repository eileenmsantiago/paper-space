import React from 'react';
import PSContainer from '../../ui/PSContainer/PSContainer';
import CardCarousel from '../../ui/CardCarousel/CardCarousel';
import Header from '../../ui/Header/Header';

const Home = (props) => {

    const {journals} = props;
    let hasEntries = false;
    journals.forEach(journal => {
        if(journal.entries.length > 0) {
            hasEntries = true;
        }
    })
    return(
        <div className="home">
            <PSContainer>
                <div className="home__wrapper">
                    <Header
                        title="Emilie's PaperSpace" 
                        subtitle={hasEntries ? `Here are your past journal collections.` : 'Welcome to your PaperSpace, click “+” to write your first entry.'}>
                    </Header>
                </div>
            </PSContainer>
            <CardCarousel journals={journals}/>
        </div>
    );
}

export default Home;