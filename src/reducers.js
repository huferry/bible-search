import { SearchActions, VersesActions } from './actions'

const initialStateSearch = {
    searchField: '',
    lastChanged: undefined
}

const initialStateVerses = {
    query: {},
    verses: []
}

export const now = () => (new Date()).valueOf()

export const searchVerses = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case SearchActions.CHANGE_SEARCHFIELD:
            return {...state, ...{ searchField: action.payload, lastChanged: now() } }
        case SearchActions.SEND_SEARCHFIELD: 
            const spanSinceLastChange = now() - state.lastChanged
            if (spanSinceLastChange >= 1000 && state.searchFunc) {
                state.searchFunc(state.searchField)
            }
            
            return state
        default:
            return state
    }
}

export const verses = (state=initialStateVerses, action={}) => {
    switch(action.type) {
        case VersesActions.REQUEST_PENDING:
            return state

        case VersesActions.REQUEST_SUCCESS:
            return { 
                ...state, 
                ...{ 
                    verses: action.payload.verses, 
                    query: action.payload.query 
                }
            }    

        default:
            return state;
    }
}
