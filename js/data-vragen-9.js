// ============================================================
// EHBO — Vragen, deel 9: extra cases over grenzen & praten
// ============================================================

const VRAGEN_9 = [
  extraVraag(
    "respectloos-praten",
    "Mijn kind praat respectloos tegen mij. Hoe reageer ik zonder terug te snauwen?",
    "grenzen",
    ["kind", "tiener"],
    ["respect", "toon", "brutaal", "schelden", "grens"],
    "Zet een grens op de toon, maar luister naar de boodschap eronder. Je hoeft geen kwetsende woorden te slikken om nieuwsgierig te blijven.",
    "Respectloos praten raakt ouders omdat het persoonlijk voelt. Toch zit er onder die toon vaak frustratie, schaamte, machteloosheid of behoefte aan zelfstandigheid. Als jij alleen de toon aanvalt, mis je de boodschap.",
    "Eerst grens, dan inhoud",
    "Zeg kort wat niet kan en nodig daarna uit tot herformuleren. Bij tieners werkt dit beter dan een machtsstrijd over respect als abstract principe.",
    [
      "Houd je stem lager dan die van je kind.",
      "Vraag om dezelfde boodschap in betere woorden.",
      "Bespreek de inhoud pas na toonherstel."
    ],
    [
      "Terugschelden of sarcasme gebruiken.",
      "De inhoud volledig negeren omdat de toon fout was.",
      "Respect eisen via angst."
    ],
    ["“Ik wil horen wat je bedoelt. Niet op deze toon. Probeer het opnieuw.”"],
    [
      ["gottman-eq", "Alle gevoelens zijn oké, niet alle gedrag; emotie erkennen kan samengaan met grenzen."],
      ["how-to-talk", "Kinderen komen eerder tot samenwerking wanneer volwassenen beschrijven en uitnodigen in plaats van beschuldigen."]
    ],
    ["ik-haat-je", "puber-praat-niet"]
  ),
  extraVraag(
    "regels-bij-speelafspraak",
    "Mijn kind verandert in een ander kind bij speelafspraken. Moet ik ingrijpen?",
    "grenzen",
    ["peuter", "kind"],
    ["speelafspraak", "regels", "vrienden", "druk", "grenzen"],
    "Ja, als veiligheid of respect wegvalt. Bereid vooraf twee simpele huisregels voor en grijp kort in zonder je kind te vernederen.",
    "Speelafspraken brengen opwinding, status en impulsiviteit samen. Kinderen testen dan soms harder, vooral als ze indruk willen maken. Dat vraagt geen lange speech, maar helder leiderschap.",
    "Maak regels voorspelbaar",
    "Zeg vooraf: bij ons doen we geen pijn en we sluiten niemand buiten. Als het misgaat, neem je je kind even apart. Niet publiek beschamen, wel duidelijk begrenzen.",
    [
      "Noem vooraf twee huisregels.",
      "Neem je kind apart bij bijsturen.",
      "Evalueer kort na afloop wat goed ging en wat anders kan."
    ],
    [
      "Je kind voor vrienden vernederen.",
      "Alles laten passeren omdat er bezoek is.",
      "Na afloop alleen kritiek geven."
    ],
    ["“Ik neem je even apart. Bij ons doen we niemand pijn.”"],
    [
      ["hold-on-to-your-kids", "Ouderlijke oriëntatie blijft belangrijk wanneer leeftijdsgenoten veel invloed krijgen."],
      ["good-inside", "Stevig leiderschap houdt grenzen zonder het kind als slecht te framen."]
    ],
    ["kind-pakt-spullen-af", "ruzie-zelf-oplossen"]
  ),
  extraVraag(
    "kind-negeert-bedtijd",
    "Mijn kind blijft bedtijd negeren. Hoe word ik duidelijker?",
    "grenzen",
    ["peuter", "kind"],
    ["bedtijd", "grens", "slapen", "rekken", "routine"],
    "Maak bedtijd minder onderhandelbaar en meer voorspelbaar. Verbinding vóór het licht uitgaat, daarna liefdevol saai terug naar bed.",
    "Bedtijd is een overgang van contact naar loslaten. Kinderen rekken die overgang vaak omdat ze nog nabijheid, controle of ontlading zoeken. Meer boosheid maakt het afscheid zwaarder.",
    "Warm ritueel, saaie herhaling",
    "Geef vóór bedtijd echte aandacht: boek, knuffel, kort gesprek. Na het ritueel wordt je reactie rustig en herhaald. Niet straffen, niet entertainen.",
    [
      "Start bedtijd voordat je kind volledig oververmoeid is.",
      "Geef een vast ritueel met einde.",
      "Breng rustig terug met steeds dezelfde zin."
    ],
    [
      "Elke terugkomst belonen met lang gesprek.",
      "Bedtijd pas afdwingen wanneer jij uitgeput bent.",
      "Angst en rekken op dezelfde manier behandelen."
    ],
    ["“Het is slaaptijd. Ik breng je terug. Morgen praten we verder.”"],
    [
      ["peaceful-parent", "Verbinding vóór correctie voorkomt veel strijd rond overgangen."],
      ["nurtureshock", "Slaaptekort ondermijnt stemming, leren en zelfbeheersing."]
    ],
    ["bedtijd-ontspoort", "bang-donkere-kamer"]
  ),
  extraVraag(
    "slaan-na-waarschuwing",
    "Mijn kind slaat ook na waarschuwingen. Wat dan?",
    "grenzen",
    ["peuter", "kind"],
    ["slaan", "agressie", "waarschuwing", "grens", "veiligheid"],
    "Stop fysiek en rustig. Waarschuwingen helpen weinig als het brein al overspoeld is; je kind heeft een grens, samen kalmeren en later oefening nodig.",
    "Als slaan blijft gebeuren, is de vraag niet: welke dreiging werkt eindelijk? De vraag is: welke vaardigheid mist hier, en op welk moment raakt het brein offline?",
    "Veiligheid vóór les",
    "Tijdens slaan is je taak: voorkomen dat iemand pijn krijgt. Pas later oefen je alternatieven: hulp roepen, afstand nemen, handen op rug, stampen, kussen slaan.",
    [
      "Stap ertussen en zeg kort: “ik laat je niet slaan.”",
      "Verwijder het kind of het andere kind veilig uit de situatie.",
      "Oefen alternatief gedrag op rustige momenten."
    ],
    [
      "Terugslaan om te tonen hoe het voelt.",
      "Blijven praten terwijl de handen al gaan.",
      "Alleen straf geven zonder nieuwe vaardigheid te oefenen."
    ],
    ["“Ik houd je handen veilig. Boos mag, slaan niet.”"],
    [
      ["whole-brain-child", "Een overstroomd benedenbrein heeft eerst rust nodig voordat leren mogelijk is."],
      ["good-inside", "Gedrag wijst op ontbrekende vaardigheden; grenzen en verbinding blijven allebei nodig."]
    ],
    ["nood-slaan", "spullen-gooien"]
  ),
  extraVraag(
    "snoep-zeuren-winkel",
    "Mijn kind blijft zeuren om snoep in de winkel. Hoe hou ik het vol?",
    "grenzen",
    ["peuter", "kind"],
    ["snoep", "winkel", "zeuren", "grens", "driftbui"],
    "Beslis vooraf en zeg het kort. Zeuren stopt niet door tien keer uitleg, maar door voorspelbaarheid: je hoort de wens, de grens blijft.",
    "Winkels zijn ontworpen om kinderen te verleiden: kleur, ooghoogte, honger, vermoeidheid. Het is dus logisch dat de grens vaak getest wordt. Je hoeft niet boos te worden op het bestaan van verlangen.",
    "Vooraf is makkelijker dan middenin",
    "Zeg vóór de winkel wat de regel is. Geef eventueel een taak: bananen kiezen, lijst vasthouden. Bij zeuren: erken wens, herhaal grens, ga verder.",
    [
      "Bespreek de snoepregel vóór jullie binnen gaan.",
      "Geef je kind een winkeltaak.",
      "Neem snack of ga niet hongerig winkelen."
    ],
    [
      "In de rij alsnog toegeven na twintig keer nee.",
      "Elke keer een nieuw argument geven.",
      "Zeuren persoonlijk nemen."
    ],
    ["“Je wil het graag. Vandaag kopen we geen snoep.”"],
    [
      ["good-inside", "Een grens kan stevig blijven terwijl de teleurstelling erkend wordt."],
      ["how-to-talk", "Keuzes en taken geven kinderen medewerking zonder de grens te verplaatsen."]
    ],
    ["driftbui-na-nee", "driftbui-winkel"]
  ),
  extraVraag(
    "kind-zegt-niets-over-school",
    "Mijn kind vertelt niets over school. Hoe krijg ik meer te horen?",
    "praten",
    ["kind", "tiener"],
    ["school", "praten", "gesloten", "vragen", "luisteren"],
    "Stel minder grote vragen en creëer meer lage-drukmomenten. Kinderen vertellen vaak lateraal: tijdens eten maken, wandelen of autorijden.",
    "“Hoe was school?” is zo groot dat “goed” bijna het makkelijkste antwoord is. Daarbij zijn kinderen na school vaak leeg. Wie dan meteen informatie wil, krijgt vaak een muur.",
    "Maak vertellen klein",
    "Vraag naar één moment, één grappig ding, één pauze, één leraar. Of vertel eerst iets kleins over jouw dag. Gesprekken ontstaan vaker uit naast elkaar zijn dan uit interviewen.",
    [
      "Stel specifieke, lichte vragen.",
      "Praat tijdens een activiteit in plaats van frontaal.",
      "Respecteer stilte en probeer later opnieuw."
    ],
    [
      "Een kind ondervragen zodra het binnenkomt.",
      "Teleurgesteld reageren op korte antwoorden.",
      "Alleen praten wanneer er een probleem is."
    ],
    ["“Wat was vandaag het vreemdste moment op school?”"],
    [
      ["how-to-talk", "Openingen werken beter wanneer ouders beschrijven, uitnodigen en druk verlagen."],
      ["philippa-perry", "Kinderen praten makkelijker wanneer hun tempo en binnenwereld gerespecteerd worden."]
    ],
    ["emoties-verstoppen", "woede-na-school"]
  ),
  extraVraag(
    "ik-vraag-teveel-door",
    "Hoe weet ik of ik te veel doorvraag?",
    "praten",
    ["kind", "tiener"],
    ["doorvragen", "puber", "luisteren", "privacy", "vertrouwen"],
    "Als je kind korter, kouder of defensiever wordt, is dat vaak een signaal. Vertrouwen groeit door beschikbaarheid, niet door elk detail binnenhalen.",
    "Doorvragen komt meestal uit zorg. Maar voor een kind kan het voelen alsof je een dossier aanlegt. Dan gaat de deur dicht, zelfs als je intentie liefdevol is.",
    "Vraag toestemming voor advies en diepte",
    "Een simpele zin helpt: wil je dat ik luister, meedenk of vragen stel? Daarmee geef je controle terug en blijft het gesprek veiliger.",
    [
      "Let op lichaamstaal en kortere antwoorden.",
      "Vraag of je mag doorvragen.",
      "Laat soms bewust een stilte staan."
    ],
    [
      "Nieuwsgierigheid vermommen als controle.",
      "Alles willen weten voordat je steun geeft.",
      "Een gesprek winnen ten koste van vertrouwen."
    ],
    ["“Wil je dat ik luister, vragen stel of meedenk?”"],
    [
      ["self-driven-child", "Zelfstandigheid verlaagt stress; ook in gesprekken helpt controle over tempo en diepte."],
      ["hold-on-to-your-kids", "Verbinding met tieners vraagt beschikbaarheid zonder verhoor."]
    ],
    ["kind-zegt-niets-over-school", "puber-praat-niet"]
  ),
  extraVraag(
    "luisteren-zonder-oplossen",
    "Hoe luister ik zonder meteen alles op te lossen?",
    "praten",
    ["kind", "tiener"],
    ["luisteren", "advies", "oplossen", "gevoelens", "gesprek"],
    "Luisteren betekent het gevoel even dragen zonder het meteen te repareren. Vaak zakt de spanning al wanneer je kind zich begrepen voelt.",
    "Ouders lossen graag op omdat ze hun kind willen beschermen. Maar te snel oplossen kan klinken als: jouw gevoel mag niet lang bestaan. Dan komt er weerstand tegen jouw goede advies.",
    "Eerst spiegel, dan richting",
    "Herhaal de kern in je eigen woorden. Vraag daarna of je kind hulp wil. Pas als het ja zegt, denk je mee. Dat maakt advies veel beter verteerbaar.",
    [
      "Vat samen wat je hoort.",
      "Benoem het gevoel voorzichtig.",
      "Vraag toestemming voor advies."
    ],
    [
      "Beginnen met “je moet gewoon...”.",
      "Het probleem kleiner maken om te troosten.",
      "Je eigen angst het gesprek laten overnemen."
    ],
    ["“Wil je dat ik alleen luister of wil je ideeën?”"],
    [
      ["gottman-eq", "Erkennen en luisteren zijn stappen vóór probleemoplossing."],
      ["how-to-talk", "Erkenning van gevoelens maakt kinderen ontvankelijker voor samenwerking."]
    ],
    ["verdriet-om-vriendschap", "emoties-verstoppen"]
  ),
  extraVraag(
    "sorry-zeggen-na-ruzie",
    "Hoe leer ik mijn kind sorry zeggen zonder het af te dwingen?",
    "praten",
    ["peuter", "kind"],
    ["sorry", "ruzie", "herstel", "empathie", "goedmaken"],
    "Richt op goedmaken in plaats van op een verplicht woord. Sorry krijgt waarde wanneer een kind begrijpt wat er gebeurde en iets kan herstellen.",
    "Een snel afgedwongen sorry stelt volwassenen gerust, maar leert kinderen vaak alleen de juiste knop indrukken. Empathie vraagt rust, perspectief en concrete reparatie.",
    "Herstel is breder dan sorry",
    "Vraag: wat gebeurde er, hoe denk je dat de ander zich voelde, wat kan helpen? Soms is dat een pleister halen, speelgoed teruggeven, een tekening maken of later woorden zoeken.",
    [
      "Wacht tot je kind gekalmeerd is.",
      "Benoem wat de ander mogelijk voelde.",
      "Bied herstelopties naast woorden."
    ],
    [
      "Een kind publiek dwingen tot sorry.",
      "Denken dat het woord genoeg is.",
      "Empathie eisen midden in woede."
    ],
    ["“Wat kunnen we doen om het weer goed te maken?”"],
    [
      ["good-inside", "Repair bouwt vaardigheden en verantwoordelijkheid zonder schaamte als motor."],
      ["gottman-eq", "Kinderen leren empathie door gevoelens te herkennen en passend gedrag te oefenen."]
    ],
    ["mythe-sorry-afdwingen", "schaamte-na-uitbarsting"]
  ),
  extraVraag(
    "moeilijk-nieuws-uitleggen",
    "Hoe vertel ik moeilijk nieuws aan mijn kind?",
    "praten",
    ["peuter", "kind", "tiener"],
    ["moeilijk nieuws", "ziekte", "verlies", "scheiding", "praten"],
    "Vertel eerlijk, kort en leeftijdspassend. Kinderen hebben meer schade van mist en spanning dan van warme, duidelijke waarheid.",
    "Kinderen voelen vaak dat er iets speelt, ook als niemand het zegt. Als volwassenen zwijgen, vullen kinderen de gaten zelf in. Dat kan enger zijn dan de waarheid.",
    "Eerlijk zonder overspoelen",
    "Geef de kern, gebruik gewone woorden en zeg wat hetzelfde blijft. Laat vragen in stukjes komen. Je hoeft niet alles in één gesprek te doen.",
    [
      "Kies een rustig moment en simpele woorden.",
      "Zeg wat dit concreet betekent voor je kind.",
      "Kom later terug op vragen."
    ],
    [
      "Vage metaforen gebruiken die verwarren.",
      "Doen alsof er niets is terwijl de spanning voelbaar is.",
      "Je kind gebruiken als emotionele steun voor jou."
    ],
    ["“Ik vertel je iets moeilijks. Je mag alles vragen, ook later.”"],
    [
      ["philippa-perry", "Kinderen hebben recht op een realiteit die niet wordt ontkend, met steun voor hun gevoelens."],
      ["power-of-showing-up", "Veiligheid ontstaat door betrouwbare aanwezigheid en begrijpelijke informatie."]
    ],
    ["huisdieren-verlies", "ouders-oneens-opvoeding"]
  ),
  extraVraag(
    "kind-verdraait-woorden",
    "Mijn kind verdraait mijn woorden in discussies. Wat doe ik?",
    "praten",
    ["kind", "tiener"],
    ["discussie", "woorden verdraaien", "ruzie", "communicatie", "puber"],
    "Ga niet mee in elk zijpad. Keer rustig terug naar de kern en check of je kind zich gehoord voelt voordat je verdergaat.",
    "Woorden verdraaien kan manipulatief lijken, maar vaak is het een verdedigingsreactie: je kind voelt zich aangevallen en probeert grip te krijgen. Als jij elk detail corrigeert, verdwalen jullie.",
    "Terug naar de hoofdlijn",
    "Zeg: dit is niet wat ik bedoelde; ik probeer dit te zeggen. Vraag daarna je kind om jouw punt te herhalen. Niet als test, maar om misverstanden te stoppen.",
    [
      "Vat je kern in één zin samen.",
      "Vraag: “wat hoor jij mij zeggen?”",
      "Pauzeer als het gesprek alleen nog over woorden gaat."
    ],
    [
      "Alle zijpaden tegelijk corrigeren.",
      "Sarcastisch worden.",
      "Doorgaan als niemand nog luistert."
    ],
    ["“Dat is niet mijn punt. Mijn punt is: ik wil weten waar je bent.”"],
    [
      ["how-to-talk", "Heldere, concrete taal voorkomt dat het uit de hand loopt in verwijten en tegenverwijten."],
      ["self-driven-child", "Tieners reageren beter wanneer zelfstandigheid en respect in het gesprek behouden blijven."]
    ],
    ["respectloos-praten", "ik-vraag-teveel-door"]
  ),
  extraVraag(
    "zeuren-doorbreken",
    "Hoe reageer ik op eindeloos zeuren zonder gek te worden?",
    "praten",
    ["peuter", "kind"],
    ["zeuren", "vragen", "nee", "grenzen", "herhaling"],
    "Erken de wens, geef je antwoord en stop met heronderhandelen. Zeg minder, consistenter en warmer.",
    "Zeuren werkt vaak omdat het soms tóch de grens verplaatst. Dan leert een kind: niet de eerste nee telt, maar hoe lang ik volhoud. Je hoeft niet harder te worden; je moet voorspelbaarder worden.",
    "Maak van nee geen discussieplatform",
    "Gebruik één zin die je herhaalt. Daarna kun je nabij blijven zonder de inhoud opnieuw te openen. Dat voelt eerst ongemakkelijk, maar geeft duidelijkheid.",
    [
      "Geef één korte reden als dat nodig is.",
      "Herhaal dezelfde zin zonder nieuwe argumenten.",
      "Prijs later dat je kind een nee kon verdragen."
    ],
    [
      "Nieuwe argumenten blijven aandragen.",
      "Uiteindelijk toegeven uit uitputting.",
      "Zeuren verwarren met slecht karakter."
    ],
    ["“Je wil het graag. Mijn antwoord blijft nee.”"],
    [
      ["good-inside", "Een grens kan stevig blijven terwijl de wens erkend wordt."],
      ["how-to-talk", "Korte, duidelijke taal werkt beter dan preken of verwijten."]
    ],
    ["snoep-zeuren-winkel", "driftbui-na-nee"]
  ),
  extraVraag(
    "complimenten-zonder-prijzen",
    "Hoe geef ik complimenten zonder druk te leggen?",
    "praten",
    ["peuter", "kind", "tiener"],
    ["compliment", "prijzen", "zelfvertrouwen", "proces", "lof"],
    "Beschrijf wat je ziet en waardeert, vooral inzet, keuze en strategie. Zo voelt je kind zich gezien zonder afhankelijk te worden van applaus.",
    "Complimenten zijn niet fout. Het probleem ontstaat wanneer lof een etiket wordt: jij bent slim, jij bent de beste, jij maakt mij trots. Dan gaat het kind presteren voor de blik van de ouder.",
    "Van oordeel naar waarneming",
    "Zeg: je bleef proberen, je koos een moeilijke aanpak, je hielp je broer. Dat geeft informatie over gedrag en waarden zonder identiteit vast te pinnen.",
    [
      "Beschrijf concreet wat je zag.",
      "Benoem inzet, strategie of zorgzaamheid.",
      "Laat stilte toe nadat je iets waardeert."
    ],
    [
      "Alleen talent of slimheid prijzen.",
      "Complimenten gebruiken om gedrag te sturen.",
      "Je trots centraal zetten bij elke prestatie."
    ],
    ["“Ik zag dat je opnieuw begon toen het mislukte.”"],
    [
      ["nurtureshock", "Proceslof ondersteunt doorzetting meer dan eigenschappenlof."],
      ["how-to-talk", "Beschrijven wat je ziet laat kinderen zelf conclusies trekken."]
    ],
    ["goed-prijzen", "perfectionisme-boos-fout"]
  ),
  extraVraag(
    "kritiek-zonder-beschamen",
    "Hoe corrigeer ik zonder mijn kind te beschamen?",
    "praten",
    ["peuter", "kind", "tiener"],
    ["corrigeren", "kritiek", "schaamte", "gedrag", "grens"],
    "Corrigeer gedrag concreet en houd identiteit veilig. Zeg wat er moet veranderen, niet wat er mis is met je kind.",
    "Schaamte maakt kinderen defensief of kleiner. Correctie is nodig, maar ze werkt beter wanneer het kind voelt: mijn ouder is tegen dit gedrag, niet tegen mij.",
    "Kort, concreet, herstelbaar",
    "Noem het gedrag, de impact en de volgende stap. Geen karakterdiagnose. Geen geschiedenis van alle vorige keren. Eén moment tegelijk.",
    [
      "Gebruik: “dit gedrag kan niet” in plaats van “jij bent...”.",
      "Vraag om herstel of nieuwe poging.",
      "Maak het korter dan je boze brein wil."
    ],
    [
      "Labels gebruiken zoals lui, egoïstisch of dramatisch.",
      "Oude fouten erbij halen.",
      "Publiek corrigeren als privé kan."
    ],
    ["“De schoenen liggen in de gang. Zet ze nu in de kast.”"],
    [
      ["good-inside", "Het kind blijft goed; gedrag kan begrensd en geoefend worden."],
      ["unconditional-parenting", "Goedkeuring die van presteren afhangt, ondermijnt veilige motivatie en morele groei."]
    ],
    ["schaamte-na-uitbarsting", "respectloos-praten"]
  ),
  extraVraag(
    "kind-onderbreekt-steeds",
    "Mijn kind onderbreekt mij constant. Hoe leer ik wachten?",
    "praten",
    ["peuter", "kind"],
    ["onderbreken", "wachten", "aandacht", "gesprek", "impuls"],
    "Wachten is een vaardigheid, geen knop. Leer een concreet signaal, oefen kort en geef je kind daarna voorspelbaar aandacht.",
    "Onderbreken betekent vaak: ik heb een impuls en ben bang dat mijn behoefte verdwijnt. Als kinderen ervaren dat wachten echt gevolgd wordt door aandacht, wordt wachten haalbaarder.",
    "Maak wachten zichtbaar",
    "Gebruik bijvoorbeeld hand op je arm als signaal: ik heb je gevoeld, ik rond mijn zin af. Begin met korte wachttijden en benoem succes.",
    [
      "Leer een non-verbaal signaal voor wachten.",
      "Kom snel terug als je dat belooft.",
      "Oefen buiten telefoongesprekken om."
    ],
    [
      "“Wacht!” roepen zonder terug te komen.",
      "Lange volwassen gesprekken verwachten van jonge kinderen.",
      "Onderbreken altijd als onbeleefdheid zien."
    ],
    ["“Leg je hand op mijn arm. Dan weet ik dat je iets wil zeggen.”"],
    [
      ["how-to-talk", "Concrete alternatieven werken beter dan algemene verwijten."],
      ["whole-brain-child", "Impulsremming ontwikkelt langzaam en vraagt herhaalde oefening."]
    ],
    ["niet-luisteren-eerste-keer", "tijdgebrek-quality-time"]
  ),
  extraVraag(
    "praten-met-puber-in-auto",
    "Waarom praat mijn puber beter in de auto dan aan tafel?",
    "praten",
    ["tiener"],
    ["puber", "auto", "gesprek", "luisteren", "oogcontact"],
    "Omdat indirect praten minder bedreigend voelt. Gebruik dat: wandelen, rijden of samen iets doen kan meer openen dan een officieel gesprek.",
    "Veel tieners sluiten bij frontaal oogcontact en grote vragen. In de auto is er gedeelde richting, minder sociale druk en een natuurlijke eindigheid. Dat maakt kwetsbaarheid veiliger.",
    "Kies de juiste setting",
    "Als je iets belangrijks wil bespreken, hoeft dat niet aan tafel met ernstige blik. Soms is een ritje, afwas of wandeling pedagogisch veel slimmer.",
    [
      "Gebruik zijdelingse momenten voor moeilijke onderwerpen.",
      "Laat stiltes bestaan tijdens rijden of wandelen.",
      "Begin met een lichte opening, niet met de kernbom."
    ],
    [
      "Een puber dwingen je aan te kijken bij elk gesprek.",
      "Elk autoritje veranderen in therapie.",
      "Kwetsbare informatie meteen gebruiken voor controle."
    ],
    ["“Ik hoef niet meteen antwoord. Ik wilde het gewoon naast je leggen.”"],
    [
      ["hold-on-to-your-kids", "Verbinding met tieners vraagt warme beschikbaarheid die niet als verhoor voelt."],
      ["self-driven-child", "Zelf tempo en plek kiezen verlaagt het in de verdediging schieten."]
    ],
    ["ik-vraag-teveel-door", "puber-praat-niet"]
  ),
  extraVraag(
    "jij-begrijpt-me-niet",
    "Mijn kind roept: “jij begrijpt mij toch niet.” Wat antwoord ik?",
    "praten",
    ["kind", "tiener"],
    ["begrijpen", "puber", "ruzie", "luisteren", "erkenning"],
    "Verdedig jezelf niet meteen. Gebruik het als opening: waarschijnlijk voelt je kind zich gemist. Vraag wat jij niet snapt.",
    "“Jij begrijpt mij niet” raakt ouders, want je doet net zo je best. Maar als je antwoordt met bewijs dat je wél begrijpt, voelt je kind zich vaak nog minder gehoord.",
    "Nieuwsgierigheid boven gelijk",
    "Zeg: misschien klopt dat, help me. Daarmee verlaat je het gevecht over jouw intentie en ga je naar de ervaring van je kind.",
    [
      "Adem voor je reageert.",
      "Vraag welk stuk jij mist.",
      "Herhaal wat je hoort voordat je antwoordt."
    ],
    [
      "Meteen zeggen: “jawel hoor”.",
      "Het gesprek naar jouw gekwetstheid trekken.",
      "Bewijzen dat je kind overdrijft."
    ],
    ["“Misschien mis ik iets. Welk stuk begrijp ik niet?”"],
    [
      ["gottman-eq", "Validatie betekent eerst de ervaring proberen te begrijpen."],
      ["philippa-perry", "Relaties herstellen wanneer ouders nieuwsgierig blijven naar de binnenwereld van het kind."]
    ],
    ["luisteren-zonder-oplossen", "respectloos-praten"]
  ),
  extraVraag(
    "advies-wordt-ruzie",
    "Elk advies van mij wordt ruzie. Hoe kan dat?",
    "praten",
    ["kind", "tiener"],
    ["advies", "ruzie", "puber", "autonomie", "luisteren"],
    "Waarschijnlijk komt advies te vroeg of voelt het als controle. Vraag eerst of je kind advies wil, en bied opties in plaats van een voorschrift.",
    "Advies kan liefde zijn, maar voor een kind in stress klinkt het snel als: jij doet het fout. Zeker tieners hebben behoefte aan eigen verantwoordelijkheid. Te veel advies maakt hen kleiner.",
    "Maak advies optioneel",
    "Luister eerst, vraag toestemming en geef maximaal twee ideeën. Daarna geef je de verantwoordelijkheid terug. Dat vergroot de kans dat je kind er later zelf op terugkomt.",
    [
      "Vraag: “wil je ideeën of wil je dat ik luister?”",
      "Geef één of twee opties, geen college.",
      "Laat je kind kiezen wat het probeert."
    ],
    [
      "Advies geven terwijl je kind nog overstuur is.",
      "Gekwetst raken als je advies niet gevolgd wordt.",
      "Problemen van je tiener volledig overnemen."
    ],
    ["“Ik heb ideeën, maar alleen als je ze wil horen.”"],
    [
      ["self-driven-child", "Ouders helpen best als adviseur, niet als manager van het leven van het kind."],
      ["how-to-talk", "Samenwerking groeit door keuze en respectvolle taal."]
    ],
    ["luisteren-zonder-oplossen", "huiswerk-politie"]
  ),
  extraVraag(
    "gevoel-benamen-zonder-therapie",
    "Hoe benoem ik gevoelens zonder dat het geforceerd klinkt?",
    "praten",
    ["peuter", "kind", "tiener"],
    ["gevoelens", "benoemen", "emotiecoaching", "taal", "praten"],
    "Hou het eenvoudig en voorlopig: “het lijkt alsof...” of “misschien ben je...”. Je hoeft geen therapeut te worden om taal te geven.",
    "Gevoelens benoemen werkt omdat taal het emotionele brein helpt ordenen. Maar als je te zwaar of stellig wordt, voelt een kind zich geanalyseerd in plaats van gezien.",
    "Licht aanraken, niet vastpinnen",
    "Gebruik korte pogingen en laat je kind corrigeren. “Niet boos, teleurgesteld!” is geen mislukking; het is precies emotietaal leren.",
    [
      "Gebruik woorden als misschien, lijkt, kan het zijn.",
      "Laat je kind jouw label verbeteren.",
      "Benoem ook lichamelijke signalen: gespannen, moe, vol."
    ],
    [
      "Een emotielabel doorduwen.",
      "Elke situatie groot therapeutisch maken.",
      "Gevoelens benoemen om gedrag goed te praten."
    ],
    ["“Het lijkt alsof je teleurgesteld bent. Klopt dat, of is het iets anders?”"],
    [
      ["whole-brain-child", "Name it to tame it: woorden helpen emotionele ervaringen integreren."],
      ["gottman-eq", "Emoties begeleiden gebruikt benoemen als brug naar grenzen en oplossingen."]
    ],
    ["emoties-verstoppen", "huilt-om-kleine-dingen"]
  ),
  extraVraag(
    "boos-bericht-sturen",
    "Mijn tiener stuurt boze berichten. Antwoord ik meteen?",
    "praten",
    ["tiener"],
    ["bericht", "app", "puber", "boos", "communicatie"],
    "Niet als jij ook geactiveerd bent. Reageer kort, vertraag en verplaats echte conflicten naar stem of nabijheid.",
    "Tekstberichten missen toon, gezicht en vertraging. Daardoor escaleert boosheid snel. Een ouder die direct een lang boos bericht terugstuurt, maakt van het scherm een strijdtoneel.",
    "Gebruik berichten als brug, niet als rechtbank",
    "Schrijf kort: ik zie dat je boos bent, we praten straks. Bewaar grenzen voor een gesprek waarin jullie elkaars menselijkheid beter voelen.",
    [
      "Wacht met antwoorden als je boos bent.",
      "Houd je bericht kort en niet-sarcastisch.",
      "Plan een echt gesprek later."
    ],
    [
      "Discussies via lange appreeksen voeren.",
      "Screenshots gebruiken om je kind te vernederen.",
      "Ironie sturen die zwart-op-wit harder aankomt."
    ],
    ["“Ik lees dat je boos bent. Ik ga niet appen-ruziën. We praten straks.”"],
    [
      ["anxious-generation", "Digitale communicatie vergroot sociale prikkels en mist regulerende context."],
      ["hold-on-to-your-kids", "Ouder-kindverbinding heeft echte aanwezigheid nodig, zeker bij conflict."]
    ],
    ["telefoon-afpakken-ruzie", "respectloos-praten"]
  )
];
