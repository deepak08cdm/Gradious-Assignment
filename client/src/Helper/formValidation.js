const validate = (values) => {
    const errors={}
    const {patientName,phoneNumber,doctorName} = values
    const namePattern = /^[_A-z]*((-|\s)*[_A-z])*$/g
    const numberPattern = /^[789]\d{9}$/g
    const docNamePattern = /^[_A-z]*((-|\s)*[_A-z])*$/g

    if (!values.patientName) {
        errors.patientName = 'Required';
    }
    else if (!namePattern.test(patientName.trim())) {
        errors.patientName = 'Name should contain only alphabet';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Required';
    }
    else if (!numberPattern.test(phoneNumber.trim())) {
        errors.phoneNumber = 'Enter a valid number';
    }

    if (!values.doctorName) {
        errors.doctorName = 'Required';
    }
    else if (!docNamePattern.test(doctorName.trim())) {
        errors.doctorName = 'Name should contain only alphabet';
    }

    if (!values.gender) {
        errors.gender = 'Required';
    }

    if (!values.date) {
        errors.date = 'Required';
    }

    if (!values.status) {
        errors.status = 'Required';
    }

    if (!values.age) {
        errors.age = 'Required';
    }

    if (!values.time) {
        errors.time = 'Required';
    }

    return errors
    
}

export default validate