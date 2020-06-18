import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import x from "icons/chart.svg";
import y from "icons/money.svg";
import z from "icons/label.svg";

console.log(x);
console.log(y);
console.log(z);

const Navdiv=styled.nav`
  border:1px solid green;
  > ul{
    display:flex;
    > li{
      width:33.33333%;
      text-align: center;
      padding:16px;
    }
  }
`

function Nav(){
    return (
        <Navdiv>
            <ul>
                <li>
                    <Link to="/statistics">
                        <img src={x} alt=""/>
                        统计
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <img src={y} alt=""/>记一笔</Link>
                </li>
                <li>
                    <Link to="/tags"><img src={z} alt=""/>标签</Link>
                </li>

            </ul>
        </Navdiv>
    )
}
export default Nav