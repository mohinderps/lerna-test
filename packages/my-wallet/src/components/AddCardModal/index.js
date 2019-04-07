import React from 'react';
import valid from 'card-validator';
import styled from 'styled-components';
import PrimaryButton from '../../common/PrimaryButton';
import Heading from '../../common/Heading';
import Modal from '../../common/Modal';
import NumberInput from '../../common/NumberInput';
import MonthInput from '../../common/MonthInput';
import YearInput from '../../common/YearInput';
import CodeInput from '../../common/CodeInput';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 10px;
`;

const StyledNumberInput = styled.div`
    grid-column: 1 / 4;
    grid-row: 1 / 2;
`;

const StyledMonthInput = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
`;

const StyledYearInput = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
`;

const StyledCodeInput = styled.div`
    grid-column: 3 / 4;
    grid-row: 2 / 3;
`;

class AddCardModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            month: '',
            year: '',
            code: '',
            card: null,
        }
    }

    setNumber = number => {
        this.setState({
            number,
            card: valid.number(number).card
        });
    }

    setMonth = month => this.setState({month});
    
    setYear = year => this.setState({year});

    setCode = code => this.setState({code});

    isNumberValid = () => {
        const {number} = this.state;
        return valid.number(number).isValid;
    }

    isMonthValid = () => {
        const {month} = this.state;
        return valid.expirationMonth(month).isValidForThisYear;
    }

    isYearValid = () => {
        const {year} = this.state;
        return valid.expirationYear(year).isValid;
    }

    isCodeValid = () => {
        const {code} = this.state;
        return valid.cvv(code).isValid;
    }

    isCardValid = () => this.isNumberValid() && this.isMonthValid() && this.isYearValid() && this.isCodeValid(); 

    render() {
        const {closeModal, addCard} = this.props;
        const {number, month, year, code, card} = this.state;
        return (
            <Modal closeModal={closeModal} title="Add New Card">
                <Container>
                    <StyledNumberInput>
                        <NumberInput
                            setNumber={this.setNumber}
                            value={number}
                            label="Enter Debit / Credit Card Number"
                            card={card}
                        />
                    </StyledNumberInput>

                    <StyledMonthInput>
                        <MonthInput
                            setMonth={this.setMonth}
                            value={month}
                            label="Expiry Month"
                        />
                    </StyledMonthInput>

                    <StyledYearInput>
                        <YearInput
                            setYear={this.setYear}
                            value={year} 
                            label="Expiry Year"
                        />
                    </StyledYearInput>

                    <StyledCodeInput>
                        <CodeInput 
                            setCode={this.setCode}
                            value={code}
                            label="CVV"
                        />
                    </StyledCodeInput>
                </Container>
                <PrimaryButton disabled={false && !this.isCardValid()}>Add Card</PrimaryButton>
            </Modal>
        );
    }
}


export default AddCardModal;