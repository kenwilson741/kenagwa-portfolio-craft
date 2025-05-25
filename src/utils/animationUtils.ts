
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
};

// Utility function to trigger animations manually
export const triggerAnimation = (element: HTMLElement, animationClass: string, delay: number = 0) => {
  setTimeout(() => {
    element.classList.add(animationClass);
  }, delay);
};

// Add smooth scrolling behavior for anchor links
export const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href') || '');
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
};
