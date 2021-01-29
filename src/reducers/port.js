import { PORTS, PORTS_ERROR, PORTS_SUCCESS } from "actions"

const port = (state = {}, action) => {
    switch (action.type) {
        case PORTS:
            return { loading: true }
        case PORTS_SUCCESS:
        case PORTS_ERROR:
            return action.payload
        default:
            return state
    }
}

export default port