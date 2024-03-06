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


// function toggle(){                 Code to make more button expand
//   var blur = document.getElementsByClassName('blur');
//   blur.classList.toggle('active')
// }