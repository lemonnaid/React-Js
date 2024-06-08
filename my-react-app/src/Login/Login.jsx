import styles from './Login.module.css'

function Login(){

    const handleClick =(e)=> e.target.textContent = "You've logged in!"; 
    
    return(
        <button className={styles.button} onClick={(e)=> handleClick(e)}>Log In</button>
    );
}

export default Login