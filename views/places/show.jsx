const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = sumRatings / data.place.comments.length
      rating = (
        <h3>
          {Math.round(averageRating)} stars
        </h3>
      )
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ' : 'Rave! '}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
      <Def>
        <main className="container">
          <h1>{data.place.name}</h1>
          <div className="row">
            <div>
              <p>
                <img src={data.place.pic} width="400" height="500" />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </p>
            </div>
            <div className="col-sm">
              <h3>Rating</h3>
              {rating}
            </div>
            <div className="col-sm">
              <h3>Description</h3>
              <h4>{data.place.showEstablished()}</h4>
              <h5>Serving {data.place.cuisines}</h5>
            </div>
            <div className="col-sm">
              <h3>Comments</h3>
              {comments}
            </div>

          <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
          <form>
          <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          </form>
        
            <h2>Got Your Own Rant or Rave?</h2>
            <form method="POST" action={`${data.place.id}/comment`}>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <input className="form-control" id="content" name="content" />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input className="form-control" id="auhtor" name="author" />
              </div>

              <div className="form-group">
                <label htmlFor="stars">Star Rating</label>
                <input type="number" className="form-control" id="stars" min= {0.5} max={5} name="stars" step={0.5} value={5}/>
              </div>

              <div className="form-group">
                <label htmlFor="rant">Rant?</label>
                <input id="rant" name="rant" type="checkbox" value={false}/>
              </div>
              
              <input className="btn btn-primary" type="submit" value="Add Comment" />
            </form>
          </div>
          
          
        </main>
      </Def>
    );
}

module.exports = show
