// ============================================================
// EHBO — Noodhulp (acute situaties), Mythes & Gouden regels
// ============================================================

const NOODHULP = [
  {
    id: "nood-driftbui",
    titel: "Driftbui — nu, midden in de winkel",
    icoon: "🌋",
    kort: "Iedereen kijkt. Je kind ligt op de grond. Dit doe je, stap voor stap.",
    stappen: [
      { kop: "Adem één keer traag uit", tekst: "Jouw kalmte is het enige gereedschap dat nu werkt. Het publiek is geen jury — elke ouder daar heeft dit meegemaakt.", zeg: null },
      { kop: "Zak laag en wees dichtbij", tekst: "Op ooghoogte of lager, lichaam rustig. Niet praten om te overtuigen — je bent er om veilig te maken, niet om te winnen.", zeg: "“Ik ben hier. Je bent veilig.”" },
      { kop: "Benoem het gevoel, houd de grens", tekst: "Eén zin voor het gevoel, één voor de grens. Verder niets — de redelijke verdieping van het brein is nu offline.", zeg: "“Je wilde dat zó graag. Het antwoord blijft nee. Ik blijf bij je.”" },
      { kop: "Verplaats indien nodig, zonder boosheid", tekst: "Buiten westen van woede en publiek erbij? Til rustig op en zoek een rustiger plek (auto, buiten). Dragen mag — straffen is het niet.", zeg: "“Ik help je even naar een rustig plekje. Ik ben niet boos.”" },
      { kop: "Wacht de storm uit, praat daarna", tekst: "Pas als het lijf zakt (zuchten, leunen, stil worden) komt er ruimte. Knuffel als het mag. Het echte gesprek — kort! — volgt thuis of morgen.", zeg: "“Dat was een grote storm, hè. Hij is voorbij. Ik hou van je.”" }
    ],
    bronnen: ["whole-brain-child", "good-inside", "peaceful-parent"]
  },
  {
    id: "nood-slaan",
    titel: "Je kind slaat of bijt — net nu",
    icoon: "🛑",
    kort: "Eerst stoppen, dan pas opvoeden. Veiligheid is stap één, de les komt later.",
    stappen: [
      { kop: "Stop het fysiek, rustig en direct", tekst: "Houd de arm tegen of stap ertussen. Stevig is niet hetzelfde als hard: jouw handen blijven kalm.", zeg: "“Ik laat je niet slaan.”" },
      { kop: "Bescherm eerst het andere kind", tekst: "Kort troosten wie geraakt werd — dat toont je eigen kind ook wat er gebeurde, zonder preek.", zeg: null },
      { kop: "Benoem het gevoel achter de klap", tekst: "Slaan is overloop, geen slechtheid. Een kind dat slaat, is een kind dat verzuipt in een gevoel.", zeg: "“Je was zó boos dat je arm sneller was dan je woorden.”" },
      { kop: "Blijf erbij tot de storm zakt", tekst: "Wegsturen leert: met dit gevoel sta je er alleen voor. Blijf dichtbij, desnoods met de armen losjes om je kind heen.", zeg: "“Ik blijf bij je tot de boosheid zakt.”" },
      { kop: "Oefen later het alternatief", tekst: "Op een rustig moment: wat kan de arm doen in plaats van slaan? Stampen, in een kussen, hulp roepen, weglopen. Speel het na — spelen is oefenen.", zeg: "“Boos mag. Slaan niet. Wat kan jouw lijf doen als de boosheid komt?”" }
    ],
    bronnen: ["good-inside", "whole-brain-child", "gottman-eq"]
  },
  {
    id: "nood-zelf-koken",
    titel: "JIJ staat op ontploffen",
    icoon: "🫠",
    kort: "Hete borst, korte lont, de schreeuw zit al in je keel. Noodprocedure voor jezelf.",
    stappen: [
      { kop: "Herken het alarm in je lijf", tekst: "Verhitte borst, gebalde kaak, tunnelblik: dat is jouw benedenbrein dat het stuur grijpt. Vanaf hier wordt alles wat je zegt duurder.", zeg: null },
      { kop: "Koop tijd — letterlijk weglopen mag", tekst: "Is iedereen veilig? Dan mag je de kamer uit. Tien tellen, koud water over je polsen, drie keer traag uitademen. Dit is geen vluchten; dit is de brandweer laten voorgaan.", zeg: "“Ik word te boos om goed te praten. Ik kom zo terug.”" },
      { kop: "Verlaag je eigen lat", tekst: "Het hoeft nu niet pedagogisch perfect. Doel van dit moment: niet ontploffen. Meer niet. De opvoeding hervat je straks.", zeg: null },
      { kop: "Kom terug en maak het rond", tekst: "Terugkomen ís de les: grote gevoelens gaan voorbij en relaties herstellen. Geschreeuwd toch? Dan is herstel je volgende stap — zie ‘Ik heb geschreeuwd’.", zeg: "“Ik ben terug. Mijn boosheid is gezakt. Waar waren we?”" }
    ],
    bronnen: ["raising-good-humans", "peaceful-parent", "philippa-perry"]
  },
  {
    id: "nood-huilbaby",
    titel: "Baby huilt al een uur — je bent op",
    icoon: "🌙",
    kort: "Voor de nacht waarin niets werkt en je aan alles twijfelt.",
    stappen: [
      { kop: "Loop de checklist nog één keer af", tekst: "Honger, luier, te warm/koud, kledingknelpunt, koorts? Soms is het antwoord saai. Vaak is het: gewoon overprikkeld.", zeg: null },
      { kop: "Minder prikkels, niet meer", tekst: "Gedimd licht, traag wiegen, zachte sjsj-geluiden of witte ruis, huid op huid. Niet blijven wisselen van truc — kies er één en geef hem minuten de tijd.", zeg: null },
      { kop: "Onthoud: troosten kan niet verkeerd zijn", tekst: "Je verwent niets en niemand. Een gedragen, getroost kind huilt op termijn mínder. En een baby die huilt in jouw armen is niet alleen — dat is het verschil dat telt.", zeg: null },
      { kop: "Ben je zelf op? Leg veilig neer", tekst: "Een baby twee minuten veilig in het bedje terwijl jij op de gang ademhaalt is góed ouderschap. Schud nooit een baby. Bel desnoods iemand — partner, familie, de huisartsenwachtpost.", zeg: null },
      { kop: "Twijfel je over ziekte? Bel", tekst: "Anders huilen dan anders, koorts, slecht drinken, suf: bel je huisarts of de wachtdienst. Voor je gemoedsrust is bellen altijd de juiste keuze.", zeg: null }
    ],
    bronnen: ["science-of-parenting", "power-of-showing-up"]
  },
  {
    id: "nood-weigerstaking",
    titel: "“NEE!” — je kind weigert álles (aankleden, tanden, auto)",
    icoon: "🧱",
    kort: "De dagelijkse machtsstrijd op zijn hoogtepunt. Zo kom je eruit zonder oorlog.",
    stappen: [
      { kop: "Stop met duwen — geef de strijd geen brandstof", tekst: "Hoe harder jij trekt, hoe harder een peuterbrein zich schrap zet. Zelf willen bepalen is geen onwil; het is precies waar deze leeftijd om draait.", zeg: null },
      { kop: "Maak eerst tien seconden contact", tekst: "Zak op ooghoogte, benoem waar je kind mee bezig is. Verbinding eerst — een kind volgt mensen, geen bevelen.", zeg: "“Jij bent lekker aan het bouwen, hè.”" },
      { kop: "Geef een echte keuze binnen jouw grens", tekst: "Het wát staat vast, het hóe is van je kind. Twee opties, allebei oké voor jou.", zeg: "“We poetsen tanden. Wil jij eerst, of ik eerst bij jou?”" },
      { kop: "Maak er spel van — humor is een breekijzer", tekst: "“Zou deze trui passen bij... papa's hoofd?” Een lachend kind werkt mee; spel is de moedertaal van peuters, en gezichtsverlies is voor iedereen weg.", zeg: null },
      { kop: "Moet het nú? Doe het dan vriendelijk en beslist", tekst: "Soms is de keuze op. Benoem het gevoel, en help het lijfje — zonder boosheid, mét compassie. Eén keer dragen naar de auto is oké; oorlog erover elke dag niet.", zeg: "“Je wil niet. Ik help je nu — en in de auto mag je boos zijn op mij.”" }
    ],
    bronnen: ["how-to-talk", "hold-on-to-your-kids", "good-inside"]
  },
  {
    id: "nood-bedtijd-ontspoort",
    titel: "Bedtijd ontspoort — wéér eruit, wéér drinken, wéér plassen",
    icoon: "🛏️",
    kort: "21u40. Vierde keer beneden. Zo breek je de cirkel zonder middernachtdrama.",
    stappen: [
      { kop: "Check de echte oorzaak", tekst: "Vaak is eruit-komen geen onwil maar lading van de dag die er nog uit moet, of simpelweg te laat moe-overdraaid. Een kind vol dag heeft eerst verbinding nodig, dan pas een deken.", zeg: null },
      { kop: "Tank de verbinding vóór het licht uitgaat", tekst: "Tien minuten écht ritueel — boekje, knuffelgesprek, “wat was leuk en stom vandaag?” — voorkomt drie keer trap-af. Kinderen rekken bedtijd vaak omdat dít het enige rustige moment met jou is.", zeg: null },
      { kop: "Kondig het script aan en blijf erbij", tekst: "Voorspelbaarheid kalmeert: zelfde volgorde, zelfde zinnen, elke avond. Na het ritueel: saai en liefdevol terugbrengen, zo min mogelijk woorden.", zeg: "“Het is slaaptijd. Ik breng je terug. Slaap zacht, ik hou van je.”" },
      { kop: "Honoreer één behoefte, niet tien eisen", tekst: "Eén glas water stáát al klaar naast het bed; plassen gebeurde in het ritueel. Daarna is elke vraag hetzelfde antwoord: zacht, herhaald, grijsgedraaid.", zeg: "“Morgen weer. Nu is het slaaptijd.”" },
      { kop: "Bang? Dat is een ander draaiboek", tekst: "Echte angst (monsters, donker) verdient erkenning en hulp — nachtlampje, deur op een kier, “ik kom over vijf minuten nog eens kijken” (en kóm dan ook). Angst wegsussen met ‘doe niet flauw’ maakt nachten langer, niet korter.", zeg: "“Ik kom over vijf minuten kijken. Beloofd.”" }
    ],
    bronnen: ["science-of-parenting", "nurtureshock", "peaceful-parent"]
  },
  {
    id: "nood-ik-heb-geschreeuwd",
    titel: "Ik heb geschreeuwd — hoe herstel ik dit?",
    icoon: "🧯",
    kort: "Je bent uit je slof geschoten. Dit is hoe je de relatie repareert zonder jezelf af te breken.",
    stappen: [
      { kop: "Kalmeer eerst je eigen lijf", tekst: "Herstel lukt niet terwijl je nog kookt. Drink water, adem langer uit dan in, en wacht tot je stem weer gewoon klinkt.", zeg: null },
      { kop: "Kom terug zonder verdediging", tekst: "Begin niet met waarom je zo boos werd. Neem eerst verantwoordelijkheid voor jouw deel; dat maakt de ruimte veilig genoeg voor je kind om weer open te gaan.", zeg: "“Ik schrok van mijn eigen stem. Dat was te hard.”" },
      { kop: "Maak duidelijk: jij bent niet de schuld", tekst: "Kinderen vullen gaten snel in met: het komt door mij. Zeg expliciet dat jouw uitbarsting van jou was, ook als het gedrag moest stoppen.", zeg: "“Jij verdiende geen geschreeuw. Ik had rustiger moeten blijven.”" },
      { kop: "Houd de grens, maar zachter", tekst: "Herstel betekent niet dat alles plots mag. Herhaal de grens kort, zonder lading, nadat de relatie weer contact heeft.", zeg: "“De regel blijft: we slaan niet. En ik ga het rustiger zeggen.”" },
      { kop: "Sluit af met verbinding", tekst: "Een knuffel, hand op de schouder of samen even zitten vertelt het zenuwstelsel: de breuk is gerepareerd. Dat is de echte les.", zeg: "“We zijn oké. Ik hou van je, ook als het moeilijk is.”" }
    ],
    bronnen: ["philippa-perry", "good-inside", "raising-good-humans"]
  },
  {
    id: "nood-kind-liegt",
    titel: "Je betrapt je kind op liegen",
    icoon: "🕵️",
    kort: "De waarheid ligt op tafel, maar je kind blijft ontkennen. Zo maak je eerlijkheid veiliger.",
    stappen: [
      { kop: "Maak het niet groter dan nodig", tekst: "Hoe harder het verhoor, hoe meer het brein naar zelfbescherming schiet. Laat merken dat je niet uit bent op vernederen.", zeg: null },
      { kop: "Benoem rustig wat je weet", tekst: "Vermijd strikvragen waarvan jij het antwoord al kent. Die nodigen uit tot nog meer liegen.", zeg: "“Ik zie dat de koekjes open zijn en dat er kruimels liggen.”" },
      { kop: "Geef een brug naar de waarheid", tekst: "Een kind heeft soms een uitweg nodig om gezichtsverlies te overleven. Maak eerlijk zijn de veiligste keuze.", zeg: "“Je hoeft niet bang te zijn om het te zeggen. We lossen dit samen op.”" },
      { kop: "Richt op herstel, niet op beschaming", tekst: "Wat moet er nu gebeuren? Opruimen, iets terugleggen, excuses maken, een afspraak aanpassen. De les zit in repareren.", zeg: "“Wat kunnen we doen om dit recht te zetten?”" },
      { kop: "Bespreek later waarom liegen aantrekkelijk was", tekst: "Was je kind bang voor straf, schaamte of teleurstelling? Daar zit de sleutel voor de volgende keer.", zeg: "“Wat maakte het moeilijk om meteen de waarheid te zeggen?”" }
    ],
    bronnen: ["nurtureshock", "how-to-talk", "unconditional-parenting"]
  },
  {
    id: "nood-schoolpaniek",
    titel: "Schoolpaniek aan de voordeur",
    icoon: "🎒",
    kort: "Schoenen aan, jas aan, maar je kind blokkeert. Geen tijd voor een lang gesprek, wel voor kalm leiderschap.",
    stappen: [
      { kop: "Ga eerst uit de haastmodus", tekst: "Haast is besmettelijk. Eén rustige minuut wint vaak meer dan tien minuten trekken en dreigen.", zeg: null },
      { kop: "Erken de weerstand kort", tekst: "Je hoeft het probleem niet nu op te lossen om het gevoel serieus te nemen. Eén zin erkenning kan de blokkade al zachter maken.", zeg: "“Iets aan school voelt vandaag heel moeilijk.”" },
      { kop: "Maak de volgende stap piepklein", tekst: "Vraag niet ‘ga naar school’, vraag om één handeling: schoenen vastnemen, jas aan, tot aan de fiets lopen. Kleine stappen houden het brein online.", zeg: "“Alleen je schoenen. Meer vraag ik nu niet.”" },
      { kop: "Beloof een echt gesprek later", tekst: "Als je zegt dat je erop terugkomt, doe dat ook. Dat maakt het makkelijker om nu mee te bewegen.", zeg: "“Na school wil ik echt horen wat er speelt.”" },
      { kop: "Blijft dit terugkomen? Zoek mee", tekst: "Terugkerende schoolpaniek vraagt overleg met school, huisarts of zorgfiguur. Zie het als signaal, niet als koppigheid.", zeg: null }
    ],
    bronnen: ["power-of-showing-up", "whole-brain-child", "self-driven-child"]
  },
  {
    id: "nood-telefoon-afpakken",
    titel: "Telefoon afpakken loopt uit de hand",
    icoon: "📵",
    kort: "Scherm uit, kind ontploft. Zo houd je de grens zonder een avond oorlog.",
    stappen: [
      { kop: "Maak het lijf veilig", tekst: "Is er gooien, duwen of blokkeren? Eerst afstand en rust. De discussie over schermregels komt later.", zeg: "“Ik ga niet vechten om een telefoon.”" },
      { kop: "Benoem de trekkracht", tekst: "Een telefoon loslaten kan echt voelen als verlies. Erken dat zonder de grens op te geven.", zeg: "“Je brein wil blijven scrollen. Stoppen voelt nu verschrikkelijk.”" },
      { kop: "Herhaal de regel één keer", tekst: "Meer uitleg wordt brandstof. Zeg de grens kort en blijf bij dezelfde zin.", zeg: "“De telefoon gaat nu weg. Morgen spreken we opnieuw af hoe.”" },
      { kop: "Bied een landingsbaan", tekst: "Na schermen heeft het lijf vaak overgang nodig: douche, snack, buitenlucht, samen iets kleins doen. Niet als beloning, maar om tot rust te komen.", zeg: "“Kom, eerst iets drinken. Daarna praten we niet meer over de telefoon.”" },
      { kop: "Maak later een collectieve afspraak", tekst: "Schermregels werken beter als ze vooraf helder zijn en niet midden in de strijd bedacht worden. Leg laadtijd, slaapkamer en sociale media vast.", zeg: null }
    ],
    bronnen: ["anxious-generation", "good-inside", "self-driven-child"]
  },
  {
    id: "nood-broers-zussen-ruzie",
    titel: "Broers of zussen gaan elkaar te lijf",
    icoon: "🚧",
    kort: "Het gaat van gekibbel naar duwen, trekken of krijsen. Eerst veiligheid, dan taal.",
    stappen: [
      { kop: "Ga ertussen zonder rechtszaak", tekst: "Je hoeft niet meteen te weten wie begon. Stop wat onveilig is en haal lichamen uit elkaar.", zeg: "“Ik laat jullie elkaar geen pijn doen.”" },
      { kop: "Geef elk kind een korte vertaling", tekst: "Kinderen kalmeren sneller als ze zich gezien voelen. Doe dat voor allebei, zonder partij te kiezen.", zeg: "“Jij wilde doorbouwen. Jij wilde meedoen.”" },
      { kop: "Zet het probleem buiten hen", tekst: "Maak van de kinderen geen dader en slachtoffer als het niet hoeft. Het probleem is: één speelgoed, twee plannen, te weinig woorden.", zeg: "“We hebben één ding en twee kinderen die het willen.”" },
      { kop: "Vraag pas om oplossingen als ze rustiger zijn", tekst: "Een overstroomd kind kan niet onderhandelen. Eerst zakken, dan pas: beurt, timer, ruilen, samen spelen of pauze.", zeg: "“Welke oplossing is eerlijk genoeg voor nu?”" },
      { kop: "Herstel de band kort", tekst: "Laat ze niet gedwongen knuffelen. Wel: schade herstellen, woorden oefenen, opnieuw beginnen.", zeg: "“Wat moet er gebeuren zodat jullie weer verder kunnen?”" }
    ],
    bronnen: ["how-to-talk", "good-inside", "gottman-eq"]
  },
  {
    id: "nood-ik-haat-je",
    titel: "“Ik haat je!” — woorden die binnenkomen",
    icoon: "💔",
    kort: "Je kind zegt iets hards en jij voelt het in je buik. Zo reageer je zonder terug te slaan met woorden.",
    stappen: [
      { kop: "Neem het niet letterlijk als levensverklaring", tekst: "Op zo'n moment betekent het meestal: ik ben overspoeld, ik voel machteloosheid, ik wil dat jij mijn pijn voelt.", zeg: null },
      { kop: "Houd je stem laag", tekst: "Als jij gekwetst terugschiet, wordt jouw pijn het nieuwe probleem. Blijf ouder, niet tegenstander.", zeg: "“Dat zijn harde woorden. Je bent heel boos.”" },
      { kop: "Zet een grens op kwetsen", tekst: "Gevoelens mogen, vernederen hoeft niet. Hou het kort en stevig.", zeg: "“Je mag boos zijn. Ik laat me niet uitschelden.”" },
      { kop: "Blijf beschikbaar zonder te kleven", tekst: "Sommige kinderen willen nabijheid, andere afstand. Geef ruimte met een open deur.", zeg: "“Ik ben in de keuken. Als je klaar bent, ben ik er.”" },
      { kop: "Kom later terug op de woorden", tekst: "Niet om schuld in te wrijven, wel om taal te oefenen die beter werkt.", zeg: "“Wat kun je volgende keer zeggen in plaats van ‘ik haat je’?”" }
    ],
    bronnen: ["gottman-eq", "philippa-perry", "good-inside"]
  },
  {
    id: "nood-huiswerk-paniek",
    titel: "Huiswerk eindigt in paniek",
    icoon: "📚",
    kort: "Tranen boven het schrift. Jij wil helpen, je kind klapt dicht. Zo haal je druk van de ketel.",
    stappen: [
      { kop: "Stop even met de taak", tekst: "Een paniekbrein leert niet. Vijf minuten pauze is geen toegeven, maar voorwaarden scheppen om weer te kunnen denken.", zeg: "“We pauzeren. Dit is nu te veel.”" },
      { kop: "Scheid kind en prestatie", tekst: "Maak duidelijk dat een moeilijke taak niets zegt over de waarde of slimheid van je kind.", zeg: "“Dit werk is moeilijk. Jij bent niet moeilijk.”" },
      { kop: "Vraag wat precies vastloopt", tekst: "Niet ‘snap je het?’ maar: welk woord, welke som, welke eerste stap? Maak het concreet en klein.", zeg: "“Wijs het stukje aan waar je brein vastloopt.”" },
      { kop: "Geef keuze over aanpak", tekst: "Wie controle ervaart, zakt sneller uit stress. Laat je kind kiezen tussen eerst makkelijk, eerst moeilijk, samen één voorbeeld, of vijf minuten timer.", zeg: "“Welke aanpak wil je proberen?”" },
      { kop: "Weet wanneer je stopt", tekst: "Soms is een korte nota aan school beter dan een avond schade. Huiswerk mag geen dagelijkse relatiebreuk worden.", zeg: "“We stoppen hier. Ik schrijf dat het niet lukte.”" }
    ],
    bronnen: ["self-driven-child", "nurtureshock", "how-to-talk"]
  },
  {
    id: "nood-angst-paniek",
    titel: "Je kind is bang of in paniek",
    icoon: "🫶",
    kort: "Snelle adem, tranen, vastklampen of verstijven. Eerst het lijf, dan de gedachten.",
    stappen: [
      { kop: "Vertraag jouw lichaam zichtbaar", tekst: "Kinderen lenen jouw zenuwstelsel. Praat zachter, beweeg trager, adem hoorbaar uit.", zeg: null },
      { kop: "Maak de angst niet belachelijk", tekst: "‘Er is niks’ voelt voor een bang kind als: jij snapt mij niet. Erken dat het echt voelt, ook als het gevaar niet echt is.", zeg: "“Je lijf zegt alarm. Dat voelt heel echt.”" },
      { kop: "Grond in het hier en nu", tekst: "Laat je kind drie dingen zien, twee dingen voelen, één ding horen. Het brein heeft ankers nodig.", zeg: "“Kijk naar mijn hand. Voel je voeten. We zijn hier.”" },
      { kop: "Bied nabijheid met toestemming", tekst: "Vraag of aanraking helpt. Sommige kinderen willen een hand, anderen juist ruimte.", zeg: "“Wil je mijn hand of wil je dat ik naast je zit?”" },
      { kop: "Praat pas later over oplossingen", tekst: "Wanneer het lijf kalm is, kun je kijken naar slaap, school, beelden, sociale spanning of iets anders. Midden in paniek is dat te vroeg.", zeg: null }
    ],
    bronnen: ["power-of-showing-up", "gottman-eq", "science-of-parenting"]
  },
  {
    id: "nood-spullen-gooien",
    titel: "Je kind gooit of maakt spullen kapot",
    icoon: "🧩",
    kort: "Er vliegt iets door de kamer. Veiligheid eerst, schade herstellen later.",
    stappen: [
      { kop: "Haal mensen uit de baan", tekst: "Zet jezelf of andere kinderen niet in de vuurlijn. Neem afstand, verwijder losse spullen als dat veilig kan.", zeg: null },
      { kop: "Stop kort en fysiek veilig", tekst: "Geen lange preek over respect voor spullen. Het brein staat in alarm. Eén duidelijke zin is genoeg.", zeg: "“Ik laat je niet gooien.”" },
      { kop: "Geef een veilig alternatief voor het lijf", tekst: "Boosheid is energie. Laat die naar iets dat mag: stampen, kussen, muurduw, papier scheuren.", zeg: "“Je handen willen gooien. Duw hier tegen mijn handen.”" },
      { kop: "Wacht met opruimen tot de storm zakt", tekst: "Een kind midden in woede laten opruimen wordt snel een nieuwe strijd. Eerst rust, daarna verantwoordelijkheid.", zeg: null },
      { kop: "Laat herstellen wat kan", tekst: "Lijmen, opruimen, vervangen, sparen, sorry zeggen: herstel leert verantwoordelijkheid zonder schaamte als hoofdgerecht.", zeg: "“Wat is jouw stukje om dit te herstellen?”" }
    ],
    bronnen: ["whole-brain-child", "good-inside", "peaceful-parent"]
  },
  {
    id: "nood-tiener-te-laat",
    titel: "Tiener komt te laat of breekt een afspraak",
    icoon: "🕰️",
    kort: "Je bent ongerust en kwaad. Zo voorkom je dat het gesprek meteen oorlog wordt.",
    stappen: [
      { kop: "Begin met veiligheid, niet straf", tekst: "Je eerste boodschap bepaalt of je tiener de volgende keer nog opneemt. Laat merken dat contact belangrijker is dan winnen.", zeg: "“Ik ben opgelucht dat je veilig bent.”" },
      { kop: "Wacht met de preek tot iedereen gezakt is", tekst: "Boosheid na angst is normaal, maar een tiener in verdedigingsstand hoort weinig. Spreek een moment af als het rustiger is.", zeg: "“Ik ben te boos om goed te praten. We bespreken dit straks.”" },
      { kop: "Vraag wat er gebeurde", tekst: "Niet als rechercheur, wel als ouder die wil begrijpen of dit planning, groepsdruk, schaamte of roekeloosheid was.", zeg: "“Help me begrijpen waar het misliep.”" },
      { kop: "Maak de volgende afspraak concreter", tekst: "Vage regels geven vage uitkomsten. Spreek tijd, check-in, vervoer en wat te doen bij vertraging duidelijk af.", zeg: "“Als je later bent, stuur je vóór die tijd één bericht.”" },
      { kop: "Laat consequentie logisch zijn", tekst: "Minder vrijheid kan tijdelijk nodig zijn, maar koppel die aan vertrouwen opbouwen, niet aan wraak.", zeg: "“We bouwen dit opnieuw op. Dit weekend spreken we korter af.”" }
    ],
    bronnen: ["hold-on-to-your-kids", "self-driven-child", "how-to-talk"]
  }
];

NOODHULP.push(
  {
    id: "nood-online-pesten",
    titel: "Online pesten of een screenshot gaat rond",
    icoon: "📱",
    kort: "Je kind is in paniek door berichten, screenshots of groepsdruk online. Eerst beschermen, dan pas oplossen.",
    stappen: [
      { kop: "Pak het toestel niet als straf af", tekst: "Dat voelt logisch, maar het kan je kind leren dat hulp zoeken leidt tot isolement. Zet samen meldingen uit en leg het toestel tijdelijk zichtbaar weg.", zeg: "“Ik ga je niet straffen omdat je dit vertelt.”" },
      { kop: "Bewaar bewijs, verspreid niets", tekst: "Maak screenshots van berichten, namen, tijdstippen en groepen. Stuur kwetsende beelden niet door — ook niet ‘om te tonen wat er gebeurt’.", zeg: null },
      { kop: "Vraag wat je kind nu het bangst maakt", tekst: "Is het schaamte, dreiging, school morgen, ouders die boos worden, of dat iedereen het ziet? De eerste hulp hangt af van die grootste angst.", zeg: "“Wat is nu het ergste in je hoofd?”" },
      { kop: "Kies één volwassen bondgenoot buiten jullie twee", tekst: "Bij schoolgroepen: klastitularis, zorgcoördinator of directie. Bij bedreiging of beeldmisbruik: bewaar bewijs en vraag professioneel advies.", zeg: null },
      { kop: "Maak een plan voor de komende 24 uur", tekst: "Niet alleen naar school, niet alleen online blijven kijken, één checkmoment, één volwassene bereikbaar. Online stormen voelen oneindig; een dagplan maakt ze begrensd.", zeg: "“Vanavond dragen wij dit samen. Morgen zetten we de volgende stap.”" }
    ],
    bronnen: ["anxious-generation", "power-of-showing-up", "how-to-talk"]
  },
  {
    id: "nood-ik-wil-niet-meer-leven",
    titel: "“Ik wil niet meer leven” — wat doe je nu?",
    icoon: "🆘",
    kort: "Neem elke uitspraak serieus. Je hoeft niet te diagnosticeren; je moet nabij blijven en hulp inschakelen.",
    stappen: [
      { kop: "Blijf fysiek nabij", tekst: "Laat je kind of tiener nu niet alleen. Ga naast hem of haar zitten, ook als je geen perfecte woorden hebt.", zeg: "“Ik ben bij je. We gaan dit niet alleen dragen.”" },
      { kop: "Vraag rustig en rechtstreeks", tekst: "Direct vragen maakt het niet erger; het geeft woorden aan gevaar. Vraag of er een plan is, middelen zijn, of het nu acuut voelt.", zeg: "“Denk je eraan om jezelf iets aan te doen?”" },
      { kop: "Maak de omgeving veiliger", tekst: "Haal medicatie, scherpe voorwerpen, koorden of andere middelen uit de buurt als dat veilig kan. Blijf kalm en praktisch.", zeg: null },
      { kop: "Schakel hulp in, ook als je twijfelt", tekst: "Bij onmiddellijk gevaar: bel 112. In België kun je ook contact opnemen met Zelfmoordlijn 1813; in Nederland met 113 Zelfmoordpreventie. Liever één keer te veel hulp dan één keer te laat.", zeg: null },
      { kop: "Praat later niet over aandacht zoeken", tekst: "Zelfs als woorden uit wanhoop of woede kwamen, was er nood. Bespreek achteraf samen huisarts, schoolzorg, therapeut of crisishulp.", zeg: "“Ik ben blij dat je het gezegd hebt. Nu halen we hulp erbij.”" }
    ],
    bronnen: ["power-of-showing-up", "good-inside", "philippa-perry"]
  },
  {
    id: "nood-eetstrijd",
    titel: "Eten wordt oorlog aan tafel",
    icoon: "🍽️",
    kort: "Niet proeven, huilen, kokhalzen of strijd om nog drie happen. Zo haal je druk van tafel.",
    stappen: [
      { kop: "Stop met overtuigen", tekst: "Elke hap als onderhandeling maakt eten groter en enger. Jij bepaalt wat en wanneer; je kind bepaalt of en hoeveel.", zeg: null },
      { kop: "Maak veiligheid belangrijker dan volume", tekst: "Een gespannen lijf eet slechter. Verlaag je toon, haal het publiek eruit en laat het bord even gewoon bestaan.", zeg: "“Je hoeft nu niets te bewijzen aan tafel.”" },
      { kop: "Houd de grens op vervangmenu's", tekst: "Geen restaurant, wel voorspelbaarheid. Zorg dat er altijd één veilig onderdeel op tafel staat, maar kook geen tweede diner uit paniek.", zeg: "“Dit staat er. Jij mag kiezen wat je lijf ervan neemt.”" },
      { kop: "Sluit neutraal af", tekst: "Geen lof voor leeg bord, geen schaamte voor weinig eten. Eten wordt veiliger als het minder applaus en minder oordeel krijgt.", zeg: "“Oké, je bent klaar. We ruimen op.”" },
      { kop: "Bij groei, pijn of extreme beperking: vraag hulp", tekst: "Structureel weinig eten, gewichtszorgen, kokhalzen, angst of pijn horen bij huisarts, kinderarts of diëtist. Opvoedrust vervangt geen medische check.", zeg: null }
    ],
    bronnen: ["good-inside", "how-to-talk", "unconditional-parenting"]
  },
  {
    id: "nood-moeilijk-nieuws",
    titel: "Je moet moeilijk nieuws vertellen",
    icoon: "🕯️",
    kort: "Scheiding, ziekte, overlijden of groot gezinsnieuws. Warm, eerlijk en kort is veiliger dan mist.",
    stappen: [
      { kop: "Vertel het zelf, niet via spanning", tekst: "Kinderen voelen vaak al dat er iets is. Stilte maakt hun fantasie meestal enger dan de waarheid.", zeg: null },
      { kop: "Gebruik gewone woorden", tekst: "Vermijd vage taal als ‘weggaan’ of ‘slapen’ bij dood of scheiding. Eerlijke woorden kunnen zacht uitgesproken worden.", zeg: "“Ik moet iets verdrietigs vertellen.”" },
      { kop: "Geef eerst de kern, niet alle details", tekst: "Kinderen hebben hapklare waarheid nodig: wat is er gebeurd, wat verandert er, wie zorgt voor mij, wat blijft hetzelfde?", zeg: null },
      { kop: "Laat elke reactie oké zijn", tekst: "Huilen, vragen, lachen, weglopen of niets zeggen: allemaal normaal. Het brein doseert groot nieuws.", zeg: "“Je hoeft nu niet op een bepaalde manier te reageren.”" },
      { kop: "Kom erop terug", tekst: "Eén gesprek is zelden genoeg. Herhaal, corrigeer fantasieën en geef rituelen: tekening, kaarsje, vaste vraagmomenten.", zeg: "“Je mag hier morgen ook nog vragen over stellen.”" }
    ],
    bronnen: ["philippa-perry", "power-of-showing-up", "good-inside"]
  }
);

NOODHULP.push(
  {
    id: "nood-nachtangst",
    titel: "Nachtangst — je kind gilt maar is niet echt wakker",
    icoon: "🌘",
    kort: "Het lijkt paniek, maar je kind zit waarschijnlijk nog half in diepe slaap. Veilig houden, weinig prikkels.",
    stappen: [
      { kop: "Maak eerst de omgeving veilig", tekst: "Zorg dat je kind niet uit bed valt, tegen meubels botst of de trap op kan. Dit is geen moment voor uitleg.", zeg: null },
      { kop: "Praat laag en minimaal", tekst: "Een kind in nachtangst verwerkt woorden slecht. Jouw rustige aanwezigheid is genoeg.", zeg: "“Ik ben hier. Je bent veilig.”" },
      { kop: "Maak niet hard wakker", tekst: "Schudden of fel licht kan de verwarring vergroten. Wacht tot het lichaam vanzelf zakt.", zeg: null },
      { kop: "Houd de nacht saai", tekst: "Geen groot gesprek, geen scherm, geen ontbijt om 03u. Als het voorbij is, help je terug naar rust.", zeg: "“Het is nog nacht. Ik help je terug slapen.”" },
      { kop: "Zoek patroon en hulp bij risico", tekst: "Noteer tijdstip, slaaptekort, koorts of stress. Bij vaak herhalen, gevaar of verwonding: bespreek het met huisarts of kinderarts.", zeg: null }
    ],
    bronnen: ["solve-sleep-problems", "healthy-sleep-habits"]
  },
  {
    id: "nood-oververmoeid-baby",
    titel: "Baby is oververmoeid en raakt niet meer in slaap",
    icoon: "🌙",
    kort: "Je baby is voorbij moe: huilen, overstrekken, wegkijken. Zo maak je de wereld kleiner.",
    stappen: [
      { kop: "Stop met nieuwe trucs", tekst: "Meer prikkels maken een oververmoeid zenuwstelsel wakkerder. Kies één rustige aanpak en blijf daarbij.", zeg: null },
      { kop: "Maak donker, traag en saai", tekst: "Licht laag, geluid zacht, beweging ritmisch. Denk: minder wereld, niet meer entertainment.", zeg: null },
      { kop: "Gebruik een vaste cue", tekst: "Steeds dezelfde zin, hetzelfde wiegen of hetzelfde geluid helpt het brein herkennen: dit is slapen.", zeg: "“Het is slaaptijd. Ik ben bij je.”" },
      { kop: "Laat perfect slapen los", tekst: "Een dutje in armen, draagdoek of kinderwagen kan nu de nooduitgang zijn. Herstellen komt vóór methode.", zeg: null },
      { kop: "Kijk morgen naar timing", tekst: "Vaak begint dit uren eerder: te lange wakkertijd of te laat naar bed. Morgen probeer je vroeger zakken.", zeg: null }
    ],
    bronnen: ["no-cry-sleep-newborns", "healthy-sleep-habits", "science-of-parenting"]
  },
  {
    id: "nood-kokhalzen-tafel",
    titel: "Nieuw eten leidt tot kokhalzen of paniek",
    icoon: "🥄",
    kort: "Niet doorduwen. Maak de stap kleiner en hou het lichaam veilig.",
    stappen: [
      { kop: "Stop de hap-druk meteen", tekst: "Een gespannen lijf kan niet ontspannen leren eten. Haal de eis uit het moment.", zeg: "“Je hoeft dit nu niet door te slikken.”" },
      { kop: "Normaliseer uitspugen", tekst: "Een servet of apart schaaltje haalt schaamte weg en voorkomt dat je kind vastzit met iets wat het lijf niet aankan.", zeg: null },
      { kop: "Ga één stap terug", tekst: "Kijken, ruiken, aanraken of likken is ook blootstelling. Succes moet kleiner worden dan de angst.", zeg: "“Vandaag mag het op je bord liggen. Dat is genoeg.”" },
      { kop: "Bewaar tafelrust", tekst: "Praat over iets anders. Geen publiek, geen applaus, geen zucht van teleurstelling.", zeg: null },
      { kop: "Vraag hulp bij alarmsignalen", tekst: "Pijn, slikproblemen, gewichtsverlies, zeer weinig veilige voeding of aanhoudende paniek verdienen professionele begeleiding.", zeg: null }
    ],
    bronnen: ["child-of-mine", "raising-spirited-child"]
  },
  {
    id: "nood-overgang-nu",
    titel: "Je moet nú vertrekken maar je kind blokkeert",
    icoon: "⏱️",
    kort: "Jas aan, deur uit, afspraak wacht. Van machtsstrijd naar brug: erkennen, keuze, helpen.",
    stappen: [
      { kop: "Zeg wat je ziet", tekst: "Geen verwijt, wel contact. Een overgang is voor sommige kinderen echt een mini-verlies.", zeg: "“Je wil blijven spelen.”" },
      { kop: "Geef één kleine keuze", tekst: "Het vertrek staat vast; de vorm mag je kind mee bepalen.", zeg: "“Loop je zelf naar de deur of draag ik je?”" },
      { kop: "Maak afronden concreet", tekst: "Nog twee blokken op de toren, de auto in je hand, jas op de gang. Een brug werkt beter dan een abrupt einde.", zeg: null },
      { kop: "Help vriendelijk en beslist", tekst: "Als tijd op is, neemt jouw lichaam de leiding zonder boos te worden. Helpen is geen straf.", zeg: "“Ik help je nu. Je mag boos zijn.”" },
      { kop: "Plan later preventie", tekst: "Als dit vaak gebeurt, maak je vooraf een routinekaart, timer of vaste vertrekzin. Niet midden in de brand ontwerpen.", zeg: null }
    ],
    bronnen: ["raising-spirited-child", "positive-discipline-az", "good-inside"]
  },
  {
    id: "nood-terugkerende-explosie",
    titel: "Dezelfde explosie gebeurt wéér",
    icoon: "🧩",
    kort: "Vandaag blus je veilig. Morgen los je het terugkerende probleem samen op.",
    stappen: [
      { kop: "Blus vandaag zonder analyse", tekst: "In de explosie is het brein niet beschikbaar voor inzicht. Veiligheid, weinig woorden, wachten.", zeg: "“Ik laat niets kapotgaan. Ik blijf rustig.”" },
      { kop: "Schrap de les voor nu", tekst: "Een preek tijdens de storm wordt brandstof. De echte les komt later.", zeg: null },
      { kop: "Noteer het patroon", tekst: "Wat was de verwachting? Waar liep het vast? Huiswerk starten, scherm stoppen, sokken aantrekken, vertrek?", zeg: null },
      { kop: "Kies één rustig gesprek", tekst: "Vraag eerst wat het voor je kind lastig maakt. Daarna leg je jouw zorg uit. Pas dan zoeken jullie een oplossing.", zeg: "“Wat maakt dit elke keer zo moeilijk?”" },
      { kop: "Maak een experiment", tekst: "Geen levenscontract. Eén nieuwe afspraak voor een week, daarna bijsturen.", zeg: "“We proberen dit drie keer en kijken wat werkt.”" }
    ],
    bronnen: ["explosive-child", "good-inside"]
  }
);

const MYTHES = [
  {
    id: "mythe-verwennen",
    mythe: "“Je verwent een baby door hem te veel vast te houden.”",
    feit: "Onmogelijk. Een babybrein kan nog niet manipuleren — het kan alleen behoeften uitzenden. Nabijheid en troost bouwen letterlijk het stresssysteem dat later zelfstandigheid mogelijk maakt. Royaal getrooste baby's worden niet plakkerig, maar juist vrijer in het verkennen.\n\nElke keer dat een volwassene reageert op een huilende baby, leert het zenuwstelsel dat ongemak draaglijk is en hulp betrouwbaar. Dat is de basis van later zichzelf kunnen kalmeren, niet een recept voor afhankelijkheid. Het stresssysteem (met het hormoon cortisol) wordt letterlijk afgesteld door vroege troostervaringen.",
    bron: "science-of-parenting",
    bronDetail: "De chemie van troost: oxytocine en geluksstofjes als bouwstof van het emotionele brein."
  },
  {
    id: "mythe-slim-prijzen",
    mythe: "“Zeg kinderen vaak dat ze slim zijn — goed voor het zelfvertrouwen.”",
    feit: "Dit werkt averechts. Kinderen die 'slim' genoemd worden, gaan moeilijke taken mijden om hun etiket niet te riskeren, en klappen harder dicht na een mislukking. Prijs inzet, aanpak en lef — dat kweekt kinderen die uitdaging opzoeken.\n\nDweck's groeimindset-onderzoek toont dat het verschil zit in wat je toeschrijft: eigenschap of inspanning. Kinderen die geloven dat ze kunnen groeien, zoeken uitdagende taken op, herstellen sneller na fouten en presteren op de lange termijn aanzienlijk beter. Één kleine aanpassing in hoe je complimenten geeft, heeft grote gevolgen voor wie je kind wordt.",
    bron: "nurtureshock",
    bronDetail: "Dwecks lof-experimenten: eigenschapslof kweekt vermijders, proceslof kweekt doorzetters."
  },
  {
    id: "mythe-uithuilen",
    mythe: "“Even flink laten uithuilen, dan leert hij zichzelf troosten.”",
    feit: "Een jonge baby kán zichzelf niet troosten — die hersencircuits bestaan nog niet. Wat eruitziet als 'zelf in slaap vallen' na lang huilen, is vaak opgeven. Zelftroost ontstaat juist door duizenden keren getroost te wórden.\n\nOnderzoek naar cortisol — het stresshormoon — laat zien dat baby's die ophouden met huilen na 'uithuilen' vaak nog steeds hoge stresswaarden hebben: ze zijn stil, maar niet gekalmeerd. De weg naar zelfstandig kalmeren loopt via samen kalmeren, niet via uitputting.",
    bron: "power-of-showing-up",
    bronDetail: "De S van soothed (getroost): samen kalmeren nu is zichzelf kalmeren later."
  },
  {
    id: "mythe-straf-leert",
    mythe: "“Een stevige straf — dan leert hij het wel af.”",
    feit: "Straf leert vooral: niet betrapt worden. Onderzoek koppelt strafgericht opvoeden aan méér liegen, méér agressie en minder ontwikkeld moreel kompas. Grenzen werken; vergelding werkt tegen je.\n\nWat wél werkt: een grens houden, het gedrag benoemen, en een herstelmogelijkheid bieden. Kinderen leren moreel redeneren niet van wat er mét hen gedaan wordt, maar van hoe hun ouder in moeilijke momenten omgaat met conflict — met kalmte, consistentie en verbinding als voorbeeld.",
    bron: "unconditional-parenting",
    bronDetail: "Tientallen jaren onderzoek naar straf: gehoorzaamheid op korte termijn, schade op lange termijn."
  },
  {
    id: "mythe-driftbui-aandacht",
    mythe: "“Negeer een driftbui — hij doet het om aandacht.”",
    feit: "Een echte driftbui is geen toneel maar een overstroomd brein: je kind wíl wel stoppen, maar kan niet. Aandacht voor het gevoel (niet voor de eis!) is precies wat de storm korter maakt. Wat je negeert is het kind, niet de bui.\n\nHet bovenbrein — het voorste deel dat redeneert en remt — gaat offline zodra het gevoelsbrein overspoeld raakt. Een kind in volle driftbui is letterlijk tijdelijk niet in staat logisch te denken. Verbind eerst, corrigeer later: de storm laten zakken voordat je grenzen stelt.",
    bron: "whole-brain-child",
    bronDetail: "Het benedenbrein in de overname: zonder samen kalmeren duurt de storm langer."
  },
  {
    id: "mythe-streng-respect",
    mythe: "“Kinderen moeten een beetje bang voor je zijn, anders verlies je respect.”",
    feit: "Angst en respect zijn tegenpolen. Een kind dat bang voor je is, vertelt je minder, liegt meer en gehoorzaamt alleen onder toezicht. Echt gezag komt uit verbinding: kinderen volgen wie ze vertrouwen.\n\nIn de hersenen geldt: angst zet het overlevingssysteem aan, niet het leersysteem. Een kind in vecht-of-vluchtmodus neemt geen les op — het overleeft alleen. Gezag dat werkt, vraagt zowel warmte als stevigheid: wat onderzoekers 'gezaghebbend' (autoritatief) noemen, in tegenstelling tot 'streng-controlerend' (autoritair).",
    bron: "hold-on-to-your-kids",
    bronDetail: "Gezag werkt alleen binnen hechting; angst verbreekt precies die hechting."
  },
  {
    id: "mythe-zandbak-delen",
    mythe: "“Een goed opgevoed kind deelt altijd meteen.”",
    feit: "Afgedwongen delen leert dat de hardste roeper wint. Beurten nemen — rustig af mogen maken en dan doorgeven — leert de een beter tegen een teleurstelling te kunnen en de ander échte gulheid. Vrijgevigheid groeit uit veiligheid, niet uit dwang.\n\nVoor een peuter is eigendom een ontwikkelingsthema, geen onbeleefdheid. Kinderen die zelf mogen beslissen wanneer ze iets doorgeven, leren dat vrijgevigheid iets is dat je kiest — en gaan later verstandiger om met eigendom en gedeeld gebruik dan kinderen bij wie delen altijd afgedwongen werd.",
    bron: "good-inside",
    bronDetail: "Eigendom en beurten: geven vanuit veiligheid in plaats van dwang."
  },
  {
    id: "mythe-puber-losmaken",
    mythe: "“Pubers moet je vooral loslaten — bemoei je er niet te veel mee.”",
    feit: "Half waar, dus gevaarlijk. Tieners hebben meer zelfstandigheid nodig — maar even veel verbinding. Wie alleen loslaat, levert zijn kind uit aan het oordeel van de groep leeftijdsgenoten (en het algoritme). Blijf het kalme anker: beschikbaar, nieuwsgierig, zonder verhoor.\n\nNeufeld noemt dit 'op leeftijdsgenoten gericht raken': tieners die te vroeg losgemaakt worden, zoeken hun houvast bij leeftijdsgenoten. Maar leeftijdsgenoten zijn wisselvallig, impulsief en minstens zo zoekend — geen veilige basis. Een ouder die aanwezig blijft zonder te controleren, geeft een tiener iets wat geen vriendengroep kan bieden: een vast houvast.",
    bron: "hold-on-to-your-kids",
    bronDetail: "Op leeftijdsgenoten gericht raken: loslaten zonder verbinding is geen vrijheid maar in de kou staan."
  },
  {
    id: "mythe-belonen-werkt",
    mythe: "“Belonen is positief, dus altijd beter dan straffen.”",
    feit: "Beloningen kunnen op korte termijn gedrag kopen, maar ze maken de reden om iets te doen vaak kleiner: het kind doet het voor de sticker, het schermpunt of de euro. Voor vaardigheden en gewoontes werkt samenwerking beter: leg uit, oefen samen, geef ruimte voor eigen keuze en bouw routines.\n\nKohn toont aan dat beloningen van buitenaf de motivatie van binnenuit ondermijnen. Een kind dat aanvankelijk graag tekende en daarvoor stickers krijgt, tekent later minder enthousiast dan daarvoor. Samenwerking, uitleg en ruimte voor eigen keuze houden de échte drijfveer intact.",
    bron: "unconditional-parenting",
    bronDetail: "Beloningen als controle via een beloning: ze veranderen de motivatie, niet per se het inzicht."
  },
  {
    id: "mythe-sorry-afdwingen",
    mythe: "“Dwing je kind meteen sorry te zeggen, anders leert het geen empathie.”",
    feit: "Een afgedwongen sorry leert vooral toneelspelen op commando. Echte empathie komt pas als het kind weer rustig genoeg is om de ander te zien. Stop eerst het gedrag, herstel veiligheid, en help later met goedmaken: kijken wat er gebeurde, schade herstellen, een betere zin oefenen.\n\nEen kind dat nog in zijn eigen emotie zit, kan zich letterlijk niet inleven in de ander — de hersenen staan in overleefmodus. Wacht tot beide kinderen rustig zijn, benoem dan wat er gebeurde in neutrale taal, en help het kind zelf woorden vinden voor wat er beter kon. Dat bouwt echte empathie.",
    bron: "good-inside",
    bronDetail: "Repair boven performance: herstel leert meer dan een verplicht woordje."
  },
  {
    id: "mythe-schermtijd-timer",
    mythe: "“Schermtijd is prima zolang je maar een timer zet.”",
    feit: "De timer is maar één deel van het verhaal. De belangrijkste vraag is wat het scherm verdringt: slaap, vrij spel, echte vriendschappen, verveling en beweging. Een uur dat rustig past in een volle dag is iets anders dan een telefoon die het sociale leven en de nacht overneemt.\n\nHaidt onderscheidt ook het type schermgebruik: passief scrollen en sociale vergelijking werken anders op het brein dan samen een film kijken of een spel spelen. Inhoud, context en met wie je kijkt tellen net zoveel als de klok. Een gesprek over wat je kind ziet en voelt werkt beschermender dan enkel minuten tellen.",
    bron: "anxious-generation",
    bronDetail: "De verschuiving van speelse kindertijd naar telefoonkindertijd: niet alleen duur, ook timing en verdringing tellen."
  },
  {
    id: "mythe-huiswerk-politie",
    mythe: "“Als jij huiswerk niet streng opvolgt, wordt je kind lui.”",
    feit: "Huiswerkpolitie maakt de ouder verantwoordelijk voor iets wat uiteindelijk van het kind moet worden. Je mag structuur bieden, beschikbaar zijn en samen plannen, maar de regie moet geleidelijk terug naar je kind. Controle doodt precies de motivatie die je probeert te kweken.\n\nOnderzoek naar zelfstandigheid en motivatie toont steeds: kinderen die zelf de baas zijn over hun schoolwerk — ook als ze het soms vergeten — leren beter zelf te sturen dan kinderen wier agenda permanent bewaakt wordt. Je kunt een rustige plek bieden, meedenken als dat gevraagd wordt, en fouten hun eigen leraar laten zijn.",
    bron: "self-driven-child",
    bronDetail: "Zelfstandigheid en stress: kinderen leren meer wanneer ze zelf de baas blijven over hun werk."
  },
  {
    id: "mythe-altijd-consequent",
    mythe: "“Je moet altijd consequent zijn, anders nemen kinderen je niet serieus.”",
    feit: "Betrouwbaar zijn is belangrijk; mechanisch zijn niet. Soms vraagt dezelfde grens een andere aanpak omdat het kind moe, bang, ziek of overprikkeld is. Een stevige ouder houdt de richting vast én stemt af op de situatie. Dat is geen zwakte, dat is leiderschap.\n\nWat kinderen nodig hebben is voorspelbaarheid in waarden en warmte, niet identieke reacties op elk moment. Een grens die gisteren met woorden gesteld werd, mag vandaag met nabijheid en minder woorden gesteld worden als het kind uitgeput is. Voorspelbaar zijn in houding en relatie is kracht; robotmatige regels zijn breekbaar.",
    bron: "peaceful-parent",
    bronDetail: "Warm en stevig tegelijk: verbinding en zelf kalm blijven vóór automatische controle."
  },
  {
    id: "mythe-gelijk-behandelen",
    mythe: "“Broers en zussen moet je exact gelijk behandelen.”",
    feit: "Exact gelijk voelt vaak juist oneerlijk, omdat kinderen niet exact hetzelfde nodig hebben. Het doel is niet identieke porties aandacht, maar dat elk kind zich gezien voelt in zijn eigen behoefte. Soms krijgt de één meer hulp, soms de ander meer ruimte.\n\nPerry beschrijft hoe het kind voor je zien — zijn temperament, zijn moment, zijn behoefte — zinvoller is dan een gelijke verdeling bijhouden. Als elk kind weet dat het geholpen wordt als het nodig is, verdwijnt veel van de jaloezie die ouders proberen te vermijden met exacte gelijkheid. Eerlijkheid voelen is niet hetzelfde als identieke behandeling krijgen.",
    bron: "philippa-perry",
    bronDetail: "Kijk naar het echte kind voor je, niet naar een ideaalplaatje van eerlijkheid."
  },
  {
    id: "mythe-ruzie-zelf-oplossen",
    mythe: "“Laat kinderen ruzies altijd zelf oplossen.”",
    feit: "Soms lukt dat, maar vaak oefenen ze dan vooral wie het hardst roept of het snelst grijpt. Ouders hoeven geen rechter te zijn, wel coach: benoem wat je ziet, geef elk kind taal, bewaak veiligheid en help hen een oplossing vinden die niet op winnen draait.\n\nFaber en Mazlish beschrijven hoe de taal van bemiddeling langzaam overgenomen wordt door kinderen die het keer op keer horen: 'jij wil dit, hij wil dat — hoe kan dat allebei?'. Kinderen die ouders zo zien bemiddelen, gebruiken diezelfde aanpak later zelf — op het schoolplein, in vriendschappen, later op het werk.",
    bron: "how-to-talk",
    bronDetail: "Beschrijven, gevoelens erkennen en probleemoplossing uitlokken in plaats van schuldigen aanwijzen."
  },
  {
    id: "mythe-falen-beschermen",
    mythe: "”Een goede ouder beschermt zijn kind tegen falen.”",
    feit: "Falen dat veilig genoeg is, is groeistof. Als jij elk ongemak wegpoetst, leert je kind vooral dat ongemak gevaarlijk is. Blijf nabij, maar neem het stuur niet telkens over: help je kind ademen, nadenken, opnieuw proberen en ontdekken dat teleurstelling draaglijk is.\n\nKinderen die nooit falen leren niet hoe ze met falen omgaan — en dat is het eigenlijke probleem, wanneer falen onvermijdelijk wordt. De aanwezigheid van een ouder die het uithoudt náást een teleurgesteld kind — zonder het op te lossen — leert meer dan succes: het leert dat ongemak eindig is en dat jij er dan ook nog bent.",
    bron: "self-driven-child",
    bronDetail: "Een gevoel van controle en het gevoel iets te kunnen groeien door zelf proberen, niet door ouderlijke betutteling."
  },
  {
    id: "mythe-spontane-empathie",
    mythe: "”Kinderen hebben empathie van nature — dat hoef je niet te leren.”",
    feit: "Empathie is deels aangeboren, maar voor een groot deel aangeleerd. Kinderen die zelf empathisch behandeld worden — wiens gevoelens benoemd en erkend worden — ontwikkelen aanzienlijk meer inlevingsvermogen dan kinderen bij wie gevoelens genegeerd of bespot worden.\n\nGottman noemt ouders die gevoelens benoemen en erkennen 'gevoelscoaches'. Hun kinderen zijn niet alleen empathischer; ze zijn ook veerkrachtiger bij tegenslagen, hebben betere vriendschappen en presteren beter op school. Emoties begeleiden is geen extraatje bij opvoeden — het is een van de krachtigste dingen die een ouder kan doen.",
    bron: "gottman-eq",
    bronDetail: "Emoties begeleiden als sleutel tot emotionele intelligentie: ouders die gevoelens benoemen, kweken kinderen die dat ook doen."
  },
  {
    id: "mythe-jongens-huilen-niet",
    mythe: "”Jongens moet je leren hun emoties te beheersen, niet tonen.”",
    feit: "Jongens die leren dat huilen of bang zijn 'voor meisjes' is, leren emoties te verhullen — niet om ermee om te gaan. Onbewerkte emoties worden agressie, risicogedrag of stille terugtrekking. Jongens die hun gevoelens mogen tonen, worden psychisch veerkrachtiger volwassenen.\n\nIn de hersenen is er geen verschil in hoe sterk jongens en meisjes emoties voelen — het verschil zit in wat sociaal geleerd en beloond wordt. Jongens die vroeg leren dat boosheid de enige toegestane emotie is, bouwen een woordenschat voor gevoelens op van één woord. De boodschap 'jongens huilen niet' is geen kracht — het is een training in zelfarmoede.",
    bron: "science-of-parenting",
    bronDetail: "Hoe het brein emoties verwerkt: emoties onderdrukken versus verwerken — twee heel verschillende processen in het brein."
  },
  {
    id: "mythe-keuzevrijheid-verwent",
    mythe: "”Kinderen te veel keuzes geven maakt ze verwend en onzeker.”",
    feit: "Het omgekeerde klopt: kinderen die nooit zelf mogen kiezen, bouwen nauwelijks zelfvertrouwen of beslissingsvaardigheid op. Het gaat om passende keuzes: twee opties voor een kleuter, meer opties naarmate het kind ouder wordt. Geen keuzes geven is oefening onthouden.\n\nStixrud en Johnson benadrukken dat een gevoel van controle — weten dat jouw keuzes ertoe doen — een van de krachtigste buffers tegen stress en angst is. Kinderen die in kleine dingen zeggenschap hadden, navigeren grote beslissingen later gemakkelijker. Begin klein: welke pyjama, welke appel, welke route naar school.",
    bron: "self-driven-child",
    bronDetail: "Gevoel van controle als buffer tegen stress en als motor van motivatie van binnenuit."
  },
  {
    id: "mythe-vrij-spel-verspilling",
    mythe: "”Vrij spelen zonder doel is tijdverspilling — beter nuttige activiteiten.”",
    feit: "Vrij spel is de rijkste leerschool die bestaat: sociale vaardigheden, ruzies oplossen, zichzelf inhouden, creativiteit en risico's inschatten worden allemaal geoefend in vrij, ongepland spel. Georganiseerde activiteiten versterken specifieke vaardigheden — vrij spel bouwt het hele kind.\n\nHaidt laat zien dat de generatie die opgroeide met volle agenda's en weinig ongestructureerde buitentijd psychisch kwetsbaarder is dan voorgaande generaties. Verveling is niet de vijand van leren — het is de voorwaarde voor creativiteit, eigen initiatief en het vermogen om zelf richting te vinden.",
    bron: "anxious-generation",
    bronDetail: "De verdwijnende speelkindertijd: hoe het vervangen van vrij spel door gestructureerde activiteiten de volgende generatie minder veerkrachtig maakte."
  },
  {
    id: "mythe-stress-zelf-oplossen",
    mythe: "”Je kind moet leren met stress om te gaan zonder jouw hulp.”",
    feit: "Samen kalmeren (co-regulatie) — een volwassene die mee-kalmeert — is de enige manier waarop jonge kinderen hun zenuwstelsel leren kalmeren. Zichzelf kalmeren is een eindpunt, samen kalmeren is de weg ernaartoe. Een kind dat altijd alleen moet kalmeren, leert juist dat stress onoverwinnelijk is.\n\nSiegel en Bryson beschrijven hoe het voorste deel van het brein (de prefrontale cortex) zich pas volledig ontwikkelt rond het vijfentwintigste levensjaar. Tot die tijd leent een kind de rustige hersenen van een volwassene. Wie nabij blijft tijdens moeilijke momenten, traint letterlijk de verbindingen die het kind later zelf nodig heeft.",
    bron: "power-of-showing-up",
    bronDetail: "De vier S'en van veilige hechting (Safe, Seen, Soothed, Secure — veilig, gezien, getroost, zeker): gerust stellen is biologisch noodzakelijk, geen verwennen."
  },
  {
    id: "mythe-sociaal-media-voorlichting",
    mythe: "”Eén goed gesprek over sociale media is genoeg.”",
    feit: "Sociale media verandert sneller dan elk gesprek kan bijhouden. Effectieve mediaopvoeding is geen eenmalige sessie maar een doorlopend, nieuwsgierig gesprek over wat je kind ziet, voelt en doet online — gekoppeld aan gezinsafspraken die regelmatig worden bijgesteld.\n\nHaidt beschrijft hoe platformen ontworpen zijn om aandacht vast te houden — met variabele bekrachtiging, sociale vergelijking en oneindig scrollen. Dat zijn ingenieurssystemen, geen speelgoed. Een kind dat begrijpt hoe dat werkt — dat het platform ontworpen is om verslaving te creëren — kan bewustere keuzes maken dan een kind dat het als neutraal gereedschap ziet.",
    bron: "anxious-generation",
    bronDetail: "Hoe platformen ontworpen worden om het tienersbrein te binden, en waarom één gesprek geen dam opwerpt tegen een ingenieurssysteem."
  },
  {
    id: "mythe-thuisblijvende-moeder",
    mythe: "”Kinderen hebben een voltijdse aanwezige ouder nodig voor een goede hechting.”",
    feit: "Kwaliteit van contact weegt zwaarder dan kwantiteit aanwezigheid. Een ouder die aanwezig maar emotioneel onbereikbaar is, bouwt minder veilige hechting dan een werkende ouder die 's avonds echt beschikbaar is. Hechting draait om responsiviteit, niet om klokuren.\n\nSiegel en Bryson beschrijven 'aanwezig zijn' als aanwezig zijn van hoofd én hart — niet alleen lichamelijk in de ruimte, maar emotioneel afgestemd op het kind. Een halfuur volledig aanwezig spelen, waarbij je je kind volgt en voelt, bouwt meer hechting dan de hele dag thuis zijn terwijl je door je telefoon scrolt.",
    bron: "power-of-showing-up",
    bronDetail: "Veilige hechting via responsiviteit: aanwezig-maar-afwezig is erger dan korter-maar-echt-aanwezig."
  },
  {
    id: "mythe-tiener-hoort-te-rebelleren",
    mythe: "”Rebelsheid bij tieners is normaal en je moet het maar ondergaan.”",
    feit: "Conflict en het zoeken naar zelfstandigheid zijn normaal; intense, aanhoudende vijandigheid of gevaarlijk gedrag niet. Tieners die voldoende gehoord worden en echte zelfstandigheid krijgen, rebelleren doorgaans minder fel dan tieners die alles moeten bevechten. De mate van rebellie is deels een spiegel van de relatie.\n\nNeufeld laat zien dat tieners die rebel gedrag vertonen vaak niet rebellen tegen hun ouders, maar naar verbinding zoeken op de enige manier die hen overgelaten is. Een tiener die weet dat zijn ouder hem hoort, hoeft zijn identiteit niet via verzet te bouwen. Inspraak geven is krachtiger dan grenzen versoepelen.",
    bron: "hold-on-to-your-kids",
    bronDetail: "Op leeftijdsgenoten gericht raken als vervanging voor oudercontact: een goed verbonden tiener heeft minder nodig om zich te bewijzen via verzet."
  },
  {
    id: "mythe-knuffels-afdwingen",
    mythe: "”Kinderen moeten familie knuffelen, ook als ze niet willen — dat is beleefdheid.”",
    feit: "Een kind dat geleerd heeft zijn eigen lichaamsgrens te negeren voor sociale beleefdheid, heeft ook minder middelen om die grens bij anderen te bewaken. Baas zijn over je eigen lichaam — het recht te beslissen wie je aanraakt — begint thuis, in de veiligste omgeving. Begroet op manieren die voor je kind voelen.\n\nJe kunt alternatieven aanbieden — een hand geven, zwaaien, een 'dag' zeggen — zonder het kind te verplichten tot lichamelijk contact. En je kunt dat uitleggen aan de teleurgestelde tante. Dat gesprek, hoe ongemakkelijk ook, is een van de krachtigste dingen die een ouder kan doen om het vertrouwen van een kind te verdienen.",
    bron: "philippa-perry",
    bronDetail: "Het lichaam als eigendom van het kind: begroeten op commando ondermijnt dezelfde grens die beschermt tegen grensoverschrijding later."
  },
  {
    id: "mythe-praattherapie-voor-peuters",
    mythe: "”Jonge kinderen kunnen hun problemen niet verwerken — ze zijn te klein.”",
    feit: "Jonge kinderen verwerken niet via woorden maar via spel, lichaamscontact en routine. Ze begrijpen en registreren veel meer dan hun taalvermogen toelaat. Een peuter die moeilijke ervaringen meemaakt, heeft evengoed verwerking nodig — maar via nabijheid, verhalen en spel, niet via gesprek.\n\nSiegel en Bryson beschrijven hoe verhalen vertellen — ook vereenvoudigd, ook in beeldspraak — het brein helpt moeilijke ervaringen een plek te geven. Samen een boek lezen over iets wat het kind meemaakte, of een situatie naspelen, doet meer dan vragen 'hoe voel jij je?'. Spel is de taal van het jonge brein.",
    bron: "whole-brain-child",
    bronDetail: "Het verhalende brein en spel als manier om te verwerken: waarom woorden soms de verkeerde weg zijn voor jonge kinderen."
  },
  {
    id: "mythe-kind-gelukkig-houden",
    mythe: "”De taak van een ouder is zijn kind gelukkig maken.”",
    feit: "Geluk is een neveneffect, geen opvoeddoel. Kinderen die geluk als recht krijgen aangeleerd, leren weinig tegen een teleurstelling te kunnen. De taak is een kind te helpen zijn eigen binnenkant te leren kennen en verdragen — ook ongemak, verveling en teleurstelling — zodat geluk betekenis heeft als het er is.\n\nKohn beschrijft hoe ouders die telkens ingrijpen bij ongemak hun kinderen onbedoeld leren dat verdriet een fout is en dat een volwassene het moet oplossen. Wat kinderen weerbaar maakt, is niet afwezigheid van verdriet, maar de ervaring dat ze verdriet kunnen verdragen en dat het vanzelf weer verandert.",
    bron: "unconditional-parenting",
    bronDetail: "Opvoeden met of zonder voorwaarden: wie geluk als doel stelt, maakt elk verdriet tot een opvoedmislukking."
  },
  {
    id: "mythe-boekjes-te-vroeg",
    mythe: "”Voorlezen heeft pas zin als een kind woorden begrijpt.”",
    feit: "Voorlezen heeft zin vanaf de geboorte. De melodie van taal, het ritme, de stem en de nabijheid: dat alles bouwt hersenverbindingen voor taal, aandacht en hechting. Baby's die veel voorgelezen worden, hebben op school een duidelijk grotere woordenschat en betere leesprestaties.\n\nDe dagelijkse routine van voorlezen bouwt ook een ritme van verbinding: een kind leert dat er een moment is waarop een volwassene volledig voor hem aanwezig is. Die voorspelbare nabijheid — los van de taalwinst — is al een reden om te beginnen, lang voor het eerste woord.",
    bron: "raising-good-humans",
    bronDetail: "Taal leren door eraan blootgesteld te worden: het klankritme van verhalen bouwt de basis in het brein voor lezen, vóór het eerste woord."
  },
  {
    id: "mythe-eerlijk-zijn-hurt",
    mythe: "”Je moet kinderen beschermen tegen de harde waarheid.”",
    feit: "Kinderen verdragen eerlijkheid beter dan leugens of ontwijking — mits die eerlijkheid leeftijdsaangepast en warm is. Een kind dat ontdekt dat het beschermd werd via onwaarheden, verliest niet alleen de informatie maar ook het vertrouwen. Eerlijkheid is geen hardheid; het is respect.\n\nPerry beschrijft hoe kinderen een gevoel voor 'er klopt iets niet' hebben, zelfs als ze niet kunnen benoemen wat. Ontwijken of liegen versterkt dat gevoel zonder het te verklaren — en daarmee groeit de angst. Een eerlijk, warm antwoord — ook als dat 'ik weet het niet' of 'dit is moeilijk' is — geeft het kind vastigheid in onzekerheid.",
    bron: "philippa-perry",
    bronDetail: "De kosten van halve waarheden: kinderen die de waarheid achterhalen voelen zich dubbel bedrogen — om de inhoud en om het bedrog zelf."
  },
  {
    id: "mythe-broers-beste-vrienden",
    mythe: "”Broers en zussen worden vanzelf beste vrienden als je hen samen opvoedt.”",
    feit: "Goede broer-zusrelaties groeien niet vanzelf maar via geleide ervaringen: elk kind voldoende eigen aandacht, conflicten begeleid in plaats van genegeerd, en de band niet als vanzelfsprekend behandelen. Broers en zussen die als vrienden opgroeien, hadden ouders die die band actief ondersteunden.\n\nRivalisering is normaal en zelfs gezond — het leert onderhandelen, eerlijkheid en doorzetten. Maar het vraagt ouders die niet wegkijken maar bemiddelen, die elk kind apart zien én samen laten bestaan, en die de kinderen niet inkleuren met onderlinge vergelijkingen. Een goede broer-zusband is zelden toeval; het is bijna altijd het resultaat van actieve aandacht.",
    bron: "how-to-talk",
    bronDetail: "Jaloezie, rivalisering en hechting tussen siblings: de ouderrol in het creëren van alliantie versus rivalisering."
  }
];

MYTHES.push(
  {
    id: "mythe-harder-roepen",
    mythe: "”Als een kind niet luistert, moet je duidelijker en harder zijn.”",
    feit: "Harder wordt zelden duidelijker. Een kind in stress hoort vooral toon, dreiging en snelheid — niet de inhoud. Duidelijkheid is korter, trager en concreter: dichtbij komen, één grens, één volgende stap.\n\nFaber en Mazlish beschrijven hoe schreeuwen het stresscircuit van het kind activeert — en dat circuit zet het luistercircuit op pauze. Rustig dichtbij komen, op ooghoogte gaan, een korte zin zeggen en dan wachten werkt structureel beter. De kunst is niet luider zijn, maar aanweziger zijn.",
    bron: "how-to-talk",
    bronDetail: "Kinderen luisteren beter wanneer taal beschrijft wat er moet gebeuren in plaats van druk op te voeren."
  },
  {
    id: "mythe-bord-leeg",
    mythe: "”Je moet kinderen leren hun bord leeg te eten.”",
    feit: "Bord-leeg leren eten traint vooral het negeren van interne signalen. Gezonde eetgewoonten groeien uit herhaalde, ontspannen blootstelling en duidelijke tafelstructuur, niet uit strijd om de laatste happen.\n\nSatter's taakverdeling is helder: de ouder beslist wat, wanneer en waar er gegeten wordt; het kind beslist of en hoeveel het eet. Zodra de ouder de regie over het 'hoeveel' overneemt, verliest het kind contact met zijn eigen honger- en verzadigingssignalen — een vaardigheid die het de rest van zijn leven nodig heeft.",
    bron: "unconditional-parenting",
    bronDetail: "Controle rond eten verschuift aandacht van lichaamsgevoel naar ouderlijke goedkeuring."
  },
  {
    id: "mythe-terugtrekken-pushen",
    mythe: "”Een kind dat zich afsluit, moet je dwingen te praten.”",
    feit: "Druk maakt dichtklappen vaak sterker. Beschikbaar blijven werkt beter: naast elkaar iets doen, korte uitnodigingen, geen kruisverhoor. Sommige kinderen praten pas wanneer het veilig genoeg voelt om níet te hoeven praten.\n\nPerry beschrijft hoe gesprekken in zij-aan-zij situaties — samen koken, rijden, wandelen — vaak meer opleveren dan face-to-face. De ontlaste blik, het gedeelde doen, verlaagt de drempel. Een kind dat weet dat het jouw aandacht heeft zonder dat het iets hoeft te presteren, vindt zijn eigen moment om te praten.",
    bron: "philippa-perry",
    bronDetail: "Relatiegesprekken vragen timing: nabijheid zonder forceren opent meer dan emotioneel ondervragen."
  },
  {
    id: "mythe-online-pesten-weerbaarheid",
    mythe: "”Online pesten hoort erbij — daar worden ze weerbaar van.”",
    feit: "Online pesten volgt een kind tot in bed, schaalt snel en laat zich eindeloos herbekijken. Weerbaarheid betekent niet alleen verdragen; het betekent volwassen bescherming, bewijs bewaren, groepen begrenzen en het kind niet alleen laten met een algoritmische storm.\n\nHaidt beschrijft hoe sociale vergelijking en reputatiedruk online exponentieel intenser zijn dan offline — en permanent zichtbaar voor een hele school. Weerbaarheid is niet 'er maar mee leren omgaan'; het is een netwerk van steun, duidelijke grenzen en samen handelen opbouwen. Een kind dat hulp vraagt, is weerbaarder dan een kind dat het alleen uithoudt.",
    bron: "anxious-generation",
    bronDetail: "De telefoon-gebaseerde kindertijd vergroot sociale vergelijking, reputatiedruk en permanente beschikbaarheid."
  },
  {
    id: "mythe-pubers-lui-slaap",
    mythe: "”Pubers zijn gewoon lui als ze ’s ochtends niet vooruit raken.”",
    feit: "Het tienerbrein verschuift biologisch later op de avond, terwijl school vaak vroeg begint. Slaaptekort lijkt dan op luiheid, humeurigheid of onwil. Structuur helpt, beschaming niet.\n\nSlaaponderzoek toont dat tieners bij vroege begintijden letterlijk in een andere slaapfase zitten. Scholen die later beginnen, zien verbeterde leerprestaties, minder depressieve klachten en minder ongelukken onder jonge bestuurders. Het is biologie, geen karakter — en beschaming maakt het slaaptekort alleen groter.",
    bron: "nurtureshock",
    bronDetail: "Onderzoek naar slaaptekort toont effecten op stemming, leren, zelfbeheersing en schoolprestaties."
  },
  {
    id: "mythe-liegen-karakter",
    mythe: "”Een kind dat liegt, heeft een slecht karakter.”",
    feit: "Liegen is vaak zelfbescherming: angst voor straf, schaamte of teleurstelling. De vraag is niet alleen 'waarom lieg je?', maar 'waarom voelde waarheid hier onveilig?'. Herstel en eerlijkheid oefenen werkt beter dan karakteroordelen.\n\nOnderzoek toont dat kinderen in omgevingen met hoge straf meer liegen dan kinderen waar fouten besproken mogen worden. De omgeving bepaalt mee of eerlijk zijn lonend is. Een ouder die zegt 'ik ben blij dat je me dat vertelt, ook al is het moeilijk' traint eerlijkheid effectiever dan straffen.",
    bron: "nurtureshock",
    bronDetail: "Kinderen liegen minder wanneer waarheid zeggen veiliger is dan betrapt worden."
  },
  {
    id: "mythe-hechting-eerste-jaar",
    mythe: "”Hechting wordt in het eerste jaar vastgelegd; daarna is het klaar.”",
    feit: "Het eerste jaar is belangrijk, maar hechting blijft iets wat je onderhoudt in de relatie. Herstel na fouten, opnieuw verbinden na conflict en voorspelbaar beschikbaar blijven veranderen de relatie ook later nog.\n\nSiegel en Bryson beschrijven hoe 'breuk en herstel' — het herstellen van een breuk in de relatie — een van de krachtigste vormen is om hechting op te bouwen. Een ouder die zichzelf terugvindt na een uitbarsting en dat erkent, laat zien dat relaties breuken aankunnen. Dat is misschien wel de meest geruststellende boodschap die een kind kan ontvangen.",
    bron: "power-of-showing-up",
    bronDetail: "De vier S'en zijn geen babylijstje maar een levenslange taal van veiligheid: safe, seen, soothed, secure (veilig, gezien, getroost, zeker)."
  },
  {
    id: "mythe-ruzie-verbergen",
    mythe: "”Als kinderen ruzie of spanning niet zien, hebben ze er geen last van.”",
    feit: "Kinderen voelen spanning vaak feilloos aan en vullen stilte met eigen verklaringen. Het doel is niet dat ze nooit conflict zien, maar dat ze herstel zien: kalmeren, verantwoordelijkheid nemen en opnieuw verbinding maken.\n\nPerry beschrijft hoe kinderen die nooit conflicten én herstel zien, een onrealistisch beeld van relaties opbouwen — en later schrikken als een vriendschap of liefdesrelatie niet perfect verloopt. Conflict zien zonder herstel is schadelijk; conflict zien mét herstel is leerzaam. De kwaliteit van het herstel is wat telt.",
    bron: "philippa-perry",
    bronDetail: "Kinderen bouwen hun beeld van relaties niet uit perfecte harmonie, maar uit hoe volwassenen breuken herstellen."
  }
);

MYTHES.push(
  {
    id: "mythe-een-hapje-proeven",
    mythe: "”Je moet minstens één hapje proeven, anders leert een kind niets eten.”",
    feit: "Dwang leert vooral dat nieuw eten onveilig is. Wennen kan ook via kijken, ruiken, aanraken, likken en weer uitspugen. Herhaalde, drukarme blootstelling bouwt meer eetdurf dan één verplicht hapje.\n\nSatter legt uit dat vertrouwen aan tafel opgebouwd wordt via veiligheid: het kind mag beslissen of het eet. Een kind dat weet dat het nee mag zeggen, is vaker bereid om toch iets te proberen dan een kind bij wie proeven afgedwongen wordt. Controle en vrijheid zijn aan tafel elkaars tegenpolen.",
    bron: "child-of-mine",
    bronDetail: "Satter's taakverdeling: ouders bieden structuur en variatie, kinderen houden regie over of en hoeveel."
  },
  {
    id: "mythe-dessert-verdienen",
    mythe: "”Dessert moet je verdienen door je bord leeg te eten.”",
    feit: "Zo maak je groenten de klus en dessert de trofee. Een kind leert dan niet naar zijn lijf luisteren, maar naar jouw beloningssysteem. Dessert kan begrensd zijn zonder het als machtsmiddel te gebruiken.\n\nSatter adviseert dessert in een vaste, kleine portie als onderdeel van de maaltijd aan te bieden — niet als beloning achteraf. Zo verliest het zijn speciale machtspositie en leert het kind ook dessert in verhouding te eten. De rangorde 'dit is lekker, dat moet je verdienen' stuurt kinderen juist naar het verbodene.",
    bron: "child-of-mine",
    bronDetail: "Dessert koppelen aan groenten maakt eten iets om te verdienen en vergroot de rangorde tussen soorten eten."
  },
  {
    id: "mythe-honger-eet-wel",
    mythe: "”Als een kind honger heeft, eet het vanzelf wel.”",
    feit: "Vaak klopt dat bij gezonde kinderen met rustige structuur, maar niet altijd. Angst, druk, pijn, slikproblemen, gevoeligheid voor prikkels of groeizorgen kunnen eten blokkeren. Gebruik deze zin dus niet als reden om alarmsignalen te negeren.\n\nSatter benadrukt dat de taakverdeling aan tafel vertrouwen in het kind inhoudt — maar ook observatie en verantwoordelijkheid van de ouder. Groeikrommen, energie, concentratie en eetplezier zijn signalen om in de gaten te houden. Vertrouwen en oplettendheid sluiten elkaar niet uit.",
    bron: "child-of-mine",
    bronDetail: "Vertrouwen in hoe een kind eet vraagt tegelijk structuur, opletten en hulp bij medische signalen of prikkelgevoeligheid."
  },
  {
    id: "mythe-grazen-gezond",
    mythe: "”Gezonde snacks mogen de hele dag door.”",
    feit: "De hele dag grazen maakt honger vaag en maaltijden moeilijker. Kinderen leren beter eten met voorspelbare maaltijden en geplande snacks: genoeg zekerheid, maar ook echte eetlust.\n\nSatter laat zien dat structuur rond eten ook sociaal iets bouwt: een ritueel van samenkomen. Kinderen die met tafelritme opgroeien, hebben later meer gemak met sociaal eten dan kinderen die altijd on demand aten. De tafel is niet alleen voeding — het is ook ritme en verbinding.",
    bron: "child-of-mine",
    bronDetail: "Regelmatige maaltijden en snacks helpen kinderen eetlust, sociabiliteit en tafelritme ontwikkelen."
  },
  {
    id: "mythe-later-bed-slaapt-beter",
    mythe: "”Hou een kind langer wakker, dan slaapt het vannacht beter.”",
    feit: "Vaak precies omgekeerd. Oververmoeidheid maakt het stresssysteem actiever, waardoor inslapen en doorslapen moeilijker worden. Een vroegere bedtijd kan bij jonge kinderen juist slaap herstellen.\n\nWeissbluth beschrijft hoe slaapschulden zich ophopen: een moe kind dat laat slaapt, heeft de volgende dag een slechter ritme en raakt zo verder van zijn optimale slaapvenster. Een paar dagen vroeger beginnen — ook als inslapen even langer duurt — reset het ritme structureel beter dan later opblijven.",
    bron: "healthy-sleep-habits",
    bronDetail: "Weissbluth benadrukt dat slaap slaap ondersteunt en dat oververmoeidheid gedrag en nachten verslechtert."
  },
  {
    id: "mythe-nachtangst-droom",
    mythe: "”Nachtangst is gewoon een enge droom, dus je moet erover praten.”",
    feit: "Nachtangst is vaak geen gewone droom maar een gedeeltelijke ontwaking uit diepe slaap. Een kind is dan verward en niet echt bereikbaar. Veiligheid, weinig woorden en rust helpen meer dan analyseren om 03u.\n\nFerber onderscheidt nachtangst van gewone nachtmerries: bij nachtangst is het kind niet troostbaar en herinnert het zich niets de volgende ochtend. Overdag erover praten (als het kind het zich herinnert) en de slaap goed beschermen — vroeg genoeg naar bed, geen overstimulatie — zijn de meest effectieve ingrepen.",
    bron: "solve-sleep-problems",
    bronDetail: "Ferber onderscheidt nachtmerries van partial wakings zoals confusional arousals en sleep terrors."
  },
  {
    id: "mythe-slaapassociatie-slecht",
    mythe: "”In slaap drinken of wiegen is altijd een slechte gewoonte.”",
    feit: "Het is eerst gewoon biologie: zuigen, nabijheid en ritme kalmeren. Het wordt pas een probleem als het gezin vastloopt of niemand nog rust krijgt. Dan kun je de koppeling geleidelijk verschuiven, zonder schaamte.\n\nPantley beschrijft zachte methodes om slaapkoppelingen te verschuiven zonder een kind te laten huilen: geleidelijk de koppeling afbouwen, alternatieven introduceren en het ritme langzaam verleggen. Er is geen leeftijdsgrens waarop een slaapkoppeling 'fout' wordt — alleen een gezin dat vastloopt en hulp nodig heeft om stap voor stap iets te veranderen.",
    bron: "no-cry-sleep-newborns",
    bronDetail: "Pantley beschrijft zachte manieren om slaapkoppelingen stap voor stap te veranderen."
  },
  {
    id: "mythe-explosief-manipuleert",
    mythe: "”Een explosief kind manipuleert gewoon om zijn zin te krijgen.”",
    feit: "Terugkerende explosies wijzen vaak op ontbrekende vaardigheden: flexibiliteit, tegen een teleurstelling kunnen, problemen oplossen of woorden vinden voor zorgen. Consequenties stapelen lost dat tekort niet op; het probleem samen oplossen wel.\n\nGreene's aanpak 'samen problemen oplossen' werkt vanuit één inzicht: ontmoet het kind bij zijn werkelijke drempel, niet bij jouw verwachting. Dat vraagt vooraf uitzoeken welke situaties steeds ontploffen, en samen — vóór de volgende explosie — een haalbare aanpak afspreken. Dat is geen toegeven; dat is doelgericht werken aan de vaardigheid die ontbreekt.",
    bron: "explosive-child",
    bronDetail: "Greene's uitgangspunt: kinderen doen het goed als ze kunnen; als dat niet lukt, mist er een vaardigheid of ligt er een onopgelost probleem."
  },
  {
    id: "mythe-spirited-strenger",
    mythe: "”Een intens kind heeft vooral strengere discipline nodig.”",
    feit: "Intense kinderen hebben meestal meer voorspelbaarheid, herstelruimte en hulp bij overgangen nodig. Harder optreden verhoogt vaak precies de prikkels waar hun systeem al op vastloopt.\n\nKurcinka beschrijft hoe intense kinderen een lager zintuiglijk drempel hebben, langzamer herstellen van overprikkeling en moeite hebben met onverwachte overgangen. Wat eruitziet als 'niet willen', is vaak 'nog niet kunnen'. Voorbereiding op overgangen, afbouw van prikkels en extra hersteltijd zijn effectiever dan strenger optreden.",
    bron: "raising-spirited-child",
    bronDetail: "Kurcinka reframet intense temperamentkenmerken als eigenschappen die sturing, voorbereiding en taal nodig hebben."
  }
);

const MYTHE_LEEFTIJDEN = {
  "mythe-verwennen": ["baby"],
  "mythe-slim-prijzen": ["kind", "tiener"],
  "mythe-uithuilen": ["baby", "peuter"],
  "mythe-straf-leert": ["peuter", "kind", "tiener"],
  "mythe-driftbui-aandacht": ["peuter", "kind"],
  "mythe-streng-respect": ["peuter", "kind", "tiener"],
  "mythe-zandbak-delen": ["peuter", "kind"],
  "mythe-puber-losmaken": ["tiener"],
  "mythe-belonen-werkt": ["peuter", "kind", "tiener"],
  "mythe-sorry-afdwingen": ["peuter", "kind", "tiener"],
  "mythe-schermtijd-timer": ["kind", "tiener"],
  "mythe-huiswerk-politie": ["kind", "tiener"],
  "mythe-altijd-consequent": ["peuter", "kind", "tiener"],
  "mythe-gelijk-behandelen": ["baby", "peuter", "kind", "tiener"],
  "mythe-ruzie-zelf-oplossen": ["peuter", "kind", "tiener"],
  "mythe-falen-beschermen": ["kind", "tiener"],
  "mythe-spontane-empathie": ["peuter", "kind"],
  "mythe-jongens-huilen-niet": ["peuter", "kind", "tiener"],
  "mythe-keuzevrijheid-verwent": ["peuter", "kind", "tiener"],
  "mythe-vrij-spel-verspilling": ["peuter", "kind"],
  "mythe-stress-zelf-oplossen": ["baby", "peuter", "kind", "tiener"],
  "mythe-sociaal-media-voorlichting": ["kind", "tiener"],
  "mythe-thuisblijvende-moeder": ["baby", "peuter", "kind"],
  "mythe-tiener-hoort-te-rebelleren": ["tiener"],
  "mythe-knuffels-afdwingen": ["peuter", "kind", "tiener"],
  "mythe-praattherapie-voor-peuters": ["peuter", "kind"],
  "mythe-kind-gelukkig-houden": ["baby", "peuter", "kind", "tiener"],
  "mythe-boekjes-te-vroeg": ["baby", "peuter"],
  "mythe-eerlijk-zijn-hurt": ["peuter", "kind", "tiener"],
  "mythe-broers-beste-vrienden": ["baby", "peuter", "kind", "tiener"],
  "mythe-harder-roepen": ["peuter", "kind", "tiener"],
  "mythe-bord-leeg": ["peuter", "kind"],
  "mythe-terugtrekken-pushen": ["kind", "tiener"],
  "mythe-online-pesten-weerbaarheid": ["kind", "tiener"],
  "mythe-pubers-lui-slaap": ["tiener"],
  "mythe-liegen-karakter": ["peuter", "kind", "tiener"],
  "mythe-hechting-eerste-jaar": ["baby", "peuter", "kind", "tiener"],
  "mythe-ruzie-verbergen": ["baby", "peuter", "kind", "tiener"],
  "mythe-een-hapje-proeven": ["peuter", "kind"],
  "mythe-dessert-verdienen": ["peuter", "kind"],
  "mythe-honger-eet-wel": ["baby", "peuter", "kind"],
  "mythe-grazen-gezond": ["peuter", "kind"],
  "mythe-later-bed-slaapt-beter": ["baby", "peuter", "kind"],
  "mythe-nachtangst-droom": ["peuter", "kind"],
  "mythe-slaapassociatie-slecht": ["baby", "peuter"],
  "mythe-explosief-manipuleert": ["kind", "tiener"],
  "mythe-spirited-strenger": ["peuter", "kind", "tiener"]
};

MYTHES.forEach(mythe => {
  mythe.leeftijd = mythe.leeftijd || MYTHE_LEEFTIJDEN[mythe.id] || ["baby", "peuter", "kind", "tiener"];
});

const REGELS = [
  {
    titel: "Verbind vóór je corrigeert",
    tekst: "Geen enkel kind neemt les aan van iemand bij wie het zich niet veilig voelt — zeker niet midden in een storm. Eerst contact (toon, ogen, nabijheid), dan pas sturing. Dit is een van de sterkste rode draden in de geraadpleegde bronnen.",
    bron: "whole-brain-child"
  },
  {
    titel: "Jouw kalmte komt eerst",
    tekst: "Je kunt een kinderbrand niet blussen met je eigen vlammen. Dat jij zelf kalm blijft is geen luxe maar stap nul van elke techniek — adem, vertraag, en handel dán.",
    bron: "peaceful-parent"
  },
  {
    titel: "Alle gevoelens zijn oké, niet alle gedrag",
    tekst: "Woede, jaloezie, verdriet: alles mag bestaan en benoemd worden. Slaan, kapotmaken, kwetsen: daar staat een grens. Wie het gevoel bestrijdt, krijgt méér van het gedrag.",
    bron: "gottman-eq"
  },
  {
    titel: "Gedrag is communicatie",
    tekst: "Onder elk ‘lastig’ gedrag zit een behoefte, een ontbrekende vaardigheid of een overgelopen emmer. Vraag niet “hoe stop ik dit?” maar “wat vertelt dit?” — het antwoord wijst meestal vanzelf naar de oplossing.",
    bron: "good-inside"
  },
  {
    titel: "Herstel is belangrijker dan perfectie",
    tekst: "Je zúlt fouten maken — schreeuwen, oneerlijk zijn, te moe zijn. Wat het verschil maakt is herstel: terugkomen, sorry zeggen zonder ‘maar’, en tonen dat relaties tegen een stootje kunnen.",
    bron: "philippa-perry"
  },
  {
    titel: "Prijs het proces, niet de eigenschap",
    tekst: "“Wat heb jij doorgezet” bouwt kinderen die uitdaging opzoeken; “wat ben jij slim” bouwt kinderen die mislukking mijden. Beschrijf wat je ziet en laat je kind de conclusie trekken.",
    bron: "nurtureshock"
  },
  {
    titel: "Wees adviseur, geen baas",
    tekst: "Het gevoel zélf te mogen sturen is de sterkste motor voor motivatie en de beste buffer tegen stress. Geef je kind elke beslissing die het aankan — en eentje meer dan comfortabel voelt.",
    bron: "self-driven-child"
  },
  {
    titel: "Straf en beloning zijn dezelfde valkuil",
    tekst: "Beide zeggen: mijn goedkeuring hangt af van jouw gedrag. Werk mét je kind — probleem benoemen, samen oplossen — in plaats van eraan te sleutelen met wortels en stokken.",
    bron: "unconditional-parenting"
  },
  {
    titel: "Bescherm de kindertijd tegen het scherm",
    tekst: "Geen smartphone vóór ±14, geen sociale media vóór 16, schermen nooit in bed — en ruil ze in voor wat schermen verdringen: vrij spel, verveling, echte gezichten, slaap.",
    bron: "anxious-generation"
  },
  {
    titel: "De relatie is je enige echte invloed",
    tekst: "Verzamel je kind elke dag opnieuw: ogen, glimlach, ritueel. Discipline, advies, waarden — alles reist over de brug van de relatie. Onderhoud de brug, en de rest wordt licht.",
    bron: "hold-on-to-your-kids"
  }
];
