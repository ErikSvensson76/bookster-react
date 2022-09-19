import { useReducer } from "react"
import Form from "../../layout/Form"
import ContactInfoInput from "./input/contact/ContactInfoInput"

const EMAIL = "email"
const PHONE = "phone"

const contactInfoReducer = (state, action) => {
    switch(action.type){
        case EMAIL:
            return {
                ...state, email: action.payload
            }
        case PHONE:
            return {
                ...state, phone: action.payload
            }
        default: return state;
    }
}

const ContactInfoForm = (props) => {
    
    const initialState = {
        id: null,
        email: "",
        phone: ""
    }

    const [contactInfo, dispatch] = useReducer(contactInfoReducer, initialState);

    const handleEmailChange = (e) => dispatch({
        type: EMAIL,
        payload: e.target.value
    })
    

    const handlePhoneChange = (e) => dispatch({
        type: PHONE,
        payload: e.target.value
    })

    return (
        <Form>
            <ContactInfoInput 
                contactInfo = {contactInfo}
                onEmailChange = {handleEmailChange}
                onPhoneChange = {handlePhoneChange}
            />
            <button>Submit</button>
        </Form>
    )

}

export default ContactInfoForm