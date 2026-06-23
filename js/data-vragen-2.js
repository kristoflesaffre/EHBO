// ============================================================
// EHBO — Vragen, deel 2: grenzen, straffen & belonen, praten
// ============================================================

const VRAGEN_2 = [
  {
    id: "straffen-werkt",
    vraag: "Helpt straffen eigenlijk? En wat doe ik dan wél?",
    thema: "grenzen",
    leeftijd: ["peuter", "kind"],
    uitgelicht: true,
    tags: ["straf", "time-out", "consequenties", "naar je kamer", "gehoorzamen", "discipline"],
    kort: "Straf werkt op korte termijn (gedrag stopt) maar faalt op lange termijn: het kind leert pakkans vermijden in plaats van beter doen. Wat wél werkt: grenzen + verbinding + samen oplossen.",
    blokken: [
      { tekst: "Hier zijn de boeken opvallend eensgezind. Alfie Kohn verzamelde decennia onderzoek: <strong>straf maakt gedrag op termijn sláchter, niet beter</strong>. Het kind dat naar zijn kamer wordt gestuurd, zit daar zelden te reflecteren over zijn gedrag — het zit te koken over de onrechtvaardigheid van jou. De les die blijft hangen: macht wint, en volgende keer moet ik slimmer zijn (lees: niet betrapt worden)." },
      { kop: "Waarom het tóch lijkt te werken", tekst: "Straf stopt gedrag onmiddellijk, en die stilte voelt als succes. Maar Gottman en Faber & Mazlish wijzen op de verborgen factuur: angst voor jou in plaats van vertrouwen, liegen in plaats van opbiechten, en gehoorzaamheid die verdampt zodra jij de kamer uit bent. Een kind dat het goede doet úit angst, stopt daarmee zodra de angst wegvalt." },
      { kop: "Het alternatief is niet ‘alles goedvinden’", tekst: "Grenzen blijven — steviger zelfs. Het verschil zit in wat er ná de grens komt. Faber & Mazlish geven het stappenplan: benoem het probleem zonder aanval (“er ligt melk op de grond”), geef informatie (“melk wordt plakkerig, hier is een doek”), en bij herhaling: los het sámen op (“dit blijft mislopen aan tafel. Wat zou helpen?”). Echte, logische gevolgen mogen — wie met eten gooit, is klaar met eten — maar als nuchter feit, niet als wraak met een preek erbij." },
      { kop: "En de time-out dan?", tekst: "Siegel & Bryson en Becky Kennedy kantelen hem naar een <em>time-in</em>: niet wegsturen (“ga maar alleen zitten met je verdriet”) maar samen afkoelen. Het kind dat het moeilijkst te verdragen is, heeft je nabijheid het hardst nodig. Afzondering als rustplek die het kind zélf kiest: prima. Afzondering als eenzame opsluiting op last van de rechter: die ondermijnt precies wat je wil bouwen." }
    ],
    doeDit: [
      "Houd grenzen vast met je lijf en je kalmte: weghalen, vasthouden, herhalen — zonder volume.",
      "Beschrijf het probleem in plaats van het kind: “de jas ligt op de grond” i.p.v. “jij bent een sloddervos”.",
      "Laat logische gevolgen het werk doen, nuchter en zonder triomf.",
      "Plan bij terugkerend gedoe een samen-oplossen-gesprek op een rustig moment: kinderen houden zich aan plannen die ze mee bedachten."
    ],
    vermijd: [
      "Straffen die niets met het gedrag te maken hebben (geen verjaardagsfeest om gemors aan tafel).",
      "Dreigen met dingen die je toch niet meent — elk loos dreigement devalueert je woord.",
      "Liefde of aandacht intrekken als straf: dat raakt de hechting zelf, het duurste wat je hebt.",
      "Preken ná het gevolg: het gevolg wás de les; de preek wist hem weer uit."
    ],
    zegDit: [
      "“Ik laat je niet slaan. Ik hou je vast tot de storm zakt.”",
      "“Er ligt water op de grond. Wat heb je nodig om dat op te lossen?”",
      "“Dit ging al drie keer mis aan tafel. Niks straf — ik wil een plan dat wél werkt. Wat is jouw idee?”"
    ],
    bronnen: [
      { boek: "unconditional-parenting", detail: "Kernthese: straf (en beloning) is voorwaardelijke controle; onderzoek toont meer agressie, meer liegen en zwakkere morele ontwikkeling bij strafgericht opvoeden." },
      { boek: "how-to-talk", detail: "Hoofdstuk ‘Alternatieven voor straf’: probleem benoemen, informatie geven, keuze bieden, samen problemen oplossen." },
      { boek: "good-inside", detail: "Time-out wordt time-in; grens + warmte tegelijk; gedrag is een ontbrekende vaardigheid, geen te breken wil." },
      { boek: "gottman-eq", detail: "Straffende, afkeurende ouders krijgen kinderen die zichzelf slechter kalmeren en minder vertellen." }
    ],
    gerelateerd: ["timeout-hoek-zetten", "belonen-stickers", "nee-zeggen-zonder-drama", "kind-liegt"]
  },
  {
    id: "timeout-hoek-zetten",
    vraag: "Mag ik mijn kind een time-out geven of in de hoek zetten?",
    thema: "grenzen",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["time-out", "timeout", "hoek", "in de hoek", "strafbankje", "naughty step", "naar je kamer", "time-in", "afzonderen", "isoleren"],
    kort: "Als time-out betekent: alleen wegzetten tot je kind ‘nadenkt’, liever niet. Als het een afgesproken rustplek is met nabijheid en herstel erna, kan het wél helpen.",
    blokken: [
      { tekst: "Voor veel ouders voelt een time-out niet als straf: niemand wordt geslagen, er wordt niet geschreeuwd, het kind krijgt gewoon even rust. Maar voor een overspoeld kinderbrein voelt verplicht weggezet worden vaak anders: <strong>juist wanneer ik moeilijk ben, verlies ik contact</strong>. Kohn zou zeggen: dan wordt aandacht voorwaardelijk. Niet je intentie telt voor het zenuwstelsel, maar de ervaring van het kind." },
      { kop: "Een hoek leert zelden reflectie", tekst: "Een kind dat overstroomt door boosheid, schaamte of teleurstelling zit in de hoek meestal niet rustig moreel te filosoferen. Het voelt zich afgewezen, wordt bozer, of leert vooral: volgende keer niet betrapt worden. Reflectie komt pas wanneer het lichaam gezakt is en de relatie weer veilig voelt." },
      { kop: "Maak er een time-in van", tekst: "Het alternatief is geen laissez-faire. Stop het gedrag direct: “ik laat je niet slaan.” Verplaats je kind desnoods naar een rustiger plek, maar blijf verbonden: naast het kind, in de deuropening of zichtbaar dichtbij. Bij oudere kinderen kun je een rustplek vooraf afspreken als hulpmiddel dat ze zélf mogen kiezen, niet als strafbank." },
      { kop: "Na de rust komt herstel", tekst: "Pas als iedereen kalmer is, komt de les: wat gebeurde er, wat was de grens, hoe herstellen we, wat doen we volgende keer? Zo blijft de boodschap dubbel: je gedrag had een grens én jij hoort er nog steeds bij. Dat is precies het verschil tussen discipline en beschaming." }
    ],
    doeDit: [
      "Stop gevaarlijk gedrag meteen en rustig: blokkeer handen, haal een voorwerp weg of verplaats naar een veilige plek.",
      "Blijf beschikbaar: naast je kind, op de gang of zichtbaar dichtbij, afhankelijk van wat je kind aankan.",
      "Maak een rustplek vooraf samen: kussen, boekje, knuffel, water, ademkaart — geen strafstoel.",
      "Praat pas na de storm over herstel: wat moet rechtgezet worden en wat helpt volgende keer?"
    ],
    vermijd: [
      "Je kind in de hoek zetten om schaamte of gehoorzaamheid af te dwingen.",
      "Een timer laten lopen terwijl je kind in paniek of woede alleen zit.",
      "Zeggen: “kom maar terug als je weer lief/normaal bent.”",
      "Time-out gebruiken voor gevoelens op zich: boosheid is geen overtreding, slaan wel."
    ],
    zegDit: [
      "“Ik laat je niet slaan. We gaan even naar een rustige plek en ik blijf bij je.”",
      "“Je hoeft dit niet alleen te doen. Eerst kalmeren, straks herstellen.”",
      "“Deze plek is om tot rust te komen, niet om je slecht te voelen.”"
    ],
    bronnen: [
      { boek: "unconditional-parenting", detail: "Time-out als verplichte afzondering kan liefde en aandacht voorwaardelijk laten voelen; Kohn pleit voor samenwerking in plaats van controle." },
      { boek: "good-inside", detail: "Time-out wordt time-in: grens houden terwijl de relatie beschikbaar blijft." },
      { boek: "whole-brain-child", detail: "Een overspoeld brein leert pas als het gekalmeerd is; eerst verbinden en kalmeren, daarna pas nadenken." },
      { boek: "how-to-talk", detail: "Alternatieven voor straf: probleem beschrijven, informatie geven, keuzes bieden en later samen oplossen." }
    ],
    gerelateerd: ["straffen-werkt", "slaan-bijten-schoppen", "driftbui-reageren", "consequentie-of-straf"]
  },
  {
    id: "belonen-stickers",
    vraag: "Mag ik goed gedrag belonen met stickers of geld?",
    thema: "grenzen",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["belonen", "stickers", "beloningssysteem", "zakgeld", "motivatie", "omkopen"],
    kort: "Liever niet als systeem. Beloningen werken zolang de beloning duurt — en doden ondertussen de interesse in de taak zelf. Voor noodgevallen oké, als levensstijl een valstrik.",
    blokken: [
      { tekst: "De stickerkaart voelt als de vriendelijke tegenhanger van straf, maar Kohn laat zien dat het <strong>dezelfde machine in een vrolijk jasje</strong> is: doe wat ik wil en je krijgt iets fijns. Het onderzoek is consistent: beloon kinderen voor iets wat ze al graag deden (tekenen, lezen, helpen), en de interesse zakt zodra de beloning stopt. De activiteit is ‘werk’ geworden dat enkel telt mét loon." },
      { kop: "Wat je eigenlijk traint", tekst: "Een beloningssysteem verschuift de vraag in het kinderhoofd van “wat voor iemand wil ik zijn?” naar “wat levert het op?”. Stixrud & Johnson vullen aan: échte motivatie ontstaat uit zelfstandigheid, het gevoel iets te kunnen, en verbondenheid — alle drie dingen die een stickerkaart juist buiten het kind legt. Het kind gehoorzaamt het systeem in plaats van zichzelf te sturen." },
      { kop: "Wat dan wel?", tekst: "Maak helpen normaal in plaats van betaald: kinderen wíllen ergens bijhoren en bijdragen. Geef ze echte verantwoordelijkheid (“jij bent van de plantjes”), benoem het effect van hun gedrag (“je zusje straalt omdat jij haar hielp”) en vier samen zonder transactie. Zakgeld mag — als leergeld voor omgaan met geld, niet als loon voor fatsoen." }
    ],
    doeDit: [
      "Benoem het effect in plaats van te belonen: “kijk eens hoe blij oma is met jouw tekening”.",
      "Geef echte taken met echt eigenaarschap — bijdragen voelt beter dan verdienen.",
      "Bewaar incidentele verrassingen (“we vieren dat de toetsen erop zitten!”) — vieren ≠ belonen, zolang het geen vooraf beloofde wortel was."
    ],
    vermijd: [
      "Structurele beloningssystemen voor normaal gedrag: tandenpoetsen, vriendelijk zijn, meehelpen.",
      "Betalen voor schoolcijfers — het koppelt leren los van nieuwsgierigheid en aan loon.",
      "Beloningen beloven om gezeur te stoppen (“als je nu stil bent, krijg je…”): dat is gezeur belonen."
    ],
    zegDit: null,
    bronnen: [
      { boek: "unconditional-parenting", detail: "Beloningen als spiegelbeeld van straf: onderzoek naar dalende motivatie van binnenuit en de boodschap dat goedkeuring van presteren afhangt." },
      { boek: "self-driven-child", detail: "Motivatie groeit uit zelfstandigheid en het gevoel iets te kunnen; sturen van buitenaf verdringt het innerlijke kompas." },
      { boek: "nurtureshock", detail: "Het lof-hoofdstuk: ook beloningen met woorden (algemene lof) kunnen motivatie en doorzettingsvermogen ondermijnen." }
    ],
    gerelateerd: ["straffen-werkt", "goed-prijzen", "huiswerk-oorlog"]
  },
  {
    id: "nee-zeggen-zonder-drama",
    vraag: "Hoe zeg ik nee zonder elke keer drama?",
    thema: "grenzen",
    leeftijd: ["peuter", "kind"],
    uitgelicht: false,
    tags: ["nee zeggen", "grenzen stellen", "zeuren", "onderhandelen", "consequent", "drama"],
    kort: "Wees zuinig met nee, maar laat elke nee staan. Erken het verlangen, geef het desnoods in fantasie, en bied keuzes binnen jouw grens. Een kalme, voorspelbare nee dooft drama — een wiebelende nee voedt het.",
    blokken: [
      { tekst: "Kinderen vechten zelden tegen de grens zelf — ze vechten tegen de <strong>onvoorspelbaarheid</strong> ervan. Een nee die na vijf minuten zeuren een ja wordt, is een leerschool in volhouden. Becky Kennedy's sturdy leadership betekent: beslis bewust, zeg het warm, en blijf er dan rustig bij staan. Kinderen ontspannen bij een ouder die stevig staat, ook al protesteren ze luidkeels." },
      { kop: "Erken het verlangen, houd de grens", tekst: "Faber & Mazlish hebben hier een gouden techniek: <em>geef in fantasie wat niet kan in het echt</em>. “Geen snoep? Wat zou jíj doen met een huis vól snoep? Een snoepzwembad?” Dat klinkt onlogisch, maar het werkt: het kind voelt zich begrepen in zijn verlangen, en precies dát was waar het om vroeg. De grens blijft volledig overeind." },
      { kop: "Spaar je nees", tekst: "Markham raadt aan elke nee te keuren: is dit een echte grens (veiligheid, waarden, jouw welzijn) of een automatische piloot? Hoe minder nees, hoe meer gewicht elke nee draagt. En verpak waar mogelijk in een ja-met-randen: “ja, we gaan buiten spelen — na het eten” voelt anders dan “nee, nu niet”. Keuzes binnen jouw kader (“stoep of gras, jij kiest”) geven het gevoel van controle waar elk kinderbrein naar hunkert." }
    ],
    doeDit: [
      "Beslis vóór je antwoordt: een seconde denkpauze voorkomt de wiebel-nee.",
      "Benoem het verlangen mét warmte: “jij zou hier het liefst blijven, hè”.",
      "Geef keuze binnen de grens: niet óf we vertrekken, wel hóe (huppelen of op papa's rug).",
      "Gebruik fantasie bij peuters en kleuters — begrip is vaak alles wat ze zochten."
    ],
    vermijd: [
      "Nee zeggen en bij decibel dertig alsnog plooien — dat traint exact het gedrag dat je wil vermijden.",
      "Uitleg-stapelen: één korte reden volstaat; tien redenen klinken als onderhandelbaar.",
      "Elke vraag standaard met nee beantwoorden — een dag vol nee maakt elke grens goedkoop.",
      "Boos worden op het protest: protesteren tegen een grens is gezond; de grens verzetten is het probleem."
    ],
    zegDit: [
      "“Het antwoord is nee. En je mag er flink van balen.”",
      "“Wat zou jij doen als het wél kon? Vertel — een heel zwembad vol smarties?”",
      "“We vertrekken nu. Wil je zelf stappen of vlieg je op mijn arm?”"
    ],
    bronnen: [
      { boek: "good-inside", detail: "Sturdy leadership: grenzen zijn een vorm van liefde; het kind toetst of jij stevig genoeg bent om op te leunen." },
      { boek: "how-to-talk", detail: "Verlangens erkennen, in fantasie geven wat niet kan, en keuzes bieden binnen de grens." },
      { boek: "peaceful-parent", detail: "Grenzen stellen mét empathie en je nees bewust kiezen in plaats van op automatische piloot." }
    ],
    gerelateerd: ["driftbui-reageren", "straffen-werkt", "luisteren-zonder-schreeuwen"]
  },
  {
    id: "luisteren-zonder-schreeuwen",
    vraag: "Hoe krijg ik mijn kind aan het luisteren zonder te schreeuwen?",
    thema: "praten",
    leeftijd: ["peuter", "kind"],
    uitgelicht: true,
    tags: ["luisteren", "negeren", "honderd keer zeggen", "opruimen", "aankleden", "ochtendstress", "meewerken"],
    kort: "Stop met roepen vanaf een afstand en met preken. Maak eerst contact (dichtbij, ooghoogte, naam), en gebruik dan één woord, een beschrijving of een keuze. Verbinding is het volumeknopje.",
    blokken: [
      { tekst: "“Hij luistert pas als ik ontplof” is geen karakterfout van je kind — het is een ingesleten duet. Als instructies standaard op volume tien komen, leert het brein dat volume één tot negen ruis is. De oplossing is contra-intuïtief: <strong>zachter, dichterbij en korter</strong>." },
      { kop: "Eerst verbinden, dan vragen", tekst: "Neufeld & Maté noemen het ‘collecten’: een kind volgt vanuit verbinding, niet vanuit decibels. Loop ernaartoe, zak op ooghoogte, raak een schouder aan, maak oogcontact, en zeg het dán. Dat kost dertig seconden en bespaart drie kwartier strijd. Roepen vanuit de keuken naar boven telt niet als communicatie — dat is achtergrondmuziek." },
      { kop: "De gereedschapskist van Faber & Mazlish", tekst: "Voor het dagelijkse niet-luisteren bestaat een hele toolbox die preken vervangt: <em>beschrijf</em> (“je jas ligt op de grond”), <em>één woord</em> (“jas!”), <em>geef info</em> (“jassen horen aan de haak”), <em>schrijf een briefje</em> (op de spiegel: “poets mij! — je tanden”), of <em>zeg wat je voelt</em> (“ik baal als ik over jassen struikel”). Allemaal beter dan de honderdste preek, omdat ze het kind iets te dóen geven in plaats van iets te ondergaan." },
      { kop: "Maak van de ochtend geen veldslag", tekst: "Structureel gedoe vraagt een structurele oplossing: bespreek het op een rustig moment en laat je kind meedenken. Kinderen volgen plannen die ze zelf mee bouwden — een zelfgetekend ochtendschema aan de muur werkt beter dan jouw stem als wekker, snooze en sirene tegelijk." }
    ],
    doeDit: [
      "Ga ernaartoe, ooghoogte, contact eerst — instructie pas na de glimlach of knik terug.",
      "Houd het belachelijk kort: “schoenen!” verslaat elke monoloog.",
      "Geef vooruit-informatie: “nog vijf minuten, dan ruimen we op” — breinen haten verrassingen.",
      "Maak rituelen en schema's de baas (“wat zegt jouw lijstje?”), dan ben jij niet meer de boeman."
    ],
    vermijd: [
      "Opdrachten door het huis roepen en boos worden op de echo.",
      "Stapelinstructies (“jas aan, tas pakken, tanden poetsen en voer de kat”) — meer dan één tegelijk raakt zoek bij jonge kinderen.",
      "Vragen stellen die geen vraag zijn: “zullen we opruimen?” opent een onderhandeling die je niet wilde.",
      "Dreigen-met-aftellen als basisritme van je gezin — het werkt, tot het niet meer werkt."
    ],
    zegDit: [
      "“Sam.” (wacht op oogcontact) “Schoenen.”",
      "“Ik zie blokken op de hele vloer. Welke ruim jij op, de rode of de blauwe?”",
      "“Het lukt ons 's ochtends steeds niet zonder ruzie. Jij bent slim — wat zou helpen?”"
    ],
    bronnen: [
      { boek: "how-to-talk", detail: "De kerntechnieken voor samenwerking: beschrijven, één woord, informatie geven, briefjes, ik-boodschappen — preek- en verwijtvrij." },
      { boek: "hold-on-to-your-kids", detail: "‘Collect before you direct’: eerst de hechtingsrelatie activeren (oogcontact, glimlach), dan pas sturen." },
      { boek: "raising-good-humans", detail: "Ik-boodschappen en de eigen reactiviteit afbouwen: de stilste stem in huis is vaak de best beluisterde." }
    ],
    gerelateerd: ["nee-zeggen-zonder-drama", "zelf-ontploft", "band-versterken"]
  },
  {
    id: "kind-liegt",
    vraag: "Mijn kind liegt. Moet ik streng optreden?",
    thema: "praten",
    leeftijd: ["kind", "tiener"],
    uitgelicht: false,
    tags: ["liegen", "jokken", "waarheid", "vertrouwen", "stiekem", "betrappen"],
    kort: "Strenger straffen maakt kinderen niet eerlijker — alleen betere leugenaars. Maak de waarheid veilig en goedkoop: minder verhoor, meer ‘ik word niet boos als je het eerlijk vertelt’ (en meen dat).",
    blokken: [
      { tekst: "NurtureShock wijdt er een eerlijk hoofdstuk aan: <strong>vrijwel alle kinderen liegen</strong>, het begint jonger dan je denkt, en het is eigenlijk een knappe stap in de ontwikkeling (je moet de waarheid kennen én snappen hoe iemand anders denkt om te kunnen liegen). Belangrijker: in een streng strafklimaat liegen kinderen niet minder — ze liegen méér en slimmer. De leugen is een manier om risico te beperken." },
      { kop: "De val van het verhoor", tekst: "“Heb jij dat gedaan?!” terwijl je het antwoord al weet, is geen vraag — het is een uitnodiging tot liegen met een camera erbij. Het kind staat voor de keuze: waarheid + zekere straf, of leugen + kans op ontsnapping. Elk verstandig brein kiest optie twee. Stel dus geen vragen waarvan je het antwoord kent; benoem wat je ziet en ga naar de oplossing." },
      { kop: "Maak eerlijkheid de winnende strategie", tekst: "Uit het onderzoek in NurtureShock: kinderen vertellen vaker de waarheid als twee dingen samen gelden — ze maken papa/mama blij mét de waarheid, én de waarheid leidt niet tot ruzie of straf. Becky Kennedy vult aan: een kind dat veel liegt, vertelt je iets over de veiligheid om fouten te mogen maken in huis. Verlaag de prijs van de waarheid en de leugen verliest zijn functie." }
    ],
    doeDit: [
      "Benoem in plaats van te verhoren: “ik zie viltstift op de muur. We gaan dat samen schoonmaken.”",
      "Beloon eerlijkheid expliciet met je reactie: rustig blijven als het eerlijke verhaal komt — élke keer.",
      "Onderzoek de functie van de leugen: angst voor straf? Schaamte? Te hoge lat?",
      "Vertel zelf eerlijk over je eigen missers — eerlijkheid modelleer je, je eist haar niet."
    ],
    vermijd: [
      "Strikvragen stellen waarvan je het antwoord al weet.",
      "Dubbel straffen (voor de daad én de leugen) — daarmee maak je liegen de volgende keer nóg logischer.",
      "Je kind ‘leugenaar’ noemen: een etiket wordt een identiteit, en identiteiten gedragen zich ernaar.",
      "Zelf ‘handige’ leugentjes voordoen (“zeg maar dat ik er niet ben”) en eerlijkheid verwachten."
    ],
    zegDit: [
      "“Ik ga niet boos worden om het eerlijke verhaal. Vertel maar wat er gebeurd is.”",
      "“Iedereen maakt brokken. In dit huis lossen we ze op, we verstoppen ze niet.”",
      "“Dank je dat je het eerlijk zegt. Dat was moedig. Nu: hoe lossen we het op?”"
    ],
    bronnen: [
      { boek: "nurtureshock", detail: "Hoofdstuk over liegen: straf vermindert liegen niet maar verfijnt het; kinderen zijn eerlijker waar de waarheid veilig én gewaardeerd is." },
      { boek: "good-inside", detail: "Liegen als signaal over veiligheid en zelfbeeld; reageer op de angst onder de leugen, niet enkel op de leugen." },
      { boek: "unconditional-parenting", detail: "Strafklimaten produceren ontwijkgedrag: kinderen richten zich op pakkans in plaats van op moraal." }
    ],
    gerelateerd: ["straffen-werkt", "ik-haat-je", "tiener-trekt-terug"]
  },
  {
    id: "goed-prijzen",
    vraag: "Is prijzen goed? En hoe doe ik het juist?",
    thema: "zelfvertrouwen",
    leeftijd: ["peuter", "kind", "tiener"],
    uitgelicht: false,
    tags: ["prijzen", "complimenten", "goed zo", "wat knap", "zelfbeeld", "growth mindset", "slim"],
    kort: "“Wat ben jij slim!” werkt averechts: kinderen gaan uitdagingen mijden om slim te blíjven lijken. Prijs concreet de inzet, de aanpak en de vooruitgang — of beschrijf gewoon wat je ziet.",
    blokken: [
      { tekst: "Het beroemdste onderzoek uit <em>NurtureShock</em>: kinderen die na een taak “wat ben jij slim” hoorden, kozen daarna massaal de <strong>makkelijkste</strong> vervolgopdracht — wie slim genoemd wordt, gaat zijn reputatie beschermen. De groep die “wat heb jij hard gewerkt” hoorde, koos juist de moeilijkere taak. Eén zinnetje, compleet ander gedrag." },
      { kop: "Waarom algemene lof leeg is", tekst: "“Goed zo! Knap hoor! Super!” is voor een kind als confetti: leuk, maar je kunt er niets mee. Erger: Kohn wijst erop dat constante lof gewoon de zoete versie van beoordelen is — het kind leert dat jouw goedkeuring de meetlat is, en gaat presteren vóór jou in plaats van ontdekken voor zichzelf. Lof-junkies vragen na elke tekening “mooi hè?” in plaats van te tekenen omdat tekenen fijn is." },
      { kop: "Wat je wél zegt", tekst: "Faber & Mazlish geven het recept: <em>beschrijf wat je ziet, en laat het kind zichzelf prijzen</em>. “Jij bent twintig minuten blijven puzzelen, ook toen het vastliep — en nu past alles.” Het kind trekt zelf de conclusie: ik ben een doorzetter. Die conclusie, uit eigen mond, is duizend keer sterker dan jouw ‘knap’. Prijs proces (inzet, strategie, lef, vooruitgang), niet eigenschappen (slim, mooi, talent)." }
    ],
    doeDit: [
      "Beschrijf concreet: “je hebt alle blokken op kleur gesorteerd” in plaats van “knap!”",
      "Prijs de strategie en het lef: “je probeerde het eerst zelf en vroeg toen pas hulp — sterke aanpak.”",
      "Benoem vooruitgang ten opzichte van zichzélf: “vorige maand lukte dit nog niet.”",
      "Vraag naar binnen: “ben je trots op jezelf?” — daar woont het echte zelfvertrouwen."
    ],
    vermijd: [
      "“Wat ben je slim/mooi/getalenteerd” — eigenschapslof maakt voorzichtig in plaats van moedig.",
      "Confetti-lof bij alles: wie overal applaus voor krijgt, leert dat zonder applaus iets mis is.",
      "Prijzen vergelijken (“jij bent de beste van de klas”) — dan wordt andermans falen de bron van eigenwaarde.",
      "Loze lof op iets dat mislukte: kinderen ruiken het, en je devalueert al je andere woorden."
    ],
    zegDit: [
      "“Je bent blijven proberen toen het moeilijk werd. Dát is doorzetten.”",
      "“Vertel eens — hoe heb je dat aangepakt?”",
      "“Kijk eens terug naar waar je begon. Zie jij wat ik zie?”"
    ],
    bronnen: [
      { boek: "nurtureshock", detail: "Hoofdstuk over de omgekeerde kracht van lof (onderzoek Carol Dweck): eigenschapslof kweekt vermijders, proceslof kweekt doorzetters." },
      { boek: "how-to-talk", detail: "Beschrijvende lof: benoem wat je ziet en vat samen in één woord (“dát noem ik doorzetten”) zodat het kind zichzelf leert prijzen." },
      { boek: "unconditional-parenting", detail: "Lof als beloning met woorden: ook positieve oordelen maken goedkeuring afhankelijk van presteren en ondermijnen de motivatie van binnenuit." }
    ],
    gerelateerd: ["belonen-stickers", "huiswerk-oorlog", "kind-angstig"]
  }
];
