import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 12px;
    color: rgb(128, 128, 128);
    margin-bottom: 5px;
`

const Label = ({children}) => (<StyledDiv>{children}</StyledDiv>);

export default Label;