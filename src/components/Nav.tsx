import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
require("icons/chart.svg");
require("icons/label.svg");
require("icons/money.svg");

const Navdiv=styled.nav`
  box-shadow:0 0 3px rgba(0,0,0,0.25);
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
        > .icon{
          width:32px;
          height:32px;
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
                    <Link to="/statistics" className='link'>
                        <svg className='icon'>
                            <use xlinkHref='#chart'/>
                        </svg>
                        <span>统计</span>
                    </Link>
                </li>
                <li>
                    <Link to="/money" className='link'>
                        <svg className='icon'>
                            <use xlinkHref='#money'/>
                        </svg>
                        <span>记一笔</span>

                    </Link>
                </li>
                <li>
                    <Link to="/tags" className='link'>
                        <svg className='icon'>
                            <use xlinkHref='#label'/>
                        </svg>
                        <span>标签</span>

                    </Link>
                </li>

            </ul>
        </Navdiv>
    )
}
export default Nav