/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Feed from './components/Feed';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: 'Jeff', curtidas: 10, comentarios: 2 },
        { id: 2, username: 'Jessy', curtidas: 25, comentarios: 12 },
        { id: 3, username: 'Silvia', curtidas: 13, comentarios: 9 },
        { id: 4, username: 'Sirius', curtidas: 1, comentarios: 0 },
      ]
    };


  }

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios} />
          );
        }
        )}

      </div>
    );
  }
}


export default App;