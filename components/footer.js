/**
 * SR Supply - Reusable Footer Component
 * Usage: <sr-footer></sr-footer>
 */
class SrFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this._template();
  }

  _template() {
    return `
      <footer class="bg-surface-container-lowest border-t border-outline-variant">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">

          <!-- Main Footer Grid -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

            <!-- Column 1: Brand -->
            <div class="md:col-span-1">
              <a href="index.html" class="flex items-center gap-3 mb-6 no-underline group">
                <img
                  src="assets/logo.png"
                  alt="SR Supply Logo"
                  class="h-8 w-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  onerror="this.style.display='none'"
                />
                <span
                  class="font-headline-md text-headline-md text-primary uppercase tracking-wider font-medium"
                  style="font-family: 'Libre Caslon Text', serif;"
                >
                  SR SUPPLY
                </span>
              </a>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Industrial heritage, sophisticated hardware, and handcrafted precision from the heart of Yogyakarta.
              </p>
              <!-- Social Icons -->
              <div class="flex gap-4 mt-6">
                <a
                  href="https://wa.me/6281320740494"
                  target="_blank"
                  rel="noopener"
                  class="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <span class="material-symbols-outlined" style="font-size:18px;">chat_bubble</span>
                </a>
                <a
                  href="#"
                  class="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                  <span class="material-symbols-outlined" style="font-size:18px;">alternate_email</span>
                </a>
                <a
                  href="mailto:contact@srsupply.com"
                  class="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Email"
                >
                  <span class="material-symbols-outlined" style="font-size:18px;">mail</span>
                </a>
              </div>
            </div>

            <!-- Column 2: Workshop -->
            <div>
              <h5 class="font-label-md text-label-md text-primary uppercase mb-6 tracking-widest">Workshop</h5>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Jl. Imogiri Barat KM 7,<br/>
                Banguntapan, Bantul,<br/>
                Yogyakarta 55188, Indonesia
              </p>
              <a
                href="https://maps.google.com/?q=Imogiri+Barat+Yogyakarta"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1 mt-4 font-label-sm text-label-sm text-primary hover:underline"
              >
                <span class="material-symbols-outlined" style="font-size:14px;">location_on</span>
                View on Maps
              </a>
            </div>

            <!-- Column 3: Navigation -->
            <div>
              <h5 class="font-label-md text-label-md text-primary uppercase mb-6 tracking-widest">Navigation</h5>
              <ul class="space-y-4 font-body-md text-body-md">
                <li><a class="text-on-surface-variant hover:text-primary transition-all duration-200" href="index.html">Home</a></li>
                <li><a class="text-on-surface-variant hover:text-primary transition-all duration-200" href="#">Expertise</a></li>
                <li><a class="text-on-surface-variant hover:text-primary transition-all duration-200" href="catalog.html">Collection</a></li>
                <li><a class="text-on-surface-variant hover:text-primary transition-all duration-200" href="#">Custom Order</a></li>
                <li><a class="text-on-surface-variant hover:text-primary transition-all duration-200" href="#">Workshop Info</a></li>
              </ul>
            </div>

            <!-- Column 4: Connect -->
            <div>
              <h5 class="font-label-md text-label-md text-primary uppercase mb-6 tracking-widest">Connect</h5>
              <div class="flex flex-col gap-4">
                <a class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all duration-200" href="#">
                  <span class="material-symbols-outlined" style="font-size:18px;">alternate_email</span>
                  <span class="font-body-md text-body-md">@srsilver_srsupply</span>
                </a>
                <a class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all duration-200" href="#">
                  <span class="material-symbols-outlined" style="font-size:18px;">alternate_email</span>
                  <span class="font-body-md text-body-md">@srsupplyhardware</span>
                </a>
                <a class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all duration-200" href="mailto:contact@srsupply.com">
                  <span class="material-symbols-outlined" style="font-size:18px;">mail</span>
                  <span class="font-body-md text-body-md">contact@srsupply.com</span>
                </a>
                <a class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all duration-200" href="https://wa.me/6281320740494" target="_blank" rel="noopener">
                  <span class="material-symbols-outlined" style="font-size:18px;">chat_bubble</span>
                  <span class="font-body-md text-body-md">+62 813-2074-0494</span>
                </a>
              </div>
            </div>

          </div><!-- /grid -->

          <!-- Bottom Footer Bar -->
          <div class="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-outline-variant gap-6">
            <p class="font-label-sm text-label-sm text-on-surface-variant opacity-70">
              © 2026 SR Supply. Handcrafted with industrial precision in Yogyakarta.
            </p>
            <div class="flex gap-8">
              <a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:underline transition-colors" href="#">Privacy Policy</a>
              <a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:underline transition-colors" href="#">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    `;
  }
}

customElements.define('sr-footer', SrFooter);
