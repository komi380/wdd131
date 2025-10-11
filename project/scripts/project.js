// scripts/script.js
// Main file: menu management, form, events, filter, scroll, visit counter

(() => {
  // Utility: wait for DOM
  document.addEventListener('DOMContentLoaded', () => {
    // --- HAMBURGER MENU (responsive + icon animation)
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
        toggle.textContent = nav.classList.contains('show') ? '✖' : '☰';
      });

      // Close menu if link is clicked (mobile)
      nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          if (nav.classList.contains('show')) {
            nav.classList.remove('show');
            toggle.textContent = '☰';
          }
        });
      });
    }

    // --- REGISTRATION FORM (programs.html)
    const form = document.getElementById('registrationForm');
    const formMessage = document.getElementById('formMessage');
    if (form) {
      // Restore values from localStorage
      const saved = JSON.parse(localStorage.getItem('miladouForm')) || {};
      Object.keys(saved).forEach(k => {
        if (form[k]) form[k].value = saved[k];
      });

      // Auto-save on input
      form.addEventListener('input', () => {
        const data = {};
        Array.from(form.elements).forEach(el => {
          if (el.name) data[el.name] = el.value;
        });
        localStorage.setItem('miladouForm', JSON.stringify(data));
      });

      // Submit
      form.addEventListener('submit', e => {
        e.preventDefault();
        // Here you could send to a server or store in indexedDB
        localStorage.removeItem('miladouForm');
        if (formMessage) {
          formMessage.textContent = '✅ Thank you! Your registration has been recorded.';
          formMessage.style.color = 'green';
        }
        form.reset();
      });
    }

    // --- DYNAMIC EVENTS (index.html)
    const eventList = document.getElementById('eventList');
    if (eventList) {
      const events = [
        { title: 'Youth Tournament', date: '15 October 2025', desc: 'Friendly competition between junior teams of Lomé.' },
        { title: 'Coaching Workshop', date: '22 October 2025', desc: 'Free training session on discipline and strategy.' },
        { title: 'Gala Match', date: '29 October 2025', desc: 'Friendly match between MILADOU and Invictus Basketball Club.' },
        { title: 'Winter Training Camp', date: '10 December 2025', desc: 'Intensive one-week camp to improve fundamentals.' }
      ];

      eventList.innerHTML = events.map(e => `
        <article class="event-card">
          <h3>${e.title}</h3>
          <p><strong>Date:</strong> ${e.date}</p>
          <p>${e.desc}</p>
        </article>
      `).join('');
    }

    // --- PROGRAM FILTER (programs.html)
    const filter = document.getElementById('filterProgram');
    if (filter) {
      filter.addEventListener('change', () => {
        const value = filter.value;
        const cards = document.querySelectorAll('.program-card');
        cards.forEach(card => {
          const level = card.getAttribute('data-level') || '';
          if (value === 'all' || value === level) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    }

    // --- VISIT COUNTER (localStorage)
    const visitsKey = 'miladouVisits';
    let visits = Number(localStorage.getItem(visitsKey)) || 0;
    visits++;
    localStorage.setItem(visitsKey, visits);
    const visitDisplay = document.getElementById('visitCount');
    if (visitDisplay) {
      visitDisplay.textContent = `👀 You have visited this site ${visits} times.`;
    }

    // --- REVEAL ON SCROLL (animations)
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const trigger = window.innerHeight * 0.85;
      reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add('active');
      });
    };
    // Run on load and on every scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll, { passive: true });
  });
})();
// === GALERIE LIGHTBOX ===
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const images = document.querySelectorAll(".gallery-item");

  if (lightbox && images.length) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
      });
    });

    // Fermer le lightbox en cliquant à côté
    lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
      }
    });
  }
});
