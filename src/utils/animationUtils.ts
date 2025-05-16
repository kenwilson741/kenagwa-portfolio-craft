
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
    }
  }
};
