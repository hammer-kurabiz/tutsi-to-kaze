
jQuery(document).ready(function ($) {

  if($('.dry-botanical-slide')){
    const swiper2 = new Swiper('.dry-botanical-slide', {
        effect: "fade",
        direction: 'horizontal',
        loop: true,
        speed: 3000,
        slidesPerView: 1,
        loopedSlides: 4,
        autoplay: { delay: 3000, disableOnInteraction: false, },
        breakpoints: {
            767: {
                effect: "fade",
                direction: 'horizontal',
                loop: true,
                speed: 3000,
                slidesPerView: 1,
                loopedSlides: 4,
                autoplay: { delay: 3000, disableOnInteraction: false, }
            },
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });
  }

  if($('.serviceAncBox')){
	/*==================================================
	スムーススクロール
	==================================================*/
	// #で始まるリンクをクリックしたら実行されます
	var headerHeight = $('#shopify-section-header').outerHeight();
	var urlHash = location.hash;
	$('a[href^="#"]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒で記述
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - headerHeight;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	if(urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function(){
			var target = $(urlHash);
			var position = target.offset().top - headerHeight;
			$('body,html').stop().animate({scrollTop:position}, 400);
		}, 100);
	}
  }

  	/*==================================================
    animation
    ==================================================*/
    //ロードしたときに既にanimationの要素が入る場合はすぐに-is-activeのクラスをつける
    $(".animation").each(function () {
        var position = $(this).offset().top;
        var windowHeight = $(window).height();
        if(position < windowHeight){
            $(this).addClass("-is-active");
        }
    });
    //スライド時にanimationの要素が入ったら-is-activeのクラスをつける
    $(window).on('scroll resize load', function () {
		var wid = window.innerWidth;
        $(".animation").each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
			if(wid <= 768){
				var plus = windowHeight * 0.1;
			}else{
				var plus = windowHeight * 0.3;
			}
            if(scroll > position - windowHeight + plus){
                $(this).addClass("-is-active");
            }
        });
    });
  
    $(window).on('load resize', function () {
        /* 定期LP */
      $('#order-summary').removeClass('order-summary--is-collapsed');
      $('#order-summary').addClass('order-summary--is-expanded');
      $('.order-summary-toggle').removeClass('order-summary-toggle--show');
         $('.order-summary-toggle').addClass('order-summary-toggle--hide');
      $(window).on('load resize', function () {

            var wid = window.innerWidth;

            headerHeight = $("#shopify-section-header").innerHeight();
               $("#PageContainer").css({
              "margin-top": headerHeight
              });
        });
      $('#basicBuy').on('click', function () {
                $(this).addClass('-current');
                $('#gokigenBuy').removeClass('-current');
                $('#subscBuy').attr("href", "https://tsuchikaze.jp/apps/subscription/buy?id=42625705378008&selling_plan=2079752408&quantity=1&is_cart=1");
                $('#subscLogin').attr("href", "https://tsuchikaze.jp/products/dry-304?variant=39375700820123");
        });
      $('#gokigenBuy').on('click', function () {
                $(this).addClass('-current');
                $('#basicBuy').removeClass('-current');
                $('#subscBuy').attr("href", "https://tsuchikaze.jp/apps/subscription/buy?id=42813634478296&selling_plan=2079752408&quantity=1&is_cart=1");
                $('#subscLogin').attr("href", "https://tsuchikaze.jp/products/dry-304?variant=39375700820123");
        });

        var wid = window.innerWidth;

        /*if (wid < 768) {
            const mySwiper = new Swiper('.swiper-container', {
                initialSlide: 0,
                speed: 1000,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                }
            });
        } else if (wid > 767) {
            const thumbClass = 'thumblist-item';
            const mytap = window.ontouchstart === null ? "touchstart" : "click";

            const mySwiper = new Swiper('.swiper-container', {
                speed: 1500,
                pagination: {
                    el: '.thumblist',
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        const slides = swiper.slides;
                        let html = '';
                        for (let i = 0; i < total; i++) {
                            if (current == i + 1) {
                                html = html + `<div class="${thumbClass} current" data-slideto="${i}">${slides[i].innerHTML}</div>`;
                            } else {
                                html = html + `<div class="${thumbClass}" data-slideto="${i}">${slides[i].innerHTML}</div>`;
                            }
                        }
                        return html;
                    }
                },
            });

            const clickThumbs = (() => {
                const thumbItems = document.getElementsByClassName(thumbClass);
                for (let i = 0; i < thumbItems.length; i++) {
                    thumbItems[i].addEventListener(mytap, ((e) => {
                        let index = e.currentTarget.dataset.slideto;
                        mySwiper.slideTo(index, 1500, true);
                        // autoplayオプションを使わない場合は、以下をコメントアウトをする
                        //setTimeout(mySwiper.autoplay.start, 3000);
                    }), false);
                }
            });

            clickThumbs();
            mySwiper.on('slideChange', clickThumbs);
        }*/

    });
  $(".section-template--15915712708824__main-padding .product__title").on("click", function () {
    mySwiper.slideTo(3, 1500, true);
    console.log('dete');
  });
  
  
	  objectFitImages();
  $('.product-introduction a ').each(function () {
    var productLink = $(this).find('img');
    var productTxtbox = $(this).find('.txtbox');
    var productBtn = $(this).hasClass('button--secondary');
    if(productLink.length == 0 && productBtn == false && productTxtbox.length == 0 ) {
      $(this).addClass('underline');
    }
  });
  $('.article-template__content a ').each(function () {
    var articeLink = $(this).find('img');
    var articeTxtbox = $(this).find('.txtbox');
    var articeBtn = $(this).hasClass('button--secondary');
    
    console.log(articeBtn);
    if(articeLink.length == 0 && articeBtn == false && articeTxtbox.length == 0) {
      $(this).addClass('underline');
    }
  });
  var topBtn = $('#pagetop');
	topBtn.hide();
	$(window).on('load scroll resize', function () {
		var wid = window.innerWidth;
		var header = $('header');
		var headerheight = header.innerHeight();
		if ($(this).scrollTop() > 100) {//スクロールが100に達したら
			topBtn.fadeIn();//ページトップのボタン表示
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
      const videoSp = $('.video-wrapper.-sp > video');
      function playVideos(videoSp) {
          const startPosition = $(window).scrollTop() + $(window).height();
          videoSp.each(function (index) {
              if (startPosition > $(this).offset().top && !$(this).hasClass('played')) {
                  $(this).get(0).play();
                  $(this).addClass('played'); 
              }
          });
      }
      if (videoSp.length) {
    		$(window).on('scroll', function () {
    				playVideos(videoSp);
    			  /*forConfirm(videoPc);*/
    				/*playSwitch = 1;*/
    		});
    	}
      const videoPc = $('.video-wrapper.-pc > video');
            function playVideos(videoPc) {
                const startPosition = $(window).scrollTop() + $(window).height();
                videoPc.each(function (index) {
                    if (startPosition > $(this).offset().top) {
                        $(this).get(0).play();
                    }
                });
            }
        if (videoPc.length) {
      		$(window).on('scroll', function () {
                  playVideos(videoPc);
      		});
      	}
      jQuery(window).on('load scroll resize', function () {
        if($('.parallax').length){
             var position =  $('.parallax').offset().top;
             var positionSp =  $('.parallax.visible-sp').offset().top;
             var scroll = $(window).scrollTop();
             var parentHeight = $('.parallax').innerHeight();
             var parentHeightSp = $('.parallax.visible-sp').innerHeight();
             if (position + parentHeight + 100 > scroll && position - parentHeight < scroll) {
                  $(".parallax video").css("visibility", "visible");
             } else {
                  $(".parallax video").css("visibility", "hidden");
             }
             if (positionSp + parentHeightSp + 100 > scroll && positionSp - parentHeightSp - 800 < scroll) {
                   $(".parallax.visible-sp video").css("visibility", "visible");
             } else {
                 $(".parallax.visible-sp video").css("visibility", "hidden");
             }
            /*$(".parallax video").each(function () {
              console.log('dete');
                var position = $(this).parent('.parallax').offset().top;
                var scroll = $(window).scrollTop();
                var parentHeight = $(this).parent('.parallax').innerHeight();
                if (position + parentHeight + 100 > scroll && position - parentHeight < scroll) {
                    $(this).css("visibility", "visible");
                } else {
                    $(this).css("visibility", "hidden");
                }
            });*/
        }
      });
});
