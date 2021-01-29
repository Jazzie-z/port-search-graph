import { GRAPH, GRAPH_ERROR, GRAPH_SUCCESS } from "actions";
import axios from "axios";
import { ENV } from "constants/environment";
import { ERROR_RESPONSE, HEADERS, SUCCESS_RESPONSE } from "utils/httpHelper";

export const getGraphData = () => {
    return dispatch => {
        dispatch({ type: GRAPH })
        axios.get(ENV.graph, HEADERS)
            .then(res => {
                return dispatch({
                    type: GRAPH_SUCCESS,
                    payload: SUCCESS_RESPONSE(res.data)
                });
            })
            .catch(err => {
                console.error(err)
                dispatch({
                    type: GRAPH_ERROR,
                    payload: ERROR_RESPONSE(err.response)
                })
            })
    };
}