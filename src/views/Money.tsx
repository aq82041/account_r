import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import CategorySection from './money/CategorySection';
import TagSection from './money/TagSection';
import NoteSection from './money/NoteSection';
import NumberpadSection from './money/NumberpadSection';

const StyledLayout=styled(Layout)`
  display:flex;
  flex-direction: column;
  
`
function Money() {
    return (
        <StyledLayout>
            <CategorySection />
            <TagSection />
            <NoteSection />
            <NumberpadSection />
        </StyledLayout>
    );
}
export default Money