import { useReducer } from "react"
import UserInput from "./input/user/UserInput"
import Form from "../../layout/Form"

const USERNAME = "username"
const PASSWORD = "password"
const CONFIRM = "confirm"

const appUserReducer = (state, action) => {
    switch(action.type){
        case USERNAME:
            return {...state, username: action.payload}
        case PASSWORD:
            return {...state, password: action.payload}
        case CONFIRM:
            return {...state, confirm: action.payload}
        default: return state
    }
}

const AppUserForm = (props) => {

    const initialState = {
        id: null,
        username: "",
        password: "",
        confirm: ""
    }

    const [user, dispatch] = useReducer(appUserReducer, initialState);

    const handleUserNameChange = (e) => dispatch({
        type: USERNAME,
        payload: e.target.value
    })

    const handlePasswordChange = (e) => dispatch({
        type: PASSWORD,
        payload: e.target.value
    })

    const handleConfirmChange = (e) => dispatch({
        type: CONFIRM,
        payload: e.target.value
    })

    return(
        <Form>
            <UserInput 
                user = {user}
                onPasswordChange = {handlePasswordChange}
                onUsernameChange = {handleUserNameChange}
                onConfirmChange = {handleConfirmChange}
            />
            <button>Submit</button>
        </Form>
    )
}

export default AppUserForm;