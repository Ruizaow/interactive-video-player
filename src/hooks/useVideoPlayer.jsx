import { useEffect } from "react";

export default function useVideoPlayer(videoRef, src, triggeredRef) {
  useEffect(() => {
    triggeredRef.current = false;

    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [videoRef, src, triggeredRef]);
}