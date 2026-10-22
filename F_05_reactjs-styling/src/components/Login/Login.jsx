import styles from "./Login.module.css";
import googleIcon from "../../assets/google.svg";
import fbIcon from "../../assets/fb.svg";

export default function Login() {
    return (
        <div className={styles.login}>
            <section className={styles.left} />

            <section className={styles.right}>
                <h2><b>Hello,</b> Guyss!</h2>

                <div className={styles.tabs}>
                    <span className={styles.activeTab}>Login</span>
                    <span className={styles.inactiveTab}>SignUp</span>
                </div>

                <div className={styles.form}>
                    <input className={styles.input} type="email" placeholder="Enter your email" />
                    <input className={styles.input} type="password" placeholder="Enter Password" />

                    <button className={styles.button}>Login</button>

                    <p className={styles.or}>Or</p>

                    <div className={styles.socials}>
                        <img src={googleIcon} alt="Google" />
                        <img src={fbIcon} alt="Facebook" />
                    </div>
                </div>
            </section>
        </div>
    );
}
