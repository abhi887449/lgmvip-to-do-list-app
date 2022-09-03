import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Todos from './Todos'

const Home = () => {
    let noteinitial=[]
    const allNotes = localStorage.getItem("allnotes")
    if (allNotes === null) {
        noteinitial=[]
    }
    else{
        noteinitial=JSON.parse(allNotes)
    }
    const [notes, setNotes] = useState(noteinitial)
    const [currnote,setcurrNotes] = useState({ischecked:"false",currnotevalue:""})
    const handleadd = () => {
        if(currnote.currnotevalue===""){
            return
        }
        let newnotes = notes
        newnotes.push(currnote)
        console.log(newnotes)
        setNotes(newnotes)
        localStorage.setItem("allnotes", JSON.stringify(newnotes))
        setcurrNotes({ ...currnote, currnotevalue: "" })
    }
    const onChange = (e) => {
        setcurrNotes({ ...currnote, [e.target.name]: e.target.value })
    }
    return (
        <div className='flex justify-center content-center bg-black min-h-screen max-h-fit font-mono'>
            <div className="bg-gray-400 mt-20 rounded bg-opacity-30 h-fit w-350 border-gray-500 text-white">
                <div className="flex flex-col">
                    <h1 className="m-auto text-3xl mt-3 font-extrabold">To Do Lists</h1>
                    <input className='mt-4 p-3 h-11 w-300 m-auto block rounded-lg bg-gray-800' type="text" id="currnotevalue" name="currnotevalue" value={currnote.currnotevalue} onChange={onChange} placeholder='Type your here' />
                    <Link className='m-auto' to="/">
                    <button className="m-auto w-16 h-9 bg-yellow-800 text-white mt-2 mb-4 rounded text-md font-bold" onClick={handleadd}>Add</button>
                    </Link>
                </div>
                <div className="flex flex-col w-350">
                    {
                        notes.map((note,index) => {
                            return (
                                <Todos key={index} index={index} note={note} setNotes={setNotes} notes={notes}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
