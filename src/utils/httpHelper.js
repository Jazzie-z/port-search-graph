import { API_KEY } from "constants/environment"

export const HEADERS = {
    headers:{
        'X-Api-Key':API_KEY
    }
}
export const SUCCESS_RESPONSE = response => ({
    data: response,
    error: null,
})
export const ERROR_RESPONSE = response => ({
    data: null,
    error: response || {},
})