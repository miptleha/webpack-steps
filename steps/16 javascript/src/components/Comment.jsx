import { useEffect } from "react";
import ToggleButton from "./ToggleButton";

export default function Comment({item, onChange, onDelete}) {
    const limit = 100; //height limit
    function onInput(e) {
        resize(e.target);
    }
    function resize(textarea) {
        textarea.style.height = "";
        textarea.style.height = Math.min(textarea.scrollHeight, limit) + "px";
    }

    useEffect(() => {
        let list = document.getElementsByClassName("Comment-Text");
        for (let i of list) {
            resize(i);
        }
    }, []);

    function textChange(e) {
        onChange({...item, text: e.target.value});
    }

    function statusChange(status) {
        onChange({...item, status});
    }

    function deleteItem() {
        onDelete(item.id);
    }

    return (
        <div className="Comment">
            <textarea className="Comment-Text" value={item.text} onChange={textChange} onInput={onInput} />
            <div className="Comment-Manage">
                <ToggleButton name="like" status={item.status} setStatus={statusChange}>👍</ToggleButton>
                <ToggleButton name="dislike" status={item.status} setStatus={statusChange}>👎</ToggleButton>
                <button className="Button" onClick={deleteItem}>❌</button>
            </div>
        </div>
    )
}