import React from 'react';
// import styled from 'styled-components';
import MyCards from '../MyCards';
import Heading from '../../common/Heading';

class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {   
                    id: 1,
                },
                {
                    id: 2,
                }
            ]
        };
    }

    addCard = card => {
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
            <React.Fragment>
                <Heading>My Wallet</Heading>
                <MyCards 
                    cards={cards}
                    addCard={this.addCard}
                    removeCard={this.removeCard}
                />
            </React.Fragment>
        );
        

    }



}

export default Wallet;