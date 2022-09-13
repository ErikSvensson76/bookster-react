
const ContactInfoInput = (props) => {

    return(
        <section>
            <h2>Kontaktuppgifter:</h2>
            <div>
                <input type="hidden" />
                <div>
                    <div>
                        <label>Epost</label>
                        <input type="text"></input>
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label>Telefon</label>
                        <input type="text"></input>
                    </div>
                    <ul></ul>
                </div>
            </div>
        </section>
    )
    
}

export default ContactInfoInput;