/* ============================================================
   LAP partials — injected header, footer, sticky CTA, mobile nav.
   Inserts identical markup into every inner page so we keep
   one source of truth for nav while still shipping plain HTML.
   ============================================================ */
(function () {
  'use strict';

  // Path to root from this page (depth = how many .. needed).
  // Pages know their depth via <body data-depth="0|1">.
  function rootPath() {
    const d = parseInt(document.body.getAttribute('data-depth') || '0', 10);
    return d === 0 ? '' : '../'.repeat(d);
  }

  function header(R) {
    return `
<header class="lap-header">
  <div class="lap-container flex items-center gap-4 h-16 md:h-20">
    <a href="${R}index.html" class="flex items-center gap-2 mr-4 shrink-0" aria-label="LAP Insurance home">
      <img src="/public/img/lap-logo.png" alt="Lanexang Assurance logo" class="w-10 h-10" />
      <span class="hidden sm:inline font-bold text-lap-primary-900 text-base leading-tight">
        Lanexang<br /><span class="text-xs font-medium text-lap-ink-600">Assurance</span>
      </span>
    </a>

    <nav class="hidden lg:flex items-center gap-1 ml-2" aria-label="Primary">
      <div class="relative group">
        <button class="lap-btn-ghost lap-btn px-3 py-2 inline-flex items-center gap-1" data-lo="ຜະລິດຕະພັນ" data-en="Products">ຜະລິດຕະພັນ</button>
        <div class="absolute top-full left-0 pt-2 w-72 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          <div class="bg-white border border-lap-border rounded-2xl shadow-lap-hover p-2">
            <a href="${R}products/eco.html" class="flex items-start gap-3 p-3 rounded-xl hover:bg-lap-primary-50">
              <span class="w-8 h-8 rounded-lg bg-lap-primary-50 text-lap-primary-700 inline-flex items-center justify-center"><i data-lucide="car" class="w-4 h-4"></i></span>
              <span><span class="block font-semibold text-sm text-lap-ink-900" data-lo="ປະກັນໄພລົດ" data-en="Vehicle">ປະກັນໄພລົດ</span><span class="text-xs text-lap-ink-600" data-lo="Eco / ຍານພາຫະນະ" data-en="Eco / vehicle">Eco / ຍານພາຫະນະ</span></span>
            </a>
            <a href="${R}products/loan.html" class="flex items-start gap-3 p-3 rounded-xl hover:bg-lap-primary-50">
              <span class="w-8 h-8 rounded-lg bg-lap-primary-50 text-lap-primary-700 inline-flex items-center justify-center"><i data-lucide="banknote" class="w-4 h-4"></i></span>
              <span><span class="block font-semibold text-sm text-lap-ink-900" data-lo="ປະກັນໄພເງິນກູ້" data-en="Loan">ປະກັນໄພເງິນກູ້</span><span class="text-xs text-lap-ink-600" data-lo="ປົກປ້ອງເງິນກູ້" data-en="Protect your loan">ປົກປ້ອງເງິນກູ້</span></span>
            </a>
            <a href="${R}products/third-party.html" class="flex items-start gap-3 p-3 rounded-xl hover:bg-lap-primary-50">
              <span class="w-8 h-8 rounded-lg bg-lap-primary-50 text-lap-primary-700 inline-flex items-center justify-center"><i data-lucide="shield-check" class="w-4 h-4"></i></span>
              <span><span class="block font-semibold text-sm text-lap-ink-900" data-lo="ປະກັນໄພບຸກຄົນທີ່ສາມ" data-en="Third-Party">ປະກັນໄພບຸກຄົນທີ່ສາມ</span><span class="text-xs text-lap-ink-600" data-lo="ສຳລັບຍານພາຫະນະ" data-en="For vehicles">ສຳລັບຍານພາຫະນະ</span></span>
            </a>
          </div>
        </div>
      </div>
      <div class="relative group">
        <button class="lap-btn-ghost lap-btn px-3 py-2 inline-flex items-center gap-1" data-lo="ກ່ຽວກັບພວກເຮົາ" data-en="About">ກ່ຽວກັບພວກເຮົາ</button>
        <div class="absolute top-full left-0 pt-2 w-64 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          <div class="bg-white border border-lap-border rounded-2xl shadow-lap-hover p-2">
            <a href="${R}about/board.html" class="block px-3 py-2 rounded-lg hover:bg-lap-primary-50 text-sm font-medium" data-lo="ສະພາບໍລິຫານ" data-en="Board of Directors">ສະພາບໍລິຫານ</a>
            <a href="${R}about/management.html" class="block px-3 py-2 rounded-lg hover:bg-lap-primary-50 text-sm font-medium" data-lo="ຄະນະຜູ້ບໍລິຫານ" data-en="Executive Management">ຄະນະຜູ້ບໍລິຫານ</a>
            <a href="${R}about/history.html" class="block px-3 py-2 rounded-lg hover:bg-lap-primary-50 text-sm font-medium" data-lo="ປະຫວັດບໍລິສັດ" data-en="Company History">ປະຫວັດບໍລິສັດ</a>
            <a href="${R}about/org-chart.html" class="block px-3 py-2 rounded-lg hover:bg-lap-primary-50 text-sm font-medium" data-lo="ໂຄງສ້າງອົງກອນ" data-en="Organization Chart">ໂຄງສ້າງອົງກອນ</a>
          </div>
        </div>
      </div>
      <a href="${R}contact.html" class="lap-btn-ghost lap-btn px-3 py-2" data-lo="ຕິດຕໍ່" data-en="Contact">ຕິດຕໍ່</a>
      <a href="${R}downloads.html" class="lap-btn-ghost lap-btn px-3 py-2" data-lo="ດາວໂຫລດ" data-en="Downloads">ດາວໂຫລດ</a>
    </nav>

    <div class="ml-auto flex items-center gap-2 md:gap-3">
      <a href="tel:1819" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-lap-danger-600 px-3 py-1.5 rounded-full border border-lap-danger-600/20 bg-lap-danger-600/5 hover:bg-lap-danger-600/10 transition-colors" aria-label="Emergency hotline 1819">
        <i data-lucide="phone" class="w-4 h-4"></i>
        <span class="tabular-nums">1819</span>
      </a>
      <div class="lap-lang" role="group" aria-label="Language">
        <button data-lang-btn="lo" aria-pressed="true">ລາວ</button>
        <button data-lang-btn="en" aria-pressed="false">EN</button>
      </div>
      <a href="${R}login.html" class="hidden md:inline-flex lap-btn lap-btn-secondary !py-2 !px-4 text-sm" data-lo="ເຂົ້າສູ່ລະບົບ" data-en="Login">ເຂົ້າສູ່ລະບົບ</a>
      <a href="${R}login.html" class="md:hidden inline-flex w-10 h-10 items-center justify-center rounded-full border border-lap-border" aria-label="Login">
        <i data-lucide="user" class="w-5 h-5 text-lap-ink-700"></i>
      </a>
      <button data-mobile-nav-trigger aria-expanded="false" aria-controls="mobile-nav" class="lg:hidden inline-flex w-10 h-10 items-center justify-center rounded-full border border-lap-border" aria-label="Open menu">
        <i data-lucide="menu" class="w-5 h-5"></i>
      </button>
    </div>
  </div>
</header>

<div data-mobile-nav-overlay class="fixed inset-0 bg-lap-ink-900/40 backdrop-blur-sm z-50 opacity-0 invisible transition-opacity duration-200 [&.is-open]:opacity-100 [&.is-open]:visible lg:hidden"></div>
<aside id="mobile-nav" data-mobile-nav class="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 translate-x-full transition-transform duration-200 ease-out [&.is-open]:translate-x-0 lg:hidden overflow-y-auto" aria-label="Mobile menu">
  <div class="flex items-center justify-between p-5 border-b border-lap-border">
    <span class="font-bold text-lap-primary-900" data-lo="ເມນູ" data-en="Menu">ເມນູ</span>
    <button data-mobile-nav-close class="w-10 h-10 rounded-full inline-flex items-center justify-center hover:bg-lap-surface-50" aria-label="Close menu"><i data-lucide="x" class="w-5 h-5"></i></button>
  </div>
  <nav class="p-3 flex flex-col">
    <span class="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-lap-ink-400" data-lo="ຜະລິດຕະພັນ" data-en="Products">ຜະລິດຕະພັນ</span>
    <a href="${R}products/eco.html" class="block px-3 py-2.5 rounded-xl hover:bg-lap-primary-50 font-medium" data-lo="ປະກັນໄພລົດ" data-en="Vehicle Insurance">ປະກັນໄພລົດ</a>
    <a href="${R}products/loan.html" class="block px-3 py-2.5 rounded-xl hover:bg-lap-primary-50 font-medium" data-lo="ປະກັນໄພເງິນກູ້" data-en="Loan Insurance">ປະກັນໄພເງິນກູ້</a>
    <a href="${R}products/third-party.html" class="block px-3 py-2.5 rounded-xl hover:bg-lap-primary-50 font-medium" data-lo="ປະກັນໄພບຸກຄົນທີ່ສາມ" data-en="Third-Party">ປະກັນໄພບຸກຄົນທີ່ສາມ</a>
    <span class="px-3 pt-5 pb-1 text-xs font-semibold uppercase tracking-wider text-lap-ink-400" data-lo="ກ່ຽວກັບ" data-en="About">ກ່ຽວກັບ</span>
    <a href="${R}about/board.html" class="block px-3 py-2.5 rounded-xl hover:bg-lap-primary-50 font-medium" data-lo="ສະພາບໍລິຫານ" data-en="Board">ສະພາບໍລິຫານ</a>
    <a href="${R}about/management.html" class="block px-3 py-2.5 rounded-xl hover:bg-lap-primary-50 font-medium" data-lo="ຄະນະຜູ້ບໍລິຫານ" data-en="Management">ຄະນະຜູ້ບໍລິຫານ</a>
    <a href="${R}about/history.html" class="block px-3 py-2.5 rounded-xl hover:bg-lap-primary-50 font-medium" data-lo="ປະຫວັດ" data-en="History">ປະຫວັດ</a>
    <a href="${R}about/org-chart.html" class="block px-3 py-2.5 rounded-xl hover:bg-lap-primary-50 font-medium" data-lo="ໂຄງສ້າງອົງກອນ" data-en="Org Chart">ໂຄງສ້າງອົງກອນ</a>
    <span class="px-3 pt-5 pb-1 text-xs font-semibold uppercase tracking-wider text-lap-ink-400" data-lo="ອື່ນໆ" data-en="More">ອື່ນໆ</span>
    <a href="${R}contact.html" class="block px-3 py-2.5 rounded-xl hover:bg-lap-primary-50 font-medium" data-lo="ຕິດຕໍ່" data-en="Contact">ຕິດຕໍ່</a>
    <a href="${R}downloads.html" class="block px-3 py-2.5 rounded-xl hover:bg-lap-primary-50 font-medium" data-lo="ດາວໂຫລດ" data-en="Downloads">ດາວໂຫລດ</a>
    <a href="${R}login.html" class="block px-3 py-2.5 rounded-xl hover:bg-lap-primary-50 font-medium" data-lo="ເຂົ້າສູ່ລະບົບ" data-en="Login">ເຂົ້າສູ່ລະບົບ</a>
  </nav>
</aside>`;
  }

  function footer(R) {
    return `
<footer class="bg-lap-primary-900 text-white pt-16 pb-8 mt-16">
  <div class="lap-container grid md:grid-cols-12 gap-10">
    <div class="md:col-span-5">
      <div class="flex items-center gap-2 mb-4">
        <img src="/public/img/lap-logo.png" alt="Lanexang Assurance logo" class="w-11 h-11" />
        <span class="font-bold leading-tight">Lanexang Assurance<br /><span class="text-xs font-normal opacity-70">Public Company Limited</span></span>
      </div>
      <p class="text-sm text-white/70 max-w-prose mb-6" data-lo="ບໍລິສັດປະກັນໄພທີ່ໄວ້ວາງໃຈໄດ້ ໃຫ້ບໍລິການລູກຄ້າຂອງ ສປປ ລາວ ຕັ້ງແຕ່ປີ 2010." data-en="A trusted insurance company serving customers in the Lao PDR since 2010.">ບໍລິສັດປະກັນໄພທີ່ໄວ້ວາງໃຈໄດ້ ໃຫ້ບໍລິການລູກຄ້າຂອງ ສປປ ລາວ ຕັ້ງແຕ່ປີ 2010.</p>
      <div class="flex items-center gap-3">
        <a href="#" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 inline-flex items-center justify-center text-white" aria-label="Facebook"><span class="font-bold text-sm">f</span></a>
        <a href="#" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 inline-flex items-center justify-center text-white" aria-label="YouTube"><i data-lucide="play" class="w-4 h-4"></i></a>
        <a href="#" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 inline-flex items-center justify-center text-white" aria-label="TikTok"><i data-lucide="music" class="w-4 h-4"></i></a>
      </div>
    </div>
    <nav class="md:col-span-3" aria-label="Footer">
      <h3 class="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4" data-lo="ລິ້ງດ່ວນ" data-en="Quick Links">ລິ້ງດ່ວນ</h3>
      <ul class="space-y-2.5 text-sm">
        <li><a class="hover:text-lap-accent-500" href="${R}index.html" data-lo="ໜ້າຫຼັກ" data-en="Home">ໜ້າຫຼັກ</a></li>
        <li><a class="hover:text-lap-accent-500" href="${R}products/eco.html" data-lo="ປະກັນໄພລົດ" data-en="Vehicle">ປະກັນໄພລົດ</a></li>
        <li><a class="hover:text-lap-accent-500" href="${R}products/loan.html" data-lo="ປະກັນໄພເງິນກູ້" data-en="Loan">ປະກັນໄພເງິນກູ້</a></li>
        <li><a class="hover:text-lap-accent-500" href="${R}about/history.html" data-lo="ປະຫວັດ" data-en="History">ປະຫວັດ</a></li>
        <li><a class="hover:text-lap-accent-500" href="${R}downloads.html" data-lo="ດາວໂຫລດ" data-en="Downloads">ດາວໂຫລດ</a></li>
        <li><a class="hover:text-lap-accent-500" href="${R}contact.html" data-lo="ຕິດຕໍ່" data-en="Contact">ຕິດຕໍ່</a></li>
      </ul>
    </nav>
    <div class="md:col-span-4">
      <h3 class="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4" data-lo="ຕິດຕໍ່ພວກເຮົາ" data-en="Contact">ຕິດຕໍ່ພວກເຮົາ</h3>
      <address class="not-italic text-sm space-y-3 text-white/80">
        <div class="flex gap-3"><i data-lucide="map-pin" class="w-4 h-4 mt-0.5 shrink-0 text-lap-accent-500"></i><span data-lo="ຊັ້ນ 2, ອາຄານທະນາຄານ MBL, ຖະໜົນ ໄກສອນ ພົມວິຫານ, ບ້ານ ໂພນໄຊ, ເມືອງ ສີສັດຕະນາກ, ນະຄອນຫລວງວຽງຈັນ" data-en="Level 2, MBL Bank Building, Kaisone Phomvihane Rd, Phonsai Village, Sisattanak District, Vientiane">ຊັ້ນ 2, ອາຄານທະນາຄານ MBL, ຖະໜົນ ໄກສອນ ພົມວິຫານ, ບ້ານ ໂພນໄຊ, ເມືອງ ສີສັດຕະນາກ, ນະຄອນຫລວງວຽງຈັນ</span></div>
        <div class="flex gap-3"><i data-lucide="mail" class="w-4 h-4 mt-0.5 shrink-0 text-lap-accent-500"></i><a href="mailto:Contract@lap.com.la" class="hover:text-lap-accent-500">Contract@lap.com.la</a></div>
        <div class="flex gap-3"><i data-lucide="phone" class="w-4 h-4 mt-0.5 shrink-0 text-lap-accent-500"></i><div><a href="tel:0309029999" class="hover:text-lap-accent-500 tabular-nums block">030 902 9999</a><a href="tel:02098556666" class="hover:text-lap-accent-500 tabular-nums block">020 9855 6666</a></div></div>
        <div class="flex items-center gap-3 pt-1"><span class="lap-pill !bg-lap-accent-500/15 !text-lap-accent-500 !border-lap-accent-500/30"><i data-lucide="clock" class="w-3.5 h-3.5"></i><span data-lo="ບໍລິການ 24/7" data-en="24/7 service">ບໍລິການ 24/7</span></span><a href="tel:1819" class="font-bold tabular-nums" style="color:#FCA5A5">☎ 1819</a></div>
      </address>
    </div>
  </div>
  <div class="lap-container mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
    <span data-lo="© 2010–2025 ບໍລິສັດ ລ້ານຊ້າງປະກັນໄພ ມະຫາຊົນ ຈຳກັດ · ໃບອະນຸຍາດເລກທີ […]" data-en="© 2010–2025 Lanexang Assurance Public Co., Ltd. · License No. […]">© 2010–2025 ບໍລິສັດ ລ້ານຊ້າງປະກັນໄພ ມະຫາຊົນ ຈຳກັດ · ໃບອະນຸຍາດເລກທີ […]</span>
    <span class="flex gap-4"><a href="#" class="hover:text-white" data-lo="ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ" data-en="Privacy">ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ</a><a href="#" class="hover:text-white" data-lo="ເງື່ອນໄຂ" data-en="Terms">ເງື່ອນໄຂ</a></span>
  </div>
</footer>

<a href="tel:1819" class="lap-emergency-floating" aria-label="Emergency hotline 1819">
  <i data-lucide="phone" class="w-5 h-5"></i>
  <span data-lo="ແຈ້ງເຫດ 1819" data-en="Hotline 1819">ແຈ້ງເຫດ 1819</span>
</a>`;
  }

  // Insert.
  const R = rootPath();
  const headerSlot = document.querySelector('[data-partial="header"]');
  const footerSlot = document.querySelector('[data-partial="footer"]');
  if (headerSlot) headerSlot.outerHTML = header(R);
  if (footerSlot) footerSlot.outerHTML = footer(R);

  // Re-render lucide icons after injection.
  if (window.lucide) lucide.createIcons();
})();
