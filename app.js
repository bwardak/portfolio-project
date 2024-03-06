const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
  });
});




const scrollElements = document.querySelectorAll('.scroll-fade');
scrollElements.forEach((el) => observer.observe(el));


const toggle = () =>{                // Code to make more button expand
  const blur = document.getElementById('blur');
  blur.classList.toggle('active');

  const popup__projectone = document.getElementById('popup__projectone');
  popup__projectone.classList.toggle("active");
}

const toggle2 = () => {
  // Code to make more button expand
  const blur = document.getElementById('blur');
  blur.classList.toggle('active');

  const popup__buttonone = document.getElementById('popup__buttonone');
  popup__buttonone.classList.toggle('active');
};