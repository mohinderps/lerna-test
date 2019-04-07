import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import AddCardModal from '../AddCardModal';
import PrimaryButton from '../../common/PrimaryButton';

const Container = styled.div`
    border: 1px solid red;
    border-radius: 5px;
    margin-top: 10px;
`;

class MyCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true
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
                {cards.length === 0 && <div>No card added. Click to add new cards.</div>}
                
                {cards.map(card => <Card key={card.id} {...card} removeCard={removeCard} />)}
                
                <PrimaryButton handleClick={this.openModal}>Add New Card</PrimaryButton>
                
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