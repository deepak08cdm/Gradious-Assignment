import axios from 'axios'
import { toast } from 'react-toastify'

export const postData = async(payload)=>{
    try{
        const result = await axios.post('http://localhost:3001/addPatient',payload)
        return toast.success(result.data.message)
    }
    catch(err){
        return toast.error(err)
    }
}

export const patientList = async()=>{
    try{
        const result = await axios.get('http://localhost:3001/all')
        return result.data
    }
    catch(err){
        return toast.error(err)
    }
}

export const updateUser = async(payload)=>{
    try{
        const result = await axios.put(`http://localhost:3001/${payload._id}`,payload)
        return toast.success(result.data.message)
    }
    catch(err){
        return toast.error(err)
    }
}

export const deleteUser = async(payload)=>{
    try{
        const result = await axios.delete(`http://localhost:3001/${payload._id}`)
        return toast.success(result.data.message)
    }
    catch(err){
        return toast.error(err)
    }
}