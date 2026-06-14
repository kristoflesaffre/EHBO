// ============================================================
// EHBO — Vragen, deel 7: extra cases over baby & emoties
// ============================================================

function extraVraag(id, vraag, thema, leeftijd, tags, kort, tekst, kop, verdieping, doeDit, vermijd, zegDit, bronnen, gerelateerd = []) {
  return {
    id,
    vraag,
    thema,
    leeftijd,
    uitgelicht: false,
    tags,
    kort,
    blokken: [
      { tekst },
      { kop, tekst: verdieping }
    ],
    doeDit,
    vermijd,
    zegDit,
    bronnen: bronnen.map(([boek, detail]) => ({ boek, detail })),
    gerelateerd
  };
}

const VRAGEN_7 = [
  extraVraag(
    "baby-clusterhuilen",
    "Waarom huilt mijn baby elke avond rond hetzelfde uur?",
    "slaap",
    ["baby"],
    ["clusterhuilen", "avond", "huiluur", "overprikkeling", "troosten"],
    "Avondhuilen is vaak geen teken dat je iets fout doet, maar een overvol zenuwstelsel dat ontlaadt. Maak de wereld kleiner: licht laag, prikkels omlaag, nabijheid omhoog.",
    "Veel baby's hebben aan het eind van de dag een huilpiek. Dat is geen karaktertrek en meestal ook geen opvoedprobleem. Het jonge brein verzamelt prikkels zonder ze al goed te kunnen ordenen. Tegen de avond loopt de emmer over.",
    "Denk in regulatie, niet in oplossen",
    "Als eten, luier, koorts en pijn zijn uitgesloten, is het doel niet: de baby meteen stil krijgen. Het doel is: samen door de golf. Je stem, geur, wiegen en voorspelbaarheid helpen het stresssysteem zakken.",
    [
      "Dim licht en geluid al vóór het bekende huiluur.",
      "Kies één troostvorm en geef die minuten de tijd.",
      "Laat bezoek en druk spel in de avond liever los."
    ],
    [
      "Elk kwartier een nieuwe truc proberen.",
      "Denken dat huilen in jouw armen hetzelfde is als alleen huilen.",
      "Jezelf als oorzaak zien van elke avondgolf."
    ],
    ["“Je hebt een volle dag gehad. Ik help je zakken.”"],
    [
      ["science-of-parenting", "Jonge baby's hebben co-regulatie nodig om stress te laten zakken; prikkelreductie helpt het alarmsysteem."],
      ["power-of-showing-up", "Soothed: herhaald samen kalmeren bouwt later zelfkalmering op."]
    ],
    ["baby-laten-huilen", "baby-overprikkeld"]
  ),
  extraVraag(
    "baby-wakker-bij-neerleggen",
    "Mijn baby wordt wakker zodra ik hem neerleg. Wat nu?",
    "slaap",
    ["baby"],
    ["neerleggen", "slapen", "wiegend", "contact", "nacht"],
    "Dat is normaal: jouw armen zijn warmte, geur, beweging en veiligheid tegelijk. Bouw het neerleggen geleidelijk af in plaats van er een strijd van te maken.",
    "Een baby die wakker schrikt bij neerleggen is niet koppig. Hij merkt een groot verschil tussen gedragen worden en alleen liggen. Voor een jong zenuwstelsel is dat verschil soms te groot om meteen te overbruggen.",
    "Maak de overgang kleiner",
    "Help je baby stap voor stap: eerst rustiger wiegen, dan stil tegen je aan, dan hand op de buik in bed. De boodschap blijft: ik verdwijn niet abrupt. Dat is geen slechte gewoonte, maar voorspelbaarheid.",
    [
      "Leg neer wanneer je baby slaperig maar niet in paniek is.",
      "Houd na het neerleggen nog even een hand op borst of buik.",
      "Gebruik een vaste slaapzin of zacht geluid als overgang."
    ],
    [
      "Een slapende baby plots loslaten en hopen dat hij het niet merkt.",
      "Boos worden omdat nabijheid werkt.",
      "Elke mislukte poging zien als terugval."
    ],
    ["“Ik leg je neer en blijf nog even bij je.”"],
    [
      ["science-of-parenting", "Aanraking, ritme en nabijheid zijn regulerende signalen voor het jonge brein."],
      ["peaceful-parent", "Zachte, herhaalde routines werken beter dan controle en strijd rond slaap."]
    ],
    ["slaaptraining-zacht", "baby-laten-huilen"]
  ),
  extraVraag(
    "baby-alleen-op-mij-slapen",
    "Mijn baby slaapt alleen op mij. Maak ik een probleem?",
    "slaap",
    ["baby"],
    ["contactdutje", "slapen", "dragen", "hechting", "dutje"],
    "Niet per se. Contactslapen kan een fase zijn waarin je baby regulatie leent. Kijk vooral of het voor jou nog draagbaar is en bouw anders heel geleidelijk alternatieven in.",
    "Baby's slapen vaak beter op een ouder omdat daar alles zit wat kalmeert: geur, hartslag, warmte, ademritme. Dat betekent niet dat je baby nooit anders zal leren slapen. Het betekent dat zijn systeem nu nog veel hulp gebruikt.",
    "Zorg ook voor jouw draagkracht",
    "De vraag is niet of contactdutjes fout zijn, maar of jij nog kunt eten, rusten en functioneren. Een veilige baby heeft ook een ouder nodig die niet structureel opbrandt. Afbouwen mag dus uit zorg voor jullie beiden.",
    [
      "Geniet van contactdutjes als ze voor jou werken.",
      "Oefen één dutje per dag in bed of wieg, zonder druk.",
      "Vraag hulp zodat jij ook pauzes krijgt."
    ],
    [
      "Een werkend contactdutje als mislukking zien.",
      "Van de ene dag op de andere alle nabijheid schrappen.",
      "Je eigen uitputting wegduwen omdat nabijheid goed is."
    ],
    ["“Je mag dichtbij zijn. We oefenen rustig ook andere plekjes.”"],
    [
      ["power-of-showing-up", "Veilige hechting groeit uit voorspelbare beschikbaarheid, niet uit vroeg forceren van afstand."],
      ["science-of-parenting", "Het jonge stresssysteem wordt mede gereguleerd door fysiek contact."]
    ],
    ["baby-wakker-bij-neerleggen", "baby-verwennen"]
  ),
  extraVraag(
    "baby-dag-nacht-omgedraaid",
    "Mijn baby lijkt dag en nacht om te draaien. Wat helpt?",
    "slaap",
    ["baby"],
    ["dag nacht", "ritme", "slaap", "pasgeboren", "nacht"],
    "Pasgeborenen hebben nog geen volwassen klok. Help het ritme vriendelijk: overdag licht en gewone geluiden, 's nachts saai, donker en voorspelbaar.",
    "Een baby komt niet met een kant-en-klare biologische klok. Die klok groeit door herhaling: licht overdag, donker 's nachts, voedingen, nabijheid en rustige routines. Je hoeft dat niet hardhandig te trainen.",
    "Leer het verschil zonder strijd",
    "Maak nachten bewust saai: weinig praten, zacht licht, geen spel. Maak dagen juist levendiger: gordijnen open, wandelen, contact. Zo krijgt het brein informatie zonder dat jij slaap moet afdwingen.",
    [
      "Open overdag gordijnen en ga indien mogelijk naar buiten.",
      "Houd nachtvoedingen donker, stil en voorspelbaar.",
      "Geef ritme weken, geen dagen."
    ],
    [
      "Een pasgeborene behandelen alsof hij al een schoolkindritme kan volgen.",
      "Nachtelijke wakkere momenten gezellig maken met veel spel.",
      "Paniek bij een paar rommelige nachten."
    ],
    null,
    [
      ["science-of-parenting", "Slaapritme rijpt neurologisch; omgeving en voorspelbaarheid ondersteunen die rijping."],
      ["nurtureshock", "Slaap heeft grote invloed op stemming, leren en regulatie; routines beschermen die basis."]
    ],
    ["slaap-hoe-belangrijk", "baby-laten-huilen"]
  ),
  extraVraag(
    "baby-start-creche",
    "Mijn baby start in de opvang. Hoe maak ik die overgang zachter?",
    "baby",
    ["baby"],
    ["opvang", "creche", "separatie", "wennen", "hechting"],
    "Maak afscheid voorspelbaar en bouw vertrouwdheid op. Korte, warme afscheidsrituelen werken beter dan stiekem verdwijnen.",
    "Opvang starten is een grote overgang: nieuwe geuren, stemmen, handen, ritmes. Een baby begrijpt de uitleg niet, maar voelt wel voorspelbaarheid. Daarom zijn wennen, vaste rituelen en herstelmomenten thuis zo belangrijk.",
    "Afscheid is informatie",
    "Stiekem wegglippen lijkt makkelijker, maar het leert: mijn ouder kan zomaar verdwijnen. Een kort ritueel zegt: dit is moeilijk én betrouwbaar. Je gaat weg, maar je komt terug.",
    [
      "Gebruik elke dag dezelfde afscheidszin.",
      "Geef een vertrouwd doekje of slaapritueel mee als dat mag.",
      "Plan na de opvang extra rustige nabijheid."
    ],
    [
      "Weglopen zonder afscheid.",
      "Het afscheid rekken tot iedereen ontregeld is.",
      "Een moeilijke wenperiode meteen als slechte opvang zien."
    ],
    ["“Ik geef je aan Sara. Na je dutje en fruit kom ik terug.”"],
    [
      ["power-of-showing-up", "Safe en secure ontstaan door voorspelbare overdrachten en betrouwbaar terugkomen."],
      ["philippa-perry", "Overgangen worden zachter wanneer gevoelens erkend worden in plaats van weggewuifd."]
    ],
    ["verlatingsangst-opvang", "band-versterken"]
  ),
  extraVraag(
    "baby-huilt-in-auto",
    "Mijn baby huilt in de auto. Moet ik blijven rijden?",
    "baby",
    ["baby"],
    ["auto", "huilen", "autostoel", "reizen", "stress"],
    "Als rijden veilig moet, rijd dan. Maar plan pauzes, beperk ritten en check comfort. Autohuilen is vaak protest tegen vastzitten, prikkels of misselijkheid, geen verwend gedrag.",
    "Een autostoel combineert veel lastige dingen: vastgezet zijn, weinig lichaamscontact, beweging, geluid en soms misselijkheid. Een baby kan dat alleen melden met huilen. Jij hoeft niet magisch alles op te lossen, maar wel veiligheid en comfort bewaken.",
    "Veiligheid eerst, nabijheid zodra het kan",
    "Tijdens het rijden kun je niet altijd troosten zoals je wil. Praat rustig, stop als het kan, en geef bij aankomst extra regulatie. Als lange ritten telkens escaleren, maak ze korter of plan stops.",
    [
      "Controleer riempjes, temperatuur, honger en luier vóór vertrek.",
      "Plan bij langere ritten realistische pauzes.",
      "Gebruik je stem als je niet kunt oppakken."
    ],
    [
      "Jezelf verwijten dat je baby in de auto huilt.",
      "Onveilig rijden omdat je panikeert van huilen.",
      "Elke rit maximaal volplannen."
    ],
    ["“Ik hoor je. Ik kan je nu niet oppakken, maar ik ben hier.”"],
    [
      ["science-of-parenting", "Een baby heeft hulp nodig om stress te reguleren; de stem van de ouder kan al kalmerend werken."],
      ["power-of-showing-up", "Aanwezig blijven en later herstellen ondersteunt veiligheid, ook wanneer onmiddellijke troost beperkt is."]
    ],
    ["baby-clusterhuilen", "baby-overprikkeld-bezoek"]
  ),
  extraVraag(
    "baby-voeden-stress",
    "Voeden geeft stress: fles, borst, kolven, commentaar. Hoe blijf ik rustig?",
    "baby",
    ["baby"],
    ["voeding", "borstvoeding", "fles", "kolven", "schuld"],
    "Een gevoede baby en een niet-breekbare ouder zijn belangrijker dan een ideaalplaatje. Zoek steun, laat commentaar zakken en kies wat voor jullie werkt.",
    "Voeding raakt snel aan schuld, identiteit en advies van iedereen. Maar een baby heeft vooral betrouwbare zorg nodig. Als voeding een dagelijks slagveld wordt, is dat een signaal om hulp en mildheid te organiseren, niet om jezelf harder aan te pakken.",
    "Relatie boven ideaal",
    "Borstvoeding, fles of combinatie: de emotionele context telt ook. Rustig voeden, oogcontact, pauzes en een ouder die niet instort zijn geen details. Ze zijn deel van de zorg.",
    [
      "Vraag praktische hulp aan vroedvrouw, arts of lactatiekundige als voeden pijn of paniek geeft.",
      "Kies een voedingsplan dat ook jouw slaap en herstel meeneemt.",
      "Bescherm jezelf tegen ongevraagd commentaar."
    ],
    [
      "Voeding als morele test van ouderschap zien.",
      "Pijn, wanhoop of depressieve gevoelens wegduwen.",
      "Je baby vergelijken met schema's van anderen."
    ],
    ["“We kiezen wat ons allebei helpt, niet wat iedereen vindt.”"],
    [
      ["philippa-perry", "Ouderschap vraagt ook aandacht voor de binnenwereld van de ouder, inclusief schuld en oude verwachtingen."],
      ["power-of-showing-up", "Veilige zorg gaat over aanwezig, afgestemd en betrouwbaar zijn, niet over perfect uitvoeren."]
    ],
    ["baby-verwennen", "ouderlijke-schuld"]
  ),
  extraVraag(
    "baby-overprikkeld-bezoek",
    "Mijn baby raakt overprikkeld door bezoek. Mag ik mensen afremmen?",
    "baby",
    ["baby"],
    ["bezoek", "overprikkeling", "familie", "kraambezoek", "grenzen"],
    "Ja. Jij bent de poortwachter van het prikkelniveau van je baby. Kort bezoek, weinig handen en rust na drukte zijn gezonde grenzen.",
    "Volwassenen zien bezoek vaak als gezellig. Voor een baby kan het een lawine zijn: stemmen, parfum, licht, handen, gezichten. Overprikkeling komt er later uit als huilen, slecht drinken of moeilijk slapen.",
    "Beschermen is geen onbeleefdheid",
    "Je hoeft de gevoelens van volwassen bezoekers niet boven het zenuwstelsel van je baby te plaatsen. Warm begrenzen kan heel eenvoudig: nu rust, later opnieuw.",
    [
      "Maak bezoek korter dan mensen verwachten.",
      "Laat niet iedereen de baby vasthouden als dat te veel is.",
      "Plan na bezoek een rustige overgang."
    ],
    [
      "Je baby van arm naar arm laten gaan om niemand teleur te stellen.",
      "Overprikkeling verwarren met zeurderigheid.",
      "Je grens pas zetten als je zelf boos bent."
    ],
    ["“We houden het vandaag kort. Hij is snel vol van prikkels.”"],
    [
      ["science-of-parenting", "Prikkelbelasting en stressregulatie zijn bij baby's nog sterk afhankelijk van de omgeving."],
      ["good-inside", "Stevig leiderschap betekent warm blijven terwijl je een echte grens houdt."]
    ],
    ["baby-clusterhuilen", "grootouders-regels"]
  ),
  extraVraag(
    "baby-verlatingsangst",
    "Mijn baby huilt zodra ik wegloop. Moet ik dit trainen?",
    "baby",
    ["baby"],
    ["verlatingsangst", "separatie", "weggaan", "hechting", "kiekeboe"],
    "Verlatingsangst is een ontwikkelingsfase, geen manipulatie. Oefen afscheid klein en voorspelbaar, en kom betrouwbaar terug.",
    "Wanneer objectpermanentie groeit, ontdekt een baby: jij kunt weg zijn. Dat is cognitieve vooruitgang, maar emotioneel spannend. Huilen bij weggaan zegt dus niet dat je baby achteruitgaat; het zegt dat hij meer begrijpt.",
    "Klein oefenen werkt beter dan hard maken",
    "Speel kiekeboe, loop kort naar de keuken en praat, gebruik dezelfde afscheidszin. Zo leert je baby dat weggaan en terugkomen bij elkaar horen. Verdwijning zonder signaal maakt het juist onvoorspelbaarder.",
    [
      "Neem afscheid kort en herkenbaar.",
      "Oefen mini-afstanden wanneer je baby uitgerust is.",
      "Kom terug als je dat hebt gezegd."
    ],
    [
      "Stiekem verdwijnen om huilen te vermijden.",
      "Een baby uitlachen om aanhankelijkheid.",
      "Afscheid oefenen wanneer je baby al oververmoeid is."
    ],
    ["“Ik ga naar de keuken. Ik kom zo terug.”"],
    [
      ["power-of-showing-up", "Secure groeit wanneer kinderen ervaren dat ouders betrouwbaar terugkomen."],
      ["philippa-perry", "Gevoelens serieus nemen helpt een kind zichzelf leren vertrouwen."]
    ],
    ["baby-start-creche", "kind-wil-alleen-mama"]
  ),
  extraVraag(
    "baby-speen-afbouwen",
    "Wanneer en hoe bouw ik een speen af zonder strijd?",
    "baby",
    ["baby", "peuter"],
    ["speen", "fopspeen", "afbouwen", "slapen", "troost"],
    "Zie de speen als regulatiehulpmiddel, niet als vijand. Bouw af wanneer er genoeg andere troost is, en begin met momenten waar de speen het minst nodig is.",
    "Een speen helpt veel kinderen zakken. Afbouwen wordt moeilijk wanneer je alleen iets wegneemt zonder iets terug te geven. De vraag is dus: welke andere vormen van troost, ritme en nabijheid staan klaar?",
    "Vervang, verklein, voorspel",
    "Begin bijvoorbeeld met speen alleen in bed, daarna alleen bij inslapen. Gebruik een knuffel, vaste zin of hand op de rug als nieuwe brug. Peuters hebben vaak een verhaal nodig: de speen blijft in bed, niet in de winkel.",
    [
      "Kies een rustige periode zonder grote overgang.",
      "Maak de nieuwe regel eenvoudig en zichtbaar.",
      "Bied extra nabijheid tijdens het afbouwen."
    ],
    [
      "De speen plots afpakken op een stressdag.",
      "Een kind beschamen omdat het nog troost zoekt.",
      "Afbouwen en slaaptraining tegelijk stapelen."
    ],
    ["“De speen blijft in bed. Ik help je met knuffel en mijn hand.”"],
    [
      ["peaceful-parent", "Nieuwe gewoontes lukken beter met verbinding, voorspelbaarheid en zachte grenzen."],
      ["science-of-parenting", "Troosthulpmiddelen werken omdat jonge kinderen nog leunen op externe regulatie."]
    ],
    ["bedtijd-ontspoort", "baby-wakker-bij-neerleggen"]
  ),
  extraVraag(
    "baby-slaapregressie",
    "Is dit een slaapregressie of doe ik iets verkeerd?",
    "slaap",
    ["baby", "peuter"],
    ["slaapregressie", "wakker", "ontwikkeling", "nacht", "sprong"],
    "Slaap kan slechter worden rond ontwikkeling, ziekte, tanden of separatie. Dat is geen bewijs dat jij slaap hebt verpest; het is vaak een tijdelijk brein-in-aanbouw moment.",
    "Kinderslaap loopt niet lineair. Nieuwe motoriek, meer bewustzijn, angst voor afstand of ziekte kunnen nachten ineens rommelig maken. Ouders denken dan snel: alles is mislukt. Maar regressie betekent vaak ontwikkeling plus overbelasting.",
    "Blijf saai betrouwbaar",
    "Verander niet elke nacht het hele plan. Houd je ritueel herkenbaar, geef meer steun waar nodig, en bouw die steun later weer af. Het doel is door de fase heen zonder een oorlog rond slaap te bouwen.",
    [
      "Check ziekte, tanden, honger en dagprikkels.",
      "Houd het bedritueel voorspelbaar.",
      "Geef tijdelijk extra nabijheid als je kind angstiger is."
    ],
    [
      "Elke slechte nacht als nieuw beleid behandelen.",
      "Steun weigeren uit angst voor verwennen.",
      "Jezelf vergelijken met slaapverhalen van anderen."
    ],
    null,
    [
      ["science-of-parenting", "Ontwikkeling en stressregulatie beïnvloeden slaap; co-regulatie blijft belangrijk."],
      ["peaceful-parent", "Routines en ouderlijke kalmte helpen kinderen door tijdelijke ontregeling."]
    ],
    ["slaap-hoe-belangrijk", "bedtijd-ontspoort"]
  ),
  extraVraag(
    "baby-vroeg-wakker",
    "Mijn kind is elke dag om vijf uur wakker. Wat kan ik doen?",
    "slaap",
    ["baby", "peuter"],
    ["vroeg wakker", "ochtend", "slaap", "bedtijd", "ritme"],
    "Vroeg wakker worden kan komen door licht, oververmoeidheid, honger of ritme. Kijk eerst naar omstandigheden en hou de ochtend saai tot het echte startmoment.",
    "Vroege ochtenden voelen als karaktermoord op ouders. Maar vaak zit er een patroon achter: te laat naar bed, te weinig dagslaap, ochtendlicht, gewoontevoeding of een kind dat bij het eerste geluid meteen veel interactie krijgt.",
    "Bescherm het verschil tussen nacht en dag",
    "Maak vijf uur nog geen feest. Houd licht laag, stem zacht, geen scherm. Verschuif ritme langzaam en kijk of vroeger slapen juist beter werkt dan later slapen.",
    [
      "Maak de kamer donkerder en check ochtendgeluid.",
      "Houd vroege momenten rustig en voorspelbaar.",
      "Experimenteer een week met iets vroegere bedtijd."
    ],
    [
      "Een oververmoeid kind later naar bed doen als eerste oplossing.",
      "Om vijf uur meteen schermen of druk spel inzetten.",
      "Elke dag een andere aanpak proberen."
    ],
    ["“Het is nog rusttijd. Ik ben hier, we starten straks.”"],
    [
      ["nurtureshock", "Slaaptekort beïnvloedt stemming en zelfregulatie; kleine ritmeverschillen kunnen groot uitpakken."],
      ["science-of-parenting", "Slaap rijpt binnen voorspelbare omgevingssignalen en voldoende regulatie."]
    ],
    ["slaap-hoe-belangrijk", "baby-dag-nacht-omgedraaid"]
  ),
  extraVraag(
    "baby-ziek-aanhankelijk",
    "Mijn baby is ziek en wil alleen bij mij. Moet ik grenzen houden?",
    "baby",
    ["baby", "peuter"],
    ["ziek", "koorts", "aanhankelijk", "troosten", "nacht"],
    "Bij ziekte mag nabijheid omhoog en moeten gewone verwachtingen omlaag. Je bouwt geen slechte gewoonte door een ziek kind extra te dragen.",
    "Ziekte zet het alarmsysteem hoger. Een kind dat zich beroerd voelt, zoekt de veiligste plek: jou. Dat is geen terugval in opvoeding, maar een gezonde hechtingsreactie.",
    "Eerst herstellen, later ritme",
    "Tijdens ziekte is het doel comfort, drinken, veiligheid en medische alertheid. Als je kind beter is, kun je routines rustig terugzetten. Je hoeft niet midden in koorts zelfstandigheid te trainen.",
    [
      "Geef extra nabijheid en verlaag verwachtingen.",
      "Volg medische signalen: drinken, koorts, sufheid, ademhaling.",
      "Bouw slaapritmes pas na herstel weer op."
    ],
    [
      "Een ziek kind laten oefenen met alleen zijn.",
      "Je schuldig voelen over tijdelijke uitzonderingen.",
      "Medische twijfel wegwuiven omdat je niet lastig wil zijn."
    ],
    ["“Je lijf is ziek. Ik blijf dichtbij.”"],
    [
      ["power-of-showing-up", "Safe en soothed zijn extra belangrijk wanneer een kind pijn of ziekte ervaart."],
      ["science-of-parenting", "Stressregulatie vraagt bij jonge kinderen meer externe steun tijdens lichamelijke ontregeling."]
    ],
    ["baby-laten-huilen", "baby-slaapregressie"]
  ),
  extraVraag(
    "baby-niet-in-box",
    "Mijn baby wil niet in de box of alleen spelen. Verwacht ik te veel?",
    "baby",
    ["baby"],
    ["alleen spelen", "box", "zelfstandig", "nabijheid", "spelen"],
    "Waarschijnlijk wel als het lang moet. Alleen spelen groeit vanuit veiligheid en rijping; begin met korte momenten terwijl jij dichtbij en beschikbaar bent.",
    "Zelfstandig spelen klinkt simpel, maar voor een baby is het een vaardigheid: aandacht vasthouden, zich veilig voelen zonder direct lichaamscontact, frustratie verdragen. Dat groeit in kleine herhalingen.",
    "Nabijheid is de startlijn",
    "Zet je baby eerst neer terwijl jij ernaast zit, benoem wat hij ziet, en verleng langzaam. Een baby die eerst bijtankt, kan vaak beter verkennen. Dat is precies de veilige basis in actie.",
    [
      "Start met twee minuten en bouw langzaam op.",
      "Blijf zichtbaar of hoorbaar in de buurt.",
      "Gebruik eenvoudige materialen in plaats van veel prikkels."
    ],
    [
      "Lang alleen spelen verwachten van een jonge baby.",
      "Huilen in de box zien als verwend protest.",
      "Alle speelgoed tegelijk aanbieden."
    ],
    ["“Ik zit hier. Jij kijkt naar je blokje.”"],
    [
      ["power-of-showing-up", "Een veilige basis maakt verkennen mogelijk; nabijheid en zelfstandigheid zijn geen tegenpolen."],
      ["science-of-parenting", "Aandacht en regulatie rijpen geleidelijk in het jonge brein."]
    ],
    ["baby-verwennen", "zelfstandig-spelen"]
  ),
  extraVraag(
    "baby-tweede-kind-jaloers",
    "Mijn baby krijgt alle aandacht en mijn oudste wordt lastig. Wat nu?",
    "gezin",
    ["peuter", "kind"],
    ["baby", "tweede kind", "jaloers", "oudste", "aandacht"],
    "Lastig gedrag na een baby is vaak rouw om verloren exclusiviteit. Geef je oudste geen preek over lief zijn, maar bewijs dagelijks: jij bent mij niet kwijt.",
    "Een nieuwe baby verandert de plaats van je oudste in het gezin. Dat kan voelen als verlies, ook als er liefde is. Het gedrag kan kinderachtig, boos of plakkerig worden omdat je kind zoekt: heb ik nog plek?",
    "Maak liefde concreet",
    "Zeggen dat je evenveel houdt is mooi, maar een kind voelt het vooral in momenten: tien minuten alleen, hulp vragen bij de baby zonder verantwoordelijkheid te zwaar te maken, en begrip voor jaloerse gevoelens.",
    [
      "Plan dagelijks korte exclusieve tijd met je oudste.",
      "Benoem jaloerse gevoelens zonder schuld.",
      "Laat je oudste soms kiezen wat jullie samen doen."
    ],
    [
      "Verwachten dat je oudste altijd groot en begripvol is.",
      "Jaloezie beschamen.",
      "Alle aandacht alleen rond helpen met de baby organiseren."
    ],
    ["“Soms is het stom dat de baby zoveel nodig heeft. Jij blijft mijn kind.”"],
    [
      ["good-inside", "Gedrag wordt gezien als signaal van behoefte, niet als slechtheid."],
      ["philippa-perry", "Kinderen hebben nodig dat hun echte gevoelens erkend worden, ook als die niet mooi klinken."]
    ],
    ["jaloezie-op-baby", "band-versterken"]
  ),
  extraVraag(
    "peuter-ontploft-na-opvang",
    "Mijn peuter ontploft zodra hij thuiskomt van de opvang. Waarom bij mij?",
    "emoties",
    ["peuter"],
    ["opvang", "na school", "ontlading", "driftbui", "thuis"],
    "Omdat jij veilig bent. Veel kinderen houden zich buitenshuis samen en laten thuis de opgebouwde spanning los. Plan landingstijd in plaats van meteen nieuwe eisen.",
    "Een kind dat na opvang ontploft, heeft vaak niet plots besloten moeilijk te doen. Het heeft uren aangepast, gedeeld, gewacht, geluid verdragen. Thuis zakt de controle en komt de lading eruit.",
    "Eerst landen, dan vragen",
    "De overgang naar thuis is een kwetsbaar moment. Eten, drinken, nabijheid, stilte of buitenlucht werken vaak beter dan vragenvuren en opdrachten. Je kind moet eerst terug in zijn lijf.",
    [
      "Geef bij thuiskomst een vast, rustig ritueel.",
      "Bied snack, water en nabijheid vóór vragen.",
      "Reken het eerste halfuur niet vol met opdrachten."
    ],
    [
      "Meteen vragen: “was het leuk?” als je kind overloopt.",
      "De ontlading persoonlijk nemen.",
      "Nog snel boodschappen doen als dit dagelijks misgaat."
    ],
    ["“Je hebt je lang groot gehouden. Thuis mag je zakken.”"],
    [
      ["whole-brain-child", "Na veel belasting neemt het emotionele brein sneller over; eerst reguleren, dan praten."],
      ["peaceful-parent", "Overgangen worden makkelijker met verbinding, ritme en ouderlijke kalmte."]
    ],
    ["woede-na-school", "ochtendstress"]
  ),
  extraVraag(
    "woede-na-school",
    "Mijn kind is thuis woedend na school. Moet ik school aanspreken?",
    "emoties",
    ["kind", "tiener"],
    ["school", "woede", "ontlading", "overprikkeling", "thuis"],
    "Soms wel, maar kijk eerst naar het patroon: honger, vermoeidheid, sociale stress of overvraging. Thuiswoede is vaak een signaal dat de dag te veel kost.",
    "Kinderen kunnen op school functioneren en thuis instorten. Dat betekent niet dat ze toneelspelen. Het betekent dat de rem op school veel energie vraagt. Thuis, waar de band veiliger is, komt de ontlading.",
    "Word onderzoeker, geen aanklager",
    "Noteer wanneer het gebeurt: welke dagen, welke lessen, welke vriendschappen, hoeveel slaap, hoeveel eten. Als er een duidelijk schoolpatroon is, overleg je concreter en minder beschuldigend.",
    [
      "Plan na school eerst eten, drinken en decompressie.",
      "Vraag later op de avond naar moeilijke momenten.",
      "Neem contact op met school bij terugkerende signalen."
    ],
    [
      "Direct na school een uitgebreid gesprek eisen.",
      "Woede thuis automatisch als slecht gedrag zien.",
      "School pas aanspreken wanneer jij al ontploft bent."
    ],
    ["“Je lijf lijkt vol van vandaag. Eerst landen, dan praten.”"],
    [
      ["whole-brain-child", "Overbelasting schakelt het denkbrein uit; regulatie moet vóór analyse komen."],
      ["gottman-eq", "Emotiecoaching begint met opmerken, valideren en pas daarna probleemoplossing."]
    ],
    ["peuter-ontploft-na-opvang", "slechte-schoolresultaten"]
  ),
  extraVraag(
    "bang-donkere-kamer",
    "Mijn kind is bang in het donker. Moet ik streng zijn?",
    "emoties",
    ["peuter", "kind"],
    ["angst", "donker", "monsters", "slaap", "nacht"],
    "Nee, angst heeft veiligheid nodig, geen hardheid. Erken het gevoel en maak een concreet plan: licht, deur, checkmoment en een korte zin die elke avond terugkomt.",
    "Voor een bang kind voelt het donker niet als een mening maar als alarm in het lijf. “Er is niks” klopt misschien feitelijk, maar helpt emotioneel vaak niet. Eerst moet het kind zich gezien voelen.",
    "Maak moed voorspelbaar",
    "Je hoeft niet elk monsterverhaal uit te onderhandelen. Je kunt zeggen: je bent veilig, ik geloof dat het bang voelt, en dit is ons plan. Herhaling maakt het brein rustiger.",
    [
      "Gebruik een nachtlampje of deur-op-een-kier als brug.",
      "Spreek één checkmoment af en kom dat na.",
      "Prijs moed: blijven liggen terwijl het spannend voelt."
    ],
    [
      "Angst belachelijk maken.",
      "Eindeloos monsterinspecties doen.",
      "Beloven dat je komt kijken en het vergeten."
    ],
    ["“Je bent veilig. Je lijf voelt bang. Ik kom over vijf minuten kijken.”"],
    [
      ["gottman-eq", "Angst valideren maakt probleemoplossing mogelijk; wegwuiven vergroot afstand."],
      ["power-of-showing-up", "Safe en soothed vormen de basis om spanning te verdragen."]
    ],
    ["bedtijd-ontspoort", "nood-angst-paniek"]
  ),
  extraVraag(
    "huilt-om-kleine-dingen",
    "Mijn kind huilt om alles. Is het te gevoelig?",
    "emoties",
    ["peuter", "kind"],
    ["gevoelig", "huilen", "emoties", "overprikkeling", "troosten"],
    "Misschien is je kind gevoelig, moe of overbelast. Huilen wordt niet kleiner door het belachelijk te maken; het wordt kleiner door taal, rust en herstel van draagkracht.",
    "Veel huilen kan ouders machteloos maken. De reflex is dan: stel je niet aan. Maar een kind dat vaak huilt, heeft meestal minder schaamte nodig en meer hulp bij signalen herkennen: honger, moeheid, spanning, teleurstelling.",
    "Zoek het patroon onder de tranen",
    "Kijk wanneer het gebeurt. Na school? Bij overgang? Bij honger? Bij correctie? Je hoeft niet elk verdriet op te lossen, maar je kunt je kind leren: dit gevoel heeft een naam en gaat voorbij.",
    [
      "Benoem het gevoel zonder drama.",
      "Check slaap, eten en prikkels.",
      "Leer een simpele herstelroutine: adem, knuffel, water, pauze."
    ],
    [
      "“Jij huilt ook altijd” zeggen.",
      "Gevoeligheid als zwakte framen.",
      "Elk huilen meteen willen stoppen."
    ],
    ["“Je tranen vertellen dat iets veel voelt. We zoeken samen wat.”"],
    [
      ["philippa-perry", "Gevoelens serieus nemen helpt kinderen zichzelf vertrouwen."],
      ["gottman-eq", "Emotiecoaching leert kinderen gevoelens herkennen, benoemen en reguleren."]
    ],
    ["emoties-niet-wegpraten", "overprikkeld-feestjes"]
  )
];
