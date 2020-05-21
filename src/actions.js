export const SearchActions = {
    CHANGE_SEARCHFIELD: 'CHANGE_SEARCHFIELD'
}

export const VersesActions = {
    SET_VERSES: 'SET_VERSES',
    SET_QUERY: 'SET_QUERY'
}

export const PopupActions = {
    REQUEST_POPUP_PENDING: 'REQUEST_POPUP_PENDING',
    REQUEST_POPUP_SUCCESS: 'REQUEST_POPUP_SUCCESS',
    REQUEST_POPUP_FAILED: 'REQUEST_POPUP_FAILED',
    CLOSE_POPUP: 'CLOSE_POPUP'
}

export const SubContentActions = {
    REQUEST_CONTENT_PENDING: 'REQUEST_CONTENT_PENDING',
    REQUEST_CONTENT_SUCCESS: 'REQUEST_CONTENT_SUCCESS',
    REQUEST_CONTENT_FAILED: 'REQUEST_CONTENT_FAILED',
}

export const requestPopup = (path) => (dispatch) => {
    dispatch({ type: PopupActions.REQUEST_POPUP_PENDING })
    fetch(`/${path}`)
        .then(response => response.text())
        .then(text => dispatch({ type: PopupActions.REQUEST_POPUP_SUCCESS, payload: text }))
        .catch(error => dispatch({ type: PopupActions.REQUEST_POPUP_FAILED, payload: error }))
}

export const requestSubContent = (path, item) => (dispatch) => {
    dispatch({ type: PopupActions.REQUEST_POPUP_PENDING })
    fetch(`/${path}`)
        .then(response => response.text())
        .then(content => dispatch({ type: SubContentActions.REQUEST_CONTENT_SUCCESS, payload: { item, content } }))
        .catch(error => dispatch({ type: PopupActions.REQUEST_POPUP_FAILED, payload: { item } }))
}

