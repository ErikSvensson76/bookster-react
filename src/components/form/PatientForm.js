import { useReducer } from "react";
import Form from "../../layout/Form";
import PatientInput from "./input/patient/PatientInput";
import UserInput from "./input/user/UserInput"
import ContactInfoInput from "./input/contact/ContactInfoInput"
import AddressInput from "./input/address/AddressInput"

const BIRTH_DATE = "birthDate"
const FIRST_NAME = "firstName"
const LAST_NAME = "lastName"
const PNR = "pnr"
const USERNAME = "username"
const PASSWORD = "password"
const CONFIRM = "confirm"
const EMAIL = "email"
const PHONE = "phone"
const CITY = "city"
const ZIP_CODE = "zipCode"
const STREET = "street"

const patientReducer = (state, action) =>{
    switch(action.type){
        case BIRTH_DATE:
            return {...state, birthDate: action.payload}
        case FIRST_NAME:
            return {...state, firstName: action.payload}
        case LAST_NAME:
            return {...state, lastName: action.payload}
        case PNR:
            return {...state, pnr: action.payload}
        case USERNAME:
            return {
                ...state,
                appUser: {
                    ...state.appUser, username: action.payload
                }
            }
        case PASSWORD:
            return {
                ...state,
                appUser: {
                    ...state.appUser, password: action.payload
                }
            }
        case CONFIRM:
            return {
                ...state,
                appUser: {
                    ...state.appUser, confirm: action.payload
                }
            }
        case EMAIL:
            return{
                ...state,
                contactInfo: {
                    ...state.contactInfo, email: action.payload
                }
            }
        case PHONE:
            return {
                ...state,
                contactInfo: {
                    ...state.contactInfo, phone: action.payload
                }
            }
        case CITY:
            return {
                ...state,
                contactInfo: {
                    ...state.contactInfo,
                    address: {
                        ...state.contactInfo.address, city: action.payload
                    }
                }
            }
        case ZIP_CODE:
            return {
                ...state,
                contactInfo: {
                    ...state.contactInfo,
                    address: {
                        ...state.contactInfo.address, zipCode: action.payload
                    }
                }
            }
        case STREET:
            return {
                ...state,
                contactInfo: {
                    ...state.contactInfo,
                    address: {
                        ...state.contactInfo.address, street: action.payload
                    }
                }
            }
        default: return state
    }
}

const PatientForm = (props) => {
    const initialState = {
        id: null,
        birthDate: "",
        firstName: "",
        lastName: "",
        pnr: "",
        appUser: {
            id: null,
            username: "",
            password: "",
            confirm: ""
        },
        contactInfo: {
            id: null,
            email: "",
            phone: "",
            address: {
                id: null,
                city: "",
                street: "",
                zipCode: ""
            }
        }
    }

    const [patient, dispatch] = useReducer(patientReducer, initialState);

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

    const handleBirthDateChange = (e) => dispatch({
        type: BIRTH_DATE,
        payload: e.target.value
    })

    const handleFirstNameChange = (e) => dispatch({
        type: FIRST_NAME,
        payload: e.target.value
    })

    const handleLastNameChange = (e) => dispatch({
        type: LAST_NAME,
        payload: e.target.value
    })

    const handlePnrChange = (e) => dispatch({
        type: PNR,
        payload: e.target.value
    })

    const handleEmailChange = (e) => dispatch({
        type: EMAIL,
        payload: e.target.value
    })
    

    const handlePhoneChange = (e) => dispatch({
        type: PHONE,
        payload: e.target.value
    })

    const handleStreetChange = (e) => {
        dispatch({
            type: STREET,
            payload: e.target.value
        })        
    }

    const handleZipCodeChance = (e) => {
        dispatch({
            type: ZIP_CODE,
            payload: e.target.value
        })        
    }

    const handleCityChange = (e) => {
        dispatch({
            type: CITY,
            payload: e.target.value
        })        
    }

    return (
        <Form>
            <UserInput 
                user = {patient.appUser} 
                onUsernameChange={handleUserNameChange}
                onPasswordChange={handlePasswordChange}
                onConfirmChange={handleConfirmChange}
            />
            <PatientInput 
                patient = {patient}
                onBirthDateChange={handleBirthDateChange}
                onFirstNameChange={handleFirstNameChange}
                onLastNameChange={handleLastNameChange}
                onPnrChange={handlePnrChange}                
            />
            <ContactInfoInput
                contactInfo = {patient.contactInfo}
                onEmailChange = {handleEmailChange}
                onPhoneChange = {handlePhoneChange}
            />
            <AddressInput 
                address = {patient.contactInfo.address}
                onStreetChange = {handleStreetChange}
                onZipCodeChange = {handleZipCodeChance}
                onCityChange = {handleCityChange}
            />
            <button>Submit</button>
        </Form>
    )

}

export default PatientForm;