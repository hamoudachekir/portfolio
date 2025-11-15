import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const DeveloperCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkIfMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024; // Less than 1024px (tablet/mobile)
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    // Check on mount and on resize
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest('button, a, input, textarea, [role="button"], .cursor-pointer')
      setIsHovering(!!isInteractive)
    }

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Don't render custom cursor on mobile/tablet
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor using CSS-in-JS - only on desktop */}
      <style>{`
        @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-sky-400 rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-sky-400/60 rounded-full z-[9998] pointer-events-none"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(56, 189, 248, 1)" : "rgba(56, 189, 248, 0.6)",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      />

      {/* Code trail effect */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{
          x: mousePosition.x + 20,
          y: mousePosition.y - 10,
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-sky-400 border border-sky-400/30">
          {isClicking ? '{ clicked }' : '{ hover }'}
        </div>
      </motion.div>

      {/* Particle trail */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-blue-400 rounded-full z-[9996] pointer-events-none"
        style={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        animate={{
          scale: [1, 1.5, 0],
          opacity: [0.8, 0.4, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Binary trail */}
      <motion.div
        className="fixed top-0 left-0 z-[9995] pointer-events-none font-mono text-xs text-sky-400/40"
        style={{
          x: mousePosition.x - 40,
          y: mousePosition.y + 20,
        }}
        animate={{
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        01101100
      </motion.div>
    </>
  )
}

export default DeveloperCursor