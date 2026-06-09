import { useState, useCallback } from "react";
import story from "./data/story.json";
import VideoPlayer from "./components/VideoPlayer";
import ChoiceButtons from "./components/ChoiceButtons";
import useDecisionTimer from "./hooks/useDecisionTimer";
import "./App.css";

const DECISION_TIME = 7000;

function App() {
  const [currentNode, setCurrentNode] = useState("intro");
  const [showChoices, setShowChoices] = useState(false);
  const [timeLeft, setTimeLeft] = useState(100);
  const [storyFinished, setStoryFinished] = useState(false);
  const currentScene = story[currentNode];

  const handleNearEnd = () => {
    if (currentScene.choices.length === 0) {
      return;
    }
    setShowChoices(true);
    setTimeLeft(100);
  };
  const handleChoice = useCallback(
    (nextScene) => {
      setCurrentNode(nextScene);
      setShowChoices(false);
      setTimeLeft(100);
    }, []
  );
  
  const handleVideoEnd = () => {
    if (currentScene.choices.length === 0) {
      setStoryFinished(true);
    }
  };
  const restartStory = () => {
    setCurrentNode("intro");
    setShowChoices(false);
    setTimeLeft(100);
    setStoryFinished(false);
  };

  useDecisionTimer({
    showChoices,
    currentScene,
    decisionTime: DECISION_TIME,
    setTimeLeft,
    handleChoice
  });

  if (storyFinished) {
    return (
      <div className="ending-screen">
        <h1>Fim da história</h1>

        <button
          className="restart-button"
          onClick={restartStory}
        >
          Voltar ao início
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <VideoPlayer
        src={currentScene.video}
        onNearEnd={handleNearEnd}
        onEnded={handleVideoEnd}
        decisionMode={
          showChoices &&
          currentScene.choices.length > 0
        }
      />

      {showChoices &&
        currentScene.choices.length > 0 && (
          <>
            <ChoiceButtons
              choices={currentScene.choices}
              onSelect={handleChoice}
            />

            <div className="timer-container">
              <div
                className="timer-bar"
                style={{ width: `${timeLeft}%` }}
              />
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;