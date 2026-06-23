// ============================================================
// EHBO — Vragen, deel 12: extra cases over verbinding & gezin
// ============================================================

const VRAGEN_12 = [
  extraVraag(
    "speciale-tijd-lukt-niet",
    "Speciale tijd lukt hier niet. Mijn kind wordt juist wilder. Wat nu?",
    "band",
    ["peuter", "kind"],
    ["speciale tijd", "verbinding", "wild", "spelen", "aandacht"],
    "Dat kan juist betekenen dat spanning loskomt. Maak speciale tijd korter, duidelijker begrensd en lichamelijk veilig.",
    "Wanneer een kind eindelijk onverdeelde aandacht krijgt, komt soms eerst alle opgebouwde energie eruit. Dat betekent niet dat speciale tijd niet werkt. Het betekent dat het systeem nog moet leren dat aandacht voorspelbaar terugkomt.",
    "Kort en veilig genoeg",
    "Begin met vijf minuten, kind kiest binnen veilige opties, jij volgt zonder telefoon. Als het te wild wordt, begrens je het gedrag en blijf je in contact.",
    [
      "Start met vijf tot tien minuten.",
      "Kies vooraf wat veilig spel is.",
      "Stop op tijd en kondig het einde warm aan."
    ],
    [
      "Speciale tijd gebruiken om gedrag te corrigeren.",
      "Grenzen loslaten omdat het verbindingstijd is.",
      "Na één wilde poging concluderen dat het niet werkt."
    ],
    ["“Ik speel graag wild, en ik laat je mij niet pijn doen.”"],
    [
      ["peaceful-parent", "Speciale tijd bouwt verbinding en laat spanning vaak via spel ontladen."],
      ["good-inside", "Warm leiderschap houdt verbinding en grenzen tegelijk vast."]
    ],
    ["negatieve-aandacht", "weinig-tijd-verbinding"]
  ),
  extraVraag(
    "kind-heeft-geheimen",
    "Mijn kind heeft geheimen. Moet ik alles willen weten?",
    "band",
    ["kind", "tiener"],
    ["geheimen", "privacy", "vertrouwen", "puber", "openheid"],
    "Nee. Gezonde privacy hoort bij groeien. Jij bewaakt veiligheid en beschikbaarheid, niet elk detail van de binnenwereld.",
    "Geheimen voelen voor ouders soms als verlies van band. Maar een kind dat eigen gedachten, vrienden en ruimte ontwikkelt, is niet automatisch afstandelijk of onveilig.",
    "Open deur, geen zoeklicht",
    "Maak duidelijk welke geheimen niet alleen gedragen moeten worden: gevaar, dreiging, pesten, seksualiteit onder druk, zelfbeschadiging. De rest mag privé groeien.",
    [
      "Respecteer gewone privacy.",
      "Bespreek welke geheimen te zwaar of onveilig zijn.",
      "Blijf benaderbaar zonder verhoor."
    ],
    [
      "Dagboeken of berichten lezen uit nieuwsgierigheid.",
      "Privacy verwarren met afwijzing.",
      "Pas interesse tonen wanneer je iets vermoedt."
    ],
    ["“Je mag privé-dingen hebben. Als iets onveilig of te zwaar is, wil ik dat je niet alleen bent.”"],
    [
      ["self-driven-child", "Zelfstandigheid en eigen ruimte horen bij gezonde ontwikkeling."],
      ["hold-on-to-your-kids", "Beschikbaarheid zonder verhoor houdt de ouder-kindlijn open."]
    ],
    ["privacy-wachtwoorden", "ik-vraag-teveel-door"]
  ),
  extraVraag(
    "praten-na-lange-dag",
    "Na een lange werkdag heb ik geen geduld meer. Hoe blijf ik verbonden?",
    "band",
    ["baby", "peuter", "kind", "tiener"],
    ["werkdag", "geduld", "verbinding", "thuiskomen", "moe"],
    "Maak een overgangsritueel voor jezelf én je kind. Vijf minuten landen kan een hele avond veranderen.",
    "Ouders komen vaak thuis met een vol hoofd, kinderen met een volle emmer. Als die twee meteen botsen, lijkt het alsof niemand wil meewerken. Vaak ontbreekt alleen een overgang.",
    "Eerst landen",
    "Zeg dat je blij bent je kind te zien, neem een glas water, leg je telefoon weg en kies één klein contactmoment. Verbinding hoeft niet groots te zijn om echt te zijn.",
    [
      "Maak de eerste vijf minuten na thuiskomst voorspelbaar.",
      "Vertel kort wat jij nodig hebt: jas uit, water, dan aandacht.",
      "Herstel als je te kortaf was."
    ],
    [
      "Binnenkomen en meteen corrigeren.",
      "Je vermoeidheid als bewijs gebruiken dat je kind lastig is.",
      "De hele avond op automatische piloot blijven."
    ],
    ["“Ik ben blij je te zien. Ik drink water en dan ben ik bij je.”"],
    [
      ["peaceful-parent", "Een ouder die zelf kalm blijft is stap nul voor verbinding en correctie."],
      ["philippa-perry", "Herstel en aanwezigheid wegen zwaarder dan perfect reageren."]
    ],
    ["tijdgebrek-quality-time", "ouderlijke-schuld"]
  ),
  extraVraag(
    "ouderlijke-schuld",
    "Ik voel me schuldig over hoe ik opvoed. Helpt dat schuldgevoel?",
    "band",
    ["baby", "peuter", "kind", "tiener"],
    ["schuld", "ouder", "perfectie", "herstel", "zelfcompassie"],
    "Schuld kan kort richting geven, maar langdurige zelfhaat maakt je minder beschikbaar. Gebruik schuld als signaal: is er iets te herstellen of heb je steun nodig?",
    "Ouderlijke schuld voelt soms alsof het liefde bewijst. Maar een ouder die zichzelf voortdurend afbreekt, heeft minder ruimte om kalm, speels en herstelbaar te blijven.",
    "Van schuld naar verantwoordelijkheid",
    "Vraag: moet ik sorry zeggen, iets aanpassen, rust nemen of hulp vragen? Daarna mag schuld zakken. Je kind heeft een echte ouder nodig, geen perfecte.",
    [
      "Maak onderscheid tussen fout, patroon en vermoeidheid.",
      "Herstel concreet wanneer dat nodig is.",
      "Zoek steun als schuld blijft malen."
    ],
    [
      "Schuld compenseren met alles toestaan.",
      "Jezelf uitschelden als opvoedstrategie.",
      "Geen hulp vragen omdat je perfect wil lijken."
    ],
    ["“Ik deed iets niet goed. Ik kan herstellen zonder mezelf kapot te maken.”"],
    [
      ["raising-good-humans", "Zelfcompassie helpt ouders minder reactief worden."],
      ["philippa-perry", "Ouders onderzoeken patronen en herstellen breuken zonder perfectie-eis."]
    ],
    ["ik-heb-geschreeuwd", "herstellen-na-straf"]
  ),
  extraVraag(
    "hechting-drukke-babyperiode",
    "Ik was in de babyperiode overspoeld. Is de hechting nu beschadigd?",
    "band",
    ["baby", "peuter", "kind"],
    ["hechting", "baby", "schuld", "herstel", "postpartum"],
    "Niet automatisch. Hechting vraagt geen perfecte start, maar veel herhaalde momenten van veiligheid en herstel. Je kunt vandaag nog bouwen.",
    "Ouders kijken soms terug op een zware start met schaamte: huilen, depressie, ziekenhuis, stress, relatieproblemen. Maar ontwikkeling is geen eenmalig examen. Relaties blijven veranderbaar.",
    "Veiligheid stapelt",
    "Begin met voorspelbare zorg, warme reparatie en hulp voor jezelf als je nog overspoeld bent. Een ouder die steun zoekt, beschermt ook het kind.",
    [
      "Bouw dagelijkse voorspelbare rituelen.",
      "Herstel kleine breuken expliciet.",
      "Zoek professionele hulp bij depressie, trauma of blijvende afstand."
    ],
    [
      "Denken dat alles verpest is door een moeilijke periode.",
      "Schuld gebruiken als reden om niet te herstellen.",
      "Alleen op wilskracht doorgaan als je vastloopt."
    ],
    ["“We bouwen veiligheid vanaf vandaag, moment per moment.”"],
    [
      ["power-of-showing-up", "Veilige hechting groeit uit de vier S'en en blijft door herstel en aanwezigheid vormbaar."],
      ["philippa-perry", "Ouders kunnen patronen herkennen en nieuwe relationele ervaringen opbouwen."]
    ],
    ["ouderlijke-schuld", "ouder-geen-klik"]
  ),
  extraVraag(
    "schoolspullen-kwijt",
    "Elke ochtend zijn schoolspullen kwijt. Hoe stop ik de chaos?",
    "gezin",
    ["kind", "tiener"],
    ["ochtend", "schoolspullen", "routine", "chaos", "planning"],
    "Los het niet elke ochtend opnieuw op. Maak een avondroutine en een vaste lanceerplek voor spullen.",
    "Ochtendchaos is vaak geen luiheid, maar een systeemprobleem. Een kind met weinig tijd, veel prikkels en geen vaste plek moet elke ochtend opnieuw plannen.",
    "Ontwerp de omgeving",
    "Een haak, bak, checklist en avondmoment zijn saaier dan preken, maar veel effectiever. De vraag is: waar hoort alles te landen vóór het slapen?",
    [
      "Maak één vaste plek voor tas, jas, schoenen en brooddoos.",
      "Check spullen 's avonds, niet in paniek 's ochtends.",
      "Gebruik een visuele lijst voor jongere kinderen."
    ],
    [
      "Elke ochtend dezelfde preek geven.",
      "Alles zelf zoeken terwijl je moppert.",
      "Verwachten dat planning vanzelf ontstaat."
    ],
    ["“We lossen dit vanavond op, niet morgenochtend in paniek.”"],
    [
      ["self-driven-child", "Structuur ondersteunt executieve functies zonder alles over te nemen."],
      ["how-to-talk", "Concrete beschrijving en routines werken beter dan verwijten."]
    ],
    ["ochtendstress", "verantwoordelijkheid-geven"]
  ),
  extraVraag(
    "oudste-wil-baby-weg",
    "Mijn oudste zegt dat de baby weg moet. Moet ik schrikken?",
    "gezin",
    ["peuter", "kind"],
    ["baby", "jaloers", "oudste", "gezin", "gevoelens"],
    "Nee, niet meteen. Dat is vaak taal voor verlies en jaloezie. Neem het gevoel serieus en houd natuurlijk iedereen veilig.",
    "Een kind kan van de baby houden en tegelijk willen dat alles weer was zoals vroeger. Die ambivalentie klinkt soms hard omdat jonge kinderen nog weinig diplomatie hebben.",
    "Gevoel erkennen, gedrag begrenzen",
    "Je hoeft niet te zeggen dat het lief is. Je kunt zeggen: soms wil je dat de baby er niet was, want je mist hoe het was. En: we doen de baby geen pijn.",
    [
      "Erken de gemengde gevoelens.",
      "Geef exclusieve aandacht zonder baby erbij.",
      "Bewaak veiligheid rustig."
    ],
    [
      "Je kind beschamen om jaloerse woorden.",
      "Eisen dat het alleen blij is met de baby.",
      "Jaloezie negeren tot gedrag escaleert."
    ],
    ["“Soms wil je dat het weer alleen jij was. Dat mag je voelen. De baby blijft veilig.”"],
    [
      ["philippa-perry", "Kinderen hebben ruimte nodig voor echte, ook ongemakkelijke gevoelens."],
      ["good-inside", "Gedrag en woorden worden gezien als signaal van behoefte aan verbinding."]
    ],
    ["baby-tweede-kind-jaloers", "jaloers-op-baby"]
  ),
  extraVraag(
    "gedeelde-kamer-ruzie",
    "Kinderen delen een kamer en maken steeds ruzie. Wat helpt?",
    "gezin",
    ["kind", "tiener"],
    ["kamer delen", "broers", "zussen", "privacy", "ruzie"],
    "Maak privacy concreet, ook als ruimte beperkt is. Ieder kind heeft een eigen plek, eigen spullen en duidelijke afspraken nodig.",
    "Een gedeelde kamer vraagt vaardigheden die zelfs volwassenen lastig vinden: grenzen, geluid, spullen, licht, rust. Ruzie betekent niet dat delen mislukt, maar dat het systeem duidelijker moet.",
    "Eigendom en rust beschermen",
    "Maak persoonlijke zones: plank, doos, bed, hoofdtelefoon, lampafspraak. En plan waar een kind naartoe kan als het even alleen moet zijn.",
    [
      "Geef elk kind een eigen plek of bak die van hem of haar is.",
      "Maak afspraken over licht, geluid en spullen lenen.",
      "Plan individuele rustmomenten."
    ],
    [
      "Alles gemeenschappelijk maken omdat de kamer gedeeld is.",
      "Privacy als luxe behandelen.",
      "Ruzies steeds oplossen door te zoeken wie begon."
    ],
    ["“Jullie delen de kamer, niet elkaars spullen.”"],
    [
      ["how-to-talk", "Problemen samen definiëren helpt kinderen oplossingen bedenken zonder schuldstrijd."],
      ["good-inside", "Grenzen rond eigendom geven veiligheid en verminderen strijd."]
    ],
    ["kind-pakt-spullen-af", "eigen-plek-gezin"]
  ),
  extraVraag(
    "klusjes-eerlijk-verdelen",
    "Hoe verdeel ik klusjes zonder elke week discussie?",
    "gezin",
    ["kind", "tiener"],
    ["klusjes", "gezin", "verantwoordelijkheid", "eerlijk", "taken"],
    "Maak klusjes onderdeel van samenleven, niet van gunst of straf. Houd taken concreet, zichtbaar en passend bij leeftijd.",
    "Klusjes lopen vast wanneer ze vaag zijn: help eens meer, ruim beter op. Kinderen hebben duidelijke eindpunten nodig: tafel afruimen, vuilbak buiten, sokken sorteren.",
    "Samenleven is meedoen",
    "Maak een vast schema en bespreek waarom iedereen bijdraagt. Extra betaling kan voor extra werk, maar basistaken horen bij gezin zijn.",
    [
      "Maak taken zichtbaar op een lijst.",
      "Koppel klusjes aan vaste momenten.",
      "Leer de taak eerst samen voor je zelfstandigheid verwacht."
    ],
    [
      "Klusjes alleen inzetten als straf.",
      "Vaag blijven en dan boos worden.",
      "Alles corrigeren tot je kind afhaakt."
    ],
    ["“In dit huis draagt iedereen iets bij. Ik leer je eerst hoe.”"],
    [
      ["self-driven-child", "Verantwoordelijkheid groeit doordat een kind passende taken zelf in handen krijgt, met duidelijke structuur."],
      ["unconditional-parenting", "Samenwerken werkt duurzamer dan controle via belonen en straffen."]
    ],
    ["klusjes-in-gezin", "zakgeld-verantwoordelijkheid"]
  ),
  extraVraag(
    "samengesteld-gezin",
    "Een nieuw samengesteld gezin botst. Hoe snel mag ik verbondenheid verwachten?",
    "gezin",
    ["kind", "tiener"],
    ["samengesteld gezin", "stiefouder", "scheiding", "band", "loyaliteit"],
    "Langzamer dan volwassenen hopen. Verbondenheid kan niet worden geëist; ze groeit door veiligheid, respect voor loyaliteit en tijd.",
    "Voor kinderen is een samengesteld gezin niet alleen nieuw gezelschap, maar ook bewijs dat de oude gezinsvorm voorbij is. Zelfs als de nieuwe partner lief is, kan het ingewikkeld voelen.",
    "Relatie vóór gezag",
    "Een stiefouder die meteen veel discipline neemt, krijgt vaak weerstand. Bouw eerst voorspelbare vriendelijkheid, gedeelde momenten en respect voor de band met beide ouders.",
    [
      "Geef kinderen tijd zonder verbondenheid te forceren.",
      "Laat de biologische ouder hoofdverantwoordelijk voor lastige discipline blijven in het begin.",
      "Maak ruimte voor loyaliteitsgevoelens."
    ],
    [
      "Eisen dat iedereen meteen één gezin voelt.",
      "Een stiefouder direct als autoriteit positioneren zonder band.",
      "Verdriet over de oude situatie wegduwen."
    ],
    ["“Je hoeft dit niet meteen als thuis te voelen. We bouwen rustig.”"],
    [
      ["hold-on-to-your-kids", "Gezag werkt binnen relatie; verbinding moet eerst verzameld worden."],
      ["philippa-perry", "Kinderen hebben waarheid en ruimte voor gemengde gevoelens nodig."]
    ],
    ["band-na-scheiding", "verschillende-regels-twee-huizen"]
  ),
  extraVraag(
    "verschillende-regels-twee-huizen",
    "In twee huizen gelden andere regels. Raakt mijn kind daarvan in de war?",
    "gezin",
    ["peuter", "kind", "tiener"],
    ["co-ouderschap", "regels", "twee huizen", "scheiding", "grenzen"],
    "Kinderen kunnen verschillen aan als de basis voorspelbaar en niet vijandig is. Leg rustig uit: in dit huis doen we het zo.",
    "Het probleem is meestal niet dat regels verschillen, maar dat ouders elkaar ermee bestrijden. Dan wordt het kind drager van spanning.",
    "Eigen huis, rustige grens",
    "Je hoeft het andere huis niet te kopiëren of af te breken. Benoem je eigen regel zonder vergelijking: bij ons laden telefoons beneden, bij ons is bedtijd zo.",
    [
      "Gebruik de zin: “in dit huis...”.",
      "Maak overgangen voorspelbaar.",
      "Bespreek grote veiligheidsregels wel met de andere ouder."
    ],
    [
      "De andere ouder afvallen via regels.",
      "Je kind laten kiezen welk huis beter is.",
      "Elke verschillenstrijd via je kind voeren."
    ],
    ["“Bij papa kan het anders zijn. In dit huis doen we het zo.”"],
    [
      ["philippa-perry", "Kinderen mogen niet verantwoordelijk worden voor volwassen conflicten."],
      ["good-inside", "Stevige, rustige grenzen geven veiligheid zonder oordeel over anderen."]
    ],
    ["co-ouderschap-overgangen", "band-na-scheiding"]
  ),
  extraVraag(
    "familiefeest-overprikkeling",
    "Familiefeesten eindigen altijd in drama. Hoe voorkom ik dat?",
    "gezin",
    ["peuter", "kind"],
    ["familiefeest", "overprikkeling", "familie", "drukte", "grenzen"],
    "Plan alsof prikkels echt zijn: korter blijven, pauzes, eten, rustplek en geen verplichte knuffels. Preventie is geen aanstellerij.",
    "Familiefeesten stapelen alles: drukte, suiker, verwachtingen, slaapverstoring en sociale druk. Veel kinderen houden dat een tijdje vol en storten dan in.",
    "Vertrek vóór de breuk",
    "Maak vooraf een plan met je partner: wanneer pauze, wanneer weg, welke grens met familie. Het is makkelijker vriendelijk te vertrekken vóór iedereen overloopt.",
    [
      "Plan een rustige plek en korte pauzes.",
      "Bescherm slaap en eten waar mogelijk.",
      "Vertel familie vooraf welke grenzen belangrijk zijn."
    ],
    [
      "Blijven tot je kind volledig instort.",
      "Je kind dwingen tot knuffels of sociaal toneel.",
      "Alle familieverwachtingen boven rust en kalmte zetten."
    ],
    ["“We nemen even pauze. Het is veel vandaag.”"],
    [
      ["science-of-parenting", "Prikkelbelasting en vermoeidheid vergroten stressreacties bij kinderen."],
      ["good-inside", "Ouders mogen warm leiderschap tonen, ook bij sociale druk van volwassenen."]
    ],
    ["overprikkeld-feestjes", "familie-ondermijnt-grens"]
  ),
  extraVraag(
    "ruzie-aan-tafel",
    "Aan tafel maakt iedereen ruzie. Moet eten dan maar apart?",
    "gezin",
    ["kind", "tiener"],
    ["maaltijd", "ruzie", "gezin", "tafel", "sfeer"],
    "Soms is tijdelijk apart eten nodig om te resetten, maar het doel blijft een tafel die veilig genoeg voelt. Maak regels voor gesprek, niet alleen voor eten.",
    "De eettafel verzamelt vermoeidheid van de dag. Als elk onderwerp correctie wordt, gaat iedereen verdedigen. Dan is eten niet langer rustpunt maar arena.",
    "Maak tafelgesprekken lichter",
    "Start met korte maaltijden, één gespreksregel en geen zware conflicten tijdens eten. Problemen bespreek je later. Aan tafel oefen je samen zijn.",
    [
      "Maak één regel: geen vernederen aan tafel.",
      "Houd moeilijke gesprekken voor later.",
      "Gebruik lichte tafelvragen of stilte."
    ],
    [
      "Elke maaltijd gebruiken voor opvoedpreken.",
      "Kinderen vastzetten in lange gesprekken terwijl ze moe zijn.",
      "Sfeer opofferen voor één hap of één punt."
    ],
    ["“Dit bespreken we na het eten. Aan tafel houden we het veilig.”"],
    [
      ["hold-on-to-your-kids", "Gezinsrituelen zoals samen eten dragen verbinding wanneer ze veilig blijven."],
      ["gottman-eq", "Emoties erkennen en grenzen op kwetsend gedrag houden voorkomt dat het uit de hand loopt."]
    ],
    ["maaltijd-als-strijd", "schermen-bij-eten"]
  ),
  extraVraag(
    "ouders-oneens-waar-kind-bij-is",
    "Wij spreken elkaar tegen waar de kinderen bij zijn. Hoe herstellen we dat?",
    "gezin",
    ["peuter", "kind", "tiener"],
    ["ouders oneens", "conflict", "regels", "gezin", "herstel"],
    "Herstel hardop: wij waren het oneens en regelen dit als volwassenen. Kinderen hebben niet perfecte eensgezindheid nodig, wel veiligheid.",
    "Ouders hoeven niet altijd hetzelfde te denken. Maar als kinderen voelen dat ze ertussen kunnen komen of partij moeten kiezen, wordt het onveilig.",
    "Eén front hoeft geen één mening te zijn",
    "Spreek af: bij twijfel pauzeren we en overleggen we apart. Als je elkaar toch tegensprak, kom je terug met een gezamenlijke zin.",
    [
      "Zeg hardop dat het volwassen overleg is.",
      "Overleg apart bij grote verschillen.",
      "Kom terug met één tijdelijke afspraak."
    ],
    [
      "Je kind laten kiezen wie gelijk heeft.",
      "Elkaar ondermijnen om de populaire ouder te zijn.",
      "Doen alsof kinderen spanning niet merken."
    ],
    ["“Wij waren het oneens. Dat lossen wij op. Jij hoeft niet te kiezen.”"],
    [
      ["philippa-perry", "Kinderen hebben duidelijke volwassen verantwoordelijkheid nodig, niet verborgen spanning."],
      ["good-inside", "Stevig ouderschap kan ook betekenen: herstellen na rommelige momenten."]
    ],
    ["ouders-oneens-opvoeding", "herstellen-na-straf"]
  ),
  extraVraag(
    "familie-ondermijnt-grens",
    "Familie ondermijnt onze grens met “ach, laat toch”. Wat zeg ik?",
    "gezin",
    ["peuter", "kind"],
    ["familie", "grenzen", "ondermijnen", "grootouders", "snoep"],
    "Houd het kort en vriendelijk: dit is onze afspraak. Je hoeft je grens niet te verdedigen tot iedereen overtuigd is.",
    "Wanneer familie je grens belachelijk maakt, voelt het alsof je tegelijk je kind en je volwassen relaties moet managen. Juist dan helpt een rustige standaardzin.",
    "Niet overtuigen, wel begrenzen",
    "Bedank voor betrokkenheid, herhaal de regel en verplaats indien nodig. Je kind ziet zo dat grenzen niet verdwijnen onder sociale druk.",
    [
      "Gebruik één vaste zin.",
      "Bespreek herhaald ondermijnen later apart.",
      "Laat je kind niet verantwoordelijk worden voor de familiegrens."
    ],
    [
      "Een discussie starten bij elk familiecommentaar.",
      "Je grens laten vallen uit schaamte.",
      "Familie publiek aanvallen als een rustige zin volstaat."
    ],
    ["“Ik snap dat jij het anders zou doen. Wij houden deze afspraak.”"],
    [
      ["good-inside", "Sturdy leadership houdt een grens zonder hardheid."],
      ["hold-on-to-your-kids", "Ouders blijven het primaire kompas voor het kind."]
    ],
    ["grenzen-bij-grootouders", "familiefeest-overprikkeling"]
  ),
  extraVraag(
    "kinderen-delen-kamer",
    "Mijn kinderen moeten een kamer delen. Hoe bewaak ik eigen ruimte?",
    "gezin",
    ["kind", "tiener"],
    ["kamer", "privacy", "broers", "zussen", "ruimte"],
    "Maak eigen ruimte symbolisch én praktisch: eigen plank, eigen bak, eigen bedregels, eigen rustmoment. Privacy hoeft geen aparte kamer te betekenen.",
    "Een gedeelde kamer kan warm zijn, maar ook veel vragen. Kinderen hebben een plek nodig waar spullen niet steeds sociaal onderhandelbaar zijn.",
    "Eigenheid zichtbaar maken",
    "Gebruik labels, bakken, gordijn, hoofdtelefoon of persoonlijke lamp. Spreek af wat gedeeld is en wat niet. Dat voorkomt veel ruzie vooraf.",
    [
      "Geef elk kind eigen opbergruimte.",
      "Maak regels rond lenen en bedden.",
      "Plan momenten waarop ieder alleen kan zijn."
    ],
    [
      "Alles delen omdat ruimte schaars is.",
      "Privacy pas serieus nemen bij tieners.",
      "Ruzies behandelen als ondankbaarheid."
    ],
    ["“Je deelt de kamer, maar je mag eigen spullen en rust hebben.”"],
    [
      ["good-inside", "Grenzen rond eigendom en lichaam geven kinderen veiligheid."],
      ["how-to-talk", "Duidelijke afspraken en probleemoplossing voorkomen herhaalde strijd."]
    ],
    ["gedeelde-kamer-ruzie", "kind-pakt-spullen-af"]
  ),
  extraVraag(
    "vakantie-ontregelt",
    "Vakantie ontregelt alles. Hoe soepel moet ik zijn?",
    "gezin",
    ["baby", "peuter", "kind"],
    ["vakantie", "routine", "slaap", "ontregeling", "reizen"],
    "Wees flexibel aan de randen, maar bescherm de basis: slaap, eten, rust en een paar herkenbare rituelen.",
    "Vakantie is leuk én ontregelend. Nieuwe bedden, later eten, familie, reizen en minder voorspelbaarheid vragen veel van kinderen. Gedrag dat thuis lukt, kan tijdelijk verdwijnen.",
    "Neem thuis mee in miniatuur",
    "Een vast slaapzinnetje, knuffel, ochtendritueel of rustmoment geeft houvast. Niet om vakantie streng te maken, maar om het zenuwstelsel te helpen.",
    [
      "Bewaar één of twee vaste rituelen.",
      "Plan rust na drukke dagen.",
      "Verlaag verwachtingen rond gedrag op reisdagen."
    ],
    [
      "Alle routines tegelijk loslaten en perfect gedrag verwachten.",
      "Slaaptekort romantiseren tot iedereen instort.",
      "Ontregeling zien als bewijs dat je kind verwend is."
    ],
    ["“Vakantie is anders. We houden een paar dingen hetzelfde zodat je lijf mee kan.”"],
    [
      ["nurtureshock", "Slaap en ritme beïnvloeden gedrag en het kalmeren van emoties sterk."],
      ["peaceful-parent", "Voorspelbaarheid en ouderlijke kalmte helpen bij overgangen."]
    ],
    ["slaap-hoe-belangrijk", "paniek-bij-verandering"]
  ),
  extraVraag(
    "verhuizen-met-kinderen",
    "We gaan verhuizen. Hoe bereid ik mijn kind voor?",
    "gezin",
    ["peuter", "kind", "tiener"],
    ["verhuizen", "verandering", "afscheid", "nieuw huis", "stress"],
    "Geef tijd voor afscheid en maak het nieuwe concreet. Een kind heeft niet alleen dozen nodig, maar verhaal, controle en rituelen.",
    "Verhuizen is verlies en begin tegelijk. Volwassenen zien vaak praktische taken; kinderen voelen vooral: mijn kamer, buurt, school, geuren en zekerheden veranderen.",
    "Maak een brug tussen oud en nieuw",
    "Laat je kind foto's maken, afscheid nemen, een doos kiezen, de nieuwe kamer mee plannen. Vertel wat hetzelfde blijft: mensen, rituelen, knuffels, jullie.",
    [
      "Vertel op tijd en herhaal de stappen.",
      "Laat je kind iets kiezen voor de nieuwe plek.",
      "Maak een afscheid van het oude huis."
    ],
    [
      "Verhuizen pas bespreken wanneer dozen al staan.",
      "Verdriet wegwuiven omdat het nieuwe huis beter is.",
      "Alle controle bij volwassenen houden."
    ],
    ["“We nemen afscheid van dit huis en bouwen nieuwe gewoontes in het volgende.”"],
    [
      ["whole-brain-child", "Een verhaal maken rond grote ervaringen helpt kinderen integreren."],
      ["self-driven-child", "Keuze en controle verlagen stress bij verandering."]
    ],
    ["paniek-bij-verandering", "vakantie-ontregelt"]
  ),
  extraVraag(
    "huisdier-overleden",
    "Ons huisdier is overleden. Hoe praat ik daarover?",
    "gezin",
    ["peuter", "kind", "tiener"],
    ["huisdier", "verlies", "rouw", "dood", "verdriet"],
    "Gebruik eerlijke woorden en laat verdriet zichtbaar zijn. Een huisdier kan voor een kind een echte hechtingsfiguur zijn.",
    "Volwassenen zeggen soms “het was maar een dier” om te troosten. Voor kinderen kan het verlies groot en concreet zijn: een maatje, routine, veilige aanwezigheid.",
    "Rouw in gewone taal",
    "Zeg dood in plaats van slapen, zeker bij jonge kinderen. Maak ruimte voor vragen, tekeningen, ritueel of herinneringsplek. Verdriet hoeft niet snel weg.",
    [
      "Gebruik duidelijke woorden over dood.",
      "Maak een klein afscheidsritueel.",
      "Laat verschillende rouwreacties toe."
    ],
    [
      "Zeggen dat het dier slaapt of weg is.",
      "Verdriet minimaliseren.",
      "Snel een nieuw dier nemen om pijn weg te maken."
    ],
    ["“Hij is dood. Dat betekent dat zijn lichaam niet meer werkt. We mogen heel verdrietig zijn.”"],
    [
      ["philippa-perry", "Kinderen hebben eerlijke, draaglijke waarheid nodig in plaats van verwarrende verzachting."],
      ["gottman-eq", "Verdriet benoemen en erkennen helpt kinderen rouw dragen."]
    ],
    ["moeilijk-nieuws-uitleggen", "verdriet-om-vriendschap"]
  ),
  extraVraag(
    "ongelijke-aandacht",
    "Eén kind vraagt veel meer aandacht. Is dat oneerlijk voor de rest?",
    "gezin",
    ["peuter", "kind", "tiener"],
    ["aandacht", "broers", "zussen", "eerlijk", "gezin"],
    "Soms heeft één kind tijdelijk meer nodig. Eerlijk is niet altijd gelijk; leg uit dat behoeften verschillen en bescherm ook kleine momenten voor de anderen.",
    "Gezinnen zijn zelden perfect verdeeld. Een kind met zorgen, temperament of fase kan veel ruimte innemen. Broers en zussen merken dat en kunnen zich onzichtbaar voelen.",
    "Maak verschil bespreekbaar",
    "Zeg: je broer heeft nu veel hulp nodig, en jij blijft ook belangrijk. Plan mini-momenten met de andere kinderen en benoem hun geduld zonder ze groot te maken.",
    [
      "Leg leeftijdspassend uit waarom aandacht ongelijk verdeeld is.",
      "Plan korte individuele momenten met elk kind.",
      "Vraag stille kinderen ook hoe het met hen gaat."
    ],
    [
      "Doen alsof niemand verschil merkt.",
      "Het rustige kind altijd laten wachten.",
      "Een kind met veel noden beschamen om de aandacht."
    ],
    ["“Hij heeft nu veel hulp nodig. Jij hoeft niet onzichtbaar te worden.”"],
    [
      ["good-inside", "Kinderen hebben nodig dat hun behoefte gezien wordt, niet dat alles exact gelijk is."],
      ["philippa-perry", "Echte gevoelens in het gezin mogen benoemd worden zonder schuld."]
    ],
    ["mythe-gelijk-behandelen", "weinig-tijd-verbinding"]
  ),
  extraVraag(
    "eigen-plek-gezin",
    "Hoe geef ik mijn kind een eigen plek in een druk gezin?",
    "gezin",
    ["peuter", "kind", "tiener"],
    ["eigen plek", "druk gezin", "privacy", "rust", "ruimte"],
    "Eigen plek hoeft geen eigen kamer te zijn. Het kan een mand, plank, hoek, ritueel of tijdslot zijn waar je kind niet gestoord wordt.",
    "In drukke gezinnen raken kinderen soms hun gevoel van eigenheid kwijt: spullen worden gedeeld, aandacht is schaars, geluid is overal. Een eigen plek helpt het zenuwstelsel landen.",
    "Maak eigen verantwoordelijkheid tastbaar",
    "Kies samen wat van je kind is en wanneer het rust mag hebben. Bescherm die afspraak ook tegenover broers, zussen en volwassenen.",
    [
      "Maak een eigen bak, plank of hoek.",
      "Spreek af wanneer je kind niet gestoord wordt.",
      "Respecteer lichaam en spullen als basisgrens."
    ],
    [
      "Privacy pas toestaan als beloning.",
      "Alles delen onder het motto gezin.",
      "Een rustig kind vergeten omdat het weinig vraagt."
    ],
    ["“Dit is jouw plek. Anderen vragen eerst.”"],
    [
      ["self-driven-child", "Zelf de baas zijn en controle over kleine gebieden ondersteunen het zichzelf kalmeren."],
      ["good-inside", "Grenzen rond lichaam, spullen en ruimte helpen kinderen zich veilig voelen."]
    ],
    ["kinderen-delen-kamer", "ongelijke-aandacht"]
  ),
  extraVraag(
    "gezinsvergadering",
    "Heeft een gezinsvergadering zin of wordt dat saai?",
    "gezin",
    ["kind", "tiener"],
    ["gezinsvergadering", "afspraken", "gezin", "problemen", "samenwerken"],
    "Het kan veel zin hebben als het kort, concreet en oplossingsgericht blijft. Geen rechtbank, wel samen het systeem verbeteren.",
    "Veel gezinsproblemen herhalen zich omdat ze alleen in de hitte besproken worden. Een rustig moment maakt het makkelijker om taken, schermen, ruzies of ochtendroutine samen te bekijken.",
    "Kort en praktisch",
    "Begin met één onderwerp, laat iedereen één idee geven, kies één experiment voor een week. Sluit af met iets lichts. Zo wordt het geen preekavond.",
    [
      "Hou het bij één of twee onderwerpen.",
      "Vraag ideeën van kinderen serieus uit.",
      "Maak een experiment voor één week."
    ],
    [
      "De vergadering gebruiken om kinderen te overladen met kritiek.",
      "Te lang praten zonder besluit.",
      "Alleen vergaderen wanneer ouders boos zijn."
    ],
    ["“Wat is één kleine afspraak die deze week zou helpen?”"],
    [
      ["how-to-talk", "Probleemoplossing met kinderen werkt beter dan bevelen van bovenaf."],
      ["unconditional-parenting", "Met kinderen werken bevordert verantwoordelijkheid meer dan controle over kinderen."]
    ],
    ["klusjes-eerlijk-verdelen", "familieafspraken-smartphone"]
  )
];
