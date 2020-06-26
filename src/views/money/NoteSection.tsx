import styled from 'styled-components';
import React from 'react';
import Input from 'components/Input';

const NoteWrapper=styled.section`
  font-size:14px;
  padding:0 16px;
  background:white;
  box-shadow: 0 0 2px rgba(0,0,0,0.25);  
`

type Props={
    value: string,
    onChange:(note: string)=>void
}
const NoteSection: React.FC <Props> =(props)=>{
    const note=props.value
    const onChange=(e: any)=>{
        props.onChange(e.target.value)
    }
    return (
        <NoteWrapper>
            <Input type='text' label='备注：' placeholder='在这里写备注~'
                   value={note} onChange={onChange} />
        </NoteWrapper>
    )
}
export default NoteSection