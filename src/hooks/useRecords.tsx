import {useEffect, useState} from 'react';
import useUpdate from './useUpdate';

export type TimedRecord={
    category: '-' | '+',
    tagsId: number[],
    note: string,
    amount: string,
    createdAt: string
}
type RecordItem=Omit<TimedRecord,'createdAt'>
const useRecords=()=>{
    const [records,setRecords]=useState<TimedRecord[]>([])
    const addRecord=(record: RecordItem)=>{
        const timedRecord={...record,createdAt:new Date().toISOString()}
        setRecords([
            ...records,
            timedRecord
        ])
    }
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
        }
    ,[])
    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },records)
    return {records,addRecord}
}

export default useRecords