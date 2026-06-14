# EHBO — Eerste Hulp bij Opvoeden

Praktische opvoedvragen, onafhankelijk geschreven en onderbouwd met onderzoek,
klinische inzichten en bibliografische verwijzingen naar gerenommeerde
opvoedbronnen.

Volledige boeken of privé-leesbestanden staan bewust niet in deze webmap. Zulke
bronnen horen buiten het publiceerbare project te blijven, bijvoorbeeld in
`/Users/kristoflesaffre/Downloads/opvoeden-bronnen-prive/`.

## Starten

Pure statische site — geen build, geen dependencies:

```bash
python3 -m http.server 4173
# open http://localhost:4173
```

(Of open `index.html` rechtstreeks in een browser; alles werkt ook via `file://`.)

## Structuur

| Pad | Inhoud |
|---|---|
| `index.html` | Shell: header, zoeklaag, footer |
| `css/base.css` | Design-tokens, typografie, header/footer, animatiebasis |
| `css/components.css` | Hero, kaarten, zoeklaag, detailpagina's, noodhulp, mythes |
| `js/data-boeken.js` | Boeken, covers, aankooplinks, thema's en leeftijden |
| `js/data-vragen-*.js` | De 200 vragen met antwoorden, doe/vermijd, zinnen en bronnen |
| `js/data-extra.js` | Noodplannen, mythes en gouden regels |
| `js/app.js` | Hash-router, renderers, zoekindex, scroll-animaties |

## Content toevoegen

Nieuwe vraag = nieuw object in een `data-vragen-*.js` bestand. Velden:
`id`, `vraag`, `thema`, `leeftijd[]`, `uitgelicht`, `tags[]` (zoekwoorden),
`kort` (TL;DR), `blokken[]`, `doeDit[]`, `vermijd[]`, `zegDit[]|null`,
`bronnen[{boek, detail}]`, `gerelateerd[]`. De zoekindex en alle
overzichten pikken het automatisch op.
