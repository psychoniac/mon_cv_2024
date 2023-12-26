import styles from './dropdown.module.css';
function Dropdown({ titre_dropdown, text1, text2, text3, text4 }) {
    return (
        <div className={styles.dropdown_contener}>
            <button className={styles.dropdown_button}>{titre_dropdown}</button>
            <div className={styles.dropdown_content}>
                <h3>{text1}</h3>
                <span>{text2}</span>
                <span>{text3}</span>
                <span>{text4}</span>
            </div>
        </div>
    );
}

export default Dropdown;
