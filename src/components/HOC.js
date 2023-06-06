import React, { Suspense, useState, } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataSource from './services/DataSource';

class Cats extends React.Component {
  render() {
    return (
      <div>
        <h3>Cat Facts</h3>{
          this.props.data.length > 0 &&
          <p>{this.props.data.fact}</p>
        }
      </div>
    )
  }
}

function ApiList(props) {
  let result = [];
  let rows = Array.from(props.data);
  let searchT = props.search;
  rows.forEach(row => {
    if (!String(row.API).toLowerCase().startsWith(String(searchT).toLowerCase())) {
      return;
    }
    result.push(
      <tr key={row.Link}>
        <td>{row.API}</td>
        <td>{row.Category}</td>
        <td>{row.Description}</td>
        <td>{row.HTTPS.toString()}</td>
      </tr>
    )
  });
  return (
    <div>
      {rows.length > 0 &&
        <table id="customers">
          <thead>
            <tr><td colSpan={4}>Count:{result.length}</td></tr>
            <tr >
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>HTTPS</th>
            </tr>
          </thead>
          <tbody>
            {result}
          </tbody>
        </table>
      }
    </div>
  );
}

function ApisSearch(props) {
  function onSearchChange(event) {
    props.searchChanged(event.target.value)
  }
  return (
    <div className='box'>
      <input className="input" name="txt" placeholder="Search API Name..." onChange={(e) => onSearchChange(e)} value={props.value}></input>
    </div>
  )
}

class Apis extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onSearchChange(val) {
    this.setState({ searchText: val })
  }
  render() {
    return (
      <div>
        <h3>List of API's</h3>
        <ApisSearch value={this.state.searchText} searchChanged={this.onSearchChange}></ApisSearch>
        <ApiList data={this.props.data.entries} search={this.state.searchText} count={this.props.data.count}></ApiList>
      </div>
    )
  }
}

const CatsWithSubscription = higherOrderFunction(
  Cats,
  () => DataSource.getCatFacts(),
  4000
)
const ApisWithSubscription = higherOrderFunction(
  Apis,
  () => DataSource.getAPis()
)

function higherOrderFunction(WrappedComponent, getData, timeInterval) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
    componentDidMount() {
      if (timeInterval) {
        this.intervalId = setInterval(() => getData().then(res => {
          this.setState({ data: res })
        }), timeInterval);
      } else {
        getData().then(res => {
          this.setState({ data: res })
        })
      }
    }
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  }
}





class App extends React.Component {
  render() {
    return (
      <div className='content'>
        <h2 style={{ textAlign: "center" }}>React App</h2>
        <CatsWithSubscription test="test"></CatsWithSubscription>
        <ApisWithSubscription test="test2"></ApisWithSubscription>
      </div>
    )
  }
}


const element = < App />;
ReactDOM.render(element, document.getElementById("root"))