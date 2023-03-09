$('.page-scroll').on('click',function(e){
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elmen
    var elemenTujuan = $(tujuan);
    // console.log(elemenTujuan.offset().top);
    
    // pindahkan scroll
    // $(window).scrollTop(elemenTujuan.offset().top-50);
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top-50
    }, 800, 'swing');
 
    e.preventDefault();
});

function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["email"].value;
    if (x == "" || y=="") {
      return false;
    }
  }