import React from 'react';
import Button from '../Button';

const PrimaryButton = ({children, ...rest}) => (
    <Button primary {...rest}>{children}</Button>
);

export default PrimaryButton;