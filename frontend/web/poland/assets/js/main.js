jQuery(
    (function (s) {
        "use strict";
        s(".mean-menu").meanmenu({ meanScreenWidth: "991" }),
            s(window).on("scroll", function () {
                90 < s(this).scrollTop() ? s(".header-sticky").addClass("is-sticky") : s(".header-sticky").removeClass("is-sticky");
            });
        var a,
            i,
            n = s(".header-sticky");
        s(window).scroll(function () {
            var e = s(window).scrollTop(),
                t = n.height();
            a < (i = e) && t + t < e ? n.addClass("scrollUp") : i < a && !(e <= t) && n.removeClass("scrollUp"), (a = i);
        }),
        s(".mean-menu").meanmenu({ meanScreenWidth: "991" }),
            s(window).on("scroll", function () {
                80 < s(this).scrollTop() ? s(".mobile-nave").addClass("responsive-sticky") : s(".mobile-nave").removeClass("responsive-sticky");
            });
        var a,
            i,
            n = s(".header-sticky");
        s(window).scroll(function () {
            var e = s(window).scrollTop(),
                t = n.height();
            a < (i = e) && t + t < e ? n.addClass("scrollUp") : i < a && !(e <= t) && n.removeClass("scrollUp"), (a = i);
        }),
            s(".others-option .search-box i").on("click", function () {
                s(".search-overlay").toggleClass("search-overlay-active");
            }),
            s(".search-overlay-close").on("click", function () {
                s(".search-overlay").removeClass("search-overlay-active");
            }),
            s(".home-slides").owlCarousel({ loop: !0, nav: !0, dots: !0, autoplayHoverPause: !0, autoplay: !0, items: 1, autoHeight: !0, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"] }),
            s(".home-slides").on("translate.owl.carousel", function () {
                s(".main-banner-content .sub-title").removeClass("animated fadeInDown").css("opacity", "0"),
                    s(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0"),
                    s(".main-banner-content p").removeClass("animated fadeInUp").css("opacity", "0"),
                    s(".main-banner-content .default-btn").removeClass("animated fadeInLeft").css("opacity", "0"),
                    s(".main-banner-content .optional-btn, .main-banner-content .video-btn").removeClass("animated fadeInUp").css("opacity", "0");
            }),
            s(".home-slides").on("translated.owl.carousel", function () {
                s(".main-banner-content .sub-title").addClass("animated fadeInDown").css("opacity", "1"),
                    s(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1"),
                    s(".main-banner-content p").addClass("animated fadeInUp").css("opacity", "1"),
                    s(".main-banner-content .default-btn").addClass("animated fadeInLeft").css("opacity", "1"),
                    s(".main-banner-content .optional-btn, .main-banner-content .video-btn").addClass("animated fadeInUp").css("opacity", "1");
            }),
            s(".courses-categories-slides").owlCarousel({
                loop: !1,
                nav: !0,
                dots: !1,
                autoplayHoverPause: !0,
                autoplay: !0,
                navRewind: !1,
                margin: 30,
                navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
                responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 1200: { items: 4 } },
            }),
            s(".shorting").mixItUp(),
            s(".partner-slides").owlCarousel({
                loop: !0,
                nav: !1,
                dots: !1,
                autoplayHoverPause: !0,
                autoplay: !0,
                margin: 30,
                navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
                responsive: { 0: { items: 2 }, 576: { items: 3 }, 768: { items: 4 }, 1200: { items: 6 } },
            }),
            s(".courses-slides").owlCarousel({
                loop: !1,
                nav: !0,
                dots: !0,
                autoplayHoverPause: !0,
                autoplay: !0,
                navRewind: !1,
                margin: 30,
                navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
                responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
            }),
            s(".servie-slides").owlCarousel({
                loop: !0,
                nav: !0,
                dots: !1,
                autoplayHoverPause: !0,
                autoplay: !0,
                margin: 30,
                navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
                responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
            }),
            s(".blog-slides").owlCarousel({
                loop: !0,
                nav: !0,
                dots: !1,
                autoplayHoverPause: !1,
                autoplay: !1,
                margin: 30,
                navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
                responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
            }),
            s(".mycour-slides").owlCarousel({
                loop: !0,
                nav: !0,
                dots: !1,
                autoplayHoverPause: !0,
                autoplay: !0,
                margin: 30,
                navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
                responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
            }),
            s(".team-slides").owlCarousel({
                loop: !1,
                nav: !0,
                dots: !1,
                autoplayHoverPause: !0,
                autoplay: !0,
                navRewind: !1,
                margin: 30,
                navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
                responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 2 }, 1200: { items: 3 } },
            }),
            s(".mission-slides").owlCarousel({ loop: !0, nav: !0, dots: !1, autoplayHoverPause: !0, autoplay: !0, items: 1, navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"] }),
            s(".testimonials-slides").owlCarousel({
                loop: !0,
                nav: !1,
                dots: !0,
                autoplayHoverPause: !0,
                autoplay: !0,
                center: !0,
                navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
                responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 2 }, 1200: { items: 3 } },
            }),
            s("select").niceSelect(),
            s(".odometer").appear(function (e) {
                s(".odometer").each(function () {
                    var e = s(this).attr("data-count");
                    s(this).html(e);
                });
            }),
            setInterval(function () {
                var e, t, a, i;
                (e = new Date("September 20, 2025 17:00:00 PDT")),
                    (e = Date.parse(e) / 1e3),
                    (t = new Date()),
                    (a = e - (t = Date.parse(t) / 1e3)),
                    (i = Math.floor(a / 86400)),
                    (e = Math.floor((a - 86400 * i) / 3600)),
                    (t = Math.floor((a - 86400 * i - 3600 * e) / 60)),
                    (a = Math.floor(a - 86400 * i - 3600 * e - 60 * t)),
                    e < "10" && (e = "0" + e),
                    t < "10" && (t = "0" + t),
                    a < "10" && (a = "0" + a),
                    s("#days").html(i + "<span>Days</span>"),
                    s("#hours").html(e + "<span>Hours</span>"),
                    s("#minutes").html(t + "<span>Minutes</span>"),
                    s("#seconds").html(a + "<span>Seconds</span>");
            }, 0),
            document.getElementById("particles-js-circle-bubble") &&
                particlesJS("particles-js-circle-bubble", {
                    particles: {
                        number: { value: 300, density: { enable: !0, value_area: 800 } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
                        opacity: { value: 1, random: !0, anim: { enable: !0, speed: 1, opacity_min: 0, sync: !1 } },
                        size: { value: 3, random: !0, anim: { enable: !1, speed: 4, size_min: 0.3, sync: !1 } },
                        line_linked: { enable: !1, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                        move: { enable: !0, speed: 1, direction: "none", random: !0, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 600 } },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: { onhover: { enable: !0, mode: "bubble" }, onclick: { enable: !0, mode: "repulse" }, resize: !0 },
                        modes: {
                            grab: { distance: 400, line_linked: { opacity: 1 } },
                            bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
                            repulse: { distance: 400, duration: 0.4 },
                            push: { particles_nb: 4 },
                            remove: { particles_nb: 2 },
                        },
                    },
                    retina_detect: !0,
                }),
            document.getElementById("particles-js-circle-bubble-2") &&
                particlesJS("particles-js-circle-bubble-2", {
                    particles: {
                        number: { value: 100, density: { enable: !0, value_area: 800 } },
                        color: { value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"] },
                        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
                        opacity: { value: 1, random: !0, anim: { enable: !0, speed: 1, opacity_min: 0, sync: !1 } },
                        size: { value: 3, random: !0, anim: { enable: !1, speed: 4, size_min: 0.3, sync: !1 } },
                        line_linked: { enable: !1, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                        move: { enable: !0, speed: 1, direction: "none", random: !0, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 600 } },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: { onhover: { enable: !0, mode: "bubble" }, onclick: { enable: !0, mode: "repulse" }, resize: !0 },
                        modes: {
                            grab: { distance: 400, line_linked: { opacity: 1 } },
                            bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
                            repulse: { distance: 400, duration: 0.4 },
                            push: { particles_nb: 4 },
                            remove: { particles_nb: 2 },
                        },
                    },
                    retina_detect: !0,
                }),
            document.getElementById("particles-js-circle-bubble-3") &&
                particlesJS("particles-js-circle-bubble-3", {
                    particles: {
                        number: { value: 100, density: { enable: !0, value_area: 800 } },
                        color: { value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"] },
                        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
                        opacity: { value: 1, random: !0, anim: { enable: !0, speed: 1, opacity_min: 0, sync: !1 } },
                        size: { value: 3, random: !0, anim: { enable: !1, speed: 4, size_min: 0.3, sync: !1 } },
                        line_linked: { enable: !1, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                        move: { enable: !0, speed: 1, direction: "none", random: !0, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 600 } },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: { onhover: { enable: !0, mode: "bubble" }, onclick: { enable: !0, mode: "repulse" }, resize: !0 },
                        modes: {
                            grab: { distance: 400, line_linked: { opacity: 1 } },
                            bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
                            repulse: { distance: 400, duration: 0.4 },
                            push: { particles_nb: 4 },
                            remove: { particles_nb: 2 },
                        },
                    },
                    retina_detect: !0,
                }),
            document.getElementById("particles-js-circle-bubble-4") &&
                particlesJS("particles-js-circle-bubble-4", {
                    particles: {
                        number: { value: 100, density: { enable: !0, value_area: 800 } },
                        color: { value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"] },
                        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
                        opacity: { value: 1, random: !0, anim: { enable: !0, speed: 1, opacity_min: 0, sync: !1 } },
                        size: { value: 3, random: !0, anim: { enable: !1, speed: 4, size_min: 0.3, sync: !1 } },
                        line_linked: { enable: !1, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                        move: { enable: !0, speed: 1, direction: "none", random: !0, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 600 } },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: { onhover: { enable: !0, mode: "bubble" }, onclick: { enable: !0, mode: "repulse" }, resize: !0 },
                        modes: {
                            grab: { distance: 400, line_linked: { opacity: 1 } },
                            bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
                            repulse: { distance: 400, duration: 0.4 },
                            push: { particles_nb: 4 },
                            remove: { particles_nb: 2 },
                        },
                    },
                    retina_detect: !0,
                });
        var t = window.console || { log: function () {} },
            e = {
                url: "data-original",
                ready: function (e) {
                    t.log(e.type);
                },
                show: function (e) {
                    t.log(e.type);
                },
                shown: function (e) {
                    t.log(e.type);
                },
                hide: function (e) {
                    t.log(e.type);
                },
                hidden: function (e) {
                    t.log(e.type);
                },
                view: function (e) {
                    t.log(e.type);
                },
                viewed: function (e) {
                    t.log(e.type);
                },
            };
        s(".gallery-area")
            .on({
                ready: function (e) {
                    t.log(e.type);
                },
                show: function (e) {
                    t.log(e.type);
                },
                shown: function (e) {
                    t.log(e.type);
                },
                hide: function (e) {
                    t.log(e.type);
                },
                hidden: function (e) {
                    t.log(e.type);
                },
                view: function (e) {
                    t.log(e.type);
                },
                viewed: function (e) {
                    t.log(e.type);
                },
            })
            .viewer(e);
        function o(e, t, a) {
            (this.toRotate = t), (this.el = e), (this.loopNum = 0), (this.period = parseInt(a, 10) || 9e4), (this.txt = ""), this.tick(), (this.isDeleting = !1);
        }
        function l() {
            s(".newsletter-form").addClass("animated shake"),
                setTimeout(function () {
                    s(".newsletter-form").removeClass("animated shake");
                }, 1e3);
        }
        function r(e, t) {
            (e = e ? "validation-success" : "validation-danger"), s("#validator-newsletter").removeClass().addClass(e).text(t);
        }
        (o.prototype.tick = function () {
            var e = this.loopNum % this.toRotate.length,
                t = this.toRotate[e];
            this.isDeleting ? (this.txt = t.substring(0, this.txt.length - 1)) : (this.txt = t.substring(0, this.txt.length + 1)), (this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>");
            var a = this,
                e = 200 - 100 * Math.random();
            this.isDeleting && (e /= 2),
                this.isDeleting || this.txt !== t ? this.isDeleting && "" === this.txt && ((this.isDeleting = !1), this.loopNum++, (e = 500)) : ((e = this.period), (this.isDeleting = !0)),
                setTimeout(function () {
                    a.tick();
                }, e);
        }),
            (window.onload = function () {
                for (var e = document.getElementsByClassName("typewrite"), t = 0; t < e.length; t++) {
                    var a = e[t].getAttribute("data-type"),
                        i = e[t].getAttribute("data-period");
                    a && new o(e[t], JSON.parse(a), i);
                }
                var s = document.createElement("style");
                (s.type = "text/css"), (s.innerHTML = ".typewrite > .wrap { border-right: 4px solid #000000}"), document.body.appendChild(s);
            }),
            s(".slideshow-slides").owlCarousel({
                loop: !0,
                nav: !1,
                dots: !1,
                animateOut: "fadeOut",
                autoplayHoverPause: !1,
                autoplay: !0,
                smartSpeed: 400,
                mouseDrag: !1,
                autoHeight: !0,
                items: 1,
                navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
            }),
            s(".feedback-slides").owlCarousel({
                loop: !0,
                nav: !0,
                dots: !1,
                animateOut: "fadeOut",
                autoplayHoverPause: !0,
                autoplay: !0,
                mouseDrag: !1,
                items: 1,
                navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
            }),
            s(".popup-youtube").magnificPopup({ disableOn: 320, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
            s(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"),
            s(".tab ul.tabs li a").on("click", function (e) {
                var t = s(this).closest(".tab"),
                    a = s(this).closest("li").index();
                t.find("ul.tabs > li").removeClass("current"),
                    s(this).closest("li").addClass("current"),
                    t
                        .find(".tab-content")
                        .find("div.tabs-item")
                        .not("div.tabs-item:eq(" + a + ")")
                        .slideUp(),
                    t
                        .find(".tab-content")
                        .find("div.tabs-item:eq(" + a + ")")
                        .slideDown(),
                    e.preventDefault();
            }),
            s(".input-counter").each(function () {
                var t = jQuery(this),
                    a = t.find('input[type="text"]'),
                    e = t.find(".plus-btn"),
                    i = t.find(".minus-btn"),
                    s = a.attr("min"),
                    n = a.attr("max");
                e.on("click", function () {
                    var e = parseFloat(a.val());
                    (e = n <= e ? e : e + 1), t.find("input").val(e), t.find("input").trigger("change");
                }),
                    i.on("click", function () {
                        var e = parseFloat(a.val());
                        (e = e <= s ? e : e - 1), t.find("input").val(e), t.find("input").trigger("change");
                    });
            }),
            s(".slickslide").slick({
                dots: !0,
                speed: 500,
                fade: !1,
                slide: "li",
                slidesToShow: 1,
                autoplay: !0,
                autoplaySpeed: 4e3,
                prevArrow: !1,
                nextArrow: !1,
                responsive: [
                    {
                        breakpoint: 800,
                        breakpoint: 1200,
                        settings: { arrows: !1, centerMode: !1, centerPadding: "40px", variableWidth: !1, slidesToShow: 1, dots: !0 },
                        settings: { arrows: !1, centerMode: !1, centerPadding: "40px", variableWidth: !1, slidesToShow: 1, dots: !0 },
                    },
                ],
                customPaging: function (e, t) {
                    return '<button class="tab">' + s(".slick-thumbs li:nth-child(" + (t + 1) + ")").html() + "</button>";
                },
            }),
            s(".accordion")
                .find(".accordion-title")
                .on("click", function () {
                    s(this).toggleClass("active"), s(this).next().slideToggle("fast"), s(".accordion-content").not(s(this).next()).slideUp("fast"), s(".accordion-title").not(s(this)).removeClass("active");
                }),
            s(".newsletter-form")
                .validator()
                .on("submit", function (e) {
                    e.isDefaultPrevented() ? (l(), r(!1, "Please enter your email correctly.")) : e.preventDefault();
                }),
            s(".newsletter-form").ajaxChimp({
                url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
                callback: function (e) {
                    "success" === e.result
                        ? (s(".newsletter-form")[0].reset(),
                          r(!0, "Thank you for subscribing!"),
                          setTimeout(function () {
                              s("#validator-newsletter").addClass("hide");
                          }, 4e3))
                        : l();
                },
            }),
            s(window).on("scroll", function () {
                var e = s(window).scrollTop();
                300 < e && s(".go-top").addClass("active"), e < 300 && s(".go-top").removeClass("active");
            }),
            s(".go-top").on("click", function () {
                s("html, body").animate({ scrollTop: "0" }, 500);
            }),
            s(".health-coaching-banner-slides").owlCarousel({
                loop: !0,
                nav: !0,
                dots: !1,
                autoplayHoverPause: !0,
                autoplay: !0,
                items: 1,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                navText: ["<i class='flaticon-arrows'></i>", "<i class='flaticon-right-arrow'></i>"],
            }),
            s(".feedback-slides-two").owlCarousel({
                loop: !0,
                nav: !1,
                dots: !0,
                autoplayHoverPause: !0,
                autoplay: !0,
                animateOut: "fadeOut",
                autoHeight: !0,
                items: 1,
                navText: ["<i class='flaticon-arrows'></i>", "<i class='flaticon-right-arrow'></i>"],
            }),
            s(".gym-home-slides").owlCarousel({
                loop: !0,
                nav: !0,
                dots: !0,
                autoplayHoverPause: !0,
                autoplay: !0,
                items: 1,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                autoHeight: !0,
                navText: ["<i class='flaticon-arrows'></i>", "<i class='flaticon-right-arrow'></i>"],
            }),
            s(".gym-home-slides").on("translate.owl.carousel", function () {
                s(".gym-banner-content .sub-title").removeClass("animated fadeInDown").css("opacity", "0"),
                    s(".gym-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0"),
                    s(".gym-banner-content p").removeClass("animated fadeInUp").css("opacity", "0"),
                    s(".gym-banner-content .default-btn").removeClass("animated fadeInLeft").css("opacity", "0");
            }),
            s(".gym-home-slides").on("translated.owl.carousel", function () {
                s(".gym-banner-content .sub-title").addClass("animated fadeInDown").css("opacity", "1"),
                    s(".gym-banner-content h1").addClass("animated fadeInUp").css("opacity", "1"),
                    s(".gym-banner-content p").addClass("animated fadeInUp").css("opacity", "1"),
                    s(".gym-banner-content .default-btn").addClass("animated fadeInLeft").css("opacity", "1");
            }),
            s(window).on("load", function () {
                s(".preloader").addClass("preloader-deactivate");
            });
    })(jQuery)
);
