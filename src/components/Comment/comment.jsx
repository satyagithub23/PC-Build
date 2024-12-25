import './comment.css'

const Comment = () => {
  return (
    <div className="textarea-container">
        <h1>Leave Your Feedback</h1>
        <textarea className="comment" placeholder="Write something...."></textarea>
        <button className="comment-btn">Comment</button>
    </div>
  )
}

export default Comment