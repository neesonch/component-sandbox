import styles from "./Toggle.module.css";

interface ToggleProps {
  label: string;
  handleToggle: (checked: boolean) => void;
}

export const Toggle = ({ label, handleToggle }: ToggleProps) => {
  return (
    <div className={styles.parentWrapper}>
      <div className={styles.sliderWrapper}>
        <input
          className={styles.handle}
          type="checkbox"
          onChange={(e) => handleToggle(e.target.checked)}
          id={`${label}-toggle`}
        />
        <label htmlFor={`${label}-toggle`} className={styles.notch}></label>
      </div>
      <label className={styles.toggleLabel}>{label}</label>
    </div>
  );
};
