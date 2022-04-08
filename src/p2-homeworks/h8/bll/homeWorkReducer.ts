import {initialPeople, UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let copyState = [...state].sort((a: any, b: any) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            })
            return action.payload === 'up' ? copyState : copyState.reverse()
        }

        case 'check': {
            return state.filter(f=> f.age > action.payload)
        }
        default:
            return state
    }
}




type ActionType = {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: number}