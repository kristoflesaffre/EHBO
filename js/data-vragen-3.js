// ============================================================
// EHBO — Vragen, deel 3: school, schermen, band & gezin
// ============================================================

const VRAGEN_3 = [
  {
    id: "huiswerk-oorlog",
    vraag: "Elke dag huiswerk-oorlog. Hoe stop ik die?",
    thema: "zelfvertrouwen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["huiswerk", "school", "studeren", "motivatie", "cijfers", "zeuren", "uitstellen"],
    kort: "Stop met huiswerkpolitie spelen: hoe meer jij het probleem draagt, hoe minder je kind het draagt. Bied structuur en hulp aan, maar geef het eigenaarschap terug — schoolwerk is van het kind.",
    blokken: [
      { tekst: "Stixrud & Johnson zijn er heel stellig over: <strong>het is niet jouw huiswerk</strong>. Zolang jij duwt, controleert en sleurt, hoeft je kind maar één ding te doen: terugduwen. De dagelijkse oorlog gaat dan allang niet meer over rekenen, maar over zelfstandigheid — en een gevecht over zelfstandigheid verliest een ouder altijd, want het kind heeft het laatste woord over zijn eigen inzet." },
      { kop: "De ouder als consultant", tekst: "Het alternatief is de consultanthouding: “ik help je graag, en jij bent de baas over je werk.” Concreet: bied een rustige werkplek, een vast ritueel en je beschikbaarheid aan — en laat de uitvoering (en de gevolgen op school) bij je kind. Een onvoldoende door eigen keuze is op de lange termijn leerzamer dan een voldoende door jouw gesleur. Het brein dat zelf mag sturen, ontwikkelt precies de motivatie waar je op zat te wachten." },
      { kop: "Maar mijn kind doet dan níets!", tekst: "Klopt, vaak eerst wel — er is een ontwenningsperiode als de politie zich terugtrekt. Belangrijk: terugtrekken is niet onverschillig worden. Je blijft interesse tonen in wat je kind leert (niet in wat het scoort), je helpt als erom gevraagd wordt, en je beschermt de basisvoorwaarden: slaap, beweging en schermvrije studeertijd. NurtureShock herinnert eraan dat een uitgeslapen kind in één uur doet waar een moe kind drie zeur-uren voor nodig heeft." }
    ],
    doeDit: [
      "Zeg het letterlijk: “jouw school is van jou. Ik help als je me nodig hebt.”",
      "Bouw samen een ritme (zelfde tijd, zelfde plek, telefoon in een andere kamer) en laat het ritme het werk doen.",
      "Toon interesse in de inhoud: “wat leer je daar eigenlijk?” werkt beter dan “is je huiswerk al af?”",
      "Laat school-consequenties bij school: een vergeten taak voelt één keer rot en leert meer dan tien preken."
    ],
    vermijd: [
      "Naast de stoel blijven zitten als bewaker — aanwezig zijn op verzoek is iets anders dan toezicht.",
      "Belonen of straffen op cijfers: dan studeert je kind voor jou, en stopt zodra jij niet kijkt.",
      "Het huiswerk beter willen dan je kind het wil — jouw paniek vult precies de ruimte waar zijn motivatie had kunnen groeien.",
      "Elke avond dezelfde preek: als iets tien keer niet werkte, is de elfde keer geen strategie."
    ],
    zegDit: [
      "“Ik geloof dat jij dit kan dragen. Hoe wil je het aanpakken vandaag?”",
      "“Wil je dat ik je overhoor, of red je het zelf?”",
      "“Het is jouw keuze. En ik ben er als je me nodig hebt.”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "De ouder als consultant, niet als baas; ‘it's your call’; gevoel van controle als motor van motivatie en stressbestendigheid." },
      { boek: "nurtureshock", detail: "Slaap als onderschatte factor in schoolprestaties: het verloren uur kost meer dan extra studietijd opbrengt." },
      { boek: "unconditional-parenting", detail: "Cijfers belonen verschuift de focus van leren naar scoren en holt nieuwsgierigheid uit." }
    ],
    gerelateerd: ["goed-prijzen", "belonen-stickers", "kind-angstig"]
  },
  {
    id: "smartphone-wanneer",
    vraag: "Wanneer geef ik mijn kind een smartphone?",
    thema: "schermen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: true,
    tags: ["smartphone", "gsm", "telefoon", "sociale media", "instagram", "tiktok", "whatsapp", "leeftijd"],
    kort: "Haidts onderbouwde normen: geen eigen smartphone vóór ±14, geen sociale media vóór 16. Geef eerder een ‘dom’ belmodel, en — cruciaal — spreek het af met andere ouders zodat je kind niet de uitzondering is.",
    blokken: [
      { tekst: "Jonathan Haidt legt in <em>The Anxious Generation</em> de datasets naast elkaar: tussen 2010 en 2015 — exact de jaren waarin de smartphone met frontcamera en sociale media de kinderkamer veroverden — knakken de curves van angst, depressie en zelfbeschadiging bij tieners wereldwijd omhoog, het hardst bij meisjes. Zijn conclusie: <strong>de speelse kindertijd werd een telefoonkindertijd</strong>, en het puberbrein is niet opgewassen tegen een aandachtseconomie die door de slimste ingenieurs ter wereld is gebouwd om te verslaven." },
      { kop: "De vier normen", tekst: "Haidt stelt vier collectieve normen voor: (1) geen eigen smartphone vóór de leeftijd van ±14 jaar — daarvoor volstaat een belhorloge of dom toestel; (2) geen sociale media vóór 16, omdat de puberteit de kwetsbaarste periode is voor sociale vergelijking; (3) telefoonvrije scholen; (4) veel meer onbewaakte vrije speeltijd en zelfstandigheid in de echte wereld. De normen versterken elkaar: het gaat niet om verbieden, maar om de kindertijd teruggeven." },
      { kop: "Waarom ‘samen afspreken’ het halve werk is", tekst: "Het echte probleem is collectief: één kind zonder smartphone in een klas vol smartphones betaalt een hoge sociale prijs. Daarom is Haidts belangrijkste advies aan individuele ouders: <strong>zoek bondgenoten</strong>. Spreek met de ouders van de vriendengroep een gezamenlijke lijn af. Vier ouders die samen ‘nog niet’ zeggen, veranderen de norm van de hele groep — en je kind hoeft niet de vreemde eend te zijn." },
      { kop: "En als de telefoon er eenmaal is", tekst: "Begin met een telefoon die kan wat nodig is (bellen, berichten) en bouw uit op tempo van getoond vertrouwen. Geen telefoon in de slaapkamer 's nachts — dat ene huisritueel (alle toestellen 's avonds in de lader in de keuken, ook die van jou) beschermt slaap, het kostbaarste dat een tiener heeft." }
    ],
    doeDit: [
      "Stel de eigen smartphone uit tot ±14 en sociale media tot 16 — of zo dicht daarbij als haalbaar is.",
      "Geef tussenstappen: belhorloge of dom toestel voor bereikbaarheid zonder feed.",
      "Sluit een ouderpact met de vriendengroep: gezamenlijke normen verslaan eenzame regels.",
      "Compenseer met het positieve: meer vrijheid in de echte wereld (alleen op pad, avonturen, verantwoordelijkheid)."
    ],
    vermijd: [
      "Zwichten voor “iederéén heeft er al een” zonder het te checken — vaak blijkt ‘iedereen’ drie kinderen te zijn.",
      "Een smartphone als cadeau-zonder-kader geven en achteraf regels proberen te installeren — terugdraaien is tien keer zwaarder.",
      "Telefoons (ook de jouwe) in de slaapkamer 's nachts.",
      "Sociale media ‘stiekem op jouw account’ als tussenoplossing — daarmee start je het vergelijken alsnog, maar zonder kader."
    ],
    zegDit: [
      "“Je krijgt hem niet later omdat je het niet waard bent, maar omdat je hersenen het waard zijn om eerst af te bouwen.”",
      "“We hebben met de ouders van je vrienden afgesproken: jullie krijgen er allemaal pas een in het derde middelbaar.”",
      "“Telefoons slapen 's nachts in de keuken. De mijne ook.”"
    ],
    bronnen: [
      { boek: "anxious-generation", detail: "De vier normen (smartphone ±14, sociale media 16, telefoonvrije school, meer vrij spel) en de data achter de mentale-gezondheidsknik van 2010–2015." },
      { boek: "hold-on-to-your-kids", detail: "Schermen en peers verdringen de ouder-kindhechting; bescherm de gezinsrituelen als ankerpunten." },
      { boek: "self-driven-child", detail: "Slaap, zelfstandigheid en een gezond stresssysteem als basisvoorwaarden — de telefoon in de slaapkamer ondermijnt alle drie." }
    ],
    gerelateerd: ["schermtijd-hoeveel", "slaap-hoe-belangrijk", "tiener-trekt-terug"]
  },
  {
    id: "schermtijd-hoeveel",
    vraag: "Hoeveel schermtijd is oké?",
    thema: "schermen",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["schermtijd", "tablet", "tv", "youtube", "gamen", "ipad", "minuten", "regels"],
    kort: "Tel niet alleen minuten — kijk naar wat het scherm verdringt: slaap, buitenspelen, vervelen, gezinstijd. Een goede vuistregel: schermen pas ná de basics, nooit in bed, en samen kijken verslaat alleen scrollen.",
    blokken: [
      { tekst: "De eerlijke samenvatting van de boeken: <strong>er bestaat geen magisch aantal minuten</strong>. Haidt verschuift de vraag: het probleem van schermtijd is vooral wat ze <em>verdringt</em> — de opportuniteitskost. Elk uur scherm is een uur niet buiten spelen, niet vervelen (waar creativiteit woont), niet oefenen met echte gezichten, niet slapen. Een kind dat zijn basics binnen heeft, kan prima een uur gamen; een kind dat nooit meer buiten komt, heeft een probleem dat geen timer oplost." },
      { kop: "Niet alle schermtijd is gelijk", tekst: "Een film samen op de bank, een potje FIFA met een vriend, een algoritmische feed alleen op een slaapkamer: drie keer ‘schermtijd’, drie totaal verschillende dingen. De rangorde: samen > alleen, actief (maken, gamen mét vrienden) > passief slikken, eindig (een film) > eindeloos (feeds en autoplay). De gevaarlijkste combinatie is alleen + eindeloos + slaapkamer." },
      { kop: "Structuur verslaat onderhandeling", tekst: "Sunderland wijst erop dat jonge kinderen hun eigen stopknop simpelweg nog niet hebben — die zit in de bovenverdieping die nog in aanbouw is. Maak dus vaste, voorspelbare kaders (na school eerst buiten/eten, schermen tot het eten, nooit aan tafel, nooit in bed) in plaats van dagelijkse losse onderhandelingen. Een ritueel went; een onderhandeling escaleert. En kijk naar je eigen voorbeeld: het kind dat jou ziet scrollen aan tafel, leert wat ‘normaal’ is."
      }
    ],
    doeDit: [
      "Hanteer ‘eerst de basics’: buiten geweest, gegeten, huiswerk — daarna mag het scherm aan.",
      "Maak schermvrije zones die heilig zijn: aan tafel, in de auto op korte ritten (vervelen mag!), in bed.",
      "Kies eindige content (een aflevering, een film) boven feeds; zet autoplay uit.",
      "Kijk en speel regelmatig mee — meekijken geeft je zicht én gespreksstof."
    ],
    vermijd: [
      "Het scherm als standaard-fopspeen bij elke lege minuut — vervelen is een vaardigheid die oefening vraagt.",
      "Schermtijd als beloning/straf gebruiken: daarmee maak je het scherm tot kostbaarste goed in huis.",
      "Eindeloze feeds (YouTube-autoplay, TikTok) voor jonge kinderen — die zijn ontworpen om geen einde te hebben.",
      "Regels stellen die je zelf zichtbaar breekt: jouw schermgedrag ís de echte regel."
    ],
    zegDit: null,
    bronnen: [
      { boek: "anxious-generation", detail: "De opportuniteitskost van schermen: verdrongen slaap, spel en sociaal contact wegen zwaarder dan de minuten zelf; feeds en autoplay als ontworpen verslaving." },
      { boek: "science-of-parenting", detail: "Zichzelf kalmeren zit in een brein-in-aanbouw: jonge kinderen hebben houvast van buitenaf nodig zolang een eigen rem nog ontbreekt." },
      { boek: "hold-on-to-your-kids", detail: "Schermvrije gezinsrituelen (tafel, bed, samen) beschermen de hechting die alle opvoeding draagt." }
    ],
    gerelateerd: ["smartphone-wanneer", "slaap-hoe-belangrijk", "band-versterken"]
  },
  {
    id: "band-versterken",
    vraag: "Hoe bouw ik een sterke band met mijn kind?",
    thema: "band",
    leeftijd: ["baby", "peuter", "kind", "tiener"],
    uitgelicht: true,
    tags: ["band", "hechting", "verbinding", "quality time", "speciale tijd", "relatie", "vertrouwen"],
    kort: "Niet met grote uitjes, maar met kleine dagelijkse rituelen: tien minuten onverdeelde speeltijd waarin het kind de baas is, ‘verzamelmomentjes’ bij elk weerzien, en er zijn op de vier S-manieren: safe, seen, soothed, secure.",
    blokken: [
      { tekst: "Goed nieuws: de wetenschap is hier eenvoudiger dan de oudergidsen doen vermoeden. Siegel & Bryson vatten decennia hechtingsonderzoek samen in één zin: kinderen die zich <strong>veilig, gezien en getroost</strong> voelen, ontwikkelen de stevigste basis (secure) — en dat vraagt geen perfecte ouders, maar voorspelbaar aanwezige. ‘Showing up’ is letterlijk het halve werk." },
      { kop: "Het krachtigste kwartier van de dag", tekst: "Laura Markhams beroemdste advies: <em>speciale tijd</em>. Tien à vijftien minuten per dag, één-op-één, telefoon weg, en — dit is de kern — <strong>het kind bepaalt wat jullie doen</strong>. Jij volgt, zonder sturen, verbeteren of onderwijzen. Dat kwartier werkt als preventief onderhoud: kinderen die zich dagelijks volgetankt voelen met aandacht, hoeven er niet de hele dag om te vechten met moeilijk gedrag." },
      { kop: "Verzamel je kind, elke overgang opnieuw", tekst: "Neufeld & Maté beschrijven het ‘collecten’: bij elk weerzien (ochtend, na school, na het werk) eerst dertig seconden échte verbinding — ogen, glimlach, knik, iets warms — vóór welke vraag of opdracht ook. Wie zijn kind eerst verzamelt, hoeft daarna nauwelijks te trekken. Bescherm daarnaast de hechtingsrituelen: samen eten zonder schermen, het bedritueel, het vaste afscheidsgrapje aan de schoolpoort." },
      { kop: "Ook bij conflict — juist bij conflict", tekst: "Een sterke band is geen band zonder botsingen, maar een band die botsingen overleeft. Elke keer dat je na een conflict herstelt, bewijs je: deze relatie kan tegen een stootje. En onthoud Gottmans vondst: de momenten waarop je kind het minst aantrekkelijk gedrag vertoont, zijn de momenten waarop het je verbinding het hardst nodig heeft." }
    ],
    doeDit: [
      "Plan dagelijks 10–15 minuten speciale tijd waarin je kind de regie heeft — en noem het zo: “onze tijd”.",
      "Verzamel bij elke overgang: eerst oogcontact en warmte, dan pas vragen en taken.",
      "Bewaak twee of drie heilige rituelen (tafel, bedritueel, weekendje-ding) tegen agenda en schermen in.",
      "Wees nieuwsgierig naar de binnenkant: “wat was het stomste én het leukste moment van je dag?”"
    ],
    vermijd: [
      "Quality time verwarren met dure uitjes: een pretpark met ruzie bouwt minder band dan tien minuten vloer-Lego.",
      "Speciale tijd afpakken als straf — dan wordt verbinding een beloning, en dat is ze nooit.",
      "Alle gesprekken laten gaan over prestaties en planning: een kind is geen project met deadlines.",
      "Multitasken tijdens ‘samen’ momenten: half luisteren voelt voor een kind als niet bestaan."
    ],
    zegDit: [
      "“Dit is onze tijd. Jij bent de baas, ik doe mee.”",
      "“Ik vond het gewoon fijn om vandaag bij jou te zijn.”",
      "“Ook toen je boos was, bleef ik van je houden. Dat stopt nooit.”"
    ],
    bronnen: [
      { boek: "power-of-showing-up", detail: "De vier S'en — safe, seen, soothed, secure — als blauwdruk van veilige hechting en de beste voorspeller van hoe kinderen terechtkomen." },
      { boek: "peaceful-parent", detail: "Speciale tijd als dagelijks preventief onderhoud; verbinding als de eigenlijke bron van invloed." },
      { boek: "hold-on-to-your-kids", detail: "Het verzamelritueel en het beschermen van hechtingsmomenten tegen peers en schermen." },
      { boek: "gottman-eq", detail: "Emotionele momenten — ook de lastige — als de bouwstenen van de relatie." }
    ],
    gerelateerd: ["tiener-trekt-terug", "zelf-ontploft", "baby-verwennen"]
  },
  {
    id: "tiener-trekt-terug",
    vraag: "Mijn tiener trekt zich terug en kiest alleen nog vrienden. Normaal?",
    thema: "band",
    leeftijd: ["tiener"],
    uitgelicht: false,
    tags: ["tiener", "puber", "vrienden", "afstandelijk", "kamer", "praat niet meer", "loslaten"],
    kort: "Meer zelfstandigheid willen is gezond; jou volledig inruilen voor leeftijdsgenoten is dat niet. Blijf zonder druk beschikbaar, bescherm een paar vaste gezinsmomenten, en wees de kalme volwassene bij wie alles gezegd mag worden.",
    blokken: [
      { tekst: "Eerst het gezonde deel: een tiener die zijn eigen smaak, mening en privéruimte opeist, doet exact wat zijn ontwikkelingsfase vraagt. Maar Neufeld & Maté maken een onderscheid dat elke ouder zou moeten kennen: <strong>onafhankelijkheid is iets anders dan heroriëntatie</strong>. Een tiener mag minder bij je zíjn; het wordt zorgelijk als leeftijdsgenoten je vervangen als kompas — als hun oordeel het enige is dat telt en jij enkel nog hotelfunctie hebt." },
      { kop: "Waarom peers geen veilige haven zijn", tekst: "Leeftijdsgenoten kunnen elkaar niet onvoorwaardelijk dragen — ze zijn zelf onaf, en hun acceptatie is per definitie voorwaardelijk (vandaag in, morgen uit). Een kind dat zijn emotionele veiligheid bij peers legt, wordt voorzichtig, conformistisch en kwetsbaar voor de groep. Haidt laat zien hoe sociale media dit mechanisme op steroïden zet: de groep oordeelt nu 24/7, met telbare likes." },
      { kop: "Houd de deur open zonder te duwen", tekst: "Forceren werkt averechts — een tiener die ondervraagd wordt, klapt verder dicht. Wat wel werkt: schouder-aan-schouder in plaats van oog-in-oog. Samen rijden, koken, sporten, klussen: de beste tienergesprekken ontstaan zijwaarts, nooit op commando. Bescherm een paar niet-onderhandelbare gezinsankers (samen eten op vaste avonden) en wees er — zonder agenda — op de momenten dat de deur op een kier gaat, vaak laat op de avond." },
      { kop: "Blijf de kalme grote", tekst: "Stixrud & Johnson: tieners hebben een niet-angstige volwassene nodig die vertrouwen uitstraalt — “ik zie dat jij dit kan dragen” — en bij wie de waarheid veilig is. Wie kalm blijft bij kleine onthullingen, krijgt ook de grote te horen. Reageer je op elk verhaal met paniek of preek, dan bestel je stilte." }
    ],
    doeDit: [
      "Creëer zijwaartse momenten: auto, keuken, wandeling met de hond — en laat de stiltes bestaan.",
      "Bescherm enkele vaste gezinsrituelen, vriendelijk maar niet-onderhandelbaar.",
      "Toon interesse in hun wereld zonder oordeel: laat je de muziek, game of serie eens uitleggen.",
      "Blijf uitnodigen, ook na tien keer “nee hoor” — de uitnodiging zelf is de boodschap: jij blijft welkom."
    ],
    vermijd: [
      "De relatie reduceren tot controle en logistiek: cijfers, kamers, tijden — dan bevestig je de hotelfunctie.",
      "Vrienden afkraken: dat dwingt je tiener tot kiezen, en jij verliest die keuze gegarandeerd.",
      "Gesprekken afdwingen (“we moeten eens praten”) — beschikbaarheid werkt, dagvaarding niet.",
      "Elke onthulling beantwoorden met paniek, preek of straf: zo leer je een tiener selectief zwijgen."
    ],
    zegDit: [
      "“Ik vraag niks. Ik kom gewoon even bij je zitten.”",
      "“Dat klinkt zwaar. Wil je advies of moet ik gewoon luisteren?”",
      "“Ik vertrouw jou. En ik ben er, óók als het ooit misloopt — juist dan.”"
    ],
    bronnen: [
      { boek: "hold-on-to-your-kids", detail: "Peer-oriëntatie versus volwassenenhechting: waarom leeftijdsgenoten geen vervanging zijn en hoe ouders het kompas terugwinnen via verbinding, niet via controle." },
      { boek: "self-driven-child", detail: "De niet-angstige volwassene en het radicale vertrouwen dat tieners nodig hebben om zelf te leren sturen." },
      { boek: "anxious-generation", detail: "Sociale media als permanente peer-jury en versneller van de heroriëntatie weg van ouders." }
    ],
    gerelateerd: ["band-versterken", "smartphone-wanneer", "kind-liegt"]
  },
  {
    id: "ruzie-broers-zussen",
    vraag: "Mijn kinderen maken constant ruzie. Moet ik ingrijpen?",
    thema: "gezin",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["ruzie", "broers", "zussen", "vechten", "jaloezie", "eerlijk", "scheidsrechter"],
    kort: "Speel geen rechter die schuldigen aanwijst — beschrijf het probleem, erken beide kanten en geef het conflict terug: “jullie zijn slim genoeg om hier iets op te vinden.” Grijp wél direct in bij fysiek geweld.",
    blokken: [
      { tekst: "Troostende cijfers uit <em>NurtureShock</em>: broers en zussen botsen gemiddeld meerdere keren per uur samen spelen — ruzie is de norm, geen teken van een mislukt gezin. Interessanter: de beste voorspeller van een goede band later is niet hoe wéinig ze ruziën, maar <strong>hoeveel leuke tijd ze samen hebben naast de ruzies</strong>. Investeer dus vooral in het plezier, niet alleen in het blussen." },
      { kop: "Waarom de rechtersrol averechts werkt", tekst: "Wie schuldigen aanwijst, creëert een winnaar, een verliezer en een rivaliteit met scorebord. Faber & Mazlish: meestal zag je maar het halve verhaal, en jouw vonnis bevestigt rollen (‘de dader’ en ‘het slachtoffer’) waar kinderen zich vervolgens naar gaan gedragen. Vergelijken (“waarom kan jij niet gewoon lief zijn zoals je zus?”) is gif voor de onderlinge band — élke vergelijking, ook de positieve." },
      { kop: "De bemiddelaarsroutine", tekst: "Bij gewone ruzie: stap erbij, beschrijf wat je ziet zonder schuldvraag (“twee kinderen, één tablet — dat is een lastig probleem”), erken beide kanten (“jij was aan het kijken, en jij wil ook graag”), en geef het probleem terug: “ik ben benieuwd wat jullie hierop verzinnen.” Kinderen die zelf oplossingen bouwen, hebben morgen minder ruzie; kinderen waarvoor steeds gevonnist wordt, hebben morgen een advocaat nodig. Bij slaan of echt overwicht grijp je natuurlijk meteen in — veiligheid eerst, gesprek later." }
    ],
    doeDit: [
      "Beschrijf het conflict neutraal en erken beide perspectieven — zonder vonnis.",
      "Geef het probleem terug mét vertrouwen: “jullie kennen elkaar het best. Wat is jullie plan?”",
      "Organiseer bewust leuke broer-zus-tijd (samen iets bouwen, samen tegen de ouders in een spel) — de band is de buffer.",
      "Geef elk kind apart één-op-één-tijd: jaloezie krimpt als niemand om aandacht hoeft te concurreren."
    ],
    vermijd: [
      "Rechter spelen op basis van het halve verhaal dat je toevallig zag.",
      "Vergelijken, óók positief: “jij bent tenminste rustig” maakt van rust een wapen tegen het andere kind.",
      "Altijd het oudste kind verantwoordelijk maken (“jij bent de grootste, geef gewoon toe”) — dat kweekt wrok naar jou én het jongste.",
      "Etiketten uitdelen (de driftige, de lieve, de moeilijke): kinderen leven zich in hun rol in."
    ],
    zegDit: [
      "“Ik zie twee boze kinderen en één probleem. Vertel — jij eerst, dan jij.”",
      "“Dat is inderdaad lastig: één spel, twee spelers. Wat verzinnen jullie?”",
      "“In dit huis doen we elkaar geen pijn. Ik haal jullie nu uit elkaar; praten doen we als iedereen gezakt is.”"
    ],
    bronnen: [
      { boek: "nurtureshock", detail: "Het broer-zus-hoofdstuk: ruziefrequentie is normaal; gedeeld plezier voorspelt de band; vaardigheden uit vriendschappen vertalen zich naar thuis." },
      { boek: "how-to-talk", detail: "Niet vergelijken, geen rollen opplakken, beide kanten erkennen en kinderen hun eigen conflicten leren oplossen." },
      { boek: "peaceful-parent", detail: "Eén-op-één-tijd per kind als anti-rivaliteitsmiddel en de ouder als coach in plaats van scheidsrechter." }
    ],
    gerelateerd: ["moeten-delen", "band-versterken", "driftbui-reageren"]
  },
  {
    id: "moeten-delen",
    vraag: "Moet ik mijn kind dwingen om te delen?",
    thema: "gezin",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["delen", "speelgoed", "afpakken", "wachten", "beurt", "egoïstisch", "speeltuin"],
    kort: "Nee — afgedwongen delen leert vooral dat de hardste roeper wint en dat jouw spel elk moment kan worden afgepakt. Leer in de plaats beurten nemen: “als jij klaar bent, is Noor.” Dat bouwt échte vrijgevigheid.",
    blokken: [
      { tekst: "Het klassieke tafereel: jouw kind speelt met een truck, een ander kind wil hem, en alle volwassenen kijken naar jou. De reflex — “toe, deel nu even” — leert je kind twee rare lessen: <strong>wie het luidst eist, krijgt</strong>, en: wat ik aan het doen ben, is altijd minder belangrijk dan andermans ongeduld. Volwassenen geven hun telefoon ook niet af omdat een collega er zin in heeft." },
      { kop: "Beurten in plaats van breken", tekst: "Het alternatief is beurtdenken met zelfgekozen einde: “Lou speelt ermee. Als hij klaar is, is het jouw beurt.” Het wachtende kind oefent tegen een teleurstelling kunnen (een topvaardigheid), en het spelende kind ontdekt iets verrassends: wie níet onder druk staat, geeft vaak sneller en guller af. Echte vrijgevigheid groeit uit veiligheid, nooit uit dwang — precies het punt dat Kohn over alle afgedwongen ‘deugden’ maakt." },
      { kop: "En de wachtende peuter dan?", tekst: "Die heeft het zwaar, en dat mag: “wachten is moeilijk, hè. Jij wil hem nú.” Erken het gevoel (Faber & Mazlish: een erkend gevoel krimpt), blijf in de buurt en help desnoods iets anders vinden. Speelafspraken thuis: laat je kind vooraf de onaantastbare schatten wegleggen — wat in de kamer blijft, daar wordt om de beurt mee gespeeld. Zo bepaal je het kader, en oefenen zij de rest." }
    ],
    doeDit: [
      "Introduceer beurttaal: “als jij klaar bent, mag Noor” — en bescherm dat ‘klaar’ ook echt.",
      "Erken het wachtende kind ruimhartig: wachten is oefenen, en oefenen mag gezien worden.",
      "Benoem spontane vrijgevigheid concreet als ze gebeurt: “je gaf hem zomaar je schep — kijk hoe blij hij is.”",
      "Laat voor speelafspraken vooraf de heilige knuffels en schatten opbergen."
    ],
    vermijd: [
      "Speelgoed uit handen trekken om het delen ‘op te lossen’ — dat is afpakken met een moreel sausje.",
      "Je kind egoïstisch noemen: het oefent eigendom begrijpen, dat is een fase, geen karaktertrek.",
      "Delen afdwingen om de andere ouders in de speeltuin te plezieren — jij voedt een kind op, geen publiek.",
      "Het oudste kind altijd laten wijken voor de kleinste — zo bouw je wrok in serie."
    ],
    zegDit: [
      "“Lou is er nog mee bezig. Als hij klaar is, is het jouw beurt — ik kom het je zeggen.”",
      "“Wachten is moeilijk. Zal ik bij je blijven tot het jouw beurt is?”",
      "“Jij mag eerst rustig klaar spelen. Zeg jij het als Noor mag?”"
    ],
    bronnen: [
      { boek: "good-inside", detail: "Eigendom, beurten en tegen een teleurstelling kunnen: kinderen leren geven vanuit veiligheid, niet vanuit dwang." },
      { boek: "unconditional-parenting", detail: "Afgedwongen deugden zijn gehoorzaamheid in vermomming; werk mét het kind aan echte motieven in plaats van gedrag af te dwingen." },
      { boek: "how-to-talk", detail: "Gevoelens van het wachtende kind erkennen in plaats van wegmanagen; kinderen mee laten denken over oplossingen." }
    ],
    gerelateerd: ["ruzie-broers-zussen", "nee-zeggen-zonder-drama", "driftbui-reageren"]
  }
];
