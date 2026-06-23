// ============================================================
// EHBO — Vragen, deel 5: extra cases over baby, emoties, grenzen & praten
// ============================================================

const VRAGEN_5 = [
  {
    id: "baby-dutjes-kort",
    vraag: "Mijn baby doet alleen hazenslaapjes. Moet ik iets veranderen?",
    thema: "slaap",
    leeftijd: ["baby"],
    uitgelicht: false,
    tags: ["dutjes", "hazenslaap", "slaap", "oververmoeid", "ritme", "baby"],
    kort: "Korte dutjes zijn vaak normaal, zeker in de eerste maanden. Kijk naar totaalrust, prikkels en wakkertijd, niet alleen naar één dutje. Rustig ritme helpt meer dan slaap afdwingen.",
    blokken: [
      { tekst: "Een baby die na 32 minuten alweer wakker is, heeft niet per se een probleem. Babycycli zijn kort, het brein rijpt nog en veel baby's hebben hulp nodig om opnieuw te zakken. <strong>Hazenslaapjes worden pas een signaal als je baby structureel oververmoeid, ontroostbaar of uitgeput raakt.</strong>" },
      { kop: "Slaap is breinonderhoud", tekst: "NurtureShock benadrukt hoe belangrijk slaap is voor leren en stemming. Sunderland vult aan dat jonge baby's hun stresssysteem nog niet zelf regelen. Help dus de voorwaarden: voorspelbare wakkertijd, minder prikkels voor het dutje en zachte overgang. Het doel is niet controle over slaap, maar een omgeving waarin slaap kan komen." }
    ],
    doeDit: [
      "Let op wakkertijden en vroege moe-signalen: wegkijken, staren, mopperen.",
      "Maak dutjes saai voorspelbaar: zelfde plek, zelfde liedje, minder licht.",
      "Help opnieuw inslapen met stem, hand of wiegen als je baby nog moe lijkt."
    ],
    vermijd: [
      "Elk kort dutje zien als mislukking.",
      "Steeds nieuwe trucjes proberen waardoor je baby juist wakkerder wordt.",
      "Een oververmoeide baby langer wakker houden in de hoop op een beter dutje."
    ],
    zegDit: null,
    bronnen: [
      { boek: "nurtureshock", detail: "Slaap heeft grote invloed op leren, stemming en zelfbeheersing; kleine tekorten stapelen bij kinderen snel op." },
      { boek: "science-of-parenting", detail: "Jonge baby's hebben hulp van buitenaf nodig om te kalmeren, en minder prikkels, omdat het stresssysteem nog rijpt." },
      { boek: "power-of-showing-up", detail: "Voorspelbare troost en nabijheid bouwen veiligheid rond rustmomenten." }
    ],
    gerelateerd: ["baby-wordt-wakker", "slaap-hoe-belangrijk", "baby-laten-huilen"]
  },
  {
    id: "nachtvoeding-afbouwen",
    vraag: "Wanneer en hoe bouw ik nachtvoedingen af?",
    thema: "slaap",
    leeftijd: ["baby"],
    uitgelicht: false,
    tags: ["nachtvoeding", "voeden", "borstvoeding", "fles", "doorslapen", "afbouwen"],
    kort: "Niet op wilskracht, maar op rijpheid. Als groei en gezondheid goed zitten, kun je zacht afbouwen met voorspelbare troost, kleinere stappen en een ouder die beschikbaar blijft.",
    blokken: [
      { tekst: "Nachtvoeding is bij jonge baby's geen slechte gewoonte, maar voeding, nabijheid en kalmte in één. Afbouwen kan soms, maar het werkt het best als je niet de boodschap geeft: vanaf nu sta je er alleen voor. <strong>Het doel is minder voeding, niet minder veiligheid.</strong>" },
      { kop: "Zacht afbouwen", tekst: "Siegel & Bryson leggen uit dat kinderen veiligheid ontwikkelen door veilig, gezien en getroost te blijven. Dat betekent: voorspelbaar reageren, eventueel korter voeden, een andere ouder laten troosten of de tijd tussen voedingen langzaam rekken. Bij twijfel over groei, reflux of gezondheid hoort eerst medisch advies." }
    ],
    doeDit: [
      "Check eerst groei, gezondheid en leeftijd met een professional als je twijfelt.",
      "Kies één duidelijke aanpak en houd die een week vol voor je evalueert.",
      "Bied nabijheid zonder automatisch volledig te voeden: hand, stem, knuffel, korter voeden."
    ],
    vermijd: [
      "Plots stoppen omdat een schema zegt dat het zou moeten kunnen.",
      "Nachtvoeding beschamen als manipulatie.",
      "Elke nacht anders reageren; onvoorspelbaarheid maakt wakker worden vaak sterker."
    ],
    zegDit: null,
    bronnen: [
      { boek: "power-of-showing-up", detail: "Veiligheid blijft de basis bij elke overgang; soothed worden is geen extraatje maar ontwikkeling." },
      { boek: "science-of-parenting", detail: "Nabijheid en troost helpen het jonge stresssysteem kalmeren, ook wanneer praktische routines veranderen." },
      { boek: "philippa-perry", detail: "Babybehoeften serieus nemen voorkomt dat ouders normale afhankelijkheid als manipulatie lezen." }
    ],
    gerelateerd: ["baby-wordt-wakker", "baby-laten-huilen", "slaaptraining-zonder-uithuilen"]
  },
  {
    id: "peuter-geen-middagdutje",
    vraag: "Mijn peuter weigert het middagdutje. Toch blijven proberen?",
    thema: "slaap",
    leeftijd: ["peuter"],
    uitgelicht: false,
    tags: ["middagdutje", "peuter", "slaap", "rustmoment", "oververmoeid", "bedtijd"],
    kort: "Sommige peuters stoppen vroeg, anderen hebben rust nog hard nodig. Maak van slapen geen gevecht: bewaak een vast rustmoment en laat het lijf tonen of slaap nog nodig is.",
    blokken: [
      { tekst: "Het middagdutje verdwijnt meestal niet in één rechte lijn. Dagen zonder slaap kunnen prima gaan, tot je om 17u een ingestorte peuter hebt. <strong>De vraag is niet alleen: slaapt hij nog, maar: kan zijn lijf de dag dragen?</strong>" },
      { kop: "Rust kalmeert het brein", tekst: "NurtureShock laat zien dat slaaptekort gedrag en leren stevig raakt. Markham zou de strijd eruit halen: een rustmoment is de grens, slapen is wat het lijf eventueel doet. Zo wordt het geen machtsstrijd over ogen dichtdoen." }
    ],
    doeDit: [
      "Hou een dagelijks rustmoment met boekjes, knuffel of rustige audio.",
      "Vervroeg bedtijd op dagen zonder dutje.",
      "Kijk naar gedrag rond etenstijd: druk, huilerig of botsend kan moe zijn."
    ],
    vermijd: [
      "Een peuter dwingen te slapen; slapen laat zich slecht bevelen.",
      "Het dutje schrappen en bedtijd gelijk houden.",
      "Moe gedrag interpreteren als expres lastig."
    ],
    zegDit: [
      "“Je hoeft niet te slapen. Je lijf rust wel even.”",
      "“Vandaag geen dutje, dus vanavond vroeger naar bed.”"
    ],
    bronnen: [
      { boek: "nurtureshock", detail: "Zelfs beperkte slaaptekorten beïnvloeden gedrag, leren en het kalmeren van emoties bij kinderen." },
      { boek: "peaceful-parent", detail: "Routines en kalme grenzen helpen zonder machtsstrijd; de ouder die zelf kalm blijft komt eerst." },
      { boek: "whole-brain-child", detail: "Jonge kinderen hebben hulp nodig bij overgangen, zichzelf inhouden en lichaamsbewustzijn." }
    ],
    gerelateerd: ["slaap-hoe-belangrijk", "peuter-bedtijd-strijd", "driftbui-reageren"]
  },
  {
    id: "slaaptraining-zonder-uithuilen",
    vraag: "Kan slaaptraining zonder mijn kind alleen te laten huilen?",
    thema: "slaap",
    leeftijd: ["baby", "peuter"],
    uitgelicht: false,
    tags: ["slaaptraining", "uithuilen", "inslapen", "nacht", "troosten", "slaapmethode"],
    kort: "Ja. Je kunt slaapgewoontes veranderen met aanwezigheid, herhaling en geleidelijke hulpvermindering. Je kind hoeft niet alleen te zijn om iets nieuws te leren.",
    blokken: [
      { tekst: "Slaaptraining wordt vaak voorgesteld als deur dicht en volhouden. De boeken bieden een zachtere logica: kinderen leren nieuwe patronen beter wanneer hun alarmsysteem niet maximaal aan staat. <strong>Je kunt de gewoonte veranderen zonder de relatie uit te zetten.</strong>" },
      { kop: "Aanwezig afbouwen", tekst: "Sunderland en Siegel & Bryson leggen allebei nadruk op samen kalmeren (co-regulatie). Praktisch: eerst naast het bed, dan iets verder weg, dan kort terugkomen. Je kind mag protesteren tegen verandering; het verschil is dat protest niet alleen gedragen hoeft te worden." }
    ],
    doeDit: [
      "Kies één kleine verandering tegelijk: inslapen, nachtvoeding of terugleggen.",
      "Blijf voorspelbaar aanwezig en verminder hulp stap voor stap.",
      "Herstel overdag de verbinding als nachten pittig zijn."
    ],
    vermijd: [
      "Verandering starten in een periode van ziekte, verhuis of grote stress.",
      "Huilen zien als bewijs dat je harder moet worden.",
      "Elke avond een andere methode proberen."
    ],
    zegDit: [
      "“Ik ben hier. Je leert iets nieuws en dat is lastig.”",
      "“Ik ga op de stoel zitten. Ik blijf dichtbij.”"
    ],
    bronnen: [
      { boek: "science-of-parenting", detail: "Langdurig onbeantwoord huilen kan het stresssysteem overspoelen; nabijheid ondersteunt regulatie." },
      { boek: "power-of-showing-up", detail: "Safe en soothed blijven ook bij frustrerende routines de basis voor veiligheid." },
      { boek: "peaceful-parent", detail: "Rustige herhaling en ouderlijke kalmte helpen gewoontes veranderen zonder strijd te vergroten." }
    ],
    gerelateerd: ["baby-laten-huilen", "nachtvoeding-afbouwen", "baby-wordt-wakker"]
  },
  {
    id: "huilen-opvang-afscheid",
    vraag: "Mijn kind huilt bij de opvang of schoolpoort. Blijf ik beter langer?",
    thema: "baby",
    leeftijd: ["baby", "peuter", "kind"],
    uitgelicht: false,
    tags: ["opvang", "schoolpoort", "afscheid", "huilen", "verlatingsangst", "wennnen"],
    kort: "Maak afscheid warm, duidelijk en kort. Lang rekken maakt de overgang vaak zwaarder; stiekem verdwijnen schaadt vertrouwen. Een vast ritueel en betrouwbare terugkeer doen het meeste werk.",
    blokken: [
      { tekst: "Afscheidstranen zijn geen bewijs dat opvang fout is of dat jij moet blijven tot er geen tranen meer zijn. Overgangen zijn moeilijk omdat verbinding even loslaat. <strong>Je helpt door voorspelbaar te zijn, niet door het afscheid eindeloos te verdunnen.</strong>" },
      { kop: "Eerlijk weggaan", tekst: "Perry en Siegel & Bryson zouden het gevoel serieus nemen én betrouwbaar blijven. Zeg dat je gaat, geef een vaste kus of zin, draag over aan een vertrouwde volwassene en vertrek. Daarna heeft je kind iemand nodig die troost, niet een ouder die twijfelend in de deuropening blijft hangen." }
    ],
    doeDit: [
      "Gebruik elke dag hetzelfde korte afscheidsritueel.",
      "Vertel concreet wanneer je terugkomt: “na het fruit”, “na school”.",
      "Vraag de begeleider om na tien minuten kort te laten weten hoe het gaat als jij ongerust blijft."
    ],
    vermijd: [
      "Stiekem wegsluipen.",
      "Terugkeren bij elk huilgeluid waardoor afscheid opnieuw begint.",
      "Je kind beloven dat het niet verdrietig zal zijn."
    ],
    zegDit: [
      "“Ik ga nu. Na het vieruurtje kom ik terug.”",
      "“Je mag huilen. Juf helpt jou, en ik kom altijd terug.”"
    ],
    bronnen: [
      { boek: "power-of-showing-up", detail: "Veilige hechting vraagt voorspelbaarheid: kinderen mogen protesteren en moeten tegelijk weten dat de ouder terugkomt." },
      { boek: "philippa-perry", detail: "Gevoelens bij afscheid zijn echt en verdienen erkenning in plaats van wegpraten." },
      { boek: "hold-on-to-your-kids", detail: "Overgangen lukken beter wanneer het kind eerst verzameld wordt en warm wordt overgedragen." }
    ],
    gerelateerd: ["baby-eenkennig", "kind-angstig", "band-versterken"]
  },
  {
    id: "kind-overprikkeld-na-school",
    vraag: "Na school ontploft mijn kind thuis. Waarom daar pas?",
    thema: "emoties",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["naschool", "ontploffen", "overprikkeld", "meltdown", "thuis", "school"],
    kort: "Thuis is vaak de veilige plek waar de hele dag eruit komt. Zie het als ontlading, niet als ondankbaarheid. Eerst eten, rust en verbinding; pas later praten.",
    blokken: [
      { tekst: "Veel kinderen houden zich op school groot en vallen thuis uit elkaar. Dat is niet omdat jij minder gezag hebt, maar omdat thuis veilig genoeg is om te ontladen. <strong>Het lastigste gedrag komt vaak bij de veiligste persoon terecht.</strong>" },
      { kop: "Lijf eerst, les later", tekst: "Siegel & Bryson zouden zeggen: benedenbrein eerst. Na school helpt geen vragenvuur. Honger, lawaai, sociale spanning en moeheid zitten nog in het lijf. Markham adviseert verbinding vóór correctie: snack, stilte, buiten bewegen, knuffel of gewoon naast elkaar zijn." }
    ],
    doeDit: [
      "Maak een zachte landingsroutine: eten, drinken, stilte of beweging.",
      "Stel schoolvragen later, niet aan de poort.",
      "Benoem het patroon zonder schuld: “na school is je emmer vaak vol.”"
    ],
    vermijd: [
      "Meteen corrigeren alsof dit gewone ongehoorzaamheid is.",
      "Een kind ondervragen terwijl het net alles heeft ingehouden.",
      "Naschoolse agenda's volproppen als de batterij leeg is."
    ],
    zegDit: [
      "“Je bent thuis. Je hoeft even niks.”",
      "“Eerst eten en zakken. Praten kan straks.”"
    ],
    bronnen: [
      { boek: "whole-brain-child", detail: "Bij overbelasting neemt het benedenbrein over; verbinden en kalmeren gaan vóór redeneren." },
      { boek: "peaceful-parent", detail: "Verbinding en lichaamsrust voorkomen dat correctie bovenop overprikkeling komt." },
      { boek: "good-inside", detail: "Gedrag krijgt een gulle interpretatie: het kind is goed, de emmer is vol." }
    ],
    gerelateerd: ["driftbui-reageren", "overgevoelig-kind", "slaap-hoe-belangrijk"]
  },
  {
    id: "boosheid-kapotmaken",
    vraag: "Mijn kind maakt dingen kapot als het boos is. Wat nu?",
    thema: "emoties",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["kapotmaken", "boos", "woede", "agressie", "schade", "herstel", "grenzen"],
    kort: "Stop de schade direct en veilig, maar maak de les herstelgericht. Boosheid mag; spullen stukmaken niet. Achteraf zoek je samen een plan voor de volgende storm.",
    blokken: [
      { tekst: "Dingen kapotmaken vraagt een duidelijke grens. Tegelijk leert schaamte alleen zelden een alternatief. Je kind moet ervaren: <strong>mijn boosheid kan groot zijn, mijn ouder houdt de wereld veilig, en schade wordt hersteld.</strong>" },
      { kop: "Van explosie naar herstel", tekst: "Gottman koppelt het begeleiden van emoties aan grenzen: gevoel erkennen, gedrag begrenzen, probleem oplossen. Faber & Mazlish zouden het gevolg logisch maken: wat stuk is, wordt gerepareerd, vervangen of mee opgelost. Geen wraak, wel verantwoordelijkheid." }
    ],
    doeDit: [
      "Haal breekbare spullen weg of breng je kind naar een veiligere plek.",
      "Houd de grens kort: “ik laat je geen spullen stukmaken.”",
      "Maak later een herstelplan: repareren, sparen, excuus, alternatief voor boosheid."
    ],
    vermijd: [
      "Tijdens de storm discussiëren over respect voor spullen.",
      "Alle schade zelf stilletjes oplossen.",
      "Je kind reduceren tot ‘agressief’ of ‘ondankbaar’."
    ],
    zegDit: [
      "“Je bent woedend. Ik laat je de deur niet kapotmaken.”",
      "“Morgen maken we een plan om dit te herstellen.”"
    ],
    bronnen: [
      { boek: "gottman-eq", detail: "Alle emoties mogen, maar gedrag krijgt grenzen en daarna probleemoplossing." },
      { boek: "how-to-talk", detail: "Logische gevolgen en herstel werken beter dan willekeurige straffen." },
      { boek: "good-inside", detail: "Sturdy leadership bewaakt veiligheid zonder het kind als slecht te zien." }
    ],
    gerelateerd: ["slaan-bijten-schoppen", "goede-consequentie", "driftbui-reageren"]
  },
  {
    id: "huilen-bij-school",
    vraag: "Mijn kind huilt elke ochtend voor school. Moet ik pushen of thuis houden?",
    thema: "emoties",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["schoolangst", "huilen", "school", "weigeren", "angst", "buikpijn"],
    kort: "Neem het serieus én voorkom dat vermijden de angst groter maakt. Zoek wat er onder zit, werk met kleine stappen en schakel school of hulp in als het blijft aanslepen.",
    blokken: [
      { tekst: "Schooltranen kunnen gaan over angst, pesten, overprikkeling, scheiding, faalangst of slaaptekort. Dus: niet wegwuiven. Maar structureel thuisblijven kan het angstcircuit bevestigen. <strong>De kunst is erkennen zonder vermijden de baas te maken.</strong>" },
      { kop: "Kalme co-piloot", tekst: "Stixrud & Johnson noemen de niet-angstige ouder een grote stressbuffer. Jij straalt uit: dit is moeilijk én we vinden een pad. Siegel & Bryson helpen met name it to tame it: geef woorden aan de angst, maak een ladder en betrek school." }
    ],
    doeDit: [
      "Vraag rustig naar het moeilijkste moment: opstaan, poort, klas, pauze, toets.",
      "Maak een stappenplan met school: aankomen bij één persoon, rustige startplek, check-in.",
      "Let op alarmsignalen zoals pesten, aanhoudende buikpijn of paniek."
    ],
    vermijd: [
      "“Je stelt je aan” zeggen.",
      "Elke ochtend opnieuw beslissen of school doorgaat.",
      "Angst oplossen door alleen maar gerust te stellen zonder stappen."
    ],
    zegDit: [
      "“Ik geloof dat dit echt zwaar voelt.”",
      "“We gaan niet vechten met jou. We gaan samen zoeken waar het moeilijkste stuk zit.”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "Angst zakt door gevoel van controle, kleine stappen en een niet-angstige ouder." },
      { boek: "whole-brain-child", detail: "Angst benoemen en het verhaal ordenen helpt het alarmcircuit kalmeren." },
      { boek: "gottman-eq", detail: "Eerst erkennen, dan grenzen en oplossingen; gevoelens overslaan sluit het kind af." }
    ],
    gerelateerd: ["kind-angstig", "faalangst-perfectionisme", "huilen-opvang-afscheid"]
  },
  {
    id: "kind-snel-gefrustreerd",
    vraag: "Mijn kind raakt razendsnel gefrustreerd. Hoe help ik het beter omgaan met frustratie?",
    thema: "emoties",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["frustratie", "ongeduldig", "boos", "puzzel", "leren", "doorzetten"],
    kort: "Beter tegen frustratie kunnen groeit in kleine porties. Maak het niet te makkelijk en ook niet te groot: erken het rotgevoel, bied net genoeg steun en vier herstel.",
    blokken: [
      { tekst: "Frustratie is de sportschool van zelfbeheersing. Te veel is overweldigend, te weinig bouwt niets. Een kind dat snel ontploft, heeft geen preek nodig maar oefenkansen op de juiste grootte. <strong>Net moeilijk genoeg is de zone waar groei woont.</strong>" },
      { kop: "Steunen zonder overnemen", tekst: "Siegel & Bryson zien zelfbeheersing als een vaardigheid van het bovenbrein die nog in ontwikkeling is. Markham zou naast het kind gaan staan: “dit is lastig”, adem samen, maak één stap zichtbaar. NurtureShock herinnert eraan dat complimenten over de inzet beter werken dan complimenten over slim zijn." }
    ],
    doeDit: [
      "Splits taken in mini-stappen.",
      "Bied een pauze aan voordat je hulp of oplossing geeft.",
      "Prijs concreet herstel: opnieuw proberen, hulp vragen, kalmeren."
    ],
    vermijd: [
      "Alles meteen makkelijker maken zodra je kind moppert.",
      "Frustratie belachelijk maken.",
      "Overnemen en daarna zeggen dat het toch niet moeilijk was."
    ],
    zegDit: [
      "“Dit is het punt waarop je brein wil stoppen. We doen één kleine stap.”",
      "“Wil je een adem-pauze of een hint?”"
    ],
    bronnen: [
      { boek: "whole-brain-child", detail: "Beter tegen frustratie kunnen vraagt oefening van bovenbreinfuncties zoals remmen, plannen en nadenken." },
      { boek: "peaceful-parent", detail: "De ouder kalmeert mee en begeleidt zonder controle over te nemen." },
      { boek: "nurtureshock", detail: "Procesfeedback op poging en strategie ondersteunt doorzettingsvermogen." }
    ],
    gerelateerd: ["opgeven-snel", "niet-tegen-verlies", "goed-prijzen"]
  },
  {
    id: "puber-stemming-wisselt",
    vraag: "Mijn puber wisselt constant van stemming. Hoe blijf ik erbij?",
    thema: "emoties",
    leeftijd: ["tiener"],
    uitgelicht: false,
    tags: ["puber", "stemming", "humeurig", "boos", "verdriet", "hormonen", "tiener"],
    kort: "Puberstemming is deels brein, lijf en slaap. Neem gevoelens serieus zonder elke golf te volgen. Jij bent de stabiele kustlijn: beschikbaar, begrenzend en niet-panikerend.",
    blokken: [
      { tekst: "Tieners kunnen binnen tien minuten van afstandelijk naar wanhopig naar woedend gaan. Dat is niet allemaal drama of manipulatie. Het puberbrein verbouwt stevig, slaapdruk is groot en peer-oordeel weegt zwaar. <strong>Jij hoeft de golf niet te stoppen; je moet vooral niet zelf de tweede golf worden.</strong>" },
      { kop: "Niet-angstige aanwezigheid", tekst: "Stixrud & Johnson leggen veel nadruk op de kalme volwassene. Neufeld & Maté voegen toe dat tieners nog steeds hechting nodig hebben, ook als ze afstand tonen. Reageer op de toon met grenzen, op het gevoel met nieuwsgierigheid en op signalen van depressie of zelfbeschadiging met hulp." }
    ],
    doeDit: [
      "Vraag vaker: “wil je advies of luisteren?”",
      "Bewaar grenzen rond respect zonder het hele gevoel af te wijzen.",
      "Bescherm slaap en telefoonvrije nachten."
    ],
    vermijd: [
      "Elke bui persoonlijk nemen.",
      "Sarcasme gebruiken tegen kwetsbaarheid.",
      "Somberheid, zelfhaat of zelfbeschadiging afdoen als pubergedoe."
    ],
    zegDit: [
      "“Ik hoor je toon. Die grens blijft. En ik wil ook snappen wat eronder zit.”",
      "“Ik ben niet bang van jouw bui. Ik blijf beschikbaar.”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "Een niet-angstige ouder helpt tieners stress dragen zonder controle over te nemen." },
      { boek: "hold-on-to-your-kids", detail: "Tieners hebben zelfstandigheid én een blijvende band met volwassenen nodig als kompas." },
      { boek: "nurtureshock", detail: "Slaaptekort beïnvloedt stemming en prestaties bij tieners sterk." }
    ],
    gerelateerd: ["tiener-trekt-terug", "slaap-hoe-belangrijk", "sociale-media-onzeker"]
  },
  {
    id: "tandenpoetsen-weigert",
    vraag: "Tandenpoetsen is elke avond strijd. Wat helpt?",
    thema: "grenzen",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["tandenpoetsen", "weigeren", "avond", "strijd", "routine", "peuter"],
    kort: "Maak de grens vast en de uitvoering speels. Tanden worden gepoetst; over het hoe geef je keuze, humor en ritueel. Jonge kinderen hebben hulp nodig, geen debat.",
    blokken: [
      { tekst: "Tandenpoetsen is typisch zo'n dagelijkse microstrijd waarin ouders uitgeput raken. De grens is niet ingewikkeld: tanden moeten schoon. De valkuil zit in elke avond onderhandelen. <strong>Maak het ritueel de baas, niet je humeur.</strong>" },
      { kop: "Keuze binnen de grens", tekst: "Faber & Mazlish adviseren keuzes die voor jou allebei oké zijn: eerst boven of beneden, jij eerst of ik eerst, tijgergeluid of robotstem. Markham voegt spel toe: humor haalt het gezichtsverlies uit meewerken." }
    ],
    doeDit: [
      "Gebruik twee echte keuzes binnen dezelfde grens.",
      "Maak het speels: tanden zoeken, liedje, timer, pop die eerst poetst.",
      "Help fysiek rustig als het moet: kort, vriendelijk, beslist."
    ],
    vermijd: [
      "Elke avond opnieuw vragen alsof nee een optie is.",
      "Dreigen met tandartsangstverhalen.",
      "Eindeloze uitleg geven aan een oververmoeide peuter."
    ],
    zegDit: [
      "“Tanden poetsen gebeurt. Wil je staan of zitten?”",
      "“Ik hoor je nee. Ik help je lijf nu even.”"
    ],
    bronnen: [
      { boek: "how-to-talk", detail: "Keuzes binnen grenzen en speelse samenwerking werken beter dan bevelen of preken." },
      { boek: "peaceful-parent", detail: "Spel, verbinding en kalme beslistheid helpen dagelijkse routines zonder machtsstrijd." },
      { boek: "good-inside", detail: "Sturdy leadership houdt de grens zonder boosheid of schaamte." }
    ],
    gerelateerd: ["nee-zeggen-zonder-drama", "zeuren-onderhandelen", "peuter-bedtijd-strijd"]
  },
  {
    id: "opruimen-strijd",
    vraag: "Hoe laat ik mijn kind opruimen zonder elke keer ruzie?",
    thema: "grenzen",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["opruimen", "kamer", "speelgoed", "rommel", "meewerken", "routine"],
    kort: "Opruimen is een vaardigheid, geen karaktertest. Maak het kleiner, zichtbaarder en gezamenlijker. Beschrijf wat je ziet en geef een duidelijke eerste stap.",
    blokken: [
      { tekst: "“Ruim je kamer op” klinkt voor veel kinderen als “los de klimaatcrisis op”. Ze zien niet waar te beginnen. Faber & Mazlish zouden zeggen: beschrijf concreet en geef informatie. <strong>Een kind werkt beter met een eerste stap dan met een oordeel over rommel.</strong>" },
      { kop: "Van opdracht naar routine", tekst: "Markham adviseert routines die niet telkens van jouw irritatie afhangen. Samen vijf minuten starten, manden met labels, muziek aan, één categorie tegelijk. Bij jonge kinderen is samen opruimen geen verwennen; het is voordoen." }
    ],
    doeDit: [
      "Geef één categorie: “alle blokken in de bak”.",
      "Gebruik een timer van vijf minuten en ruim mee op als startmotor.",
      "Maak spullen een vaste zichtbare plek."
    ],
    vermijd: [
      "“Jij bent zo slordig” zeggen.",
      "Een enorme kamer in één vage opdracht gieten.",
      "Speelgoed boos in vuilniszakken dreigen te gooien."
    ],
    zegDit: [
      "“Ik zie Lego op de vloer. Eerst alle Lego in de bak.”",
      "“Ik start twee minuten met je, daarna doe jij de auto's.”"
    ],
    bronnen: [
      { boek: "how-to-talk", detail: "Beschrijven, één woord en informatie geven vervangen verwijt en preek." },
      { boek: "peaceful-parent", detail: "Routines en samenwerken verminderen dagelijkse machtsstrijd." },
      { boek: "whole-brain-child", detail: "Plannen en organiseren zijn bovenbreinvaardigheden die kinderen stap voor stap leren." }
    ],
    gerelateerd: ["luisteren-zonder-schreeuwen", "tandenpoetsen-weigert", "klusjes-in-gezin"]
  },
  {
    id: "eten-proeven-dwingen",
    vraag: "Moet ik mijn kind dwingen om te proeven?",
    thema: "eten",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["eten", "proeven", "groenten", "dwingen", "maaltijd", "kieskeurig"],
    kort: "Dwingen maakt eten beladen. Jij bepaalt wat en wanneer er eten is; je kind bepaalt hoeveel het eet. Nieuw eten vraagt herhaling, rust en voorbeeld, geen strijd aan tafel.",
    blokken: [
      { tekst: "Eten raakt snel aan controle: ouders willen gezondheid, kinderen willen zelf over hun lijf beslissen. Dwang wint soms één hap en verliest vaak de sfeer. <strong>Een kind leert beter eten aan een veilige tafel dan in een machtsspel.</strong>" },
      { kop: "Eigen keuze aan tafel", tekst: "Stixrud & Johnson benadrukken hoe belangrijk controle over het eigen leven is. Kohn zou waarschuwen voor belonen en straffen met dessert. Bied gevarieerd aan, eet zelf mee, laat wennen via kijken, ruiken, likken, proeven en weer uitspugen zonder theater." }
    ],
    doeDit: [
      "Zet steeds iets vertrouwds naast iets nieuws.",
      "Laat je kind zelf opscheppen of een mini-proef kiezen.",
      "Houd tafelgesprekken breder dan eten."
    ],
    vermijd: [
      "Dessert als beloning voor groenten gebruiken.",
      "Happen afdwingen of tellen.",
      "Je kind kieskeurig noemen als identiteit."
    ],
    zegDit: [
      "“Je hoeft het niet lekker te vinden. Je mag eraan wennen.”",
      "“Jij kiest wat je van je bord eet; ik zorg dat er eten is.”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "Zelf beslissen over je eigen lichaam en keuzes verlaagt strijd en verhoogt de motivatie van binnenuit." },
      { boek: "unconditional-parenting", detail: "Belonen en straffen rond eten maken gezond gedrag afhankelijk van een beloning en van buitenaf gestuurd." },
      { boek: "philippa-perry", detail: "Ouders onderzoeken eigen angst en controle rond eten zodat die niet op het kind terechtkomt." }
    ],
    gerelateerd: ["belonen-stickers", "zeuren-onderhandelen", "maaltijdstrijd"]
  },
  {
    id: "zakgeld-klusjes",
    vraag: "Moet zakgeld afhangen van klusjes?",
    thema: "grenzen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["zakgeld", "klusjes", "belonen", "geld", "helpen", "verantwoordelijkheid"],
    kort: "Liever niet voor gewone gezinsbijdragen. Zakgeld is oefengeld; klusjes zijn bijdragen aan het gezin. Extra betaalde taken kunnen, maar basiszorg hoort bij samenleven.",
    blokken: [
      { tekst: "Betalen voor elk klusje lijkt praktisch, maar het verandert bijdragen in transacties. Dan wordt de vraag: wat krijg ik ervoor? <strong>Een gezin draait beter op erbij horen dan op loonstrookjes voor normaal meedoen.</strong>" },
      { kop: "Motivatie van binnenuit", tekst: "Kohn beschrijft hoe beloningen de motivatie van binnenuit kunnen ondermijnen. Stixrud & Johnson maken onderscheid tussen zelfstandigheid en het gevoel iets te kunnen: geef kinderen echte verantwoordelijkheid, leer geld beheren via vast zakgeld, en houd extra betaalde taken uitzonderlijk en helder." }
    ],
    doeDit: [
      "Geef zakgeld als oefengeld op een vaste dag.",
      "Maak enkele basisbijdragen normaal: tafel, was, kamer, huisdier.",
      "Bied eventueel extra betaalde klussen buiten de gewone taken."
    ],
    vermijd: [
      "Normale hulp volledig afhankelijk maken van betaling.",
      "Zakgeld gebruiken als dagelijkse strafknop.",
      "Kinderen laten denken dat gezinswerk alleen telt als het iets oplevert."
    ],
    zegDit: [
      "“Zakgeld is om met geld te oefenen. Tafel dekken doen we omdat we hier samen wonen.”",
      "“Dit is een extra klus; daar kunnen we een prijs voor afspreken.”"
    ],
    bronnen: [
      { boek: "unconditional-parenting", detail: "Beloningen verschuiven aandacht van waarde en bijdrage naar opbrengst." },
      { boek: "self-driven-child", detail: "Het gevoel iets te kunnen en eigen verantwoordelijkheid voelen groeien door echte verantwoordelijkheid, niet door voortdurende controle van buitenaf." },
      { boek: "how-to-talk", detail: "Kinderen werken beter mee wanneer taken concreet, respectvol en probleemgericht worden benoemd." }
    ],
    gerelateerd: ["belonen-stickers", "klusjes-in-gezin", "opruimen-strijd"]
  },
  {
    id: "brutaal-tegenspreken",
    vraag: "Mijn kind spreekt brutaal tegen. Moet ik respect eisen?",
    thema: "grenzen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["brutaal", "tegenspreken", "respect", "toon", "puber", "grenzen"],
    kort: "Respect eis je niet duurzaam af met angst. Begrens de toon, maar luister naar de boodschap eronder. Een kind mag het oneens zijn; kwetsend spreken krijgt een grens.",
    blokken: [
      { tekst: "Tegenspraak voelt snel als gezagsverlies. Toch is een kind dat een eigen mening oefent niet automatisch respectloos. De echte grens is niet verschil van mening, maar vernederen, schelden of intimideren. <strong>Je kunt toon begrenzen zonder gehoorzaamheid als enige vorm van respect te eisen.</strong>" },
      { kop: "Relatie draagt gezag", tekst: "Neufeld & Maté stellen dat gezag uit hechting komt, niet uit angst. Kennedy zou sturdy blijven: “ik luister graag naar je punt, niet naar deze toon.” Zo leer je: jouw stem telt, en woorden hebben vorm nodig." }
    ],
    doeDit: [
      "Maak onderscheid tussen mening en toon.",
      "Neem een pauze als jij zelf scherp wordt.",
      "Kom terug op de inhoud zodra de toon veilig is."
    ],
    vermijd: [
      "Elke tegenspraak als ongehoorzaamheid behandelen.",
      "Terugsarcasme gebruiken.",
      "Respect verwarren met angst of stilte."
    ],
    zegDit: [
      "“Je mag het oneens zijn. Je mag me niet uitschelden.”",
      "“Ik wil dit horen, maar niet op deze toon. Probeer opnieuw.”"
    ],
    bronnen: [
      { boek: "hold-on-to-your-kids", detail: "Werkzaam gezag komt uit verbondenheid; angst en strijd verzwakken die basis." },
      { boek: "good-inside", detail: "Sturdy leadership begrenst kwetsend gedrag zonder de stem van het kind te breken." },
      { boek: "how-to-talk", detail: "Ik-boodschappen en respectvolle probleemtaal helpen kinderen hun punt zonder aanval te brengen." }
    ],
    gerelateerd: ["ik-haat-je", "tiener-trekt-terug", "kind-scheldt"]
  },
  {
    id: "kind-scheldt",
    vraag: "Mijn kind scheldt. Hoe reageer ik zonder olie op het vuur?",
    thema: "praten",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["schelden", "vloeken", "woorden", "respect", "boos", "taal"],
    kort: "Reageer op schelden als een signaal én een grens. Het gevoel mag er zijn; kwetsende woorden niet. Leer vervangtaal op een rustig moment.",
    blokken: [
      { tekst: "Schelden is vaak een snelle uitlaat voor een overvol lijf. Als jij vooral schrikt van het woord, mis je de boodschap eronder. Als je het laat passeren, mist je kind de grens. <strong>Warm begrenzen betekent beide tegelijk.</strong>" },
      { kop: "Woorden oefenen", tekst: "Gottman: help het gevoel benoemen. Faber & Mazlish: geef woorden die bruikbaar zijn. “Ik ben woedend”, “laat me even”, “dit is oneerlijk” zijn betere instrumenten dan schelden. Maar die instrumenten leer je niet midden in de explosie." }
    ],
    doeDit: [
      "Benoem de emotie en de taalgrens in twee korte zinnen.",
      "Leer sterke vervangzinnen als iedereen rustig is.",
      "Let op je eigen taal onder stress."
    ],
    vermijd: [
      "Een scheldwoord groter maken dan het onderliggende probleem.",
      "Terugschelden of beschamen.",
      "Verwachten dat een peuter volwassen taal heeft bij volwassen boosheid."
    ],
    zegDit: [
      "“Je bent kwaad. Dat woord gebruik je niet tegen mij.”",
      "“Zeg het opnieuw met woorden die ik kan horen.”"
    ],
    bronnen: [
      { boek: "gottman-eq", detail: "Emotie benoemen en begrenzen helpt kinderen gevoelens in taal omzetten." },
      { boek: "how-to-talk", detail: "Kinderen hebben concrete alternatieve zinnen nodig, niet alleen kritiek op hun huidige woorden." },
      { boek: "good-inside", detail: "Gedrag wordt begrensd vanuit de overtuiging dat het kind goed is en een vaardigheid mist." }
    ],
    gerelateerd: ["brutaal-tegenspreken", "ik-haat-je", "driftbui-reageren"]
  },
  {
    id: "moeilijke-onderwerpen-tiener",
    vraag: "Hoe praat ik met mijn tiener over moeilijke onderwerpen?",
    thema: "praten",
    leeftijd: ["tiener"],
    uitgelicht: false,
    tags: ["tiener", "seks", "drugs", "alcohol", "gesprek", "moeilijk", "vertrouwen"],
    kort: "Kies korte, herhaalde gesprekken in plaats van één grote preek. Wees kalm, concreet en nieuwsgierig. Je tiener moet voelen: hier kan ik met de waarheid terecht.",
    blokken: [
      { tekst: "Seks, alcohol, drugs, grenzen, online risico's: ouders wachten vaak op het perfecte moment en maken er dan een lezing van. Tieners haken af bij lezingen. <strong>De veiligste gesprekken zijn meestal kort, gewoon en herhaald.</strong>" },
      { kop: "Kanaal open houden", tekst: "Gottman en Faber & Mazlish wijzen allebei naar luisteren vóór oplossen. Stixrud & Johnson voegen toe: tieners hebben zelfstandigheid nodig. Geef dus informatie en waarden, stel nieuwsgierige vragen, en maak duidelijk dat eerlijkheid niet automatisch paniek of straf betekent." }
    ],
    doeDit: [
      "Gebruik alledaagse haakjes: serie, nieuws, verhaal van school.",
      "Vraag wat je tiener al denkt voordat jij uitlegt.",
      "Zeg expliciet dat veiligheid altijd vóór straf komt."
    ],
    vermijd: [
      "Eén groot ongemakkelijk ‘nu gaan we praten’-moment als enige gesprek.",
      "Schrikreacties bij halve onthullingen.",
      "Alleen waarschuwen zonder naar hun wereld te vragen."
    ],
    zegDit: [
      "“Ik ga niet flippen. Ik wil begrijpen hoe dit in jouw wereld werkt.”",
      "“Als je ooit in de problemen zit, bel je mij eerst. De rest lossen we later op.”"
    ],
    bronnen: [
      { boek: "gottman-eq", detail: "Luisteren en erkennen houden de lijn open voor lastige gevoelens en keuzes." },
      { boek: "self-driven-child", detail: "Tieners nemen betere beslissingen wanneer zelfstandigheid en een kalme adviseur samengaan." },
      { boek: "how-to-talk", detail: "Vragen, erkenning en korte informatie werken beter dan preken." }
    ],
    gerelateerd: ["kind-praat-niet", "tiener-trekt-terug", "kind-liegt"]
  },
  {
    id: "geheimen-privacy",
    vraag: "Hoeveel privacy geef ik mijn kind of tiener?",
    thema: "praten",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["privacy", "geheimen", "kamer", "dagboek", "telefoon", "vertrouwen", "controle"],
    kort: "Privacy groeit mee met vertrouwen en leeftijd. Controleer niet uit gewone nieuwsgierigheid, maar veiligheid blijft jouw taak. Maak heldere afspraken in plaats van stiekem speuren.",
    blokken: [
      { tekst: "Privacy is geen bedreiging voor de band; het is onderdeel van groeien. Tegelijk is totale digitale vrijheid voor jonge tieners niet hetzelfde als vertrouwen. <strong>Het verschil zit in transparantie: afspraken zijn veilig, stiekeme controle beschadigt.</strong>" },
      { kop: "Zelfstandigheid met grenzen", tekst: "Stixrud & Johnson benadrukken zelf sturen; Haidt waarschuwt dat online omgevingen te krachtig zijn om kinderen volledig alleen te laten. Dus: klop op kamerdeuren, lees geen dagboek, maar spreek wel schermregels, veiligheidschecks en noodsignalen af." }
    ],
    doeDit: [
      "Klop aan en respecteer lichamelijke privacy.",
      "Maak expliciete digitale afspraken: nachtlader, accounts, meldplicht bij onveilige contacten.",
      "Leg uit wanneer jij wél ingrijpt: veiligheid, zelfbeschadiging, dwang, gevaar."
    ],
    vermijd: [
      "Stiekem berichten lezen als standaard.",
      "Privacy verwarren met geheimhouding over gevaar.",
      "Een tiener behandelen alsof elk privéleven verdacht is."
    ],
    zegDit: [
      "“Ik respecteer je privacy. Veiligheid is wel mijn taak.”",
      "“Ik ga niet zomaar speuren. Als ik me zorgen maak, zeg ik dat eerst.”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "Zelfstandigheid en vertrouwen ondersteunen het zelf sturen, zeker bij ouder wordende kinderen." },
      { boek: "anxious-generation", detail: "Digitale vrijheid vraagt sterkere bescherming dan offline privacy door permanente peer- en algoritmedruk." },
      { boek: "hold-on-to-your-kids", detail: "Vertrouwen en verbinding houden ouders als kompas aanwezig zonder alles te controleren." }
    ],
    gerelateerd: ["smartphone-wanneer", "sociale-media-onzeker", "tiener-trekt-terug"]
  },
  {
    id: "kind-onderbreekt",
    vraag: "Mijn kind onderbreekt me constant. Hoe leer ik wachten?",
    thema: "praten",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["onderbreken", "wachten", "aandacht", "gesprek", "impuls", "geduld"],
    kort: "Wachten is een vaardigheid in aanbouw. Geef een zichtbaar signaal, erken kort dat je kind iets wil en kom betrouwbaar terug. Zo hoeft aandacht niet via harder roepen.",
    blokken: [
      { tekst: "Onderbreken is vaak geen gebrek aan respect, maar een impuls plus de angst dat aandacht verdwijnt. Jonge kinderen kunnen wachten pas leren als wachten voorspelbaar en kort genoeg begint. <strong>Je leert wachten door terug te komen wanneer je dat belooft.</strong>" },
      { kop: "Signaal en terugkeer", tekst: "Siegel & Bryson zouden dit zien als bovenbrein-oefening. Faber & Mazlish helpen praktisch: geef informatie, één woord, een handgebaar. Leg je hand op die van je kind, zeg “ik hoor je”, rond je zin af en kom dan echt terug." }
    ],
    doeDit: [
      "Leer een wacht-signaal: hand op arm, vinger opsteken, kaartje op tafel.",
      "Begin met korte wachttijd en bouw op.",
      "Kom bewust terug: “nu ben jij.”"
    ],
    vermijd: [
      "Een kind lang laten wachten en daarna vergeten.",
      "Elke onderbreking boos interpreteren.",
      "Toegeven aan harder roepen."
    ],
    zegDit: [
      "“Ik hoor dat je iets wil. Mijn zin af, dan jij.”",
      "“Dank je dat je wachtte. Nu luister ik.”"
    ],
    bronnen: [
      { boek: "whole-brain-child", detail: "Impulsremming en wachten zijn bovenbreinvaardigheden die kinderen oefenen met steun." },
      { boek: "how-to-talk", detail: "Korte informatie en duidelijke signalen geven kinderen iets concreets om te doen." },
      { boek: "power-of-showing-up", detail: "Gezien worden en betrouwbare terugkeer maken wachten veiliger." }
    ],
    gerelateerd: ["luisteren-zonder-schreeuwen", "band-versterken", "zeuren-onderhandelen"]
  },
  {
    id: "kritiek-geven-kind",
    vraag: "Hoe geef ik kritiek zonder mijn kind te breken?",
    thema: "praten",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["kritiek", "feedback", "corrigeren", "zelfbeeld", "praten", "gedrag"],
    kort: "Richt feedback op gedrag, effect en volgende stap. Laat identiteit erbuiten. Een kind leert beter van “de tas staat in de gang” dan van “jij bent zo slordig”.",
    blokken: [
      { tekst: "Kinderen horen kritiek snel als wie ze zijn, niet alleen wat ze deden. Daarom is taal zo belangrijk. <strong>Goede feedback houdt het kind heel en maakt het probleem zichtbaar.</strong>" },
      { kop: "Beschrijven in plaats van beoordelen", tekst: "Faber & Mazlish maken dit bijna technisch: beschrijf wat je ziet, geef informatie, zeg wat je voelt, vraag om herstel. NurtureShock sluit aan: eigenschappen vastzetten maakt kinderen voorzichtiger. Gedragstaal houdt groei mogelijk." }
    ],
    doeDit: [
      "Noem concreet gedrag en effect.",
      "Vraag om één herstelstap.",
      "Benoem wat wél lukte als dat waar is."
    ],
    vermijd: [
      "Altijd/nooit-taal.",
      "Karakterlabels zoals lui, egoïstisch of slordig.",
      "Feedback geven terwijl je vooral wil ontladen."
    ],
    zegDit: [
      "“Je tas ligt in de gang; daar struikelen we over. Zet hem aan de haak.”",
      "“Dit antwoord was scherp. Probeer het opnieuw met respect.”"
    ],
    bronnen: [
      { boek: "how-to-talk", detail: "Beschrijven en informatie geven voorkomt dat correctie een aanval op identiteit wordt." },
      { boek: "nurtureshock", detail: "Vaste eigenschapslabels beïnvloeden motivatie en risico nemen negatief." },
      { boek: "good-inside", detail: "Een kind blijft goed vanbinnen; feedback richt zich op vaardigheden en gedrag." }
    ],
    gerelateerd: ["goed-prijzen", "brutaal-tegenspreken", "opruimen-strijd"]
  }
];
