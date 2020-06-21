
import styled from 'styled-components';
import React, {useState} from 'react';

const CategoryWrapper=styled.section`
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
const CategorySection: React.FC=()=>{
    const categoryMap={
        '-':'支出',
        '+':'收入',
    }
    type Y=keyof typeof categoryMap
    const [category,setCategory]=useState('-')   //当前被选中的
    const [categoryList]=useState<Y[]>(['-','+']) //全部列表

    return (
        <CategoryWrapper>
            <ul>
                {categoryList.map(c=>
                    <li className={category===c? 'selected':''} onClick={()=>{setCategory(c)}}>
                        {categoryMap[c]}
                    </li>)}
            </ul>
        </CategoryWrapper>
    )
}

export default CategorySection