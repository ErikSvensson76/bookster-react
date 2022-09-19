import { useReducer } from "react"
import Form from "../../layout/Form"
import AddressInput from "../form/input/address/AddressInput"
import { addressReducer } from "./reducer/reducers"
import { setStreetAction, setZipCodeAction, setCityAction } from "./actions/actions"

const AddressForm = (props) => {

    const initialState = {
        id: null,
        city: "",
        street: "",
        zipCode: "" 
    }

    const [address, dispatch] = useReducer(addressReducer, initialState)


    const handleStreetChange = (e) => dispatch(setStreetAction(e.target.value))

    const handleZipCodeChance = (e) => dispatch(setZipCodeAction(e.target.value))

    const handleCityChange = (e) => dispatch(setCityAction(e.target.value))

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