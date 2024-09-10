export default function Header({data, setData}) {
    const totalCount = data.length;
    const likeCount = data.filter(i => i.status === "like").length;
    const dislikeCount = data.filter(i => i.status === "dislike").length;
    const withTextCount = data.filter(i => i.text).length;

    function addComment() {
        setData([{id: +new Date(), text: "", status: ""}, ...data])
    }

    return (
        <div className="Header">
            <div className="App-Name">APP-ATTRIBUTES</div>
            <button className="Big-Button" onClick={addComment}>Add new comment</button>
            <div>
                <div>(click on comment to edit it)</div>
                <div>Likes: {likeCount}, Dislikes: {dislikeCount}, Total: {totalCount}, Not empty: {withTextCount}</div>
            </div>
        </div>
    )
}