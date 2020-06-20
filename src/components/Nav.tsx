import {NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Navdiv=styled.nav`
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  background: white;
  > ul{
    display:flex;
    > li{
      width:33.33333%;
      text-align: center;
      padding:6px 16px;
      font-size:12px;
      > .link{
        display:flex;
        flex-direction: column;
        align-items: center;
        color:rgb(197, 197, 197);
        &.selected{
          color:rgb(140, 177, 253);
          > .icon{
            fill:rgb(140, 177, 253);
          }
        }
        > .icon{
          width:32px;
          height:32px;
          fill:rgb(197, 197, 197);
        }
      }
    }
  }
`

function Nav(){
    return (
        <Navdiv>
            <ul>
                <li>
                    <NavLink to="/statistics" className='link' activeClassName="selected">
                        <Icon name='chart'/>
                        <span>统计</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" className='link' activeClassName="selected">
                        <Icon name='money'/>
                        <span>记一笔</span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tags" className='link' activeClassName="selected">
                        <Icon name='label'/>
                        <span>标签</span>

                    </NavLink>
                </li>

            </ul>
        </Navdiv>
    )
}
export default Nav