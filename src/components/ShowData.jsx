import React, { useState } from 'react'
import { useStore } from '../store'

export default function ShowData() {
    const data = useStore(state => state.data)
    const [newname, setnewname] = useState("");
    const handelclick = () => {
        useStore.getState().setname(newname);
    }

    return (
        <>
            <div>{data.name}</div>
            <label htmlFor='name'></label>
            <input type="text" name='name' value={newname} onChange={(e) => setnewname(e.target.value)} />
            <button onClick={handelclick}>click</button>
        </>
    )
}
