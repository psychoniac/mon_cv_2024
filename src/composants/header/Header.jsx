import Dropdown from '../dropdown/Dropdown';
import styles from './header.module.css';
function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <h1 className={styles.header_title}>Julien Mercier</h1>
                <p className={styles.header_phrase}>Phrases daccroche</p>
            </div>
            <Dropdown
                titre_dropdown='MERCIER Julien'
                text1='adresse'
                text2='dfgd'
                text3='erttedr'
                text4='gdfg'
            />
        </header>
    );
}

export default Header;
