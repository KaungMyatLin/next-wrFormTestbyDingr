import Head from 'next/head'
import styles from '../forms/form.module.css'
import { Fragment, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import httpUtils from '@lib/http-util'
import { useRouter } from 'next/router'
import SimpledivErrMsg from '@components/error/simpledivErrMsg'
import CustomInput from '@components/input/input'
function field_children() {
    const nmInpEl   = useRef(null);
    const phInpEl   = useRef(null);
    const emInpEl   = useRef(null);
    const addrInpEl = useRef(null);
    const rmrkInpEl = useRef(null);
    const amtInpEl  = useRef(null);
    const router    = useRouter()

    const schemaValidation = Yup.object({
            name: Yup.string().trim()
                .max(20, "Your name length must be max ${max} characters or less")
                .required("Required"),
            phone: Yup.number()
                .integer("Your phone number must be integer")
                .required("Required"),
            email: Yup.string().trim()
                .email("Your email must be valid email addresss`")
                .required("Required"),
            address: Yup.string().trim()
                .min(10, "Your address length must be min ${min} characters or more"),
            remark: Yup.string().trim(),
            amount: Yup.number()
                .integer("Entered total amount must be integer")
                .min(199, "Entered total amount must be more than ${min} in value")
                .required("Required"),
    })
        // const formObj = await schema.validate({ name: 'abcdefghijklmnopqrst', phone: parseInt("123456789"), email: 'abc@g.com', amount: parseInt("200")}).catch(function (err) {
        //     console.log(err);
        //     console.log(err.errors);
        // });
        // console.log(formObj)
                                                                                                                    
    return (
        <Fragment>
            <Head>
            <title>Payment form</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        email: '',
                        address: '',
                        remark: '',
                        amount: ''
                    }}
                    validationSchema={schemaValidation}
                    onSubmit={async (values) => {
                                console.dir("onSubmit callback values: "+values)
                                // const [ encryptstr_payload, hashText] = await httpUtils(nmInpEl.current.value, amtInpEl.current.value
                                //     , emInpEl.current.value, rmrkInpEl.current.value, phInpEl.current.value, addrInpEl.current.value);
                                // alert(`${encryptstr_payload} and ${hashText}`)
                                // console.log(`${encryptstr_payload} and ${hashText}`)
                                // router.push(`https://form.dinger.asia?payload=${encryptstr_payload}&hashValue=${hashText}`)
                            }}
            >
            {(formik) => {
            const { errors, touched, isValid, dirty } = formik;
            return (
            <div className={`${styles.container}`}>
            {/* {console.dir("inside formik component: ")}
            {console.dir(formik)} */}
                <section className={styles.section}>
                    <div className={styles.logoContainer}>
                        <Link href='/'  alt="Logo">
                            <a> <Image  src="/images/site/dinger_logo.svg" width={400} height={300}/> </a>
                        </Link>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.formContainer}>
                        <Form className={styles.form}>
                            <div className={styles["form-control"]} >
                                <div className={styles.labelColumn}>
                                    <span style={{color: "red !important", display: "inline", float: "none"}}>*</span>
                                    <label htmlFor="name">Customer Name</label>
                                </div>
                                <Field name="name" >
                                    { props => {
                                        // console.log(props)
                                        const {field, form, meta} = props
                                        return (
                                            <div className={`${styles.inputColumn}`}>
                                                <CustomInput id="name" type="text" placeholder="Customer Name" ref={nmInpEl} {...field} meta={meta}/>
                                                {meta.error && meta.touched ? <div className={styles.errors}>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }}
                                </Field>
                            </div>
                            <div className={styles["form-control"]} >
                                <div className={styles.labelColumn}>
                                    <span style={{color: "red !important", display: "inline", float: "none"}}>*</span>
                                    <label htmlFor="phone">Customer Phone</label>
                                </div>
                                <Field name="phone" >
                                    { props => {
                                        const {field, form, meta} = props
                                        return (
                                            <div className={`${styles.inputColumn}`}>
                                                <CustomInput id="phone" type="text" placeholder="Customer Phone" ref={phInpEl} {...field} meta={meta}/>
                                                {meta.error && meta.touched ? <div className={styles.errors}>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }}
                                </Field>
                            </div>
                            <div className={styles["form-control"]} >
                                <div className={styles.labelColumn}>
                                    <span style={{color: "red !important", display: "inline", float: "none"}}>*</span>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <Field name="email" >
                                    { props => {
                                        const {field, form, meta} = props
                                        return (
                                            <div className={`${styles.inputColumn}`}>
                                                <CustomInput id="email" type="text" placeholder="Email" ref={emInpEl} {...field} meta={meta}/>
                                                {meta.error && meta.touched ? <div className={styles.errors}>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }}
                                </Field>
                            </div>
                            <div className={styles["form-control"]} >
                                <div className={styles.labelColumn}>
                                    <label htmlFor="address">Customer Address</label>
                                </div>
                                <Field name="address" >
                                    { props => {
                                        const {field, form, meta} = props
                                        return (
                                            <div className={`${styles.inputColumn}`}>
                                                <CustomInput id="address" type="text" placeholder="Address" ref={addrInpEl} {...field} meta={meta}/>
                                                {meta.error && meta.touched ? <div className={styles.errors}>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }}
                                </Field>
                            </div>
                            <div className={styles["form-control"]} >
                                <div className={styles.labelColumn}>
                                    <label htmlFor="remark">Description</label>
                                </div>
                                <Field name="remark" >
                                    { props => {
                                        const {field, form, meta} = props
                                        return (
                                            <div className={`${styles.inputColumn}`}>
                                                <CustomInput id="remark" type="text" placeholder="Remark" ref={rmrkInpEl} {...field} meta={meta}/>
                                                {meta.error && meta.touched ? <div className={styles.errors}>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }}
                                </Field>
                            </div>
                            <div className={styles["form-control"]} >
                                <div className={styles.labelColumn}>
                                    <span style={{color: "red !important", display: "inline", float: "none"}}>*</span>
                                    <label htmlFor="amount">Total Amount</label>
                                </div>
                                <Field name="amount" >
                                    { props => {
                                        const {field, form, meta} = props
                                        return (
                                            <div className={`${styles.inputColumn}`}>
                                                <CustomInput id="amount" type="text" placeholder="Amount" ref={amtInpEl} {...field} meta={meta}/>
                                                {meta.error && meta.touched ? <div className={styles.errors}>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }}
                                </Field>
                            </div>
                            <div className={`${styles.buttonContainer} ${styles["form-control"]}`} >
                                <button type="submit" className={`${styles.button}`}
                                    disabled={!(dirty && isValid)} >Submit</button>
                            </div>
                        </Form>
                    </div>
                </section>
            </div>)}}
            </Formik>
        </Fragment>
    )
}

export default field_children