import {useState} from 'react';

function useTags(){
    const [tags,setTags]=useState<string[]>(['衣服','餐饮','住房','交通'])
    return {tags,setTags}
}
export default useTags