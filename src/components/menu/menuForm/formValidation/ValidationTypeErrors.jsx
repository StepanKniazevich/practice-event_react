import {MAX_LENGTH, MIN_LENGTH, INVALID_URL, IS_EMPTY } from '../typeErrors';

export const useValidTypeErrors = (
    {isEmpty, isDirty, minLength, maxLength, invalidUrl}
) => ({
    [IS_EMPTY]: (isEmpty && isDirty),
    [MIN_LENGTH]: (minLength && isDirty),
    [MAX_LENGTH]: (maxLength && isDirty),
    [INVALID_URL]: (invalidUrl && isDirty)
})
