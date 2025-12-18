import { useEffect, useRef } from "react";

const useScrollReveal = ({
  threshold = 0.2,
  root = null,
  rootMargin = "0px",
  once = true,
} = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    // Ensure rootMargin is in px or % format (not rem)
    // IntersectionObserver only accepts px or % values
    let validRootMargin = "0px";
    
    if (rootMargin && typeof rootMargin === 'string') {
      // Convert any rem values to px (1rem = 16px)
      let processedMargin = rootMargin.trim();
      if (processedMargin.includes('rem')) {
        processedMargin = processedMargin.replace(/([\d.-]+)rem/g, (match, remValue) => {
          const pxValue = parseFloat(remValue) * 16;
          return pxValue + 'px';
        });
      }
      validRootMargin = processedMargin || "0px";
    }

    let observer;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              if (once) {
                observer.unobserve(entry.target);
              }
            } else if (!once) {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        {
          threshold,
          root,
          rootMargin: validRootMargin,
        }
      );

      observer.observe(node);
    } catch (error) {
      console.error(`Failed to create IntersectionObserver with rootMargin: "${validRootMargin}". Error:`, error);
      // Fallback: create observer with default "0px" rootMargin
      try {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                if (once) {
                  observer.unobserve(entry.target);
                }
              } else if (!once) {
                entry.target.classList.remove("is-visible");
              }
            });
          },
          {
            threshold,
            root,
            rootMargin: "0px",
          }
        );
        observer.observe(node);
      } catch (fallbackError) {
        console.error("Failed to create IntersectionObserver even with default rootMargin:", fallbackError);
        // Last resort: just add the class immediately
        node.classList.add("is-visible");
      }
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, root, rootMargin, once]);

  return elementRef;
};

export default useScrollReveal;

