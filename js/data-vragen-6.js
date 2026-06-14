// ============================================================
// EHBO — Vragen, deel 6: extra cases over motivatie, schermen, band & gezin
// ============================================================

const VRAGEN_6 = [
  {
    id: "slechte-schoolresultaten",
    vraag: "Mijn kind haalt slechte punten. Hoe reageer ik helpend?",
    thema: "zelfvertrouwen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["punten", "cijfers", "rapport", "school", "falen", "leren", "toets"],
    kort: "Reageer op cijfers als informatie, niet als identiteit. Eerst kalmte en nieuwsgierigheid, dan samen kijken naar slaap, aanpak, hulp en eigenaarschap.",
    blokken: [
      { tekst: "Een slecht cijfer voelt voor ouders vaak als alarm: toekomst, motivatie, discipline. Voor het kind voelt het vaak als schaamte. Als jij daar paniek bovenop legt, wordt leren gevaarlijk. <strong>Een cijfer vertelt iets over aanpak en omstandigheden, niet over waarde.</strong>" },
      { kop: "Consultant, geen crisismanager", tekst: "Stixrud & Johnson adviseren de ouder als consultant: beschikbaar, niet eigenaar. NurtureShock wijst op slaap en procesfeedback. Vraag dus wat je kind denkt dat er gebeurde, wat het nodig heeft en welke kleine aanpassing het wil proberen." }
    ],
    doeDit: [
      "Begin met: “wat denk jij dat er gebeurde?”",
      "Bekijk leerstrategie, slaap, planning en begrip van de stof.",
      "Bied hulp aan zonder het schoolwerk over te nemen."
    ],
    vermijd: [
      "Cijfers koppelen aan liefde, trots of schaamte.",
      "Meteen straffen of belonen op punten.",
      "Een slecht rapport gebruiken als karakterdiagnose."
    ],
    zegDit: [
      "“Dit cijfer is informatie. We gaan kijken wat het vertelt.”",
      "“Wil je hulp bij plannen, begrijpen of oefenen?”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "School hoort bij het eigenaarschap van het kind; ouders helpen als consultant in plaats van manager." },
      { boek: "nurtureshock", detail: "Slaap, procesfeedback en leren wegen zwaarder dan druk op prestatie-identiteit." },
      { boek: "unconditional-parenting", detail: "Cijfers belonen of bestraffen maakt leren afhankelijk van externe goedkeuring." }
    ],
    gerelateerd: ["huiswerk-oorlog", "faalangst-perfectionisme", "goed-prijzen"]
  },
  {
    id: "sport-hobby-stoppen",
    vraag: "Mijn kind wil stoppen met sport of hobby. Laat ik dat toe?",
    thema: "zelfvertrouwen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["hobby", "sport", "stoppen", "doorzetten", "motivatie", "muziekles", "club"],
    kort: "Niet automatisch pushen en niet automatisch laten vallen. Onderzoek waarom: past het niet, is het moeilijk, sociaal onveilig of gewoon een dip? Maak afspraken over afronden en kiezen.",
    blokken: [
      { tekst: "Stoppen kan vermijden zijn, maar ook gezonde zelfkennis. De kunst is het verschil onderzoeken zonder strijd. <strong>Doorzetten is waardevol; vastzitten in iets dat niet klopt is dat niet.</strong>" },
      { kop: "Eigenaarschap en afspraak", tekst: "Stixrud & Johnson leggen motivatie bij autonomie en competentie. Je kunt zeggen: dit seizoen maken we af omdat teamafspraken tellen, en daarna kiezen we opnieuw. NurtureShock helpt om inzet en strategie te bespreken in plaats van talent of falen." }
    ],
    doeDit: [
      "Vraag: “wil je stoppen omdat het niet past of omdat het moeilijk wordt?”",
      "Spreek een eerlijke afronding af als anderen op je kind rekenen.",
      "Laat je kind meedenken over een nieuwe keuze of pauze."
    ],
    vermijd: [
      "Stoppen meteen lui noemen.",
      "Je eigen droom via de hobby van je kind blijven najagen.",
      "Een kind eindeloos laten doorgaan uit gezichtsverlies."
    ],
    zegDit: [
      "“Ik wil snappen welk stuk je weg wil: de activiteit, de druk of het moeilijke oefenen?”",
      "“We maken deze afspraak netjes af en beslissen daarna opnieuw.”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "Autonomie en competentie bepalen duurzame motivatie; ouders adviseren zonder eigenaar te worden." },
      { boek: "conscious-parent", detail: "Ouders onderzoeken of ze reageren vanuit het echte kind of vanuit eigen verwachtingen." },
      { boek: "nurtureshock", detail: "Proces en inspanning bespreken houdt leren los van vaste talentlabels." }
    ],
    gerelateerd: ["opgeven-snel", "faalangst-perfectionisme", "slechte-schoolresultaten"]
  },
  {
    id: "vergelijken-met-anderen",
    vraag: "Mijn kind vergelijkt zichzelf constant met anderen. Wat zeg ik?",
    thema: "zelfvertrouwen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["vergelijken", "jaloers", "onzeker", "vrienden", "sociale media", "zelfbeeld"],
    kort: "Neem de pijn serieus en verleg de meetlat naar groei, waarden en eigen pad. Vergelijking krimpt door gezien worden, niet door “trek je er niets van aan”.",
    blokken: [
      { tekst: "Vergelijken is menselijk, maar voor kinderen en tieners kan het een permanente jury worden. Zeker online ziet je kind vooral andermans hoogtepunten. <strong>Je helpt niet door de vergelijking belachelijk te maken, maar door het kompas te verplaatsen.</strong>" },
      { kop: "Eigen meetlat bouwen", tekst: "NurtureShock laat zien hoe gevaarlijk vaste labels en rangorde kunnen zijn. Faber & Mazlish kiezen beschrijving: wat deed jij vandaag dat gisteren nog moeilijk was? Haidt waarschuwt dat sociale media vergelijking meetbaar en eindeloos maakt." }
    ],
    doeDit: [
      "Erken: “dat kan echt steken.”",
      "Vraag naar eigen groei: “wat wil jij beter kunnen dan vorige maand?”",
      "Bespreek sociale media als vergelijkingmachine."
    ],
    vermijd: [
      "“Daar moet je gewoon boven staan.”",
      "Zelf vergelijken om te motiveren.",
      "Alle onzekerheid wegpraten met snelle complimenten."
    ],
    zegDit: [
      "“Je kijkt nu naar hun buitenkant en jouw binnenkant. Dat voelt oneerlijk.”",
      "“Wat is een meetlat die wél van jou is?”"
    ],
    bronnen: [
      { boek: "nurtureshock", detail: "Prestatie- en eigenschapslabels kunnen kinderen afhankelijk maken van rangorde en bevestiging." },
      { boek: "how-to-talk", detail: "Beschrijvende waardering helpt kinderen zichzelf zien zonder vergelijking." },
      { boek: "anxious-generation", detail: "Sociale media versterken voortdurende sociale vergelijking en meetbare status." }
    ],
    gerelateerd: ["sociale-media-onzeker", "goed-prijzen", "faalangst-perfectionisme"]
  },
  {
    id: "zelfstandig-proberen",
    vraag: "Mijn kind durft niets alleen te proberen. Hoe geef ik vertrouwen?",
    thema: "zelfvertrouwen",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["zelfstandig", "durven", "proberen", "helpen", "angst", "zelfvertrouwen"],
    kort: "Geef niet meteen hulp, maar ook geen koude sprong. Bied een steiger: eerst samen, dan jij dichtbij, dan jij kijkt. Zelfvertrouwen groeit uit ervaren competentie.",
    blokken: [
      { tekst: "“Ik kan het niet” betekent vaak: ik weet niet of ik de frustratie aankan. Te snel helpen bevestigt dat. Te snel loslaten overspoelt. <strong>De beste hulp verdwijnt langzaam.</strong>" },
      { kop: "Steiger bouwen", tekst: "Stixrud & Johnson schrijven over competentie en controle. Siegel & Bryson zien proberen als bovenbrein-oefening. Zeg dus niet alleen “je kan het”, maar maak de eerste stap zichtbaar en laat je kind eigenaar blijven." }
    ],
    doeDit: [
      "Vraag: “welk stukje wil je zelf proberen?”",
      "Doe één voorbeeld voor en geef dan terug.",
      "Blijf nabij zonder over te nemen."
    ],
    vermijd: [
      "Alles oplossen omdat het sneller gaat.",
      "“Je bent toch groot genoeg” gebruiken als druk.",
      "Zelfvertrouwen verwarren met alleen gelaten worden."
    ],
    zegDit: [
      "“Ik doe de eerste, jij doet de tweede.”",
      "“Ik blijf hier. Jij probeert.”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "Competentie en autonomie groeien wanneer het kind echte controle ervaart." },
      { boek: "whole-brain-child", detail: "Plannen, proberen en frustratie dragen zijn ontwikkelende bovenbreinvaardigheden." },
      { boek: "power-of-showing-up", detail: "Een veilige basis maakt verkennen en zelfstandigheid mogelijk." }
    ],
    gerelateerd: ["kind-angstig", "opgeven-snel", "verlegen-kind"]
  },
  {
    id: "keuzes-laten-maken",
    vraag: "Welke keuzes kan ik mijn kind zelf laten maken?",
    thema: "zelfvertrouwen",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["keuzes", "autonomie", "zelfstandigheid", "controle", "verantwoordelijkheid", "opvoeden"],
    kort: "Geef zoveel mogelijk echte keuzes die je kind kan dragen. Jij bewaakt veiligheid en waarden; je kind oefent voorkeur, planning, fouten en herstel.",
    blokken: [
      { tekst: "Autonomie is geen luxe voor later. Kinderen bouwen zelfsturing door echte beslissingen te nemen, inclusief kleine fouten. <strong>Elke passende keuze zegt: jij bent iemand die invloed heeft.</strong>" },
      { kop: "Jouw kader, hun keuze", tekst: "Stixrud & Johnson zijn hier het duidelijkst: gevoel van controle beschermt tegen stress. Voor peuters zijn dat twee opties binnen jouw grens; voor tieners steeds meer keuzes over huiswerkplanning, kleding, hobby's, geld en sociaal leven. Haidt voegt toe: echte wereld-verantwoordelijkheid is gezond." }
    ],
    doeDit: [
      "Geef peuters keuze in hoe, niet of: rode of blauwe jas.",
      "Geef kinderen eigenaarschap over taken met duidelijke randvoorwaarden.",
      "Geef tieners groeiende vrijheid gekoppeld aan veiligheid en herstel."
    ],
    vermijd: [
      "Schijnkeuzes geven waar maar één antwoord mag.",
      "Alle risico's wegmanagen.",
      "Keuzes terugpakken zodra je kind het anders doet dan jij."
    ],
    zegDit: [
      "“Dit stuk beslis ik. Binnen dat kader kies jij.”",
      "“Ik vertrouw je met deze keuze. Als het misloopt, herstellen we.”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "Gevoel van controle is een kernbuffer tegen stress en basis voor motivatie." },
      { boek: "anxious-generation", detail: "Kinderen hebben meer echte wereld-autonomie en verantwoordelijkheid nodig om veerkracht te bouwen." },
      { boek: "unconditional-parenting", detail: "Werk mét kinderen door hen waar mogelijk te betrekken bij beslissingen." }
    ],
    gerelateerd: ["huiswerk-oorlog", "zelfstandig-proberen", "nee-zeggen-zonder-drama"]
  },
  {
    id: "tablet-restaurant",
    vraag: "Is een tablet op restaurant of in de wachtzaal erg?",
    thema: "schermen",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["tablet", "restaurant", "wachtzaal", "verveling", "schermtijd", "peuter"],
    kort: "Af en toe is geen ramp. Maar als elk leeg moment een scherm krijgt, mist je kind oefening in wachten, vervelen en sociaal meedoen. Gebruik het bewust, niet automatisch.",
    blokken: [
      { tekst: "Iedere ouder gebruikt soms een scherm om een situatie haalbaar te houden. Dat is menselijk. De vraag is of het scherm noodgereedschap is of standaard-reflex. <strong>Verveling en wachten zijn geen defecten; het zijn vaardigheden in opleiding.</strong>" },
      { kop: "Wat schermen verdringen", tekst: "Haidt noemt de opportuniteitskost: wat gebeurt er niet wanneer het scherm aan staat? Sunderland wijst op jonge zelfregulatie: kinderen hebben oefening nodig met kleine frustraties, maar wel op een haalbare schaal." }
    ],
    doeDit: [
      "Neem eerst schermvrije wachtspullen mee: potlood, boekje, klein spel.",
      "Gebruik een scherm bewust met begin en einde.",
      "Vertel vooraf wat je verwacht: zitten, wachten, even praten, daarna eventueel scherm."
    ],
    vermijd: [
      "Het scherm automatisch geven zodra er stilte valt.",
      "Eindeloze feeds of autoplay in wachtmomenten.",
      "Jezelf veroordelen om één noodtablet op een zware dag."
    ],
    zegDit: [
      "“We oefenen eerst even wachten. Daarna kijken we of een filmpje nodig is.”",
      "“Eén aflevering. Als die klaar is, gaat de tablet weg.”"
    ],
    bronnen: [
      { boek: "anxious-generation", detail: "Schermen verdringen verveling, vrij spel en echte interactie; dat effect telt meer dan minuten alleen." },
      { boek: "science-of-parenting", detail: "Zelfregulatie ontwikkelt door begeleide oefening met frustratie en wachten." },
      { boek: "whole-brain-child", detail: "Wachten en impulscontrole zijn vaardigheden die kinderen stap voor stap oefenen." }
    ],
    gerelateerd: ["schermtijd-hoeveel", "kind-onderbreekt", "youtube-autoplay"]
  },
  {
    id: "youtube-autoplay",
    vraag: "YouTube blijft maar doorgaan. Hoe krijg ik daar grip op?",
    thema: "schermen",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["youtube", "autoplay", "algoritme", "filmpjes", "schermtijd", "tablet"],
    kort: "Zet het einde terug in het systeem. Autoplay en aanbevelingen zijn gemaakt om stoppen moeilijk te maken. Kies eindige content, kijk mee en maak de stopregel vooraf.",
    blokken: [
      { tekst: "YouTube is geen neutrale tv-zender; het systeem wil de volgende klik. Een kind met een nog groeiende stopknop is daar slecht tegen gewapend. <strong>Je hoeft dus niet te wachten op zelfbeheersing die het ontwerp actief ondermijnt.</strong>" },
      { kop: "Eindigheid ontwerpen", tekst: "Haidt waarschuwt voor feeds en algoritmes; Sunderland voor jonge remfuncties. Kies liever één aflevering, een playlist die jij maakt of samen kijken. Autoplay uit, scherm zichtbaar in de leefruimte, stopmoment vooraf." }
    ],
    doeDit: [
      "Zet autoplay uit en gebruik vooraf gekozen playlists.",
      "Kies content met een duidelijk einde.",
      "Laat het scherm in gedeelde ruimtes blijven."
    ],
    vermijd: [
      "Een jong kind alleen laten zwerven door aanbevelingen.",
      "Stoppen pas aankondigen op het moment zelf.",
      "Schrikbeelden gebruiken in plaats van instellingen en routines."
    ],
    zegDit: [
      "“We kiezen vooraf twee filmpjes. Daarna is YouTube klaar.”",
      "“Het volgende filmpje beslist het algoritme niet; dat beslissen wij.”"
    ],
    bronnen: [
      { boek: "anxious-generation", detail: "Algoritmische feeds en autoplay zijn ontworpen om aandacht vast te houden en verdringen gezonde activiteiten." },
      { boek: "science-of-parenting", detail: "Kinderen hebben externe structuur nodig waar interne remmen nog niet volgroeid zijn." },
      { boek: "hold-on-to-your-kids", detail: "Schermgebruik hoort gezinsrituelen en ouderlijke oriëntatie niet te vervangen." }
    ],
    gerelateerd: ["schermtijd-hoeveel", "gamen-stoppen-drama", "tablet-restaurant"]
  },
  {
    id: "telefoon-aan-tafel",
    vraag: "Hoe krijg ik telefoons weg aan tafel, ook die van ons?",
    thema: "schermen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["telefoon", "tafel", "eten", "gezin", "schermvrij", "voorbeeld"],
    kort: "Maak het een gezinsritueel, geen kinderregel. Telefoons weg aan tafel werkt pas echt als volwassenen meedoen. De tafel is een hechtingsanker.",
    blokken: [
      { tekst: "Een telefoonvrije tafel klinkt klein, maar is groot: het is een dagelijks moment waarop gezichten belangrijker zijn dan meldingen. Als alleen kinderen hun toestel moeten wegleggen, leren ze vooral hypocrisie. <strong>De echte regel is wat volwassenen voordoen.</strong>" },
      { kop: "Ritueel beschermen", tekst: "Neufeld & Maté zien gezinsrituelen als hechtingsankers. Haidt wijst erop dat schermen echte interactie verdringen. Maak dus een laadmand, vaste plek of tafelregel voor iedereen: ook werktelefoons, ook “even snel”." }
    ],
    doeDit: [
      "Maak een gezamenlijke telefoonplek buiten de tafel.",
      "Start met één haalbare maaltijd per dag of enkele vaste avonden.",
      "Gebruik tafelvragen die geen verhoor zijn."
    ],
    vermijd: [
      "Kinderen corrigeren terwijl je eigen telefoon naast je bord ligt.",
      "De tafel vullen met alleen planning en kritiek.",
      "Telefoonvrij maken als straf na ruzie."
    ],
    zegDit: [
      "“Aan tafel zijn gezichten belangrijker dan meldingen. Mijn telefoon gaat ook weg.”",
      "“Als het dringend is, sta je even op. De tafel blijft schermvrij.”"
    ],
    bronnen: [
      { boek: "hold-on-to-your-kids", detail: "Gezinsrituelen beschermen de ouder-kindoriëntatie tegen peers en schermen." },
      { boek: "anxious-generation", detail: "Schermen verdringen echte interactie; collectieve normen werken beter dan individuele strijd." },
      { boek: "peaceful-parent", detail: "Verbinding is de bron van invloed; dagelijkse rituelen vullen die verbinding." }
    ],
    gerelateerd: ["schermtijd-hoeveel", "band-versterken", "ouder-op-telefoon"]
  },
  {
    id: "online-ruzie",
    vraag: "Mijn kind zit in online ruzie of groepschatdrama. Wat doe ik?",
    thema: "schermen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["groepschat", "online ruzie", "pesten", "whatsapp", "sociale media", "vrienden"],
    kort: "Eerst luisteren en veiligheid checken, niet meteen de telefoon afpakken. Online ruzie is echte sociale pijn. Help vertragen, screenshots bewaren bij grensoverschrijding en offline steun zoeken.",
    blokken: [
      { tekst: "Voor volwassenen lijkt groepschatdrama soms klein. Voor een kind kan het voelen alsof de hele klas in de kamer staat. Haidt beschrijft precies dat probleem: peer-oordeel wordt permanent en draagbaar. <strong>Doe dus niet alsof het virtueel is en daarom niet echt.</strong>" },
      { kop: "Vertragen vóór reageren", tekst: "Gottman: eerst valideren. Stixrud & Johnson: wees de niet-angstige adviseur. Help je kind niet in paniek terugtypen. Lees samen, vraag wat het wil bereiken, maak eventueel screenshots en betrek school of ouders bij pesten, dreiging of uitsluiting." }
    ],
    doeDit: [
      "Vraag: “wil je dat ik luister, meedenk of ingrijp?”",
      "Leer pauzeren voor antwoorden: typen, wachten, herlezen.",
      "Bewaar bewijs bij pesten of bedreiging en schakel hulp in."
    ],
    vermijd: [
      "Meteen de telefoon afpakken waardoor je kind volgende keer niets vertelt.",
      "Online pijn minimaliseren.",
      "Zelf boos berichten naar andere kinderen sturen."
    ],
    zegDit: [
      "“Dit is echte sociale pijn. Ik snap dat het binnenkomt.”",
      "“We reageren niet terwijl je hart nog racet.”"
    ],
    bronnen: [
      { boek: "anxious-generation", detail: "Sociale media en groepschats maken peer-beoordeling permanent en moeilijk te ontvluchten." },
      { boek: "gottman-eq", detail: "Emotie eerst erkennen houdt het kind bereikbaar voor probleemoplossing." },
      { boek: "self-driven-child", detail: "Een niet-angstige ouder helpt tieners keuzes overzien zonder direct alles over te nemen." }
    ],
    gerelateerd: ["sociale-media-onzeker", "geheimen-privacy", "moeilijke-onderwerpen-tiener"]
  },
  {
    id: "enge-online-content",
    vraag: "Mijn kind zag iets engs online. Hoe vang ik dat op?",
    thema: "schermen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["eng", "online", "filmpje", "nachtmerrie", "internet", "angst", "content"],
    kort: "Blijf kalm en maak het bespreekbaar. Eng beeld blijft sterker hangen als een kind er alleen mee zit. Benoem, orden het verhaal en zet betere digitale grenzen.",
    blokken: [
      { tekst: "Een eng beeld kan in een kinderbrein blijven rondspoken, zeker als het kind zich schaamt of bang is voor straf. <strong>De eerste hulp is niet: waarom keek je daarnaar, maar: je bent veilig en we praten erover.</strong>" },
      { kop: "Name it to tame it", tekst: "Siegel & Bryson leggen uit dat woorden en verhaal helpen om overweldigende ervaringen te integreren. Laat je kind vertellen wat het zag, wat het dacht en wat het nu voelt. Daarna komen praktische grenzen: filters, meekijken, accounts, geen alleen-scrollen." }
    ],
    doeDit: [
      "Vraag rustig wat je kind zag zonder dramatische gezichten.",
      "Help het verhaal ordenen: begin, midden, einde, nu veilig.",
      "Pas instellingen en toezicht aan zonder schaamte."
    ],
    vermijd: [
      "Boos worden waardoor je kind het de volgende keer verzwijgt.",
      "Zeggen dat het maar nep is als het lijf nog bang voelt.",
      "Alleen geruststellen zonder digitale oorzaak aan te pakken."
    ],
    zegDit: [
      "“Dat beeld schrok je brein. Je bent nu hier en veilig.”",
      "“Vertel het in stukjes. Ik kan het aan.”"
    ],
    bronnen: [
      { boek: "whole-brain-child", detail: "Name it to tame it: woorden en verhaal helpen een overweldigende ervaring verwerken." },
      { boek: "anxious-generation", detail: "Kinderen zijn online vaak onderbeschermd tegen krachtige content en algoritmes." },
      { boek: "power-of-showing-up", detail: "Safe, seen en soothed blijven essentieel wanneer een kind bang of beschaamd is." }
    ],
    gerelateerd: ["kind-angstig", "youtube-autoplay", "geheimen-privacy"]
  },
  {
    id: "reconnect-drukke-week",
    vraag: "We hadden een drukke week en ik was kortaf. Hoe herstel ik verbinding?",
    thema: "band",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["druk", "verbinding", "herstel", "kortaf", "tijd", "relatie"],
    kort: "Maak het klein en concreet: benoem je afwezigheid, herstel zonder schuld bij je kind te leggen en plan een kort moment volledige aandacht. Eén goed kwartier kan veel repareren.",
    blokken: [
      { tekst: "Drukke weken gebeuren. Het risico is niet dat je eens te weinig beschikbaar was, maar dat niemand het benoemt en het patroon gewoon doorgaat. <strong>Herstel begint met terugkomen, niet met perfect compenseren.</strong>" },
      { kop: "Repair en speciale tijd", tekst: "Perry en Kennedy benadrukken herstel na breuk. Markham geeft het praktische medicijn: speciale tijd. Zeg: “ik was kortaf”, zonder maar, en geef je kind daarna een klein stuk onverdeelde aandacht waarin jij volgt." }
    ],
    doeDit: [
      "Benoem je aandeel kort en zonder verdediging.",
      "Plan tien minuten telefoonvrije kind-kiest-tijd.",
      "Herhaal een paar dagen kleine verbinding in plaats van één groot uitje."
    ],
    vermijd: [
      "Cadeaus gebruiken als vervanging voor aandacht.",
      "Je kind laten zeggen dat het niet erg was.",
      "De drukte uitleggen alsof je kortafheid daardoor zijn schuldvrije herstel niet nodig heeft."
    ],
    zegDit: [
      "“Ik was deze week vaak kortaf. Dat lag aan mijn drukte, niet aan jou.”",
      "“Ik wil even helemaal bij jou zijn. Jij kiest wat we doen.”"
    ],
    bronnen: [
      { boek: "philippa-perry", detail: "Breuk en herstel zijn belangrijker dan perfecte beschikbaarheid." },
      { boek: "good-inside", detail: "Repair neemt verantwoordelijkheid en herschrijft de herinnering van het kind." },
      { boek: "peaceful-parent", detail: "Speciale tijd vult verbinding gericht aan en vermindert moeilijk gedrag." }
    ],
    gerelateerd: ["zelf-ontploft", "band-versterken", "geen-verbinding-voelen"]
  },
  {
    id: "co-ouderschap-overgangen",
    vraag: "Mijn kind is van slag bij wissels tussen twee huizen. Wat helpt?",
    thema: "band",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["co-ouderschap", "scheiding", "wissel", "twee huizen", "overgang", "verdriet"],
    kort: "Overgangen vragen extra veiligheid. Maak wissels voorspelbaar, erken gemis naar de andere ouder en vermijd dat je kind emotioneel tussen twee kampen moet kiezen.",
    blokken: [
      { tekst: "Zelfs in goed co-ouderschap zijn wissels groot: spullen, regels, geuren, loyaliteit, afscheid. Een kind kan blij zijn jou te zien en tegelijk verdrietig om de andere ouder. <strong>Die twee waarheden moeten naast elkaar mogen bestaan.</strong>" },
      { kop: "Geen loyaliteitslast", tekst: "Perry zou scherp kijken naar volwassen emoties die op het kind belanden. Kennedy's two things are true helpt: “je mist papa én je bent hier welkom.” Neufeld & Maté wijzen op overgangsrituelen: verzamel je kind opnieuw voordat je vragen, planning of correctie begint." }
    ],
    doeDit: [
      "Gebruik vaste wisselrituelen en zichtbare planning.",
      "Erken gemis naar de andere ouder zonder competitie.",
      "Geef landtijd na aankomst: eten, rust, nabijheid."
    ],
    vermijd: [
      "De andere ouder ondervragen via je kind.",
      "Gekwetst reageren als je kind de andere ouder mist.",
      "Direct na de wissel regels en taken stapelen."
    ],
    zegDit: [
      "“Je mag papa missen en blij zijn hier te zijn. Allebei klopt.”",
      "“Eerst landen. Je hoeft nog niets te vertellen.”"
    ],
    bronnen: [
      { boek: "good-inside", detail: "Two things are true helpt tegen emotionele zwart-witdruk bij kinderen." },
      { boek: "philippa-perry", detail: "Ouders moeten hun eigen pijn dragen zonder die als loyaliteitslast bij het kind te leggen." },
      { boek: "hold-on-to-your-kids", detail: "Overgangen vragen opnieuw verzamelen: warme verbinding vóór sturing." }
    ],
    gerelateerd: ["huilen-opvang-afscheid", "kind-kiest-andere-ouder", "reconnect-drukke-week"]
  },
  {
    id: "tijdgebrek-quality-time",
    vraag: "Ik heb weinig tijd. Wat is de kleinste vorm van quality time?",
    thema: "band",
    leeftijd: ["baby", "peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["quality time", "tijdgebrek", "verbinding", "druk", "ritueel", "aandacht"],
    kort: "Klein werkt als het echt is. Vijf tot tien minuten volle aandacht zonder telefoon, correctie of agenda kan meer doen dan een lange dag half aanwezig zijn.",
    blokken: [
      { tekst: "Quality time klinkt alsof je uren moet vrijmaken. De boeken maken het haalbaarder: verbinding groeit in herhaalde micro-momenten. <strong>Een kind voelt het verschil tussen tien minuten helemaal en een uur half.</strong>" },
      { kop: "Rituelen als hefboom", tekst: "Markham noemt speciale tijd preventief onderhoud. Neufeld & Maté spreken over collecten: ogen, glimlach, warmte bij elk weerzien. Het hoeft niet groots; het moet wel echt en herhaalbaar zijn." }
    ],
    doeDit: [
      "Kies één vast micro-ritueel: bedrand, ontbijtknik, wandeling naar school.",
      "Leg je telefoon zichtbaar weg.",
      "Laat je kind in dat korte moment leiden."
    ],
    vermijd: [
      "Quality time uitstellen tot je een vrije zaterdag hebt.",
      "Het korte moment vullen met planning of correctie.",
      "Multitasken en het toch aandacht noemen."
    ],
    zegDit: [
      "“Ik heb tien minuten helemaal voor jou.”",
      "“Geen telefoon. Jij kiest.”"
    ],
    bronnen: [
      { boek: "peaceful-parent", detail: "Speciale tijd werkt als preventief onderhoud voor verbinding." },
      { boek: "hold-on-to-your-kids", detail: "Kinderen verzamelen via kleine warme contactmomenten versterkt de hechtingsrelatie." },
      { boek: "power-of-showing-up", detail: "Showing up gaat over betrouwbare aanwezigheid in gewone momenten." }
    ],
    gerelateerd: ["band-versterken", "reconnect-drukke-week", "ouder-op-telefoon"]
  },
  {
    id: "ouder-op-telefoon",
    vraag: "Ik zit zelf te vaak op mijn telefoon. Heeft dat effect?",
    thema: "band",
    leeftijd: ["baby", "peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["ouder", "telefoon", "voorbeeld", "aandacht", "scherm", "verbinding"],
    kort: "Ja, vooral omdat je telefoon je beschikbaarheid onderbreekt. Het gaat niet om schuld, maar om herstelbare gewoontes: schermvrije ankers, hardop herstellen en echte aandacht zichtbaar maken.",
    blokken: [
      { tekst: "Kinderen concurreren niet alleen met werk of huishouden, maar met een apparaat dat altijd iets nieuws biedt. Dat voelt voor een kind als: ik ben minder dringend dan een melding. <strong>Je hoeft geen schermloze ouder te zijn, wel een herstelbare en bewuste.</strong>" },
      { kop: "Voorbeeld is de regel", tekst: "Haidt wijst op schermnormen; Neufeld & Maté op gezinsrituelen. Als jij tafel, bedrand of begroeting schermvrij maakt, geef je je kind iets tastbaars: op deze momenten ben jij belangrijker dan de buitenwereld." }
    ],
    doeDit: [
      "Maak twee schermvrije ankers: begroeting en maaltijd of bedtijd.",
      "Zeg hardop wat je doet als je telefoon nodig is: “ik beantwoord werk, dan leg ik hem weg.”",
      "Herstel wanneer je wegzakte in scrollen."
    ],
    vermijd: [
      "Je kind schermregels geven die jij zichtbaar breekt.",
      "Half luisteren tijdens kwetsbare verhalen.",
      "Schuldgevoel laten omslaan in defensiviteit."
    ],
    zegDit: [
      "“Ik merkte dat ik half luisterde. Sorry. Ik leg mijn telefoon weg; begin nog eens.”",
      "“Dit bericht moet even. Daarna ben ik weer bij jou.”"
    ],
    bronnen: [
      { boek: "anxious-generation", detail: "Schermnormen werken beter als ze collectief en ook door volwassenen gedragen worden." },
      { boek: "hold-on-to-your-kids", detail: "Gezinsrituelen en ouderlijke aanwezigheid beschermen de hechtingsrelatie." },
      { boek: "philippa-perry", detail: "Herstel na gemiste afstemming is belangrijker dan perfecte beschikbaarheid." }
    ],
    gerelateerd: ["telefoon-aan-tafel", "tijdgebrek-quality-time", "band-versterken"]
  },
  {
    id: "kind-wil-geen-knuffel",
    vraag: "Mijn kind wil geen knuffel of kus. Moet ik dat persoonlijk nemen?",
    thema: "band",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["knuffel", "kus", "lichamelijke grenzen", "affectie", "afwijzing", "verbinding"],
    kort: "Nee. Lichamelijke grenzen respecteren bouwt juist veiligheid. Zoek andere vormen van verbinding en laat je kind merken dat liefde niet afhangt van fysieke affectie.",
    blokken: [
      { tekst: "Een afgewezen knuffel kan pijnlijk voelen, maar het is ook een kans om lichaamsautonomie te leren. <strong>Een kind dat nee mag zeggen tegen veilige volwassenen, leert dat zijn lichaam van hem is.</strong>" },
      { kop: "Verbinding zonder claim", tekst: "Perry zou zeggen: leg je gekwetstheid niet bij je kind. Siegel & Bryson: safe betekent ook dat een kind niet bang hoeft te zijn voor jouw reactie op zijn grens. Zoek alternatieven: high five, naast elkaar zitten, grapje, briefje, samen iets doen." }
    ],
    doeDit: [
      "Vraag toestemming voor fysieke affectie.",
      "Bied alternatieven: zwaai, high five, elleboog, glimlach.",
      "Blijf warm als je kind nee zegt."
    ],
    vermijd: [
      "“Doe mama niet verdrietig” zeggen.",
      "Kusjes afdwingen voor familie.",
      "Een lichamelijke grens lezen als gebrek aan liefde."
    ],
    zegDit: [
      "“Geen knuffel is oké. Wil je een high five?”",
      "“Jij beslist over je lijf. Ik hou net zo veel van je.”"
    ],
    bronnen: [
      { boek: "power-of-showing-up", detail: "Safe betekent dat kinderen zich lichamelijk en emotioneel veilig voelen bij ouders." },
      { boek: "philippa-perry", detail: "Ouders dragen hun eigen gekwetstheid zonder die als verantwoordelijkheid bij het kind te leggen." },
      { boek: "good-inside", detail: "Liefde blijft stevig aanwezig, ook wanneer een kind een grens stelt." }
    ],
    gerelateerd: ["geen-verbinding-voelen", "kind-kiest-andere-ouder", "band-versterken"]
  },
  {
    id: "ochtendstress",
    vraag: "Onze ochtenden zijn chaos. Hoe krijgen we rust?",
    thema: "gezin",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["ochtend", "stress", "school", "aankleden", "vertrekken", "routine"],
    kort: "Verplaats beslissingen naar de avond en maak de ochtend visueel, voorspelbaar en kort. Kinderen volgen routines beter dan geïrriteerde volwassenen.",
    blokken: [
      { tekst: "Ochtendstress is zelden één probleem. Het is een stapel microbeslissingen op een moe moment. <strong>De oplossing zit niet in harder roepen, maar in minder beslissingen op het spitsuur.</strong>" },
      { kop: "Ritme vóór volume", tekst: "Faber & Mazlish bieden tools: één woord, beschrijven, briefjes. Markham voegt regulatie toe: jouw gejaagdheid besmet het huis. Maak een zichtbaar lijstje, leg kleren klaar, pak tassen 's avonds en verbind vóór je commandeert." }
    ],
    doeDit: [
      "Maak een ochtendkaart met plaatjes of korte stappen.",
      "Leg kleren, tas en brooddoos 's avonds klaar.",
      "Gebruik één-woord reminders: “schoenen”, “jas”, “tas”."
    ],
    vermijd: [
      "Elke ochtend dezelfde preek.",
      "Nieuwe discussies openen als je al te laat bent.",
      "Alles zelf doen en daarna boos zijn dat niemand helpt."
    ],
    zegDit: [
      "“Wat zegt je ochtendlijst?”",
      "“Schoenen. Ik help met de eerste, jij doet de tweede.”"
    ],
    bronnen: [
      { boek: "how-to-talk", detail: "Eén woord, informatie en briefjes verminderen preken en strijd." },
      { boek: "peaceful-parent", detail: "Ouderlijke kalmte en routines helpen kinderen meewerken." },
      { boek: "hold-on-to-your-kids", detail: "Eerst contact maken verhoogt bereidheid om te volgen." }
    ],
    gerelateerd: ["luisteren-zonder-schreeuwen", "opruimen-strijd", "tandenpoetsen-weigert"]
  },
  {
    id: "maaltijdstrijd",
    vraag: "Elke maaltijd eindigt in strijd. Hoe maak ik eten weer normaal?",
    thema: "eten",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["maaltijd", "eten", "tafel", "groenten", "strijd", "gezin"],
    kort: "Maak de tafel weer veilig en voorspelbaar. Jij bepaalt aanbod en ritme; je kind bepaalt wat en hoeveel het eet. Verbinding aan tafel is belangrijker dan één extra hap.",
    blokken: [
      { tekst: "Eten kan ongemerkt een dagelijks controlegevecht worden. Dan leert een kind niet ‘gezond eten’, maar: aan tafel staat mijn autonomie onder druk. <strong>Een rustige tafel is vaak de eerste voedingsinterventie.</strong>" },
      { kop: "De relatie aan tafel", tekst: "Neufeld & Maté zien samen eten als hechtingsritueel. Kohn waarschuwt voor belonen en straffen. Bied goed eten aan, houd vaste tijden, laat het lichaam van je kind meebeslissen en praat ook over andere dingen dan happen." }
    ],
    doeDit: [
      "Zet altijd iets vertrouwds op tafel naast iets nieuws.",
      "Houd maaltijden kort en voorspelbaar.",
      "Maak tafelgesprekken warm en niet alleen eetgericht."
    ],
    vermijd: [
      "Nog drie happen als standaardonderhandeling.",
      "Dessert als machtsmiddel.",
      "Een kind beschamen om smaak of hoeveelheid."
    ],
    zegDit: [
      "“Dit is wat er op tafel staat. Jij luistert naar je buik.”",
      "“Je hoeft het niet lekker te vinden om eraan te wennen.”"
    ],
    bronnen: [
      { boek: "hold-on-to-your-kids", detail: "Samen eten is een hechtingsritueel dat bescherming verdient." },
      { boek: "unconditional-parenting", detail: "Belonen en straffen rond eten maken gedrag extern gestuurd en beladen." },
      { boek: "self-driven-child", detail: "Autonomie over lichaam en keuzes verlaagt machtsstrijd." }
    ],
    gerelateerd: ["eten-proeven-dwingen", "telefoon-aan-tafel", "ochtendstress"]
  },
  {
    id: "ouders-oneens-opvoeding",
    vraag: "Wij zijn het als ouders vaak oneens. Hoe voorkomen we strijd voor de kinderen?",
    thema: "gezin",
    leeftijd: ["baby", "peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["ouders", "oneens", "partner", "opvoeding", "conflict", "regels"],
    kort: "Kinderen hebben geen identieke ouders nodig, wel veilige volwassenen. Bespreek verschillen buiten het heetste moment en herstel als je elkaar voor de kinderen onderuit haalde.",
    blokken: [
      { tekst: "Verschillende stijlen hoeven niet schadelijk te zijn. Wat wél zwaar is: kinderen die midden in volwassen strijd komen te staan of leren dat regels afhangen van wie wint. <strong>Een verenigd front betekent niet: altijd eens, maar: veilig omgaan met verschil.</strong>" },
      { kop: "Herstel en overleg", tekst: "Perry benadrukt herstel na breuk; Markham begint bij zelfregulatie. Spreek af welke grenzen hard zijn en welke flexibel. Bespreek botsingen later, zonder publiek. Als je elkaar ondermijnde, herstel je dat zichtbaar: “wij waren het oneens en dat was niet jouw taak.”" }
    ],
    doeDit: [
      "Maak een korte lijst van gedeelde harde grenzen.",
      "Parkeer discussies: “we bespreken dit straks samen.”",
      "Herstel naar je kind als het getuige was van spanning."
    ],
    vermijd: [
      "De andere ouder corrigeren via het kind.",
      "Kinderen laten kiezen wie gelijk heeft.",
      "Verschil verwarren met gevaar; minachting is het probleem."
    ],
    zegDit: [
      "“Mama en papa bespreken dit samen. Jij hoeft dit niet op te lossen.”",
      "“Wij klonken boos op elkaar. Dat was volwassen gedoe, niet jouw schuld.”"
    ],
    bronnen: [
      { boek: "philippa-perry", detail: "Breuken herstellen en volwassen patronen herkennen beschermt het kind tegen schuld en spanning." },
      { boek: "peaceful-parent", detail: "Zelfregulatie van ouders voorkomt escalatie en maakt constructieve grenzen mogelijk." },
      { boek: "good-inside", detail: "Sturdy leadership vraagt dat volwassenen de last van duidelijkheid dragen." }
    ],
    gerelateerd: ["zelf-ontploft", "co-ouderschap-overgangen", "altijd-consequent"]
  },
  {
    id: "grootouders-regels",
    vraag: "Grootouders ondermijnen onze regels. Hoe pak ik dat aan?",
    thema: "gezin",
    leeftijd: ["baby", "peuter", "kind"],
    uitgelicht: false,
    tags: ["grootouders", "oma", "opa", "regels", "familie", "grenzen", "snoep"],
    kort: "Kies je kernregels en bespreek die volwassen, niet via je kind. Niet alles hoeft hetzelfde, maar veiligheid, respect en grote waarden vragen duidelijke afspraken.",
    blokken: [
      { tekst: "Grootouders mogen anders zijn; dat is soms juist rijk. Maar als belangrijke grenzen structureel worden ondermijnd, raakt je kind in loyaliteitsverwarring. <strong>De grens hoort tussen volwassenen besproken te worden, niet op de rug van het kind.</strong>" },
      { kop: "Kern en speelruimte", tekst: "Kohn helpt de vraag stellen: welke regels dienen echte behoeften en waarden? Kennedy helpt stevig en warm zijn: “we weten dat jullie haar graag verwennen, en dit is voor ons belangrijk.” Maak onderscheid tussen extra pannenkoek en autostoel, bedtijd of respectvolle taal." }
    ],
    doeDit: [
      "Kies drie niet-onderhandelbare regels.",
      "Bespreek ze rustig buiten het moment.",
      "Laat kleine verschillen bestaan waar ze geen schade doen."
    ],
    vermijd: [
      "Je kind boodschappen laten doorgeven.",
      "Over alles even hard strijden.",
      "Grootouders beschamen waar je kind bij is."
    ],
    zegDit: [
      "“We vinden het fijn dat jullie genieten. Deze regel is voor ons wel belangrijk.”",
      "“Snoep kan verschillen. Autostoel niet.”"
    ],
    bronnen: [
      { boek: "good-inside", detail: "Sturdy leadership kan warm blijven terwijl grenzen duidelijk worden uitgesproken." },
      { boek: "unconditional-parenting", detail: "Regels horen vanuit behoeften en waarden gekozen te worden, niet vanuit controle om controle." },
      { boek: "philippa-perry", detail: "Volwassen spanningen worden best rechtstreeks en herstelbaar besproken, niet via het kind." }
    ],
    gerelateerd: ["altijd-consequent", "ouders-oneens-opvoeding", "nee-zeggen-zonder-drama"]
  },
  {
    id: "klusjes-in-gezin",
    vraag: "Hoe betrek ik kinderen bij klusjes zonder gezeur?",
    thema: "gezin",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["klusjes", "helpen", "huishouden", "verantwoordelijkheid", "gezin", "taken"],
    kort: "Maak bijdragen normaal, concreet en passend bij leeftijd. Kinderen willen erbij horen; ze haken af bij vage opdrachten, kritiek of klusjes als straf.",
    blokken: [
      { tekst: "Klusjes zijn niet alleen praktisch; ze vertellen een kind: jij hoort erbij en jouw bijdrage doet ertoe. Maar als klusjes vooral straf, gezeur of kritiek zijn, worden ze precies het omgekeerde. <strong>Bijdragen groeit uit betekenis en routine.</strong>" },
      { kop: "Concreet en echt", tekst: "Faber & Mazlish helpen met duidelijke taal: “de vorken op tafel” in plaats van “help eens wat meer”. Kohn waarschuwt om bijdragen niet altijd te kopen met beloningen. Stixrud & Johnson zien competentie groeien door echte verantwoordelijkheid." }
    ],
    doeDit: [
      "Geef vaste, zichtbare taken die echt nodig zijn.",
      "Doe nieuwe klusjes eerst samen voor.",
      "Benoem het effect: “nu kan iedereen eten.”"
    ],
    vermijd: [
      "Klusjes alleen inzetten als straf.",
      "Vage opdrachten zoals “doe normaal mee”.",
      "Alles opnieuw doen waar je kind bij staat."
    ],
    zegDit: [
      "“Jij bent van de vorken. Daardoor kunnen we straks eten.”",
      "“Ik doe het één keer voor, daarna probeer jij.”"
    ],
    bronnen: [
      { boek: "how-to-talk", detail: "Concreet beschrijven en informatie geven lokt samenwerking uit zonder verwijt." },
      { boek: "unconditional-parenting", detail: "Bijdragen hoort niet afhankelijk te zijn van constante beloning of straf." },
      { boek: "self-driven-child", detail: "Echte verantwoordelijkheid bouwt competentie en intern eigenaarschap." }
    ],
    gerelateerd: ["zakgeld-klusjes", "opruimen-strijd", "eerlijk-verdelen"]
  }
];
