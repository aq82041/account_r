import React from 'react';
import NumberpadWrapper from './NumberpadSection/NumberpadWrapper';
import computeOutput from './NumberpadSection/computeOutput';

type Props={
    value: string,
    onChange:(output: string)=>void,
    onOk:()=>void
}
const NumberpadSection: React.FC <Props> =(props)=>{
    const output=props.value
    const setOutput=(output: string)=>{
        if(output.length>16){
            output=output.slice(0,16)
        }
        props.onChange(output)
    }
    const onClickButtonWrapper=(e: React.MouseEvent)=>{
        const text=(e.target as HTMLButtonElement).textContent;
        if(text===null){return}
        if(text==='OK'){
            props.onOk()
        }
        if('0123456789.'.split('').concat(['删除','清空']).indexOf(text)>=0){
            setOutput(computeOutput(text,output))
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