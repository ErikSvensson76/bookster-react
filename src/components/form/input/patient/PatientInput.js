
const PatientInput = (props) => {
    return(
        <section>
            <h2>Patientuppgifter:</h2>
            <div>
                <input type="hidden" />
                <div>
                    <div>
                        <label>Förnamn</label>
                        <input type="text" />                  
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label>Efternamn</label>
                        <input type="text" />                        
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label>Födelsedatum</label>
                        <input type="date" />                        
                    </div>
                    <ul></ul>
                </div>
                <div>
                    <div>
                        <label>Personnummer</label>
                        <input type="text" />                        
                    </div>
                    <ul></ul>
                </div>
            </div>            
        </section>
    )
}

export default PatientInput;