
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
    } else {
      // Optional: remove active class when element is out of view for re-animation
      // reveals[i].classList.remove('active');
    }
  }
  
  // Handle parallax elements
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach((element: Element) => {
    const scrollPosition = window.pageYOffset;
    const speed = parseFloat((element as HTMLElement).dataset.speed || '0.5');
    (element as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
  });
  
  // Handle mouse trail elements
  const trailElements = document.querySelectorAll('.mouse-trail');
  trailElements.forEach((element: Element) => {
    (element as HTMLElement).addEventListener('mousemove', (e: MouseEvent) => {
      const rect = (element as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (element as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (element as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  });
};

// Utility function to trigger animations manually (can be used for on-demand animations)
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

// Mouse spotlight effect for sections
export const setupMouseSpotlight = () => {
  const spotlightElements = document.querySelectorAll('.spotlight-section');
  
  spotlightElements.forEach((section: Element) => {
    const spotlight = document.createElement('div');
    spotlight.className = 'spotlight-effect';
    (section as HTMLElement).appendChild(spotlight);
    
    (section as HTMLElement).addEventListener('mousemove', (e: MouseEvent) => {
      const rect = (section as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;
    });
    
    (section as HTMLElement).addEventListener('mouseenter', () => {
      spotlight.style.opacity = '1';
    });
    
    (section as HTMLElement).addEventListener('mouseleave', () => {
      spotlight.style.opacity = '0';
    });
  });
};
