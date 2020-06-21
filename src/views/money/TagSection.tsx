import styled from 'styled-components';
import Icon from '../../components/Icon';
import React, {useState} from 'react';

const Wrapper=styled.section`
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
        
        > .icon{
          width:32px;
          height:32px;
        }
      }
      &.selected{
        > div{
          background:rgb(140, 177, 253);
          > .icon{
            fill:white;
          }
        }
      }
    }
  }
  
`

const TagSection : React.FC=(props)=>{
    const [tags,setTags]=useState<string[]>(['衣服','餐饮','住房','交通'])
    const [selectedTags,setSelectedTags]=useState<string[]>([])
    const onAddTag=()=>{
        const tagname=window.prompt('你要添加的标签名是')
        if(tagname){
            setTags([...tags,tagname])
        }
    }
    const onToggleTag=(tag: string)=>{
        if(selectedTags.indexOf(tag)>=0){
            setSelectedTags(selectedTags.filter(t=>t!==tag))
        }else{
            setSelectedTags([...selectedTags,tag])
        }
    }
    const getClass=(tag: string)=>{
        return selectedTags.indexOf(tag)>=0?'selected':''
    }

    return (
        <Wrapper>
            <ul>
                {tags.map(tag=>
                    <li key={tag} onClick={()=>{onToggleTag(tag)}} className={getClass(tag)}>
                        <div>
                            {['衣服','餐饮','住房','交通'].indexOf(tag)>=0?<Icon name={tag}/> : <Icon name='star'/>}

                        </div>
                    <span>{tag}</span>
                    </li>)
                }



                <li onClick={onAddTag}>
                    <div>
                        <Icon name='add'/>
                    </div>
                    <span>添加</span>
                </li>
            </ul>
        </Wrapper>
    )
}

export default TagSection