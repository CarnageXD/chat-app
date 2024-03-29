import preloader from "./../../assets/img/preloader.svg";
import s from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.preloaderPosition}>
      <img src={preloader} alt="loader" />
    </div>
  );
};

export default Preloader;
