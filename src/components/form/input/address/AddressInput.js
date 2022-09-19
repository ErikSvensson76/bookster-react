
const AddressInput = (props) => {    

    return(
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
    )
}

export default AddressInput