import styled from 'styled-components';
import React, {useState} from 'react';

const NumberpadWrapper=styled.section`
  .output{
    font-size:32px;
    text-align: right;
    padding:8px 16px 8px 0;
    box-shadow:inset 0 5px 5px -5px rgba(0,0,0,0.25);
    color:rgb(140, 177, 253);
  }
  .pad{
    > button{
      background:white;
      border:none;
      width:25%;
      font-size:16px;
      height:54px;
      float:left;
      border-top: 1px solid black;
      border-right: 1px solid black;
      &.ok{
        padding:32px 0;
        float:right;
        height:108px;
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

const NumberpadSection: React.FC=()=>{
    const [output,_setOutput]=useState('0')
    const setOutput=(output: string)=>{
        if(output.length>16){
            output=output.slice(0,16)
        }
        _setOutput(output)
    }
    const onClickButtonWrapper=(e: React.MouseEvent)=>{
        const text=(e.target as HTMLButtonElement).textContent;
        switch(text){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(output==='0'){
                    setOutput(text)
                }else{
                    setOutput(output+text)
                }
                break;
            case '.':
                if(output.indexOf('.')<0){
                    setOutput(output+text)
                }
                break;
            case '删除':
                if(output.length===1){setOutput('0')}
                else{
                    setOutput(output.slice(0,-1))
                }
                break;
            case '清空':
                setOutput('0')
                break;
            case 'OK':
                break;
        }
    }
    return (
        <NumberpadWrapper>
            <div className='output'>{output}</div>
            <div className='pad clearfix' onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className='remove'>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className='clear'>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className='ok'>OK</button>
                <button className='zero'>0</button>
                <button className='dian'>.</button>
            </div>
        </NumberpadWrapper>
    )
}
export default NumberpadSection