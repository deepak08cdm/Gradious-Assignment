import {Button, Space, Typography, Tag} from 'antd'
import dayjs from 'dayjs'

const {Text} = Typography

const columns =(handleEditAction,handleDeleteAction)=> [
    {
        title:'Patient',
        dataIndex:'patient',
        render:(val)=>{
            return(
                <>
                    <Text level={4} strong>{val.patientName}</Text><br/>
                    <Text>{`${val.age} yrs, ${val.gender}`}</Text>
                </>
            )
        }
    },
    {
        title:'Status',
        dataIndex:'status',
        render:(val)=> <>{val==='revisit'?<Tag color='#0e56c9'><Text strong style={{color:'white'}}>{val}</Text></Tag>:<Tag color='#1e9413'><Text strong style={{color:'white'}}>{val}</Text></Tag>}</>
    },
    {
        title:'Appoinment',
        dataIndex:'appointment',
        render:(val)=>{
            return(
                <>
                    <Text strong>{val.time}</Text><br/>
                    <Text>{val.date}</Text>
                </>
            )
        }
    },
    {
        title:'Phone',
        dataIndex:'phone',
        render:(val)=> <Text strong>{val}</Text>
    },
    {
        title:'Doctor',
        dataIndex:'doctorName',
        render:(val)=> <Text strong>{val}</Text>
    },
    {
        title:'Action',
        dataIndex:'action',
        render:(val)=>{
            return(
                <Space>
                    <Button type='primary' warning style={{backgroundColor:'#ebb134', color:'black'}} onClick={()=>{handleEditAction(val)}}>Edit</Button>
                    <Button type='primary' danger onClick={()=>handleDeleteAction(val)}>Delete</Button>
                </Space>
            )
        }
    }
]

export default columns