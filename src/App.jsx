import reactionLogo from "/icon-reaction.svg";
import memoryLogo from "/icon-memory.svg";
import verbalLogo from "/icon-verbal.svg";
import visualLogo from "/icon-visual.svg";
import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <p className="left-title">Your Result</p>
        <div className="circle">
          <p className="top">76</p>
          <p className="bottom">of 100</p>
        </div>
        <p className="left-subtitle">Great</p>
        <p className="left-content">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="rightContainer">
        <p className="right-title">Summary</p>
        <div className="rightSubContainer">
          <div className="block reaction">
            <img src={reactionLogo} />
            <p>Reaction</p>
            <p className="score">
              <span>80</span> / 100
            </p>
          </div>
          <div className="block memory">
            <img src={memoryLogo} />
            <p>Memory</p>
            <p className="score">
              <span>92</span> / 100
            </p>
          </div>
          <div className="block verbal">
            <img src={verbalLogo} />
            <p>Verbal</p>
            <p className="score">
              <span>61</span> / 100
            </p>
          </div>
          <div className="block visual">
            <img src={visualLogo} />
            <p>Visual</p>
            <p className="score">
              <span>72</span> / 100
            </p>
          </div>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default App;
