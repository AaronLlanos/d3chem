import { SELECT_TOOL } from '../actions/paletteActions'

const initialState = {
  
}

export default (state = initialState, action) => {
  switch (action.type) {

  case SELECT_TOOL:
    return { ...state }

  default:
    return state
  }
}
