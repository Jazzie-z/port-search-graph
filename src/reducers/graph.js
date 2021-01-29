import { GRAPH, GRAPH_SUCCESS, GRAPH_ERROR } from "actions"

const graph = (state = {}, action) => {
    console.error(action)
    switch (action.type) {
        case GRAPH:
            return { loading: true }
        case GRAPH_SUCCESS:
        case GRAPH_ERROR:
            return action.payload
        default:
            return state
    }
}

export default graph