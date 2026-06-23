// ============================================================
// EHBO — Vragen, deel 8: extra cases over emoties & grenzen
// ============================================================

const VRAGEN_8 = [
  extraVraag(
    "driftbui-na-nee",
    "Elke nee wordt een driftbui. Moet ik minder nee zeggen?",
    "emoties",
    ["peuter", "kind"],
    ["nee", "driftbui", "grens", "teleurstelling", "boos"],
    "Niet per se minder nee, wel beter gedragen nee. Een kind mag instorten over je grens; jouw taak is warm blijven én de grens niet laten verdwijnen.",
    "Een nee raakt bij jonge kinderen direct aan verlies: iets wat ze wilden, kan niet. Dat gevoel is echt. De fout is niet de driftbui, maar denken dat de driftbui betekent dat je grens verkeerd was.",
    "Twee waarheden tegelijk",
    "Je kunt zeggen: ik snap dat je boos bent, en het antwoord blijft nee. Die combinatie bouwt veiligheid. Alleen streng zijn maakt de storm groter; alleen toegeven leert dat stormen grenzen verplaatsen.",
    [
      "Gebruik korte zinnen: gevoel plus grens.",
      "Blijf lichamelijk rustig en dichtbij.",
      "Herhaal niet eindeloos waarom."
    ],
    [
      "Toegeven puur om de driftbui te stoppen.",
      "De emotie behandelen als ongehoorzaamheid.",
      "Midden in de storm lange uitleg geven."
    ],
    ["“Je wilde het heel graag. Het antwoord blijft nee. Ik blijf bij je.”"],
    [
      ["good-inside", "Twee dingen kunnen tegelijk waar zijn: gevoelens erkennen en grenzen houden kunnen samengaan."],
      ["whole-brain-child", "Bij overspoeling is verbinding nodig voordat redeneren weer werkt."]
    ],
    ["driftbui-winkel", "kind-blijft-hangen-in-boosheid"]
  ),
  extraVraag(
    "schaamte-na-uitbarsting",
    "Mijn kind schaamt zich na een uitbarsting. Hoe praat ik erover?",
    "emoties",
    ["kind", "tiener"],
    ["schaamte", "uitbarsting", "herstel", "sorry", "emoties"],
    "Maak verschil tussen gedrag en identiteit. Je kind deed iets moeilijks; het ís niet slecht. Herstel wordt pas mogelijk als schaamte zakt.",
    "Na een uitbarsting zie je soms een kind dat stoer doet, wegloopt of lacht. Daaronder zit vaak schaamte. Als jij dan nog harder duwt, gaat het kind zichzelf verdedigen in plaats van herstellen.",
    "Van schaamte naar verantwoordelijkheid",
    "Begin met: je bent niet slecht, en er is wel iets om goed te maken. Dat houdt de deur open voor echte verantwoordelijkheid zonder dat je kind zichzelf hoeft te haten.",
    [
      "Wacht tot iedereen rustig is.",
      "Benoem gedrag concreet en zonder etiket.",
      "Vraag wat herstel kan zijn."
    ],
    [
      "“Zie je wel, jij verpest altijd alles” zeggen.",
      "Herstel verwarren met vernedering.",
      "Een kind dwingen tot publieke excuses."
    ],
    ["“Je bent goed. Wat er gebeurde was niet oké. We gaan herstellen.”"],
    [
      ["good-inside", "Een kind blijft goed vanbinnen; gedrag wijst op een vaardigheid die nog steun nodig heeft."],
      ["philippa-perry", "Breuk en herstel versterken relaties wanneer schaamte niet de leiding krijgt."]
    ],
    ["ik-heb-geschreeuwd", "mythe-sorry-afdwingen"]
  ),
  extraVraag(
    "perfectionisme-boos-fout",
    "Mijn kind wordt woedend als iets niet meteen lukt. Wat helpt?",
    "emoties",
    ["kind", "tiener"],
    ["perfectionisme", "fout", "boos", "falen", "leren"],
    "Help je kind fouten zien als informatie, niet als bewijs van tekortschieten. Prijs poging, strategie en opnieuw proberen, niet foutloosheid.",
    "Perfectionisme klinkt soms als ambitie, maar voelt voor een kind vaak als dreiging: als ik faal, ben ik minder waard. Dan wordt een fout geen leermoment maar een aanval op identiteit.",
    "Maak falen kleiner en concreter",
    "Zeg niet alleen dat fouten mogen; laat het zien. Doe zelf iets onhandigs, herstel rustig, en bespreek welke strategie het kind kan proberen. Zo wordt falen een onderdeel van leren.",
    [
      "Gebruik het woord “nog”: je kunt dit nog niet.",
      "Vraag welke strategie het wil proberen.",
      "Vertel hardop over je eigen kleine fouten."
    ],
    [
      "Alleen eindresultaat prijzen.",
      "“Doe niet zo moeilijk” zeggen bij paniek.",
      "De taak overnemen om frustratie te vermijden."
    ],
    ["“Een fout vertelt ons wat de volgende stap is.”"],
    [
      ["nurtureshock", "Proceslof kweekt doorzetting; slimheidslof vergroot faalangst."],
      ["self-driven-child", "Zelfstandigheid en het gevoel iets te kunnen helpen kinderen stress rond prestaties dragen."]
    ],
    ["faalangst-perfectionisme", "kind-snel-gefrustreerd"]
  ),
  extraVraag(
    "woede-bij-verliezen",
    "Mijn kind kan niet tegen verliezen. Hoe oefen ik dat?",
    "emoties",
    ["peuter", "kind"],
    ["verliezen", "spel", "woede", "competitie", "frustratie"],
    "Verliezen is een echte oefening in teleurstelling. Houd spel klein, benoem de pijn en oefen sportief herstel wanneer het brein weer online is.",
    "Voor een kind kan verliezen voelen als vernedering. Het gaat niet alleen om het spel, maar om status, schaamte en controleverlies. Daarom helpt een preek over sportiviteit zelden midden in de woede.",
    "Oefen buiten het heetste moment",
    "Speel korte spelletjes, laat jezelf ook verliezen en doe de taal voor: balen, adem, opnieuw. De vaardigheid groeit door herhaling in veilige doses.",
    [
      "Begin met korte spellen met lage inzet.",
      "Benoem: “verliezen prikt”.",
      "Oefen een vaste eindzin na winnen en verliezen."
    ],
    [
      "Uitlachen of plagen na verlies.",
      "Stoppen met alle spellen omdat verliezen moeilijk is.",
      "Meteen eisen dat je kind vrolijk feliciteert."
    ],
    ["“Je baalt. We ademen, en dan ruimen we samen op.”"],
    [
      ["gottman-eq", "Emoties begeleiden erkent het gevoel en zoekt daarna passend gedrag."],
      ["nurtureshock", "Uitdagingen leren dragen vraagt procesgericht oefenen, niet alleen complimenten bij succes."]
    ],
    ["kind-snel-gefrustreerd", "perfectionisme-boos-fout"]
  ),
  extraVraag(
    "verdriet-om-vriendschap",
    "Mijn kind is verdrietig omdat een vriend(in) afstand neemt. Wat zeg ik?",
    "emoties",
    ["kind", "tiener"],
    ["vriendschap", "verdriet", "afwijzing", "vrienden", "pijn"],
    "Ga niet te snel oplossen of relativeren. Sociale pijn is echt. Luister eerst, benoem het verlies en help pas later kijken naar opties.",
    "Vriendschappen zijn voor kinderen geen bijzaak. Afwijzing raakt aan erbij horen. Als je zegt “er zijn genoeg andere vrienden”, bedoel je troost, maar je kind hoort vaak: mijn verdriet is overdreven.",
    "Eerst rouwen, dan bewegen",
    "Laat de pijn bestaan. Daarna kun je vragen: wil je herstellen, afstand nemen, iemand anders opzoeken, of hulp van school? Het kind mag leren dat relaties veranderen zonder dat het waardeloos is.",
    [
      "Luister zonder de vriend meteen slecht te maken.",
      "Benoem dat sociale pijn echt pijn doet.",
      "Vraag of je kind advies wil of alleen luisteren."
    ],
    [
      "Meteen oplossingen geven.",
      "De andere kinderen demoniseren zonder context.",
      "Je eigen oude vriendschapspijn op het verhaal leggen."
    ],
    ["“Dat doet pijn. Je wilde erbij horen en nu voelt het alsof je eruit valt.”"],
    [
      ["philippa-perry", "Gevoelens worden dragelijker wanneer ze serieus genomen worden."],
      ["gottman-eq", "Luisteren en erkennen gaan vóór probleemoplossing."]
    ],
    ["kind-zegt-niets-over-school", "vergelijken-met-anderen"]
  ),
  extraVraag(
    "jaloers-op-baby",
    "Mijn kind is jaloers op de baby. Hoe voorkom ik dat het erger wordt?",
    "emoties",
    ["peuter", "kind"],
    ["jaloezie", "baby", "broer", "zus", "aandacht"],
    "Jaloezie wordt erger door schaamte, niet door erkenning. Zeg dat het logisch is dat delen van mama of papa soms stom voelt, en geef exclusieve aandacht.",
    "Een nieuwe baby vraagt enorm veel zichtbare zorg. Voor het oudere kind kan dat voelen als degradatie. Jaloezie is dan geen bewijs dat het kind ondankbaar is, maar dat het zoekt naar zekerheid.",
    "Bewijs plek met daden",
    "Kleine rituelen werken beter dan grote verklaringen. Tien minuten speciale tijd, een taak die niet verplicht voelt, en woorden voor ambivalente gevoelens: je kunt van de baby houden en hem soms weg wensen.",
    [
      "Plan dagelijks een klein moment alleen met het oudere kind.",
      "Erken jaloerse gedachten zonder te schrikken.",
      "Laat bezoek ook aandacht aan de oudste geven."
    ],
    [
      "“Jij bent nu groot” gebruiken om behoeften weg te duwen.",
      "Jaloezie beschamen.",
      "Je kind alleen prijzen als het helpt met de baby."
    ],
    ["“Een baby erbij is soms leuk en soms heel stom. Allebei mag waar zijn.”"],
    [
      ["good-inside", "Lastig gedrag wordt begrepen als signaal van behoefte aan verbinding en veiligheid."],
      ["philippa-perry", "Ambivalente gevoelens erkennen voorkomt dat kinderen zichzelf fout vinden."]
    ],
    ["baby-tweede-kind-jaloers", "broer-zus-baby-jaloers"]
  ),
  extraVraag(
    "paniek-bij-verandering",
    "Mijn kind raakt in paniek bij verandering. Hoe bereid ik het voor?",
    "emoties",
    ["peuter", "kind", "tiener"],
    ["verandering", "overgang", "paniek", "voorbereiden", "routine"],
    "Verandering wordt draaglijker door voorspelbaarheid en keuze in kleine dingen. Bereid voor, maak de volgende stap concreet en bouw herstelruimte in.",
    "Sommige kinderen hebben meer overgangstijd nodig. Dat is geen aanstellerij. Hun brein schakelt trager van bekend naar onbekend, en elke verrassing kost hun moeite om kalm te blijven.",
    "Maak het onbekende zichtbaar",
    "Gebruik een kalender, foto's, stappenlijst of proefbezoek. Geef beperkte keuze: welke trui, welk boek mee, naast wie zitten. Zo krijgt je kind controle zonder dat jij de verandering moet schrappen.",
    [
      "Vertel wat verandert én wat hetzelfde blijft.",
      "Gebruik visuele stappen bij jonge kinderen.",
      "Plan na de verandering rustige hersteltijd."
    ],
    [
      "Veranderingen pas op het laatste moment melden.",
      "Paniek luiheid of drama noemen.",
      "Keuze geven over dingen die niet kiesbaar zijn."
    ],
    ["“Dit wordt nieuw. Ik vertel je de stappen en blijf erbij.”"],
    [
      ["whole-brain-child", "Het brein blijft beter geïntegreerd wanneer kinderen verhaal en voorspelbaarheid krijgen."],
      ["self-driven-child", "Een gevoel van controle verlaagt stress en vergroot medewerking."]
    ],
    ["ochtendstress", "schoolpaniek"]
  ),
  extraVraag(
    "emoties-verstoppen",
    "Mijn kind zegt nooit wat het voelt. Moet ik blijven vragen?",
    "emoties",
    ["kind", "tiener"],
    ["gevoelens", "zwijgen", "praten", "gesloten", "emotie"],
    "Blijf beschikbaar, maar maak van praten geen verhoor. Sommige kinderen openen via samen doen, tekenen, wandelen of rijden, niet via oogcontact aan tafel.",
    "Niet elk kind heeft direct woorden voor gevoelens. Druk om te praten kan zelfs sluiten. Het doel is een klimaat waarin gevoelens welkom zijn, niet een dagelijks interview.",
    "Leg aas uit, trek niet aan de lijn",
    "Zeg wat je opmerkt zonder diagnose: ik zie dat je stiller bent. Daarna laat je ruimte. Later, bij een wandeling of klusje, komt er soms wel taal.",
    [
      "Benoem observaties in plaats van conclusies.",
      "Praat tijdens samen wandelen, koken of rijden.",
      "Respecteer “nu niet” en kom later warm terug."
    ],
    [
      "“Zeg nu eens wat er is” blijven herhalen.",
      "Stilte persoonlijk nemen.",
      "Alle gevoelens invullen voor je kind."
    ],
    ["“Ik zie dat je stil bent. Ik ben beschikbaar, ook straks.”"],
    [
      ["gottman-eq", "Emoties begeleiden begint met opmerken en uitnodigen, niet forceren."],
      ["how-to-talk", "Beschrijven wat je ziet opent vaker dan vragenvuren of beschuldigingen."]
    ],
    ["kind-zegt-niets-over-school", "puber-praat-niet"]
  ),
  extraVraag(
    "overprikkeld-feestjes",
    "Mijn kind wordt lastig op feestjes. Is dat ondankbaar?",
    "emoties",
    ["peuter", "kind"],
    ["feest", "overprikkeling", "familie", "drukte", "gedrag"],
    "Vaak is het overprikkeling, niet ondankbaarheid. Feestjes zijn voor kinderen veel geluid, suiker, verwachtingen en mensen. Bouw pauzes in vóór het misgaat.",
    "Volwassenen zien een feest als gezellig. Een gevoelig kind ervaart soms: te veel stemmen, te veel aanrakingen, te weinig voorspelbaarheid. Lastig gedrag is dan vaak het eindpunt van een overvolle emmer.",
    "Preventie is vriendelijker dan corrigeren",
    "Bespreek vooraf wat er gebeurt, zoek een rustige plek, neem eten of speelgoed mee dat helpt, en vertrek op tijd. Een goed feest eindigt niet pas wanneer iedereen instort.",
    [
      "Plan een pauzeplek en benoem die vooraf.",
      "Vertrek voordat je kind compleet overloopt.",
      "Bescherm je kind tegen verplichte knuffels."
    ],
    [
      "Verwachten dat je kind uren sociaal blijft.",
      "Lastig gedrag op drukte zien als slechte manieren alleen.",
      "Grenzen uitstellen uit angst voor familie-oordeel."
    ],
    ["“Het is veel hier. We nemen even rust.”"],
    [
      ["science-of-parenting", "Prikkelbelasting verhoogt stress; jonge kinderen hebben hulp nodig bij ontladen en herstellen."],
      ["good-inside", "Gedrag krijgt betekenis wanneer ouders zoeken naar behoefte en context."]
    ],
    ["baby-overprikkeld-bezoek", "familiefeest-overprikkeling"]
  ),
  extraVraag(
    "boosheid-blijft-hangen",
    "Mijn kind blijft uren boos. Hoe krijg ik het weer terug?",
    "emoties",
    ["kind", "tiener"],
    ["boosheid", "wrok", "afkoelen", "herstel", "emotieregulatie"],
    "Forceer geen snelle vrolijkheid. Sommige kinderen hebben meer tijd nodig om uit boosheid te zakken. Blijf beschikbaar, houd grenzen en bied later herstel aan.",
    "Boosheid kan een schild zijn voor schaamte, verdriet of machteloosheid. Als jij eist dat je kind meteen normaal doet, moet het niet alleen kalmeren maar ook gezichtsverlies oplossen.",
    "Laat de deur open",
    "Zeg kort dat je beschikbaar bent, laat ruimte en kom later terug met een zachte opening. Herstel is geen knop; het is een brug.",
    [
      "Geef ruimte zonder de relatie te verbreken.",
      "Gebruik een korte herstelzin later op de dag.",
      "Zoek wat onder de boosheid zat."
    ],
    [
      "Eisen dat je kind meteen gezellig doet.",
      "Stilte beantwoorden met jouw eigen koude stilte.",
      "Grenzen laten vallen omdat boosheid lang duurt."
    ],
    ["“Je hoeft nu niet blij te doen. Ik blijf wel je ouder.”"],
    [
      ["peaceful-parent", "Ouderlijke kalmte en verbinding helpen kinderen door langdurige ontregeling."],
      ["philippa-perry", "Relatieherstel vraagt ruimte voor de binnenwereld achter gedrag."]
    ],
    ["driftbui-na-nee", "schaamte-na-uitbarsting"]
  ),
  extraVraag(
    "niet-luisteren-eerste-keer",
    "Mijn kind luistert nooit de eerste keer. Moet ik strenger worden?",
    "grenzen",
    ["peuter", "kind"],
    ["luisteren", "herhalen", "grenzen", "meewerken", "aandacht"],
    "Vaak moet je niet harder, maar dichterbij. Zorg eerst dat je contact hebt, geef één duidelijke opdracht en help starten.",
    "Veel ouders roepen instructies door het huis en concluderen dat het kind niet luistert. Maar een spelend brein, schermbrein of moe brein schakelt niet op afstand. Nabijheid verhoogt de kans dat woorden aankomen.",
    "Contact vóór opdracht",
    "Loop naar je kind, zeg de naam, raak eventueel zacht de schouder aan, wacht op blik of reactie en geef dan één concrete stap. Dat is geen verwennen, dat is effectief communiceren.",
    [
      "Ga dichtbij voordat je iets vraagt.",
      "Geef één opdracht per keer.",
      "Help de eerste beweging starten."
    ],
    [
      "Vanuit drie kamers verder blijven roepen.",
      "Steeds bozer worden zonder je aanpak te veranderen.",
      "Vage opdrachten geven zoals “gedraag je”."
    ],
    ["“Kijk even naar mij. Schoenen aan, dan jas.”"],
    [
      ["how-to-talk", "Concrete, beschrijvende taal werkt beter dan verwijten of herhaalde preken."],
      ["hold-on-to-your-kids", "Kinderen volgen makkelijker wanneer de relatie eerst geactiveerd is."]
    ],
    ["ochtendstress", "weigerstaking"]
  ),
  extraVraag(
    "onderhandelen-over-alles",
    "Mijn kind onderhandelt over alles. Hoe stop ik de eindeloze discussie?",
    "grenzen",
    ["peuter", "kind", "tiener"],
    ["onderhandelen", "discussie", "grenzen", "nee", "regels"],
    "Maak onderscheid tussen inspraak en vaststaande grenzen. Geef keuze waar het kan, en sluit discussie vriendelijk waar de grens vaststaat.",
    "Onderhandelen is deels gezond: je kind oefent invloed. Maar als elk tandenpoetsmoment een parlement wordt, heeft het systeem meer duidelijkheid nodig. Niet alles is bespreekbaar op elk moment.",
    "Kies je onderhandelruimte",
    "Zeg vooraf waar keuze zit: pyjama blauw of groen, niet óf er geslapen wordt. Bij oudere kinderen kun je vaste momenten maken om regels te evalueren, niet midden in de hitte.",
    [
      "Benoem: “dit is geen keuze, dit stukje wel.”",
      "Plan een later praatmoment voor grotere regels.",
      "Gebruik dezelfde afsluitzin bij herhaling."
    ],
    [
      "Elke regel midden in de uitvoering heropenen.",
      "In discussie blijven tot jij ontploft.",
      "Alle inspraak schrappen omdat onderhandelen vermoeiend is."
    ],
    ["“Je mag kiezen hoe. Dat we het doen staat vast.”"],
    [
      ["good-inside", "Stevig leiderschap is warm en stevig: ruimte geven zonder de ouderrol te verlaten."],
      ["self-driven-child", "Zelfstandigheid werkt stressverlagend wanneer de kaders helder blijven."]
    ],
    ["niet-luisteren-eerste-keer", "driftbui-na-nee"]
  ),
  extraVraag(
    "beloningssysteem-stoppen",
    "Hoe stop ik met stickers en beloningen zonder dat alles instort?",
    "grenzen",
    ["peuter", "kind"],
    ["belonen", "stickers", "motivatie", "grenzen", "afbouwen"],
    "Bouw beloningen om naar routines, betrokkenheid en echte betekenis. Stop niet alleen de sticker; vervang hem door verbinding en duidelijkheid.",
    "Beloningssystemen kunnen gedrag tijdelijk op gang trekken, maar ze maken de vraag vaak: wat krijg ik ervoor? Als je stopt, lijkt motivatie weg. Dan zie je hoe weinig eigen motivatie er eigenlijk was opgebouwd.",
    "Van transactie naar routine",
    "Maak het gewenste gedrag onderdeel van het gewone leven: tanden poetsen hoort bij bedtijd, opruimen hoort bij spelen, helpen hoort bij samenwonen. Geef erkenning, maar niet alles hoeft een prijs te krijgen.",
    [
      "Vertel dat jullie van stickers naar vaste routine gaan.",
      "Beschrijf wat je ziet in plaats van te betalen met lof.",
      "Maak starten makkelijker met visuele stappen."
    ],
    [
      "Beloningen plots schrappen zonder uitleg.",
      "Alles vervangen door dreigen.",
      "Verwachten dat motivatie van binnenuit direct terug is."
    ],
    ["“We gaan dit oefenen als gewoonte, niet meer voor stickers.”"],
    [
      ["unconditional-parenting", "Belonen kan motivatie versmallen en gedrag afhankelijk van een beloning maken."],
      ["how-to-talk", "Beschrijven en samenwerken lokt meer eigen motivatie uit dan controle."]
    ],
    ["mythe-belonen-werkt", "klusjes-in-gezin"]
  ),
  extraVraag(
    "consequentie-of-straf",
    "Wat is het verschil tussen een consequentie en straf?",
    "grenzen",
    ["peuter", "kind", "tiener"],
    ["consequentie", "straf", "discipline", "grenzen", "herstel"],
    "Een helpende consequentie is logisch, begrensd en gericht op herstel of veiligheid. Straf is vooral bedoeld om te laten voelen wie de macht heeft.",
    "Het woord consequentie wordt vaak gebruikt voor straf in nette verpakking. Het verschil zit in de functie. Leert dit mijn kind iets bruikbaars, of wil ik dat het zich slecht voelt?",
    "Logisch en herstellend",
    "Gooit een kind speelgoed, dan gaat het speelgoed even weg of wordt er hersteld. Liegt een tiener over locatie, dan wordt vertrouwen tijdelijk kleiner en concreet opnieuw opgebouwd. De link is zichtbaar.",
    [
      "Koppel de consequentie aan gedrag, veiligheid of herstel.",
      "Houd de duur korter dan je boze brein wil.",
      "Leg later uit wat je kind kan oefenen."
    ],
    [
      "Pijn of vernedering gebruiken als les.",
      "Willekeurige dingen afpakken uit boosheid.",
      "Dreigen met consequenties die je niet wilt uitvoeren."
    ],
    ["“Dit gaat over herstellen, niet over jou pijn doen.”"],
    [
      ["unconditional-parenting", "Controle en straf geven korte gehoorzaamheid maar ondermijnen het leren van waarden van binnenuit."],
      ["good-inside", "Grenzen blijven nodig, maar vanuit vaardigheidsopbouw en verbinding."]
    ],
    ["mythe-straf-leert", "slaan-na-waarschuwing"]
  ),
  extraVraag(
    "grenzen-bij-grootouders",
    "Grootouders houden onze grenzen niet aan. Hoe pak ik dat aan?",
    "grenzen",
    ["baby", "peuter", "kind"],
    ["grootouders", "familie", "grenzen", "snoep", "regels"],
    "Maak het volwassen gesprek niet via je kind. Wees warm, duidelijk en concreet: dit is onze regel, dit hebben we van jullie nodig.",
    "Grootouders bedoelen het vaak liefdevol, maar kunnen grenzen ondermijnen met snoep, schermen, slaap of opmerkingen. Als jij niets zegt, komt je kind tussen systemen terecht.",
    "Bescherm de grens én de relatie",
    "Formuleer niet als aanval op hun liefde, maar als ouderlijke verantwoordelijkheid. Geef één of twee belangrijke regels prioriteit. Niet alles hoeft identiek, maar kernveiligheid en respect wel.",
    [
      "Spreek grootouders apart aan, niet via het kind.",
      "Leg uit welke regels echt belangrijk zijn.",
      "Geef een alternatief: wat kan wél?"
    ],
    [
      "Je kind laten bemiddelen.",
      "Alles opsparen tot je ontploft.",
      "Elke kleine stijlverschil als ramp behandelen."
    ],
    ["“We weten dat jullie haar graag verwennen. Deze grens willen we wel echt hetzelfde houden.”"],
    [
      ["good-inside", "Stevige grenzen kunnen warm gecommuniceerd worden zonder relatiebreuk."],
      ["hold-on-to-your-kids", "Ouders blijven het primaire kompas; andere volwassenen ondersteunen dat best."]
    ],
    ["grootouders-regels", "familie-ondermijnt-grens"]
  ),
  extraVraag(
    "kind-pakt-spullen-af",
    "Mijn kind pakt steeds spullen af. Hoe leer ik delen?",
    "grenzen",
    ["peuter", "kind"],
    ["delen", "afpakken", "speelgoed", "beurt", "grens"],
    "Leer niet vaag “delen”, maar concreet beurten nemen, vragen en wachten. Afpakken stop je direct; gulheid groeit pas als eigendom veilig voelt.",
    "Voor jonge kinderen is bezit heel concreet: ik heb het vast, dus het is van mij. Delen onder dwang leert zelden vrijgevigheid. Het leert vooral dat grotere mensen jouw spullen kunnen opeisen.",
    "Beurten zijn duidelijker dan delen",
    "Zeg: jij had het, jij maakt je beurt af, daarna mag de ander. Als je kind afpakt, geef je het terug en oefen je de zin. Dat is traag, maar helder.",
    [
      "Stop afpakken rustig en geef terug.",
      "Gebruik een beurtzin: “als jij klaar bent, is hij aan de beurt.”",
      "Oefen vragen om een beurt buiten conflict."
    ],
    [
      "Je kind dwingen iets meteen af te geven omdat delen moet.",
      "De snelste huiler altijd belonen.",
      "Afpakken laten passeren om vrede te bewaren."
    ],
    ["“Hij had het. Jij mag vragen wanneer hij klaar is.”"],
    [
      ["good-inside", "Beurten en eigendom beschermen veiligheid; vrijgevigheid groeit niet uit dwang."],
      ["how-to-talk", "Concrete taal en keuzes helpen kinderen sociaal gedrag oefenen."]
    ],
    ["mythe-zandbak-delen", "ruzie-zelf-oplossen"]
  ),
  extraVraag(
    "weigert-opruimen",
    "Mijn kind weigert op te ruimen. Moet ik alles laten liggen?",
    "grenzen",
    ["peuter", "kind"],
    ["opruimen", "speelgoed", "weigeren", "routine", "klusjes"],
    "Nee, maar maak opruimen kleiner, samen en voorspelbaar. Kinderen leren verantwoordelijkheid beter via routines dan via plotselinge grote opruimwoede.",
    "Opruimen vraagt overzicht, planning en impulsremming. Een kamer vol speelgoed kan voor een kind voelen als een berg zonder pad. Dan helpt “ruim op!” weinig.",
    "Maak de eerste stap zichtbaar",
    "Begin samen: alle blokken in deze bak, daarna boeken. Zet muziek of timer, maar blijf bij de grens: spelen eindigt met herstellen van de ruimte.",
    [
      "Geef een concrete categorie: eerst auto's, dan blokken.",
      "Ruim jonge kinderen samen met jou op.",
      "Maak opruimen onderdeel van de overgang."
    ],
    [
      "Wachten tot de kamer rampgebied is.",
      "Een vaag bevel geven en boos worden.",
      "Alles zelf doen met hoorbare frustratie."
    ],
    ["“Ik help starten. Jij doet de blokken in deze bak.”"],
    [
      ["how-to-talk", "Beschrijven en opdelen werkt beter dan beschuldigen."],
      ["self-driven-child", "Vaardigheden groeien door scaffolding: steun die later afneemt."]
    ],
    ["klusjes-in-gezin", "niet-luisteren-eerste-keer"]
  ),
  extraVraag(
    "maaltijd-als-strijd",
    "Elke maaltijd is strijd. Hoe hou ik grenzen zonder druk?",
    "eten",
    ["peuter", "kind"],
    ["eten", "maaltijd", "strijd", "proeven", "druk"],
    "Houd jouw taak en die van je kind gescheiden: jij bepaalt wat en wanneer er eten is, je kind bepaalt hoeveel het eet. Druk maakt eten vaak onveiliger.",
    "Eten raakt ouders diep: gezondheid, groei, zorgen. Maar hoe meer druk aan tafel, hoe meer eten een machtsstrijd wordt. Een kind leert dan vooral controle via mond dicht houden.",
    "Rust is ook voeding",
    "Bied voorspelbaar eten aan, kleine proefmogelijkheden en geen aparte show. Houd de sfeer aan tafel belangrijker dan één hap broccoli. Herhaalde blootstelling werkt beter dan dwang.",
    [
      "Bied vertrouwd en nieuw eten naast elkaar.",
      "Maak proeven klein en vrijblijvend.",
      "Houd tafelgesprekken breder dan eten."
    ],
    [
      "Hapjes afdwingen of chanteren met dessert.",
      "Koken als persoonlijke afwijzing beleven.",
      "Elke maaltijd tot gezondheidsexamen maken."
    ],
    ["“Jij hoeft niet alles lekker te vinden. Dit is wat er vandaag is.”"],
    [
      ["good-inside", "Grenzen en empathie kunnen samen: eten aanbieden zonder de emotie te bestrijden."],
      ["peaceful-parent", "Machtsstrijd zakt wanneer ouders kalm blijven en routines helder zijn."]
    ],
    ["maaltijdstrijd", "onderhandelen-over-alles"]
  ),
  extraVraag(
    "tandenpoetsen-dwang",
    "Tandenpoetsen lukt alleen met dwang. Wat kan ik anders doen?",
    "grenzen",
    ["peuter", "kind"],
    ["tandenpoetsen", "weigeren", "routine", "dwang", "gezondheid"],
    "De grens blijft: tanden worden gepoetst. Maar de weg ernaartoe mag speelser, voorspelbaarder en met keuze binnen de grens.",
    "Tandenpoetsen combineert veel lastigs: controleverlies, zintuiglijk ongemak, moeheid en haast. Als het elke avond fysiek gevecht wordt, leert je kind vooral spanning rond verzorging.",
    "Maak het lijf minder in verzet",
    "Geef keuzes die voor jou allemaal oké zijn: op schoot of staand, jij eerst of kind eerst, liedje of timer. Bij jonge kinderen kan speelsheid de weerstand breken zonder de grens op te geven.",
    [
      "Poets op een vast moment vóór totale vermoeidheid.",
      "Geef twee concrete keuzes.",
      "Gebruik spel: tanden zoeken, tandenborstelstem, spiegel."
    ],
    [
      "Elke avond starten met dreiging.",
      "De grens laten vallen omdat het moeilijk is.",
      "Hardhandig worden uit frustratie."
    ],
    ["“Tanden poetsen moet. Jij kiest: op schoot of op het krukje.”"],
    [
      ["how-to-talk", "Keuzes binnen grenzen geven ruimte voor eigen keuze zonder de ouderlijke richting te verliezen."],
      ["peaceful-parent", "Spel en verbinding maken medewerking waarschijnlijker dan controle."]
    ],
    ["weigerstaking", "onderhandelen-over-alles"]
  ),
  extraVraag(
    "kieskeurig-eten",
    "Mijn kind eet maar een handvol dingen. Is dat een probleem?",
    "eten",
    ["peuter", "kind"],
    ["kieskeurig", "eenkennig", "selectief eten", "neofobia", "nieuw eten", "weigeren"],
    "Kieskeurig eten is bij peuters en jonge kinderen biologisch normaal — hun brein is instinctief achterdochtig over nieuw voedsel. Dwang werkt averechts; geduldig en drukloos aanbieden werkt.",
    "Voedselneofobia — angst voor nieuw of onbekend eten — piekt tussen 2 en 6 jaar. Het is evolutionair slim: kleine mensen aten veilig wat vertrouwd was. Dat je kind alleen maar beige eet is dus geen slecht karakter, maar een ontwikkelingsfase.",
    "Herhaling zonder druk is de sleutel",
    "Satter laat zien dat kinderen gemiddeld 10 tot 15 keer blootgesteld moeten worden aan een nieuw voedsel vóór ze het accepteren — en dat die blootstelling neutraal moet zijn. Gewoon op het bord, geen commentaar, geen dwang. Een proefhapje uitspugen telt ook als blootstelling. Voeding is gedrag, en gedrag verandert langzaam als het veilig mag voelen.",
    [
      "Bied het nieuwe naast het vertrouwde aan, zonder erbij te praten.",
      "Laat je kind het voedsel aanraken, ruiken of op bord schuiven — dat telt.",
      "Eet zelf zichtbaar en rustig van het nieuwe eten."
    ],
    [
      "Zeggen 'één hapje dan krijg je dessert' — dat koppelt eten aan prestatie.",
      "Apart koken om conflicten te vermijden — dat vernauwt het menu structureel.",
      "Reageren op elk geweigerd eten met zuchten of bezorgdheid aan tafel."
    ],
    ["“Dit hoef je niet op te eten. Het staat er gewoon.”"],
    [
      ["child-of-mine", "Satter's taakverdeling: ouder bepaalt wat er is, kind bepaalt of en hoeveel het eet. Dwang verstoort interne eet-signalen."],
      ["good-inside", "Kieskeurig gedrag begrijpen als overprikkeling of angst, niet als onwil — en het kind niet beschamen."]
    ],
    ["maaltijd-als-strijd", "maaltijdstrijd"]
  ),
  extraVraag(
    "eten-structuur-grazen",
    "Mijn kind wil de hele dag snacken. Hoe breng ik structuur?",
    "eten",
    ["peuter", "kind"],
    ["grazen", "snacken", "tussendoortjes", "structuur", "honger", "maaltijd"],
    "Voortdurend grazen maakt honger vaag en maaltijden moeilijker. Vaste eet- en snackmomenten geven het lichaam ritme en helpen je kind zijn eigen honger- en verzadigingssignalen herkennen.",
    "Een kind dat de hele dag kleine beetjes eet, leert zijn eigen eetlust niet goed kennen. Honger is niet de vijand — het is het signaal dat eten straks goed gaat smaken. Constante toegang tot voedsel onderdrukt dat signaal.",
    "Structuur is geen straf",
    "Satter stelt voor om 3 maaltijden en 2 à 3 geplande snackmomenten te hanteren met niets ertussenin. Dat klinkt streng, maar het geeft juist rust: het kind weet wanneer er eten is en hoeft niet te bedelen. Je kunt bij een vraag om eten zeggen: 'Ik begrijp dat je honger hebt. Over twintig minuten is de snack.' Dat is niet wreed — het is ritme.",
    [
      "Houd vaste maaltijden en 2–3 geplande snackmomenten aan.",
      "Zeg bij een snoepverzoek rustig wanneer het volgende eetmoment is.",
      "Zorg dat de geplande snack ook echt voedend is, zodat de volgende wacht draaglijk is."
    ],
    [
      "De hele dag eten beschikbaar stellen om gezeur te vermijden.",
      "Snacks weigeren zonder duidelijk alternatief moment te geven.",
      "Je kind beschuldigen van gulzigheid — grazen is vaak een gewoontepatroon, geen karaktertrek."
    ],
    ["“De keuken is nu dicht. Om drie uur is er een snack.”"],
    [
      ["child-of-mine", "Satter over eetstructuur: vaste momenten geven kinderen de kans echte honger en verzadiging te leren herkennen."],
      ["peaceful-parent", "Routines verlagen de emotionele lading van dagelijkse conflicten — ook rond eten."]
    ],
    ["maaltijd-als-strijd", "kieskeurig-eten"]
  ),
  extraVraag(
    "eten-hoeveel-genoeg",
    "Mijn kind eet zo weinig. Moet ik me zorgen maken?",
    "eten",
    ["baby", "peuter", "kind"],
    ["weinig eten", "portie", "groeikurve", "zorgen", "honger", "niet genoeg"],
    "Kinderen zijn van nature betere portiecontroleurs dan volwassenen. Kleine eters eten vaak precies genoeg voor hun groei — tenzij groeikurve, energie of plezier aan tafel een ander signaal geven.",
    "Ouders zijn biologisch geprogrammeerd om te zorgen dat hun kind genoeg eet. Dat maakt elke onaangeroerde bord al snel een reden tot paniek. Maar kinderen hebben per kilo lichaamsgewicht al genoeg aan verrassend kleine hoeveelheden.",
    "Leer de signalen lezen",
    "Satter onderscheidt twee dingen: eetlust en hoeveel een kind eet. Eetlust schommelt enorm per dag, per week, per groeifase. Wat telt is het patroon op de lange termijn: groeit je kind langs de groeicurve (niet per se snel, maar gestaag), heeft het energie en eetplezier, dan eet het genoeg. Zorg wordt zinvol bij een blijvende achterstand op de groeicurve, bij pijn of slikproblemen, of bij angstig eten dat steeds smaller wordt.",
    [
      "Volg de groeikurve over tijd, niet de borden dag per dag.",
      "Bied kleine porties aan en laat je kind om meer vragen.",
      "Observeer energie, plezier en groei — dat zijn de echte signalen."
    ],
    [
      "Je kind aanmoedigen, praten over eten of bezorgd kijken aan tafel.",
      "Verborgen ingrediënten toevoegen — dat werkt averechts op vertrouwen.",
      "Kleine eters vergelijken met leeftijdsgenoten — er is enorme variatie."
    ],
    ["“Eet zoveel als je buik wil. Je mag altijd om meer vragen.”"],
    [
      ["child-of-mine", "Satter: ouders die vertrouwen op de taakverdeling zien kinderen kalibreren op eigen eetlust — ook kleine eters groeien zo."],
      ["science-of-parenting", "Sunderland over stress aan tafel: een gespannen eetomgeving verlaagt eetlust en maakt voedingsproblemen groter, niet kleiner."]
    ],
    ["kieskeurig-eten", "maaltijdstrijd"]
  )
];
