import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export const AnimatedContainer = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Retrasar la activación de la animación por 2 segundos
          setTimeout(() => {
            setInView(true);
            observer.unobserve(ref.current);
          }, 2000); // 2 segundos de retraso
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const directions = {
    vertical: "Y",
    horizontal: "X",
  };

  const springProps = useSpring({
    from: {
      transform: `translate${directions[direction]}(${
        reverse ? `${distance}px` : `-${distance}px`
      })`, // Ajuste para animación ascendente
    },
    to: inView
      ? { transform: `translate${directions[direction]}(0px)` }
      : `translate${directions[direction]}(${
          reverse ? `${distance}px` : `-${distance}px`
        })`,
    config: { tension: 50, friction: 25 },
  });

  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};
