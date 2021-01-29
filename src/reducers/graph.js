import { GRAPH, GRAPH_SUCCESS, GRAPH_ERROR, GRAPH_FILTER, DATE_FILTER } from "actions"

const graph = (state = {}, action) => {
    switch (action.type) {
        case GRAPH:
            return { ...state, loading: true }
        case GRAPH_SUCCESS:
        case GRAPH_ERROR:
            return { ...state, loading: false, ...action.payload }
        case DATE_FILTER:
            return { ...state, dateRange: action.payload }
        case GRAPH_FILTER:
            return { ...state, filter: action.payload }
        default:
            return state
    }
}

export default graph