import * as yup from 'yup'
// import { boolean } from 'yup/lib/locale'

export default yup.object().shape({
    nickname: yup
        .string()
        .required("Plant name is required")
        .min(2, "name must be at least 2 characters"),
    // species: yup
    //     .string()
    //     .required("Species is required")
    //     .min(2, "name must be at least 2 characters"),
    h2oInterval: yup
        .number()
        .required("must number times per month"),
    h2oAmount: yup
        .string()
        .required("You must tell me how much water"),

})