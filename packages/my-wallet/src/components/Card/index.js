import React from 'react'
import styled from 'styled-components';
import SecondaryButton from '../../common/SecondaryButton';
import DeleteCardModal from '../DeleteCardModal';
import AddedCard from '../AddedCard';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
`;

class Card extends React.Component {
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
        const {removeCard, number, card} = this.props;
        const {showModal} = this.state;

        return (
            <Container>
                <AddedCard number={number} card={card} />
                <SecondaryButton handleClick={this.openModal} width="250px">Remove</SecondaryButton>
                {showModal && (
                    <DeleteCardModal 
                        closeModal={this.closeModal} 
                        removeCard={removeCard}
                        number={number}
                    />
                )}
            </Container>
        );
    }
}

export default Card;