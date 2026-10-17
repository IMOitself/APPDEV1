import styles from "./Register.module.css";
import logo from "../../assets/logo.svg";

export default function Register() {
    return (
        <div className={styles.register}>
            {/* ---------- Left panel ---------- */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img className={styles.logo} src={logo} alt="Design Spacee logo" />

                <p className={styles.link}>figma.com/@designspacee</p>
            </section>

            {/* ---------- Right panel ---------- */}
            <section className={styles.right}>
                <div className={styles.form}>
                    <h2>Create Account</h2>

                    <div className={styles.socialButtons}>
                        <button type="button" className={styles.socialButton}>
                            Sign up with Google
                        </button>
                        <button type="button" className={styles.socialButton}>
                            Sign up with Facebook
                        </button>
                    </div>

                    <div className={styles.separator}>
                        <span className={styles.line}></span>
                        <span className={styles.separatorText}>OR</span>
                        <span className={styles.line}></span>
                    </div>

                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <button type="button" className={styles.submitButton}>
                        Create Account
                    </button>

                    <p className={styles.signin}>
                        Already have an account? <a href="#">Login</a>
                    </p>
                </div>
            </section>
        </div>
    );
}
