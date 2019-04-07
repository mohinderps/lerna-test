import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledPrimaryButton = styled(Button)`
    background-color: white;
    color: red;
`;

const SecondaryButton = ({children, ...rest}) => (
    <Button {...rest}>{children}</Button>
);

export default SecondaryButton;