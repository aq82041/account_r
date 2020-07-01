import styled from 'styled-components';
import Icon from 'components/Icon';
import React from 'react';
import useTags from 'hooks/useTags';

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

type Props={
    value: number[],
    onChange:(tagsId:number[])=>void
}
const TagSection : React.FC <Props> =(props)=>{
    const {tags,addTag}=useTags()
    const selectedTagsId=props.value

    const onToggleTag=(tagId: number)=>{
        if(selectedTagsId.indexOf(tagId)>=0){
            props.onChange(selectedTagsId.filter(t=>t!==tagId))

        }else{
            props.onChange([...selectedTagsId,tagId])
        }
    }
    const getClass=(tagId: number)=>{
        return selectedTagsId.indexOf(tagId)>=0?'selected':''
    }

    return (
        <Wrapper>

            <ul>
                {tags.map(tag=>
                    <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}} className={getClass(tag.id)}>
                        <div>
                            {['衣服','餐饮','住房','交通','工资'].indexOf(tag.name)>=0?<Icon name={tag.name}/> : <Icon name='star'/>}

                        </div>
                    <span>{tag.name}</span>
                    </li>)
                }

                <li onClick={addTag}>
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