import "./Podcast.css";
import podcast1 from "../../assets/podcast1.webp";
import podcast2 from "../../assets/podcast2.webp";
const Podcast = ({ darkmode }) => {
  return (
    <div
      className="podcast"
      style={
        darkmode
          ? { backgroundColor: "var(--darker)" }
          : { backgroundColor: "" }
      }
    >
      <div className="podcast__container">
        <div className="podcast__image">
          <img src={podcast1} alt="podcast" />
        </div>
        <div className="podcast__content__container">
          <div className="plus1">
            <p>+</p>
            <p>+</p>
          </div>
          <div className="podcast__content">
            <h2>WAVEFORM PODCAST</h2>
            <p>
              A tech podcast for the gadget lovers and tech heads among us.
              Marques and co-host Andrew Manganelli dive deep into tech,
              YouTube, video production and more. New episodes every week!
            </p>
            <button className="podcast__button">LISTEN NOW</button>
          </div>
          <div className="plus1">
            <p>+</p>
            <p>+</p>
          </div>
        </div>
      </div>

      <div className="podcast__container__mobile">
        <div className="podcast__image">
          <img src={podcast2} alt="podcast" />
        </div>
        <div className="podcast__content__container">
          <div className="plus1">
            <p>+</p>
            <p>+</p>
          </div>
          <div className="podcast__content">
            <h2>WAVEFORM PODCAST</h2>
            <p>
              A tech podcast for the gadget lovers and tech heads among us.
              Marques and co-host Andrew Manganelli dive deep into tech,
              YouTube, video production and more. New episodes every week!
            </p>
            <button className="podcast__button">LISTEN NOW</button>
          </div>
          <div className="plus1">
            <p>+</p>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
