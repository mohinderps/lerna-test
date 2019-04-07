import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 0.80em;
    color: ${props => props.theme.gray};
    margin-bottom: 5px;
`

const Label = ({children}) => (<StyledDiv>{children}</StyledDiv>);

export default Label;