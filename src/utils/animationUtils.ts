
export const handleScrollAnimation = () => {
  const reveals = document.querySelectorAll('.reveal');
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
      
      // For skill bars
      const progressBars = reveals[i].querySelectorAll('.skill-progress');
      progressBars.forEach((bar: Element) => {
        const width = (bar as HTMLElement).dataset.width || '0%';
        setTimeout(() => {
          (bar as HTMLElement).style.width = width;
        }, 300);
      });
      
      // For staggered animations
      const staggeredItems = reveals[i].querySelectorAll('.stagger-item');
      staggeredItems.forEach((item: Element, index: number) => {
        setTimeout(() => {
          (item as HTMLElement).classList.add('active');
        }, 150 * index);
      });
    }
  }
  
  // Handle parallax elements
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach((element: Element) => {
    const scrollPosition = window.pageYOffset;
    const speed = parseFloat((element as HTMLElement).dataset.speed || '0.5');
    (element as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
  });
};

// Utility function to trigger animations manually (can be used for on-demand animations)
export const triggerAnimation = (element: HTMLElement, animationClass: string, delay: number = 0) => {
  setTimeout(() => {
    element.classList.add(animationClass);
  }, delay);
};
