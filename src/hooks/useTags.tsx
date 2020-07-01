import {useEffect, useState} from 'react';
import createId from 'lib/createId';
import useUpdate from './useUpdate';

function useTags(){
    const [tags,setTags]=useState<{id:number,name:string}[]>([])
    useEffect(()=>{
        let localTags=JSON.parse(window.localStorage.getItem('tags') || '[]')
        if(localTags.length===0){
            localTags=[{id:createId(),name:'衣服'},
                {id:createId(),name:'餐饮'},
                {id:createId(),name:'住房'},
                {id:createId(),name:'交通'},
                {id:createId(),name:'工资'}]
        }
        setTags(localTags)
    },[])
    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },tags)
    const findTag=(id: number)=>{
        return tags.filter(t=>t.id===id)[0]
    }
    const editTag=(id:number,newName:string)=>{
        setTags(tags.map(tag=>tag.id===id ? {id:id,name:newName} : tag))

    }
    const deleteTag=(id:number)=>{
        setTags(tags.filter(tag=>tag.id!==id))
    }
    const addTag=()=>{
        const tagname=window.prompt('你要添加的标签名是')
        if(tagname){
            setTags([...tags,{id:createId(),name:tagname}])
        }
    }
    const getName=(id:number)=>{
        const tag=tags.filter(tag=>tag.id===id)[0]
        return tag.name
    }
    return {tags,setTags,findTag,editTag,deleteTag,addTag,getName}
}
export default useTags