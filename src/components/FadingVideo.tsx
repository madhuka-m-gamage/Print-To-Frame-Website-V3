import React, { useEffect, useRef } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  poster?: string;
}

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55; // seconds

export default function FadingVideo({ src, className = '', style = {}, poster }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Initial state
    video.style.opacity = '0';

    const cancelCurrentFade = () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };

    const fadeTo = (targetOpacity: number, duration: number = FADE_MS) => {
      cancelCurrentFade();
      const initialOpacity = parseFloat(video.style.opacity || '0') || 0;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentVal = initialOpacity + (targetOpacity - initialOpacity) * progress;
        video.style.opacity = currentVal.toString();

        if (progress < 1) {
          rafIdRef.current = requestAnimationFrame(animate);
        } else {
          rafIdRef.current = null;
        }
      };

      rafIdRef.current = requestAnimationFrame(animate);
    };

    const handleLoadedData = () => {
      video.style.opacity = '0';
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            fadeTo(1, FADE_MS);
          })
          .catch(() => {
            // Autoplay policy prevented or muted playback issue, still fade in
            fadeTo(1, FADE_MS);
          });
      }
    };

    const handleTimeUpdate = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;
      const remaining = video.duration - video.currentTime;
      if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        fadingOutRef.current = false;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              fadeTo(1, FADE_MS);
            })
            .catch(() => {
              fadeTo(1, FADE_MS);
            });
        }
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // If already loaded
    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      cancelCurrentFade();
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      poster={poster}
      disablePictureInPicture
      disableRemotePlayback
      className={className}
      style={{
        opacity: 0,
        ...style,
      }}
    />
  );
}
