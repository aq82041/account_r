import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import CategorySection from './money/CategorySection';
import TagSection from './money/TagSection';
import NoteSection from './money/NoteSection';
import NumberpadSection from './money/NumberpadSection';
import useRecords from '../hooks/useRecords';

const StyledLayout=styled(Layout)`
  display:flex;
  flex-direction: column;
`
type Category='-' | '+'
const defaultRecord={
    category:'-' as Category,
    tagsId:[] as number[],
    note:'',
    amount:'0'
}
function Money() {
    const [selectedRecord,setSelectedRecord]=useState(defaultRecord)
    const {addRecord}=useRecords()
    type r=typeof selectedRecord
    const onChange=(obj: Partial<r>)=>{
        setSelectedRecord({...selectedRecord,...obj})
    }
    const submit=()=>{
        if(selectedRecord.tagsId.length===0){
            window.alert('请选择一个标签')
        }else{
            addRecord(selectedRecord)
            window.alert('保存成功')
        }
        setSelectedRecord(defaultRecord)
    }
    return (
        <StyledLayout>
            <CategorySection value={selectedRecord.category}
                            onChange={c=>onChange({category: c})}
            />
            <TagSection value={selectedRecord.tagsId}
                        onChange={tagsId=>onChange({tagsId})}
            />
            <NoteSection value={selectedRecord.note}
            onChange={note=>onChange({note})}
            />
            <NumberpadSection value={selectedRecord.amount}
            onChange={amount=>onChange({amount})}
            onOk={submit}/>
        </StyledLayout>
    );
}
export default Money