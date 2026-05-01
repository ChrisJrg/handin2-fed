import "../../Styles/Style.css"
import "../../Styles/CreateModel.css"
import {useState} from "react";



export function CreateModel(){
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [nationality, setNationality] = useState('');
    const [height, setHeight] = useState('');
    const [eyeColor, setEyeColor] = useState('');
    const [hairColor, setHairColor] = useState('');
    const [shoeSize, setShoeSize] = useState('');
    const [comments, setComments] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        };

        let url = "http://localhost:8080/api/Models";
        try{
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    password,
                    firstName,
                    lastName,
                    email,
                    phoneNo,
                    addressLine1,
                    addressLine2,
                    zip,
                    city,
                    country,
                    birthDate: new Date(birthDate).toISOString(),
                    nationality,
                    height,
                    shoeSize,
                    hairColor,
                    eyeColor,
                    comments
                }),
                credentials: "include",
                headers,
            });
            if(response.ok){
                alert('New Model was successfully created!');
            }else{
                const errorBody = await response.json();
                console.log(errorBody);
                alert("Error: " + JSON.stringify(errorBody));

            }
        }
        catch(err){
            alert('error: ' + err)
        }
    }


    return(
        <>
            <section>
            <form onSubmit={handleSubmit}>
                <h2>Create Model</h2>

                <label id="input_title">Enter your email* <br/>
                    <input required={true} type="email" name="email" id="email" placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)}/>
                </label>

                <label id="input_title"> Enter your first name* <br/>
                    <input required={true} type="text" name="firstname" id="firstname" placeholder="Enter your first name" onChange={(event) => setFirstName(event.target.value)}/>
                </label>

                <label id="input_title"> Enter your last name* <br/>
                    <input required={true} type="text" name="lastname" id="lastname" placeholder="Enter your last name" onChange={(event) => setLastName(event.target.value)} />
                </label>

                <label id="input_title"> Enter your password* <br/>
                    <input required={true} type="password" name="password" id="password" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)}/>
                </label>

                <label id="input_title"> Enter your phone number* <br/>
                    <input required={true} type="text" name="phonenumber" id="phonenumber" placeholder="Enter your phonenumber" onChange={(event) => setPhoneNo(event.target.value)}/>
                </label>

                <label id="input_title"> Enter your first address* <br/>
                    <input required={true} type="text" name="firstaddress" id="firstaddress" placeholder="Enter your first address" onChange={(event) => setAddressLine1(event.target.value)}/>
                </label>

                <label id="input_title">Enter your second address* <br/>
                    <input required={true} type="text" name="seconstaddress" id="seconstaddress" placeholder="Enter your second address" onChange={(event) => setAddressLine2(event.target.value)}/>
                </label>

                <label id="input_title">Enter your zip code* <br/>
                    <input required={true} type="text" name="zipcode" id="zipcode" placeholder="Enter your zip code" onChange={(event) => setZip(event.target.value)}/>
                </label>



                <label id="input_title"> Enter your nationality* <br/>
                    <input required={true} type="text" name="nationality" id="nationality" placeholder="Enter your nationality" onChange={(event) => setNationality(event.target.value)}/>
                </label>

                <label id="input_title"> Enter your city* <br/>
                    <input required={true} type="text" name="city" id="city" placeholder="Enter your city" onChange={(event) => setCity(event.target.value)}/>
                </label>

                <label id="input_title"> Enter your country* <br/>
                    <input required={true} type="text" name="country" id="country" placeholder="Enter your country" onChange={(event) => setCountry(event.target.value)}/>
                </label>

                <label id="input_title"> Enter your birthdate* <br/>
                <input required={true} type="date" name="birthdate" id="birthdate" placeholder="Enter your birthdate" onChange={(event) => setBirthDate(event.target.value)}/>
                </label>

                <label id="input_title">Enter your height* <br/>
                    <input required={true} type="number" name="height" id="height" placeholder="Enter your height" onChange={(event) => setHeight(event.target.value)}/>
                </label>

                <label id="input_title">Enter your eye color* <br/>
                    <input required={true} type="text" name="eyecolor" id="eyecolor" placeholder="Enter your eye color" onChange={(event) => setEyeColor(event.target.value)}/>
                </label>

                <label id="input_title">Enter your hair color* <br/>
                    <input required={true} type="text" name="haircolor" id="haircolor" placeholder="Enter your hair color" onChange={(event) => setHairColor(event.target.value)}/>
                </label>

                <label id="input_title">Enter your shoe size* <br/>
                    <input required={true} type="number" name="shoesize" id="shoesize" placeholder="Enter your shoe size" onChange={(event) => setShoeSize(event.target.value)}/>
                </label>

                <label id="input_title"> Enter any comments* <br/>
                    <input required={true} type="textarea" name="comments" id="comments" placeholder="Enter your comments" onChange={(event) => setComments(event.target.value)}/>
                </label>

                <button type="submit" value="Submit">Submit</button>
            </form>
            </section>
        </>
    )
}

export default CreateModel;