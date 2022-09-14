import { useFormik } from 'formik';

function validate (val) {
    const errors = {};
    if (!val.firstName) {
        errors.firstName = 'Required';
    } else if (val.firstName.length > 20) {
        errors.firstName = 'Must be 20 characters or less';
    }

    if (!val.lastName) {
        errors.lastName = 'Required';
    } else if (!/^[9,5]/i.test(val.lastName)) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!val.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)) {
        errors.email = 'Invalid email address';
    }

    if (!val.amount) {
        errors.amount = 'Required';
    } else if (parseInt(val.amount) < 200) {
        errors.amount = 'Invalid amount';
    }
    return errors;
};

    // let userSchema = object({
    //   name: string().required().max(20, "Only 20 name characters can be put."),
    //   phone: number().required(),
    // })
export default function formik() {
    return useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            address: '',
            remark: '',
            amount: ''
        },
        validate,
        onSubmit: values => {
            console.log('Clicked');
            console.log(JSON.stringify(values, null, 2));
        },
    });
}