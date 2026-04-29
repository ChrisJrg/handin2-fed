import "../../Styles/Style.css"
import "../../Styles/CreateModel.css"

export function CreateModel(){


    return(
        <>
            <section>
            <form>
                <h2>Create Model</h2>

                <label id="input_title">Enter your email* <br/>
                    <input required="true" type="email" name="email" id="email" placeholder="Enter your email" />
                </label>

                <label id="input_title"> Enter your first name* <br/>
                    <input required="true" type="text" name="firstname" id="firstname" placeholder="Enter your first name" />
                </label>

                <label id="input_title"> Enter your last name* <br/>
                    <input required="true" type="text" name="lastname" id="lastname" placeholder="Enter your last name" />
                </label>

                <label id="input_title"> Enter your password* <br/>
                    <input required="true" type="password" name="password" id="password" placeholder="Enter your password" />
                </label>

                <label id="input_title"> Enter your first address* <br/>
                    <input required="true" type="text" name="firstaddress" id="firstaddress" placeholder="Enter your first address" />
                </label>

                <label id="input_title">Enter your second address <br/>
                    <input type="text" name="seconstaddress" id="seconstaddress" placeholder="Enter your second address" />
                </label>

                <label id="input_title"> Enter your birthdate* <br/>
                    <input required="true" type="date" name="birthdate" id="birthdate" placeholder="Enter your birthdate" />
                </label>

                <label id="input_title"> Enter your city* <br/>
                    <input required="true" type="text" name="city" id="city" placeholder="Enter your city" />
                </label>

                <label id="input_title"> Enter your country* <br/>
                    <input required="true" type="text" name="country" id="country" placeholder="Enter your country" />
                </label>

                <label id="input_title">Enter your eye color* <br/>
                    <input required="true" type="text" name="eyecolor" id="eyecolor" placeholder="Enter your eye color" />
                </label>

                <label id="input_title">Enter your hair color* <br/>
                    <input required="true" type="text" name="haircolor" id="haircolor" placeholder="Enter your hair color" />
                </label>

                <label id="input_title"> Enter any comments <br/>
                    <input type="textarea" name="comments" id="comments" placeholder="Enter your comments" />
                </label>

                <button type="submit" value="Submit">Submit</button>
            </form>
            </section>
        </>
    )
}

export default CreateModel;