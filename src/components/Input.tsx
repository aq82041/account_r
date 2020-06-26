import React from 'react';
import styled from 'styled-components';

const Label=styled.label`
    display:flex;
    align-items: center;
    > span{
      margin-right:8px;
      white-space:nowrap;
    }
    > input{
      height:48px;
      width:100%;
      border:none;
    }
`
type Props={
    label: string,
}& React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC <Props> =(props)=>{
    const {label,children,...rest}=props
    return (
        <Label>
            <span>{label}</span>
            <input {...rest}/>
        </Label>
    )
}
export default Input