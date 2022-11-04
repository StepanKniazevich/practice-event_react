import {
    MAX_LENGTH,
    MIN_LENGTH,
    INVALID_URL,
    NOT_UNIQUE,
    IS_EMPTY,
    ERROR_LENGTH
} from './typeErrors';

export const errorsMessages = (errors) => {
    let messages = {};
    for (let error in errors) 
        switch (error) {
            case NOT_UNIQUE:
                {
                    console.log(NOT_UNIQUE);
                    if (error) {
                        messages = {
                            ...messages,
                            [NOT_UNIQUE]: "Error , this link is not unique"
                        };
                    }
                }
            case MAX_LENGTH:
                {console.log(MAX_LENGTH);
                    if (error) {
                        messages = {
                            ...messages,
                            [NOT_UNIQUE]: "Error , this link`s name too long"
                        };
                    }
                }
            case MIN_LENGTH:
                {console.log(MIN_LENGTH);
                    if (error) {
                        messages = {
                            ...messages,
                            [NOT_UNIQUE]: "Error , this link`s name too short"
                        };
                    }
                }
        }
    
    return messages;
}