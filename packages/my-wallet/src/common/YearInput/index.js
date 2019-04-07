import React from 'react';
import Select from 'react-select';
import Label from '../Label';

const numberOfYears = 10;

let years = [];
for(var i = 0; i < numberOfYears; i++) {
    if(i === 0) {
        years = [...years, new Date().getFullYear()];
    }
    else {
        years = [...years, years[i-1] + 1];
    }
}

const options = years.map(y => ({
    label: y.toString(),
    value: y.toString()
}));

const customStyles = {
    control: provided => ({
        ...provided,
        fontSize: '16px',
        height: '45px',
    })
}

const findSelectedOption = value => {
    const filteredOptions = options.filter(o => o.value === value);
    if(filteredOptions.length === 0) {
        return null;
    }
    return filteredOptions[0];
}

const YearInput = ({value, setYear, label}) => {
    const selectedOption = findSelectedOption(value);
    return (
        <React.Fragment>
           <Label>{label}</Label> 
           <Select
               value={selectedOption}
               onChange={selection => setYear(selection.value)}
               options={options}
               placeholder="YYYY"
               isSearchable={false}
               styles={customStyles}
           />
        </React.Fragment>
    );
}

export default YearInput;