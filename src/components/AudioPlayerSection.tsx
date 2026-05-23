/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { AUDIO_TRACKS } from "../data/leadershipData";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, SkipForward, SkipBack, Volume2, Sparkles, AlertCircle, Headphones, RefreshCw } from "lucide-react";

export default function AudioPlayerSection() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isTtsActive, setIsTtsActive] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // 1, 1.25, 1.5

  const track = AUDIO_TRACKS[currentTrackIndex];
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const ttsTimeoutRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Stop Speech when component unmounts or track changes
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentTrackIndex]);

  // Simulate progress when playing audio (if TTS is not active, we still simulate progress)
  useEffect(() => {
    if (isPlaying) {
      const increment = 1 * playbackSpeed;
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNextTrack();
            return 0;
          }
          return prev + increment;
        });
      }, 500);
    } else {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying, playbackSpeed]);

  const handlePlayPause = () => {
    if ("speechSynthesis" in window) {
      if (isPlaying) {
        window.speechSynthesis.pause();
        setIsPlaying(false);
      } else {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
          setIsPlaying(true);
        } else {
          // Start speaking
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(track.audioText);
          utterance.lang = "es-ES";
          utterance.rate = playbackSpeed;
          utterance.onend = () => {
            setIsPlaying(false);
            setProgress(100);
          };
          utterance.onerror = () => {
            setIsPlaying(false);
          };
          ttsTimeoutRef.current = utterance;
          setIsTtsActive(true);
          window.speechSynthesis.speak(utterance);
          setIsPlaying(true);
        }
      }
    } else {
      // Fallback if SpeechSynthesis not supported
      setIsPlaying(!isPlaying);
      setIsTtsActive(false);
    }
  };

  const handleStop = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setProgress(0);
  };

  const handleNextTrack = () => {
    handleStop();
    setCurrentTrackIndex((prev) => (prev + 1) % AUDIO_TRACKS.length);
    setProgress(0);
  };

  const handlePrevTrack = () => {
    handleStop();
    setCurrentTrackIndex((prev) => (prev - 1 + AUDIO_TRACKS.length) % AUDIO_TRACKS.length);
    setProgress(0);
  };

  const changeSpeed = () => {
    let nextSpeed = 1;
    if (playbackSpeed === 1) nextSpeed = 1.25;
    else if (playbackSpeed === 1.25) nextSpeed = 1.5;
    else nextSpeed = 1;

    setPlaybackSpeed(nextSpeed);

    // If speaking, adjust speech speed smoothly
    if (isPlaying && isTtsActive && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(track.audioText);
      utterance.lang = "es-ES";
      utterance.rate = nextSpeed;
      // Start from approximately matching progress
      const length = track.audioText.length;
      const startChar = Math.floor((progress / 100) * length);
      utterance.text = track.audioText.substring(startChar);
      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(100);
      };
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section id="audio-reflection-section" className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 rounded-2xl border border-stone-800 p-6 md:p-8 shadow-xl text-white relative overflow-hidden">
      {/* Decorative stars / flares */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-24 -mt-24" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-radial from-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -ml-24 -mb-24" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side: Dynamic Vinyl Visualizer */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative">
            {/* Spinning Vinyl plate */}
            <motion.div 
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={isPlaying ? { repeat: Infinity, duration: 12, ease: "linear" } : { duration: 0.5 }}
              className={`w-36 h-36 md:w-44 md:h-44 rounded-full bg-stone-950 border-4 border-stone-800 shadow-2xl flex items-center justify-center relative cursor-pointer group`}
              onClick={handlePlayPause}
            >
              <div className="absolute inset-4 rounded-full border border-stone-800 border-dashed" />
              <div className="absolute inset-8 rounded-full border border-stone-800" />
              <div className="absolute inset-12 rounded-full border border-stone-800/60 border-dashed" />
              
              {/* Inner Label */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-500 flex items-center justify-center font-serif text-stone-950 font-bold text-xs shadow-md">
                PROCESO
              </div>

              {/* Little sound needle */}
              <div className="absolute w-2 h-2 rounded-full bg-white top-5 left-5 opacity-40" />
            </motion.div>

            {/* Simulated pickup arm (static/animated angle) */}
            <div className={`absolute top-0 -right-4 w-12 h-20 origin-top transition-transform duration-500 pointer-events-none ${
              isPlaying ? "rotate-15" : "rotate-0 text-stone-500"
            }`}>
              <div className="w-2 h-16 bg-stone-500 rounded-full ml-5" />
              <div className="w-4 h-4 bg-stone-600 rounded-xs mt-1 shadow-sm" />
            </div>
          </div>

          <div className="mt-5 text-center">
            <span className="text-[10px] font-mono tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
              <Headphones className="w-3.5 h-3.5" /> Estudiar Audiodidáctico
            </span>
            <p className="text-[11px] text-stone-400 mt-2 font-mono">
              Soporta Texto-A-Voz (TTS) en Español
            </p>
          </div>
        </div>

        {/* Right Side: Track details and Player controls */}
        <div className="lg:col-span-8 space-y-5">
          <div>
            <span className="text-xs font-mono text-amber-500 font-bold">
              PISTA {currentTrackIndex + 1} DE {AUDIO_TRACKS.length} • {track.narrator}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-100 mt-1">
              {track.title}
            </h3>
            <p className="text-xs text-stone-400 font-sans mt-1">
              {track.description}
            </p>
          </div>

          {/* Subtitles/Transcript Viewer (Dynamic Highlight preview) */}
          <div className="relative bg-stone-950/70 rounded-xl border border-stone-850 p-4 max-h-[140px] overflow-y-auto">
            <h4 className="text-[10px] font-mono text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 sticky top-0 bg-stone-950">
              <Sparkles className="w-3 h-3 text-amber-500" /> Transcripción de Audio
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-sans font-medium">
              {track.audioText}
            </p>
          </div>

          {/* Progress Slider (Interactive interface) */}
          <div className="space-y-1.5">
            <div className="relative h-1.5 w-full bg-stone-800 rounded-full cursor-pointer overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-amber-500 transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="flex justify-between items-center text-[10px] font-mono text-stone-400">
              <span>0:00</span>
              <span className="text-amber-400">
                {isPlaying ? `${Math.floor(progress)}% Narrado` : "Haga click en Play para iniciar"}
              </span>
              <span>100% Completo</span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            
            {/* Speed Selector */}
            <button 
              onClick={changeSpeed}
              className="px-3 py-1.5 rounded-lg bg-stone-800/60 border border-stone-750 hover:bg-stone-700 hover:text-amber-400 transition-all text-xs font-mono cursor-pointer flex items-center gap-1"
            >
              {playbackSpeed}x Velocidad
            </button>

            {/* Play controls */}
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrevTrack}
                aria-label="Pista Anterior"
                className="p-2.5 rounded-full bg-stone-800 border border-stone-700 hover:bg-stone-700 hover:text-amber-400 transition-all cursor-pointer"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button 
                onClick={handlePlayPause}
                aria-label={isPlaying ? "Pausar" : "Escuchar Narración"}
                className="p-4 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-all shadow-lg hover:scale-105 cursor-pointer spin-hover"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>

              <button 
                onClick={handleNextTrack}
                aria-label="Siguiente Pista"
                className="p-2.5 rounded-full bg-stone-800 border border-stone-700 hover:bg-stone-700 hover:text-amber-400 transition-all cursor-pointer"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            {/* Reset Tracker */}
            <button
              onClick={handleStop}
              className="px-3 py-1.5 rounded-lg bg-stone-800/60 border border-stone-750 hover:bg-stone-700 hover:text-red-400 transition-all text-xs font-mono cursor-pointer flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reiniciar
            </button>

          </div>

          {/* Info Notice about Google TTS support */}
          <div className="p-3 bg-amber-500/5 rounded-lg border border-amber-500/10 flex gap-2.5 items-start">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[10px] text-stone-400 leading-relaxed font-sans">
              La Ley del Proceso requiere asimilación activa. <strong className="text-stone-300">Este reproductor utiliza la síntesis de voz nativa de su navegador para leer la transcripción.</strong> Asegúrese de tener el volumen encendido y habilitar las alertas si es necesario.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
