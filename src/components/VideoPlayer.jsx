import { useRef } from "react";
import useVideoPlayer from "../hooks/useVideoPlayer";
import useDecisionLock from "../hooks/useDecisionLock";

export default function VideoPlayer({ src, onNearEnd, onEnded, decisionMode }) {
  const videoRef = useRef(null);
  const triggeredRef = useRef(false);

  useVideoPlayer(videoRef, src, triggeredRef);
  useDecisionLock(videoRef, decisionMode);

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || triggeredRef.current) return;

    const remainingTime = video.duration - video.currentTime;

    if (remainingTime <= 7) {
      triggeredRef.current = true;
      onNearEnd?.();
    }
  };

  return (
    <video
      ref={videoRef}
      width="100%"
      controls={!decisionMode}
      onTimeUpdate={handleTimeUpdate}
      onEnded={onEnded}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}