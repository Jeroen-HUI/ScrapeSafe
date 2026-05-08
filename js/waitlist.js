(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var cfg = window.SCRAPESAFE_SITE || {};
    var url = (cfg.supabaseUrl && String(cfg.supabaseUrl).trim()) || "";
    var key = (cfg.supabaseAnonKey && String(cfg.supabaseAnonKey).trim()) || "";
    var table =
      (cfg.waitlistTable && String(cfg.waitlistTable).trim()) ||
      "waitlist_scrapesafe";

    var form = document.getElementById("waitlist-form");
    var msgEl = document.getElementById("waitlist-message");
    var hintEl = document.querySelector("[data-waitlist-config-hint]");
    var submitBtn = document.getElementById("waitlist-submit");

    if (!form || !msgEl) return;

    function getCreateClient() {
      var g = window.supabase;
      if (!g) return null;
      if (typeof g.createClient === "function") return g.createClient.bind(g);
      if (g.default && typeof g.default.createClient === "function") {
        return g.default.createClient.bind(g.default);
      }
      return null;
    }

    function showMsg(text, kind) {
      msgEl.textContent = text;
      msgEl.hidden = false;
      msgEl.className = "form-message form-message--" + (kind || "info");
    }

    function hideMsg() {
      msgEl.hidden = true;
      msgEl.textContent = "";
      msgEl.className = "form-message";
    }

    var createClient = getCreateClient();
    var ready = Boolean(url && key && createClient);

    if (!ready) {
      if (hintEl) hintEl.hidden = false;
      if (submitBtn) submitBtn.disabled = true;
      return;
    }

    if (hintEl) hintEl.hidden = true;

    var supabase = createClient(url, key);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      hideMsg();

      var nameInput = document.getElementById("waitlist-name");
      var emailInput = document.getElementById("waitlist-email");
      var name = nameInput && nameInput.value.trim();
      var email = emailInput && emailInput.value.trim();

      if (!name || !email) {
        showMsg("Please add your name and email.", "error");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Joining…";
      }

      supabase
        .from(table)
        .insert([
          {
            name: name,
            email: email,
            created_at: new Date().toISOString(),
          },
        ])
        .select()
        .then(function (res) {
          var err = res.error;
          if (err) {
            if (err.code === "23505") {
              showMsg("That email is already on the list.", "error");
            } else {
              showMsg("Something went wrong. Try again in a moment.", "error");
            }
            return;
          }
          showMsg("You are on the list. We will be in touch.", "success");
          form.reset();
        })
        .catch(function () {
          showMsg("Something went wrong. Try again in a moment.", "error");
        })
        .then(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Join waitlist";
          }
        });
    });
  });
})();
