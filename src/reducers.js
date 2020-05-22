import { SearchActions, VersesActions } from './actions'
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
