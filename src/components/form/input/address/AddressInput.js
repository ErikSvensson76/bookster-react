
const AddressInput = (props) => {
    return(
        <section>
            <h2>Adress</h2>
            <div>
                <input type="hidden" />
                <div>
                    <div>
                        <label>Gatuadress</label>
                        <input type="text" />
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label>Postnummer</label>
                        <input type="text" />
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label>Stad</label>
                        <input type="text" />
                    </div>
                    <ul></ul>
                </div>               
            </div>
        </section>
    )
}