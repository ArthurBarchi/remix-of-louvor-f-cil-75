(function () {
  // ---------- Data de hoje e ano ----------
  var hoje = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
  document.querySelectorAll("[data-hoje]").forEach(function (el) { el.textContent = hoje; });
  document.querySelectorAll("[data-ano]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // ---------- Rolagem suave até as ofertas ----------
  function rolarParaOfertas(e) {
    e.preventDefault();
    var alvo = document.getElementById("ofertas");
    if (!alvo) return;
    var inicio = window.scrollY || document.documentElement.scrollTop || 0;
    var dist = alvo.getBoundingClientRect().top;
    var dur = 800;
    var t0 = null;
    function passo(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      window.scrollTo(0, inicio + dist * ease);
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }
  document.querySelectorAll("[data-rolar]").forEach(function (b) { b.addEventListener("click", rolarParaOfertas); });

  // ---------- Checkout (repassa UTMs para o pagamento) ----------
  function irParaCheckout(url) {
    var u = url;
    try {
      if (window.__utmizey && typeof window.__utmizey.decorate === "function") u = window.__utmizey.decorate(url);
    } catch (e) {}
    var destino = new URL(u);
    new URLSearchParams(window.location.search).forEach(function (v, k) {
      if (!destino.searchParams.has(k)) destino.searchParams.set(k, v);
    });
    window.location.href = destino.toString();
  }
  document.querySelectorAll("[data-checkout]").forEach(function (b) {
    b.addEventListener("click", function () { irParaCheckout(b.getAttribute("data-checkout")); });
  });

  // ---------- Modal do Pacote Básico ----------
  var modal = document.querySelector("[data-modal]");
  document.querySelectorAll("[data-abrir-modal]").forEach(function (b) {
    b.addEventListener("click", function () { modal.classList.add("pb-aberto"); });
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.classList.remove("pb-aberto");
  });

  // ---------- Depoimentos: ampliar ao tocar ----------
  var zoom = document.querySelector("[data-zoom-box]");
  if (zoom) {
    var zoomImg = zoom.querySelector("img");
    document.querySelectorAll("[data-zoom]").forEach(function (b) {
      b.addEventListener("click", function () {
        zoomImg.src = b.getAttribute("data-zoom");
        zoom.classList.add("pb-aberto");
      });
    });
    zoom.addEventListener("click", function () { zoom.classList.remove("pb-aberto"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") zoom.classList.remove("pb-aberto"); });
  }

  // ---------- Depoimentos: setas do carrossel ----------
  var depTrilho = document.querySelector("[data-dep-trilho]");
  document.querySelectorAll("[data-dep]").forEach(function (b) {
    b.addEventListener("click", function () {
      var card = depTrilho.querySelector(".pb-dep-item");
      var passo = card ? card.offsetWidth + 14 : 300;
      depTrilho.scrollBy({ left: Number(b.getAttribute("data-dep")) * passo, behavior: "smooth" });
    });
  });

  // ---------- Barra fixa no celular: aparece depois do topo, some nas ofertas e no final ----------
  var fixo = document.querySelector("[data-fixo]");
  if (fixo && "IntersectionObserver" in window) {
    var heroBtn = document.querySelector("section [data-rolar]");
    var alvos = [heroBtn, document.getElementById("ofertas"), document.querySelector(".cp-fim"), document.querySelector(".cp-rod")].filter(Boolean);
    var visiveis = new Set();
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) { if (en.isIntersecting) visiveis.add(en.target); else visiveis.delete(en.target); });
      var passouTopo = heroBtn && heroBtn.getBoundingClientRect().bottom < 0;
      fixo.classList.toggle("on", passouTopo && visiveis.size === 0);
    });
    alvos.forEach(function (el) { obs.observe(el); });
    window.addEventListener("scroll", function () {
      var passouTopo = heroBtn && heroBtn.getBoundingClientRect().bottom < 0;
      fixo.classList.toggle("on", passouTopo && visiveis.size === 0);
    }, { passive: true });
  }

  // ---------- Fotos que passam sozinhas (mesma velocidade do Direito Descomplica) ----------
  // Sem cópias das fotos: ao chegar na última, espera um pouco e volta suave para a primeira.
  var auto = document.querySelector("[data-auto-trilho]");
  if (auto) {
    var autoPausado = false;
    var autoSegura = 0;
    var autoUltimo = performance.now();
    var autoAcc = 0;
    var autoMax = function () { return auto.scrollWidth - auto.clientWidth; };
    var autoEspera = function (ms) { autoSegura = performance.now() + ms; };
    var autoVoltaInicio = function () {
      autoEspera(1400 + 1300);
      setTimeout(function () { auto.scrollTo({ left: 0, behavior: "smooth" }); }, 1400);
    };
    var autoTick = function (t) {
      var dt = Math.min(t - autoUltimo, 100);
      autoUltimo = t;
      if (!autoPausado && t > autoSegura) {
        autoAcc += dt * 0.032;
        var n = Math.floor(autoAcc);
        if (n) { auto.scrollLeft += n; autoAcc -= n; }
        if (auto.scrollLeft >= autoMax() - 1) autoVoltaInicio();
      }
      requestAnimationFrame(autoTick);
    };
    requestAnimationFrame(autoTick);
    auto.addEventListener("touchstart", function () { autoEspera(60000); }, { passive: true });
    auto.addEventListener("touchend", function () { autoEspera(2500); });
    auto.addEventListener("wheel", function () { autoEspera(2500); }, { passive: true });
    document.querySelectorAll("[data-auto-seta]").forEach(function (b) {
      b.addEventListener("click", function () {
        var d = Number(b.getAttribute("data-auto-seta"));
        var c = auto.querySelector(".cp-uso-card");
        var gap = parseFloat(getComputedStyle(auto).columnGap) || 16;
        var w = c ? c.offsetWidth + gap : 256;
        autoEspera(1800);
        // nas pontas, a seta dá a volta: da última vai para a primeira e vice-versa
        if (d > 0 && auto.scrollLeft >= autoMax() - 1) auto.scrollTo({ left: 0, behavior: "smooth" });
        else if (d < 0 && auto.scrollLeft <= 1) auto.scrollTo({ left: autoMax(), behavior: "smooth" });
        else auto.scrollBy({ left: d * w, behavior: "smooth" });
      });
    });
    var autoBtn = document.querySelector("[data-auto-pausa]");
    if (autoBtn) {
      autoBtn.addEventListener("click", function () {
        autoPausado = !autoPausado;
        autoBtn.textContent = autoPausado ? "Continuar" : "Pausar";
      });
    }
  }

  // ---------- FAQ ----------
  var perguntas = [
    {
      q: "Como recebo o acesso?",
      a: "Logo após a confirmação do pagamento, chega no seu e-mail o link das pastas no Google Drive. O acesso é imediato e vitalício: você pode baixar de novo sempre que precisar."
    },
    {
      q: "Tem os louvores que a minha igreja canta?",
      a: "São mais de 2.000 playbacks de +100 cantores e ministérios, como Aline Barros, Fernandinho, Gabriela Rocha, Cassiane, Diante do Trono e Ministério Zoe, além de hinos antigos, corinhos e louvores de avivamento."
    },
    {
      q: "Preciso de internet na hora do culto?",
      a: "Não. Você baixa os playbacks antes e toca direto do pendrive, do CD, do celular ou do computador, sem depender de internet nem de anúncio do YouTube."
    },
    {
      q: "Funciona no celular, no computador e no pendrive?",
      a: "Sim! Baixe no celular, no computador ou no tablet e depois copie para pendrive ou grave em CD para usar na igreja."
    },
    {
      q: "Os playbacks são de boa qualidade?",
      a: "Todos foram selecionados e testados para garantir qualidade sonora. São arquivos MP3 em alta definição, prontos para o culto."
    },
    {
      q: "Por que é tão barato?",
      a: "Esse valor simbólico cobre nossos custos e nos permite continuar ajudando. Nossa missão é facilitar o louvor nas igrejas pelo Brasil, não lucrar em cima de quem louva."
    },
    {
      q: "A compra é segura?",
      a: "100% segura! O pagamento é feito em uma plataforma segura, no Pix ou no cartão, e seus dados são criptografados e protegidos."
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 7 dias de garantia. Se não ficar satisfeito, é só mandar um e-mail e devolvemos 100% do seu dinheiro, sem perguntas."
    }
  ];
  var seta = '<svg class="pb-faq-seta w-5 h-5 text-gray-500 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  var faq = document.querySelector("[data-faq]");
  perguntas.forEach(function (p) {
    var item = document.createElement("div");
    item.className = "border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm";
    item.innerHTML =
      '<button type="button" class="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors">' +
      '<span class="font-bold text-gray-900 pr-4"></span>' + seta + "</button>" +
      '<div class="pb-faq-resp"><div><div class="p-5 pt-0 text-gray-600 bg-white border-t border-gray-100"></div></div></div>';
    item.querySelector("span").textContent = p.q;
    item.querySelector(".p-5.pt-0").textContent = p.a;
    item.querySelector("button").addEventListener("click", function () {
      var aberto = item.classList.contains("pb-faq-aberto");
      faq.querySelectorAll(".pb-faq-aberto").forEach(function (o) { o.classList.remove("pb-faq-aberto"); });
      if (!aberto) item.classList.add("pb-faq-aberto");
    });
    faq.appendChild(item);
  });
})();
