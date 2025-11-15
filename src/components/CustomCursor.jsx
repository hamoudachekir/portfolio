import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const haloX = useSpring(mouseX, { stiffness: 140, damping: 20, mass: 0.7 });
  const haloY = useSpring(mouseY, { stiffness: 140, damping: 20, mass: 0.7 });
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 28, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 28, mass: 0.4 });
  const badgeX = useSpring(mouseX, { stiffness: 80, damping: 16, mass: 1 });
  const badgeY = useSpring(mouseY, { stiffness: 80, damping: 16, mass: 1 });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Soft halo following the pointer */}
      <motion.div
        className="pointer-events-none fixed z-[9997] h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-pink-500/20 blur-2xl mix-blend-screen"
        style={{ x: haloX, y: haloY, translateX: '-50%', translateY: '-50%' }}
      />

      {/* Precision ring that sits with the native cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9998] flex h-8 w-8 items-center justify-center"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="h-6 w-6 rounded-full border border-white/20 bg-transparent shadow-[0_0_25px_rgba(99,102,241,0.35)]">
          <div className="mx-auto mt-1 h-4 w-4 rounded-full border border-purple-400/70" />
        </div>
      </motion.div>

      {/* Dev badge that trails slightly behind to emphasize the profile */}
      <motion.div
        className="pointer-events-none fixed z-[9996]"
        style={{ x: badgeX, y: badgeY, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="glass flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-100/70 shadow-[0_8px_30px_rgba(15,23,42,0.45)]">
          <span className="text-blue-300">&lt;dev</span>
          <span className="text-purple-300">pointer/&gt;</span>
        </div>
      </motion.div>
    </>
  );
}
