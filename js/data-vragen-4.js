// ============================================================
// EHBO — Vragen, deel 4: extra cases over alle thema's
// ============================================================

const VRAGEN_4 = [
  {
    id: "baby-wordt-wakker",
    vraag: "Mijn baby wordt elk uur wakker. Doe ik iets fout?",
    thema: "slaap",
    leeftijd: ["baby"],
    uitgelicht: false,
    tags: ["wakker", "nacht", "doorslapen", "voeden", "slaapregressie", "huilen", "oververmoeid"],
    kort: "Waarschijnlijk niet. Baby's slapen licht, zoeken nabijheid en hebben nog geen volwassen ritme. Help met voorspelbaarheid en troost, maar maak van doorslapen geen examen dat je moet winnen.",
    blokken: [
      { tekst: "Doorslapen wordt vaak verkocht alsof het een opvoedprestatie is. De boeken zetten dat recht: een babybrein is nog volop in aanbouw en heeft co-regulatie nodig. Wakker worden is bij baby's normaal; <strong>jouw reactie bouwt veiligheid, geen slechte gewoonte</strong>." },
      { kop: "Nachtwaken is communicatie", tekst: "Sunderland beschrijft hoe jonge baby's stress nog niet zelfstandig kunnen dempen. Wakker worden kan honger, ongemak, nabijheidsbehoefte, overprikkeling of een ontwikkelingssprong zijn. Dat betekent niet dat jij elk geluid met paniek moet beantwoorden, wel dat langdurig alleen worstelen geen training is." },
      { kop: "Ritme helpt, druk niet", tekst: "NurtureShock laat zien hoe krachtig slaap is voor leren en emotieregulatie. Werk dus aan de randvoorwaarden: daglicht overdag, rustige avond, vaste volgorde, weinig prikkels. Maar meet succes niet aan één perfecte nacht. Baby's leren slaap via duizenden herhalingen, niet via één harde methode." }
    ],
    doeDit: [
      "Maak de nacht saai: weinig licht, weinig woorden, zachte herhaling.",
      "Kijk naar het dagritme: genoeg slaap overdag voorkomt vaak oververmoeide nachten.",
      "Gebruik een voorspelbaar mini-ritueel bij elk wakker worden: stem, hand, voeden indien nodig, terugleggen.",
      "Vraag hulp als de nachten je structureel breken — slaaptekort maakt iedereen minder veilig."
    ],
    vermijd: [
      "Doorslapen gebruiken als bewijs dat je het goed of fout doet.",
      "Van methode wisselen om de twee nachten; baby's kalmeren op voorspelbaarheid.",
      "Een jonge baby lang alleen laten huilen om hem ‘zelfstandig’ te maken.",
      "Je eigen uitputting negeren tot je op ontploffen staat."
    ],
    zegDit: null,
    bronnen: [
      { boek: "science-of-parenting", detail: "Jonge baby's hebben co-regulatie nodig; troost helpt het stresssysteem rijpen in plaats van afhankelijkheid te kweken." },
      { boek: "power-of-showing-up", detail: "De S van soothed: herhaalde troostervaringen bouwen de interne kalmeringscircuits van later." },
      { boek: "nurtureshock", detail: "Slaap is een kernvoorwaarde voor leren, stemming en zelfbeheersing; ritme is geen luxe maar breinonderhoud." }
    ],
    gerelateerd: ["baby-laten-huilen", "slaap-hoe-belangrijk", "baby-verwennen"]
  },
  {
    id: "peuter-bedtijd-strijd",
    vraag: "Mijn peuter blijft uit bed komen. Hoe hou ik bedtijd rustig?",
    thema: "slaap",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["bedtijd", "slapen", "uit bed komen", "avondritueel", "rekken", "nacht", "bang"],
    kort: "Bedtijd ontspoort vaak door te weinig verbinding of te veel onderhandeling. Vul de verbinding vóór het licht uitgaat en breng daarna saai, warm en voorspelbaar terug.",
    blokken: [
      { tekst: "Een peuter die voor de vijfde keer beneden staat, lijkt koppig. Vaak is het simpeler: zijn lijf is moe, zijn brein is nog vol, en jouw nabijheid is het laatste veilige loket van de dag. <strong>Maak bedtijd minder een discussie en meer een ritueel.</strong>" },
      { kop: "Eerst tanken, dan slapen", tekst: "Markham noemt verbinding preventief onderhoud. Tien minuten onverdeelde aandacht voor het slapen — boekje, rug kriebelen, één vraag over de dag — kan meer doen dan twintig minuten strijd achteraf. Kinderen rekken vaak omdat ze alsnog verbinding proberen te krijgen." },
      { kop: "Na het ritueel: weinig woorden", tekst: "Faber & Mazlish zouden zeggen: beschrijf kort en handel rustig. “Het is slaaptijd. Ik breng je terug.” Geen nieuw debat, geen extra onderhandeling, geen boze toespraak. Als er echte angst is, erken je die wél: nabijheid en voorspelbaar terugkijken werken beter dan ‘stel je niet aan’." }
    ],
    doeDit: [
      "Maak een vaste volgorde en teken die eventueel samen uit.",
      "Zet één glas water klaar en laat plassen onderdeel van het ritueel zijn.",
      "Breng je kind telkens rustig terug met dezelfde korte zin.",
      "Bij angst: spreek een checkmoment af en kom ook echt terug."
    ],
    vermijd: [
      "Elke keer een nieuw extraatje toestaan — dan wordt bedtijd een onderhandeling.",
      "Dreigen met morgen geen leuke dingen; dat maakt slapen onveiliger.",
      "Boos worden op echte angst voor donker, monsters of alleen zijn.",
      "Het ritueel starten als iedereen al oververmoeid is."
    ],
    zegDit: [
      "“Nog één knuffel. Daarna brengt mama je rustig terug, elke keer.”",
      "“Je wil nog bij ons zijn. Dat snap ik. En nu is het slaaptijd.”",
      "“Ik kom over vijf minuten kijken. Je hoeft niet te roepen; ik kom.”"
    ],
    bronnen: [
      { boek: "peaceful-parent", detail: "Dagelijkse verbinding en speciale tijd verminderen strijd; rust van de ouder komt vóór correctie." },
      { boek: "how-to-talk", detail: "Korte beschrijving, informatie en voorspelbare handeling werken beter dan verwijt of preek." },
      { boek: "science-of-parenting", detail: "Slaap, stressregulatie en veiligheid zijn verweven; een bang kind heeft nabijheid nodig voordat het kan ontspannen." }
    ],
    gerelateerd: ["slaap-hoe-belangrijk", "nee-zeggen-zonder-drama", "band-versterken"]
  },
  {
    id: "baby-eenkennig",
    vraag: "Mijn baby wil alleen mama of papa. Moet ik dat doorbreken?",
    thema: "baby",
    leeftijd: ["baby", "peuter"],
    uitgelicht: false,
    tags: ["eenkennig", "verlatingsangst", "mama", "papa", "oppas", "huilen", "hechting"],
    kort: "Nee, forceer het niet. Eenkennigheid is vaak gezonde hechting in actie. Bouw vertrouwen met kleine overdrachten: vaste persoon, warme overgang, ouder vertrekt duidelijk en komt terug.",
    blokken: [
      { tekst: "Een baby die protesteert bij andere armen is niet verwend of sociaal mislukt. Hij laat zien dat hij onderscheid maakt tussen vertrouwd en onbekend. In hechtingstaal is dat vaak een goed teken: <strong>er is een veilige basis waarvandaan de wereld spannend mag zijn</strong>." },
      { kop: "Veiligheid eerst, wennen daarna", tekst: "Siegel & Bryson beschrijven veilige hechting als safe, seen, soothed, secure. Een kind wordt niet vrijer door in paniek ‘erdoorheen’ geduwd te worden. Het wordt vrijer doordat de nieuwe persoon voorspelbaar, warm en herhaald veilig blijkt." },
      { kop: "Maak afscheid eerlijk", tekst: "Stiekem wegglippen lijkt zacht, maar het ondermijnt vertrouwen: je kind leert dat jij zomaar kunt verdwijnen. Zeg kort dat je gaat, laat het protest bestaan, en kom terug zoals beloofd. Zo wordt de ervaring: ik vond het lastig, iemand troostte mij, en mijn ouder kwam terug." }
    ],
    doeDit: [
      "Laat een nieuwe verzorger eerst naast jou spelen voordat die overneemt.",
      "Gebruik een vast afscheidsritueel: kus, zin, zwaai, weg.",
      "Laat de andere ouder eigen routines bouwen in plaats van mama of papa te imiteren.",
      "Begin met korte, voorspelbare periodes en bouw langzaam op."
    ],
    vermijd: [
      "Je baby beschuldigen van aanstellerij of manipulatie.",
      "Stiekem vertrekken om tranen te vermijden.",
      "De minder gekozen ouder persoonlijk laten afhaken; vertrouwdheid groeit door herhaling.",
      "Een huilend afscheid eindeloos rekken."
    ],
    zegDit: [
      "“Je vindt dit spannend. Papa blijft bij je en mama komt terug.”",
      "“Ik ga nu. Na je dutje ben ik er weer.”",
      "“Je mag huilen. Oma helpt jou tot ik terugkom.”"
    ],
    bronnen: [
      { boek: "power-of-showing-up", detail: "Veilige hechting ontstaat door herhaald veilig, gezien en getroost worden; afscheid vraagt voorspelbaarheid." },
      { boek: "philippa-perry", detail: "Gevoelens van jonge kinderen serieus nemen in plaats van ze te labelen als manipulatie of drama." },
      { boek: "science-of-parenting", detail: "Stress bij separatie zakt door betrouwbare troost en zachte gewenning, niet door plots forceren." }
    ],
    gerelateerd: ["baby-verwennen", "baby-laten-huilen", "band-versterken"]
  },
  {
    id: "slaan-bijten-schoppen",
    vraag: "Mijn kind slaat, bijt of schopt. Hoe stop ik dat zonder straf?",
    thema: "emoties",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["slaan", "bijten", "schoppen", "agressie", "veiligheid", "boos", "impuls"],
    kort: "Stop het gedrag direct en fysiek rustig: “ik laat je niet slaan.” Daarna coach je het gevoel en oefen je een alternatief. Straf voegt schaamte toe, maar geen vaardigheid.",
    blokken: [
      { tekst: "Slaan is geen bewijs dat je kind slecht is. Het is meestal een lijf dat sneller is dan de bovenverdieping van het brein. Dat betekent niet dat je het laat gebeuren. <strong>De grens is stevig; de interpretatie blijft gul.</strong>" },
      { kop: "Eerst veiligheid", tekst: "Becky Kennedy's sturdy leadership is hier precies voor bedoeld: warm én onverzettelijk. Je houdt de arm tegen, zet je lichaam ertussen of haalt je kind weg. Kort: “ik laat je niet slaan.” Geen preek, geen vernedering. Het brein dat net sloeg kan de les nog niet opnemen." },
      { kop: "Daarna de vaardigheid", tekst: "Gottman en Siegel & Bryson zouden na de storm teruggaan naar emotiecoaching: wat gebeurde er in je lijf, welke woorden ontbraken, wat kan je hand de volgende keer doen? Stampen, hulp roepen, in een kussen slaan, afstand nemen. Een kind leert alternatief gedrag door het te oefenen, niet door zich slecht te voelen." }
    ],
    doeDit: [
      "Stop fysiek rustig en onmiddellijk: arm tegenhouden, afstand maken.",
      "Zeg de grens in één zin en benoem daarna het gevoel.",
      "Troost ook het kind dat geraakt werd, zonder het andere kind te beschamen.",
      "Oefen later letterlijk: handen op de buik, stampen, hulp roepen, woorden zoeken."
    ],
    vermijd: [
      "Terugslaan om te tonen dat slaan pijn doet.",
      "Je kind alleen wegsturen met de grootste boosheid.",
      "Een lang moreel betoog terwijl het lijf nog overstuur is.",
      "Labels als agressief, gemeen of gevaarlijk."
    ],
    zegDit: [
      "“Ik laat je niet slaan. Ik hou je arm tegen.”",
      "“Je was zó boos. Boos mag. Slaan niet.”",
      "“Laat eens zien: wat kunnen je handen doen als de boosheid komt?”"
    ],
    bronnen: [
      { boek: "good-inside", detail: "Gedrag is een signaal van ontbrekende vaardigheid; sturdy leadership houdt grens en verbinding samen." },
      { boek: "whole-brain-child", detail: "Bij overname door het benedenbrein werkt eerst co-regulatie; oefenen komt als de bovenverdieping terug online is." },
      { boek: "gottman-eq", detail: "Alle gevoelens zijn oké, niet alle gedrag; emotiecoaching koppelt grens aan woorden en probleemoplossing." }
    ],
    gerelateerd: ["driftbui-reageren", "straffen-werkt", "ik-haat-je"]
  },
  {
    id: "niet-tegen-verlies",
    vraag: "Mijn kind kan niet tegen verliezen. Wat leer ik dan?",
    thema: "emoties",
    leeftijd: ["kind"],
    uitgelicht: false,
    tags: ["verliezen", "spel", "competitie", "boos", "valsspelen", "frustratie", "sport"],
    kort: "Verliezen is oefenmateriaal voor frustratie, schaamte en herstel. Maak het gevoel veilig, houd het spel eerlijk en oefen achteraf sportief gedrag in kleine stukjes.",
    blokken: [
      { tekst: "Een kind dat door het lint gaat na verlies, is niet ‘onsportief’ als karakterdiagnose. Het oefent met een pijnlijk mengsel van teleurstelling, schaamte en controleverlies. <strong>Het doel is niet dat verliezen leuk wordt, maar dat het draaglijk wordt.</strong>" },
      { kop: "Gevoel erkennen zonder het spel te vervalsen", tekst: "Gottman zou starten bij valideren: “verliezen voelt rot.” Maar de grens blijft: niet gooien, niet schelden, niet de regels herschrijven. Als je het kind laat winnen om de storm te vermijden, leert het brein dat het verlies inderdaad ondraaglijk was." },
      { kop: "Prijs herstel, niet winnen", tekst: "NurtureShock waarschuwt voor prestatie-identiteit: kinderen die vooral slim, goed of winnaar moeten zijn, vermijden risico. Beschrijf dus herstelgedrag: opnieuw proberen, de winnaar feliciteren, pauze nemen en terugkomen. Daar groeit echte veerkracht." }
    ],
    doeDit: [
      "Begin met korte spelletjes waar verliezen snel weer voorbij is.",
      "Benoem het gevoel: “dat steekt, hè, als je zo graag wilde winnen.”",
      "Stop het spel tijdelijk bij gooien of kwetsen, zonder strafpreek.",
      "Vier herstel: terugkomen na boosheid, hand geven, opnieuw proberen."
    ],
    vermijd: [
      "Altijd laten winnen om de vrede te bewaren.",
      "Lachen om de boosheid of ze kleineren.",
      "Winnaarstaal als identiteit: “jij bent nu eenmaal een kampioen.”",
      "Een kind dwingen meteen sportief te doen terwijl het nog kookt."
    ],
    zegDit: [
      "“Verliezen voelt rot. Je mag balen en het spel blijft eerlijk.”",
      "“We pauzeren tot je handen veilig zijn.”",
      "“Je kwam terug na je boosheid. Dat noem ik sterk.”"
    ],
    bronnen: [
      { boek: "gottman-eq", detail: "Eerst emotie erkennen, dan grenzen stellen en samen zoeken naar passend gedrag." },
      { boek: "nurtureshock", detail: "Proces en herstel prijzen bouwt meer veerkracht dan kinderen vastzetten in winnen of talent." },
      { boek: "whole-brain-child", detail: "Frustratie vraagt integratie: het verhaal achteraf vertellen helpt het brein leren van de ervaring." }
    ],
    gerelateerd: ["driftbui-reageren", "goed-prijzen", "faalangst-perfectionisme"]
  },
  {
    id: "overgevoelig-kind",
    vraag: "Mijn kind huilt om alles. Maak ik het te gevoelig?",
    thema: "emoties",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["gevoelig", "huilen", "emotioneel", "overprikkeld", "tranen", "troosten", "weerbaarheid"],
    kort: "Gevoeligheid is geen fout die eruit moet. Een kind wordt weerbaarder door gevoelens te leren dragen, niet door te horen dat ze overdreven zijn.",
    blokken: [
      { tekst: "Veel huilen triggert bij ouders de angst: maak ik mijn kind zwak als ik troost? De boeken draaien het om. Een kind dat mag voelen, leert zijn binnenwereld kennen. Een kind dat steeds hoort “niet zo gevoelig” leert vooral zichzelf wantrouwen." },
      { kop: "Troost is geen versterker van tranen", tekst: "Siegel & Bryson en Sunderland beschrijven co-regulatie als training van het stresssysteem. Je neemt het gevoel niet over en je lost niet alles op; je blijft dichtbij terwijl het gevoel beweegt. Dat is precies hoe een kind later leert: dit gaat voorbij." },
      { kop: "Maak ruimte én bouw draagkracht", tekst: "Gottman maakt het onderscheid: alle gevoelens mogen, niet alle gedrag. Je kunt dus warm zijn voor tranen en tegelijk oefenen met woorden, pauzes, ademhaling, hulp vragen of opnieuw proberen. Weerbaarheid groeit niet uit hardheid, maar uit herhaald veilig herstellen." }
    ],
    doeDit: [
      "Benoem wat je ziet zonder oordeel: “je tranen zijn er snel vandaag.”",
      "Check basisdingen: slaap, honger, drukke dagen en schermen verhogen gevoeligheid.",
      "Leer een klein herstelritueel: water drinken, knuffel, adem, opnieuw proberen.",
      "Vertel dat gevoeligheid ook informatie geeft: je merkt veel op."
    ],
    vermijd: [
      "“Daar moet je toch niet om huilen” — het kind huilt al, dus voor hem is het wél iets.",
      "Alle teleurstelling meteen oplossen om tranen te vermijden.",
      "Gevoelig als gezinslabel gebruiken.",
      "Je eigen ongemak met tranen verwarren met een probleem bij je kind."
    ],
    zegDit: [
      "“Je voelt dit heel hard. Ik ben bij je.”",
      "“We hoeven het niet meteen op te lossen. Eerst even zakken.”",
      "“Je gevoel is groot, en jij kan leren ermee omgaan.”"
    ],
    bronnen: [
      { boek: "power-of-showing-up", detail: "Gezien en getroost worden helpt kinderen een veilig intern model opbouwen voor grote gevoelens." },
      { boek: "gottman-eq", detail: "Emotiecoaching behandelt emoties als kans tot verbinding en vaardigheid, niet als probleem dat weg moet." },
      { boek: "philippa-perry", detail: "Gevoelens serieus nemen voorkomt dat kinderen zichzelf afleren te vertrouwen." }
    ],
    gerelateerd: ["kind-angstig", "driftbui-reageren", "baby-verwennen"]
  },
  {
    id: "goede-consequentie",
    vraag: "Wat is een goede consequentie zonder dat het straf wordt?",
    thema: "grenzen",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["consequentie", "logisch gevolg", "straf", "grens", "discipline", "verantwoordelijkheid"],
    kort: "Een goede consequentie is logisch, dichtbij en respectvol. Ze helpt herstellen of beschermen, niet terugpakken. Als jij ervan geniet, is het waarschijnlijk straf.",
    blokken: [
      { tekst: "Het verschil tussen consequentie en straf zit niet alleen in de actie, maar ook in de toon. “Je gooide met de blokken, de blokken gaan weg tot je handen veilig zijn” beschermt. “Nu zal je eens voelen” straft. <strong>De ene leert verantwoordelijkheid, de andere leert macht.</strong>" },
      { kop: "Logisch en herstelgericht", tekst: "Faber & Mazlish sturen weg van willekeurige straffen naar probleemoplossing: wat is er kapot, vies, onveilig of onmogelijk geworden, en wat moet er gebeuren om dat te herstellen? Melk gemorst: doek pakken. Fiets roekeloos gebruikt: samen opnieuw afspraken maken voordat de fiets terugkomt." },
      { kop: "Zonder liefdesboete", tekst: "Kohn waarschuwt dat controle via pijn of verlies kinderen vooral leert hoe ze jouw macht vermijden. Kennedy vult aan: de relatie blijft intact. Je kunt een grens houden zonder koude afstand, sarcasme of vernedering. De consequentie is het kader, niet de prijs van jouw liefde." }
    ],
    doeDit: [
      "Kies gevolgen die direct met het gedrag te maken hebben.",
      "Maak herstel concreet: schoonmaken, repareren, opnieuw proberen, plan maken.",
      "Zeg het nuchter en kort, alsof je een veiligheidsregel uitlegt.",
      "Bespreek terugkerende problemen op een rustig moment samen."
    ],
    vermijd: [
      "Willekeurige afpakstraffen die niets met het gedrag te maken hebben.",
      "Consequenties verzinnen terwijl je nog woedend bent.",
      "Liefde, aandacht of nabijheid intrekken.",
      "Een herstelactie eindigen met een extra preek."
    ],
    zegDit: [
      "“De stiften blijven aan tafel. Als ze op de muur gaan, berg ik ze op.”",
      "“Er ligt melk. Hier is een doek; we lossen het op.”",
      "“De fiets komt terug zodra we een veilig plan hebben.”"
    ],
    bronnen: [
      { boek: "how-to-talk", detail: "Alternatieven voor straf: probleem beschrijven, informatie geven, keuzes bieden en samen oplossingen maken." },
      { boek: "unconditional-parenting", detail: "Willekeurige straf is controle; werk mét het kind aan herstel en verantwoordelijkheid." },
      { boek: "good-inside", detail: "Sturdy leadership houdt grenzen zonder de relatie of het zelfbeeld van het kind aan te vallen." }
    ],
    gerelateerd: ["straffen-werkt", "nee-zeggen-zonder-drama", "slaan-bijten-schoppen"]
  },
  {
    id: "altijd-consequent",
    vraag: "Moet ik altijd consequent zijn?",
    thema: "grenzen",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["consequent", "regels", "uitzondering", "grenzen", "toegeven", "flexibel"],
    kort: "Wees betrouwbaar, niet robotachtig. Kinderen hebben voorspelbare grenzen nodig, maar ook ouders die kunnen denken: vandaag is ziekte, rouw of uitputting anders dan gewone weerstand.",
    blokken: [
      { tekst: "‘Altijd consequent zijn’ klinkt stevig, maar kan hard en onnadenkend worden. De boeken mikken niet op mechanische ouders. Ze mikken op veilige ouders: <strong>duidelijk genoeg om op te leunen, menselijk genoeg om af te stemmen</strong>." },
      { kop: "Betrouwbaarheid is de kern", tekst: "Kennedy's sturdy leadership betekent dat je kind voelt: mijn ouder beslist niet vanuit paniek of willekeur. Een nee blijft meestal nee, zeker bij veiligheid en waarden. Maar een betrouwbare ouder kan ook uitleggen waarom vandaag anders is, zonder schaamte of lange verdediging." },
      { kop: "Regels zijn middelen, geen afgoden", tekst: "Kohn stelt de ongemakkelijke vraag: dient deze regel mijn kind, of vooral mijn gemak? Markham zou daar zelfregulatie aan toevoegen: als je ‘consequent’ bent omdat je te boos bent om te herzien, is dat geen stevigheid. Herstellen of bijstellen mag; het modelleert denken." }
    ],
    doeDit: [
      "Maak onderscheid tussen harde grenzen (veiligheid, respect) en flexibele voorkeuren.",
      "Leg uitzonderingen kort uit: “vandaag ben je ziek, dus doen we het anders.”",
      "Kom terug op te harde regels: “ik heb te snel nee gezegd; ik denk opnieuw.”",
      "Gebruik routines voor terugkerende dingen, zodat jij minder hoeft te sturen."
    ],
    vermijd: [
      "Een onredelijke nee volhouden alleen omdat je hem al zei.",
      "Elke grens onderhandelbaar maken zodra er protest komt.",
      "Consequentie verwarren met kilheid.",
      "Regels gebruiken om je eigen ongemak nooit te hoeven onderzoeken."
    ],
    zegDit: [
      "“Normaal is dit de regel. Vandaag is anders omdat je ziek bent.”",
      "“Ik denk even na voor ik antwoord, want ik wil een nee kunnen houden.”",
      "“Ik was te streng. Ik herstel dat, en de grens over slaan blijft hetzelfde.”"
    ],
    bronnen: [
      { boek: "good-inside", detail: "Sturdy leadership vraagt warmte en stevigheid, niet starheid; ouders mogen betrouwbaar en menselijk tegelijk zijn." },
      { boek: "unconditional-parenting", detail: "Regels moeten vertrekken vanuit behoeften en waarden, niet vanuit automatische controle." },
      { boek: "peaceful-parent", detail: "Zelfregulatie van de ouder voorkomt dat ‘consequent zijn’ een dekmantel wordt voor reactiviteit." }
    ],
    gerelateerd: ["nee-zeggen-zonder-drama", "goede-consequentie", "zelf-ontploft"]
  },
  {
    id: "zeuren-onderhandelen",
    vraag: "Mijn kind blijft zeuren en onderhandelen. Hoe stop ik die eindeloze discussie?",
    thema: "grenzen",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["zeuren", "onderhandelen", "discussie", "nee", "grenzen", "volhouden", "snoep"],
    kort: "Zeuren leeft van onduidelijkheid. Beslis eerst, erken het verlangen, geef één korte reden en stap uit de herhaling. Warm blijven is iets anders dan beschikbaar blijven voor debat.",
    blokken: [
      { tekst: "Een kind dat blijft vragen is niet per se brutaal. Vaak heeft het geleerd dat vraag nummer zeven soms wél werkt. Dat is geen karakterfout, maar data-analyse. <strong>Een wiebelende grens maakt van elk nee een uitnodiging tot onderzoek.</strong>" },
      { kop: "Erkenning zonder debat", tekst: "Faber & Mazlish leren: erken het verlangen ruim, maar houd de grens kort. “Jij zou echt nog een filmpje willen. Ik snap het. Het scherm is klaar.” Daarna wordt elke extra uitleg brandstof. Het kind hoeft het niet leuk te vinden om jou te mogen volgen." },
      { kop: "Stap uit de lus", tekst: "Kennedy zou zeggen: wees de stevige leider. Niet boos, niet sarcastisch, niet koud. Herhaal één zin of wijs naar de afspraak. Als je tóch merkt dat je gaat onderhandelen uit vermoeidheid, maak voor de volgende keer een vaste regel op een rustig moment." }
    ],
    doeDit: [
      "Zeg pas nee als je weet dat je hem kunt houden.",
      "Gebruik één empathische zin en één grenszin.",
      "Herhaal exact dezelfde zin als een kapotte plaat, zonder nieuw argument.",
      "Maak afspraken vooraf over bekende zeurpunten: scherm, snoep, speelgoedwinkel."
    ],
    vermijd: [
      "Steeds nieuwe argumenten geven; dat houdt de rechtbank open.",
      "Boos worden op het verlangen zelf.",
      "Na lang zeuren toegeven en hopen dat het morgen beter gaat.",
      "Sarcasme: “vraag het nog honderd keer.”"
    ],
    zegDit: [
      "“Je wil het heel graag. Het antwoord blijft nee.”",
      "“Ik ga het niet opnieuw uitleggen. Je mag boos zijn.”",
      "“We hebben de afspraak al. Ik help je nu met iets anders kiezen.”"
    ],
    bronnen: [
      { boek: "how-to-talk", detail: "Verlangen erkennen en informatie kort geven vermindert strijd zonder de grens weg te nemen." },
      { boek: "good-inside", detail: "Warm begrenzen betekent het ongemak van het kind kunnen dragen zonder de grens te laten vallen." },
      { boek: "peaceful-parent", detail: "Bewuste nees en kalme herhaling voorkomen dat ouderlijke irritatie de leiding overneemt." }
    ],
    gerelateerd: ["nee-zeggen-zonder-drama", "schermtijd-hoeveel", "altijd-consequent"]
  },
  {
    id: "kind-praat-niet",
    vraag: "Mijn kind vertelt niets. Hoe krijg ik het weer aan de praat?",
    thema: "praten",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["praten", "stil", "school", "tiener", "gesprek", "vertrouwen", "luisteren"],
    kort: "Minder vragen, beter luisteren. Kinderen praten vaker zijwaarts, op onverwachte momenten, en bij ouders die kleine verhalen niet meteen corrigeren, oplossen of gebruiken als les.",
    blokken: [
      { tekst: "“Hoe was school?” “Goed.” Einde gesprek. Dat is geen bewijs dat je kind geheimzinnig is; vaak is de vraag te groot, te algemeen of te frontaal. <strong>De beste gesprekken ontstaan vaak naast elkaar, niet tegenover elkaar.</strong>" },
      { kop: "Maak eerst contact", tekst: "Neufeld & Maté noemen het collect before you direct. Ook voor praten geldt: eerst de relatie, dan de inhoud. Een kind dat meteen ondervraagd wordt bij thuiskomst, voelt controle. Een kind dat eerst mag landen, eten, naast je zitten of mee rijden, krijgt ruimte." },
      { kop: "Verdien grotere verhalen met kleine reacties", tekst: "Gottman waarschuwt: wie kleine gevoelens wegwuift, krijgt grote verhalen ook niet te horen. Reageer dus op kleine onthullingen zonder paniek of preek. Faber & Mazlish: erken, herhaal, wees nieuwsgierig. Advies pas als je kind erom vraagt." }
    ],
    doeDit: [
      "Stel kleinere vragen: “wat was het raarste moment vandaag?”",
      "Gebruik zijwaartse momenten: auto, afwas, wandeling, bedrand.",
      "Vraag: “wil je advies of wil je dat ik luister?”",
      "Bewaar wat je kind vertelt; maak er geen familienieuws van zonder toestemming."
    ],
    vermijd: [
      "Een gesprek openen als verhoor.",
      "Elke zin aangrijpen voor een les.",
      "Paniek bij kleine onthullingen; dan sluit het loket.",
      "Stilte persoonlijk nemen."
    ],
    zegDit: [
      "“Ik ben blij dat je dat vertelt. Wil je dat ik meedenk of gewoon luister?”",
      "“Ik vraag niks moeilijks. Ik zit gewoon even bij je.”",
      "“Dat klinkt ingewikkeld. Vertel eens het stukje dat je wél kwijt wil.”"
    ],
    bronnen: [
      { boek: "how-to-talk", detail: "Luisteren, gevoelens benoemen en advies uitstellen houden het gesprek open." },
      { boek: "hold-on-to-your-kids", detail: "Kinderen volgen en openen zich vanuit geactiveerde hechting; eerst verzamelen, dan pas sturen." },
      { boek: "gottman-eq", detail: "Kleine emotionele momenten zijn kansen tot verbinding; wegwuiven sluit het kanaal." }
    ],
    gerelateerd: ["luisteren-zonder-schreeuwen", "tiener-trekt-terug", "kind-liegt"]
  },
  {
    id: "sorry-zeggen-dwingen",
    vraag: "Moet ik mijn kind dwingen om sorry te zeggen?",
    thema: "praten",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["sorry", "excuses", "dwingen", "empathie", "ruzie", "herstel", "schuld"],
    kort: "Nee, een afgedwongen sorry is meestal toneel. Leer herstel: kijken wat er gebeurde, verantwoordelijkheid nemen en iets doen om het goed te maken. Het woord komt later vanzelf mee.",
    blokken: [
      { tekst: "“Zeg sorry!” levert vaak een kind op dat mompelt en niets voelt, plus een ander kind dat nog steeds gekwetst is. Dat is geen herstel, dat is een sociaal wachtwoord. <strong>Het doel is niet het woord sorry, maar verantwoordelijkheid.</strong>" },
      { kop: "Van schaamte naar herstel", tekst: "Kohn waarschuwt voor afgedwongen deugd: gedrag dat er netjes uitziet maar vanbinnen niet gekozen is. Kennedy zou onder het gedrag kijken: kan dit kind al verdragen dat het iemand pijn deed, zonder in schaamte te verdrinken? Help eerst met reguleren, dan met perspectief." },
      { kop: "Maak herstel concreet", tekst: "Faber & Mazlish geven liever handelingsroutes: beschrijf de schade, erken gevoelens, vraag wat kan helpen. “Mila huilt; de toren is stuk. Wat kunnen we doen?” Soms is dat helpen herbouwen, een tekening maken, ruimte geven of later sorry zeggen. Zo groeit empathie van binnenuit." }
    ],
    doeDit: [
      "Stop kwetsend gedrag eerst en kalmeer beide kinderen.",
      "Beschrijf wat er gebeurde zonder karakteroordeel.",
      "Vraag naar herstel: “wat kan helpen?”",
      "Modelleer zelf echte excuses, zonder ‘maar’."
    ],
    vermijd: [
      "Een kind in volle schaamte op het podium zetten.",
      "Denken dat een gemompeld sorry het werk afmaakt.",
      "Het slachtoffer dwingen meteen te vergeven.",
      "Een fout verwarren met een slecht kind."
    ],
    zegDit: [
      "“Kijk naar Mila's gezicht. De klap deed pijn.”",
      "“Sorry zeggen kan straks. Nu zoeken we hoe we het goedmaken.”",
      "“Wil je helpen herbouwen of wil je haar even ruimte geven?”"
    ],
    bronnen: [
      { boek: "unconditional-parenting", detail: "Afgedwongen moreel gedrag is gehoorzaamheid; echte waarden groeien door samenwerking en reflectie." },
      { boek: "how-to-talk", detail: "Kinderen verantwoordelijkheid laten nemen via beschrijven, gevoelens erkennen en oplossingen bedenken." },
      { boek: "good-inside", detail: "Schaamte blokkeert leren; een kind blijft goed vanbinnen en kan tegelijk leren herstellen." }
    ],
    gerelateerd: ["slaan-bijten-schoppen", "ruzie-broers-zussen", "zelf-ontploft"]
  },
  {
    id: "faalangst-perfectionisme",
    vraag: "Mijn kind is bang om fouten te maken. Hoe help ik?",
    thema: "zelfvertrouwen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["faalangst", "perfectionisme", "fouten", "toets", "slim", "proberen", "angst"],
    kort: "Maak fouten normaal, klein en bespreekbaar. Prijs niet hoe slim je kind is, maar hoe het probeert, herstelt en strategie wisselt. Fouten moeten informatie worden, geen identiteit.",
    blokken: [
      { tekst: "Perfectionisme lijkt soms op ambitie, maar voelt vanbinnen als gevaar: als ik faal, bén ik fout. NurtureShock laat zien hoe snel kinderen uitdagingen mijden als hun waarde gekoppeld wordt aan slim zijn. <strong>Een kind dat fouten durft maken, heeft veiliger zelfvertrouwen dan een kind dat altijd goed moet zijn.</strong>" },
      { kop: "Verander de taal rond fouten", tekst: "Faber & Mazlish adviseren beschrijvende feedback. Niet “jij bent zo slim”, maar “je probeerde drie manieren en koos toen hulp”. Daarmee wordt succes een aanpak, geen eigenschap. Kohn zou opletten dat lof geen nieuwe meetlat wordt; blijf nieuwsgierig naar leren, niet naar scoren." },
      { kop: "Jij modelleert de foutcultuur", tekst: "Als jij je eigen fouten dramatisch maakt of verbergt, leert je kind dat fouten gevaarlijk zijn. Zeg hardop: “ik deed dat onhandig, ik herstel het.” Stixrud & Johnson vullen aan: een kind met meer gevoel van controle kan stress beter dragen. Geef dus keuze in hoe het oefent." }
    ],
    doeDit: [
      "Vertel regelmatig over een eigen fout en je herstel.",
      "Prijs strategie, oefening, hulp vragen en opnieuw beginnen.",
      "Maak fouten zichtbaar normaal: “welke fout leerde je vandaag iets?”",
      "Laat je kind kiezen hoe het oefent: eerst makkelijk, samen, timer, pauzes."
    ],
    vermijd: [
      "“Maar jij bent toch slim” als troost; dat maakt de lat juist groter.",
      "Fouten meteen verbeteren zonder eerst het proces te zien.",
      "Cijfers of prestaties gebruiken als bewijs van waarde.",
      "Je kind redden van elke kans op mislukking."
    ],
    zegDit: [
      "“Fouten zijn informatie. Wat vertelt deze fout?”",
      "“Je hoeft dit nog niet te kunnen. Je bent het aan het leren.”",
      "“Ik zag dat je bleef zoeken. Dat is de spier die we trainen.”"
    ],
    bronnen: [
      { boek: "nurtureshock", detail: "Eigenschapslof zoals ‘slim’ maakt kinderen voorzichtiger; procesfeedback stimuleert uitdaging en doorzetten." },
      { boek: "how-to-talk", detail: "Beschrijvende waardering helpt kinderen zelf conclusies trekken over hun inzet en aanpak." },
      { boek: "self-driven-child", detail: "Gevoel van controle verlaagt stress en maakt oefenen minder bedreigend." }
    ],
    gerelateerd: ["goed-prijzen", "huiswerk-oorlog", "kind-angstig"]
  },
  {
    id: "opgeven-snel",
    vraag: "Mijn kind geeft snel op. Moet ik pushen?",
    thema: "zelfvertrouwen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["opgeven", "doorzetten", "motivatie", "hobby", "sport", "frustratie", "pushen"],
    kort: "Push minder op resultaat en meer op het proces: splits de taak, erken frustratie, laat keuze waar het kan en oefen één stap verder dan comfortabel. Doorzetten groeit niet onder druk, maar onder draagbare uitdaging.",
    blokken: [
      { tekst: "Snel opgeven is vaak geen luiheid, maar een combinatie van frustratie, schaamte en te weinig gevoel van controle. Stixrud & Johnson zijn helder: motivatie groeit als een kind eigenaar blijft. <strong>Wie te hard duwt, krijgt vaak terugduwen of instorten.</strong>" },
      { kop: "Klein genoeg maken", tekst: "Siegel & Bryson zouden kijken naar de bovenverdieping: plannen, volhouden en frustratie verdragen zijn ontwikkelende vaardigheden. Maak de taak kleiner: vijf minuten oefenen, één som, één akkoord, één kastvak. Het kind ervaart: ik kan beginnen. Beginnen is vaak de echte berg." },
      { kop: "Niet redden, wel steunen", tekst: "Markham waarschuwt voor controle, maar ook voor alleen laten ploeteren. Coach naast je kind: erken hoe vervelend het is, vraag welke hulp nuttig is, en laat het kind de laatste keuze houden. NurtureShock herinnert eraan: prijs het doorzetten, niet het talent." }
    ],
    doeDit: [
      "Vraag: “wat is de kleinste eerste stap?”",
      "Werk met korte oefenblokken en zichtbare pauzes.",
      "Laat je kind kiezen tussen twee aanpakken.",
      "Benoem doorzetten op het moment zelf, heel concreet."
    ],
    vermijd: [
      "Een kind lui noemen omdat frustratie groot voelt.",
      "De taak overnemen zodra het moeilijk wordt.",
      "Pushen tot tranen en dan verwachten dat motivatie groeit.",
      "Alle hobby's als levenslange contracten behandelen."
    ],
    zegDit: [
      "“Dit is het moeilijke stukje. We maken het kleiner.”",
      "“Wil je vijf minuten proberen of eerst één voorbeeld samen?”",
      "“Je wilde stoppen en je deed nog één stap. Dat is oefenen.”"
    ],
    bronnen: [
      { boek: "self-driven-child", detail: "Autonomie en competentie zijn de motoren van motivatie; de ouder is consultant, geen manager." },
      { boek: "whole-brain-child", detail: "Zelfbeheersing en doorzetten zijn bovenbreinvaardigheden die in kleine, haalbare stappen geoefend worden." },
      { boek: "nurtureshock", detail: "Procesfeedback op inspanning en strategie bouwt meer doorzettingsvermogen dan talenttaal." }
    ],
    gerelateerd: ["huiswerk-oorlog", "faalangst-perfectionisme", "goed-prijzen"]
  },
  {
    id: "verlegen-kind",
    vraag: "Mijn kind is verlegen. Moet ik het meer uit zijn schulp trekken?",
    thema: "zelfvertrouwen",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["verlegen", "sociaal", "vrienden", "familiefeest", "groeten", "onzeker", "temperament"],
    kort: "Niet trekken, wel begeleiden. Verlegenheid is vaak temperament, geen defect. Bescherm tegen labels, geef voorbereiding en oefen kleine sociale stappen zonder schaamte.",
    blokken: [
      { tekst: "Een verlegen kind krijgt snel het gevoel dat het fout is omdat het niet meteen zwaait, praat of optreedt. Philippa Perry zou vragen: kunnen we het kind zien zoals het is, in plaats van het kind dat wij hoopten te hebben? <strong>Rustig opwarmen is geen mislukte sociaalheid.</strong>" },
      { kop: "Labels plakken vast", tekst: "Faber & Mazlish waarschuwen tegen rollen: ‘de verlegene’, ‘de stille’, ‘de bange’. Zelfs goedbedoeld (“hij is nu eenmaal verlegen”) kan een kind opsluiten. Beschrijf liever de situatie: “je hebt even tijd nodig om te wennen.” Dat laat beweging toe." },
      { kop: "Voorbereiden en doseren", tekst: "Stixrud & Johnson zouden autonomie geven: wil je zwaaien, hallo zeggen of eerst naast mij staan? Kleine keuzes maken sociale spanning draaglijk. Haidt herinnert eraan dat echte wereld-oefening belangrijk is: niet vermijden, maar stap voor stap deelnemen." }
    ],
    doeDit: [
      "Geef vooraf informatie: wie is er, wat gebeurt er, hoe lang blijven we.",
      "Bied sociale opties: zwaaien, knikken, hallo zeggen, later aansluiten.",
      "Benoem wennen als normaal: “jij kijkt eerst even rond.”",
      "Plan kleine herhaalde oefenmomenten in de echte wereld."
    ],
    vermijd: [
      "Je kind publiekelijk pushen: “zeg dan iets!”",
      "Excuses aanbieden alsof je kind defect is.",
      "Verlegenheid als vaste identiteit benoemen.",
      "Alles vermijden wat sociaal spannend is."
    ],
    zegDit: [
      "“Je mag eerst even bij mij staan en rondkijken.”",
      "“Wil je zwaaien of hallo zeggen?”",
      "“Jij warmt rustig op. Dat is oké.”"
    ],
    bronnen: [
      { boek: "philippa-perry", detail: "Het kind zien dat er is, zonder eigen verwachtingen of ongemak op het kind te leggen." },
      { boek: "how-to-talk", detail: "Rollen en etiketten vermijden; beschrijven laat kinderen zichzelf vrijer ontwikkelen." },
      { boek: "self-driven-child", detail: "Keuze en gevoel van controle helpen kinderen spanning dragen en sociale stappen oefenen." }
    ],
    gerelateerd: ["kind-angstig", "faalangst-perfectionisme", "band-versterken"]
  },
  {
    id: "gamen-stoppen-drama",
    vraag: "Gamen stoppen eindigt altijd in drama. Wat werkt?",
    thema: "schermen",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["gamen", "stoppen", "schermtijd", "woede", "tablet", "console", "regels", "autoplay"],
    kort: "Maak stoppen onderdeel van het ontwerp: eindige rondes, waarschuwing vooraf, schermen na de basics en geen discussie bij de grens. De overgang is het moeilijke stuk, niet alleen de game.",
    blokken: [
      { tekst: "Games zijn gebouwd om door te gaan: levels, beloningen, teams, streaks. Een kind dat ontploft bij stoppen is niet automatisch verslaafd; het botst met een sterke prikkelmachine én een brein-in-aanbouw. <strong>Je moet dus minder vertrouwen op wilskracht en meer op structuur.</strong>" },
      { kop: "Eindig vóór je begint", tekst: "Haidt benadrukt wat schermen verdringen: slaap, spel, echte gezichten. Maak daarom vooraf duidelijk wanneer het scherm eindigt: na deze match, om 17u30, na één aflevering. Jonge kinderen hebben externe remmen nodig; Sunderland zou zeggen dat hun interne stopknop nog groeit." },
      { kop: "Respecteer de overgang", tekst: "Faber & Mazlish zouden het verlangen erkennen: “je wilde die ronde echt afmaken.” Maar na de afgesproken rand komt geen debat. Als online teamspel echt niet onmiddellijk kan stoppen, spreek dan vooraf vaste stopmomenten af. Geen scherm in de slaapkamer houdt de strijd uit het meest kwetsbare uur: bedtijd." }
    ],
    doeDit: [
      "Kies games of momenten met natuurlijke eindes.",
      "Spreek vooraf af: wanneer klaar, waar ligt de controller, wat komt daarna.",
      "Geef een overgangswaarschuwing en laat je kind zelf de timer zetten.",
      "Plan na schermtijd iets lichamelijks: eten, buiten, douche, Lego, wandelen."
    ],
    vermijd: [
      "Midden in een online match onverwacht de stekker eruit trekken, behalve bij echte nood.",
      "Schermen als beloning of straf gebruiken voor elk gedrag.",
      "Elke stop opnieuw onderhandelen.",
      "Games tot vlak voor bed."
    ],
    zegDit: [
      "“Je stopt na deze ronde. Zet jij de timer of doe ik het?”",
      "“Je baalt. Dat snap ik. En de controller gaat nu in de lade.”",
      "“Morgen spelen kan weer. Nu helpt je lijf even afschakelen.”"
    ],
    bronnen: [
      { boek: "anxious-generation", detail: "Schermen zijn vooral schadelijk door wat ze verdringen; eindeloze digitale prikkels vragen collectieve en huiselijke grenzen." },
      { boek: "science-of-parenting", detail: "Zelfregulatie is bij kinderen nog in ontwikkeling; externe structuur helpt waar interne remmen ontbreken." },
      { boek: "how-to-talk", detail: "Erken verlangen, geef informatie en keuzes binnen de grens in plaats van te dreigen of preken." }
    ],
    gerelateerd: ["schermtijd-hoeveel", "smartphone-wanneer", "zeuren-onderhandelen"]
  },
  {
    id: "sociale-media-onzeker",
    vraag: "Mijn tiener wordt onzeker van sociale media. Wat kan ik doen?",
    thema: "schermen",
    leeftijd: ["tiener"],
    uitgelicht: false,
    tags: ["sociale media", "onzeker", "instagram", "tiktok", "vergelijking", "lichaamsbeeld", "likes"],
    kort: "Neem de impact serieus zonder je tiener belachelijk te maken. Sociale media maken peer-oordeel permanent en meetbaar. Bescherm slaap, beperk feeds en bouw echte verbinding buiten het scherm.",
    blokken: [
      { tekst: "Voor tieners is sociale status geen oppervlakkig detail; hun brein scant erbij horen als veiligheid. Haidt laat zien hoe sociale media dat oude systeem hacken: vergelijking, likes en uitsluiting worden 24/7 zichtbaar. <strong>Het probleem is niet dat je tiener zwak is, maar dat de omgeving extreem sterk is.</strong>" },
      { kop: "Niet alleen minuten, ook mechaniek", tekst: "Een chat met een echte vriend is anders dan eindeloos scrollen langs perfecte lichamen en feestjes. Kijk dus naar feeds, nachtgebruik, meldingen en accounts die schaamte triggeren. Telefoons buiten de slaapkamer is geen detail; slaap beschermt stemming en weerbaarheid." },
      { kop: "Blijf de veilige volwassene", tekst: "Neufeld & Maté waarschuwen voor peer-oriëntatie: als leeftijdsgenoten het enige kompas worden, wordt je kind kwetsbaar voor de groep. Je wint dat niet terug met spot over TikTok. Je wint het terug door nieuwsgierig te blijven, samen te ontleden en echte gezinsankers te beschermen." }
    ],
    doeDit: [
      "Vraag samen: na welke apps voel je je beter, slechter of leger?",
      "Zet meldingen uit en haal de telefoon 's nachts uit de kamer.",
      "Ontvolg accounts die schaamte of vergelijking voeden.",
      "Organiseer echte-world tegengewicht: vrienden zien, sport, vrij bewegen, gezinstijd."
    ],
    vermijd: [
      "“Dat is toch allemaal nep” als snelle dismissie; het gevoel is echt.",
      "Stiekem controleren als standaardstrategie.",
      "Likes of volgers belachelijk maken.",
      "Alle online contact over één kam scheren."
    ],
    zegDit: [
      "“Ik snap dat dit binnenkomt. Je brein is gemaakt om erbij horen belangrijk te vinden.”",
      "“Zullen we samen kijken welke accounts jou kleiner maken?”",
      "“Je telefoon slaapt beneden. Niet als straf, als bescherming van je hoofd.”"
    ],
    bronnen: [
      { boek: "anxious-generation", detail: "Sociale media versterken sociale vergelijking, permanente peer-beoordeling en mentale gezondheidsrisico's bij tieners." },
      { boek: "hold-on-to-your-kids", detail: "Peer-oriëntatie maakt kinderen afhankelijker van leeftijdsgenoten; ouders moeten hechtingsankers actief beschermen." },
      { boek: "self-driven-child", detail: "Slaap, autonomie en een niet-angstige ouder beschermen het stresssysteem van tieners." }
    ],
    gerelateerd: ["smartphone-wanneer", "tiener-trekt-terug", "slaap-hoe-belangrijk"]
  },
  {
    id: "geen-verbinding-voelen",
    vraag: "Ik voel weinig verbinding met mijn kind. Is dat erg?",
    thema: "band",
    leeftijd: ["baby", "peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["verbinding", "band", "hechting", "schuldgevoel", "moeilijk kind", "liefde", "ouderschap"],
    kort: "Het is menselijk en herstelbaar. Verbinding is niet altijd een warm gevoel; vaak is het een reeks kleine betrouwbare handelingen. Begin klein, zonder jezelf te veroordelen.",
    blokken: [
      { tekst: "Sommige ouders verwachten een permanente gloed van liefde en voelen paniek als die er niet is. Philippa Perry zou mild maar eerlijk kijken: wat raakt dit kind in jou, welke verwachtingen botsen, waar ben je uitgeput? <strong>Verbinding is niet alleen wat je voelt; het is vooral wat je herhaald doet.</strong>" },
      { kop: "Showing up is concreet", tekst: "Siegel & Bryson maken hechting praktisch met vier S'en: safe, seen, soothed, secure. Je hoeft geen perfecte klik te voelen om veilig te reageren, nieuwsgierig te kijken en terug te komen na een breuk. Die betrouwbaarheid is voor een kind tastbaar." },
      { kop: "Begin zonder groot project", tekst: "Markham's speciale tijd is hier een zachte start: tien minuten per dag waarin jij volgt en niet verbetert. Niet om meteen diepe band te voelen, maar om positieve data op te bouwen: wij kunnen samen zijn zonder strijd. Kennedy zou toevoegen: begin met de meest gulle interpretatie, ook van jezelf." }
    ],
    doeDit: [
      "Plan tien minuten per dag waarin je kind kiest en jij volgt.",
      "Let op één moment per dag waarop je je kind echt ziet: blik, grap, inspanning, verdriet.",
      "Herstel snel na afstand of irritatie.",
      "Zoek steun als somberheid, afkeer of uitputting aanhoudt."
    ],
    vermijd: [
      "Wachten tot het gevoel vanzelf groots wordt voordat je kleine daden stelt.",
      "Je kind verantwoordelijk maken voor jouw gemis aan verbinding.",
      "Alle interacties laten gaan over correctie en planning.",
      "Schuldgevoel gebruiken als bewijs dat je faalt."
    ],
    zegDit: [
      "“Ik wil vandaag tien minuten gewoon bij jou zijn. Jij kiest.”",
      "“Ik was afstandelijk. Dat lag aan mijn volle hoofd, niet aan jou.”",
      "“Ik leer jou nog beter kennen. Daar neem ik tijd voor.”"
    ],
    bronnen: [
      { boek: "philippa-perry", detail: "Ouderlijke reacties worden gekleurd door eigen geschiedenis en verwachtingen; bewustzijn opent herstel." },
      { boek: "power-of-showing-up", detail: "Veilige hechting groeit uit herhaald veilig, gezien, getroost en zeker zijn, niet uit perfecte gevoelens." },
      { boek: "peaceful-parent", detail: "Speciale tijd en verbinding vóór correctie bouwen de relatie als bron van invloed." }
    ],
    gerelateerd: ["band-versterken", "zelf-ontploft", "kind-kiest-andere-ouder"]
  },
  {
    id: "kind-kiest-andere-ouder",
    vraag: "Mijn kind wil altijd de andere ouder. Hoe ga ik daarmee om?",
    thema: "band",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["mama", "papa", "voorkeur", "afwijzing", "andere ouder", "bedtijd", "hechting"],
    kort: "Neem het niet persoonlijk waar je kind bij is. Voorkeuren wisselen en zeggen zelden iets definitiefs over liefde. Erken het gemis, blijf warm beschikbaar en bouw eigen rituelen.",
    blokken: [
      { tekst: "“Ik wil papa!” kan voelen als een dolk, zeker na een lange dag zorgen. Maar voor een kind is voorkeur vaak context: moe, gewoonte, fase, overgang, temperament. <strong>Jij blijft de grote; je kind hoeft niet voor jouw gekwetstheid te zorgen.</strong>" },
      { kop: "Erken zonder terug te trekken", tekst: "Kennedy's two things are true past hier perfect: je kind wil de andere ouder én jij bent nu beschikbaar. “Je mist mama. Ik snap het. Ik help je nu.” Daarmee ontken je het verlangen niet en maak je jouw zorg niet tot tweede keus." },
      { kop: "Eigen bruggen bouwen", tekst: "Neufeld & Maté zouden zeggen: verzamel je kind opnieuw, via kleine rituelen. De minder gekozen ouder moet niet kopiëren, maar eigen ankers maken: eigen liedje, eigen pannenkoek, eigen grap bij school. Hechting groeit door herhaling zonder druk." }
    ],
    doeDit: [
      "Benoem het verlangen naar de andere ouder rustig.",
      "Maak vaste routines die alleen van jullie twee zijn.",
      "Laat de voorkeursouder niet altijd redden; anders krijgt de andere band geen oefenkans.",
      "Herstel als je gekwetst reageerde."
    ],
    vermijd: [
      "“Dan doe ik het wel niet meer” zeggen.",
      "Het kind laten troosten dat jij je afgewezen voelt.",
      "De andere ouder afkraken of competitie maken.",
      "De voorkeur lezen als definitief oordeel over jouw ouderschap."
    ],
    zegDit: [
      "“Je wil mama. Dat snap ik. Mama komt straks, en ik ben nu bij jou.”",
      "“Jij en ik doen ons eigen bedliedje.”",
      "“Ik klonk gekwetst. Dat was niet jouw taak. Ik ben er weer.”"
    ],
    bronnen: [
      { boek: "good-inside", detail: "Two things are true: het verlangen van het kind erkennen en tegelijk stevig beschikbaar blijven." },
      { boek: "hold-on-to-your-kids", detail: "Hechting wordt actief verzameld via rituelen, warmte en herhaalde contactmomenten." },
      { boek: "philippa-perry", detail: "Ouders moeten hun eigen gekwetstheid herkennen zonder die als last bij het kind te leggen." }
    ],
    gerelateerd: ["baby-eenkennig", "band-versterken", "geen-verbinding-voelen"]
  },
  {
    id: "nieuw-baby-jaloezie",
    vraag: "Mijn oudste is jaloers op de nieuwe baby. Wat doe ik?",
    thema: "gezin",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["baby", "jaloezie", "oudste", "broer", "zus", "regressie", "aandacht"],
    kort: "Zie jaloezie als rouw en onzekerheid, niet als ondankbaarheid. Geef woorden aan het gemis, bescherm de baby én plan dagelijks exclusieve tijd voor je oudste.",
    blokken: [
      { tekst: "Voor ouders is een baby uitbreiding van liefde. Voor een oudste kan het voelen alsof de baan van enig kind zonder overleg werd afgeschaft. Terugval, boosheid of babyachtig gedrag zegt vaak: <strong>ben ik mijn plek kwijt?</strong>" },
      { kop: "Gevoelens mogen lelijk zijn", tekst: "Gottman zou jaloerse uitspraken niet wegduwen: “soms wou je dat de baby even weg was.” Dat klinkt spannend, maar erkenning maakt gevoelens minder gevaarlijk. Je hoeft het gevoel niet mooi te vinden om het veilig te maken." },
      { kop: "Niet helpen forceren", tekst: "Faber & Mazlish waarschuwen tegen rollen: “jij bent de grote broer, jij moet flink zijn.” Laat je oudste klein mogen zijn. Markham's één-op-één-tijd is hier medicijn: elke dag een stukje exclusieve ouder waarin de baby niet meedoet." }
    ],
    doeDit: [
      "Plan dagelijks korte oudste-tijd zonder baby.",
      "Benoem gemengde gevoelens: liefde én boosheid kunnen naast elkaar bestaan.",
      "Laat je oudste helpen als hij wil, niet als bewijs van flink zijn.",
      "Bescherm de baby rustig en direct bij ruw gedrag."
    ],
    vermijd: [
      "“Jij bent nu groot” gebruiken om behoeften af te wijzen.",
      "Jaloezie bestraffen of beschamen.",
      "De baby steeds als reden geven waarom iets niet kan.",
      "Alleen aandacht geven wanneer je oudste moeilijk doet."
    ],
    zegDit: [
      "“Het is soms lastig dat de baby zoveel mama nodig heeft.”",
      "“Jij hoeft de baby niet altijd leuk te vinden. Ik hou van jullie allebei.”",
      "“Ik laat je de baby niet pijn doen. En ik zie dat jij ook aandacht nodig hebt.”"
    ],
    bronnen: [
      { boek: "gottman-eq", detail: "Jaloezie erkennen als emotie helpt kinderen woorden vinden en voorkomt dat gevoelens ondergronds gaan." },
      { boek: "how-to-talk", detail: "Rollen en vergelijkingen tussen broers en zussen vermijden; gevoelens van beide kinderen erkennen." },
      { boek: "peaceful-parent", detail: "Eén-op-één-tijd per kind vermindert rivaliteit en vult de verbindingsbank aan." }
    ],
    gerelateerd: ["ruzie-broers-zussen", "eerlijk-verdelen", "slaan-bijten-schoppen"]
  },
  {
    id: "eerlijk-verdelen",
    vraag: "Hoe verdeel ik aandacht eerlijk tussen mijn kinderen?",
    thema: "gezin",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["eerlijk", "aandacht", "broers", "zussen", "jaloezie", "vergelijken", "voortrekken"],
    kort: "Eerlijk is niet iedereen hetzelfde geven, maar ieder kind geven wat het nodig heeft. Benoem verschillen zonder vergelijken en bouw vaste één-op-één-momenten in.",
    blokken: [
      { tekst: "Kinderen hebben een scherp oog voor eerlijkheid, maar hun definitie is vaak: hetzelfde, nu. Ouders weten: hetzelfde is soms juist oneerlijk. Een baby heeft andere zorg nodig dan een tiener, een ziek kind meer dan een fit kind. <strong>Leg uit zonder de kinderen tegen elkaar af te wegen.</strong>" },
      { kop: "Niet vergelijken, wel individualiseren", tekst: "Faber & Mazlish zijn streng over vergelijken: zelfs positieve vergelijking zaait rivaliteit. Zeg dus niet: “je zus heeft minder hulp nodig.” Zeg: “jij oefent dit nog, dus ik help jou hiermee.” Elk kind wil voelen: ik word gezien in mijn eigenheid." },
      { kop: "Aandacht voorspelbaar maken", tekst: "Markham raadt speciale tijd aan als preventie. Als elk kind weet dat er eigen tijd komt, hoeft het minder te vechten om kruimels. Kohn zou toevoegen: liefde mag nooit voelen als iets wat je moet verdienen door makkelijk, slim of stil te zijn." }
    ],
    doeDit: [
      "Plan per kind kleine vaste momenten, al zijn ze kort.",
      "Leg verschil uit vanuit behoefte, niet vanuit vergelijking.",
      "Benoem unieke eigenschappen zonder rangorde.",
      "Geef aandacht ook bij rustig gedrag, niet alleen bij crisis."
    ],
    vermijd: [
      "“Waarom kan jij niet zoals je broer…”",
      "Alles exact gelijk willen maken, ook als behoeften verschillen.",
      "Het makkelijke kind vergeten omdat het minder lawaai maakt.",
      "Aandacht als beloning of straf gebruiken."
    ],
    zegDit: [
      "“Eerlijk betekent: ik kijk wat ieder van jullie nodig heeft.”",
      "“Vandaag heeft Noor extra hulp nodig. Jouw tijd met mij staat vanavond nog.”",
      "“Ik hou niet evenveel op een weegschaal. Ik hou helemaal van jou en helemaal van je broer.”"
    ],
    bronnen: [
      { boek: "how-to-talk", detail: "Broers en zussen niet vergelijken; elk kind in zijn eigen behoefte en perspectief erkennen." },
      { boek: "peaceful-parent", detail: "Speciale één-op-één-tijd vermindert rivaliteit en versterkt de ouder-kindband." },
      { boek: "unconditional-parenting", detail: "Liefde en aandacht horen onvoorwaardelijk te zijn, niet verdiend via gedrag of rol." }
    ],
    gerelateerd: ["nieuw-baby-jaloezie", "ruzie-broers-zussen", "band-versterken"]
  }
];
