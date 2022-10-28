
import {DELETE_LINK, ADD_LINK} from './boilerplate.js'

export const deleteLink = (payload) => {
    return {
       type:DELETE_LINK,
       payload,
    }
};
export const addLink = (payload) => {
    return {
        type:ADD_LINK,
        payload,
    }
}