import axios from 'axios'

export const SearchActions = {
    CHANGE_SEARCHFIELD: 'CHANGE_SEARCHFIELD',
    SEND_SEARCHFIELD: 'SEND_SEARCHFIELD'
}

export const VersesActions = {
    REQUEST_PENDING: 'REQUEST_PEDING',
    REQUEST_SUCCESS: 'REQUEST_SUCCESS',
    REQUEST_FAILED: 'REQUEST_FAILED',
}

export const setSearchField = value => dispatch => {
    dispatch( { type: SearchActions.CHANGE_SEARCHFIELD, payload: value } )
    const throttleTimeInMsec = 1000
    setTimeout(() => {
        dispatch( { type: SearchActions.SEND_SEARCHFIELD } )
    }, throttleTimeInMsec)    
}

export const requestVerse = query => dispatch => {
    if (!query.match(/(\d?\s?[a-z]{2,20})\s+(\d{1,3}):(\d{1,3})-?(\d{1,3})?/i)) return

    dispatch({ type: VersesActions.REQUEST_PENDING })
    axios
        .get(`https://bible-verses-service.azurewebsites.net/verses/${query}`)
        .then(resp => resp.data)
        .then(payload => dispatch({ type: VersesActions.REQUEST_SUCCESS, payload }))
        .catch(err => dispatch({type: VersesActions.REQUEST_FAILED, payload: err}))
}