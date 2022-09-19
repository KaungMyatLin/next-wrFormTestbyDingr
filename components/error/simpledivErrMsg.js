import styles from '../forms/form.module.css'

function simpledivErrMsg(props) {
    return (
        <div className={styles.errors}>{props.children}</div>
    )
}

export default simpledivErrMsg