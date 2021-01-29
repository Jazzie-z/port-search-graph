import { PORTS, PORTS_ERROR, PORTS_SUCCESS } from "actions";
import axios from "axios";
import { ENV } from "constants/environment";
import { ERROR_RESPONSE, HEADERS, SUCCESS_RESPONSE } from "utils/httpHelper";

export const getPorts = () => {
    return dispatch => {
        dispatch({ type: PORTS })
        axios.get(ENV.ports, HEADERS)
            .then(res => {
                dispatch({
                    type: PORTS_SUCCESS,
                    payload: SUCCESS_RESPONSE(res.data)
                });
            })
            .catch(err => {
                dispatch({
                    type: PORTS_ERROR,
                    payload: ERROR_RESPONSE(err.response)
                })
            })
    };
}