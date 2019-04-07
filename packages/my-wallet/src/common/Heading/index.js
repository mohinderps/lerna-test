import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 1.25em;
    color: ${props => props.theme.heading};
`;

const Heading = ({children}) => (
    <StyledDiv>{children}</StyledDiv>
);

export default Heading;