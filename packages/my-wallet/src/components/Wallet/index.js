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
            cards: [
                {
                    code: '111',
                    month: '04',
                    number: '4572740601031314',
                    year: '2023',
                    card: {
                        code: {
                            name: 'CVV',
                            size: 3
                        },
                        gaps: [4, 8, 12],
                        lengths: [16, 18, 19],
                        matchStrength: 1,
                        niceType: 'Visa',
                        patterns: [4],
                        type: 'visa'
                    }
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

    removeCard = number => {
        const {cards} = this.state;
        this.setState({
            cards: cards.filter(card => card.number !== number)
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