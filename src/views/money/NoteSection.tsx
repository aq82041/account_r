import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const NoteWrapper=styled.section`
  font-size:14px;
  padding:0 16px;
  background:white;
  box-shadow: 0 0 2px rgba(0,0,0,0.25);
  > label{
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
  }
  
`

type Props={
    value: string,
    onChange:(note: string)=>void
}
const NoteSection: React.FC <Props> =(props)=>{
    const note=props.value
    const refInput=useRef<HTMLInputElement>(null)
    const onBlur=()=>{
        if(refInput.current!==null){
            props.onChange(refInput.current.value)
        }
    }
    return (
        <NoteWrapper>
            <label>
                <span>备注：</span>
                <input type='text' placeholder='在这里写备注~'
                ref={refInput} defaultValue={note} onBlur={onBlur}/>
            </label>
        </NoteWrapper>
    )
}
export default NoteSection