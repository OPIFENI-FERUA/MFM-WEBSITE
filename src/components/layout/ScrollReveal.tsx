import { useEffect } from "react";

const revealSelector = [
  "main > section:not([data-no-scroll-reveal])",
  "main section:not([data-no-scroll-reveal]) article",
  "main section:not([data-no-scroll-reveal]) li",
  "main section:not([data-no-scroll-reveal]) form",
  "main section:not([data-no-scroll-reveal]) [class*='grid'] > *",
].join(", ");

function isInViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.top < viewHeight && rect.bottom > 0;
}

function ScrollReveal() {
  useEffect(() => {
    const registeredElements = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      },
    );

    const registerElements = () => {
      const elements =
        document.querySelectorAll<HTMLElement>(revealSelector);

      elements.forEach((element, index) => {
        if (registeredElements.has(element)) return;
        if (element.closest("[data-no-scroll-reveal]")) return;

        registeredElements.add(element);

        element.classList.add("scroll-reveal");
        element.classList.add(
          index % 2 === 0
            ? "scroll-reveal-left"
            : "scroll-reveal-right",
        );
        element.style.setProperty(
          "--scroll-reveal-delay",
          `${(index % 4) * 25}ms`,
        );

        if (isInViewport(element)) {
          element.classList.add("scroll-reveal-visible");
          return;
        }

        observer.observe(element);
      });
    };

    registerElements();

    const mutations = new MutationObserver(() => {
      registerElements();
    });

    mutations.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}

export default ScrollReveal;
