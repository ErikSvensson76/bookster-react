import { useReducer } from "react"
import Form from "../../layout/Form"
import AddressInput from "../form/input/address/AddressInput"

const STREET_ADDRESS = 'streetAddress'
const ZIP_CODE = 'zipCode'
const CITY = 'city'

/**
 * 
 * @param {address} state 
 * @param {action{type, payload}} action 
 * @returns 
 */
const addressReducer = (state, action) => {
    
    switch(action.type){
        case STREET_ADDRESS:
            return {
                ...state,
                street: action.payload  
            }
        case ZIP_CODE:
            return {
                ...state, 
                zipCode: action.payload
            }
        case CITY:{
            return {
                ...state,
                city: action.payload
            }
        }
        default: return state        
    }
}

const AddressForm = (props) => {

    const initialState = {
        id: null,
        city: "",
        street: "",
        zipCode: "" 
    }

    const [address, dispatch] = useReducer(addressReducer, initialState)


    const handleStreetChange = (e) => {
        dispatch({
            type: STREET_ADDRESS,
            payload: e.target.value
        })
        console.log(address)
    }

    const handleZipCodeChance = (e) => {
        dispatch({
            type: ZIP_CODE,
            payload: e.target.value
        })
        console.log(address)
    }

    const handleCityChange = (e) => {
        dispatch({
            type: CITY,
            payload: e.target.value
        })
        console.log(address)
    }

    return(
        <Form>
            <AddressInput 
                address = {address}
                onStreetChange = {handleStreetChange}
                onZipCodeChange = {handleZipCodeChance}
                onCityChange = {handleCityChange}
            />
            <button>Submit</button>
        </Form>
    )
}

export default AddressForm;