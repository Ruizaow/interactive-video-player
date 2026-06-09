import { useEffect } from "react";

export default function useDecisionTimer({ showChoices, currentScene, decisionTime, setTimeLeft, handleChoice }) {
  useEffect(() => {
    if (!showChoices) return;

    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percentage = Math.max(0, 100 - (elapsed / decisionTime) * 100);
      setTimeLeft(percentage);

      if (percentage <= 0) {
        clearInterval(interval);
        
        const choices = currentScene.choices;
        
        if (choices.length > 0) {
          const randomChoice = choices[Math.floor(Math.random() * choices.length)];
          handleChoice(randomChoice.next);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [showChoices, currentScene, decisionTime, setTimeLeft, handleChoice]);
}