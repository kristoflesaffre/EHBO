// ============================================================
// EHBO — Vragen, deel 10: extra cases over zelfvertrouwen & schermen
// ============================================================

const VRAGEN_10 = [
  extraVraag(
    "durft-niet-nieuw",
    "Mijn kind durft geen nieuwe dingen te proberen. Hoe duw ik zonder te duwen?",
    "zelfvertrouwen",
    ["peuter", "kind", "tiener"],
    ["nieuw", "durven", "angst", "proberen", "zelfvertrouwen"],
    "Maak de stap kleiner en laat je kind eigenaarschap houden. Moed groeit niet door duwen, maar door veilige herhaalde ervaringen van: ik kan iets spannends aan.",
    "Nieuwe dingen raken aan controleverlies. Voor sommige kinderen voelt onbekend onmiddellijk als gevaar. Als jij dan pusht, wordt het bewijs: dit is te groot. Als jij alles vermijdt, blijft de wereld klein.",
    "Klein genoeg om echt te proberen",
    "Zoek de net-haarbare stap: kijken zonder meedoen, vijf minuten proberen, samen starten, één vraag stellen. Moed is niet geen angst voelen, maar bewegen met steun.",
    [
      "Vraag welke eerste stap haalbaar voelt.",
      "Prijs het proberen, niet alleen het durven.",
      "Laat je kind vooraf weten wanneer het mag stoppen."
    ],
    [
      "Je kind beschamen als angsthaas.",
      "De sprong groter maken om er snel vanaf te zijn.",
      "Alles vermijden wat spanning geeft."
    ],
    ["“We zoeken een stap die spannend is, maar niet te groot.”"],
    [
      ["self-driven-child", "Autonomie en controle verlagen stress en vergroten bereidheid om te proberen."],
      ["nurtureshock", "Procesgerichte feedback ondersteunt risico nemen en doorzetten."]
    ],
    ["faalangst-toets", "perfectionisme-boos-fout"]
  ),
  extraVraag(
    "opgeven-eerste-fout",
    "Mijn kind geeft op bij de eerste fout. Wat zeg ik dan?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["opgeven", "fout", "doorzetten", "leren", "frustratie"],
    "Maak fouten normaal en de volgende stap concreet. “Gewoon doorzetten” is te vaag; je kind heeft taal, pauze en strategie nodig.",
    "Opgeven beschermt tegen schaamte. Als je stopt, hoef je niet te voelen dat iets moeilijk is. Daarom helpt het niet om opgeven lui te noemen. Je kind moet ervaren dat moeite geen bewijs van onvermogen is.",
    "Van stop naar volgende stap",
    "Vraag: wat is het kleinste stukje dat je wél kunt doen? Of: wil je een hint, voorbeeld of pauze? Zo blijft het kind in beweging zonder overspoeld te raken.",
    [
      "Gebruik “nog niet” consequent.",
      "Splits de taak in een eerste mini-stap.",
      "Beloon herstel na fout: terugkomen is winst."
    ],
    [
      "De taak overnemen zodra je kind zucht.",
      "Zeggen: “als je zo doet, leer je het nooit”.",
      "Alle spanning vermijden."
    ],
    ["“Je brein is bij een moeilijk stuk. Wat is de kleinste volgende stap?”"],
    [
      ["nurtureshock", "Proceslof en groeitaal vergroten volharding bij uitdaging."],
      ["self-driven-child", "Competentie groeit door passende steun zonder eigenaarschap af te nemen."]
    ],
    ["kind-snel-gefrustreerd", "slechte-schoolresultaten"]
  ),
  extraVraag(
    "altijd-willen-winnen",
    "Mijn kind wil altijd winnen. Hoe leer ik gezonde competitie?",
    "zelfvertrouwen",
    ["peuter", "kind"],
    ["winnen", "competitie", "spel", "verliezen", "zelfbeeld"],
    "Leer dat winnen leuk mag zijn, maar niet de enige manier om oké te zijn. Oefen verliezen, herstel en plezier in spel los van resultaat.",
    "Voor sommige kinderen voelt winnen als bewijs van waarde en verliezen als vernedering. Dan gaat spel niet meer over spel, maar over zelfbescherming.",
    "Ontkoppel prestatie van waarde",
    "Speel korte spellen, benoem spanning en modelleer zelf verliezen. Focus op moment: slim geprobeerd, grappige zet, opnieuw spelen. Zo wordt resultaat minder allesbepalend.",
    [
      "Zeg dat winnen fijn is én verliezen draaglijk.",
      "Modelleer sportief verliezen als ouder.",
      "Stop een spel even als het brein offline gaat."
    ],
    [
      "Je kind expres altijd laten winnen.",
      "Verliezen belachelijk maken.",
      "Competitie volledig schrappen uit angst voor boosheid."
    ],
    ["“Je wilde winnen. Dat snap ik. Nu oefenen we verliezen zonder kapot te gaan.”"],
    [
      ["gottman-eq", "Teleurstelling erkennen en gedrag begrenzen helpt emotionele intelligentie."],
      ["nurtureshock", "Kinderen leren veerkracht door uitdaging met procesgerichte steun."]
    ],
    ["woede-bij-verliezen", "perfectionisme-boos-fout"]
  ),
  extraVraag(
    "kind-voelt-dom",
    "Mijn kind zegt: “ik ben dom.” Wat antwoord ik?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["dom", "zelfbeeld", "school", "leren", "zelfvertrouwen"],
    "Ga niet alleen geruststellen; onderzoek wat erachter zit. Vertaal “ik ben dom” naar: dit voelt moeilijk, ik schaam me, ik heb hulp of strategie nodig.",
    "Wanneer een kind zichzelf dom noemt, is dat vaak een poging om pijn te verklaren. Als iets niet lukt, voelt een vast label soms veiliger dan de onzekerheid van leren.",
    "Vervang identiteit door proces",
    "Zeg niet alleen: nee hoor. Zeg: je brein zit vast bij dit stukje. Wat heb je al geprobeerd? Wat zou een andere strategie zijn? Zo haal je het uit identiteit.",
    [
      "Erken de pijn achter de uitspraak.",
      "Vraag welk onderdeel moeilijk voelt.",
      "Vertel over leren als proces."
    ],
    [
      "“Niet zo praten” zeggen zonder hulp.",
      "Het kind overspoelen met complimenten.",
      "De taak meteen wegpoetsen."
    ],
    ["“Het voelt dom, maar dat betekent: dit stuk is moeilijk. We zoeken een aanpak.”"],
    [
      ["nurtureshock", "Eigenschapslabels beïnvloeden hoe kinderen falen interpreteren."],
      ["good-inside", "Identiteit blijft veilig terwijl gedrag en vaardigheden steun krijgen."]
    ],
    ["slechte-schoolresultaten", "faalangst-toets"]
  ),
  extraVraag(
    "faalangst-toets",
    "Mijn kind blokkeert bij toetsen. Hoe help ik zonder druk?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["faalangst", "toets", "school", "stress", "prestatie"],
    "Werk aan voorbereiding én stressregulatie. Een kind dat blokkeert heeft niet alleen meer leerstof nodig, maar ook een plan voor het lijf.",
    "Toetsstress kan het denkbrein tijdelijk onbereikbaar maken. Dan kent een kind de stof thuis, maar niet onder druk. Meer dreiging maakt dat erger.",
    "Maak een toetsplan",
    "Oefen met korte testmomenten, ademhaling, eerste makkelijke vraag zoeken en helpzinnen. Bespreek cijfers als informatie, niet als oordeel over waarde.",
    [
      "Oefen toetsen in kleine, veilige doses.",
      "Maak een plan voor paniek: adem, voeten, eerste vraag.",
      "Bespreek na afloop wat werkte, niet alleen het punt."
    ],
    [
      "Cijfers koppelen aan liefde of trots.",
      "Op de ochtend zelf nog druk verhogen.",
      "Faalangst luiheid noemen."
    ],
    ["“Je lijf gaat in alarm. We oefenen wat je dan doet.”"],
    [
      ["self-driven-child", "Stress daalt wanneer kinderen controle ervaren over aanpak en reactie."],
      ["nurtureshock", "Proces en slaap beïnvloeden leren sterker dan druk op prestatie-identiteit."]
    ],
    ["slechte-schoolresultaten", "kind-voelt-dom"]
  ),
  extraVraag(
    "podiumangst",
    "Mijn kind moet optreden of presenteren en durft niet. Wat nu?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["presenteren", "optreden", "podiumangst", "spreekbeurt", "angst"],
    "Erken dat het spannend is en oefen in lagen: eerst thuis, dan voor één persoon, dan voor een kleine groep. Moed groeit door haalbare blootstelling.",
    "Podiumangst is sociale dreiging: bekeken worden, fouten maken, gezichtsverlies. Dwingen zonder opbouw kan schaamte versterken. Volledig vermijden kan de angst vastzetten.",
    "Bouw de trap",
    "Maak een oefenladder. Laat je kind meebeslissen over volgorde en steun. Het doel is niet perfect optreden, maar ervaren: spanning kan mee in de kamer.",
    [
      "Maak een oefenladder met kleine stappen.",
      "Oefen ook wat te doen bij een fout.",
      "Focus op één haalbaar doel, niet perfecte uitvoering."
    ],
    [
      "Zeggen dat het niet spannend is.",
      "Pas op de dag zelf beginnen met oefenen.",
      "Je eigen schaamte over je kind centraal zetten."
    ],
    ["“We hoeven angst niet weg te maken. We maken de stap kleiner.”"],
    [
      ["self-driven-child", "Autonomie en controle helpen kinderen stressvolle prestaties aangaan."],
      ["gottman-eq", "Angst erkennen opent de weg naar probleemoplossing."]
    ],
    ["durft-niet-nieuw", "faalangst-toets"]
  ),
  extraVraag(
    "geen-hobby-vinden",
    "Mijn kind vindt geen enkele hobby leuk. Moet ik blijven zoeken?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["hobby", "sport", "interesse", "motivatie", "verveling"],
    "Zoek breed, maar maak er geen project van. Een kind hoeft niet meteen een passie te hebben; interesses groeien door proberen zonder prestatiedruk.",
    "Ouders kunnen hobby's zien als bewijs dat een kind goed bezig is. Maar sommige kinderen hebben tijd, rust of veel kleine ervaringen nodig voordat iets blijft plakken.",
    "Nieuwsgierigheid vóór identiteit",
    "Probeer korte reeksen, proeflessen, thuisprojecten, buiten spelen of creatieve dingen. Vraag niet meteen: is dit jouw ding? Vraag: wat vond je één procent leuk of stom?",
    [
      "Bied proefervaringen met lage inzet.",
      "Laat je kind ook niets hoeven kiezen voor even.",
      "Kijk naar energie na de activiteit."
    ],
    [
      "Je kind vergelijken met drukbezette leeftijdsgenoten.",
      "Elke hobby meteen als talenttraject behandelen.",
      "Verveling automatisch als probleem zien."
    ],
    ["“Je hoeft nog geen passie te hebben. We mogen gewoon proeven.”"],
    [
      ["self-driven-child", "Duurzame motivatie groeit uit autonomie, competentie en eigen keuze."],
      ["conscious-parent", "Ouders mogen onderzoeken of hun druk uit eigen verwachtingen komt."]
    ],
    ["sport-hobby-stoppen", "motivatie-zakt-school"]
  ),
  extraVraag(
    "lichaam-vergelijken",
    "Mijn kind vergelijkt zijn lichaam met anderen. Hoe reageer ik?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["lichaam", "zelfbeeld", "vergelijken", "puberteit", "sociale media"],
    "Reageer niet met snelle geruststelling alleen. Erken de pijn, verleg aandacht naar wat het lichaam doet en wees scherp op sociale media en jouw eigen lichaamstaal.",
    "Lichaamsvergelijking groeit in een cultuur van beelden, filters en commentaar. Een kind dat zegt “ik ben lelijk” zoekt niet alleen een compliment, maar veiligheid rond schaamte.",
    "Maak thuis een lichaamsveilige plek",
    "Let op hoe volwassenen praten over eten, gewicht en uiterlijk. Bespreek filters en algoritmes. Help je kind woorden geven aan vergelijking zonder het lichaam als project te maken.",
    [
      "Erken dat vergelijken pijn doet.",
      "Praat over functies van het lichaam, niet alleen uiterlijk.",
      "Beperk en bespreek beeldplatformen die onzekerheid voeden."
    ],
    [
      "Het gevoel wegwuiven met “je bent mooi”.",
      "Negatief praten over je eigen lichaam waar je kind bij is.",
      "Elk uiterlijkgesprek oplossen met advies over veranderen."
    ],
    ["“Het doet pijn om jezelf zo te bekijken. Ik wil snappen wat je ziet.”"],
    [
      ["anxious-generation", "Sociale media versterken vergelijking, statusdruk en mentale kwetsbaarheid bij jongeren."],
      ["philippa-perry", "Kinderen hebben nodig dat schaamte en gevoelens serieus genomen worden."]
    ],
    ["vergelijken-met-anderen", "sociale-media-leeftijd"]
  ),
  extraVraag(
    "complimenten-afwijzen",
    "Mijn kind wuift elk compliment weg. Moet ik harder overtuigen?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["compliment", "zelfbeeld", "afwijzen", "trots", "onzeker"],
    "Nee, harder overtuigen wordt vaak een debat. Beschrijf concreet wat je zag en laat het compliment landen zonder te eisen dat je kind het gelooft.",
    "Als een kind een compliment afwijst, beschermt het soms een negatief zelfbeeld. Een algemeen “jij bent geweldig” botst dan met wat het vanbinnen voelt.",
    "Maak complimenten feitelijker",
    "Beschrijven werkt minder bedreigend: je bleef zitten tot het af was; je vroeg hulp; je maakte ruimte voor je zus. Dat hoeft je kind niet meteen te omarmen om toch binnen te komen.",
    [
      "Geef specifieke observaties.",
      "Laat stilte na een compliment toe.",
      "Waardeer ook herstel en poging."
    ],
    [
      "In discussie gaan over of het compliment waar is.",
      "Alle onzekerheid wegprijzen.",
      "Complimenten alleen bij prestaties geven."
    ],
    ["“Je hoeft het niet met mij eens te zijn. Ik zag dat je bleef proberen.”"],
    [
      ["how-to-talk", "Beschrijvende waardering helpt kinderen zelf conclusies trekken."],
      ["nurtureshock", "Procesgerichte feedback ondersteunt een gezonder zelfbeeld dan vaste labels."]
    ],
    ["complimenten-zonder-prijzen", "kind-voelt-dom"]
  ),
  extraVraag(
    "motivatie-zakt-school",
    "Mijn kind heeft geen motivatie voor school. Hoe krijg ik die terug?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["motivatie", "school", "huiswerk", "leren", "autonomie"],
    "Motivatie groeit zelden door meer controle. Onderzoek slaap, stress, niveau, relatie met leerkracht en eigenaarschap. Maak één kleine werkbare afspraak.",
    "Geen motivatie kan veel betekenen: te moeilijk, te makkelijk, schaamte, geen overzicht, sociale zorgen of simpelweg geen gevoel van controle. Druk bovenop druk maakt school nog minder van het kind zelf.",
    "Van strijd naar consult",
    "Ga naast je kind staan: wat kost energie, wat lukt nog, wat is één experiment voor deze week? Jij bewaakt randvoorwaarden, maar je kind moet eigenaar kunnen blijven.",
    [
      "Vraag wat school nu zo zwaar maakt.",
      "Maak een kleine afspraak voor één week.",
      "Check slaap en schermen vóór je karakter bespreekt."
    ],
    [
      "Motivatie afdwingen met dreigementen.",
      "Elke avond schoolmanager spelen.",
      "Geen onderscheid maken tussen onwil en overbelasting."
    ],
    ["“Ik ga school niet van jou overnemen. Ik wil wel meezoeken wat helpt.”"],
    [
      ["self-driven-child", "Motivatie hangt sterk samen met autonomie en gevoel van controle."],
      ["nurtureshock", "Slaap en druk beïnvloeden leren en inzet vaak meer dan ouders denken."]
    ],
    ["huiswerk-politie", "slechte-schoolresultaten"]
  ),
  extraVraag(
    "kind-kan-niet-kiezen",
    "Mijn kind kan moeilijk kiezen. Help ik of neem ik over?",
    "zelfvertrouwen",
    ["peuter", "kind", "tiener"],
    ["kiezen", "twijfel", "beslissen", "autonomie", "zelfvertrouwen"],
    "Help het keuzeveld kleiner maken, maar laat de keuze waar mogelijk bij je kind. Beslissen is een vaardigheid die groeit door oefening met draaglijke gevolgen.",
    "Niet kunnen kiezen kan voortkomen uit angst om fout te kiezen. Als ouders dan steeds overnemen, krijgt het kind minder oefening in omgaan met gewone spijt.",
    "Beperk de opties",
    "Geef jonge kinderen twee opties. Geef oudere kinderen criteria: tijd, geld, energie, waarde. En leer: een niet-perfecte keuze is niet automatisch een ramp.",
    [
      "Beperk tot twee of drie opties.",
      "Vraag welk criterium het belangrijkst is.",
      "Laat kleine spijt bestaan zonder redden."
    ],
    [
      "Tien opties aanbieden en haast zetten.",
      "Elke keuze voor je kind maken.",
      "Spijt behandelen als bewijs dat kiezen gevaarlijk is."
    ],
    ["“Er is geen perfecte keuze. Welke is goed genoeg voor nu?”"],
    [
      ["self-driven-child", "Kinderen bouwen controle en competentie door echte, passende keuzes te oefenen."],
      ["good-inside", "Ouders kunnen stevig begeleiden zonder eigenaarschap weg te nemen."]
    ],
    ["durft-niet-nieuw", "te-veel-helpen"]
  ),
  extraVraag(
    "verantwoordelijkheid-geven",
    "Hoe geef ik meer verantwoordelijkheid zonder mijn kind te laten verdrinken?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["verantwoordelijkheid", "zelfstandig", "autonomie", "vertrouwen", "loslaten"],
    "Geef verantwoordelijkheid in lagen: duidelijke taak, voorspelbare check-in en ruimte voor eigen aanpak. Loslaten is niet verdwijnen.",
    "Kinderen groeien van verantwoordelijkheid, maar alleen als die past bij hun vaardigheden. Te weinig geeft afhankelijkheid; te veel geeft schaamte of chaos.",
    "Scaffolding: steun die kan verdwijnen",
    "Begin met samen plannen, laat dan een deel alleen doen, check kort, en reflecteer. Niet micromanagen, wel beschikbaar blijven.",
    [
      "Maak taak en eindpunt concreet.",
      "Spreek één checkmoment af.",
      "Bespreek achteraf wat werkte."
    ],
    [
      "Alles loslaten en daarna boos zijn dat het misloopt.",
      "Elke stap controleren.",
      "Fouten zien als bewijs dat je kind het niet kan."
    ],
    ["“Ik vertrouw jou met dit stuk. Ik check om zes uur even mee.”"],
    [
      ["self-driven-child", "Ouders functioneren best als consultant: steun geven zonder manager te worden."],
      ["nurtureshock", "Kinderen leren door uitdaging met feedback op proces en strategie."]
    ],
    ["kind-kan-niet-kiezen", "huiswerk-politie"]
  ),
  extraVraag(
    "zakgeld-verantwoordelijkheid",
    "Moet ik zakgeld geven om verantwoordelijkheid te leren?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["zakgeld", "geld", "verantwoordelijkheid", "belonen", "keuzes"],
    "Zakgeld kan helpen als oefenruimte voor keuzes, niet als constante controleknop. Laat kleine fouten toe en bespreek geld rustig.",
    "Geld leren hanteren vraagt echte ervaring: sparen, uitgeven, spijt, plannen. Als ouders elke uitgave sturen of elk tekort oplossen, blijft het kind toeschouwer.",
    "Oefengeld, geen machtsmiddel",
    "Koppel zakgeld liever aan leeftijd en afspraken dan aan elke kleine taak. Klusjes kunnen bij samenleven horen; extra taken kunnen apart betaald worden als dat past.",
    [
      "Geef een vast bedrag met duidelijke periode.",
      "Laat kleine miskopen leermomenten zijn.",
      "Bespreek sparen en geven zonder preek."
    ],
    [
      "Zakgeld gebruiken om liefde of goedkeuring te sturen.",
      "Elke keuze controleren.",
      "Alle financiële fouten meteen repareren."
    ],
    ["“Dit is jouw oefengeld. Ik denk mee, maar jij kiest.”"],
    [
      ["self-driven-child", "Eigenaarschap groeit door echte keuzes met draaglijke gevolgen."],
      ["unconditional-parenting", "Belonen en intrekken als controle kan motivatie en relatie belasten."]
    ],
    ["verantwoordelijkheid-geven", "klusjes-in-gezin"]
  ),
  extraVraag(
    "te-veel-helpen",
    "Help ik mijn kind te veel?",
    "zelfvertrouwen",
    ["peuter", "kind", "tiener"],
    ["helpen", "zelfstandig", "redden", "autonomie", "vertrouwen"],
    "Vraag jezelf af: help ik zodat mijn kind kan leren, of zodat mijn eigen ongemak zakt? Goede hulp maakt het kind groter, niet kleiner.",
    "Helpen is liefdevol. Maar te veel helpen kan de boodschap geven: jij kunt dit niet zonder mij. Vaak redden ouders niet alleen het kind, maar ook zichzelf van spanning.",
    "Help een trede lager",
    "Doe niet de hele taak. Geef een hint, hou vast, denk mee, doe één voorbeeld. Laat je kind daarna weer eigenaar worden.",
    [
      "Vraag eerst: “wil je hulp of wil je dat ik kijk?”",
      "Geef de kleinste hulp die werkt.",
      "Laat gewone frustratie bestaan."
    ],
    [
      "Alles overnemen omdat het sneller gaat.",
      "Frustratie verwarren met schade.",
      "Je kind afhankelijk houden om je nodig te voelen."
    ],
    ["“Ik geef een hint, en dan probeer jij het volgende stukje.”"],
    [
      ["self-driven-child", "Competentie en controle groeien wanneer ouders niet alles managen."],
      ["conscious-parent", "Ouders onderzoeken of hulp uit het echte kind of uit eigen angst komt."]
    ],
    ["kind-snel-gefrustreerd", "verantwoordelijkheid-geven"]
  ),
  extraVraag(
    "durft-geen-nee-zeggen",
    "Mijn kind durft geen nee te zeggen tegen anderen. Hoe oefen ik dat?",
    "zelfvertrouwen",
    ["kind", "tiener"],
    ["nee zeggen", "weerbaarheid", "vrienden", "grenzen", "assertief"],
    "Oefen nee zeggen als vaardigheid, niet als karaktereigenschap. Geef zinnen, rollenspel en toestemming om ongemak te verdragen.",
    "Veel kinderen zijn bang dat nee zeggen liefde, vriendschap of status kost. Zeker gevoelige kinderen kiezen dan voor aanpassen. Weerbaarheid groeit door thuis te mogen oefenen met grenzen.",
    "Maak nee normaal",
    "Laat je kind ook thuis beleefd nee zeggen. Speel situaties na: speelgoed uitlenen, appgroepdruk, feestje, aanraking. Een kind dat thuis geen nee mag, zegt buiten moeilijker nee.",
    [
      "Geef korte voorbeeldzinnen.",
      "Oefen met rollenspel zonder spot.",
      "Respecteer zelf vaker de nee van je kind."
    ],
    [
      "Je kind dwingen altijd aardig mee te doen.",
      "Nee zeggen verwarren met onbeleefdheid.",
      "Alle sociale ongemak weg willen nemen."
    ],
    ["“Nee, ik wil dat niet. Je mag boos zijn, maar mijn antwoord blijft nee.”"],
    [
      ["good-inside", "Kinderen leren grenzen houden door thuis te ervaren dat gevoelens en grenzen samen mogen bestaan."],
      ["self-driven-child", "Autonomie en eigen stem zijn beschermende factoren tegen stress en druk."]
    ],
    ["kind-kan-niet-kiezen", "regels-bij-speelafspraak"]
  ),
  extraVraag(
    "tablet-afpakken-meltdown",
    "Scherm uit leidt tot totale meltdown. Wat doe ik vooraf?",
    "schermen",
    ["peuter", "kind"],
    ["tablet", "stoppen", "meltdown", "schermtijd", "overgang"],
    "Maak stoppen voorspelbaar en help de overgang. Schermen zijn sterk ontworpen om door te gaan; een kind heeft externe structuur nodig.",
    "Veel schermstrijd ontstaat niet omdat kinderen slecht zijn, maar omdat digitale prikkels weinig natuurlijke stopmomenten hebben. Het brein wil nog één filmpje, nog één level, nog één beloning.",
    "Stoppen begint vóór starten",
    "Spreek vooraf af wat het einde is: één aflevering, timer plus overgangsactiviteit, of samen afsluiten. Laat het kind niet zelf uit een eindeloze stroom moeten loskomen.",
    [
      "Kies content met duidelijk einde.",
      "Geef vijf en één minuut waarschuwing.",
      "Plan na schermen een lichamelijke overgang."
    ],
    [
      "Scherm geven zonder eindafspraak.",
      "Midden in een level plots afpakken als patroon.",
      "Een meltdown lezen als bewijs dat je nooit meer schermen mag."
    ],
    ["“Na deze aflevering gaat hij uit. Daarna gaan we naar buiten.”"],
    [
      ["anxious-generation", "Digitale producten zijn ontworpen om aandacht vast te houden; kinderen hebben collectieve grenzen nodig."],
      ["whole-brain-child", "Overgangen vragen regulatie; bij overspoeling werkt redeneren minder."]
    ],
    ["telefoon-afpakken-ruzie", "schermtijd-timer"]
  ),
  extraVraag(
    "youtube-angstbeelden",
    "Mijn kind zag enge beelden online. Hoe help ik?",
    "schermen",
    ["kind", "tiener"],
    ["youtube", "enge beelden", "nachtmerrie", "online", "angst"],
    "Neem het serieus, ook als jij het beeld overdreven vindt. Help het brein ordenen: wat zag je, wat is echt, wat doen we nu om veilig te zijn?",
    "Online beelden kunnen plots en intens binnenkomen. Voor kinderen is het verschil tussen echt, nagespeeld, gemonteerd en algoritmisch niet altijd duidelijk. Angst heeft dan uitleg en nabijheid nodig.",
    "Maak het beeld kleiner",
    "Laat je kind vertellen zonder opnieuw eindeloos te kijken. Leg kort uit wat montage of algoritmes doen. Sluit af met iets regulerends: licht, nabijheid, rustig ritueel.",
    [
      "Luister zonder te lachen.",
      "Leg verschil uit tussen beeld en directe werkelijkheid.",
      "Pas instellingen en kijkafspraken aan."
    ],
    [
      "Zeggen: “dat is toch nep, stop ermee”.",
      "Samen blijven doorklikken uit nieuwsgierigheid.",
      "Je kind alleen laten met nachtelijke angst."
    ],
    ["“Dat beeld zit nog in je hoofd. We helpen je brein herinneren dat je hier veilig bent.”"],
    [
      ["anxious-generation", "Online omgevingen stellen kinderen bloot aan prikkels waarvoor hun brein nog bescherming nodig heeft."],
      ["gottman-eq", "Angst valideren maakt geruststelling en probleemoplossing mogelijk."]
    ],
    ["bang-donkere-kamer", "online-pesten"]
  ),
  extraVraag(
    "groepsapp-buitensluiten",
    "Mijn kind wordt buitengesloten in de groepsapp. Wat kan ik doen?",
    "schermen",
    ["kind", "tiener"],
    ["groepsapp", "buitensluiten", "whatsapp", "vrienden", "pesten"],
    "Behandel digitale uitsluiting als echte sociale pijn. Verzamel rustig informatie, steun je kind en schakel school of andere ouders in als het structureel is.",
    "Voor kinderen stopt de schooldag niet meer aan de poort. Groepsapps kunnen vriendschap verlengen, maar ook statusdruk en buitensluiten 24/7 maken.",
    "Eerst steun, dan strategie",
    "Vraag wat je kind wil: luisteren, meedenken, bewijs bewaren, school betrekken. Neem het serieus zonder meteen alles over te nemen, tenzij veiligheid of pesten speelt.",
    [
      "Erken dat online buitensluiten echt pijn doet.",
      "Maak screenshots bij pesten of dreiging.",
      "Bespreek meld- en blokkeeropties zonder schaamte."
    ],
    [
      "Zeggen dat online niet echt is.",
      "Stiekem de telefoon doorzoeken als eerste stap.",
      "Je kind alleen laten omdat je technologie ongemakkelijk vindt."
    ],
    ["“Dit is echte pijn, ook al gebeurt het op een scherm.”"],
    [
      ["anxious-generation", "Smartphones verplaatsen sociale vergelijking en uitsluiting naar permanente online ruimtes."],
      ["hold-on-to-your-kids", "Tieners hebben ouderlijke nabijheid nodig wanneer peers en online groepen veel macht krijgen."]
    ],
    ["verdriet-om-vriendschap", "online-pesten"]
  ),
  extraVraag(
    "gamen-en-woede",
    "Mijn kind wordt woedend van gamen. Verbieden?",
    "schermen",
    ["kind", "tiener"],
    ["gamen", "woede", "verlies", "schermtijd", "regels"],
    "Niet automatisch, maar gamen heeft duidelijke kaders nodig. Kijk naar slaap, duur, type game, online druk en herstel na verlies.",
    "Games combineren competitie, beloning, frustratie en sociale druk. Voor sommige kinderen is dat precies te veel. De woede na gamen is informatie over grens, niet alleen over karakter.",
    "Maak herstel een voorwaarde",
    "Als je kind na gamen niet meer terug kan naar het gezin, moet het plan anders: korter, vroeger, offline, andere game of pauzes. Vrijheid groeit met regulatie.",
    [
      "Spreek speeltijd en stopmoment vooraf af.",
      "Observeer hoe je kind na gamen terugkeert.",
      "Koppel meer vrijheid aan herstelvaardigheid."
    ],
    [
      "Eindeloos discussiëren midden in een online match.",
      "Slaap en huiswerk laten wijken voor gamen.",
      "Woede negeren omdat gamen normaal is."
    ],
    ["“Als gamen je zo lang uit jezelf haalt, moeten we het plan aanpassen.”"],
    [
      ["anxious-generation", "Digitale omgevingen kunnen spel, beloning en sociale druk intensiveren."],
      ["self-driven-child", "Vrijheid werkt beter wanneer kinderen ook verantwoordelijkheid en zelfregulatie oefenen."]
    ],
    ["tablet-afpakken-meltdown", "woede-bij-verliezen"]
  ),
  extraVraag(
    "telefoon-in-slaapkamer",
    "Moet de telefoon uit de slaapkamer?",
    "schermen",
    ["tiener"],
    ["telefoon", "slaapkamer", "slaap", "sociale media", "nacht"],
    "Ja, als basisregel is dat sterk. Slaap, privacy en mentale rust zijn te belangrijk om naast een permanent sociaal alarm te leggen.",
    "Een telefoon in de slaapkamer is niet alleen een apparaat; het is de hele peerwereld naast het kussen. Meldingen, scrollen, vergelijking en geheimhouding vreten aan slaap en rust.",
    "Maak het een gezinsnorm",
    "Leg telefoons buiten slaapkamers op een vaste laadplek. Niet als straf, maar als hygiëne. Het werkt beter wanneer volwassenen meedoen en de regel collectief is.",
    [
      "Maak een laadplek buiten slaapkamers.",
      "Gebruik een gewone wekker.",
      "Leg uit dat dit over slaap en rust gaat, niet wantrouwen."
    ],
    [
      "De regel alleen opleggen na een incident.",
      "Zelf tot middernacht naast je kind scrollen.",
      "Slaap onderschatten bij tieners."
    ],
    ["“Telefoons slapen beneden. Mensen slapen boven.”"],
    [
      ["anxious-generation", "Haidt adviseert telefoonvrije slaapruimtes en collectieve normen rond smartphones."],
      ["nurtureshock", "Slaaptekort heeft grote gevolgen voor stemming, leren en zelfbeheersing."]
    ],
    ["slaap-hoe-belangrijk", "familieafspraken-smartphone"]
  )
];
