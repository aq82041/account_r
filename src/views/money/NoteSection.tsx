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
      height:40px;
      width:100%;
      border:none;
    }
  }
  
`

const NoteSection: React.FC=()=>{
    const [note,setNote]=useState('')
    const refInput=useRef<HTMLInputElement>(null)
    const onBlur=()=>{
        if(refInput.current!==null){
            setNote(refInput.current.value)
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