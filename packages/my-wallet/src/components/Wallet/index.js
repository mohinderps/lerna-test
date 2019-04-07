import React from 'react';
import styled from 'styled-components';
import MyCards from '../MyCards';
import Heading from '../../common/Heading';

const Container = styled.div`
    padding: 40px 25px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.div`
    flex-grow: 1;
    overflow-y: scroll;
`
class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    addCard = card => {
        console.log('card', card);
        const {cards} = this.state;
        this.setState({
            cards: [card, ...cards]
        });
    }

    removeCard = id => {
        const {cards} = this.state;
        this.setState({
            cards: cards.filter(card => card.id !== id)
        });
    }

    render() {
        const {cards} = this.state;
        return (
            <Container>
                <Heading>My Wallet</Heading>
                <MainContent>
                    <MyCards 
                        cards={cards}
                        addCard={this.addCard}
                        removeCard={this.removeCard}
                    />
                </MainContent>
            </Container>
        );
        

    }



}

export default Wallet;