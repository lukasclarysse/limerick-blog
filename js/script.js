
    const btns = document.querySelectorAll('.nav-btn');
    const panels = document.querySelectorAll('.day-panel');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('aria-controls');

        btns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        panels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        document.getElementById(target).classList.add('active');
      });
    });
