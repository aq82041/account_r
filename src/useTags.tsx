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

    const editTag=(id:number,newName:string)=>{
        setTags(tags.map(tag=>tag.id===id ? {id:id,name:newName} : tag))

    }
    const deleteTag=(id:number)=>{
        setTags(tags.filter(tag=>tag.id!==id))
    }
    return {tags,setTags,findTag,editTag,deleteTag}
}
export default useTags