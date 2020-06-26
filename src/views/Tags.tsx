import Layout from '../components/Layout';
import React from 'react';
import useTags from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import Center from '../components/Center';

const TagList=styled.ul`
  background:white;
  font-size:16px;
  > li{
    border-bottom: 1px solid #d5d5d9;   
    margin-left:10px;
    > a{
      padding:12px 16px 12px 0;
      display:flex;
      justify-content: space-between;
      align-items: center;  
      > .icon{
      width:24px;
      height:24px;
      fill:rgb(140, 177, 253);
      }
    }
  }
`

function Tags() {
    const {tags}=useTags()
    return (
        <Layout>
            <TagList>
            {tags.map(t=>
                <li key={t.id}>
                    <Link to={'/tags/'+t.id}>
                        <span className='oneLine'>{t.name} {t.id}</span>
                        <Icon name='right'/>
                    </Link>
                </li>
            )}

            </TagList>
            <Center>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}
export default Tags