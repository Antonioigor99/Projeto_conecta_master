$(function(){
    $('.logo__animate').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Intervalo de 2 segundos entre cada transição
        arrows: false,
        infinite:true,
        speed: 10000, // Velocidade da transição entre slides (em milissegundos)
        cssEase: 'linear',
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }]
        
    })
    $('.carousel').carousel({
        interval: 5000
    })
})
