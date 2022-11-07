import {
    MAX_LENGTH,
    MIN_LENGTH,
    INVALID_URL,
    NOT_UNIQUE,
} from './typeErrors';

export const ErrorMessages = ({error}) => {
    switch (error) {
        case NOT_UNIQUE:
            {
                if (error) {
                    return <div>"Error , this item is not unique"</div>
                }

            }
        case MAX_LENGTH:
            {  
                if (error) {
                    return <div>"Error , this link`s name too long"</div>

                }
            }
        case MIN_LENGTH:
            {  
                if (error) {
                    return <div>"Error , this link`s name too short"</div>

                }
            }
        case INVALID_URL:
            {  
                if (error) {
                    return <div>"Error , this link is not valid"</div>                 
                }
            }
    }
}
