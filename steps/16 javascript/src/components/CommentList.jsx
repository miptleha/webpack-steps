import Comment from "./Comment";

export default function CommentList({data, setData}) {

    function onChange(n) {
        setData(data.map(i => i.id === n.id ? n : i));
    }

    function onDelete(id) {
        setData(data.filter(i => i.id !== id));
    }

    return (
        <div className="CommentList">
            {data.map(i => (<Comment key={i.id} item={i} onChange={onChange} onDelete={onDelete} />))}
       </div>
    )
}