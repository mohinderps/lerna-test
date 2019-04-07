import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 1.25em;
    color: ${props => props.theme.heading};
    text-align: ${props => props.center ? 'center': 'left'};
`;

const Heading = ({center, children}) => (
    <StyledDiv center={center}>{children}</StyledDiv>
);

export default Heading;