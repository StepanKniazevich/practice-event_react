import { MIN_LENGTH, MAX_LENGTH, IS_EMPTY,  INVALID_URL,ERROR_LENGTH } from './typeErrors';

export const validationsName = {
    [ERROR_LENGTH ]: {
        [MIN_LENGTH]: 3,
        [MAX_LENGTH]: 15
    },
    [IS_EMPTY]: true
}
export const validationsUrl = {
    [INVALID_URL]: /^(ftp|http|https):\/\/[^ "]+$/,
    [IS_EMPTY]: true

}