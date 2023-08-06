import Form from './Components/Form/Form'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { Modal } from 'antd';

import { patientList, deleteUser } from './Helper/OpenApi';
import Table from './Components/Table/Table';

function App() {
  const [data, setData] = useState([])
  const [editForm, setEditForm] = useState(false)
  const [editFormData, setEditFormData] = useState()
  const [openModal, setOpenModal] = useState(false)

  const handleOnOk = async () => {
    await deleteUser(editFormData)
    setOpenModal(false)
    setEditForm(false)
    setEditFormData(null)
    fetchData()
  }
  const handleOnCancel = () => {
    setOpenModal(false)
    setEditFormData({})
  }
  const fetchData = async () => {
    const data = await patientList()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <ToastContainer />
      <Form editForm={editForm} setEditForm={setEditForm} fetchData={fetchData} editFormData={editFormData} setOpenModal={setOpenModal}/>
      {data.length > 0 && <Table data={data} setEditForm={setEditForm} setEditFormData={setEditFormData} editFormData={editFormData} fetchData={fetchData} setOpenModal={setOpenModal} />}
      <Modal title="Delete" open={openModal} onOk={handleOnOk} onCancel={handleOnCancel}>
        Are you sure you want to delete this user?
      </Modal>
    </>
  );
}

export default App;
