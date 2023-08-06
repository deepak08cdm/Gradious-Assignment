import React, { useEffect } from 'react'
import { Row, Col, Input, Select, Space, Typography } from 'antd'
import { DatePicker, TimePicker, Button } from 'antd'
import { useFormik } from 'formik'
import dayjs from 'dayjs'

import validate from '../../Helper/formValidation'
import { postData,updateUser } from '../../Helper/OpenApi'

const { Text } = Typography
const initialValues = {
    patientName: '',
    phoneNumber: '',
    doctorName: '',
    gender: null,
    date: '',
    status: null,
    age: '',
    time: ''
}

function Form({ editForm, setEditForm, fetchData, editFormData, setOpenModal }) {

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: async(values, { resetForm }) => {
            if (editForm) {
                setEditForm(false)
                await updateUser({ ...values, time: values.time.strValue, date: values.date.strValue })
                fetchData()
            }
            else {
                await postData({ ...values, time: values.time.strValue, date: values.date.strValue })
                fetchData()
            }
            resetForm({ values: initialValues })
        }
    })

    useEffect(()=>{
        if(editForm){
            const formData = {...editFormData,
                                phoneNumber:editFormData.phoneNumber.toString(), 
                                time:{value:dayjs(`${editFormData.date} ${editFormData.time}`), strValue:editFormData.time},
                                date:{value:dayjs(`${editFormData.date} ${editFormData.time}`), strValue:editFormData.date}
                            }
            formik.resetForm ({values: formData})
        }
        else if(!editForm && !editFormData){
            formik.resetForm({values:initialValues})
        }
    },[editForm])


    return (
        <Space direction='vertical' style={{ width: 'calc(100% - 32px)', padding: '16px' }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Input
                        name='patientName'
                        placeholder="Patient name*"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.patientName}
                    />
                    {
                        formik.touched.patientName && formik.errors.patientName ? <Text type='danger'> {formik.errors.patientName} </Text> : null
                    }
                </Col>
                <Col span={8}>
                    <Input
                        name='phoneNumber'
                        placeholder="Phone number*"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                    />
                    {
                        formik.touched.phoneNumber && formik.errors.phoneNumber ? <Text type='danger'> {formik.errors.phoneNumber} </Text> : null
                    }
                </Col>
                <Col span={8}>
                    <Input
                        name='doctorName'
                        placeholder="Doctor name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.doctorName}
                    />
                    {
                        formik.touched.doctorName && formik.errors.doctorName ? <Text type='danger'> {formik.errors.doctorName} </Text> : null
                    }
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Select
                        placeholder="Gender"
                        name='gender'
                        style={{ width: '100%' }}
                        defaultValue={'hello'}
                        options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'trans', label: 'Transgender' }
                        ]}
                        value={formik.values.gender}
                        onBlur={formik.handleBlur}
                        onChange={(value) => { formik.setFieldValue("gender", value) }}
                    />
                    {
                        formik.touched.gender && formik.errors.gender ? <Text type='danger'> {formik.errors.gender} </Text> : null
                    }
                </Col>
                <Col span={8}>
                    <DatePicker
                        name='date'
                        style={{ width: '100%' }}
                        onChange={(value, strValue) => { formik.setFieldValue("date", { value, strValue }) }}
                        onBlur={formik.handleBlur}
                        value={formik.values.date.value}
                    />
                    {
                        formik.touched.date && formik.errors.date ? <Text type='danger'> {formik.errors.date} </Text> : null
                    }
                </Col>
                <Col span={8}>
                    <Select
                        placeholder="Status*"
                        name='status'
                        style={{ width: '100%' }}
                        options={[
                            { value: 'consult', label: 'Consult' },
                            { value: 'revisit', label: 'Revisit' }
                        ]}
                        onChange={(value) => { formik.setFieldValue("status", value) }}
                        value={formik.values.status}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.status && formik.errors.status ? <Text type='danger'> {formik.errors.status} </Text> : null
                    }
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Input
                        name="age"
                        placeholder="Age"
                        onChange={formik.handleChange}
                        value={formik.values.age}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.age && formik.errors.age ? <Text type='danger'> {formik.errors.age} </Text> : null
                    }
                </Col>
                <Col span={8}>
                    <TimePicker
                        name='time'
                        style={{ width: '100%' }}
                        onChange={(value, strValue) => { formik.setFieldValue("time", { value, strValue }) }}
                        onBlur={formik.handleBlur}
                        value={formik.values.time.value}
                    />
                    {
                        formik.touched.time && formik.errors.time ? <Text type='danger'> {formik.errors.time} </Text> : null
                    }
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Button type='primary' onClick={formik.handleSubmit}>{editForm ? 'Update appointment' : 'Book appointment'}</Button>
                </Col>
                <Col span={8} offset={8}>
                    {editForm && <Button type='primary' danger style={{ float: 'right' }} onClick={()=>{setOpenModal(true)}}>Cancel appointment</Button>}
                </Col>
            </Row>
        </Space>
    )
}

export default Form