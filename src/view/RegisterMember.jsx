import { Toaster } from 'react-hot-toast';
import styles from './RegisterMember.module.css'
import { Link } from 'react-router-dom';

function RegisterMember() {
    return (
        <>
        <Toaster />
        <form>
        <div className={styles.gridAssign}>
            <p className={styles.p}>Name</p>
            <input
                type="text"
                className={styles.input}
                value={''}
                onChange={e => {
                    
                }}
            />

            <p className={styles.p}>Email</p>
            <input
                type="text"
                className={styles.input}
                value={''}
                onChange={e => {
                   
                }}
            />

            <p className={styles.p}>Password</p>
            <input
                type="password"
             
                className={styles.input}
                value={''}
                onChange={e => {
                   
                }}
            />

            <p className={styles.p}>Confirm password</p>
            <input
                type="password"
                className={styles.input}
                value={''}
                onChange={e => {
                   
                }}
            />

        
        </div>
            <div className={styles.buttons}>
                <Link to={'/'}>Cancel</Link>
                <button >Register</button>
            </div>
        </form>
    </>
);
    
}

export default RegisterMember
