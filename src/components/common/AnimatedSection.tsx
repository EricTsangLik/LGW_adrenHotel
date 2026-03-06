import { useEffect, useRef, useState, type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'none';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we don't need to observe anymore
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    
    switch (direction) {
      case 'left': return '-translate-x-20 opacity-0';
      case 'right': return 'translate-x-20 opacity-0';
      case 'up': return 'translate-y-20 opacity-0';
      case 'none': return 'opacity-0';
      default: return 'translate-y-20 opacity-0';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${getTransformClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
