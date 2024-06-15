document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    const answer = question.nextElementSibling;

    if (question.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      question.querySelector('img').src = './assets/images/icon-minus.svg';
    }

    question.addEventListener('click', () => {
      faqQuestions.forEach((q) => {
        if (q !== question) {
          q.classList.remove('active');
          q.nextElementSibling.style.maxHeight = null;
          q.querySelector('img').src = './assets/images/icon-plus.svg';
        }
      });

      question.classList.toggle('active');

      if (question.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.querySelector('img').src = './assets/images/icon-minus.svg';
      } else {
        answer.style.maxHeight = null;
        question.querySelector('img').src = './assets/images/icon-plus.svg';
      }
    });
  });
});
