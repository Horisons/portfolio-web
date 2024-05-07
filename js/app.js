$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});

$(document).ready(function() {
  // Saat tombol "Back to Top" diklik
  $('#backToTopBtn').click(function() {
      // Animasi scroll ke bagian "Home" dalam waktu 800 milidetik
      $('html, body').animate({scrollTop : $('#home').offset().top},800);
      return false;
  });

  // Saat pengguna menggulir halaman
  $(window).scroll(function() {
      // Jika posisi pengguliran lebih besar dari tinggi halaman, tampilkan tombol "Back to Top", jika tidak, sembunyikan
      if ($(this).scrollTop() > $(window).height()) {
          $('#backToTopBtn').addClass('show');
      } else {
          $('#backToTopBtn').removeClass('show');
      }
  });
});