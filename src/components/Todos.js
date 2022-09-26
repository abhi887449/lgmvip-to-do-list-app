import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"

const Todos = (props) => {
    const { index, note, setNotes, notes } = props
    const [notest, setNotest] = useState(note)
    const handlecheckbox = () => {
        if (notest.ischecked === "true") {
            let newnote = notes
            console.log(index)
            const val = notes.at(index).currnotevalue
            newnote.splice(index, 1, { ischecked: "false", currnotevalue: val })
            setNotes(newnote)
            setNotest(newnote.at(index))
            localStorage.setItem("allnotes", JSON.stringify(newnote))
        }
        else {
            let newnote = notes
            const val = notes.at(index).currnotevalue
            newnote.splice(index, 1, { ischecked: "true", currnotevalue: val })
            setNotest(newnote.at(index))
            setNotes(newnote)
            localStorage.setItem("allnotes", JSON.stringify(newnote))
        }
    }
    const handledelete = () => {
        let newnote = notes
        newnote.splice(index, 1)
        setNotest(newnote.at(index))
        setNotes(newnote)
        setNotest("")
        localStorage.setItem("allnotes", JSON.stringify(newnote))
    }
    return (
        <div className={`flex flex-row mt-1 mb-1 ${(notest === "" ? "hidden" : "")}`}>
            <Link to="/lgmvip-to-do-list-app" onClick={handlecheckbox}>
                <span className={`material-symbols-outlined hover\:green-700 ml-3 ${(notest.ischecked === "false" ? "hidden" : "")} ${(notest === "" ? "hidden" : "")}`}>
                    done
                </span>
                <span className={`material-symbols-outlined hover\:green-700 ml-3 ${(notest.ischecked === "false" ? "" : "hidden")} ${(notest === "" ? "hidden" : "")}`}>
                    check_box_outline_blank
                </span>
            </Link>
            <p className={`ml-3 hover\:text-green-700 break-words ${(notest.ischecked === "true" ? "line-through" : "")} ${(notest === "" ? "hidden" : "")}`} >{notest.currnotevalue}</p>
            <Link to="/lgmvip-to-do-list-app" className={`material-symbols-outlined mr-1 hover\:text-red-700 ml-auto ${(notest === "" ? "hidden" : "")}`} onClick={handledelete}>
                delete
            </Link>
        </div>
    )
}

export default Todos
