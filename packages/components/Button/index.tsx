import  React from 'react'
import { Button as  AButton, ButtonProps } from 'antd';

export const Button: React.FC<ButtonProps> = (props) => {
    return <AButton {...props}>Click me</AButton>
}