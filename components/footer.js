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

            </div>

            <!-- Column 2: Workshop -->
            <div>
              <h5 class="font-label-md text-label-md text-primary uppercase mb-6 tracking-widest">Workshop</h5>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Gg. Manggis, Purbayan, Kec. Kotagede,<br/>
                Kota Yogyakarta,<br/>
                Daerah Istimewa Yogyakarta 55173
              </p>
              <a
                href="https://maps.app.goo.gl/M7ucKQyKpW153Pww6"
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
                <li><a class="text-on-surface-variant hover:text-primary transition-all duration-200" href="aboutus.html">About Us</a></li>
                <li><a class="text-on-surface-variant hover:text-primary transition-all duration-200" href="collection.html">Collection</a></li>
                <li><a class="text-on-surface-variant hover:text-primary transition-all duration-200" href="expertise.html">Expertise</a></li>
              </ul>
            </div>

            <!-- Column 4: Connect -->
            <div>
              <h5 class="font-label-md text-label-md text-primary uppercase mb-6 tracking-widest">Connect</h5>
              <div class="flex flex-col gap-4">
                <a class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all duration-200" href="https://instagram.com/srsilver_srsupply" target="_blank">
                  <svg class="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span class="font-body-md text-body-md">@srsilver_srsupply</span>
                </a>
                <a class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all duration-200" href="https://instagram.com/srsupplyhardware" target="_blank">
                  <svg class="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span class="font-body-md text-body-md">@srsupplyhardware</span>
                </a>
                <a class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all duration-200" href="https://www.tokopedia.com/srsupply?source=universe&st=product" target="_blank">
                  <span class="material-symbols-outlined" style="font-size:18px;">storefront</span>
                  <span class="font-body-md text-body-md">Tokopedia</span>
                </a>
                <a class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all duration-200" href="https://shopee.co.id/sr_silver" target="_blank">
                  <span class="material-symbols-outlined" style="font-size:18px;">shopping_bag</span>
                  <span class="font-body-md text-body-md">Shopee</span>
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
