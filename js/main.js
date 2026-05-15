(function () {
  "use strict";

  var cfg = window.SCRAPESAFE_SITE || {};

  function setGoogleStoreButton(el) {
    if (!el) return;
    var configured =
      cfg.playStoreUrl && String(cfg.playStoreUrl).trim();
    var initial = el.getAttribute("href") || "";
    var url =
      configured ||
      (/^https?:\/\//i.test(initial) ? initial.trim() : "");
    if (url) {
      el.href = url;
      el.removeAttribute("aria-disabled");
      el.classList.remove("btn-store--placeholder");
      el.removeAttribute("title");
    } else {
      el.href = "#download";
      el.setAttribute("aria-disabled", "true");
      el.classList.add("btn-store--placeholder");
      el.title = "Google Play link not configured";
    }
  }

  function setAppleStoreButton(el) {
    if (!el) return;
    var configured =
      cfg.appStoreUrl && String(cfg.appStoreUrl).trim();
    var initial = el.getAttribute("href") || "";
    var url =
      configured ||
      (/^https?:\/\//i.test(initial) ? initial.trim() : "");
    if (url) {
      el.href = url;
      el.removeAttribute("aria-disabled");
      el.classList.remove("btn-store--placeholder", "btn-store--soon");
      el.removeAttribute("title");
    } else {
      el.href = "#download";
      el.setAttribute("aria-disabled", "true");
      el.classList.add("btn-store--placeholder");
      el.title = "App Store link not configured";
    }
  }

  function syncGoogleButton(fromId, toId) {
    var from = document.getElementById(fromId);
    var to = document.getElementById(toId);
    if (!from || !to) return;
    to.href = from.href;
    if (from.getAttribute("aria-disabled") === "true") {
      to.setAttribute("aria-disabled", "true");
    } else {
      to.removeAttribute("aria-disabled");
    }
    to.title = from.getAttribute("title") || "";
    to.classList.toggle(
      "btn-store--placeholder",
      from.classList.contains("btn-store--placeholder")
    );
  }

  setGoogleStoreButton(document.getElementById("store-google"));
  syncGoogleButton("store-google", "store-google-bottom");
  setGoogleStoreButton(document.getElementById("store-google-business"));

  setAppleStoreButton(document.getElementById("store-apple"));
  syncGoogleButton("store-apple", "store-apple-bottom");

  document.querySelectorAll(".js-open-email").forEach(function (a) {
    if (cfg.supportEmail) {
      a.href = "mailto:" + cfg.supportEmail;
    }
  });

  function btnLooksLive(btn) {
    return !!(btn && /^https?:\/\//i.test(btn.href || ""));
  }

  document.querySelectorAll("[data-store-hint]").forEach(function (el) {
    el.hidden = btnLooksLive(document.getElementById("store-google"));
  });
  document.querySelectorAll("[data-app-store-hint]").forEach(function (el) {
    el.hidden = btnLooksLive(document.getElementById("store-apple"));
  });

  function initCarousel(root) {
    if (!root) return;
    var slides = root.querySelectorAll(".carousel__slide");
    var prev = root.querySelector(".carousel__btn--prev");
    var next = root.querySelector(".carousel__btn--next");
    var dots = root.querySelectorAll(".carousel__dot");
    var status = root.querySelector(".carousel__status");
    var n = slides.length;
    if (n === 0) return;

    var i = 0;
    var prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var timer = null;

    function setActive(idx) {
      i = (idx + n) % n;

      if (n === 1) {
        slides.forEach(function (s) {
          s.classList.remove(
            "is-active",
            "is-prev",
            "is-next",
            "is-hidden"
          );
        });
        slides[0].classList.add("is-active");
        slides[0].setAttribute("aria-hidden", "false");
        var img0 = slides[0].querySelector("img");
        if (img0) {
          img0.setAttribute("tabindex", "0");
        }
        dots.forEach(function (d, j) {
          d.classList.toggle("is-active", j === 0);
          if (j === 0) {
            d.setAttribute("aria-current", "true");
          } else {
            d.removeAttribute("aria-current");
          }
        });
        if (status) {
          status.textContent = "Slide 1 of 1";
        }
        return;
      }

      var prevIdx = (i - 1 + n) % n;
      var nextIdx = (i + 1) % n;

      slides.forEach(function (s, j) {
        s.classList.remove("is-active", "is-prev", "is-next", "is-hidden");
        if (j === i) {
          s.classList.add("is-active");
          s.setAttribute("aria-hidden", "false");
        } else if (j === prevIdx) {
          s.classList.add("is-prev");
          s.setAttribute("aria-hidden", "true");
        } else if (j === nextIdx) {
          s.classList.add("is-next");
          s.setAttribute("aria-hidden", "true");
        } else {
          s.classList.add("is-hidden");
          s.setAttribute("aria-hidden", "true");
        }
        var im = s.querySelector("img");
        if (im) {
          im.setAttribute("tabindex", j === i ? "0" : "-1");
        }
      });

      dots.forEach(function (d, j) {
        d.classList.toggle("is-active", j === i);
        if (j === i) {
          d.setAttribute("aria-current", "true");
        } else {
          d.removeAttribute("aria-current");
        }
      });

      if (status) {
        status.textContent = "Slide " + (i + 1) + " of " + n;
      }
    }

    function go(delta) {
      setActive(i + delta);
    }

    function startAuto() {
      stopAuto();
      if (prefersReduced || n < 2) return;
      timer = window.setInterval(function () {
        go(1);
      }, 6500);
    }

    function stopAuto() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    if (prev) {
      prev.addEventListener("click", function () {
        stopAuto();
        go(-1);
        startAuto();
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        stopAuto();
        go(1);
        startAuto();
      });
    }

    dots.forEach(function (d, j) {
      d.addEventListener("click", function () {
        stopAuto();
        setActive(j);
        startAuto();
      });
    });

    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        stopAuto();
        go(-1);
        startAuto();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        stopAuto();
        go(1);
        startAuto();
      }
    });

    root.addEventListener("mouseenter", stopAuto);
    root.addEventListener("mouseleave", startAuto);
    root.addEventListener("focusin", stopAuto);
    root.addEventListener("focusout", startAuto);

    /* Swipe / drag on the image area (pointer events = touch + pen + mouse) */
    var surface = root.querySelector(".carousel__viewport") || root;
    var ptrStartX = 0;
    var ptrStartY = 0;
    var ptrDown = false;
    var ptrId = null;
    var SWIPE_MIN_PX = 48;

    surface.addEventListener(
      "pointerdown",
      function (e) {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        ptrDown = true;
        ptrId = e.pointerId;
        ptrStartX = e.clientX;
        ptrStartY = e.clientY;
        try {
          surface.setPointerCapture(e.pointerId);
        } catch (err) {}
      }
    );

    function finishSwipe(e) {
      if (!ptrDown || e.pointerId !== ptrId) return;
      ptrDown = false;
      ptrId = null;
      try {
        surface.releasePointerCapture(e.pointerId);
      } catch (err) {}
      var dx = e.clientX - ptrStartX;
      var dy = e.clientY - ptrStartY;
      if (n < 2) return;
      if (Math.abs(dx) < SWIPE_MIN_PX) return;
      if (Math.abs(dy) * 1.2 > Math.abs(dx)) return;
      stopAuto();
      if (dx > 0) {
        go(-1);
      } else {
        go(1);
      }
      startAuto();
    }

    surface.addEventListener("pointerup", finishSwipe);
    surface.addEventListener("pointercancel", function (e) {
      if (ptrDown && e.pointerId === ptrId) {
        ptrDown = false;
        ptrId = null;
      }
    });

    setActive(0);
    startAuto();
  }

  initCarousel(document.querySelector("[data-carousel]"));
})();
