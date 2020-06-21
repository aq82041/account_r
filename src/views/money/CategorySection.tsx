
import styled from 'styled-components';

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


export default CategorySection