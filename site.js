/* ------------------------------------------------------------------
   AJUSTES DO SITE: só mexa neste bloco.

   Vagas: null = vaga aberta (mostra o ícone do The Group).
   Para marcar uma vaga como preenchida, troque o null por:
     { nome: "Empresa", logo: "logos/empresa.svg", link: "https://empresa.com.br", categoria: "Checkout" }
   (suba o arquivo do logo na pasta logos/; link e categoria são opcionais)

   Preço: fica vazio de propósito. Para mostrar, preencha o texto,
   por exemplo principal: "R$ 150 mil por ano". Vazio = não aparece.
------------------------------------------------------------------- */
const AJUSTES = {
  receita: "R$ 6 bi+",
  receitaTexto: "em receita somada pelos membros do grupo",
  whatsapp: "5543996459340",
  preco: { principal: "R$ 150 mil por ano", oficiais: "R$ 50 mil por ano", apoiadores: "R$ 15 mil por ano" },
  vagas: {
    principal: [null],
    oficiais: [null, null, null, null],
    apoiadores: [null, null, null, null, null, null],
  },
};
/* ------------------------------------------------------------------ */

const ICONE = '<svg class="icon" viewBox="0 0 59 43" aria-hidden="true"><use href="#tg"></use></svg>';
const SETA_ESQ = '<svg class="icon" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M10.5 3 5.5 8l5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const SETA_DIR = '<svg class="icon" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M5.5 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const NIVEIS = {
  principal: {
    rotulo: "Parceiro principal",
    titulo: "O nome da marca em tudo o que o grupo faz no ano",
    resumo: "Uma vaga, exclusiva por segmento. Apresenta a The House e todos os encontros mensais, e tem o destaque no podcast do The Group.",
    curto: "Apresenta a The House e todos os encontros do ano.",
    vagasTexto: "1 vaga, exclusiva por segmento",
    entregas: [
      ["Exclusividade", "Nenhuma empresa do mesmo segmento entra em nenhum nível de patrocínio do The Group."],
      ["The House", "<ul><li>“The House apresentada por” a sua marca.</li><li>Logo grande e sozinho no backdrop principal.</li><li><strong>3 convites por edição.</strong></li><li>Traz uma experiência para a casa, por conta da marca.</li><li>Faz o brinde de abertura, sem palestra.</li><li>Aparece no vídeo do evento.</li></ul>"],
      ["Encontros mensais", "<ul><li>Todo encontro é “apresentado por” a sua marca: no convite, nas peças e no local.</li><li>A marca está presente com kit, brinde ou mesa, aprovados pelo The Group.</li><li>Um representante vai a até 3 encontros por ano, escolhidos junto com a gente.</li><li><strong>1 encontro próprio por ano</strong>, na região que a marca escolher, com membros escolhidos pela nossa curadoria.</li></ul>"],
      ["Podcast do The Group", "Agradecimento em destaque no encerramento de todo episódio. Aparece nos cortes."],
      ["App", "Primeiro lugar na aba de parceiros, com um benefício exclusivo para os membros."],
      ["Site", "Logo grande na home de ogrupo.com.br e no topo de /parcerias, com link. O site recebe tráfego pago todo mês."],
      ["Instagram", "<strong>Marcação em todo conteúdo de encontro e de The House.</strong> Mais 6 posts em collab por ano: 2 da The House e 4 de encontros."],
      ["3 entradas no grupo", "Para os 3 clientes que mais crescem com a sua empresa, aprovados pela nossa curadoria. Cada um entra com um press kit da marca e do The Group."],
      ["Relatório", "Depois de cada evento: fotos, alcance e presença em número e perfil, sem nomes. Todo mês: visitas ao site e cliques no link da marca."],
    ],
  },
  oficiais: {
    rotulo: "Parceiros oficiais",
    titulo: "Uma experiência da The House e um encontro por ano com a sua marca",
    resumo: "Até 4 vagas, uma por categoria. Cada oficial assina uma experiência na The House e um encontro mensal no ano.",
    curto: "Assina uma experiência na The House e um encontro por ano.",
    vagasTexto: "Até 4 vagas, uma por categoria",
    entregas: [
      ["Exclusividade", "Só um parceiro oficial por categoria."],
      ["The House", "<ul><li>Logo na parede de parceiros.</li><li><strong>3 convites por edição.</strong></li><li>Traz uma experiência para a casa com o nome da marca: o pôquer, o bar de charuto, a sinuca, o golfe. “O pôquer é da” sua marca.</li></ul>"],
      ["Encontros mensais", "Assina a experiência de <strong>1 encontro por ano</strong>, por exemplo “o kart deste mês é da” sua marca. Um representante vai a esse encontro, e a marca é marcada no conteúdo dele. O encontro segue apresentado pelo parceiro principal."],
      ["Podcast do The Group", "Agradecimento no encerramento, junto com os outros oficiais. Aparece nos cortes."],
      ["App", "Logo e benefício na aba de parceiros, abaixo do principal."],
      ["Site", "Logo médio em ogrupo.com.br/parcerias, com link."],
      ["Instagram", "Marcação no conteúdo da The House e do encontro da marca. 1 post em collab por ano."],
      ["Relatório", "A cada The House e no encontro da marca."],
    ],
  },
  apoiadores: {
    rotulo: "Apoiadores",
    titulo: "O produto da sua marca nas mãos dos membros",
    resumo: "Até 6 vagas. O apoiador aparece pelo produto que entrega nos encontros e na The House.",
    curto: "Aparece pelo produto que entrega nos eventos.",
    vagasTexto: "Até 6 vagas",
    entregas: [
      ["Nos eventos", "A cada encontro e The House, combinamos se a marca quer entrar com produto: charuto personalizado, caixa de vinho, brinde. O The Group define o que é entregue aos membros. O produto é à parte da cota. O apoiador não aparece no backdrop."],
      ["Podcast do The Group", "Aparece nos cortes, junto com os outros parceiros."],
      ["App", "Benefício na aba de parceiros."],
      ["Site", "Logo pequeno em ogrupo.com.br/parcerias, com link."],
      ["Instagram", "Menção em story do evento em que o produto entrou."],
    ],
  },
};
const ORDEM = ["principal", "oficiais", "apoiadores"];

const REGRAS = [
  "Contrato anual, pago mensalmente.",
  "A exposição vale enquanto o pagamento estiver em dia. Para estar na The House, é preciso estar em dia antes do evento.",
  "Em caso de rescisão, a vaga é reaberta para outra marca.",
  "Não fazemos parceria por link de indicação, afiliado ou comissão. A marca entra só pela cota, e qualquer comissão de venda fica com ela.",
  "Produto, brinde, ativação e experiência na The House são à parte da cota, por conta da marca, e passam pela aprovação do The Group.",
  "Sem pitch de venda nos eventos.",
  "Nenhum patrocinador tem acesso a dados ou contatos dos membros.",
  "Os resultados são medidos e entram em relatório.",
];

const BASE = [
  ["The House", "2 edições por ano."],
  ["Encontros mensais", "1 por mês, regionais, em formatos diferentes: jantar, almoço, charuto, kart, golfe."],
  ["Podcast do The Group", "Episódios e cortes."],
  ["App", "Aba de parceiros, aberta só para membros."],
  ["Site", "Home e /parcerias de ogrupo.com.br, com tráfego pago todo mês."],
  ["Instagram", "Conteúdo de todo encontro e de toda The House."],
];

const PERFIL = [
  "Resposta direta e conversão",
  "Marcas físicas e nutracêuticos",
  "SaaS e recorrência",
  "Experts e marcas pessoais",
  "Copywriters e gestores de mídia",
];

/* ---------------- montagem ---------------- */
const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ROOT = document.body.dataset.root || "./";
const PAGE = document.body.dataset.page || "home";

function zap(texto) {
  return "https://wa.me/" + AJUSTES.whatsapp + "?text=" + encodeURIComponent(texto);
}
function abertas(n) {
  return AJUSTES.vagas[n].filter((v) => !v).length;
}
function contagem(n) {
  const total = AJUSTES.vagas[n].length, a = abertas(n);
  if (a === 0) return "Todas preenchidas";
  if (total === 1) return "Vaga aberta";
  return a + " de " + total + " abertas";
}

function slot(n, v, i, destaque) {
  const href = ROOT + n + "/#vaga-" + (i + 1);
  if (!v) {
    return '<a class="slot open' + (destaque ? " hl" : "") + '" id="vaga-' + (i + 1) + '" href="' + href + '" aria-label="' + esc(NIVEIS[n].rotulo) + ', vaga ' + (i + 1) + ' aberta">' +
      '<span class="mark">' + ICONE + "</span>" +
      '<span class="state"><i></i>Vaga aberta</span></a>';
  }
  const alvo = v.link ? ' href="' + esc(v.link) + '" target="_blank" rel="noopener"' : "";
  const tag = v.link ? "a" : "div";
  return "<" + tag + ' class="slot filled" id="vaga-' + (i + 1) + '"' + alvo + ">" +
    '<span class="logo"><img src="' + ROOT + esc(v.logo) + '" alt="' + esc(v.nome) + '"></span>' +
    '<span class="state"><i></i>' + esc(v.categoria || "Preenchida") + "</span></" + tag + ">";
}

function slots(n, destaque) {
  return '<div class="slots ' + n + '">' + AJUSTES.vagas[n].map((v, i) => slot(n, v, i, destaque === i + 1)).join("") + "</div>";
}

function regras() {
  return '<section class="rules wrap"><h2 class="label">Regras para todos os níveis</h2><ol>' +
    REGRAS.map((r) => "<li>" + r + "</li>").join("") + "</ol></section>";
}

function cta(texto, sub) {
  return '<section class="cta wrap"><h2>Quer ser parceiro do The Group?</h2><p>' + sub + '</p>' +
    '<a class="btn" href="' + zap(texto) + '" target="_blank" rel="noopener">Falar com a gente</a></section>';
}

function home() {
  let h = '<section class="hero wrap"><p class="eyebrow">Cotas de patrocínio</p><h1>The Partners</h1>' +
    '<p class="lead muted">Três níveis de parceria com o grupo, por contrato anual. Clique numa vaga aberta para ver tudo o que aquele nível recebe.</p></section>';

  h += '<section class="wrap"><div class="audience"><p class="big">' + esc(AJUSTES.receita) + '</p><p class="big-sub">' + esc(AJUSTES.receitaTexto) + '</p>' +
    '<ul class="chips">' + PERFIL.map((p) => "<li>" + p + "</li>").join("") + "</ul></div></section>";

  ORDEM.forEach((n, k) => {
    const N = NIVEIS[n];
    h += (k ? '<div class="wrap"><hr class="sep"></div>' : "") +
      '<section class="tier wrap" id="' + n + '"><h2 class="label">' + N.rotulo + "</h2>" +
      '<p class="desc">' + N.curto + "</p>" +
      (AJUSTES.preco[n] ? '<p class="price"><b>' + esc(AJUSTES.preco[n]) + "</b></p>" : "") +
      '<p class="count">' + N.vagasTexto + " &middot; " + contagem(n) + "</p>" +
      slots(n) +
      '<a class="more" href="' + ROOT + n + '/">Ver o que ' + (n === "principal" ? "o parceiro principal recebe" : n === "oficiais" ? "os oficiais recebem" : "os apoiadores recebem") + " " + SETA_DIR + "</a></section>";
  });

  h += '<div class="wrap"><hr class="sep"></div><section class="base wrap"><h2 class="label">O que o The Group entrega no ano</h2>' +
    '<p class="desc lead muted" style="text-align:center;margin-top:12px">Todas as cotas são montadas em cima destas frentes.</p>' +
    '<div class="base-grid">' + BASE.map((b) => "<div><h3>" + b[0] + "</h3><p>" + b[1] + "</p></div>").join("") + "</div></section>";

  h += '<div class="wrap"><hr class="sep"></div>' + regras();
  h += '<div class="wrap"><hr class="sep"></div>' + cta("Olá! Tenho interesse em uma cota de patrocínio do The Group.", "A gente conversa e monta a cota com você.");
  return h;
}

function nivel(n) {
  const N = NIVEIS[n];
  const m = location.hash.match(/vaga-(\d+)/);
  const destaque = m ? +m[1] : 0;
  const total = AJUSTES.vagas[n].length, a = abertas(n);
  let status = a === 0 ? "Todas as vagas deste nível estão preenchidas."
    : total === 1 ? "<b>Vaga aberta.</b>"
    : "<b>" + a + " de " + total + " vagas abertas.</b> As vagas com logo já estão preenchidas.";
  const preco = AJUSTES.preco[n];

  let h = '<section class="hero wrap"><p class="eyebrow">' + N.rotulo + "</p><h1>" + N.titulo + "</h1>" +
    '<p class="lead muted">' + N.resumo + "</p>" +
    (preco ? '<p class="price"><b>' + esc(preco) + "</b></p>" : "") +
    slots(n, destaque) + '<p class="status">' + status + "</p></section>";

  h += '<section class="gets wrap"><h2 class="label left">O que este nível recebe</h2><dl>' +
    N.entregas.map((e) => '<div class="row"><dt>' + e[0] + "</dt><dd>" + e[1] + "</dd></div>").join("") + "</dl></section>";

  h += '<section class="compare wrap"><h2 class="label left">Os três níveis</h2><div class="compare-grid">' +
    ORDEM.map((o) => '<a href="' + ROOT + o + '/" class="' + (o === n ? "here" : "") + '"><p class="t">' + NIVEIS[o].rotulo + '</p><p class="s">' + NIVEIS[o].curto + '</p><p class="o">' + (AJUSTES.preco[o] ? esc(AJUSTES.preco[o]) + " &middot; " : "") + contagem(o) + "</p></a>").join("") +
    "</div></section>";

  h += regras();
  h += '<div class="wrap"><hr class="sep"></div>' + cta("Olá! Tenho interesse na cota de " + N.rotulo.toLowerCase() + " do The Group.", "Conte para a gente sobre a sua marca.");
  return h;
}

/* Quebra de linha: nunca deixa uma palavra sozinha na última linha,
   nem separa "R$" do valor, número da palavra seguinte ou palavra de uma letra. */
function semViuva(raiz) {
  raiz.querySelectorAll("h1, h2, h3, p, li, dt, dd").forEach((el) => {
    if (el.querySelector("p, li")) return;
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nos = [];
    while (w.nextNode()) nos.push(w.currentNode);
    nos.forEach((n) => {
      let t = n.nodeValue.replace(/R\$ /g, "R$\u00a0").replace(/(\d) (?=\S)/g, "$1\u00a0");
      for (let k = 0; k < 2; k++) t = t.replace(/(^|[\s\u00a0])(\S) (?=\S)/g, "$1$2\u00a0");
      n.nodeValue = t;
    });
    let fim = true;
    for (let i = nos.length - 1; i >= 0; i--) {
      let t = nos[i].nodeValue;
      if (fim) { t = t.replace(/\s+$/, ""); if (!t) continue; fim = false; }
      const k = t.lastIndexOf(" ");
      if (k >= 0) {
        if (k === 0 && i === 0) return;
        nos[i].nodeValue = nos[i].nodeValue.slice(0, k) + "\u00a0" + nos[i].nodeValue.slice(k + 1);
        return;
      }
    }
  });
}

/* Equilibra frases curtas em qualquer navegador: estreita a caixa até o menor
   tamanho que mantém o mesmo número de linhas, para as linhas ficarem parecidas. */
const EQUILIBRAR = "h1, .lead, .desc, .big-sub, .price, .count, .status, .cta h2, .cta p, .compare .s, .base-grid p";
function equilibrar() {
  document.querySelectorAll(EQUILIBRAR).forEach((el) => {
    el.style.maxWidth = "";
    const altura = el.getBoundingClientRect().height;
    const linha = parseFloat(getComputedStyle(el).lineHeight) || 20;
    if (altura < linha * 1.6) return;
    let hi = el.getBoundingClientRect().width, lo = hi / 3;
    while (hi - lo > 2) {
      const meio = (hi + lo) / 2;
      el.style.maxWidth = meio + "px";
      if (el.getBoundingClientRect().height > altura + 1) lo = meio; else hi = meio;
    }
    el.style.maxWidth = Math.ceil(hi) + 1 + "px";
    if (getComputedStyle(el).textAlign === "center") { el.style.marginLeft = "auto"; el.style.marginRight = "auto"; }
  });
}
let esperaEq;
window.addEventListener("resize", () => { clearTimeout(esperaEq); esperaEq = setTimeout(equilibrar, 120); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(equilibrar);

function montar() {
  $("#app").innerHTML = PAGE === "home" ? home() : nivel(PAGE);
  semViuva($("#app"));
  equilibrar();
}
montar();
$("#ano").textContent = new Date().getFullYear();
semViuva(document.querySelector("footer"));
if (PAGE !== "home") {
  document.title = NIVEIS[PAGE].rotulo + " · Parceiros · The Group";
  window.addEventListener("hashchange", montar);
}
