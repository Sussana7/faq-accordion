const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const question = faq.querySelector('.question');
    const answer = faq.querySelector('p');
    const icon = question.querySelector('img');
  
    question.addEventListener('click', () => {
      const isOpen = answer.classList.toggle('open');
  
      // this toggles the icon
      // If isOpen is true → show the minus icon
      // If isOpen is false → show the plus icon
      icon.src = isOpen
        ? 'assets/images/icon-minus.svg'
        : 'assets/images/icon-plus.svg';
    });
  });
  