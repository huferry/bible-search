import { SearchActions, VersesActions, PopupActions, SubContentActions } from './actions'
import BibleService from './services/bibleService'

const initialStateSearch = {
    searchField: ''
}

const initialStateVerses = {
    query: {},
    verses: []
}

export const searchVerses = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case SearchActions.CHANGE_SEARCHFIELD:
            return {...state, ...{ searchField: action.payload } }
        default:
            return state
    }
}

export const verses = (state=initialStateVerses, action={}) => {
    switch(action.type) {
        case VersesActions.SET_VERSES:
            return {...state, ...{ verses: action.payload }}
        case VersesActions.SET_QUERY:
            const queries = BibleService.parse(action.payload)
            if (queries && queries.length > 0) {
                const query = queries[0]
                const verses = BibleService.query(query)
                
                return {...state, ...{query, verses}}


            }
            return {...state, ...{query: undefined}}
        default:
            return state;
    }
}

const initialPopupState = {
    isVisible: false,
    content: ''
}

export const popup = (state=initialPopupState, action = {}) => {
    switch(action.type) {
        case PopupActions.REQUEST_POPUP_PENDING:
            return {
                content: '',
                visible: false
            }
        case PopupActions.REQUEST_POPUP_SUCCESS:
            return {
                content: action.payload,
                visible: true
            }
        case PopupActions.CLOSE_POPUP:
            return {
                content: '',
                visible: false
            }
        default:
            return state;
    }
}

const initialStateSubContent = {
    why: '',
    who: '',
    what: ''
}

export const subContent = (state = initialStateSubContent, action = {}) => {

    const getNewState = (content) => {
        const newState = {...state}
        newState[action.payload.item] = content
        return newState
    }

    switch(action.type) {
        case SubContentActions.REQUEST_CONTENT_PENDING:
            return getNewState('')

        case SubContentActions.REQUEST_CONTENT_SUCCESS:
            return getNewState(action.payload.content)

        case SubContentActions.REQUEST_CONTENT_FAILED:
            return getNewState('')

        default:
            return state;
    }
}

