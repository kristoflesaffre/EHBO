// ============================================================
// EHBO — Vragen, deel 11: extra cases over schermen & verbinding
// ============================================================

const VRAGEN_11 = [
  extraVraag(
    "sociale-media-leeftijd",
    "Wanneer is mijn kind klaar voor sociale media?",
    "schermen",
    ["tiener"],
    ["sociale media", "leeftijd", "smartphone", "instagram", "tiktok"],
    "Later dan de meeste kinderen willen. Kijk niet alleen naar leeftijd, maar naar slaap, zichzelf kunnen inhouden, weerbaarheid, privacy en of er gezamenlijke ouderafspraken zijn.",
    "Sociale media vragen volwassen vaardigheden: vergelijking verdragen, grenzen houden, privacy begrijpen, groepsdruk herkennen. Die vaardigheden zijn bij jonge tieners nog volop in aanbouw.",
    "Rijpheid vóór toegang",
    "Een eigen account is geen klein stapje. Begin met gezamenlijke regels, gesprek over algoritmes, geen telefoon in slaapkamer en duidelijke afspraken over melden van nare dingen.",
    [
      "Stel sociale media zo lang mogelijk uit, liefst collectief met andere ouders.",
      "Bespreek algoritmes, filters en groepsdruk vooraf.",
      "Houd slaap en school als harde randvoorwaarden."
    ],
    [
      "Toegang geven omdat iedereen het heeft.",
      "Alleen technische leeftijdsgrenzen gebruiken als morele grens.",
      "Sociale media privé laten starten zonder begeleiding."
    ],
    ["“We kijken niet alleen of je het wil, maar of je brein en je leven er klaar voor zijn.”"],
    [
      ["anxious-generation", "Geen sociale media vóór ongeveer 16 is een van Haidts centrale collectieve normen."],
      ["self-driven-child", "Vrijheid vraagt passende verantwoordelijkheid en stressbestendige keuzes."]
    ],
    ["lichaam-vergelijken", "groepsapp-buitensluiten"]
  ),
  extraVraag(
    "liegen-over-scherm",
    "Mijn kind liegt over schermtijd. Hoe reageer ik?",
    "schermen",
    ["kind", "tiener"],
    ["liegen", "schermtijd", "telefoon", "vertrouwen", "regels"],
    "Zie liegen als signaal dat de afspraak, verleiding of angst voor straf niet werkt. Herstel waarheid en maak het systeem minder afhankelijk van wilskracht.",
    "Schermen zijn verleidelijk en vaak eindeloos. Als een kind liegt, is dat niet alleen karakter; het kan ook betekenen dat de regel te vaag is, controle te streng voelt of de verleiding te groot is.",
    "Maak vertrouwen concreet",
    "Bespreek wat er gebeurde zonder verhoor. Daarna maak je een nieuwe afspraak met minder losse eindjes: zichtbare timer, laadplek, ouderlijke instelling of gezamenlijke check-in.",
    [
      "Benoem de waarheid rustig.",
      "Vraag wat het moeilijk maakte om de afspraak te houden.",
      "Maak de volgende afspraak concreter en controleerbaar."
    ],
    [
      "Alleen straffen zonder systeem aan te passen.",
      "Je kind als leugenaar labelen.",
      "Volledig blind vertrouwen eisen bij verslavende apps."
    ],
    ["“Ik wil de waarheid veilig maken. En we moeten de afspraak sterker maken.”"],
    [
      ["nurtureshock", "Hard straffen rond liegen maakt kinderen vaak beter in verbergen, niet eerlijker."],
      ["anxious-generation", "Digitale producten vragen meer bescherming dan alleen individuele wilskracht."]
    ],
    ["kind-liegt", "tablet-afpakken-meltdown"]
  ),
  extraVraag(
    "schermen-bij-eten",
    "Is schermen tijdens het eten echt zo erg?",
    "schermen",
    ["peuter", "kind", "tiener"],
    ["eten", "schermen", "maaltijd", "gezin", "aandacht"],
    "Af en toe overleven is geen ramp. Als standaard neemt het wel contact, lichaamssignalen en gezinsgesprek weg. Maak maaltijden meestal schermvrij.",
    "Eten is niet alleen calorieën; het is ook ritme, gesprek, proeven, verzadiging voelen en gezinscultuur. Een scherm trekt aandacht weg van al die stille leerprocessen.",
    "Kies de standaard, niet perfectie",
    "Maak schermvrij eten de normale default, met uitzonderingen als bewuste keuze. Dat werkt beter dan elke maaltijd opnieuw onderhandelen.",
    [
      "Leg telefoons en tablets uit zicht tijdens gewone maaltijden.",
      "Maak uitzonderingen expliciet: vandaag picknickfilm, morgen weer zonder.",
      "Gebruik simpele tafelvragen of rustige stilte."
    ],
    [
      "Schermen inzetten als enige manier waarop eten lukt zonder plan.",
      "Zelf scrollen terwijl kinderen schermvrij moeten zijn.",
      "Van één noodmaaltijd een schuldverhaal maken."
    ],
    ["“Aan tafel eten wij zonder scherm. Daarna kijken we wanneer het weer schermtijd is.”"],
    [
      ["anxious-generation", "Schermen verdringen offline interactie, spel en aandachtige aanwezigheid."],
      ["hold-on-to-your-kids", "Gezinsrituelen houden ouderlijke verbinding sterk tegenover peer- en scherminvloed."]
    ],
    ["maaltijd-als-strijd", "telefoonvoorbeeld-ouder"]
  ),
  extraVraag(
    "telefoonvoorbeeld-ouder",
    "Ik zit zelf te veel op mijn telefoon. Heeft dat echt effect?",
    "schermen",
    ["baby", "peuter", "kind", "tiener"],
    ["ouder", "telefoon", "voorbeeld", "aandacht", "verbinding"],
    "Ja, vooral omdat je aandacht minder beschikbaar voelt. Je hoeft niet perfect schermvrij te zijn, maar wel bewust herstel en schermloze ankers bouwen.",
    "Kinderen merken niet alleen wat je zegt over schermen, maar vooral waar je blik heen gaat. Een telefoon trekt mini-momenten van contact weg: aankijken, lachen, reageren, samen landen.",
    "Maak beschikbaarheid zichtbaar",
    "Leg je telefoon weg op vaste momenten en benoem wanneer je echt even moet werken. Reparatie helpt ook: sorry, ik was weg in mijn telefoon, ik ben terug.",
    [
      "Maak telefoonvrije ankers: eten, bedtijd, eerste minuten na thuiskomst.",
      "Vertel wanneer je bereikbaar moet zijn en wanneer niet.",
      "Herstel als je kind je aandacht probeerde te krijgen."
    ],
    [
      "Alleen regels voor kinderen maken.",
      "Half luisteren en doen alsof je volledig aanwezig bent.",
      "Schuldgevoel vervangen door nog meer vermijden."
    ],
    ["“Ik zat vast in mijn telefoon. Ik leg hem weg en ben nu bij jou.”"],
    [
      ["philippa-perry", "Ouderschap gebeurt vooral in de kwaliteit van aanwezigheid en herstel."],
      ["anxious-generation", "De verschuiving naar schermen raakt ook ouderlijke aandacht en gezinscultuur."]
    ],
    ["ouder-op-telefoon", "schermen-bij-eten"]
  ),
  extraVraag(
    "online-pesten",
    "Wat doe ik bij online pesten?",
    "schermen",
    ["kind", "tiener"],
    ["online pesten", "cyberpesten", "sociale media", "school", "veiligheid"],
    "Neem het direct serieus. Bewaar bewijs, steun je kind, blokkeer waar nodig en betrek school of andere ouders wanneer het niet stopt.",
    "Online pesten stopt niet aan de schoolpoort en kan diep in de veilige plek thuis binnendringen. Een kind heeft nodig dat volwassenen het niet minimaliseren als drama op een scherm.",
    "Veiligheid en bewijs",
    "Reageer niet impulsief naar de dader vanuit je eigen woede. Maak screenshots, noteer data, blokkeer of meld, en overleg met school. Je kind moet voelen: jij staat naast mij.",
    [
      "Bewaar screenshots en berichten.",
      "Vraag wat je kind al geprobeerd heeft.",
      "Schakel school in bij herhaling, bedreiging of groepsdruk."
    ],
    [
      "Zeggen: “leg je telefoon dan weg” als enige antwoord.",
      "Zelf boos gaan terugsturen.",
      "Je kind de schuld geven omdat het online was."
    ],
    ["“Dit is niet jouw schuld. We gaan dit serieus aanpakken.”"],
    [
      ["anxious-generation", "Online sociale omgevingen kunnen pesten permanent en intens maken."],
      ["power-of-showing-up", "Kinderen hebben veilige, aanwezige volwassenen nodig bij bedreigende ervaringen."]
    ],
    ["groepsapp-buitensluiten", "youtube-angstbeelden"]
  ),
  extraVraag(
    "privacy-wachtwoorden",
    "Mag ik de berichten of wachtwoorden van mijn tiener controleren?",
    "schermen",
    ["tiener"],
    ["privacy", "wachtwoorden", "controle", "vertrouwen", "telefoon"],
    "Privacy groeit met verantwoordelijkheid. Maak afspraken vooraf over veiligheid, niet stiekem achteraf uit paniek, behalve bij acute zorg of gevaar.",
    "Tieners hebben privacy nodig om eigenheid te ontwikkelen. Ze hebben ook bescherming nodig in online ruimtes. De kunst is een helder contract: wat is privé, wat is veiligheidsgebied, wanneer grijpen ouders in?",
    "Van spioneren naar afspraken",
    "Bespreek wachtwoorden, locatie, onbekenden, naaktbeelden, pesten en noodsituaties vooraf. Stiekem lezen kan vertrouwen beschadigen; soms is ingrijpen wel nodig als veiligheid op het spel staat.",
    [
      "Maak vooraf duidelijke digitale veiligheidsafspraken.",
      "Leg uit wanneer privacy kan wijken voor veiligheid.",
      "Bouw controle af wanneer verantwoordelijkheid groeit."
    ],
    [
      "Stiekem alles lezen als standaard.",
      "Privacy gebruiken als excuus om niets te begeleiden.",
      "Pas praten nadat vertrouwen al kapot is."
    ],
    ["“Ik wil je privacy respecteren én je veiligheid beschermen. Daar maken we afspraken over.”"],
    [
      ["self-driven-child", "Zelfstandigheid en verantwoordelijkheid moeten samen groeien."],
      ["anxious-generation", "Online risico's vragen volwassen bescherming en collectieve normen."]
    ],
    ["sociale-media-leeftijd", "liegen-over-scherm"]
  ),
  extraVraag(
    "korte-video-verslaving",
    "Mijn kind blijft hangen in korte video's. Waarom is stoppen zo moeilijk?",
    "schermen",
    ["kind", "tiener"],
    ["tiktok", "shorts", "reels", "algoritme", "verslaving"],
    "Omdat korte video's geen natuurlijk einde hebben en precies leren wat de aandacht vasthoudt. Stoppen vraagt dus grenzen buiten het kind om, niet alleen wilskracht.",
    "Een eindeloze feed is gemaakt om door te gaan. Elk filmpje is een mini-beloning met kans op nog iets beters. Voor een ontwikkelend brein is dat extreem moeilijk om zelf te begrenzen.",
    "Vertrouw niet alleen op zelfcontrole",
    "Maak toegang beperkt: geen korte-video-apps op jonge leeftijd, tijdvensters, geen slaapkamer, en liefst collectieve afspraken met andere ouders.",
    [
      "Gebruik tijdvensters in plaats van open toegang.",
      "Verwijder of beperk apps die eindeloos doorlopen.",
      "Zorg voor offline alternatieven na schermtijd."
    ],
    [
      "Een kind dom of zwak noemen omdat stoppen moeilijk is.",
      "Eindeloze feeds vlak voor slaap toelaten.",
      "Alle verantwoordelijkheid bij je kind leggen."
    ],
    ["“Deze app is gemaakt om je vast te houden. Daarom zetten wij er een grens omheen.”"],
    [
      ["anxious-generation", "Aandachtseconomie en algoritmes maken zelfbegrenzing voor kinderen bijzonder moeilijk."],
      ["self-driven-child", "Controle over de omgeving kan stress verlagen en betere keuzes mogelijk maken."]
    ],
    ["tablet-afpakken-meltdown", "telefoon-in-slaapkamer"]
  ),
  extraVraag(
    "laptop-afleiding-huiswerk",
    "Mijn kind moet op de laptop werken maar raakt steeds afgeleid. Wat helpt?",
    "schermen",
    ["kind", "tiener"],
    ["huiswerk", "laptop", "afleiding", "school", "focus"],
    "Maak digitaal huiswerk zo taakgericht mogelijk: duidelijke blokken, zichtbare planning en afleidingen uit. Verwacht niet dat een kind alleen op wilskracht wint van het internet.",
    "Een laptop is tegelijk schrift, bibliotheek, speelhal en sociale straat. Voor kinderen is dat een zware executieve-functietaak: werken terwijl verleiding één klik weg is.",
    "Ontwerp de omgeving",
    "Werk met korte blokken, sites geblokkeerd waar kan, telefoon weg, en een concrete eindtaak. Ouders hoeven geen politie te zijn, maar mogen de omgeving slimmer maken.",
    [
      "Leg telefoon buiten bereik tijdens huiswerkblokken.",
      "Maak per blok één concrete taak.",
      "Gebruik pauzes vóór het brein zelf ontsnapt."
    ],
    [
      "Zeggen: “concentreer je gewoon”.",
      "Huiswerk doen met chat en video open.",
      "Elke klik controleren als permanente rol."
    ],
    ["“We maken de omgeving makkelijker, niet jouw wilskracht groter.”"],
    [
      ["self-driven-child", "Structuur helpt zonder het volledig uit handen te nemen."],
      ["anxious-generation", "Digitale afleiding verdringt diep werk, slaap en aandacht."]
    ],
    ["motivatie-zakt-school", "huiswerk-paniek"]
  ),
  extraVraag(
    "schermvrije-dag",
    "Heeft een schermvrije dag zin of wordt dat alleen strijd?",
    "schermen",
    ["kind", "tiener"],
    ["schermvrij", "weekend", "regels", "gezin", "offline"],
    "Het kan zin hebben als het geen straf is maar een gezinsritme met aantrekkelijke offline alternatieven. Plots leegte zonder plan geeft vaak strijd.",
    "Schermvrij werkt niet magisch omdat het scherm weg is. Het werkt als er opnieuw ruimte komt voor verveling, spel, buiten, echte gezichten en rust. Die ruimte moet soms geholpen worden.",
    "Maak het een ontwerp, geen verbod",
    "Plan wat wél: wandelen, koken, vrienden, bordspel, klus, nietsdoen. En doe als ouder mee. Anders voelt het als een kindermaatregel.",
    [
      "Kies vaste schermarme momenten.",
      "Plan offline opties zonder alles vol te zetten.",
      "Doe zelf zichtbaar mee."
    ],
    [
      "Schermvrij alleen inzetten als straf.",
      "Een lege dag verwachten zonder ontwenningsgedoe.",
      "Zelf ondertussen blijven scrollen."
    ],
    ["“Vandaag maken we ruimte voor andere dingen. Niet als straf, als reset.”"],
    [
      ["anxious-generation", "Meer vrije offline tijd en minder telefoonkindertijd ondersteunt ontwikkeling."],
      ["hold-on-to-your-kids", "Gezinsrituelen en samen doen versterken verbinding tegenover scherm- en peerdruk."]
    ],
    ["familieafspraken-smartphone", "telefoonvoorbeeld-ouder"]
  ),
  extraVraag(
    "familieafspraken-smartphone",
    "Hoe maak ik smartphone-afspraken die geen dagelijkse oorlog worden?",
    "schermen",
    ["kind", "tiener"],
    ["smartphone", "afspraken", "regels", "gezin", "schermtijd"],
    "Maak afspraken vooraf, concreet en collectief. Minder discussie ontstaat wanneer de regels niet elke avond opnieuw worden uitgevonden.",
    "Smartphones zijn te krachtig voor losse improvisatie. Als regels pas ontstaan wanneer iedereen moe en boos is, worden ze ervaren als willekeur.",
    "Gezinsbeleid boven incidentbeleid",
    "Leg vaste plekken en tijden vast: niet in slaapkamer, niet aan tafel, huiswerkblok, oplaadplek. Bespreek ook wat er gebeurt als een afspraak niet lukt.",
    [
      "Maak drie kernregels die iedereen kent.",
      "Zet telefoons op een gezamenlijke laadplek.",
      "Evalueer wekelijks kort in plaats van dagelijks te vechten."
    ],
    [
      "Regels alleen maken nadat het uit de hand is gelopen.",
      "Voor elk kind totaal andere basisregels zonder uitleg.",
      "Volwassen voorbeeldgedrag vergeten."
    ],
    ["“We maken deze afspraken vóór het moeilijk wordt.”"],
    [
      ["anxious-generation", "Collectieve en duidelijke normen beschermen beter dan individuele wilskracht."],
      ["good-inside", "Stevig leiderschap geeft voorspelbare kaders zonder schaamte."]
    ],
    ["telefoon-in-slaapkamer", "schermen-bij-eten"]
  ),
  extraVraag(
    "kind-wil-alleen-mama",
    "Mijn kind wil alleen mama of alleen papa. Wat met de andere ouder?",
    "band",
    ["baby", "peuter", "kind"],
    ["voorkeur", "mama", "papa", "hechting", "ouder"],
    "Voorkeur is meestal geen afwijzing maar veiligheid en gewoonte. Laat de favoriete ouder erkennen, en geef de andere ouder rustige, niet-geforceerde momenten.",
    "Kinderen hebben fases waarin één ouder de veilige snelweg is. Als de andere ouder gekwetst of dwingend reageert, wordt de afstand vaak groter.",
    "Band bouw je zonder competitie",
    "De favoriete ouder hoeft niet alles te doen. De andere ouder krijgt vaste rituelen: bad, boek, ontbijt, wandeling. Eerst protest, dan voorspelbaarheid.",
    [
      "Erken dat je kind voorkeur voelt.",
      "Geef de andere ouder vaste, kleine rituelen.",
      "Laat de favoriete ouder vertrouwen uitstralen."
    ],
    [
      "Het kind beschuldigen van gemeen doen.",
      "De andere ouder forceren op het heetste moment.",
      "Voorkeur persoonlijk blijven nemen."
    ],
    ["“Je wil mama. Papa helpt je nu, en mama is niet weg uit je leven.”"],
    [
      ["power-of-showing-up", "Veiligheid groeit door voorspelbare, herhaalde aanwezigheid."],
      ["hold-on-to-your-kids", "Relatie wordt geactiveerd door warme rituelen en dagelijkse nabijheid."]
    ],
    ["kind-voorkeur-andere-ouder", "band-versterken"]
  ),
  extraVraag(
    "kind-duwt-troost-weg",
    "Mijn kind duwt troost weg. Laat ik het dan alleen?",
    "band",
    ["peuter", "kind", "tiener"],
    ["troost", "afwijzen", "boos", "nabijheid", "hechting"],
    "Respecteer afstand, maar verbreek de verbinding niet. Sommige kinderen willen geen aanraking maar wel weten dat je blijft.",
    "Troost wegduwen betekent niet altijd: ga weg uit mijn leven. Het kan betekenen: aanraking is nu te veel, ik schaam me, ik wil controle houden, of ik vertrouw nog niet dat troost veilig is.",
    "Blijf beschikbaar op afstand",
    "Zeg waar je bent, bied keuze en kom later terug. Zo leert je kind dat afstand niet hetzelfde is als verlaten worden.",
    [
      "Vraag of nabijheid, afstand of stilte helpt.",
      "Blijf in de buurt zonder te kleven.",
      "Kom later terug met een zachte check-in."
    ],
    [
      "Aandringen op knuffels.",
      "Gekwetst weglopen en koud worden.",
      "Troost weigeren zien als ondankbaarheid."
    ],
    ["“Ik raak je niet aan. Ik blijf wel dichtbij.”"],
    [
      ["power-of-showing-up", "Soothed kan ook betekenen: afgestemd aanwezig zijn zonder aanraking te forceren."],
      ["philippa-perry", "Kinderen hebben respect voor hun grenzen nodig om nabijheid veilig te laten voelen."]
    ],
    ["kind-wil-geen-knuffel", "boosheid-blijft-hangen"]
  ),
  extraVraag(
    "band-puber-herstellen",
    "Hoe herstel ik de band met mijn puber als we alleen nog botsen?",
    "band",
    ["tiener"],
    ["puber", "band", "herstel", "conflict", "verbinding"],
    "Stop tijdelijk met elk contact als correctiemoment gebruiken. Bouw kleine, neutrale verbindingen op: rijden, eten, interesse, minder verhoor.",
    "Wanneer de relatie vooral uit regels, cijfers en schermdiscussies bestaat, gaat een tiener jou ervaren als controlepost. Dan moet verbinding weer losgekoppeld worden van prestatie.",
    "Herstel in mini-momenten",
    "Vraag niet meteen om diepe gesprekken. Begin met naast elkaar zijn, een snack brengen, een seriefragment, een korte rit. Betrouwbaarheid komt vóór openheid.",
    [
      "Maak dagelijks één contactmoment zonder correctie.",
      "Toon interesse in iets van je tiener zonder oordeel.",
      "Herstel expliciet na harde botsingen."
    ],
    [
      "Elk gesprek eindigen met een les.",
      "Openheid eisen omdat jij nu je best doet.",
      "Alleen nabij komen wanneer er problemen zijn."
    ],
    ["“Ik mis ons. Ik ga minder preken en meer naast je staan.”"],
    [
      ["hold-on-to-your-kids", "Tieners blijven ouderlijke oriëntatie nodig hebben, maar verbinding moet actief verzameld worden."],
      ["philippa-perry", "Relatieherstel begint met eigen aandeel zien en zachte aanwezigheid."]
    ],
    ["praten-met-puber-in-auto", "tiener-te-laat"]
  ),
  extraVraag(
    "weinig-tijd-verbinding",
    "Ik heb weinig tijd. Kan ik toch een sterke band bouwen?",
    "band",
    ["baby", "peuter", "kind", "tiener"],
    ["tijd", "verbinding", "druk", "quality time", "band"],
    "Ja. Verbinding zit vaak in herhaalde micro-momenten: echt aankijken, begroeten, luisteren, herstellen en kleine rituelen.",
    "Ouders denken snel dat verbinding grote uitstappen vraagt. Maar kinderen voelen vooral: ben je beschikbaar wanneer we elkaar kruisen? Ben je blij mij te zien? Kom je terug na conflict?",
    "Kleine ankers tellen",
    "Maak drie vaste ankers: begroeting, bedtijd of vertrek, en één kort moment zonder telefoon. Consistent klein wint vaak van zeldzaam groot.",
    [
      "Begroet je kind alsof je blij bent het te zien.",
      "Maak één dagelijks micro-ritueel.",
      "Leg je telefoon weg bij overgangsmomenten."
    ],
    [
      "Wachten op perfecte quality time.",
      "Alle schuldgevoel compenseren met cadeaus.",
      "Alleen functioneel praten: opschieten, eten, slapen."
    ],
    ["“Ik heb tien minuten helemaal voor jou.”"],
    [
      ["peaceful-parent", "Dagelijkse speciale tijd en kleine verbinding voorkomen veel strijd."],
      ["power-of-showing-up", "Kinderen hebben herhaald ervaren nodig dat ze gezien en veilig zijn."]
    ],
    ["tijdgebrek-quality-time", "telefoonvoorbeeld-ouder"]
  ),
  extraVraag(
    "band-na-scheiding",
    "Hoe bescherm ik de band met mijn kind na een scheiding?",
    "band",
    ["peuter", "kind", "tiener"],
    ["scheiding", "co-ouderschap", "band", "loyaliteit", "overgang"],
    "Maak je kind niet verantwoordelijk voor volwassen pijn. Bied voorspelbaarheid, toestemming om van beide ouders te houden en ruimte voor gemis.",
    "Scheiding brengt verlies, overgang en loyaliteitsspanning. Een kind kan boos, stil, plakkerig of overdreven flink worden. Dat zijn geen ondankbare reacties, maar aanpassingen aan een nieuwe werkelijkheid.",
    "Veilig tussen twee werelden",
    "De band blijft sterker wanneer je de andere ouder niet via het kind bevecht, overdrachten rustig maakt en gevoelens over beide huizen laat bestaan.",
    [
      "Zeg expliciet dat je kind van beide ouders mag houden.",
      "Maak overdrachten voorspelbaar en rustig.",
      "Laat verdriet of boosheid over de scheiding bestaan."
    ],
    [
      "Je kind als boodschapper gebruiken.",
      "De andere ouder afbreken waar je kind bij is.",
      "Flinkheid verwarren met verwerking."
    ],
    ["“Jij hoeft niet tussen ons te kiezen. Wij blijven allebei je ouders.”"],
    [
      ["philippa-perry", "Kinderen hebben waarheid en emotionele toestemming nodig, niet ontkenning van moeilijke gevoelens."],
      ["power-of-showing-up", "Safe en secure worden extra belangrijk bij grote relationele veranderingen."]
    ],
    ["co-ouderschap-overgangen", "verschillende-regels-twee-huizen"]
  ),
  extraVraag(
    "kind-voorkeur-andere-ouder",
    "Mijn kind kiest altijd de andere ouder. Waarom doet dat zo pijn?",
    "band",
    ["peuter", "kind"],
    ["voorkeur", "ouder", "afwijzing", "band", "hechting"],
    "Omdat het op afwijzing lijkt, maar meestal gaat het over gewoonte, fase of behoefte. Zorg dat je pijn niet op het bord van je kind belandt.",
    "Een kind dat “ik wil papa” roept, bedoelt zelden: jij bent minder waard. Toch kan het oude pijn raken. Als jij vanuit die pijn gaat trekken, wordt nabijheid beladen.",
    "Blijf warm beschikbaar",
    "De band groeit door gewone momenten, niet door competitie. Laat je kind voorkeur hebben en blijf betrouwbaar. De favoriete ouder kan helpen door vertrouwen in jou uit te stralen.",
    [
      "Erken je eigen pijn bij een volwassene, niet bij je kind.",
      "Bouw eigen rituelen op met je kind.",
      "Laat de andere ouder jou positief ondersteunen."
    ],
    [
      "Je kind schuld geven om voorkeur.",
      "Liefde meten per moment.",
      "Jezelf terugtrekken uit gekwetstheid."
    ],
    ["“Je wil papa. Ik ben ook hier en ik help je nu.”"],
    [
      ["philippa-perry", "Ouders onderzoeken welke oude pijn geraakt wordt in het huidige ouderschap."],
      ["power-of-showing-up", "Veilige band groeit uit blijven verschijnen, ook wanneer een kind afstand toont."]
    ],
    ["kind-wil-alleen-mama", "kind-duwt-troost-weg"]
  ),
  extraVraag(
    "hechting-na-ziekenhuis",
    "Na ziekenhuis of opname is mijn kind anders. Hoe herstel ik veiligheid?",
    "band",
    ["baby", "peuter", "kind"],
    ["ziekenhuis", "trauma", "hechting", "angst", "herstel"],
    "Verwacht tijdelijk meer nabijheid, controlebehoefte of angst. Herstel veiligheid met voorspelbaarheid, spel en veel toestemming rond het lichaam.",
    "Medische ervaringen kunnen voor kinderen verwarrend of bedreigend zijn, ook als ze nodig waren. Hun lijf onthoudt soms: volwassenen doen dingen met mij die ik niet kan stoppen.",
    "Geef controle terug",
    "Laat je kind kiezen waar mogelijk: welke arm eerst, wie helpt, stopteken bij verzorging. Speel ziekenhuis na als het kind dat wil. Spel helpt het brein ervaringen ordenen.",
    [
      "Bied extra nabijheid en voorspelbaarheid.",
      "Vraag toestemming bij verzorging waar dat kan.",
      "Laat medisch spel of tekenen toe."
    ],
    [
      "Zeggen: “het is voorbij, vergeet het”.",
      "Controle volledig afnemen bij dagelijkse verzorging.",
      "Terugval in gedrag als manipulatie zien."
    ],
    ["“Je lijf heeft veel meegemaakt. Jij mag stop zeggen bij het oefenen.”"],
    [
      ["whole-brain-child", "Verhalen, spel en woorden helpen heftige ervaringen integreren."],
      ["power-of-showing-up", "Veilig, gezien en getroost worden is de basis voor herstel na angst."]
    ],
    ["baby-ziek-aanhankelijk", "nood-angst-paniek"]
  ),
  extraVraag(
    "negatieve-aandacht",
    "Mijn kind zoekt negatieve aandacht. Hoe draai ik dat om?",
    "band",
    ["peuter", "kind"],
    ["aandacht", "negatief", "lastig gedrag", "verbinding", "speciale tijd"],
    "Zie het als een noodsignaal: contact is zo belangrijk dat zelfs boos contact beter voelt dan geen contact. Geef vooraf positieve aandacht en begrens gedrag kort.",
    "Kinderen kiezen negatieve aandacht niet omdat ze gemeen zijn, maar omdat aandacht een basisbehoefte is. Als de emmer leeg is, wordt elk reactiepatroon aantrekkelijk.",
    "Voed vóór het vraagt",
    "Plan kleine momenten waarin je kind niet hoeft te storen om jou te krijgen. Bij lastig gedrag reageer je kort op de grens, niet met een lang toneelstuk.",
    [
      "Geef dagelijks korte onverdeelde aandacht.",
      "Benoem positief contact wanneer het er is.",
      "Houd correcties kort en saai."
    ],
    [
      "Alle aandacht pas geven wanneer gedrag escaleert.",
      "Lastig gedrag lang bespreken midden in de actie.",
      "Aandacht onthouden als straf."
    ],
    ["“Ik zie dat je mij nodig hebt. Ik stop dit gedrag en kom zo bij jou.”"],
    [
      ["peaceful-parent", "Speciale tijd werkt preventief doordat kinderen zich gevuld voelen met verbinding."],
      ["good-inside", "Lastig gedrag wijst vaak op een behoefte of ontbrekende vaardigheid."]
    ],
    ["band-versterken", "weinig-tijd-verbinding"]
  ),
  extraVraag(
    "ouder-geen-klik",
    "Wat als ik weinig klik voel met mijn kind?",
    "band",
    ["baby", "peuter", "kind", "tiener"],
    ["klik", "band", "schuld", "ouder", "verbinding"],
    "Dat kan gebeuren en het maakt je geen slechte ouder. Band groeit door herhaalde zorg, nieuwsgierigheid en herstel, niet altijd door instant gevoel.",
    "Sommige ouder-kindcombinaties passen niet vanzelf soepel. Temperament, stress, slaaptekort of je eigen geschiedenis kunnen tussen jullie in staan. Schaamte maakt dat zwaarder.",
    "Begin met nieuwsgierigheid",
    "Zoek kleine ingangen: wat maakt je kind levendiger, rustiger, trots? Investeer in voorspelbare momenten zonder te wachten op groot gevoel. En zoek steun als somberheid of afwijzing blijft hangen.",
    [
      "Plan kleine neutrale momenten samen.",
      "Observeer waar je kind plezier of rust van krijgt.",
      "Praat met een professional als afstand of irritatie blijft groeien."
    ],
    [
      "Je schuldgevoel compenseren met overcontrole.",
      "Doen alsof band altijd vanzelf moet voelen.",
      "Je kind verantwoordelijk maken voor jouw gevoel."
    ],
    ["“Ik leer jou kennen. We hoeven niet perfect te klikken om verbonden te groeien.”"],
    [
      ["philippa-perry", "Ouders kijken naar eigen patronen en geschiedenis zonder het kind daarvoor verantwoordelijk te maken."],
      ["power-of-showing-up", "Veilige hechting groeit door betrouwbaar verschijnen, niet door perfect gevoel."]
    ],
    ["ouderlijke-schuld", "weinig-tijd-verbinding"]
  ),
  extraVraag(
    "herstellen-na-straf",
    "Ik heb te hard gestraft. Kan ik daarop terugkomen?",
    "band",
    ["peuter", "kind", "tiener"],
    ["straf", "herstel", "sorry", "grens", "relatie"],
    "Ja. Terugkomen op een te harde straf is geen gezichtsverlies; het leert je kind rechtvaardigheid, herstel en volwassen verantwoordelijkheid.",
    "Ouders zijn soms bang dat bijsturen zwak lijkt. Maar een kind leert juist veel wanneer een ouder zegt: mijn reactie was te groot, de grens blijft, maar ik pas de consequentie aan.",
    "Herstel zonder de grens te wissen",
    "Maak onderscheid tussen gedrag en jouw reactie. Zeg wat te hard was, wat de echte grens is en wat nu een logischere stap is.",
    [
      "Wacht tot je kalm bent.",
      "Benoem je eigen aandeel zonder “maar”.",
      "Maak een passendere consequentie concreet."
    ],
    [
      "Vasthouden aan een onredelijke straf uit trots.",
      "Alles kwijtschelden zonder gesprek.",
      "Je kind verantwoordelijk maken voor jouw uitbarsting."
    ],
    ["“Ik was te hard. De grens blijft, maar deze straf klopt niet. We herstellen dit.”"],
    [
      ["philippa-perry", "Breuk en herstel zijn essentieel voor veilige relaties."],
      ["unconditional-parenting", "Controle via straf ondermijnt vaak relatie en moreel leren."]
    ],
    ["consequentie-of-straf", "ik-heb-geschreeuwd"]
  )
];
