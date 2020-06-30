import React from 'react';
import {useParams,useHistory} from "react-router-dom";
import useTags from 'hooks/useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import Button from 'components/Button';
import styled from 'styled-components';
import Input from 'components/Input';
import Center from 'components/Center';

const Topbar=styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:12px 8px;
  background: rgb(140, 177, 253);
  color:white;
  .icon{
    width:24px;
    height:24px;
    fill:white;
  }
  div{
    width:24px;
    height:24px;
  }
`
const InputWrapper=styled.div`
  background:white;
  margin-top:12px;
  padding:0 16px;
  font-size:16px;
`
const Tag: React.FC=()=>{
    let {id}=useParams()
    const {findTag,editTag,deleteTag}=useTags()
    const tag=findTag(parseInt(id))
    const history=useHistory()
    const onClickBack=()=>{
        history.goBack()
    }
    return (
        <Layout>
            <Topbar>
                <Icon name='left' onClick={onClickBack}/>
                <span>编辑标签</span>
                <div></div>
            </Topbar>
            {tag?<div>
                    <InputWrapper>
                        <Input type='text' label='标签名' value={tag.name}
                               onChange={(e)=>{
                                   editTag(parseInt(id),e.target.value)
                               }}/>
                    </InputWrapper>
                    <Center>
                        <Button onClick={()=>{deleteTag(parseInt(id))}}>删除标签</Button>
                    </Center>
                </div>
            : <div>标签已删除</div>}

        </Layout>
    )
}
export default Tag