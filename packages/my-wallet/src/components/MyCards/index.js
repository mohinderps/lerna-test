import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import AddCardModal from '../AddCardModal';
import PrimaryButton from '../../common/PrimaryButton';
import EmptyWallet from '../EmptyWallet';

const Container = styled.div`
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.border}
    border-radius: 5px;
    margin-top: 20px;
    padding: 20px 50px
`;

class MyCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    openModal = () => {
        this.setState({
            showModal: true
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    }

    render() {
        const {cards, addCard, removeCard} = this.props;
        const {showModal} = this.state;

        return (
            <Container>
                {/* {cards.length === 0 && <EmptyWallet />} */}
                
                {cards.map((card, index) => <Card key={index} {...card} removeCard={removeCard} />)}
                
                <PrimaryButton width="25%" handleClick={this.openModal}>Add New Card</PrimaryButton>
                
                {showModal && (
                    <AddCardModal 
                        closeModal={this.closeModal} 
                        addCard={addCard}
                    />
                )}
            </Container>
        );
    }
}


export default MyCards;