import React from 'react';
import Button from '../Button';

const SecondaryButton = ({children, ...rest}) => (
    <Button {...rest}>{children}</Button>
);

export default SecondaryButton;