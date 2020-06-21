import styled from 'styled-components';

const NoteSection=styled.section`
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
export default NoteSection