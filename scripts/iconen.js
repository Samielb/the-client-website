// Ieder icoon staat apart in deze lijst.
// naam is de tekst die je op de pagina ziet. bestand is de naam van het SVG-bestand.
var iconen = [
  { naam: "Aanmelden", bestand: "Aanmelden" },
  { naam: "Actueel", bestand: "Actueel" },
  { naam: "Afval", bestand: "Afval" },
  { naam: "Afval GFT", bestand: "AfvalGFT" },
  { naam: "Afval glascontainer", bestand: "AfvalGlascontainer" },
  { naam: "Afval groenbak", bestand: "AfvalGroenbak" },
  { naam: "Afval ophalen", bestand: "AfvalOphalen" },
  { naam: "Afval PMD", bestand: "AfvalPMD" },
  { naam: "Afval scheiden", bestand: "AfvalScheiden" },
  { naam: "Afvalbak afvalzak", bestand: "AfvalbakAfvalzak" },
  { naam: "Afvalbak PMD", bestand: "AfvalbakPMD" },
  { naam: "Afvalcontainer", bestand: "Afvalcontainer" },
  { naam: "Afvalcontainer afvalzak", bestand: "AfvalcontainerAfvalzak" },
  { naam: "Afvalcontainerpas", bestand: "Afvalcontainerpas" },
  { naam: "Afvalkalender", bestand: "Afvalkalender" },
  { naam: "Afvalzak", bestand: "Afvalzak" },
  { naam: "Agenda", bestand: "Agenda" },
  { naam: "Airborne", bestand: "Airborne" },
  { naam: "Armoede", bestand: "Armoede" },
  { naam: "Asbest Verwijderen", bestand: "AsbestVerwijderen" },
  { naam: "Attentie", bestand: "Attentie" },
  { naam: "Auto", bestand: "Auto" },
  { naam: "Bedrijventerrein", bestand: "Bedrijventerrein" },
  { naam: "Begraafplaats", bestand: "Begraafplaats" },
  { naam: "Begroting", bestand: "Begroting" },
  { naam: "Bel ons", bestand: "BelOns" },
  { naam: "Belastingen", bestand: "Belastingen" },
  { naam: "Bericht", bestand: "Bericht" },
  { naam: "Betaaldatums uitkering", bestand: "BetaaldatumsUitkering" },
  { naam: "Bevolking", bestand: "Bevolking" },
  { naam: "Bevrijding", bestand: "Bevrijding" },
  { naam: "Bezwaar en beroep", bestand: "BezwaarEnBeroep" },
  { naam: "Bijstandsuitkering", bestand: "Bijstandsuitkering" },
  { naam: "Bijzondere bijstand", bestand: "BijzondereBijstand" },
  { naam: "Bladeren opruimen", bestand: "BladerenOpruimen" },
  { naam: "Bomen", bestand: "Bomen" },
  { naam: "Bouwen en verbouwen", bestand: "BouwenEnVerbouwen" },
  { naam: "Bouwprojecten", bestand: "Bouwprojecten" },
  { naam: "Brandgevaar", bestand: "Brandgevaar" },
  { naam: "Brief", bestand: "Brief" },
  { naam: "Buitengebied", bestand: "Buitengebied" },
  { naam: "Burgemeester", bestand: "Burgemeester" },
  { naam: "Chat", bestand: "Chat" },
  { naam: "Computer", bestand: "Computer" },
  { naam: "Computerregeling", bestand: "Computerregeling" },
  { naam: "Contact gemeente", bestand: "ContactGemeente" },
  { naam: "Cultuur", bestand: "Cultuur" },
  { naam: "Denk vooruit", bestand: "DenkVooruit" },
  { naam: "Documenten", bestand: "Documenten" },
  { naam: "Dossier", bestand: "Dossier" },
  { naam: "Duurzaamheid", bestand: "Duurzaamheid" },
  { naam: "Economie werk inkomen", bestand: "EconomieWerkInkomen" },
  { naam: "Eenzaamheid", bestand: "Eenzaamheid" },
  { naam: "Eikenprocessie", bestand: "Eikenprocessie" },
  { naam: "Elektrisch laden", bestand: "ElektrischLaden" },
  { naam: "Elektrisch rijden", bestand: "ElektrischRijden" },
  { naam: "Energietransitie", bestand: "Energietransitie" },
  { naam: "Enquete", bestand: "Enquete" },
  { naam: "Erfgoed", bestand: "Erfgoed" },
  { naam: "Erfpacht", bestand: "Erfpacht" },
  { naam: "Evenementen", bestand: "Evenementen" },
  { naam: "F1", bestand: "F1" },
  { naam: "Fiets", bestand: "Fiets" },
  { naam: "Formulier", bestand: "Formulier" },
  { naam: "Geboorte", bestand: "Geboorte" },
  { naam: "Gebruiker", bestand: "Gebruiker" },
  { naam: "Gebruiker centraal", bestand: "GebruikerCentraal" },
  { naam: "Gebruiker ingelogd", bestand: "GebruikerIngelogd" },
  { naam: "Gebruikersvraag", bestand: "Gebruikersvraag" },
  { naam: "Gegevenswoordenboek", bestand: "Gegevenswoordenboek" },
  { naam: "Geld", bestand: "Geld" },
  { naam: "Geluid", bestand: "Geluid" },
  { naam: "Gemeenteraad", bestand: "Gemeenteraad" },
  { naam: "Gemeenteraadsvergadering", bestand: "Gemeenteraadsvergadering" },
  { naam: "Gemiva locatie", bestand: "GemivaLocatie" },
  { naam: "Gezicht", bestand: "Gezicht" },
  { naam: "Gezondheid", bestand: "Gezondheid" },
  { naam: "Gladheid", bestand: "Gladheid" },
  { naam: "Grafiek", bestand: "Grafiek" },
  { naam: "Grofvuil", bestand: "Grofvuil" },
  { naam: "Herdenking", bestand: "Herdenking" },
  { naam: "Hond", bestand: "Hond" },
  { naam: "Hondenbelasting", bestand: "Hondenbelasting" },
  { naam: "Hoog water", bestand: "HoogWater" },
  { naam: "Hoogbouw", bestand: "Hoogbouw" },
  { naam: "Horeca", bestand: "Horeca" },
  { naam: "Horecavergunningen", bestand: "Horecavergunningen" },
  { naam: "Huis", bestand: "Huis" },
  { naam: "Huis en omgeving", bestand: "HuisEnOmgeving" },
  { naam: "Huiselijk geweld", bestand: "HuiselijkGeweld" },
  { naam: "Hulp huishouden", bestand: "HulpHuishouden" },
  { naam: "Hulpmiddelen vinden", bestand: "HulpmiddelenVinden" },
  { naam: "ID-kaart", bestand: "Idkaart" },
  { naam: "In en om uw huis", bestand: "InEnOmUwHuis" },
  { naam: "Informatie", bestand: "Informatie" },
  { naam: "Informatie en betalen", bestand: "InformatieEnBetalen" },
  { naam: "Inkomen", bestand: "Inkomen" },
  { naam: "Inloggen", bestand: "Inloggen" },
  { naam: "Inspraak", bestand: "Inspraak" },
  { naam: "Intimidatie", bestand: "Intimidatie" },
  { naam: "Isolatie", bestand: "Isolatie" },
  { naam: "Jeugd", bestand: "Jeugd" },
  { naam: "Kennis", bestand: "Kennis" },
  { naam: "Kerstbomen", bestand: "Kerstbomen" },
  { naam: "Kind en familie", bestand: "KindEnFamilie" },
  { naam: "Klacht", bestand: "Klacht" },
  { naam: "Koningsdag", bestand: "Koningsdag" },
  { naam: "Kopen en huren", bestand: "KopenEnHuren" },
  { naam: "Kopen en verkopen", bestand: "KopenEnVerkopen" },
  { naam: "Laad station", bestand: "LaadStation" },
  { naam: "Leerlingenvervoer", bestand: "Leerlingenvervoer" },
  { naam: "Let op", bestand: "LetOp" },
  { naam: "Levensloop", bestand: "Levensloop" },
  { naam: "Liefdadigheid", bestand: "Liefdadigheid" },
  { naam: "Locatie", bestand: "Locatie" },
  { naam: "Manege", bestand: "Manege" },
  { naam: "Marktgelden", bestand: "Marktgelden" },
  { naam: "Meeuwenoverlast", bestand: "Meeuwenoverlast" },
  { naam: "Melding", bestand: "Melding" },
  { naam: "Melding omgevallen boom", bestand: "MeldingOmgevallenBoom" },
  { naam: "Melding openbare ruimte", bestand: "MeldingOpenbareRuimte" },
  { naam: "Melding straatverlichting", bestand: "MeldingStraatverlichting" },
  { naam: "Milieuzone", bestand: "Milieuzone" },
  { naam: "Mobiliteit", bestand: "Mobiliteit" },
  { naam: "Monitor agrofood", bestand: "MonitorAgrofood" },
  { naam: "Monitor duurzaamheid", bestand: "MonitorDuurzaamheid" },
  { naam: "Monitor sociaal", bestand: "MonitorSociaal" },
  { naam: "Monitor virus", bestand: "MonitorVirus" },
  { naam: "Monitor woningmarkt", bestand: "MonitorWoningmarkt" },
  { naam: "Monument", bestand: "Monument " },
  { naam: "Monument woning", bestand: "MonumentWoning" },
  { naam: "Museum", bestand: "Museum" },
  { naam: "Natuur landschap", bestand: "NatuurLandschap" },
  { naam: "Nieuwsbrief", bestand: "Nieuwsbrief" },
  { naam: "Omgeving", bestand: "Omgeving" },
  { naam: "Omgevingsvergunning", bestand: "Omgevingsvergunning" },
  { naam: "Omgevingsvisie", bestand: "Omgevingsvisie" },
  { naam: "Omgevingsvisie document", bestand: "OmgevingsvisieDocument" },
  { naam: "Onderhoud", bestand: "Onderhoud" },
  { naam: "Ondernemen", bestand: "Ondernemen" },
  { naam: "Onderscheidingen", bestand: "Onderscheidingen" },
  { naam: "Onderwijs", bestand: "Onderwijs" },
  { naam: "Onderwijs basis", bestand: "OnderwijsBasis" },
  { naam: "Onderwijs hoger", bestand: "OnderwijsHoger" },
  { naam: "Onderwijs voortgezet", bestand: "OnderwijsVoortgezet" },
  { naam: "Ontheffing milieuzone", bestand: "OntheffingMilieuzone" },
  { naam: "Openingstijden", bestand: "Openingstijden" },
  { naam: "Openingstijden winkels", bestand: "OpeningstijdenWinkels" },
  { naam: "Over de gemeente", bestand: "OverDeGemeente" },
  { naam: "Over de stad", bestand: "OverDeStad" },
  { naam: "Overlijden", bestand: "Overlijden" },
  { naam: "Parkeerkosten", bestand: "Parkeerkosten" },
  { naam: "Parkeerplattegrond", bestand: "Parkeerplattegrond" },
  { naam: "Parkeervergunning", bestand: "Parkeervergunning" },
  { naam: "Parkeervoorziening gehandicapten", bestand: "ParkeervoorzieningGehandicapten" },
  { naam: "Parkeren", bestand: "Parkeren" },
  { naam: "Parkeren bedrijven", bestand: "ParkerenBedrijven" },
  { naam: "Participatie", bestand: "Participatie" },
  { naam: "Participatie campagne", bestand: "ParticipatieCampagne" },
  { naam: "Participatie checklist", bestand: "ParticipatieChecklist" },
  { naam: "Participatie like", bestand: "ParticipatieLike" },
  { naam: "Participatie pitch", bestand: "ParticipatiePitch" },
  { naam: "Participatie plan", bestand: "ParticipatiePlan" },
  { naam: "Participatie uitvoering", bestand: "ParticipatieUitvoering" },
  { naam: "Paspoort", bestand: "Paspoort" },
  { naam: "Paspoort ID-kaart gecombineerd", bestand: "PaspoortIdkaartGecombineerd" },
  { naam: "Paspoort ID-kaart gecombineerd internationaal", bestand: "PaspoortIdkaartGecombineerdInternationaal" },
  { naam: "Paspoort internationaal", bestand: "PaspoortInternationaal" },
  { naam: "Plattegrond", bestand: "Plattegrond" },
  { naam: "Polarisatie", bestand: "Polarisatie" },
  { naam: "Politiek", bestand: "Politiek" },
  { naam: "Portemonnee", bestand: "Portemonnee" },
  { naam: "Presentatie", bestand: "Presentatie" },
  { naam: "Prijskaartje", bestand: "Prijskaartje" },
  { naam: "Raad en college", bestand: "RaadEnCollege" },
  { naam: "Reclame", bestand: "Reclame" },
  { naam: "Reclamebelasting", bestand: "Reclamebelasting" },
  { naam: "Recreatie", bestand: "Recreatie" },
  { naam: "Recycle", bestand: "Recycle" },
  { naam: "Regeling laag inkomen", bestand: "RegelingLaagInkomen" },
  { naam: "Rekenhulp", bestand: "Rekenhulp" },
  { naam: "Rijbewijs", bestand: "Rijbewijs" },
  { naam: "Riool", bestand: "Riool" },
  { naam: "Rioolheffing", bestand: "Rioolheffing" },
  { naam: "Rioolwerkzaamheden", bestand: "Rioolwerkzaamheden" },
  { naam: "Roerende zaakbelasting", bestand: "RoerendeZaakbelasting" },
  { naam: "Rolstoel", bestand: "Rolstoel" },
  { naam: "Schoolkostenregeling", bestand: "Schoolkostenregeling" },
  { naam: "Schuldhulpverlening", bestand: "Schuldhulpverlening" },
  { naam: "Sinterklaas", bestand: "Sinterklaas" },
  { naam: "Sociaal zorg welzijn", bestand: "SociaalZorgWelzijn" },
  { naam: "Speeltuin", bestand: "Speeltuin" },
  { naam: "Sport", bestand: "Sport" },
  { naam: "Sport culturele activiteit", bestand: "SportCultureleActiviteit" },
  { naam: "Sportkleding muziekinstrumenten", bestand: "SportkledingMuziekinstrumenten" },
  { naam: "Station sneltrein", bestand: "StationSneltrein" },
  { naam: "Station stoptrein", bestand: "StationStoptrein" },
  { naam: "Stookverbod", bestand: "Stookverbod" },
  { naam: "Strand", bestand: "Strand" },
  { naam: "Subsidie", bestand: "Subsidie" },
  { naam: "Temperatuur melding", bestand: "TemperatuurMelding" },
  { naam: "Thuiswerken", bestand: "Thuiswerken" },
  { naam: "Toegankelijkheid", bestand: "Toegankelijkheid" },
  { naam: "Toeslag", bestand: "Toeslag" },
  { naam: "Trouwen en geregistreerd partnerschap", bestand: "TrouwenEnGeregistreerdPartnerschap" },
  { naam: "Tuinbouw", bestand: "Tuinbouw" },
  { naam: "Uitbuiting", bestand: "Uitbuiting" },
  { naam: "Uittreksel", bestand: "Uittreksel" },
  { naam: "Uw gemeente", bestand: "UwGemeente" },
  { naam: "Uw wijk", bestand: "UwWijk" },
  { naam: "Vacatures", bestand: "Vacatures" },
  { naam: "Vaccinatie", bestand: "Vaccinatie" },
  { naam: "Veerboot", bestand: "Veerboot" },
  { naam: "Veilige wijk", bestand: "VeiligeWijk" },
  { naam: "Vergaderen", bestand: "Vergaderen" },
  { naam: "Vergaderen digitaal", bestand: "VergaderenDigitaal" },
  { naam: "Vergoeding energiekosten", bestand: "VergoedingEnergiekosten" },
  { naam: "Vergunning algemeen", bestand: "VergunningAlgemeen" },
  { naam: "Verhuizen", bestand: "Verhuizen" },
  { naam: "Verkeerslicht", bestand: "Verkeerslicht" },
  { naam: "Verkiezingen", bestand: "Verkiezingen" },
  { naam: "Verslaving", bestand: "Verslaving" },
  { naam: "Vervoersvoorziening", bestand: "Vervoersvoorziening" },
  { naam: "Virus", bestand: "Virus" },
  { naam: "Vlag", bestand: "Vlag" },
  { naam: "Vluchtelingen opvang", bestand: "VluchtelingenOpvang" },
  { naam: "Voeding", bestand: "Voeding" },
  { naam: "Vragen", bestand: "Vragen" },
  { naam: "Vrijwilligerswerk", bestand: "Vrijwilligerswerk" },
  { naam: "Vuurwerk", bestand: "Vuurwerk" },
  { naam: "Wandelen", bestand: "Wandelen" },
  { naam: "Weerbaarheid", bestand: "Weerbaarheid" },
  { naam: "Weerbaarheid digitaal", bestand: "WeerbaarheidDigitaal" },
  { naam: "Welzijnswerk", bestand: "Welzijnswerk" },
  { naam: "Werkzaamheden", bestand: "Werkzaamheden" },
  { naam: "Wie is wie", bestand: "WieIsWie" },
  { naam: "Wijkteam", bestand: "Wijkteam" },
  { naam: "Windenergie", bestand: "Windenergie" },
  { naam: "Winkelen", bestand: "Winkelen" },
  { naam: "Winkelwagen", bestand: "Winkelwagen" },
  { naam: "WMO", bestand: "Wmo" },
  { naam: "Wolf", bestand: "Wolf" },
  { naam: "Woning zoeken", bestand: "WoningZoeken" },
  { naam: "WOZ waarde", bestand: "WozWaarde" },
  { naam: "Zelfbeheer tegel", bestand: "ZelfbeheerTegel" },
  { naam: "Zelfstandig wonen", bestand: "ZelfstandigWonen" },
  { naam: "Zoeken", bestand: "Zoeken" },
  { naam: "Zorgverzekering", bestand: "Zorgverzekering" },
  { naam: "Zwemabonnement", bestand: "Zwemabonnement" },
  { naam: "Zwemmen", bestand: "Zwemmen" }
];

// Elementen op de pagina.
var iconenGrid = document.querySelector("#icon-grid");
var popup = document.querySelector("#icon-dialog");
var popupTitel = document.querySelector("#dialog-title");
var voorbeeld = document.querySelector("#icon-preview");
var svgCode = document.querySelector("#svg-code");
var melding = document.querySelector("#icon-feedback");
var downloadKnop = document.querySelector("#download-svg");
var gekozenIcoon;
var gekozenVariant = "Line";

// Maak het pad naar het SVG-bestand.
function maakPad(variant, bestandsnaam) {
  return "assets/Svg/" + variant + "/" + bestandsnaam + ".svg";
}

// Maak voor ieder icoon een knop op de pagina.
function maakIcoonKnop(icoon) {
  var knop = document.createElement("button");
  var afbeelding = document.createElement("img");
  var naam = document.createElement("span");

  knop.className = "icon-keuze";
  knop.type = "button";
  afbeelding.src = maakPad("Line", icoon.bestand);
  afbeelding.alt = "";
  naam.textContent = icoon.naam;
  knop.appendChild(afbeelding);
  knop.appendChild(naam);
  knop.onclick = function () {
    openPopup(icoon);
  };
  iconenGrid.appendChild(knop);
}

// Toon alle iconen op de pagina.
function toonIconen() {
  for (var i = 0; i < iconen.length; i++) {
    maakIcoonKnop(iconen[i]);
  }
}

// Open de popup en laad het gekozen icoon.
function openPopup(icoon) {
  gekozenIcoon = icoon;
  popupTitel.textContent = icoon.naam;
  popup.showModal();
  laadIcoon();
}

// Laad de SVG-code en stel de knoppen in.
function laadIcoon() {
  var pad = maakPad(gekozenVariant, gekozenIcoon.bestand);
  voorbeeld.innerHTML = '<img src="' + pad + '" alt="">';
  downloadKnop.href = pad;
  downloadKnop.download = gekozenIcoon.bestand + "-" + gekozenVariant + ".svg";
  melding.textContent = "";

  fetch(pad)
    .then(function (antwoord) {
      return antwoord.text();
    })
    .then(function (code) {
      svgCode.value = code;
    })
    .catch(function () {
      svgCode.value = "";
      melding.textContent = "De SVG-code kon niet worden geladen.";
    });
}

// Klik op een stijl om die te bekijken.
var variantKnoppen = document.querySelectorAll(".variant-knop");
for (var i = 0; i < variantKnoppen.length; i++) {
  variantKnoppen[i].onclick = function () {
    gekozenVariant = this.getAttribute("data-variant");
    for (var j = 0; j < variantKnoppen.length; j++) {
      variantKnoppen[j].classList.remove("is-active");
    }
    this.classList.add("is-active");
    laadIcoon();
  };
}

// Sluit de popup met de sluitknop.
document.querySelector("#dialog-close").onclick = function () {
  popup.close();
};

// Kopieer de SVG-code.
document.querySelector("#copy-svg").onclick = function () {
  svgCode.select();
  document.execCommand("copy");
  melding.textContent = "SVG-code gekopieerd.";
};

// Toon alle iconen als de pagina opent.
toonIconen();
