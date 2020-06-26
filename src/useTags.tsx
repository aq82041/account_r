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
    const findTagIndex=(id: number)=>{
        for(let i=0;i<tags.length;i++){
            if(tags[i].id===id){
                return i
            }
        }
        return -1
    }
    const editTag=(id:number,newName:string)=>{
        const index=findTagIndex(id)
        const tagsClone=JSON.parse(JSON.stringify(tags))
        tagsClone.splice(index,1,{id:id,name:newName})
        setTags(tagsClone)

    }
    const deleteTag=(id:number)=>{
        const index=findTagIndex(id)
        const tagsClone=JSON.parse(JSON.stringify(tags))
        tagsClone.splice(index,1)
        setTags(tagsClone)
    }
    return {tags,setTags,findTag,editTag,deleteTag}
}
export default useTags