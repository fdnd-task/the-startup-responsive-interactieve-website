# The Startup - Responsive Interactive Website

## Code/Design review Mobile First

Deze week heb je een nieuwe opdracht gekregen en heb je geleerd om een website Mobile First te bouwen. Als het goed is en je zit op schema heb je nu een HTML prototype gemaakt, heb je de huisstijl geanalyseerd en toegepast op een one collumn layout, en ben je begonnen met de responsive layout bouwen. 

## Aanpak

Vandaag ga je eerst met een groep een huisstijl review doen. Daarna doe je in duo's een review op de Mobile First code. Tot slot ga je aan de hand van een video geavanceerde tips & tricks voor responsive design leren en toepassen. Als je klaar bent kan je meteen beginnen met het verwerken van de issues die je hebt gekregen.


## Huisstijl review

Jullie gaan met studenten die dezelfde opdrachtgever hebben gezamenlijk het werk van andere studenten reviewen.

1. Bekijk in het schema hieronder welke opdrachten jullie gaan reviewen.

| Groep | Reviewt studenten van |
|---|---|
| **270 Degrees** | Milledoni |
| **Lab Digital** | Informaat |
| **Active Collective** | JUST |
| **Future Ready Design** | DEPT |
| **Funda** | 270 Degrees |
| **Drukwerkdeal** | Lab Digital |
| **ABN AMRO** | Active Collective  |
| **Rideout** | Future Ready Design |
| **Milledoni** | Funda |
| **Informaat** | Drukwerkdeal |
| **JUST** | ABN AMRO |
| **DEPT** | Rideout |

2. Bekijk om de beurt de repo van de studenten die je gaat reviewen. Lees met elkaar het issue met uitleg over de huisstijl (die heet waarschijnlijk 'One Column Layout'). 
   - **Feedback op uitleg**: Controleer of de issue voldoende informatie bevat om te begrijpen hoe de stylesheet werkt. Is het duidelijk hoe je de code kunt implementeren? Schrijf je feedback in het issue.

3. **Code Review Checklist**: Doorloop de volgende vragen om de kwaliteit van de stylesheet te beoordelen. Schiet waar nodig een issue in.

   - **Indeling van de stylesheet**: Is de structuur van de stylesheet logisch? Zijn secties goed ingedeeld (bijv. kleuren, typografie, knoppen) zodat ze eenvoudig terug te vinden zijn?
   
   - **Consistente naamgeving**: Is de naamgeving consisitent? Kijk of er een consistente schrijfwijze is gekozen (zoals kebab-case voor CSS-variabelen of selectors, bijvoorbeeld `--font-size-large`).
   
   - **Naamgeving en begrijpelijkheid**: Is de naamgeving van variabelen en classes gemakkelijk te volgen? 

   - **Volledigheid van de stylesheet**: Bevat de stylesheet voldoende elementen en states voor een volledige implementatie? Let op states zoals hover, active en focus voor links en knoppen, en controleer of formulieren (inputvelden, foutmeldingen) ook zijn opgenomen.

   - **Custom properties op juiste element**: Worden de custom properties op de juiste plaats toegepast? Bijvoorbeeld, worden custom properties op de :root gedefinieerd? Is dat een bewuste keuze? Of zou het ook op de body kunnen?

   - **Herhaling van code**: Bekijk of er onnodige herhaling van code is. Als er vaak dezelfde stijlen worden herhaald, kijk dan of dit simpeler kan door variabelen of mixins te gebruiken.

## Mobile First review

Review in duo's het werk van 2 andere studenten uit de andere squad. Iedereen krijgt vandaag 2 reviews!

Schrijf eerst jouw naam op het whiteboard met de url van jouw repo + jouw squad. 
Schrijf daarna jullie namen bij de naam van de student die jullie reviewen uit de andere squad.

### Prototype in HTML

1. Test of de HTML goed is door een _HTML validator check_ te doen op de W3C website: https://validator.w3.org. Schrijf in het “Prototype naar HTML” issue een reactie als er bij de validatie problemen naar voren zijn gekomen, en probeer hints te geven voor een oplossing.

2. Bekijk de website zonder CSS (via devtools kun je eventueel het `<link>` element uit de `<head>` verwijderen) en bepaal of deze logisch, duidelijk en bruikbaar is opgezet. Schrijf je gedachten in het “Prototype naar HTML” issue als reactie.

3. Laat de heading structuur van de homepagina voorlezen door een tool. Je kan hiervoor een screenreader gebruiken of een browser extensie. Controleer of de heading levels correct zijn gebruikt. De volgende vragen kunnen je daarbij helpen: Is er een logische volgorde van de heading levels (`<h1>`, `<h2>`, `<h3>`, etc.)? Is er maar één `<h1>` op de pagina? Volgen de headings elkaar logisch op (bijvoorbeeld geen overslaan van `<h2>` naar `<h4>`)? Maak zo nodig hier een issue voor aan.

4. Bekijk alle HTML elementen en gebruik de [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) om te checken of de juiste HTML elementen zijn gebruikt. Schrijf verbeteringen of suggesties over de gebruikte HTML  als reactie in het “Prototype naar HTML” issue.

   - Bespreek de *Content sectioning*. Zijn de juiste elementen gebruikt voor bijvoorbeeld `<article>`, `<footer>`, `<header>`, `<section>`,  headings, `<main>`, etc? Bespreek alle elementen en zoek op of ze goed zijn gebruikt.

   - Zijn de juiste elementen gebruikt voor de *Text content*, zoals `<p>`, `<ol>`, `<li>`, etc? Bespreek alle elementen en zoek op of ze goed zijn gebruikt. 

   - Zijn de juiste elementen gebruikt voor de *Inline text semantics*, zoals  en `<a>`, `<strong>`, `<em>`, etc? Bespreek alle elementen en zoek op of ze goed zijn gebruikt. 

   - Bekijk of de website gebruik maakt van `<a>` en/of `<button>`. Wordt het juiste HTML-element gebruikt voor links naar andere pagina's of externe bronnen? Tip: bekijk nog eens de workshop [user-experience-van-html](https://github.com/fdnd-task/all-human-accessible-website/blob/main/docs/user-experience-van-html.md#links). Maak zo nodig hier een issue voor aan.

   - Bekijk de HTML waarin afbeeldingen zijn opgenomen. Controleer of het juiste gebruik van het alt-attribuut wordt toegepast bij de `<img>` tags. Beantwoord daarvoor de volgende vragen: Heeft elke afbeelding een alt-attribuut? Is de tekst in het alt-attribuut beschrijvend en passend bij de context van de afbeelding? Zou je een andere tekst voor het alt-attribuut kiezen? Waarom wel of niet? Maak zo nodig hier een issue voor aan.

### Breakpoints

1. Bekijk de website in een browser. Maak de browser eerst heel smal en dan steeds breder. Analyseer waar de breakpoints zitten. Bepaal of de leesbaarheid en bruikbaarheid van de website goed blijven. Schrijf je gedachten in het “Mobile First” issue als reactie.
2. Bekijk daarna de `media queries`, kijk naar de aanroep, is de `media query` genest? Check de media features die zijn gebruikt en de conditie waaraan voldaan moet worden. Valt je iets op? Schrijf dan een issue. 


## 5 CSS Tips & Tricks for better Responsive Web Design 

Behalve media queries zijn er in CSS geavanceerde technieken om ervoor te zorgen dat je website het goed doet in verschillende scherm groottes. 

Bekijk de video '5 CSS Tips & Tricks for better Responsive Web Design'. In de video worden een aantal geavanceerde technieken uitgelegd: Relative padding, Responsive font-sizes, Responsive images, Dynamic viewport height en het HTML inter attribuur.

Probeer de tips & tricks uit op je eigen project, of maak ze in jouw i-love-web repo. Leg met comments uit hoe de technieken werken. Kopieer de code met comments naar je Learning log zodat dit je dit later weer kan teruglezen...

### Bron
[5 CSS Tips & Tricks for better Responsive Web Design](https://www.youtube.com/watch?v=2IV08sP9m3U)