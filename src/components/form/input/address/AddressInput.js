import FormItem from "../../../../layout/FormItem"
import InputGroup from "../../../../layout/InputGroup"

const AddressInput = (props) => {    

    return(
        <>
            
            <FormItem>
                <InputGroup 
                    id="street"
                    label="Gatuadress ex. Storgatan 1"
                    type="text"
                    value={props.address.street}
                    onChange={props.onStreetChange}

                />                
            </FormItem>
            <FormItem>            
                <InputGroup
                    id="zipCode"
                    label="Postnummer ex. (352 63)"
                    type="text"
                    value={props.address.zipCode}
                    onChange={props.onZipCodeChange} 
                 />                
                
                <InputGroup 
                    id="city"
                    label="Stad"
                    type="text"
                    value={props.address.city}
                    onChange={props.onCityChange}
                />                
            </FormItem>            
        </>
        
        /*
        <section>
            <h2>Adress:</h2>
            <div>
                <input className="id" type="hidden" />
                <div>
                    <div>
                        <label htmlFor="street">Gatuadress</label>                        
                        <input id="street" type="text" value={props.address.street} onChange={(e) => props.onStreetChange(e)} />                        
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label htmlFor="zipCode">Postnummer</label>
                        <input id="zipCode" type="text" value={props.address.zipCode} onChange={(e) => props.onZipCodeChange(e)}/>
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label htmlFor="city">Stad</label>
                        <input id="city" type="text" value={props.address.city} onChange={(e) => props.onCityChange(e)} />
                    </div>
                    <ul></ul>
                </div>               
            </div>
        </section>
        */
    )
}

export default AddressInput