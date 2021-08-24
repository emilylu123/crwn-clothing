import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Link } from 'react-router-dom'

const TopicList = props => {
  console.log(props);
  return (
    <div>
      <h1>Topic List Page</h1>
      <Link to='/topics/12'>to detail 12</Link>
      <Link to='/topics/15'>to detail 15</Link>
      <Link to={`${props.match.url}/9`}>to detail 9</Link>
      <button onClick={() => props.history.push('/topics/10')}>Topics 10</button>
    </div>
  )
}

const TopicDetail = props => {
  console.log(props);
  return (
    <div>
      <Link to={`${props.history.goBack}`}>go back</Link>
      <h1> Topic Detail Page{props.match.params.topicId} </h1>
    </div >
  )
}
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
