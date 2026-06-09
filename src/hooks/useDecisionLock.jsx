import { useEffect } from "react";

export default function useDecisionLock(videoRef, decisionMode) {
  useEffect(() => {
    const video = videoRef.current;

    if (!video || !decisionMode) return;

    const keepPlaying = () => {
      if (video.paused) {
        video.play();
      }
    };

    const preventSeeking = () => {
      const minAllowed = video.duration - 7;
      
      if (video.currentTime < minAllowed) {
        video.currentTime = minAllowed;
      }
    };

    video.addEventListener(
      "pause",
      keepPlaying
    );

    video.addEventListener(
      "seeking",
      preventSeeking
    );

    return () => {
      video.removeEventListener(
        "pause",
        keepPlaying
      );

      video.removeEventListener(
        "seeking",
        preventSeeking
      );
    };
  }, [videoRef, decisionMode]);
}