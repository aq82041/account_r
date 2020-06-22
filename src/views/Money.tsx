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
    return (
        <StyledLayout>

            <CategorySection value={selectedRecord.category}
                            onChange={(c)=>{
                                setSelectedRecord({
                                    ...selectedRecord,
                                    category: c
                                })
                            }}
            />
            <TagSection value={selectedRecord.tags}
            onChange={(tags)=>{
                setSelectedRecord({
                    ...selectedRecord,
                    tags:tags
                })
            }}
            />
            <NoteSection value={selectedRecord.note}
            onChange={(note)=>{
                setSelectedRecord({
                    ...selectedRecord,
                    note:note
                })
            }}
            />
            <NumberpadSection value={selectedRecord.amount}
            onChange={(amount)=>{
                setSelectedRecord({
                    ...selectedRecord,
                    amount:amount
                })
            }}/>
        </StyledLayout>
    );
}
export default Money