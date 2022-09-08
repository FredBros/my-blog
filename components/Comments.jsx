import {useState, useEffect} from 'react'
import {getComments} from '../services'
import dayjs from "dayjs";




function Comments({slug}) {

  const [comments, setComments] = useState([])


useEffect(() => {
  getComments(slug).then((result)=>{
    setComments(result)
  })
}, [])



  return (
    <section className="section-container">
      {comments.length > 0 ? (
        <div className="comments-container">
          <h3>Commentaires</h3>
          {comments.map((comment, index) => (
            <article key={index} className="comment-container">
              <div className="name">{comment.name}</div>
              <div className="date">
                le{" " + dayjs(comment.createdAt).format("DD/MM/YYYY")}
              </div>

              <div className="comment">{comment.comment}</div>
            </article>
          ))}
        </div>
      ) : (
        <h3>Pas encore de commentaires. Voulez-vous réagir ?</h3>
      )}

      <style jsx>{`
        .section-container {
          width: 90%;
          max-width: 850px;
          margin: 50px auto;
        }
        .comments-container {
          border: 2px solid var(--color5);
          padding: 10px;
        }
        .comment-container {
          background-color: var(--background2);
          padding: 10px;
          margin: 10px 0;
        }
        .date {
          font-size: var(--font-size-sm);
        }
        .name, .date{
          line-height: 1.3;
        }
        .comment {
          font-size: var(--font-size-base);
          padding-top: 5px;
        }
      `}</style>
    </section>
  );
}

export default Comments