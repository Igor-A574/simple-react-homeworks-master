const initState = {
    isLoading: false
}
export type InitialStateType = typeof initState
export const loadingReducer = (state: InitialStateType = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {

            return {
                ...state,
                isLoading: action.load
            }
        }
        default: return state
    }
}

type ActionsType = ReturnType<typeof loadingAC>

export const loadingAC = (load: boolean) => ({type: 'LOADING', load}) as const // fix any