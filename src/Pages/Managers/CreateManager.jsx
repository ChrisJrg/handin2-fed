
export function CreateManager(){
    return(
        <>
            <h1>Create Manager</h1>
            <section>
                <form>
                    <label>First Name</label>
                    <input placeholder={"First Name"}/>

                    <label>Last Name</label>
                    <input placeholder={"Last Name"}/>

                    <label>Email</label>
                    <input placeholder={"Email"}/>

                    <label>Password</label>
                    <input placeholder={"Password"}/>
                </form>
            </section>
        </>
    )
}

export default CreateManager
