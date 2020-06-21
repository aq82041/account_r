import styled from 'styled-components';

const NumberpadSection=styled.section`
  .output{
    font-size:32px;
    text-align: right;
    padding:8px 16px 8px 0;
    box-shadow:inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  .pad{
    > button{
      background:white;
      border:none;
      width:25%;
      font-size:16px;
      height:56px;
      float:left;
      border-top: 1px solid black;
      border-right: 1px solid black;
      &.ok{
        padding:32px 0;
        float:right;
        height:112px;
        border-right: none;
        border-bottom: 1px solid black;
      }
      &.zero{
        width:50%;
        border-bottom: 1px solid black;
      }
      &.dian {
        border-bottom: 1px solid black;
      }

      &.remove, &.clear {
        border-right: none;
      }
     
    }
  }
`
export default NumberpadSection