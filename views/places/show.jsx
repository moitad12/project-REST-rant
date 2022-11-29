const React = require('react')
const Def = require('../default')

function show (data) {
    return (
      <Def>
        <main className="container">
          <h1>{data.place.name}</h1>
          <div className="row">
            <div>
              <p>
                <img src={data.place.pic} width="400" height="500" />
                <h3>Located in {data.place.city}, {data.place.state}</h3>
              </p>
            </div>
            <div className="col-sm">
              <h3>Rating</h3>
              <p>Not Rated</p>
            </div>
            <div className="col-sm">
              <h3>Description</h3>
              <h4>
                {data.place.showEstablished()}
              </h4>
              <h5>
                Serving {data.place.cuisines}
              </h5>
            </div>
            <div className="col-sm">
              <h3>Comments</h3>
              <p>No comments yet!</p>
            </div>
          </div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </main>
      </Def>
    );
}

module.exports = show
