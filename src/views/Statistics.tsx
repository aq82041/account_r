import Layout from '../components/Layout';
import React, {useState} from 'react';
import CategorySection from './money/CategorySection';
import useRecords, {TimedRecord} from '../hooks/useRecords';
import useTags from '../hooks/useTags';
import dayjs from 'dayjs';
import styled from 'styled-components';

const Item=styled.div`
  background: white;
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding:10px 16px;
  > .note{
    margin-right:auto;
    margin-left: 16px;
    color: #777;
   
  }
`
const Header=styled.div`
  font-size: 14px;
  padding:6px 12px;
  color:#999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`
function Statistics() {
    const [category,setCategory]=useState<'-' | '+'>('-')
    const {records}=useRecords()
    const {getName}=useTags()
    const selectedRecords=records.filter(r=>r.category===category)
    const hash: {[time: string]: TimedRecord[]}={}
    selectedRecords.forEach((r)=>{
        const time=dayjs(r.createdAt).format('M-D');
        if(time in hash){
            hash[time].push(r)
        }else{
            hash[time]=[r]
        }
    })
    const array=Object.entries(hash)
        .sort((a,b)=>dayjs(b[0]).valueOf()-dayjs(a[0]).valueOf())

    const getTotal=(arr: TimedRecord[])=>{
        let total=0
        for(let i=0;i<arr.length;i++){
            total+=parseFloat(arr[i].amount)
        }
        return total
    }
    return (
        <Layout>
            <CategorySection value={category}
                             onChange={c=>{setCategory(c)}}/>

            <div>
                {array.map(item=> <div>
                    <Header>
                        <div className="date">
                            {dayjs(item[0]).format('M月D日')}
                        </div>

                        {category==='-'?
                            <div className='total'>
                                支出：{getTotal(item[1])}
                            </div> :<div className='total'>
                        收入：{getTotal(item[1])}
                    </div>}

                    </Header>
                    {item[1].map(r=><Item key={r.createdAt}>
                        <div className="tag">
                            {r.tagsId.map(id=><span key={id}>{getName(id)}</span>)}
                        </div>
                        <div className="note">
                            {r.note}
                        </div>
                        <div className="amount">
                            ￥{r.amount}
                        </div>
                    </Item>)}

                </div>)}
            </div>

        </Layout>
    );
}
export default Statistics