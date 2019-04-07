import React from 'react';
import Select from 'react-select';
import Label from '../Label';

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const options = months.map(m => ({
    label: m,
    value: m
}));

const customStyles = {
    control: provided => ({
        ...provided,
        fontSize: '16px',
        height: '45px'
    })
}

const findSelectedOption = value => {
    const filteredOptions = options.filter(o => o.value === value);
    if(filteredOptions.length === 0) {
        return null;
    }
    return filteredOptions[0];
}


const MonthInput = ({value, setMonth, label}) => {
    const selectedOption = findSelectedOption(value);
    return (
        <React.Fragment>
            <Label>{label}</Label>
            <Select
                value={selectedOption}
                onChange={selection => setMonth(selection.value)}
                options={options}
                placeholder="MM"
                isSearchable={false}
                styles={customStyles}
            />
        </React.Fragment>
    );
}

export default MonthInput;