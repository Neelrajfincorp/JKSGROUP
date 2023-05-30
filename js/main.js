!function(e) {
    "use strict";
    function t() {
        e(window).scrollTop() >= 80 ? e(".navfix").addClass("sticky") : e(".navfix").removeClass("sticky")
    }
    (new WOW).init();
    var a = e("#main-nav")
      , s = e(".toggle")
      , i = {
        disableAt: !1,
        customToggle: s,
        levelSpacing: 10,
        navTitle: "Menu",
        levelTitles: !0,
        levelTitles: !0,
        labelClose: !1,
        levelTitleAsBack: !0,
        levelOpen: "expand",
        closeOnClick: !0,
        insertClose: !0,
        closeActiveLevel: !0,
        insertBack: !0
    };
    a.hcOffcanvasNav(i);
    e(function() {
        e(window).scroll(t),
        t()
    });
    var o = e("li.sbmenu");
    o.hover(function() {
        e(this).addClass("hover")
    }, function() {
        e(this).removeClass("hover")
    }),
    e(".video-link").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160
    }),
    e('[data-toggle="tooltip"]').tooltip();
    var l = e(".service-card-prb");
    l.owlCarousel({
        items: 4,
        loop: !0,
        autoplay: !0,
        margin: 20,
        nav: !1,
        dots: !1,
        autoplayTimeout: 3500,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        responsive: {
            0: {
                items: 1
            },
            520: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1600: {
                items: 3
            }
        }
    });
    var l = e(".testimonial-card-a");
    l.owlCarousel({
        items: 1,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 6e3,
        autoplayHoverPause: !0,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1400: {
                items: 1
            }
        }
    });
    var l = e(".video-testimonials");
    l.owlCarousel({
        items: 2,
        nav: !1,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 3500,
        smartSpeed: 1500,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            },
            1400: {
                items: 2
            }
        }
    });
    var l = e(".project-screens");
    l.owlCarousel({
        items: 4,
        loop: !0,
        autoplay: !0,
        margin: 20,
        nav: !1,
        dots: !1,
        autoplayTimeout: 3500,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        responsive: {
            0: {
                items: 1
            },
            520: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1600: {
                items: 3
            }
        }
    });
    var l = e(".porto-slide");
    l.owlCarousel({
        items: 1,
        loop: !0,
        autoplay: !0,
        margin: 10,
        nav: !1,
        dots: !0,
        stagePadding: 50,
        autoplayTimeout: 35e4,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            520: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 1,
                stagePadding: 0
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            },
            1600: {
                items: 1
            }
        }
    });
    var l = e(".single-slide");
    l.owlCarousel({
        items: 1,
        loop: !0,
        autoplay: !0,
        margin: 10,
        nav: !1,
        dots: !0,
        stagePadding: 100,
        autoplayTimeout: 3500,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            520: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 1,
                stagePadding: 0
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            },
            1600: {
                items: 1
            }
        }
    });
    var l = e(".bages-slider");
    l.owlCarousel({
        items: 4,
        loop: !0,
        autoplay: !0,
        centre: !0,
        margin: 20,
        nav: !1,
        dots: !1,
        autoplayTimeout: 4e3,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        responsive: {
            0: {
                items: 2
            },
            520: {
                items: 3
            },
            768: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 4
            },
            1600: {
                items: 4
            }
        }
    });
    var l = e(".logo-weworkfor");
    l.owlCarousel({
        items: 4,
        loop: !0,
        autoplay: !0,
        margin: 10,
        nav: !1,
        dots: !1,
        autoplayTimeout: 1800,
        autoplayHoverPause: !1,
        smartSpeed: 2e3,
        responsive: {
            0: {
                items: 3
            },
            520: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 5
            },
            1600: {
                items: 6
            }
        }
    });
    var l = e(".testimonial-card-b");
    l.owlCarousel({
        items: 1,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        dots: !0,
        dotsContainer: "#testimonials-avatar",
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1400: {
                items: 1
            }
        }
    }),
    e(".counter").counterUp({
        delay: 10,
        time: 2500
    }),
    e.scrollUp({
        animation: "fade",
        scrollImg: {
            active: !0,
            type: "background"
        }
    }),
    e(".card-list").imagesLoaded(function() {
        var t = e(".card-list").isotope({
            itemSelector: ".single-card-item",
            percentPosition: !0,
            masonry: {
                columnWidth: ".grid-sizer"
            }
        });
        e(".filter-menu").on("click", "li", function() {
            var a = e(this).attr("data-filter");
            t.isotope({
                filter: a
            })
        })
    }),
    e(".filter-menu li").on("click", function(t) {
        e(this).siblings(".is-checked").removeClass("is-checked"),
        e(this).addClass("is-checked"),
        t.preventDefault()
    }),
    e("[data-background]").each(function() {
        e(this).css("background-image", "url(" + e(this).attr("data-background") + ")")
    })
}(jQuery);

// ........................ Changes .........

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
