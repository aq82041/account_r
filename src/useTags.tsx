import {useState} from 'react';
import createId from 'lib/createId';

const defaultTags=[{id:createId(),name:'衣服'},
    {id:createId(),name:'餐饮'},
    {id:createId(),name:'住房'},
    {id:createId(),name:'交通'}]
function useTags(){
    const [tags,setTags]=useState<{id:number,name:string}[]>(defaultTags)
    const findTag=(id: number)=>{
        return tags.filter(t=>t.id===id)[0]
    }
    return {tags,setTags,findTag}
}
export default useTags