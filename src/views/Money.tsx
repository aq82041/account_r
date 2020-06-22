import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import CategorySection from './money/CategorySection';
import TagSection from './money/TagSection';
import NoteSection from './money/NoteSection';
import NumberpadSection from './money/NumberpadSection';

const StyledLayout=styled(Layout)`
  display:flex;
  flex-direction: column;
`
type Category='-' | '+'
function Money() {
    const [selectedRecord,setSelectedRecord]=useState({
        category:'-' as Category,
        tags:[] as string[],
        note:'',
        amount:'0'
    })
    type r=typeof selectedRecord
    const onChange=(obj: Partial<r>)=>{
        setSelectedRecord({...selectedRecord,...obj})
    }
    return (
        <StyledLayout>
            <CategorySection value={selectedRecord.category}
                            onChange={c=>onChange({category: c})}
            />
            <TagSection value={selectedRecord.tags}
                        onChange={tags=>onChange({tags})}
            />
            <NoteSection value={selectedRecord.note}
            onChange={note=>onChange({note})}
            />
            <NumberpadSection value={selectedRecord.amount}
            onChange={amount=>onChange({amount})}/>
        </StyledLayout>
    );
}
export default Money