import { FaDownload, FaFilePdf } from "react-icons/fa";
import styles from "./OurProfile.module.css";

export default function OurProfilePage() {
  return (
    <main className={styles.page}>
      <section className={styles.profile} aria-labelledby="profile-title">
        <div className={styles.content}>
          <p className={styles.eyebrow}>DESIGNQUBE · COMPANY PROFILE</p>
          <h1 id="profile-title" className={styles.title}>Our Profile</h1>
          <p className={styles.description}>
            Explore DesignQube’s company profile and learn more about our interior design and fit-out services.
          </p>

          <a
            className={styles.downloadButton}
            href="/Designqube_Company_Profile.pdf"
            download="Designqube_Company_Profile.pdf"
          >
            <FaDownload aria-hidden="true" />
            Download Company Profile
            <span className={styles.fileType}>PDF</span>
          </a>

          <div className={styles.fileNote}>
            <FaFilePdf aria-hidden="true" />
            <span>Designqube_Company_Profile.pdf</span>
          </div>
        </div>
      </section>
    </main>
  );
}
