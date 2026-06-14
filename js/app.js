// ============================================================
// EHBO — router, renderers, zoeken & micro-animaties
// ============================================================

const VRAGEN = [
  ...VRAGEN_1,
  ...VRAGEN_2,
  ...VRAGEN_3,
  ...VRAGEN_4,
  ...VRAGEN_5,
  ...VRAGEN_6,
  ...VRAGEN_7,
  ...VRAGEN_8,
  ...VRAGEN_9,
  ...VRAGEN_10,
  ...VRAGEN_11,
  ...VRAGEN_12,
  ...VRAGEN_13
];
const app = document.getElementById("app");

const themaVan = id => THEMAS.find(t => t.id === id);
const boekVan = id => BOEKEN[id];
const vraagVan = id => VRAGEN.find(v => v.id === id);
const onderzoekVan = id => ONDERZOEKEN.find(o => o.id === id);
const leeftijdNaam = id => (LEEFTIJDEN.find(l => l.id === id) || {}).naam || id;
const leeftijdPillsHTML = leeftijden => leeftijden
  .map(id => `<span class="kaart-leeftijd-pill">${leeftijdNaam(id)}</span>`)
  .join("");

/* ---------- bouwstenen ---------- */

function vraagKaartHTML(v, i = 0, groot = false) {
  const t = themaVan(v.thema);
  return `
  <a class="vraag-kaart verschijn ${groot ? "kaart-groot" : ""}" href="#/vraag/${v.id}"
     style="--accent:${t.accent}; --wacht:${Math.min(i * 0.07, 0.5)}s">
    <span class="kaart-thema">${t.icoon} ${t.naam}</span>
    <h3>${v.vraag}</h3>
    <p class="kort">${v.kort}</p>
    <span class="kaart-voet">
      <span class="kaart-leeftijden" aria-label="Leeftijden">${leeftijdPillsHTML(v.leeftijd)}</span>
      <span class="pijl">Lees <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </span>
  </a>`;
}

function bronHTML(b) {
  const boek = boekVan(b.boek);
  if (!boek) return "";
  return `
  <a class="bron" href="#/boek/${b.boek}" style="--boekkleur:${boek.kleur}">
    ${bronThumbHTML(b.boek, boek)}
    <span class="bron-info">
      <strong>${boek.titel}</strong>
      <em>${boek.auteur} (${boek.jaar})</em><br>${b.detail}
    </span>
  </a>`;
}

function bronThumbHTML(id, boek) {
  if (!boek.cover) return `<span class="bron-rug" aria-hidden="true"></span>`;
  return `<span class="bron-rug bron-cover-wrap" aria-hidden="true"><img src="${boek.cover}" alt="" loading="lazy"></span>`;
}

function boekCoverHTML(id, boek, decoratief = true) {
  if (!boek.cover) {
    return `<span class="boek-rug" style="--boekkleur:${boek.kleur}" ${decoratief ? `aria-hidden="true"` : ""}><span>${boek.icoon}</span></span>`;
  }
  const alt = decoratief ? "" : `Boekomslag van ${boek.titel}`;
  return `<span class="boek-rug boek-cover-wrap" style="--boekkleur:${boek.kleur}" ${decoratief ? `aria-hidden="true"` : ""}>
    <img class="boek-cover" src="${boek.cover}" alt="${alt}" loading="lazy">
  </span>`;
}

const WINKEL_LOGOS = {
  "Bol.com": { src: "assets/logos/bol.svg", klasse: "bol" },
  "Standaard Boekhandel": { src: "assets/logos/standaard-boekhandel.svg", klasse: "standaard" },
  "Amazon": { src: "assets/logos/amazon.svg", klasse: "amazon" }
};

function winkelLogoHTML(label) {
  const logo = WINKEL_LOGOS[label];
  if (!logo) return "";
  return `<span class="winkel-logo winkel-logo-${logo.klasse}" aria-hidden="true"><img src="${logo.src}" alt="" loading="lazy"></span>`;
}

function sterrenHTML(score) {
  const pct = (score / 5 * 100).toFixed(1);
  return `<span class="sterren" style="--pct:${pct}%" aria-label="${score} van 5 sterren">
    <span class="sterren-grijs" aria-hidden="true">★★★★★</span>
    <span class="sterren-kleur" aria-hidden="true">★★★★★</span>
  </span>`;
}

function amazonRatingHTML(boek) {
  const r = boek.amazonRating;
  if (!r || !r.score || !r.count) return "";
  const fmt = new Intl.NumberFormat("nl-NL");
  const amazonLink = (boek.koopLinks || []).find(link => link.label === "Amazon")?.url || "#/boeken";
  return `
    <a class="boek-rating amazon-rating geladen" href="${amazonLink}" target="_blank" rel="noopener noreferrer" aria-label="Amazon-score: ${r.score.toFixed(1)} van 5 sterren, ${fmt.format(r.count)} reviews">
      <span class="rating-bron"><span class="winkel-logo winkel-logo-amazon" aria-hidden="true"><img src="assets/logos/amazon.svg" alt="" loading="lazy"></span> Amazon</span>
      ${sterrenHTML(r.score)}
      <span class="rating-score">${r.score.toFixed(1)}</span>
      <span class="rating-tel">${fmt.format(r.count)} reviews</span>
    </a>`;
}

function koopLinksHTML(boek) {
  if (!boek.koopLinks || !boek.koopLinks.length) return "";
  return `
    <div class="koop-blok verschijn" style="--wacht:.16s">
      <span class="koop-label">Koop of zoek dit boek</span>
      <div class="koop-links">
        ${boek.koopLinks.map(link => `<a class="koop-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${winkelLogoHTML(link.label)}<span class="koop-link-label">${link.label}</span></a>`).join("")}
      </div>
    </div>`;
}

function chipRijHTML(actiefId = null) {
  return THEMAS.map(t => {
    const tel = VRAGEN.filter(v => v.thema === t.id).length;
    return `<a class="chip ${t.id === actiefId ? "actief" : ""}" href="#/thema/${t.id}">
      ${t.icoon} ${t.naam} <span class="chip-tel">${tel}</span></a>`;
  }).join("");
}

function schud(lijst) {
  const kopie = [...lijst];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

function vindLichtkrantBotsing(lijst) {
  if (lijst.length < 2) return -1;
  for (let i = 0; i < lijst.length; i++) {
    if (lijst[i].thema === lijst[(i + 1) % lijst.length].thema) return i;
  }
  return -1;
}

function herstelLichtkrantVolgorde(lijst) {
  let huidige = [...lijst];
  const maxPogingen = huidige.length * 2;

  for (let poging = 0; poging < maxPogingen; poging++) {
    const botsing = vindLichtkrantBotsing(huidige);
    if (botsing === -1) return huidige;

    const volgende = (botsing + 1) % huidige.length;
    for (let kandidaat = 0; kandidaat < huidige.length; kandidaat++) {
      if (kandidaat === botsing || kandidaat === volgende) continue;
      const test = [...huidige];
      [test[volgende], test[kandidaat]] = [test[kandidaat], test[volgende]];
      if (vindLichtkrantBotsing(test) === -1) {
        huidige = test;
        break;
      }
    }
  }

  return huidige;
}

function gemengdeLichtkrantVragen(vragen) {
  const groepen = THEMAS.map(t => ({
    thema: t.id,
    vragen: schud(vragen.filter(v => v.thema === t.id))
  })).filter(g => g.vragen.length);
  const resultaat = [];
  let laatsteThema = null;

  while (groepen.some(g => g.vragen.length)) {
    const eersteThema = resultaat[0]?.thema;
    const laatsteKeuze = groepen.reduce((som, g) => som + g.vragen.length, 0) === 1;
    let kandidaten = groepen.filter(g =>
      g.vragen.length &&
      g.thema !== laatsteThema &&
      (!laatsteKeuze || g.thema !== eersteThema)
    );
    if (!kandidaten.length) kandidaten = groepen.filter(g => g.vragen.length && g.thema !== laatsteThema);
    if (!kandidaten.length) kandidaten = groepen.filter(g => g.vragen.length);

    const hoogsteAantal = Math.max(...kandidaten.map(g => g.vragen.length));
    const besteKandidaten = kandidaten.filter(g => g.vragen.length === hoogsteAantal);
    const gekozen = besteKandidaten[Math.floor(Math.random() * besteKandidaten.length)];
    resultaat.push(gekozen.vragen.pop());
    laatsteThema = gekozen.thema;
  }

  return herstelLichtkrantVolgorde(resultaat);
}

const PAGINA_BEELDEN = {
  vragen: "img/page-headers/vragen.jpg",
  noodhulp: "img/page-headers/noodhulp.jpg",
  mythes: "img/page-headers/mythes.jpg",
  regels: "img/page-headers/regels.jpg",
  boeken: "img/page-headers/boeken.jpg"
};

function kopBeeldHTML(id) {
  const src = PAGINA_BEELDEN[id];
  if (!src) return "";
  return `<figure class="kopbeeld kopbeeld-${id}" aria-hidden="true">
    <img src="${src}" alt="" loading="lazy">
  </figure>`;
}

function sectieKop(label, titel, intro = "", beeldId = "", naLink = null) {
  const titelRij = naLink
    ? `<div class="sectie-kop-rij"><h2>${titel}</h2><a class="sectie-alle-link" href="${naLink.href}">${naLink.label}<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>`
    : `<h2>${titel}</h2>`;
  return `<div class="sectie-kop${beeldId ? " sectie-kop-met-beeld" : ""} verschijn">
    <div class="sectie-kop-tekst">
      <span class="bovenlabel">${label}</span>
      ${titelRij}
      ${intro ? `<p class="sectie-intro">${intro}</p>` : ""}
    </div>
    ${kopBeeldHTML(beeldId)}
  </div>`;
}

/* ---------- pagina's ---------- */

function renderHome() {
  const uitgelicht = VRAGEN.filter(v => v.uitgelicht);
  const rest = VRAGEN.filter(v => !v.uitgelicht).slice(0, 3);
  const bandItems = gemengdeLichtkrantVragen(VRAGEN).map(v => {
    const t = themaVan(v.thema);
    return `<a class="band-item" href="#/vraag/${v.id}"><span class="b-icoon">${t.icoon}</span>${v.vraag}</a>`;
  }).join("");

  app.innerHTML = `
  <section class="held">
    <div class="held-vormen" aria-hidden="true">
      <div class="vorm-boog"></div>
      <div class="vorm vorm-1"></div><div class="vorm vorm-2"></div><div class="vorm vorm-3"></div>
    </div>
    <figure class="held-foto" aria-hidden="true">
      <img src="img/hero/moeilijk-moment.jpg" alt="" loading="eager" fetchpriority="high">
    </figure>
    <div class="held-binnen">
      <h1 class="verschijn" style="--wacht:.22s">Opvoedhulp voor <em>moeilijke momenten</em></h1>
      <p class="held-intro verschijn" style="--wacht:.44s">Praktische antwoorden op échte opvoedvragen, geschreven in gewone taal en onderbouwd met ontwikkelingspsychologie, hechtingsonderzoek en gerenommeerde opvoedbronnen. Wat doe je bij een driftbui? Mag je baby huilen? Wanneer die smartphone? Rustig, bruikbaar en eerlijk.</p>
      <div class="held-acties verschijn" style="--wacht:.66s">
        <a class="knop knop-vol" href="#/themas">Vind je antwoord <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        <a class="knop knop-nood" href="#/noodhulp">🚨 Noodhulp — het brandt nú</a>
      </div>
      <div class="held-cijfers verschijn" style="--wacht:.88s">
        <div class="cijfer"><span class="getal">${VRAGEN.length}</span><span class="uitleg">praktische vragen</span></div>
        <div class="cijfer"><span class="getal">${NOODHULP.length}</span><span class="uitleg">noodplannen</span></div>
        <div class="cijfer"><span class="getal">${ONDERZOEKEN.length}</span><span class="uitleg">onderzoeken</span></div>
        <div class="cijfer"><span class="getal">${MYTHES.length}</span><span class="uitleg">mythes ontkracht</span></div>
      </div>
    </div>
  </section>

  <div class="lopende-band" aria-label="Veelgestelde vragen">
    <div class="band-spoor">${bandItems}${bandItems}</div>
  </div>

  <section class="sectie home-sectie">
    ${sectieKop("Meest gezocht", "Begin bij deze vragen", "De vragen waar elke ouder vroeg of laat wakker van ligt — met het korte antwoord meteen erbij.")}
    <div class="kaart-raster">
      ${uitgelicht.map((v, i) => vraagKaartHTML(v, i, i === 0)).join("")}
      ${rest.map((v, i) => vraagKaartHTML(v, uitgelicht.length + i)).join("")}
    </div>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("Op thema", "Waar zit jij mee?")}
    <div class="chip-rij verschijn">${chipRijHTML()}</div>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("Noodhulp", "Voor als het nú brandt", "Geen theorie maar een stappenplan. Voor de momenten waarop je geen hoofdstuk kunt lezen omdat er iemand op de grond ligt te krijsen.", "", { href: "#/noodhulp", label: `Alle ${NOODHULP.length} noodplannen` })}
    <div class="kaart-raster">
      ${NOODHULP.map((n, i) => `
        <a class="nood-kaart verschijn" href="#/nood/${n.id}" style="--wacht:${i * 0.07}s">
          <h3>${n.icoon} ${n.titel}</h3>
          <p class="kort">${n.kort}</p>
          <span class="kaart-voet"><span>${n.stappen.length} stappen</span>
          <span class="pijl" style="color:var(--nood)">Open plan <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></span>
        </a>`).join("")}
    </div>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("Hardnekkige mythes", "Dit dacht iedereen — en het klopt niet", "Sommige opvoedadviezen worden al generaties doorgegeven en door onderzoek keihard tegengesproken.")}
    <div id="mytheLijst">
      ${MYTHES.slice(0, 3).map(mytheHTML).join("")}
    </div>
    <p class="verschijn" style="margin-top:22px"><a class="knop knop-rand" href="#/mythes">Alle ${MYTHES.length} mythes ontkracht</a></p>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("Onderzoeken", "Verrassend bewijs achter opvoedadvies", "Korte, nieuwsgierig makende samenvattingen van studies en reviews — telkens vertaald naar wat je er thuis wel en niet mee kunt.", "", { href: "#/onderzoeken", label: `Alle ${ONDERZOEKEN.length} onderzoeken` })}
    <div class="onderzoek-raster onderzoek-raster-home">
      ${ONDERZOEKEN.slice(0, 3).map((o, i) => onderzoekKaartHTML(o, i)).join("")}
    </div>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("De rode draad", "Tien gouden regels uit onderzoek en praktijk", "Onderzoek, klinische praktijk en gerenommeerde opvoedbronnen wijzen opvallend vaak dezelfde kant op. Dit zijn oriënterende inzichten om daarna zelf verder te lezen of toe te passen.")}
    <div class="regel-raster home-regel-swimlane">
      ${REGELS.map((r, i) => regelHTML(r, i)).join("")}
    </div>
    <p class="verschijn" style="margin-top:22px"><a class="knop knop-rand" href="#/regels">Alle ${REGELS.length} gouden regels</a></p>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("De bronnen", "Boeken en bronnen om verder te lezen", "De site bevat eigen tekst, bibliografische verwijzingen en zoeklinks, geen boekbestanden of officiële samenvattingen. Dit zijn gerenommeerde werken om zelf verder in te lezen.")}
    <div class="chip-rij verschijn">
      ${Object.entries(BOEKEN).map(([id, b]) => `<a class="chip" href="#/boek/${id}">${b.icoon} ${b.titel}</a>`).join("")}
    </div>
  </section>`;
}

function mytheHTML(m, i = 0) {
  const boek = boekVan(m.bron);
  return `
  <div class="mythe verschijn" style="--wacht:${i * 0.06}s">
    <button class="mythe-kop" aria-expanded="false">
      <span class="mythe-label">Mythe</span>
      <span class="mythe-titel">${m.mythe}</span>
      <svg class="klepje" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
    </button>
    <div class="mythe-romp"><div>
      <div class="mythe-binnen">
        <span class="mythe-feit">Wat het onderzoek zegt</span>
        ${m.feit.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        <p class="mythe-bron">Bron: <a href="#/boek/${m.bron}">${boek.titel}</a> — ${m.bronDetail}</p>
      </div>
    </div></div>
  </div>`;
}

function regelHTML(r, i) {
  const boek = boekVan(r.bron);
  return `
  <article class="regel verschijn" style="--wacht:${Math.min(i * 0.06, 0.4)}s">
    <span class="regel-nr">${String(i + 1).padStart(2, "0")}</span>
    <h3>${r.titel}</h3>
    <p>${r.tekst}</p>
    <a class="regel-bron" href="#/boek/${r.bron}"><span>Vooral uit: ${boek.titel}</span><svg flex-shrink="0" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
  </article>`;
}

function onderzoekKaartHTML(o, i = 0) {
  const t = themaVan(o.thema) || THEMAS[0];
  const eersteBoek = boekVan(o.boeken[0]);
  return `
  <a class="onderzoek-kaart verschijn" href="#/onderzoek/${o.id}" style="--accent:${t.accent}; --wacht:${Math.min(i * 0.045, 0.45)}s">
    <span class="onderzoek-label">${t.icoon} ${t.naam}</span>
    <h3>${o.titel}</h3>
    <p class="onderzoek-haakje">${o.haakje}</p>
    <span class="onderzoek-meta">
      <span>Onderzoeksbron</span>
      <span>Besproken in ${eersteBoek ? eersteBoek.titel : "de bronnen"}</span>
    </span>
  </a>`;
}

function onderzoekBoekLinksHTML(boeken) {
  return boeken
    .map(id => {
      const boek = boekVan(id);
      if (!boek) return "";
      return `<a class="onderzoek-boek-chip" href="#/boek/${id}" style="--boekkleur:${boek.kleur}">${boek.icoon} ${boek.titel}</a>`;
    })
    .join("");
}

function leeftijdStripHTML() {
  const ranges  = { baby: "0–1", peuter: "1–4", kind: "4–12", tiener: "12+" };
  const filterAccent = "#c2502a";
  const namen   = { baby: "Baby", peuter: "Peuter", kind: "Kind", tiener: "Tiener" };
  const beelden = {
    alle: "img/age-filters/all.jpg",
    baby: "img/age-filters/baby.jpg",
    peuter: "img/age-filters/peuter.jpg",
    kind: "img/age-filters/kind.jpg",
    tiener: "img/age-filters/tiener.jpg"
  };
  const opties = [
    { id: "alle", bereik: "Alle", naam: "leeftijden", actief: true },
    ...LEEFTIJDEN.map(l => ({ id: l.id, bereik: ranges[l.id], naam: namen[l.id], actief: false }))
  ];
  return opties.map(opt => `<button class="leeftijd-card${opt.actief ? " actief" : ""}" data-leeftijd="${opt.id}" style="--ls-k:${filterAccent}" aria-pressed="${opt.actief}">
    <span class="leeftijd-card-beeld" aria-hidden="true">
      <img src="${beelden[opt.id]}" alt="" loading="lazy">
    </span>
    <span class="leeftijd-card-inhoud">
      <span class="leeftijd-card-bereik">${opt.bereik}</span>
      <span class="leeftijd-card-naam">${opt.naam}</span>
    </span>
  </button>`).join("");
}

function swimLanesHTML(vragen) {
  return THEMAS.map(t => {
    const groep = vragen.filter(v => v.thema === t.id);
    if (!groep.length) return "";
    return `
    <div class="swim-lane verschijn" data-thema="${t.id}">
      <a class="swim-lane-kop" href="#/thema/${t.id}" style="--accent:${t.accent}">
        <span class="swim-lane-label">${t.icoon} ${t.naam}</span>
        <span class="swim-lane-rechts">
          <span class="swim-lane-tel">${groep.length}</span>
          <svg class="swim-lane-pijl" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </a>
      <div class="swim-lane-rij">
        ${groep.map((v, i) => vraagKaartHTML(v, i)).join("")}
      </div>
    </div>`;
  }).join("");
}

function renderThemas() {
  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("Alle vragen", "Waar zit jij mee?", "Kies een thema of filter op leeftijd. Elk antwoord: eerst kort, dan onderbouwd, altijd met bronnen.", "vragen")}
    <div class="chip-rij verschijn">${chipRijHTML()}</div>
    <div class="leeftijd-strip verschijn" role="group" aria-label="Filter op leeftijd">
      ${leeftijdStripHTML()}
    </div>
    <div id="vragenRaster" style="margin-top:34px">
      ${swimLanesHTML(VRAGEN)}
    </div>
  </section>`;

  app.querySelectorAll("[data-leeftijd]").forEach(knop => {
    knop.addEventListener("click", () => {
      app.querySelectorAll("[data-leeftijd]").forEach(k => { k.classList.remove("actief"); k.setAttribute("aria-pressed", "false"); });
      knop.classList.add("actief"); knop.setAttribute("aria-pressed", "true");
      const keuze = knop.dataset.leeftijd;
      const gefilterd = keuze === "alle" ? VRAGEN : VRAGEN.filter(v => v.leeftijd.includes(keuze));
      const raster = document.getElementById("vragenRaster");
      raster.innerHTML = gefilterd.length
        ? swimLanesHTML(gefilterd)
        : `<p class="leeg-melding">Nog geen vragen voor deze leeftijd.</p>`;
      animaties();
    });
  });
}

function renderThema(id) {
  const t = themaVan(id);
  if (!t) return renderHome();
  const lijst = VRAGEN.filter(v => v.thema === id);
  app.innerHTML = `
  <section class="sectie">
    <a class="terug-link" href="#/themas"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Alle thema's</a>
    ${sectieKop(`${t.icoon} Thema`, t.naam, t.uitleg)}
    <div class="chip-rij verschijn" style="margin-bottom:34px">${chipRijHTML(id)}</div>
    <div class="kaart-raster">${lijst.map((v, i) => vraagKaartHTML(v, i)).join("")}</div>
  </section>`;
}

function renderVraag(id) {
  const v = vraagVan(id);
  if (!v) return renderHome();
  const t = themaVan(v.thema);

  app.innerHTML = `
  <article class="sectie sectie-smal">
    <nav class="kruimels verschijn" aria-label="Kruimelpad">
      <a href="#/">Home</a><span class="scheider">/</span>
      <a href="#/thema/${t.id}">${t.icoon} ${t.naam}</a><span class="scheider">/</span>
      <span>${v.leeftijd.map(leeftijdNaam).join(" · ")}</span>
    </nav>
    <h1 class="vraag-titel verschijn" style="--wacht:.05s">${v.vraag}</h1>
    <div class="tldr verschijn" style="--wacht:.12s"><p>${v.kort}</p></div>
    <div class="antwoord-blok">
      ${v.blokken.map((b, i) => `
        ${b.kop ? `<h2 class="verschijn">${b.kop}</h2>` : ""}
        <p class="verschijn" style="--wacht:${Math.min(i * 0.04, 0.2)}s">${b.tekst}</p>`).join("")}
    </div>
    <div class="doe-vermijd">
      <div class="dv-kaart dv-doe verschijn">
        <h3>✓ Doe dit</h3>
        <ul>${v.doeDit.map(d => `<li>${d}</li>`).join("")}</ul>
      </div>
      <div class="dv-kaart dv-vermijd verschijn" style="--wacht:.08s">
        <h3>✕ Vermijd dit</h3>
        <ul>${v.vermijd.map(d => `<li>${d}</li>`).join("")}</ul>
      </div>
    </div>
    ${v.zegDit ? `
    <div class="zeg-dit verschijn">
      <h3>💬 Zinnen die je letterlijk kunt zeggen</h3>
      <ul>${v.zegDit.map(z => `<li>${z}</li>`).join("")}</ul>
    </div>` : ""}
    <div class="bronnen verschijn">
      <h2>Waar dit vandaan komt</h2>
      <div class="bron-lijst">${v.bronnen.map(bronHTML).join("")}</div>
    </div>
    ${v.gerelateerd && v.gerelateerd.length ? `
    <div class="gerelateerd">
      <h2 class="verschijn" style="font-size:1.4rem">Lees ook</h2>
      <div class="kaart-raster" style="margin-top:20px">
        ${v.gerelateerd.map(vraagVan).filter(Boolean).map((g, i) => vraagKaartHTML(g, i)).join("")}
      </div>
    </div>` : ""}
  </article>`;
}

function renderNoodhulp() {
  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("🚨 Noodhulp", "Het brandt <em>nú</em>. Kies je situatie.", "Geen achtergrond, geen theorie — die staan bij de vragen. Hier vind je alleen wat je de komende vijf minuten doet, stap voor stap.", "noodhulp")}
    <div class="kaart-raster nood-raster">
      ${NOODHULP.map((n, i) => `
        <a class="nood-kaart verschijn" href="#/nood/${n.id}" style="--wacht:${i * 0.06}s">
          <h3>${n.icoon} ${n.titel}</h3>
          <p class="kort">${n.kort}</p>
          <span class="kaart-voet"><span>${n.stappen.length} stappen</span>
          <span class="pijl" style="color:var(--nood)">Open plan <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></span>
        </a>`).join("")}
    </div>
  </section>`;
}

function renderNood(id) {
  const n = NOODHULP.find(x => x.id === id);
  if (!n) return renderNoodhulp();
  app.innerHTML = `
  <article class="sectie sectie-smal">
    <div class="detail-nav-rij">
      <a class="terug-link" href="#/noodhulp" style="color:var(--nood)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Alle noodplannen</a>
      <span class="bovenlabel verschijn" style="color:var(--nood)">🚨 Noodplan</span>
    </div>
    <h1 class="vraag-titel verschijn" style="--wacht:.05s">${n.icoon} ${n.titel}</h1>
    <p class="sectie-intro verschijn" style="--wacht:.1s">${n.kort}</p>
    <div class="nood-stappen">
      ${n.stappen.map((s, i) => `
        <div class="stap verschijn" style="--wacht:${i * 0.08}s">
          <h3>${s.kop}</h3>
          <p>${s.tekst}</p>
          ${s.zeg ? `<span class="stap-zeg">${s.zeg}</span>` : ""}
        </div>`).join("")}
    </div>
    <div class="bronnen verschijn">
      <h2>Waar dit vandaan komt</h2>
      <div class="bron-lijst">
        ${n.bronnen.map(id => {
          const b = boekVan(id);
          return `<a class="bron" href="#/boek/${id}" style="--boekkleur:${b.kleur}">
            ${bronThumbHTML(id, b)}
            <span class="bron-info"><strong>${b.titel}</strong><em>${b.auteur} (${b.jaar})</em></span></a>`;
        }).join("")}
      </div>
    </div>
  </article>`;
}

function renderMythes() {
  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("Mythbusters", "Hardnekkige mythes, ontkracht", "Adviezen die al generaties doorgegeven worden en die onderzoek en de geraadpleegde bronnen stevig tegenspreken. Klik open voor wat er wél klopt.", "mythes")}
    <div class="leeftijd-strip mythe-filter verschijn" role="group" aria-label="Filter mythes op leeftijd">
      ${leeftijdStripHTML()}
    </div>
    <div id="mytheLijst" style="margin-top:34px">${MYTHES.map(mytheHTML).join("")}</div>
  </section>`;

  app.querySelectorAll("[data-leeftijd]").forEach(knop => {
    knop.addEventListener("click", () => {
      app.querySelectorAll("[data-leeftijd]").forEach(k => { k.classList.remove("actief"); k.setAttribute("aria-pressed", "false"); });
      knop.classList.add("actief"); knop.setAttribute("aria-pressed", "true");
      const keuze = knop.dataset.leeftijd;
      const lijst = keuze === "alle" ? MYTHES : MYTHES.filter(m => m.leeftijd.includes(keuze));
      const doel = document.getElementById("mytheLijst");
      doel.innerHTML = lijst.length
        ? lijst.map(mytheHTML).join("")
        : `<p class="leeg-melding">Nog geen mythes voor deze leeftijd.</p>`;
      koppelMythes();
      animaties();
    });
  });
}

function renderOnderzoeken() {
  const themaOpties = THEMAS
    .map(t => ({ ...t, aantal: ONDERZOEKEN.filter(o => o.thema === t.id).length }))
    .filter(t => t.aantal);

  function gridHTML(filter = "") {
    const items = ONDERZOEKEN.filter(o => !filter || o.thema === filter);
    if (!items.length) return `<p class="geen-resultaat">Geen onderzoeken in deze categorie.</p>`;
    return items.map((o, i) => onderzoekKaartHTML(o, i)).join("");
  }

  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("Onderzoeken", `${ONDERZOEKEN.length} verrassende onderzoeken achter opvoedadvies`, "Geen boek-samenvattingen, maar korte vertalingen van studies en wetenschappelijke reviews: wat werd onderzocht, wat bleek, wat kun je ermee aan de keukentafel en waar moet je voorzichtig mee blijven.")}

    <div class="bron-notitie verschijn">
      <strong>Bronvermelding:</strong> elke kaart verwijst eerst naar de onderzoeksbron. Daarna tonen we in welke geraadpleegde boeken dit inzicht aansluit of verder wordt uitgewerkt.
    </div>

    <div class="boek-filters onderzoek-filters verschijn" role="group" aria-label="Filter onderzoeken op thema">
      <button class="boek-filter-knop actief" data-onderzoek-thema="">Alle onderzoeken <span>${ONDERZOEKEN.length}</span></button>
      ${themaOpties.map(t => `<button class="boek-filter-knop" data-onderzoek-thema="${t.id}">${t.icoon} ${t.naam} <span>${t.aantal}</span></button>`).join("")}
    </div>

    <div class="onderzoek-raster" id="onderzoekRaster">
      ${gridHTML("")}
    </div>
  </section>`;

  document.querySelectorAll("[data-onderzoek-thema]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-onderzoek-thema]").forEach(b => b.classList.remove("actief"));
      btn.classList.add("actief");
      document.getElementById("onderzoekRaster").innerHTML = gridHTML(btn.dataset.onderzoekThema);
      animaties();
    });
  });
}

function renderOnderzoek(id) {
  const o = onderzoekVan(id);
  if (!o) return renderOnderzoeken();
  const t = themaVan(o.thema) || THEMAS[0];
  const verwanteVragen = VRAGEN
    .filter(v => v.thema === o.thema || (v.bronnen || []).some(b => o.boeken.includes(b.boek)))
    .slice(0, 3);

  app.innerHTML = `
  <section class="sectie sectie-smal">
    <a class="terug-link" href="#/onderzoeken"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Onderzoeken</a>

    <article class="onderzoek-detail verschijn" style="--accent:${t.accent}">
      <span class="bovenlabel">${t.icoon} ${t.naam}</span>
      <h1>${o.titel}</h1>
      <p class="sectie-intro">${o.haakje}</p>
      <div class="kaart-leeftijden onderzoek-leeftijden" aria-label="Leeftijden">${leeftijdPillsHTML(o.leeftijd)}</div>

      <div class="onderzoek-detail-grid">
        <section class="onderzoek-blok">
          <span>Wat deden ze?</span>
          <p>${o.wat}</p>
        </section>
        <section class="onderzoek-blok">
          <span>Wat bleek?</span>
          <p>${o.bleek}</p>
        </section>
        <section class="onderzoek-blok">
          <span>Thuis vertaald</span>
          <p>${o.thuis}</p>
        </section>
        <section class="onderzoek-blok">
          <span>Nuance</span>
          <p>${o.nuance}</p>
        </section>
      </div>

      <section class="onderzoek-bronnen">
        <h2>Bronnen</h2>
        <div class="primaire-bron">
          <span>Onderzoeksbron</span>
          <p>${o.primaireBron}</p>
        </div>
        <div class="besproken-in">
          <span>Besproken of inhoudelijk aansluitend bij</span>
          <div class="onderzoek-boek-rij">${onderzoekBoekLinksHTML(o.boeken)}</div>
        </div>
      </section>
    </article>

    ${verwanteVragen.length ? `
      <div class="gerelateerd">
        <h2 class="verschijn" style="font-size:1.4rem">Gerelateerde vragen</h2>
        <div class="kaart-raster" style="margin-top:20px">
          ${verwanteVragen.map((v, i) => vraagKaartHTML(v, i)).join("")}
        </div>
      </div>` : ""}
  </section>`;
}

function renderRegels() {
  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("De rode draad", "De tien gouden regels", "Onderzoek, klinische ervaring en gerenommeerde opvoedbronnen komen opvallend vaak op dezelfde kern uit. Wie alleen dít onthoudt, heeft negentig procent mee.", "regels")}
    <div class="regel-raster">${REGELS.map((r, i) => regelHTML(r, i)).join("")}</div>
  </section>`;
}

function renderBoeken() {
  const CATS = [
    { id: "slapen",         naam: "Slaap",    icoon: "🌙" },
    { id: "eten",           naam: "Eten",      icoon: "🍽️" },
    { id: "emoties",        naam: "Emoties",   icoon: "🌋" },
    { id: "grenzen",        naam: "Grenzen",   icoon: "🧭" },
    { id: "communicatie",   naam: "Praten",    icoon: "💬" },
    { id: "hechting",       naam: "Hechting",  icoon: "🪢" },
  ];

  const mustReads = Object.entries(BOEKEN).filter(([, b]) => b.mustRead);

  function boekKaartHTML(id, b, i) {
    return `
      <a class="boek-kaart verschijn" href="#/boek/${id}" style="--boekkleur:${b.kleur}; --wacht:${Math.min(i * 0.05, 0.4)}s">
        ${boekCoverHTML(id, b)}
        <span>
          <h3>${b.titel}</h3>
          <span class="auteur">${b.auteur}</span>
          <span class="boek-jaar">${b.jaar}</span>
          <p class="kern">${b.kern}</p>
        </span>
      </a>`;
  }

  function gridHTML(filter) {
    const items = Object.entries(BOEKEN)
      .filter(([, b]) => !filter || (b.categorieen || []).includes(filter));
    if (!items.length) return `<p class="geen-resultaat">Geen boeken in deze categorie.</p>`;
    return items.map(([id, b], i) => boekKaartHTML(id, b, i)).join("");
  }

  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("Boekenkast", "Bronnen en verder lezen", "Elk antwoord verwijst naar boeken en experts waar vergelijkbare inzichten verder worden uitgewerkt. Klik een boek voor kernpunten, bijhorende vragen en aankooplinks.", "boeken")}

    <div class="boek-aanraders verschijn">
      <p class="aanraders-label">⭐ Absolute aanraders</p>
      <div class="aanraders-rij">
        ${mustReads.map(([id, b]) => `
          <a class="boek-kaart boek-aanrader" href="#/boek/${id}" style="--boekkleur:${b.kleur}">
            ${boekCoverHTML(id, b)}
            <span>
              <h3>${b.titel}</h3>
              <span class="auteur">${b.auteur}</span>
              <span class="boek-jaar">${b.jaar}</span>
              <p class="kern">${b.kern}</p>
            </span>
          </a>`).join("")}
      </div>
    </div>

    <div class="boek-filters" role="group" aria-label="Filter op categorie">
      <button class="boek-filter-knop actief" data-cat="">Alle boeken</button>
      ${CATS.map(c => `<button class="boek-filter-knop" data-cat="${c.id}">${c.icoon} ${c.naam}</button>`).join("")}
    </div>

    <div class="boek-raster" id="boekRaster">
      ${gridHTML("")}
    </div>
  </section>`;

  document.querySelectorAll(".boek-filter-knop").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".boek-filter-knop").forEach(b => b.classList.remove("actief"));
      btn.classList.add("actief");
      const raster = document.getElementById("boekRaster");
      raster.innerHTML = gridHTML(btn.dataset.cat);
      animaties();
    });
  });
}

function renderBoek(id) {
  const b = boekVan(id);
  if (!b) return renderBoeken();
  const citerend = VRAGEN.filter(v => v.bronnen.some(x => x.boek === id));
  app.innerHTML = `
  <section class="sectie sectie-smal">
    <a class="terug-link" href="#/boeken"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Boekenkast</a>
    <div class="boek-held verschijn">
      ${boekCoverHTML(id, b, false)}
      <div>
        <span class="bovenlabel">${b.auteur} · ${b.jaar}</span>
        <h1 style="font-size:clamp(1.8rem,4vw,2.8rem)">${b.titel}</h1>
        <p class="sectie-intro">${b.kern}</p>
        ${amazonRatingHTML(b)}
        ${koopLinksHTML(b)}
      </div>
    </div>
    <h2 class="verschijn" style="margin-top:44px; font-size:1.45rem">Oriënterende kernpunten</h2>
    <ul class="kern-lijst">
      ${b.bullets.map((k, i) => `<li class="verschijn" style="--wacht:${i * 0.08}s">${k}</li>`).join("")}
    </ul>
    ${citerend.length ? `
    <div class="gerelateerd">
      <h2 class="verschijn" style="font-size:1.4rem">Vragen die op dit boek steunen</h2>
      <div class="kaart-raster" style="margin-top:20px">
        ${citerend.map((v, i) => vraagKaartHTML(v, i)).join("")}
      </div>
    </div>` : ""}
  </section>`;
}

/* ---------- router ---------- */

const routes = [
  [/^#?\/?$/, () => { renderHome(); return "Eerste Hulp bij Opvoeden"; }],
  [/^#\/themas$/, () => { renderThemas(); return "Alle vragen"; }],
  [/^#\/thema\/(.+)$/, m => { renderThema(m[1]); return (themaVan(m[1]) || {}).naam; }],
  [/^#\/vraag\/(.+)$/, m => { renderVraag(m[1]); return (vraagVan(m[1]) || {}).vraag; }],
  [/^#\/noodhulp$/, () => { renderNoodhulp(); return "Noodhulp"; }],
  [/^#\/nood\/(.+)$/, m => { renderNood(m[1]); return "Noodplan"; }],
  [/^#\/mythes$/, () => { renderMythes(); return "Mythes ontkracht"; }],
  [/^#\/onderzoeken$/, () => { renderOnderzoeken(); return "Onderzoeken"; }],
  [/^#\/onderzoek\/(.+)$/, m => { renderOnderzoek(m[1]); return (onderzoekVan(m[1]) || {}).titel; }],
  [/^#\/regels$/, () => { renderRegels(); return "Gouden regels"; }],
  [/^#\/boeken$/, () => { renderBoeken(); return "Boekenkast"; }],
  [/^#\/boek\/(.+)$/, m => { renderBoek(m[1]); return (boekVan(m[1]) || {}).titel; }]
];

function navigeer() {
  const hash = location.hash || "#/";

  // Sla scrollpositie op van de pagina die we verlaten
  if (navigeer._huidig) {
    sessionStorage.setItem("scroll:" + navigeer._huidig, window.scrollY);
  }

  let titel = null;
  for (const [patroon, actie] of routes) {
    const m = hash.match(patroon);
    if (m) { titel = actie(m); break; }
  }
  if (titel === null) { renderHome(); titel = "Eerste Hulp bij Opvoeden"; }
  document.title = (titel && titel !== "Eerste Hulp bij Opvoeden")
    ? `${titel} — EHBO · Eerste Hulp bij Opvoeden`
    : "EHBO · Eerste Hulp bij Opvoeden — praktische opvoedvragen met bronverwijzingen";

  // Herstel scroll of ga naar boven; opgeslagen positie geldt één keer
  const opgeslagen = sessionStorage.getItem("scroll:" + hash);
  if (opgeslagen !== null) {
    sessionStorage.removeItem("scroll:" + hash);
    window.scrollTo({ top: +opgeslagen, behavior: "instant" });
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  navigeer._huidig = hash;
  markeerNav(hash);
  koppelMythes();
  animaties();
  kalibreerLopendeBand();
  document.getElementById("mobielMenu").hidden = true;
  document.getElementById("menuKnop").setAttribute("aria-expanded", "false");
}

function markeerNav(hash) {
  document.querySelectorAll(".hoofdnav a").forEach(a => {
    const sleutel = a.dataset.nav;
    const actief =
      (sleutel === "themas" && (hash.startsWith("#/thema") || hash.startsWith("#/vraag"))) ||
      (sleutel === "noodhulp" && hash.startsWith("#/nood")) ||
      (sleutel === "mythes" && hash.startsWith("#/mythes")) ||
      (sleutel === "onderzoeken" && hash.startsWith("#/onderzoek")) ||
      (sleutel === "regels" && hash.startsWith("#/regels")) ||
      (sleutel === "boeken" && hash.startsWith("#/boek"));
    a.classList.toggle("actief", actief);
  });
}

/* ---------- mythes-accordeon ---------- */

function koppelMythes() {
  document.querySelectorAll(".mythe-kop").forEach(knop => {
    knop.addEventListener("click", () => {
      const mythe = knop.closest(".mythe");
      const open = mythe.classList.toggle("open");
      knop.setAttribute("aria-expanded", open);
    });
  });
}

/* ---------- scroll-animaties ---------- */

let kijker = null;

function animaties() {
  if (kijker) kijker.disconnect();
  kijker = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("zichtbaar");
        kijker.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
  document.querySelectorAll(".verschijn").forEach(el => kijker.observe(el));
}

/* ---------- lopende band ---------- */

function kalibreerLopendeBand() {
  const spoor = document.querySelector(".band-spoor");
  if (!spoor) return;

  requestAnimationFrame(() => {
    const afstand = spoor.scrollWidth / 2;
    if (!afstand) return;

    const pixelsPerSeconde = 28;
    const minimaleDuur = 160;
    const duur = Math.max(minimaleDuur, Math.round(afstand / pixelsPerSeconde));
    spoor.style.setProperty("--band-duur", `${duur}s`);
  });
}

/* ---------- zoeken ---------- */

const zoekLaag = document.getElementById("zoekLaag");
const zoekInput = document.getElementById("zoekInput");
const zoekResultaten = document.getElementById("zoekResultaten");
let zoekIndexGekozen = -1;

function zoekIndex() {
  const items = [];
  VRAGEN.forEach(v => items.push({
    soort: "Vraag", titel: v.vraag, kort: v.kort, url: `#/vraag/${v.id}`,
    tekst: `${v.vraag} ${v.kort} ${(v.tags || []).join(" ")}`.toLowerCase()
  }));
  NOODHULP.forEach(n => items.push({
    soort: "Noodplan", titel: n.titel, kort: n.kort, url: `#/nood/${n.id}`,
    tekst: `${n.titel} ${n.kort} noodhulp acuut nu`.toLowerCase()
  }));
  MYTHES.forEach(m => items.push({
    soort: "Mythe", titel: m.mythe, kort: m.feit.slice(0, 110) + "…", url: "#/mythes",
    tekst: `${m.mythe} ${m.feit}`.toLowerCase()
  }));
  ONDERZOEKEN.forEach(o => items.push({
    soort: "Onderzoek", titel: o.titel, kort: o.haakje, url: `#/onderzoek/${o.id}`,
    tekst: `${o.titel} ${o.haakje} ${o.wat} ${o.bleek} ${o.thuis} ${o.primaireBron} ${(o.tags || []).join(" ")}`.toLowerCase()
  }));
  Object.entries(BOEKEN).forEach(([id, b]) => items.push({
    soort: "Boek", titel: b.titel, kort: `${b.auteur} · ${b.jaar}`, url: `#/boek/${id}`,
    tekst: `${b.titel} ${b.auteur} ${b.kern}`.toLowerCase()
  }));
  return items;
}

const ZOEKBAAR = zoekIndex();

function zoek(q) {
  const termen = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!termen.length) return [];
  return ZOEKBAAR
    .map(item => {
      let score = 0;
      for (const term of termen) {
        if (!item.tekst.includes(term)) return null;
        if (item.titel.toLowerCase().includes(term)) score += 3;
        else score += 1;
        if (item.soort === "Vraag") score += 1;
      }
      return { item, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(r => r.item);
}

function toonResultaten(q) {
  const lijst = zoek(q);
  zoekIndexGekozen = -1;
  if (!q.trim()) {
    zoekResultaten.innerHTML = `<div class="zoek-leeg"><strong>Waar lig jij wakker van?</strong>Probeer “driftbui”, “huilen”, “smartphone” of “straf”.</div>`;
    return;
  }
  if (!lijst.length) {
    zoekResultaten.innerHTML = `<div class="zoek-leeg"><strong>Niets gevonden voor “${q}”</strong>Probeer een ander woord — of blader door <a href="#/themas">alle thema's</a>.</div>`;
    return;
  }
  zoekResultaten.innerHTML = lijst.map(r => `
    <a class="zoek-item" href="${r.url}">
      <span class="zi-soort">${r.soort}</span>
      <span class="zi-titel">${r.titel}</span>
      <span class="zi-kort">${r.kort}</span>
    </a>`).join("");
}

function openZoek() {
  zoekLaag.hidden = false;
  document.body.style.overflow = "hidden";
  zoekInput.value = "";
  toonResultaten("");
  setTimeout(() => zoekInput.focus(), 30);
}

function sluitZoek() {
  zoekLaag.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("zoekKnop").addEventListener("click", openZoek);
document.getElementById("mobielZoekbalk").addEventListener("click", openZoek);
document.getElementById("zoekSluit").addEventListener("click", () => {
  if (zoekInput.value) {
    zoekInput.value = "";
    zoekInput.dispatchEvent(new Event("input"));
    zoekInput.focus();
  } else {
    sluitZoek();
  }
});
zoekLaag.addEventListener("click", e => { if (e.target === zoekLaag) sluitZoek(); });
zoekInput.addEventListener("input", () => toonResultaten(zoekInput.value));
zoekResultaten.addEventListener("click", e => { if (e.target.closest(".zoek-item")) sluitZoek(); });

document.addEventListener("keydown", e => {
  if (e.key === "/" && zoekLaag.hidden && !/input|textarea/i.test(document.activeElement.tagName)) {
    e.preventDefault(); openZoek();
  }
  if (e.key === "Escape" && !zoekLaag.hidden) sluitZoek();
  if (!zoekLaag.hidden && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter")) {
    const items = [...zoekResultaten.querySelectorAll(".zoek-item")];
    if (!items.length) return;
    if (e.key === "Enter") {
      const doel = items[Math.max(zoekIndexGekozen, 0)];
      if (doel) { location.hash = doel.getAttribute("href"); sluitZoek(); }
      e.preventDefault();
      return;
    }
    e.preventDefault();
    zoekIndexGekozen += e.key === "ArrowDown" ? 1 : -1;
    zoekIndexGekozen = (zoekIndexGekozen + items.length) % items.length;
    items.forEach((el, i) => el.classList.toggle("gekozen", i === zoekIndexGekozen));
    items[zoekIndexGekozen].scrollIntoView({ block: "nearest" });
  }
});

/* ---------- header & menu ---------- */

const siteKop = document.getElementById("siteKop");
window.addEventListener("scroll", () => {
  siteKop.classList.toggle("gescrold", window.scrollY > 8);
}, { passive: true });

const menuKnop = document.getElementById("menuKnop");
const mobielMenu = document.getElementById("mobielMenu");
menuKnop.addEventListener("click", () => {
  const open = mobielMenu.hidden;
  mobielMenu.hidden = !open;
  menuKnop.setAttribute("aria-expanded", String(open));
});

let bandResizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(bandResizeTimer);
  bandResizeTimer = setTimeout(kalibreerLopendeBand, 120);
}, { passive: true });

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(kalibreerLopendeBand);
}

/* ---------- start ---------- */

window.addEventListener("hashchange", navigeer);
navigeer();
