// ============================================================
// EHBO — Boekenkast: gerenommeerde boeken en onderzoeksbronnen
// ============================================================

const BOEKEN = {
  "whole-brain-child": {
    titel: "The Whole-Brain Child",
    auteur: "Daniel J. Siegel & Tina Payne Bryson",
    jaar: 2011,
    kleur: "#3e6b8f",
    icoon: "🧠",
    kern: "Het kinderbrein is een huis in aanbouw: de emotionele benedenverdieping werkt al, de rationele bovenverdieping nog lang niet. Goed reageren = eerst verbinden, dan pas sturen.",
    bullets: [
      "“Connect & redirect”: maak eerst emotioneel contact (toon, aanraking, erkenning), stuur pas bij als je kind weer kalm is. Logica werkt niet op een overstuur brein.",
      "“Name it to tame it”: help je kind het verhaal van een heftige ervaring vertellen — woorden geven aan emotie kalmeert het brein aantoonbaar.",
      "De bovenverdieping (plannen, empathie, zelfbeheersing) is pas rond 25 jaar af. Verwacht dus geen volwassen zelfbeheersing van een kleuter — oefen ze als spieren."
    ],
    categorieen: ["emoties", "grenzen"],
    mustRead: true,
    amazonRating: { score: 4.8, count: 26847, bijgewerkt: "2026-06-13" }
  },
  "good-inside": {
    titel: "Good Inside",
    auteur: "Becky Kennedy",
    jaar: 2022,
    kleur: "#c2502a",
    icoon: "🧡",
    kern: "Elk kind is goed vanbinnen; lastig gedrag is een vaardigheid die ontbreekt, geen slechtheid die eruit moet. Ouders zijn ‘sturdy leaders’: warm én stevig tegelijk.",
    bullets: [
      "“Two things are true”: je kunt een grens houden én de emotie erover volledig erkennen. “Je mag niet slaan” en “je bent zo boos, dat snap ik” sluiten elkaar niet uit.",
      "De meest gulle interpretatie: vraag bij rotgedrag “wat is de best mogelijke verklaring hiervoor?” — dat verandert je reactie, en daarmee het gedrag.",
      "Herstel (repair) is belangrijker dan perfectie: terugkomen op je eigen uitbarsting leert je kind meer dan nooit ontploffen."
    ],
    categorieen: ["emoties", "grenzen"],
    mustRead: true,
    amazonRating: { score: 4.8, count: 642, bijgewerkt: "2026-06-13" }
  },
  "how-to-talk": {
    titel: "How to Talk So Kids Will Listen & Listen So Kids Will Talk",
    auteur: "Adele Faber & Elaine Mazlish",
    jaar: 1980,
    kleur: "#5f7259",
    icoon: "💬",
    kern: "De klassieker vol letterlijke zinnen en technieken: gevoelens erkennen, beschrijven in plaats van verwijten, en samenwerken uitlokken zonder dreigen of preken.",
    bullets: [
      "Erken gevoelens vóór alles: “Jij had echt nog willen spelen” werkt beter dan “stel je niet aan” — een erkend gevoel wordt kleiner, een ontkend gevoel groter.",
      "Beschrijf wat je ziet in plaats van te beschuldigen: “Ik zie natte handdoeken op de grond” in plaats van “jij ruimt ook nooit op!”",
      "Geef keuzes binnen jouw grens (“pyjama eerst boven of beneden aandoen?”) — autonomie haalt de strijd eruit."
    ],
    categorieen: ["communicatie", "emoties"],
    mustRead: true,
    amazonRating: { score: 4.8, count: 30412, bijgewerkt: "2026-06-13" }
  },
  "self-driven-child": {
    titel: "The Self-Driven Child",
    auteur: "William Stixrud & Ned Johnson",
    jaar: 2018,
    kleur: "#7a5ba6",
    icoon: "🧭",
    kern: "Het gevoel van controle over je eigen leven is de sterkste motor tegen stress en vóór motivatie. Wees adviseur van je kind, geen baas of manager.",
    bullets: [
      "Zeg vaker “jij beslist” over dingen die echt bij je kind horen (huiswerk, hobby’s, kledij). Een brein dat controle ervaart, is kalmer en gemotiveerder.",
      "Word geen huiswerkpolitie: jouw taak is een omgeving bieden, niet de prestatie afdwingen. Strijd erover beschadigt precies wat je wil opbouwen.",
      "Een kalme ouder is besmettelijk: jouw niet-angstige aanwezigheid is het beste stressvaccin voor je kind."
    ],
    categorieen: ["grenzen", "communicatie"],
    amazonRating: { score: 4.7, count: 4218, bijgewerkt: "2026-06-13" }
  },
  "anxious-generation": {
    titel: "The Anxious Generation",
    auteur: "Jonathan Haidt",
    jaar: 2024,
    kleur: "#2c5e63",
    icoon: "📵",
    kern: "De ‘grote herbedrading’ van de kindertijd — van spelen naar schermen — verklaart de explosie aan angst en depressie bij jongeren. Haidt geeft vier concrete normen.",
    bullets: [
      "Geen eigen smartphone vóór ±14 jaar en geen sociale media vóór 16 — en spreek dit af met andere ouders, zodat je kind niet de enige is.",
      "We overbeschermen kinderen in de echte wereld en onderbeschermen ze online. Draai dat om: meer vrij buitenspelen, minder onbewaakt internet.",
      "Vrij spel zonder volwassenen is geen luxe maar een ontwikkelingsbehoefte: zo leren kinderen risico’s inschatten, onderhandelen en tegenslag verdragen."
    ],
    categorieen: ["grenzen", "communicatie"],
    amazonRating: { score: 4.6, count: 18934, bijgewerkt: "2026-06-13" }
  },
  "peaceful-parent": {
    titel: "Peaceful Parent, Happy Kids",
    auteur: "Laura Markham",
    jaar: 2012,
    kleur: "#b8860b",
    icoon: "🌿",
    kern: "Drie pijlers: reguleer eerst jezelf, verbind vóór je corrigeert, en coach in plaats van te controleren. Verbinding is de enige echte invloed die je hebt.",
    bullets: [
      "Jouw kalmte komt eerst: je kunt geen storm blussen met je eigen storm. Adem, doe een stap terug, en reageer pas dan.",
      "Dagelijkse ‘speciale tijd’ (10–15 min één-op-één, kind kiest het spel) is preventief onderhoud dat de helft van het moeilijke gedrag wegneemt.",
      "Lachen en ravotten zijn serieuze opvoedinstrumenten: spel laat spanning en opgekropte gevoelens veilig ontladen."
    ],
    categorieen: ["emoties", "communicatie"],
    amazonRating: { score: 4.7, count: 6041, bijgewerkt: "2026-06-13" }
  },
  "nurtureshock": {
    titel: "NurtureShock",
    auteur: "Po Bronson & Ashley Merryman",
    jaar: 2009,
    kleur: "#1f2937",
    icoon: "🔬",
    kern: "Wetenschapsjournalistiek die heilige huisjes sloopt: veel van wat ouders intuïtief doen (algemeen prijzen, slaap inkorten, liegen bestraffen) werkt averechts.",
    bullets: [
      "Prijs de inzet, niet de slimheid: kinderen die ‘slim’ genoemd worden, gaan uitdagingen mijden uit angst om dom te lijken (onderzoek van Carol Dweck).",
      "Één uur minder slaap kost een kind cognitief ontwikkelingsjaren: slaaptekort wordt structureel onderschat.",
      "Kinderen liegen méér naarmate er harder gestraft wordt — ze worden er alleen beter in. Veiligheid om de waarheid te zeggen werkt wél."
    ],
    categorieen: ["emoties"],
    amazonRating: { score: 4.5, count: 3187, bijgewerkt: "2026-06-13" }
  },
  "gottman-eq": {
    titel: "Raising an Emotionally Intelligent Child",
    auteur: "John Gottman",
    jaar: 1998,
    kleur: "#8f3e5f",
    icoon: "🎓",
    kern: "Gottmans onderzoek: kinderen van ‘emotiecoachende’ ouders presteren beter, hebben betere vriendschappen en zijn fysiek gezonder. Emotiecoaching is leerbaar in vijf stappen.",
    bullets: [
      "De vijf stappen: merk de emotie op → zie ze als kans tot verbinding → luister en valideer → help het gevoel benoemen → stel grenzen en zoek samen oplossingen.",
      "Emoties wegwuiven (“het is niks, niet huilen”) leert kinderen dat hun binnenwereld fout is — gevoelens verdwijnen er niet door, ze gaan ondergronds.",
      "Alle gevoelens zijn oké, niet alle gedrag: je mag woedend zijn, je mag niet slaan."
    ],
    categorieen: ["emoties", "communicatie"],
    amazonRating: { score: 4.7, count: 4503, bijgewerkt: "2026-06-13" }
  },
  "hold-on-to-your-kids": {
    titel: "Hold On to Your Kids",
    auteur: "Gordon Neufeld & Gabor Maté",
    jaar: 2005,
    kleur: "#4a5d4e",
    icoon: "🪢",
    kern: "Kinderen horen zich te oriënteren op hun ouders, niet op leeftijdsgenoten. Als vrienden belangrijker worden dan jij, verlies je je natuurlijke opvoedingsgezag.",
    bullets: [
      "‘Collect’ je kind elke dag opnieuw: oogcontact, een glimlach, een knik — eerst de relatie activeren, dan pas vragen of sturen.",
      "Discipline werkt alleen binnen een warme relatie. Werkt je gezag niet meer? Herstel eerst de band, niet de regels.",
      "Bescherm gezinsrituelen (samen eten, samen ritueel afscheid) — dat zijn de ankers van hechting in een wereld vol schermen en peers."
    ],
    categorieen: ["hechting", "communicatie"],
    amazonRating: { score: 4.7, count: 2841, bijgewerkt: "2026-06-13" }
  },
  "unconditional-parenting": {
    titel: "Unconditional Parenting",
    auteur: "Alfie Kohn",
    jaar: 2005,
    kleur: "#9e3c1c",
    icoon: "⚖️",
    kern: "Straffen én belonen zijn twee kanten van dezelfde munt: voorwaardelijke controle. Kinderen moeten voelen dat je liefde nooit afhangt van hun gedrag.",
    bullets: [
      "Werk mét je kind in plaats van dingen aan je kind te doen: betrek het bij oplossingen in plaats van gehoorzaamheid af te dwingen.",
      "Beloningen (stickers, geld, zelfs lof) doden de interesse in de activiteit zelf — kinderen gaan voor de beloning, niet meer voor de taak.",
      "Vraag je bij elke regel af: gaat dit over wat mijn kind nodig heeft, of over wat ik nu even gemakkelijk vind?"
    ],
    categorieen: ["grenzen"],
    amazonRating: { score: 4.6, count: 2987, bijgewerkt: "2026-06-13" }
  },
  "philippa-perry": {
    titel: "The Book You Wish Your Parents Had Read",
    auteur: "Philippa Perry",
    jaar: 2019,
    kleur: "#d97706",
    icoon: "🪞",
    kern: "Je opvoedt vooral met wie je bént, niet met wat je doet. Kijk naar je eigen geschiedenis, herstel breuken snel, en behandel elk gevoel van je kind als echt.",
    bullets: [
      "Word je eigen patroon gewaar: schiet je uit je slof, dan raakt je kind vaak iets uit jóuw kindertijd. Dat herkennen is de helft van het werk.",
      "Breuk + herstel = sterke band. Niet de ruzie beschadigt, wel het uitblijven van ‘sorry, ik was te hard, jij verdiende dat niet’.",
      "Neem gevoelens serieus in plaats van ze weg te lachen of op te lossen: een kind dat “ik ben bang” hoort beantwoorden met “dat is niks”, leert zichzelf wantrouwen."
    ],
    categorieen: ["hechting", "emoties"],
    amazonRating: { score: 4.6, count: 8204, bijgewerkt: "2026-06-13" }
  },
  "science-of-parenting": {
    titel: "The Science of Parenting",
    auteur: "Margot Sunderland",
    jaar: 2006,
    kleur: "#0e7490",
    icoon: "🔭",
    kern: "Hersenwetenschap voor ouders: wat troost, spel en stress letterlijk doen in het kinderbrein. Troosten verwent niet — het bouwt het stresssysteem van later.",
    bullets: [
      "Een getrooste baby leert: stress gaat voorbij, er komt hulp. Langdurig onbeantwoord laten huilen overspoelt het jonge brein met cortisol.",
      "Fysiek spel en knuffelen activeren oxytocine en opioïden — de letterlijke bouwstoffen van een gelukkig, stressbestendig brein.",
      "De eerste levensjaren zijn de fundering van het stresssysteem: investeren in troost en nabijheid nu, is mentale gezondheid later."
    ],
    categorieen: ["emoties", "hechting"],
    amazonRating: { score: 4.6, count: 1178, bijgewerkt: "2026-06-13" }
  },
  "power-of-showing-up": {
    titel: "The Power of Showing Up",
    auteur: "Daniel J. Siegel & Tina Payne Bryson",
    jaar: 2020,
    kleur: "#475569",
    icoon: "🛡️",
    kern: "De beste voorspeller van hoe een kind terechtkomt is veilige hechting — en die bouw je met vier S’en: Safe, Seen, Soothed & Secure.",
    bullets: [
      "Veilig (safe): je kind mag nooit bang zijn vóór jou. Word je zelf de bron van angst, herstel dan snel en expliciet.",
      "Gezien (seen): kijk voorbij het gedrag naar de binnenkant — “wat gebeurt er in mijn kind?” in plaats van “hoe stop ik dit?”",
      "Getroost (soothed): je hoeft pijn niet weg te nemen, wel aanwezig te blijven terwijl ze er is. Zo leert je kind zichzelf later troosten (secure)."
    ],
    categorieen: ["hechting"],
    amazonRating: { score: 4.8, count: 4632, bijgewerkt: "2026-06-13" }
  },
  "raising-good-humans": {
    titel: "Raising Good Humans",
    auteur: "Hunter Clarke-Fields",
    jaar: 2019,
    kleur: "#65a30d",
    icoon: "🧘",
    kern: "Doorbreek de kringloop van reactief schreeuwen met mindfulness: de ruimte tussen prikkel en reactie is waar goed ouderschap gebeurt.",
    bullets: [
      "Je triggers zijn van jou: herken de lichaamssignalen (hete borst, gebalde kaak) vóór de uitbarsting en koop tijd — adem, water drinken, kamer uit.",
      "Praat in ik-boodschappen: “ik word gek van het lawaai, ik heb stilte nodig” in plaats van “jij bent onmogelijk!”",
      "Zelfcompassie is geen luxe: wie zichzelf afbrandt na een slechte ouderdag, ontploft sneller opnieuw. Fouten zijn oefenmateriaal."
    ],
    categorieen: ["emoties", "communicatie"],
    amazonRating: { score: 4.7, count: 2319, bijgewerkt: "2026-06-13" }
  },
  "conscious-parent": {
    titel: "The Conscious Parent",
    auteur: "Shefali Tsabary",
    jaar: 2010,
    kleur: "#7c2d62",
    icoon: "🌗",
    kern: "Je kind is geen project maar een spiegel: wat jou het hardst irriteert in je kind, wijst meestal naar iets onverwerkts in jezelf.",
    bullets: [
      "Voed het kind op dat je hébt, niet het kind dat je in je hoofd had: loslaten van je verwachtingsplaatje is het grootste cadeau.",
      "Vraag bij elke botsing: “wat zegt mijn reactie over mij?” — vaak vecht je tegen je eigen onvervulde dromen of angsten.",
      "Aanwezigheid klopt controle: een ouder die er écht is in het moment, heeft minder regels nodig."
    ],
    categorieen: ["hechting", "emoties"],
    amazonRating: { score: 4.6, count: 1993, bijgewerkt: "2026-06-13" }
  },
  "child-of-mine": {
    titel: "Child of Mine",
    auteur: "Ellyn Satter",
    jaar: 1999,
    kleur: "#8b6914",
    icoon: "🍽️",
    kern: "Satter's gouden regel: ouders beslissen wanneer, wat en waar er gegeten wordt — kinderen beslissen óf en hoeveel. Die taakverdeling lost eetgevechten structureel op.",
    bullets: [
      "Forceer nooit, ook niet 'één hapje': een kind dat gedwongen eet, verliest het contact met zijn eigen honger- en verzadigingssignalen — precies het tegenovergestelde van wat je wil.",
      "Kinderen die mogen vertrouwen op hun eigen eetinstinct, eten op lange termijn gevarieerder en gezonder dan kinderen waarbij elke maaltijd een strijd was.",
      "De eetsfeer weegt zwaarder dan de inhoud van het bord: angst en spanning aan tafel zijn schadelijker dan een dag zonder groenten."
    ],
    categorieen: ["eten"],
    amazonRating: { score: 4.7, count: 1843, bijgewerkt: "2026-06-13" }
  },
  "healthy-sleep-habits": {
    titel: "Healthy Sleep Habits, Happy Child",
    auteur: "Marc Weissbluth",
    jaar: 1987,
    kleur: "#2d4a6b",
    icoon: "🌙",
    kern: "Slaap is een vaardigheid die kinderen kunnen leren. Weissbluth combineert decennia hersenonderzoek met praktijk: vroeg naar bed, vaste routines en zelf in slaap leren vallen zijn de drie pijlers.",
    bullets: [
      "”Sleep begets sleep”: een moe kind slaapt paradoxaal genoeg slechter. Vroeger naar bed — bij jonge kinderen soms al 18:30 uur — lost overnacht slaapproblemen op.",
      "Zelfstandig in slaap vallen is een vaardigheid, geen verwijt: hoe vroeger kinderen dit leren, hoe beter hun slaapkwaliteit op de lange termijn.",
      "Slaaptekort schaadt hersenontwikkeling, gedrag en immuunsysteem. Slaap prioriteit geven is niet verwennen — het is investeren in je kind's gezondheid."
    ],
    categorieen: ["slapen"],
    amazonRating: { score: 4.7, count: 17923, bijgewerkt: "2026-06-13" }
  },
  "no-bad-kids": {
    titel: "No Bad Kids",
    auteur: "Janet Lansbury",
    jaar: 2014,
    kleur: "#c87941",
    icoon: "🧒",
    kern: "Peuters zijn niet manipulatief of slecht — ze testen grenzen als biologische behoefte. Lansbury pleit voor kalme, respectvolle grenzen zonder straffen of beloningen.",
    bullets: [
      "Grenzen stellen hoeft niet gepaard te gaan met straf: “jij mag dat niet doen, ik stop je” zegt genoeg. Rustig en resoluut — geen uitleg, geen onderhandeling.",
      "Negeer het gedrag niet, maar negeer ook de emotie niet: erken het gevoel én houd de grens. Beide tegelijk is mogelijk.",
      "”Sportverslaggeving”: beschrijf wat je kind doet (“je klimt op de tafel”) voor je ingrijpt — dat geeft ze een moment om zichzelf te corrigeren."
    ],
    categorieen: ["grenzen", "emoties"],
    amazonRating: { score: 4.7, count: 4612, bijgewerkt: "2026-06-13" }
  },
  "positive-discipline-az": {
    titel: "Positive Discipline A–Z",
    auteur: "Jane Nelsen",
    jaar: 1993,
    kleur: "#4e7c5f",
    icoon: "📋",
    kern: "Een encyclopedie van positieve discipline: voor honderden alledaagse situaties geeft het een niet-straffende aanpak die verbinding én duidelijke grenzen combineert.",
    bullets: [
      "Positieve discipline is niet permissief: het stelt duidelijke grenzen, maar gebruikt nooit vernedering of pijn als instrument. Respect voor het kind staat centraal.",
      "Problemen oplossen mét je kind — via familiemeetings en gezamenlijke afspraken — is effectiever dan oplossingen opleggen.",
      "”Wat kun je hiervan leren? Hoe herstel je dit?” is krachtiger dan elke straf: het bouwt verantwoordelijkheid op in plaats van angst."
    ],
    categorieen: ["grenzen"],
    amazonRating: { score: 4.6, count: 2318, bijgewerkt: "2026-06-13" }
  },
  "raising-spirited-child": {
    titel: "Raising Your Spirited Child",
    auteur: "Mary Sheedy Kurcinka",
    jaar: 1991,
    kleur: "#9b4f8e",
    icoon: "🌪️",
    kern: "Spirited kinderen zijn intenser, gevoeliger, hardnekkiger en energieker dan gemiddeld. Ze zijn niet moeilijk — ze hebben een ander temperament dat om een andere aanpak vraagt.",
    bullets: [
      "Hernoem 'moeilijk' naar 'spirited': woorden sturen verwachtingen. Een kind dat “koppig” is, is ook “volhardend” — hetzelfde eigenschap, ander frame, andere relatie.",
      "Spirited kinderen overprikkelen sneller. Structurele herstelmomenten inbouwen is geen verwennerij, maar noodzakelijke ondersteuning van zelfregulatie.",
      "Ken je kind's triggers en energiebronnen: sommigen laden op van stilte, anderen van beweging. Pas routines aan in plaats van het kind te forceren tot de gemiddelde norm."
    ],
    categorieen: ["emoties", "grenzen"],
    amazonRating: { score: 4.8, count: 4029, bijgewerkt: "2026-06-13" }
  },
  "solve-sleep-problems": {
    titel: "Solve Your Child's Sleep Problems",
    auteur: "Richard Ferber",
    jaar: 1985,
    kleur: "#5c5c8a",
    icoon: "😴",
    kern: "De basis van de 'Ferber-methode': geleidelijk uitrekken van troostintervallen 's nachts zodat kinderen leren zichzelf te kalmeren — contextueler dan de reputatie doet vermoeden.",
    bullets: [
      "Slaapproblemen zijn bijna altijd gebaseerd op slaapkoppelingen: het kind heeft borstvoeding of schommelen nodig om IN slaap te vallen — en opnieuw nodig bij elk nachtelijk ontwaken.",
      "Ferber nuanceert zijn eigen methode sterk: niet elke aanpak past bij elk kind. 'Laten huilen' is geen doel maar soms een bijwerking van een groter plan.",
      "Consistentie telt meer dan de precieze methode: kinderen passen zich aan aan wat altijd gebeurt — ook aan gezondere slaapgewoontes."
    ],
    categorieen: ["slapen"],
    amazonRating: { score: 4.6, count: 6847, bijgewerkt: "2026-06-13" }
  },
  "explosive-child": {
    titel: "The Explosive Child",
    auteur: "Ross W. Greene",
    jaar: 1998,
    kleur: "#6b3a2a",
    icoon: "🌋",
    kern: "Explosief gedrag komt niet door onwil maar door een vaardigheidsdeficit: deze kinderen missen de flexibiliteit of frustratietolerantie die de situatie vraagt. Collaborative Problem Solving lost het structureel op.",
    bullets: [
      "”Kids do well if they can” — als ze niet goed doen, ontbreekt een vaardigheid, geen motivatie. Zoek de ontbrekende vaardigheid, niet het motivatieprobleem.",
      "Collaborative Problem Solving (Plan B): bespreek het probleem samen als het rustig is, zoek een oplossing die werkt voor beiden — nooit in het moment van crisis zelf.",
      "Explosies zijn voorspelbaar: elk explosief kind heeft patronen en triggers. Breng ze in kaart en gebruik Plan B vóór de volgende crisis, niet erna."
    ],
    categorieen: ["emoties", "grenzen"],
    amazonRating: { score: 4.7, count: 5203, bijgewerkt: "2026-06-13" }
  },
  "no-cry-sleep-newborns": {
    titel: "The No-Cry Sleep Solution for Newborns",
    auteur: "Elizabeth Pantley",
    jaar: 2014,
    kleur: "#7a9e87",
    icoon: "👶",
    kern: "Een zacht alternatief voor slaaptraining bij pasgeborenen: geen huilmethodes maar geleidelijke gewoontes die het slaapritme opbouwen zonder baby of ouder te traumatiseren.",
    bullets: [
      "Pasgeborenen hebben geen 'slaapprobleem' — hun biologie is afgestemd op kort slapen en frequent eten. Verwachtingen bijstellen is de eerste en belangrijkste stap.",
      "Een slaap-log bijhouden onthult patronen die je 's nachts nooit zou zien: op welk moment is baby echt moe, wat werkt, wat niet.",
      "De 'Pantley pull-off': verbreek de borstvoeding-slaapkoppeling geleidelijk door los te koppelen net vóór het diepe slaapmoment — consequent herhalen werkt."
    ],
    categorieen: ["slapen"],
    amazonRating: { score: 4.5, count: 2412, bijgewerkt: "2026-06-13" }
  }
};

const BOEK_IDS = Object.keys(BOEKEN);

function maakKoopLinks(boek) {
  const zoekterm = encodeURIComponent(`${boek.titel} ${boek.auteur}`);
  return [
    { label: "Bol.com", url: `https://www.bol.com/be/nl/s/?searchtext=${zoekterm}` },
    { label: "Standaard Boekhandel", url: `https://www.standaardboekhandel.be/search?query=${zoekterm}` },
    { label: "Amazon", url: `https://www.amazon.com/s?k=${zoekterm}` }
  ];
}

BOEK_IDS.forEach(id => {
  BOEKEN[id].cover = `img/covers/${id}.jpg`;
  BOEKEN[id].koopLinks = maakKoopLinks(BOEKEN[id]);
});

const THEMAS = [
  { id: "baby",          naam: "Baby & hechting",           icoon: "👶",  accent: "#3e6b8f", uitleg: "Huilen, troosten, loslaten en de allereerste band." },
  { id: "slaap",         naam: "Slaap",                     icoon: "🌙",  accent: "#3a5a7a", uitleg: "In slaap vallen, doorslapen, dutjes en slaaptraining." },
  { id: "eten",          naam: "Eten",                      icoon: "🍽️",  accent: "#a05c2a", uitleg: "Kieskeurig eten, tafelstrijd en rustige maaltijden." },
  { id: "emoties",       naam: "Driftbuien & grote emoties", icoon: "🌋", accent: "#c2502a", uitleg: "Woede, tranen en paniek — wat er gebeurt en wat jij doet." },
  { id: "grenzen",       naam: "Grenzen, straffen & belonen", icoon: "🧭", accent: "#5f7259", uitleg: "Nee zeggen, consequenties en waarom stickers tegenvallen." },
  { id: "praten",        naam: "Praten & luisteren",        icoon: "💬",  accent: "#b8860b", uitleg: "Zo zeg je het zodat het aankomt — en zodat je kind blijft praten." },
  { id: "zelfvertrouwen", naam: "Zelfvertrouwen & motivatie", icoon: "🌱", accent: "#65a30d", uitleg: "Prijzen, falen, huiswerk en de wil om zelf te doen." },
  { id: "schermen",      naam: "Schermen & sociale media",  icoon: "📱",  accent: "#2c5e63", uitleg: "Smartphones, schermtijd en opgroeien in een online wereld." },
  { id: "band",          naam: "Verbinding & hechting",     icoon: "🪢",  accent: "#8f3e5f", uitleg: "De band die alles draagt — ook na een rotdag." },
  { id: "gezin",         naam: "Broers, zussen & gezin",   icoon: "🏠",  accent: "#7a5ba6", uitleg: "Ruzies, delen, jaloezie en samen leven." }
];

const LEEFTIJDEN = [
  { id: "baby", naam: "Baby (0–1)" },
  { id: "peuter", naam: "Peuter (1–4)" },
  { id: "kind", naam: "Kind (4–12)" },
  { id: "tiener", naam: "Tiener (12+)" }
];
