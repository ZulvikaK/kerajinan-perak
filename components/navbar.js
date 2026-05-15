/**
 * SR Supply - Reusable Navbar Component
 * Usage: <sr-navbar active-page="home|collection"></sr-navbar>
 * Attributes:
 *   active-page: "home" | "collection" (default: auto-detect from URL)
 */
class SrNavbar extends HTMLElement {
  connectedCallback() {
    const activePage = this.getAttribute('active-page') || this._detectActivePage();
    this.innerHTML = this._template(activePage);
    this._initMobileMenu();
    this._initScrollEffect();
  }

  _detectActivePage() {
    const path = window.location.pathname;
    if (path.includes('catalog')) return 'collection';
    return 'home';
  }

  _linkClass(page, activePage) {
    const base = 'font-label-md text-label-md transition-colors duration-300 uppercase tracking-wider';
    if (page === activePage) {
      return `${base} text-primary border-b border-primary pb-0.5`;
    }
    return `${base} text-on-surface-variant hover:text-primary`;
  }

  _template(activePage) {
    return `
      <nav id="sr-navbar" class="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500">
        <div id="sr-navbar-inner" class="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center justify-between shadow-xl transition-all duration-300">

          <!-- Logo -->
          <a href="index.html" class="flex items-center gap-3 h-10 no-underline">
            <img
              src="assets/logo.png"
              alt="SR Supply Logo"
              class="h-8 w-8 object-contain"
              onerror="this.style.display='none'"
            />
            <span class="font-headline-md text-headline-md text-on-surface uppercase tracking-wider font-medium" style="font-family: 'Libre Caslon Text', serif;">
              SR SUPPLY
            </span>
          </a>

          <!-- Desktop Navigation Links -->
          <div class="hidden md:flex items-center gap-8">
            <a class="${this._linkClass('home', activePage)}" href="index.html">Home</a>
            <a class="${this._linkClass('expertise', activePage)} text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Expertise</a>
            <a class="${this._linkClass('collection', activePage)}" href="catalog.html">Collection</a>
            <a class="${this._linkClass('customization', activePage)} text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Customization</a>
            <a class="${this._linkClass('clients', activePage)} text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Clients</a>
          </div>

          <!-- Action Button + Hamburger -->
          <div class="flex items-center gap-4">
            <button
              onclick="window.open('https://wa.me/6281320740494?text=Hello', '_blank')"
              class="hidden sm:flex bg-on-surface text-inverse-on-surface px-5 py-2 rounded-full font-label-md text-label-md items-center gap-2 hover:bg-primary transition-all duration-300"
            >
              <span class="material-symbols-outlined" style="font-size:16px;">shopping_cart</span>
              Shop Retail
            </button>

            <!-- Hamburger (Mobile) -->
            <button id="sr-nav-hamburger" class="md:hidden flex flex-col gap-[5px] p-2" aria-label="Toggle menu">
              <span class="block w-5 h-[2px] bg-on-surface rounded transition-all duration-300"></span>
              <span class="block w-5 h-[2px] bg-on-surface rounded transition-all duration-300"></span>
              <span class="block w-5 h-[2px] bg-on-surface rounded transition-all duration-300"></span>
            </button>
          </div>
        </div>

        <!-- Mobile Dropdown Menu -->
        <div id="sr-nav-mobile" class="hidden mt-2 bg-surface-container-highest/95 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 flex-col gap-4 shadow-xl">
          <a class="font-label-md text-label-md ${activePage === 'home' ? 'text-primary' : 'text-on-surface-variant'} hover:text-primary transition-colors py-2 border-b border-white/10" href="index.html">Home</a>
          <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-white/10" href="#">Expertise</a>
          <a class="font-label-md text-label-md ${activePage === 'collection' ? 'text-primary' : 'text-on-surface-variant'} hover:text-primary transition-colors py-2 border-b border-white/10" href="catalog.html">Collection</a>
          <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-white/10" href="#">Customization</a>
          <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2" href="#">Clients</a>
          <button
            onclick="window.open('https://wa.me/6281320740494?text=Hello', '_blank')"
            class="mt-2 bg-primary text-surface px-5 py-2.5 rounded-full font-label-md text-label-md flex items-center justify-center gap-2 hover:brightness-110 transition-all"
          >
            <span class="material-symbols-outlined" style="font-size:16px;">shopping_cart</span>
            Shop Retail
          </button>
        </div>
      </nav>
    `;
  }

  _initMobileMenu() {
    const hamburger = this.querySelector('#sr-nav-hamburger');
    const mobileMenu = this.querySelector('#sr-nav-mobile');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      } else {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      }
    });
  }

  _initScrollEffect() {
    const inner = this.querySelector('#sr-navbar-inner');
    if (!inner) return;

    const onScroll = () => {
      if (window.scrollY > 60) {
        inner.classList.add('bg-[#1A1A1B]/80', 'shadow-2xl');
        inner.classList.remove('bg-white/10', 'shadow-xl');
      } else {
        inner.classList.remove('bg-[#1A1A1B]/80', 'shadow-2xl');
        inner.classList.add('bg-white/10', 'shadow-xl');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }
}

customElements.define('sr-navbar', SrNavbar);
