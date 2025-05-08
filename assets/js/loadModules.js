async function loadHTMLModule(filePath, targetElementId, callback) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      console.error(`Failed to load ${filePath}: ${response.statusText}`);
      document.getElementById(
        targetElementId
      ).innerHTML = `<p>Error loading ${filePath.split("/").pop()}.</p>`;
      return;
    }
    const html = await response.text();
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.innerHTML = html;
      if (callback) {
        callback();
      }
    } else {
      console.error(`Target element #${targetElementId} not found.`);
    }
  } catch (error) {
    console.error(`Error loading HTML module ${filePath}:`, error);
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.innerHTML = `<p>Error loading module.</p>`;
    }
  }
}

function initializeHeaderScripts() {
  setActiveNavLink();
  if (typeof $ !== "undefined" && $.fn.dropdown) {
    $('#main-header-placeholder [data-toggle="dropdown"]').dropdown();
  }
}

function initializeFooterScripts() {
  if (typeof $ !== "undefined" && $.fn.tooltip) {
    $('#main-footer-placeholder [data-toggle="tooltip"]').tooltip();
  }
}

function initializeFloatingNewsletterScripts() {
  if (typeof $ !== "undefined") {
    const icon1 = $("#icon1-floating");
    const icon = $("#icon-floating");
    const mceEmail = $("#mce-EMAIL-floating");
    const flSubmit = $("#floating-newsletter-placeholder .fl-submit"); // More specific selector
    const floatingContainer = $("#floating-newsletter-placeholder .floating");

    icon1.off("click").on("click", function () {
      icon.show();
      icon1.hide();
      mceEmail.show();
      flSubmit.show();
      floatingContainer.addClass("expanded");
    });

    icon.off("click").on("click", function () {
      icon1.show();
      icon.hide();
      mceEmail.hide();
      flSubmit.hide();
      floatingContainer.removeClass("expanded");
    });

    if ($.fn.tooltip) {
      $('#floating-newsletter-placeholder [data-toggle="tooltip"]').tooltip();
    }
  }
}

function setActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavItems = document.querySelectorAll(
    "#main-header-placeholder .nav-item"
  );
  const allDropdownItems = document.querySelectorAll(
    "#main-header-placeholder .dropdown-item"
  );

  allNavItems.forEach((item) => item.classList.remove("active"));
  allDropdownItems.forEach((item) => item.classList.remove("active"));

  let activeSetInDropdown = false;

  allDropdownItems.forEach((item) => {
    const itemHref = item.getAttribute("href");
    if (itemHref) {
      const itemPath = itemHref.split("/").pop() || "index.html";
      if (itemPath === currentPath) {
        item.classList.add("active");
        const parentDropdownNavItem = item.closest(".nav-item.dropdown");
        if (parentDropdownNavItem) {
          parentDropdownNavItem.classList.add("active");
        }
        activeSetInDropdown = true;
      }
    }
  });

  if (!activeSetInDropdown) {
    allNavItems.forEach((navItem) => {
      if (!navItem.classList.contains("dropdown")) {
        const link = navItem.querySelector(".nav-link");
        if (link) {
          const linkHref = link.getAttribute("href");
          if (linkHref) {
            const linkPath = linkHref.split("/").pop() || "index.html";
            if (linkPath === currentPath) {
              navItem.classList.add("active");
            }
          }
        }
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTMLModule(
    "header.html",
    "main-header-placeholder",
    initializeHeaderScripts
  );
  loadHTMLModule(
    "footer.html",
    "main-footer-placeholder",
    initializeFooterScripts
  );
  loadHTMLModule(
    "floating-newsletter.html",
    "floating-newsletter-placeholder",
    initializeFloatingNewsletterScripts
  );
});
