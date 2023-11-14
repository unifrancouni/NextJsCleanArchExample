import { Dispatch } from 'react'

export type ReactState<T> = [T, React.Dispatch<React.SetStateAction<T>>]

const getState = ([state, setState]: ReactState<any>): any => {
    return state
}

const getSetter = ([state, setState]: ReactState<any>): Dispatch<any> => {
    return setState
}

export { getState, getSetter }
