

const DataList = ({ data, handleDelete }) => {
    return (
        <div>
            {
                data.map((data) => {
                    return (
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            border: "2px solid green"
                        }}>
                            <h4>Name: {data.name}</h4>
                            <h4>Age : {data.age}</h4>
                            <button onClick={() => handleDelete(data.id)}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataList