import { ACTIONS } from "./App"

function OperationButton({ dispatch, operation }){
    return <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATIONS, payload: { operation }})}>{operation}</button>
}



export default OperationButton;