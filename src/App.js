
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Modal from './components/Modal';
import { useState } from 'react';
import DataList from './components/DataList';
import AddNewData from './components/AddNewData';
function App() {

  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([
    { id: 1, name: "John", age: 34 },
    { id: 2, name: "Smith", age: 22 }
  ])


  const handleModal = () => {
    setShowModal(!false);
  }


  const handleDelete = (id) => {
    const filterDataFunction = data.filter((filterData) => {
      return filterData.id !== id;
    });
    setData(filterDataFunction);
  }

  const newData = (event) => {
    setData((prev) => {
      return [...prev, event]
    })
  }

  return (
    <>

      <h1>Todo App</h1>


      <button onClick={handleModal}>Add Data</button>


      {showModal ? <Modal setShowModal={setShowModal} >
        <AddNewData newData={newData} />
      </Modal> : null}


      <DataList data={data} handleDelete={handleDelete} />





      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App;


