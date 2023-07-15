import "./Channel.css";
import channel1 from "../../assets/channel1.jpg";
import channel2 from "../../assets/channel2.jpg";
import channel3 from "../../assets/channel3.jpg";
import yt_icon from "../../assets/yt_icon.png";

const Channel = ({ darkmode }) => {
  return (
    <div
      className="channel"
      style={
        darkmode
          ? { color: "white", backgroundColor: "var(--darker)" }
          : { color: "", backgroundColor: "" }
      }
    >
      <div className="channel__heading">
        <h2>RECENT VIDEOS</h2>
        <div className="channel__btn">
          <button>VISIT CHANNEL</button>
        </div>
      </div>
      <div className="channel__content__container">
        <div className="plus2">
          <p>+</p>
          <p>+</p>
          <p className="channel__plus">+</p>
          <p className="channel__plus">+</p>
        </div>
        <div className="channel__grid">
          <div className="channel__content">
            <div className="channel__image">
              <img src={channel1} alt="youtube" />
              <div className="youtube__icon">
                <img src={yt_icon} alt="icon" />
              </div>
            </div>

            <h4>A hidden Google Assistant Feature!</h4>
          </div>
          <div className="new__channel__plus">
            <p>+</p>
            <p>+</p>
          </div>
          <div className="channel__content">
            <div className="channel__image">
              <img src={channel2} alt="youtube" />
              <div className="youtube__icon">
                <img src={yt_icon} alt="icon" />
              </div>
            </div>

            <h4>The ROG phone 7 ultimate is just Ridiculous!</h4>
          </div>

          <div className="new__channel__plus">
            <p>+</p>
            <p>+</p>
          </div>

          <div className="channel__content">
            <div className="channel__image">
              <img src={channel3} alt="youtube" />
              <div className="youtube__icon">
                <img src={yt_icon} alt="icon" />
              </div>
            </div>

            <h4>The Rivan R1S is... The best SUV ever?</h4>
          </div>
        </div>

        <div className="plus2">
          <p>+</p>
          <p>+</p>
          <p className="channel__plus">+</p>
          <p className="channel__plus">+</p>
        </div>
      </div>

      <p className="channel__btn1">VISIT CHANNEL</p>
    </div>
  );
};

export default Channel;
