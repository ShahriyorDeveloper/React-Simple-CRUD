import { useState } from "react"


const AddNewData = ({ newData }) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDataObj = {
            name: name,
            age: age,
            id: Math.random()
        }

        newData(newDataObj);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>

                <label>
                    <span>Name</span> <br />
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </label>

                <br />
                <label>
                    <span>Age</span> <br />
                    <input type="number" onChange={(e) => setAge(e.target.value)} />
                </label> <br /> <br />

                <p>Name: {name}</p>
                <p>age: {age}</p>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddNewData