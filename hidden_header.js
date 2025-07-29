window.addEventListener("scroll", () => {
  const fixedNavbar = document.getElementById("fixedNavbar");
  const duplicate = document.getElementById("duplicateNavbar");

  const rect = duplicate.getBoundingClientRect();

  if (rect.bottom <= 0) {
    fixedNavbar.classList.remove("partial");
    fixedNavbar.classList.add("visible");
  } else {
    fixedNavbar.classList.remove("visible");
    fixedNavbar.classList.add("partial");
  }
});

// for modal
let sectionToScrollTo = null;

document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents default link jump
    sectionToScrollTo = link.getAttribute('data-section');
    // Trigger the dismiss manually after a tiny delay
    setTimeout(() => {
      const modal = bootstrap.Modal.getInstance(document.getElementById('navbarPopup'));
      modal.hide();
    }, 10);
  });
});

const modal = document.getElementById('navbarPopup');
modal.addEventListener('hidden.bs.modal', () => {
  if (sectionToScrollTo) {
    document.querySelector(sectionToScrollTo)?.scrollIntoView({ behavior: 'smooth' });
    sectionToScrollTo = null;
  }
});
