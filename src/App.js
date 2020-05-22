import React from 'react';
import SearchBar from './components/SearchBar'
import VerseViewer from './components/VerseViewer'
import { connect } from 'react-redux'
import { setSearchField, requestVerse } from './actions'
import './App.css';
import Scroll from './components/Scroll';
import HtmlFrame from './components/HtmlFrame'
import SubContentTexts from './SubContentTexts'
import BackButton from './components/BackButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import links from './links'

library.add(fab)

const mapStateToProps = (state) => {
  return {
    searchField: state.searchVerses.searchField,
    query: state.verses.query,
    verses: state.verses.verses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: event => {
      dispatch(setSearchField(event.target.value))
      dispatch(requestVerse(event.target.value))
    }
  }
}

const App = ({
    onSearchChange, 
    searchField, 
    query, 
    verses
   }) => {

  return (
    <div id="container">
      <div id="bg-section2"></div>
      <div id="section1">
        <h1 className='title'>Bible Lookup</h1>
        <div>
          <a href="#section3">/DEMO/</a>
          <a href="#section4">/WHY/</a>
          <a href="#section5">/WHO/</a>
          <a href="#section6">/WHAT/</a>
        </div>
      </div>
      <div id="section2">
        <span>Welcome to</span> <span>Bible Lookup</span>
        <span id="section2-sub">A Demonstration of React/Redux Project</span>
      </div>
      <div id="section3">
        <h2>Demo</h2>
        <div id="demo-site">
          <SearchBar searchChange={onSearchChange} searchField={searchField} />
          <Scroll id="viewer">
            <VerseViewer query={query} verses={verses} />
          </Scroll>
        </div>
        <BackButton/>
      </div>
      <div id="section4">
        <HtmlFrame content={SubContentTexts.why} />
        <BackButton/>
      </div>
      <div id="section5">
        <HtmlFrame content={SubContentTexts.who} />
        <BackButton/>
      </div>
      <div id="section6">
        <HtmlFrame content={SubContentTexts.what} />
        <BackButton/>
      </div>
      <div id="section7">
        {
          links.map((item, idx) => {
            return (<div key={idx}>
              <FontAwesomeIcon icon={item.icon} />
              <a href={item.url} > {item.text}</a>
            </div>)
          })
        }
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
