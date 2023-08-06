export const reformedData = (data)=>{
    const reformedData = data.map(ele=>{
      const {age, date, doctorName,gender,patientName,phoneNumber,status,time} = ele
      return(
        {
          patient:{
            patientName,
            age,
            gender
          },
          status,
          doctorName:`Dr. ${doctorName}`,
          phone:phoneNumber,
          appointment:{
            date,
            time
          },
          action:ele
        }
      )
    })
    return reformedData
}