// ============================================================
// EHBO — Vragen, deel 1: baby & slaap, grote emoties
// ============================================================

const VRAGEN_1 = [
  {
    id: "baby-laten-huilen",
    vraag: "Mag ik mijn baby laten huilen?",
    thema: "baby",
    leeftijd: ["baby"],
    uitgelicht: true,
    tags: ["huilen", "slaaptraining", "cry it out", "troosten", "nacht", "inslapen", "cortisol"],
    kort: "Kort huilen terwijl jij eraan komt: geen probleem. Een baby structureel alleen laten uithuilen: af te raden — het jonge stressbrein kan zichzelf nog niet kalmeren.",
    blokken: [
      { tekst: "Eerst geruststelling: geen enkele ouder kan élke traan voorkomen, en dat hoeft ook niet. Een baby die twee minuten huilt terwijl jij je handen wast, loopt geen schade op. Waar de boeken unaniem voor waarschuwen is iets anders: een jonge baby <strong>systematisch alleen laten uithuilen</strong> om hem te ‘leren’ slapen." },
      { kop: "Wat er in dat kleine brein gebeurt", tekst: "Margot Sunderland vat het hersenonderzoek samen: een baby heeft nog geen werkende ‘bovenverdieping’ om zichzelf te kalmeren. Huilen is geen manipulatie — het is het enige alarmsysteem dat hij heeft. Blijft het alarm lang onbeantwoord, dan stijgt het stresshormoon cortisol fors. Een baby die uiteindelijk ‘stil valt’, heeft niet leren slapen, maar geleerd dat roepen geen zin heeft." },
      { kop: "Troosten bouwt juist zelfstandigheid", tekst: "Het klinkt tegenstrijdig, maar troost is precies hoe een kind later zichzélf leert troosten. Siegel & Bryson noemen het de derde S: <em>soothed</em>. Elke keer dat jij een overstuur kind kalmeert, oefenen jullie samen het circuit dat het later alleen zal gebruiken. Veilig gehechte kinderen worden niet aanhankelijker — ze durven juist sneller los te laten." },
      { kop: "En als ik er even helemaal doorheen zit?", tekst: "Een baby twee minuten veilig in zijn bedje leggen om zelf op adem te komen is géén verwaarlozing — het is verstandig. Een uitgeputte, kokende ouder troost niemand. Leg je baby veilig neer, adem, kom terug. Vraag hulp aan je partner, familie of Kind en Gezin als het structureel te veel wordt." }
    ],
    doeDit: [
      "Reageer in de eerste maanden gewoon royaal op huilen — verwennen bestaat op deze leeftijd niet.",
      "Troost gelaagd: eerst stem, dan hand, dan oppakken. Soms is je stem al genoeg.",
      "Leg je baby even veilig neer als jij zelf op ontploffen staat, en kom terug zodra je gezakt bent.",
      "Kies bij slaapproblemen voor aanwezige methodes (afbouwend naast het bedje blijven) in plaats van de deur dicht."
    ],
    vermijd: [
      "Een baby jonger dan zes maanden bewust laten uithuilen — het stresssysteem is er niet klaar voor.",
      "Stilte na lang huilen lezen als ‘het werkt’ — het kan ook opgeven zijn.",
      "Jezelf veroordelen om één rotavond. Eén keer is geen patroon; patronen vormen het brein, momenten niet."
    ],
    zegDit: null,
    bronnen: [
      { boek: "science-of-parenting", detail: "Hoofdstuk over huilen en separaties: langdurig onbeantwoord huilen geeft schadelijke cortisolpieken in het babybrein; troost bouwt het stresssysteem op." },
      { boek: "power-of-showing-up", detail: "De vier S'en: een kind dat gesust (soothed) wordt, ontwikkelt de interne circuits om zichzelf later te kalmeren." },
      { boek: "philippa-perry", detail: "Over baby's en gevoelens: elk huilen serieus nemen als communicatie, niet als manipulatie of ‘sterke longen’." }
    ],
    gerelateerd: ["baby-verwennen", "slaap-hoe-belangrijk", "band-versterken"]
  },
  {
    id: "baby-verwennen",
    vraag: "Verwen ik mijn baby door hem steeds vast te houden?",
    thema: "baby",
    leeftijd: ["baby"],
    uitgelicht: false,
    tags: ["verwennen", "dragen", "knuffelen", "oppakken", "hechting", "aanhankelijk"],
    kort: "Nee. Een baby kun je niet verwennen met nabijheid — elke knuffel bouwt letterlijk aan een stressbestendig brein. ‘Verwend’ gedrag is een peuter-en-later-verhaal, geen babyverhaal.",
    blokken: [
      { tekst: "Dit is misschien wel de meest hardnekkige opvoedmythe, en de wetenschap is er verrassend duidelijk over: <strong>baby's troosten en dragen maakt ze niet afhankelijk, maar juist zelfstandiger</strong>. Verwennen veronderstelt dat een baby berekent: ‘als ik huil, krijg ik aandacht’. Dat soort strategisch denken kán het babybrein simpelweg nog niet." },
      { kop: "Wat nabijheid in het brein doet", tekst: "Sunderland beschrijft hoe vasthouden, wiegen en huid-op-huid de ‘gelukschemie’ activeren: oxytocine en natuurlijke geluksstofjes. Die stoffen zijn geen luxe — ze zijn het cement van de hersenverbindingen die later helpen om met stress om te gaan. Een royaal getrooste baby krijgt een goed afgesteld alarmsysteem mee voor de rest van zijn leven." },
      { kop: "Waar komt de angst voor verwennen dan vandaan?", tekst: "Philippa Perry wijst naar onze eigen opvoeding: generaties ouders kregen het advies baby's ‘niet te veel vast te pakken’. Wie zelf zo is grootgebracht, voelt soms onbewust weerstand bij al dat geknuffel. Dat gevoel mag er zijn — maar het is een echo uit het verleden, geen signaal dat je iets fout doet." }
    ],
    doeDit: [
      "Pak op, draag, knuffel zoveel als voor jullie werkt — volg je instinct, niet de buren.",
      "Reageer voorspelbaar op signalen: voorspelbaarheid is precies wat een babybrein veilig laat voelen.",
      "Gun jezelf ook pauzes: een draagdoek, een partner, een oma. Nabijheid hoeft niet 24/7 uit jouw armen te komen."
    ],
    vermijd: [
      "Adviezen opvolgen die ‘flink zijn’ vragen van een baby van weken oud.",
      "Een huilende baby negeren ‘omdat hij net gevoed en verschoond is’ — contact ís ook een behoefte.",
      "Je laten opjagen door ‘hij heeft je door, hoor’ — een baby heeft niemand door; hij heeft je nodig."
    ],
    zegDit: null,
    bronnen: [
      { boek: "science-of-parenting", detail: "De chemie van welbevinden: oxytocine en opioïden bij aanraking bouwen het emotionele brein; troost in jaar één voorspelt stressbestendigheid later." },
      { boek: "philippa-perry", detail: "Over de erfenis van je eigen opvoeding: waarom ‘niet verwennen’ een doorgegeven reflex is en geen wetenschap." },
      { boek: "power-of-showing-up", detail: "Veilige hechting ontstaat door betrouwbaar aanwezig zijn — de beste voorspeller van latere zelfstandigheid." }
    ],
    gerelateerd: ["baby-laten-huilen", "band-versterken"]
  },
  {
    id: "slaap-hoe-belangrijk",
    vraag: "Hoe belangrijk is slaap nu écht?",
    thema: "slaap",
    leeftijd: ["baby", "peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["slaap", "bedtijd", "moe", "slaaptekort", "later opblijven", "concentratie"],
    kort: "Belangrijker dan bijna alles. Eén uur minder slaap per nacht zet een kind in zijn ontwikkeling jaren achteruit en verklaart een flink deel van humeur-, gedrags- en leerproblemen.",
    blokken: [
      { tekst: "Als er één hoofdstuk uit <em>NurtureShock</em> elke ouder zou moeten kennen, is het dit. Bronson & Merryman verzamelden het slaaponderzoek en de conclusie is verbluffend: <strong>het verschil van één uur slaap per nacht</strong> komt bij kinderen overeen met jaren ontwikkeling. Een uitgeslapen zesdeklasser presteert als een uitgeruste leerling; dezelfde leerling met een uur minder slaapt presteert als een vierdeklasser." },
      { kop: "Waarom kinderslaap anders is", tekst: "Een kinderbrein is in aanbouw: tijdens de slaap worden de lessen van overdag letterlijk vastgelegd. Slaaptekort bij kinderen vreet dus niet alleen energie, maar ook geheugen, het kalmeren van emoties en zelfbeheersing. Veel ‘druk’ of ‘humeurig’ gedrag is in werkelijkheid gewoon moe gedrag — bij kinderen uit zich slaaptekort vaak in opgefoktheid in plaats van gapen." },
      { kop: "Tieners: laat ze uitslapen waar het kan", tekst: "De biologische klok van tieners verschuift echt — ze kúnnen vaak niet vroeg inslapen. Gecombineerd met vroege schooltijden bouwen ze chronisch tekort op, met aantoonbare gevolgen voor humeur en schoolresultaten. Wees dus mild over uitslapen in het weekend en streng over schermen in bed." }
    ],
    doeDit: [
      "Maak bedtijd heilig — vijftien minuten vroeger is al meetbaar verschil.",
      "Bouw een vast, saai-gezellig ritueel: zelfde volgorde, zelfde tijd, elke avond.",
      "Weer schermen uit de slaapkamer; blauw licht en spannende content zijn slaapgif.",
      "Herken ‘moe’ achter druk of huilerig gedrag voor je er een opvoedprobleem van maakt."
    ],
    vermijd: [
      "Bedtijd structureel laten schuiven voor ‘nog eventjes’ — de schade is onzichtbaar maar reëel.",
      "Slaap inruilen voor extra activiteiten of huiswerk: een uitgerust brein leert méér in minder tijd.",
      "Een tiener als lui bestempelen omdat zijn klok verschoven is — dat is biologie, geen karakter."
    ],
    zegDit: null,
    bronnen: [
      { boek: "nurtureshock", detail: "Hoofdstuk ‘The Lost Hour’: één uur slaapverschil = jaren verschil in ontwikkeling; slaaptekort verklaart deels tienerhumeur en dalende resultaten." },
      { boek: "science-of-parenting", detail: "Slaap en stressregulatie: rust en ritme als fundament van het zich ontwikkelende emotionele brein." }
    ],
    gerelateerd: ["baby-laten-huilen", "schermtijd-hoeveel"]
  },
  {
    id: "driftbui-reageren",
    vraag: "Hoe reageer ik op een driftbui?",
    thema: "emoties",
    leeftijd: ["peuter", "kind"],
    uitgelicht: true,
    tags: ["driftbui", "woede", "tantrum", "boos kind", "krijsen", "supermarkt", "ontploffen"],
    kort: "Eerst verbinden, dan pas sturen. Tijdens de storm werkt geen enkele les — jouw kalmte en nabijheid wél. Praten en afspraken komen pas als het kind weer rustig is.",
    blokken: [
      { tekst: "Een echte driftbui is geen opvoedingsfout en geen manipulatie. Siegel & Bryson leggen uit wat er gebeurt: je kind ‘flipt zijn deksel’ — de emotionele benedenverdieping van het brein neemt het over en de redelijke bovenverdieping is letterlijk offline. <strong>Daarom werkt redeneren tijdens een driftbui nooit:</strong> je praat tegen een verdieping waar niemand thuis is." },
      { kop: "Stap 1: blijf zelf heel", tekst: "Laura Markham is er glashelder over: eerst jij zelf rustig. Een volwassene die meeschreeuwt, bevestigt het brandalarm alleen maar. Adem uit (langer uit dan in), zak door je knieën, maak je stem laag en traag. Je hoeft niets te fiksen — je moet vooral niet méé ontploffen." },
      { kop: "Stap 2: verbind met de emotie, niet met de woorden", tekst: "Becky Kennedy noemt het <em>two things are true</em>: de grens blijft staan én het gevoel mag er helemaal zijn. “Je wilde dat koekje zó graag. Je bent woedend. Ik blijf bij je.” Je geeft niet toe aan de eis — je geeft erkenning aan het gevoel. Dat is geen verwennen; dat is het verschil tussen de brand blussen en de brandweer uitschelden." },
      { kop: "Stap 3: achteraf — en pas achteraf — het gesprek", tekst: "Als de storm geliquideerd is (soms pas uren later), komt het leermoment: <em>name it to tame it</em>. Vertel samen het verhaal: “Je was zó boos in de winkel, hè. Je hele lijf deed mee.” Een kind dat woorden krijgt voor de storm, krijgt er gaandeweg grip op. Hier mag ook de grens herhaald worden — kort, warm en zonder preek." }
    ],
    doeDit: [
      "Maak jezelf eerst kalm — traag praten, laag zitten, schouders los.",
      "Benoem het gevoel en blijf in de buurt: nabijheid is het bericht ‘je bent veilig, ook zo’.",
      "Houd de grens vast die de bui uitlokte: toegeven leert dat ontploffen werkt.",
      "Bespreek het voorval later samen na, als beide verdiepingen weer online zijn."
    ],
    vermijd: [
      "Redeneren, onderhandelen of preken mídden in de bui — de bovenverdieping is offline.",
      "Strafbankjes of je kind alleen wegsturen om zijn gevoel: emotie is geen overtreding.",
      "Zelf schreeuwen of dreigen — twee gekantelde dekseltjes blussen elkaar niet.",
      "Toegeven aan de eis om van het lawaai af te zijn — daarmee train je de volgende bui."
    ],
    zegDit: [
      "“Je bent zó boos. Dat mag. Ik blijf bij je.”",
      "“Het antwoord blijft nee, én ik snap dat je dat verschrikkelijk vindt.”",
      "“Ik ga je even vasthouden zodat je niemand pijn doet. Ik laat je niet alleen met zo'n grote storm.”",
      "“Weet je nog, die grote boosheid vanmiddag? Vertel eens, hoe begon dat in je buik?” (achteraf)"
    ],
    bronnen: [
      { boek: "whole-brain-child", detail: "‘Connect & redirect’ en het boven/benedenbrein: eerst rechterbrein-contact (toon, nabijheid), dan pas linksbrein-logica; ‘name it to tame it’ voor achteraf." },
      { boek: "good-inside", detail: "‘Two things are true’: grens én empathie tegelijk; gedrag is een venster op een vaardigheid die nog ontbreekt." },
      { boek: "peaceful-parent", detail: "Eerst de ouder zelf kalm als stap nul; gevoelens begeleiden in plaats van straffen." },
      { boek: "gottman-eq", detail: "De vijf stappen van emotiecoaching: de bui als kans tot verbinding in plaats van als gedragsprobleem." }
    ],
    gerelateerd: ["ik-haat-je", "nee-zeggen-zonder-drama", "zelf-ontploft"]
  },
  {
    id: "ik-haat-je",
    vraag: "Mijn kind roept “ik haat je!” — wat nu?",
    thema: "emoties",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["ik haat je", "stomme mama", "brutaal", "schelden", "kwetsende woorden", "respect"],
    kort: "Vertaal het: ‘ik haat je’ betekent ‘ik ben overweldigd en jij bent veilig genoeg om dat bij te dumpen’. Vang het gevoel op zonder de woorden persoonlijk te nemen — grenzen aan gedrag mogen blijven.",
    blokken: [
      { tekst: "Au. En toch: dit zinnetje zegt bijna nooit wat het lijkt te zeggen. Becky Kennedy raadt de <strong>meest gulle interpretatie</strong> aan: een kind dat “ik haat je” roept, zegt eigenlijk “dit gevoel is groter dan ik aankan, en jij bent de veiligste persoon die ik ken om het op af te vuren”. Het is een compliment in een heel lelijke verpakking." },
      { kop: "Waarom terugslaan averechts werkt", tekst: "Reageer je met “zo praat jij niet tegen mij!” of met gekwetst terugtrekken, dan leert je kind: mijn grote gevoelens zijn gevaarlijk, die moet ik voortaan verstoppen. Gottman noemt dat het wegwuiven en afkeuren van emoties — de snelste route naar een kind dat je op zijn vijftiende niets meer vertelt. Het gevoel mag er zijn; je hoeft de woorden niet mooi te vinden." },
      { kop: "Stevig én warm tegelijk", tekst: "De kunst is sturdy leadership: jij blijft overeind, dus het kind hoeft niet voor jouw gevoelens te zorgen. “Jij bent zó boos op mij. Dat mag. Ik blijf van je houden, ook nu.” Pas als de rust terug is, kun je iets zeggen over woorden en hun effect — als uitnodiging, niet als afrekening." }
    ],
    doeDit: [
      "Adem eerst — dit gaat niet over jou, hoe persoonlijk het ook klinkt.",
      "Vertaal hardop: “jij bent nu echt woedend op mij” — daarmee toon je dat de boodschap aankwam.",
      "Blijf beschikbaar: wegloop-met-slaande-deur van jouw kant bevestigt dat liefde voorwaardelijk is.",
      "Kom er in een rustig moment op terug: “je mag woedend op me zijn. Zullen we woorden zoeken die ik beter snap?”"
    ],
    vermijd: [
      "“Dan haat ik jou ook” of sarcasme — jij bent de volwassene met het werkende bovenbrein.",
      "Straf op het gevoel zetten: dan onthoudt je kind ‘boosheid op papa is verboden’, niet ‘ik formuleer het anders’.",
      "Er urenlang zichtbaar kapot van zijn waar je kind bij is — dat geeft een kind te veel macht én te veel schuld."
    ],
    zegDit: [
      "“Wauw, zo boos ben je dus op mij. Oké. Ik blijf hier.”",
      "“Je mag alles voelen. Ik hou ook van jou als jij even niet van mij houdt.”",
      "“Dat deed pijn om te horen — én ik snap dat je het zei omdat je overliep. Hoe zeggen we het de volgende keer?” (achteraf)"
    ],
    bronnen: [
      { boek: "good-inside", detail: "Meest gulle interpretatie en sturdy leadership: het kind is goed vanbinnen, het gedrag is overloop; de ouder blijft het stevige anker." },
      { boek: "gottman-eq", detail: "Emoties afkeuren of bestraffen leert kinderen hun binnenwereld te verbergen; erkennen houdt de lijn open." },
      { boek: "philippa-perry", detail: "Kijk naar wat het in jóu raakt: je eigen gekwetstheid komt vaak uit je eigen geschiedenis, niet uit dit moment." }
    ],
    gerelateerd: ["driftbui-reageren", "zelf-ontploft", "tiener-trekt-terug"]
  },
  {
    id: "kind-angstig",
    vraag: "Mijn kind is angstig — hoe help ik zonder de angst te voeden?",
    thema: "emoties",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["angst", "bang", "piekeren", "monsters", "faalangst", "vermijden", "stress"],
    kort: "Erken het gevoel, maar red je kind niet van elke spannende situatie. Angst krimpt door kleine, gedoseerde porties ‘ik kan dit aan’ — met jou als kalme co-piloot, niet als schild.",
    blokken: [
      { tekst: "De reflex van elke liefhebbende ouder is: weghalen wat eng is. Maar daarmee leert het angstige brein precies de verkeerde les — <strong>‘zie je wel, het wás gevaarlijk, want ik werd gered’</strong>. Stixrud & Johnson laten zien dat vermijding angst voedt, terwijl kleine overwinningen (‘ik deed het en het ging’) angst afbouwen." },
      { kop: "Eerst erkennen, dan pas oplossen", tekst: "Niets ondermijnt een bang kind meer dan “er is niks om bang voor te zijn”. Voor het kind ís er iets — en wie dat ontkent, valt af als hulplijn. Begin dus altijd met erkenning: “jij vindt dit echt spannend, hè.” Pas een gevoel dat er mag zijn, kan onderzocht worden: hoe groot is het? Waar zit het in je lijf? Wat zegt het?" },
      { kop: "Jouw kalmte is het medicijn", tekst: "Angst is besmettelijk — maar kalmte ook. Stixrud & Johnson noemen de niet-angstige aanwezigheid van een volwassene de krachtigste stressbuffer die er bestaat. Check dus eerst jezelf: maak ik me vooral zorgen over zíjn zorgen? Kinderen lezen feilloos af of jij gelooft dat ze het aankunnen." },
      { kop: "De ladder, trede voor trede", tekst: "Werk met kleine stappen richting het enge ding: eerst erover praten, dan kijken, dan kort proberen met jou erbij, dan alleen. Haidt voegt eraan toe: kinderen hebben juist méér zelfstandige uitdaging nodig (alleen naar de bakker, boomklimmen), niet minder. Beschermen tegen elk risico maakte deze generatie niet veiliger, maar banger." }
    ],
    doeDit: [
      "Benoem en normaliseer: “spannend? Logisch. Nieuw is altijd spannend.”",
      "Splits het enge op in mini-stappen en vier elke trede.",
      "Geef je kind dagelijks echte zelfstandigheid die bij zijn leeftijd past — zelf iets gaan kopen, zelf iets regelen.",
      "Vertel over je eigen overwonnen angsten: niet ‘wees niet bang’, wel ‘ik was ook bang én ik deed het’."
    ],
    vermijd: [
      "Alles uit de weg ruimen wat spanning oproept — dat is angst sponsoren.",
      "“Stel je niet aan” of “grote jongens zijn niet bang” — schaamte bovenop angst.",
      "Eindeloos gerststellen op herhaal (“echt waar, er gebeurt niks, beloofd”): herhaalde geruststelling is ook vermijding.",
      "Je eigen paniek tonen bij elke schram of toets — jouw alarm kalibreert het hunne."
    ],
    zegDit: [
      "“Dit is spannend én jij kan spannende dingen. Dat heb je al vaker bewezen.”",
      "“Hoe groot is de bange-bui: een muis, een hond of een olifant?”",
      "“Ik blijf dichtbij. Jij doet het, ik kijk.”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "Gevoel van controle als buffer tegen angst; de ouder als niet-angstige aanwezigheid; vermijding voedt angst, zelfstandigheid bouwt veerkracht." },
      { boek: "anxious-generation", detail: "Overbescherming in de echte wereld heeft kinderen angstiger gemaakt; vrij spel en zelfstandigheid zijn de anti-angsttraining." },
      { boek: "whole-brain-child", detail: "‘Name it to tame it’: angst benoemen en het verhaal vertellen kalmeert het alarmcircuit." },
      { boek: "gottman-eq", detail: "Eerst valideren, dan pas problemen oplossen — de basisvolgorde van emotiecoaching." }
    ],
    gerelateerd: ["driftbui-reageren", "smartphone-wanneer", "huiswerk-oorlog"]
  },
  {
    id: "zelf-ontploft",
    vraag: "Ik heb geschreeuwd tegen mijn kind. Hoe maak ik het goed?",
    thema: "emoties",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: true,
    tags: ["schreeuwen", "schuldgevoel", "sorry zeggen", "herstel", "uitbarsting", "spijt", "slechte ouder"],
    kort: "Ontploffen gebeurt elke ouder. Wat telt is het herstel: ga terug, neem de verantwoordelijkheid zonder ‘maar’, en benoem dat het niet de schuld van je kind was. Breuk + herstel maakt de band sterker.",
    blokken: [
      { tekst: "Eerst dit: de ouder die nooit te hard uitvalt, bestaat niet. Philippa Perry en Becky Kennedy zeggen allebei hetzelfde: <strong>niet de breuk beschadigt een kind, maar de onherstelde breuk</strong>. Een kind dat na een uitbarsting alleen blijft met de vraag ‘was het mijn schuld?’, vult dat zelf in — meestal met ‘ja’. Herstel haalt die giftige conclusie weg." },
      { kop: "Zo ziet echt herstel eruit", tekst: "Ga terug naar je kind als jij gezakt bent — minuten of uren later, liever vandaag dan morgen. Benoem wat er gebeurde, neem eigenaarschap, en sloop elke ‘maar’: <em>“Ik schreeuwde. Dat was te hard en dat verdiende jij niet — ook al was ik boos over de rommel. Mijn boosheid is mijn verantwoordelijkheid.”</em> Een sorry met ‘maar jij…’ erachter is geen sorry, het is een aanklacht met een strikje." },
      { kop: "Waarom dit je kind sterker maakt", tekst: "Kinderen die ruptuur én herstel meemaken, leren drie levenslessen tegelijk: relaties kunnen tegen een stootje, fouten zijn herstelbaar, en sterke mensen zeggen sorry. Kennedy benadrukt: je herschrijft er letterlijk de herinnering mee — van ‘ik was alleen en het was eng’ naar ‘het ging mis en papa kwam terug’." },
      { kop: "En daarna: werk aan de lont", tekst: "Hunter Clarke-Fields wijst op het patroon achter de uitbarsting: te weinig slaap, te veel ballen in de lucht, oude triggers. Leer je eigen voortekenen kennen (verhitte borst, opgetrokken schouders) en koop tijd vóór het kookpunt: kamer uit, water drinken, tot tien ademen. Zelfcompassie hoort erbij — wie zichzelf afmaakt na een slechte dag, staat morgen weer op scherp."
      }
    ],
    doeDit: [
      "Herstel altijd, ook na ‘kleine’ uitvallen — en ook bij een baby of peuter: toon en knuffel zeggen wat woorden nog niet kunnen.",
      "Neem volledige verantwoordelijkheid: “mijn boosheid, mijn fout”, zonder voorwaarden.",
      "Benoem expliciet dat het niet de schuld van je kind was — kinderen nemen anders standaard de schuld op zich.",
      "Onderzoek je trigger achteraf: wat was de échte druppel — het gedrag, of jouw lege batterij?"
    ],
    vermijd: [
      "Sorry zeggen met een staart: “sorry dat ik riep, máár als jij gewoon luistert…”",
      "Het wegmoffelen en doen alsof er niks gebeurde — kinderen voelen de spanning toch en vullen de stilte zelf in.",
      "Jezelf dagenlang een monster noemen: schuldgevoel zonder herstelactie helpt niemand, je kind nog het minst.",
      "Je kind verantwoordelijk maken voor jouw troost (“zeg je dat het oké is, knuffel je me?”) — herstel is een cadeau, geen ruil."
    ],
    zegDit: [
      "“Ik schreeuwde daarnet. Dat was te hard. Het was niet jouw schuld — grote mensen moeten hun eigen boosheid besturen.”",
      "“Sorry. Jij verdiende dat niet. Ik ga oefenen om eerst te ademen.”",
      "“Zelfs als ik boos ben, hou ik van je. Altijd. Daar verandert geen geschreeuw iets aan.”"
    ],
    bronnen: [
      { boek: "philippa-perry", detail: "Ruptuur en herstel als kern van het boek: niet de fout maar het uitblijven van herstel beschadigt; kijk ook naar wat uit je eigen jeugd meekwam." },
      { boek: "good-inside", detail: "Repair als superkracht: herstel herschrijft de herinnering van het kind en modelleert verantwoordelijkheid nemen." },
      { boek: "raising-good-humans", detail: "Triggers herkennen in je lijf, de pauzeknop trainen en zelfcompassie als anti-ontploffingsbeleid." },
      { boek: "conscious-parent", detail: "Je heftigste reacties wijzen meestal naar je eigen onverwerkte verhaal, niet naar het gedrag van je kind." }
    ],
    gerelateerd: ["driftbui-reageren", "ik-haat-je", "luisteren-zonder-schreeuwen"]
  }
];
