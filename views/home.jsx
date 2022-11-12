const React = require('react')
const Def = require('./default.jsx')

function home () {
    return (
      <Def>
        <main>
          <h1>HOME</h1>
          <div>
            <img src="/images/cool_img.jpg" alt="cool background"
                width = "400"
                height = "500" />
            <div>
            Photo by <a href="AUTHOR_LINK">Jon Tyson</a> on <a href="UNSPLASH_LINK">Unsplash</a>
            </div>
          </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
        </main>
      </Def>
    );
  }
  

module.exports = home
