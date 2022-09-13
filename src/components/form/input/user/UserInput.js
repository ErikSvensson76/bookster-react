
const UserInput = (props) => {
    return(
        <section>
            <h2>Användare:</h2>
            <div>
                <div>
                    <input type="hidden" />
                    <div>
                        <label>Användarnamn</label>
                        <input type="text" />
                    </div>
                    <ul></ul>                                
                </div>
                <div>
                    <div>
                        <label>Lösenord</label>
                        <input type="password" />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Bekräfta lösenord</label>
                        <input type="password" />
                    </div>
                </div>                
            </div>
        </section>        
    )
}

export default UserInput;