import styles from './input.module.css'
import React, { useRef, useImperativeHandle } from 'react'

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef()
    const activate = () => {
        inputRef.current.focus();
    }
    useImperativeHandle(ref, ()=> {
        return {
            focus: activate
        }
    })
    const {id, name, onBlur, onChange, placeholder, type, meta } = props;
    console.log(props)
    return (
        <input ref={inputRef} 
            id={id}             name={name}     type={type} 
            onBlur={onBlur}     onChange={onChange} 
            placeholder={placeholder} 
            className={`${styles.inputColumn} ${meta.error && meta.touched? styles.inptouched: null}`}>
            {props.children}
        </input>
    )
})

export default Input