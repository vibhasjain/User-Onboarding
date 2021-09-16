import * as yup from 'yup';

const formSchema = yup.object().shape({

    name: yup
        .string()
        .trim()
        .required('WHATS YOUR NAME!!!!'),
    email: yup
        .string()
        .trim()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('WHATS YOUR FREAKING PASSWORD'),
    tos: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
})

export default formSchema;