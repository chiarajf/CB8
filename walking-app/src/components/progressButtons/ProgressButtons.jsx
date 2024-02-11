import { useEffect, useState } from "react";

const ProgressButtons = ({
  handleSaveProgress,
  handleClearProgress,
  handleGoToProgress,
  handleGoToHome,
}) => {
  const [showEyeIcon, setShowEyeIcon] = useState(false);
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [showClearPopup, setShowClearPopup] = useState(false);

  useEffect(() => {
    const savedDailyProgress = JSON.parse(
      localStorage.getItem("dailyProgress")
    );
    if (savedDailyProgress && savedDailyProgress.length > 0) {
      setShowEyeIcon(true);
    }
  }, []);

  const handleSaveProgressClick = () => {
    handleSaveProgress();
    setShowEyeIcon(true);
    setShowSavePopup(true);
    setTimeout(() => setShowSavePopup(false), 3000);
    document.body.classList.add(styles.blur);
  };

  const handleClearProgressClick = () => {
    handleClearProgress();
    setShowEyeIcon(false);
    setShowSavePopup(false);
    setShowClearPopup(true);
    setTimeout(() => setShowClearPopup(false), 3000);
    document.body.classList.add(styles.blur);
  };

  return (
    <div className={styles.ProgressButtons}>
      <button
        type="button"
        className={styles.savedButton}
        onClick={handleSaveProgressClick}
      >
        <SewingPinIcon color="#fff" />
      </button>
      {showEyeIcon && (
        <button
          type="button"
          className={styles.savedButton}
          onClick={handleGoToProgress}
        >
          <EyeOpenIcon color="#fff" />
        </button>
      )}
      <button
        type="button"
        className={styles.trashButton}
        onClick={handleClearProgressClick}
      >
        <TrashIcon color="#fff" />
      </button>
      <button
        type="button"
        className={styles.trashButton}
        onClick={handleGoToHome}
      >
        <HomeIcon color="#fff" />
      </button>
      {showSavePopup && (
        <div className={styles.popup}>Percorso aggiunto ai tuoi progressi!</div>
      )}
      {showClearPopup && (
        <div className={styles.clearPopup}>
          Percorso rimosso, ricordati di salvare i tuoi progressi!
        </div>
      )}
    </div>
  );
};

export default ProgressButtons;
