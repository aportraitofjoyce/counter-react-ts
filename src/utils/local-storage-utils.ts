import {StateType} from '../store/store'

export const loadState = () => {
    try {
        const preloadedState = localStorage.getItem('state')
        return preloadedState === null ? undefined : JSON.parse(preloadedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: StateType) => {
    try {
        const loadedState = JSON.stringify(state)
        localStorage.setItem('state', loadedState)
    } catch {
    }
}