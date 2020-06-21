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

            <NumberpadSection>
                <div className='output'>0</div>
                <div className='pad clearfix'>
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
            </NumberpadSection>
        </StyledLayout>
    );
}
export default Money