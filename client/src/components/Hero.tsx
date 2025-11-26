"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightCircle, ArrowRightCircleIcon, ArrowRightIcon, ArrowRightToLine, ChevronDown, Sparkles, Zap } from "lucide-react";
import { useSound } from "@/hooks/use-sound";
import { ArrowUp } from "lucide-react";
import { useRef } from 'react';
import VariableProximity from './VariableProximity';

export function Hero() {
  const { play } = useSound();
  const containerRef = useRef(null);
  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses");
    coursesSection?.scrollIntoView({ behavior: "smooth" });
    play("click");
  };

  return (
    <section className="font-tech relative min-h-screen flex items-center justify-center overflow-hidden pt-20 font-mono" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-purple rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 left-0 text-[10rem] font-tech font-bold text-foreground/[0.05] select-none pointer-events-none translate-y-[-8rem]">
        NEXT
      </div>
      <div className="absolute bottom-4/4 right-0 text-[10rem] font-tech font-bold text-foreground/[0.05] select-none pointer-events-none translate-y-[10rem]">
        GEN
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      style={{
        marginTop:50,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-neon-purple" />
          <span className="text-sm font-medium">Next-Gen STEM Education</span>
        </motion.div>

        <motion.h1
          className="font-display font-extrabold mb-6 leading-tight px-4"
          style={{
            fontSize: 'clamp(2rem, 8vw, 6rem)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="text-hero-title"
        >
          <span className="font-tech bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent block">
            Ignite Curiosity.
          </span>
          <span className="font-tech text-foreground block">Build The Future.</span>
        </motion.h1>

        <motion.p
          className="font-tech text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="text-hero-subtitle"
        >
         
            <div
            ref={containerRef}
            style={{position: 'relative'}}
            >
              <VariableProximity
                label={'BlackMonkey transforms kids into creators through hands-on STEM courses. From paper circuits to autonomous drones, we make learning unreal.'}
                className={'variable-proximity-demo'}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
              />
            </div>
        </motion.p>

        <motion.div
          className="font-tech flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-cyan transition-all duration-300 shadow-lg shadow-neon-purple/50 hover:shadow-neon-cyan/50"
            data-testid="button-explore-courses"
            onClick={scrollToCourses}
            onMouseEnter={() => play("hover")}
          >
            <Zap className="w-5 h-5 mr-2" />
            Explore Courses
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 hover:border-neon-purple hover:text-neon-purple transition-all duration-300"
            data-testid="button-watch-demo"
            onMouseEnter={() => play("hover")}
          >
            BlackMonkey Lab<ArrowRightIcon className="h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          data-testid="button-scroll-indicator"
        >
          <button
            onClick={scrollToCourses}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors bg-transparent border-0 p-0"
            aria-label="Scroll to courses"
          >
            <ChevronDown size={42} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
