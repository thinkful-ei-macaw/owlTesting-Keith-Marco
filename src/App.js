import React, { Component } from 'react';
import List from './list'
//import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      participants: [],
      chatEvents: {},
    }
  };

  render() {
    const { store } = this.props
    console.log(store);
    return (
      <main className='App'>
                      <header className='App-header'>
                          <h1>OWL!</h1>
                      </header>
                  
                      <div className='App-list'>
                        {store.participants.map(person => (
                                  <div>
                                      {person.name} 
                                  </div>
                                                    
                      <div className="Placeholder">
                        <img src={person.avatar} alt="avatar" />
                        <h3>{person.name}</h3>
                        <div className="Dot">{dot}</div>
                        <div className="words">{words}</div>
                      </div>
                        )}
                    </div>
                    
      </main>

                        
                        
  }
                      
  }


export default App;