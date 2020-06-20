import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const CategorySection=styled.section`
  font-size:18px;
  background:rgb(140, 177, 253);
  padding:16px 16px 16px 16px;
  color:white;
  > ul{
    display:flex;
    justify-content: center;
    > li{
      border-bottom:1px solid white;
      border-top:1px solid white;
      padding:6px 16px;
      &:first-child{
        border-radius:20px 0 0 20px;
        border-left:1px solid white;
        border-right:1px solid white;
      }
      &:nth-child(2){
        border-radius:0 20px 20px 0;
        border-right:1px solid white;
        border-left:1px solid white;
      }
      &.selected{
        background:white;
        color:rgb(140, 177, 253);
      }    
    }
  }
`

const TagSection=styled.section`
  background:white;
  padding:8px;
  flex-grow:1;
  > ul{
    display:flex;
    flex-wrap:wrap;
    font-size:14px;
    > li{ 
      padding: 12px 21.6px;     
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > div{
        background:rgb(245, 245, 245);
        width:46px;
        height:46px;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius:50%;
        margin-bottom:4px;
        &.selected{
          background:rgb(140, 177, 253);
          .icon{
            fill:white;
          }
        }
        > .icon{
          width:32px;
          height:32px;
        }
      }
    }
  }
  
`
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

const StyledLayout=styled(Layout)`
  display:flex;
  flex-direction: column;
  
`
function Money() {
    return (
        <StyledLayout>
            <CategorySection>
                <ul>
                    <li className='selected'>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <TagSection>
                <ul>
                    <li>
                        <div className='selected'>
                            <Icon name='cloth'/>
                        </div>
                        <span>衣服</span>
                    </li>
                    <li>
                        <div>
                            <Icon name='food'/>
                        </div>
                        <span>餐饮</span>
                    </li>
                    <li>
                        <div>
                            <Icon name='house'/>
                        </div>
                        <span>住房</span>
                    </li>
                    <li>
                        <div>
                            <Icon name='car'/>
                        </div>
                        <span>交通</span>
                    </li>
                    <li>
                        <div>
                            <Icon name='add'/>
                        </div>
                        <span>添加</span>
                    </li>
                </ul>
            </TagSection>
            <NoteSection>
                <label>
                    <span>备注：</span>
                    <input type='text' placeholder='在这里写备注~'/>
                </label>
            </NoteSection>
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