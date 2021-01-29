import { GRAPH, GRAPH_ERROR, GRAPH_SUCCESS } from "actions";
import axios from "axios";
import { ENV } from "constants/environment";
import { ERROR_RESPONSE, HEADERS, SUCCESS_RESPONSE } from "utils/httpHelper";
import { formatGraphData } from "utils/dateHelper";
export const getGraphData = (payload) => {
    return dispatch => {
        dispatch({ type: GRAPH })
        axios.get(appendQuery(payload), HEADERS)
            .then(res => {
                const payload = res.data
                if (payload?.length && payload.find(e => e.high || e.low || e.mean)) {
                    return dispatch({
                        type: GRAPH_SUCCESS,
                        payload: SUCCESS_RESPONSE(formatGraphData(res.data))
                    });
                }
                dispatch({
                    type: GRAPH_ERROR,
                    payload: ERROR_RESPONSE({ message: 'No Data Present' })
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

const appendQuery = ({ origin, destination }) => `${ENV.graph}?origin=${origin}&destination=${destination}` 