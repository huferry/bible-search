import React from 'react';
import SearchBar from './components/SearchBar'
import VerseViewer from './components/VerseViewer'
import { connect } from 'react-redux'
import { SearchActions, VersesActions, PopupActions, requestPopup, requestSubContent } from './actions'
import Background from './Background';
import './App.css';
import Scroll from './components/Scroll';
import Button from './components/Button'
import Popup from './components/Popup';
import HtmlFrame from './components/HtmlFrame'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchVerses.searchField,
    verses: state.verses.verses,
    query: state.verses.query,
    popupContent: state.popup.content,
    popupVisible: state.popup.visible,
    subContent: state.subContent,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: event => {
      dispatch({type: VersesActions.SET_QUERY, payload: event.target.value })
      dispatch({type: SearchActions.CHANGE_SEARCHFIELD, payload: event.target.value})      
    },
    onRequestPopup: (path) => dispatch(requestPopup(path)),
    onRequestClose: () => dispatch({type: PopupActions.CLOSE_POPUP}),
    onRequestSubContent: (path, item) => dispatch(requestSubContent(path, item))
  }
}

const App = ({
    onSearchChange, 
    searchField, 
    query, 
    verses, 
    subContent,
    onRequestPopup, 
    popupVisible, 
    popupContent, 
    onRequestClose,
    onRequestSubContent }) => {

  onRequestSubContent('why.html', 'why')
  onRequestSubContent('who.html', 'who')

  return (
    <div id="container">
      <div id="bg-section2">
        test
      </div>
      <div id="section1">
        <h1 className='title'>Bible Lookup</h1>
        <div>
          <div>/DEMO/</div>
          <div onClick={() => onRequestSubContent('why.html', 'why')}>/WHY/</div>
          <div>/WHO/</div>
          <div>/WHAT/</div>
        </div>
      </div>
      <div id="section2">
        <span>Welcome to</span> <span>Bible Lookup</span>
        <span id="section2-sub">A Demonstration of React/Redux Project</span>
      </div>
      <div id="section3">
        <h2>Demo</h2>
        <div id="demo-site">
          <SearchBar searchChange={onSearchChange} searchField={searchField}/>
          <Scroll id="viewer">
            <VerseViewer query={query} verses={verses}/>
          </Scroll>
        </div>
      </div>
      <div id="section4">
        <HtmlFrame content={subContent.why} />
      </div>
      <div id="section5">
        <HtmlFrame content={subContent.who} />
      </div>
      { /*
      <div id="main">
        <h1 className='title'>Bible Lookup</h1>
        <SearchBar searchChange={onSearchChange} searchField={searchField}/>
        <hr/>      
        <Scroll>
          <VerseViewer query={query} verses={verses}/>
        </Scroll>
      </div>
      <div id="footer">
        {
          buttons.map(b =>
            <Button 
              key={b}
              caption={b} 
              onClick={() => onRequestPopup(`${b}.html`)}              
            />
          )
        }
      </div>
      */
      }
      <Popup isVisible={popupVisible} requestClose={onRequestClose}>
        <div dangerouslySetInnerHTML={{
          __html: popupContent
        }}></div>
      </Popup>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
