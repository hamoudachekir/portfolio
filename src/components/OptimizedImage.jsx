import { useState } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  fallback = '/placeholder.jpg',
  lazy = true,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Convert Unsplash URLs to optimized versions
  const getOptimizedSrc = (originalSrc) => {
    if (originalSrc.includes('unsplash.com')) {
      // Add optimization parameters: auto format, quality 80, progressive
      const optimizedUrl = originalSrc.includes('?') 
        ? `${originalSrc}&auto=format&fit=crop&q=80&ixlib=rb-4.0.3`
        : `${originalSrc}?auto=format&fit=crop&q=80&ixlib=rb-4.0.3`;
      return optimizedUrl;
    }
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
      )}
      
      {/* Main image */}
      <motion.img
        src={hasError ? fallback : optimizedSrc}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...props}
      />
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <span className="text-gray-400 text-sm">Image not available</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;