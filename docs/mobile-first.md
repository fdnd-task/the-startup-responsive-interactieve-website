# The Startup - Responsive Interactive Website

## Mobile First

Mobile First als design & development strategie. Over mobile first bouwen en breakpoints bepalen van jouw responsive design

> Start with the small screen first, then expand until it looks like shit. Time for a breakpoint! - Stephen Hay

## Aanpak

### One Column Layout
Begin met de One Column Layout. Met andere woorden; zorg voor goed gestructureerde, semantische HTML. Als de HTML klaar is staan de (block-level) elementen netjes onder elkaar. Over het algemeen zullen de meeste elementen in One Column Layout onder elkaar staan (met uizondering van bijvoorbeeld navigatie items). Stijl alles nu volgens de huisstijl. Zet elementen die in de One Column Layout naast elkaar staan met behulp van op de juiste plek. Gebruik hiervoor bijvoorbeeld ```flexbox```. Nu is de One Column Layout klaar.

### Breakpoints

Breakpoints kan je in CSS bijvoorbeeld maken met ```media queries```.  Met ```media queries``` kan je aan de hand van eigenschappen van een device keuzes maken over hoe je elementen stijlt. Bijvoorbeeld over hoe breed de viewport van het gebruikte device is.

Je eerste breakpoint zet je op het moment dat bij een breder wordende viewport de One Column Layout er niet meer goed uitziet. Een regel hiervoor is dat tekst niet meer dan 10 à 12 woorden op één regel mag bevatten om de tekst goed leesbaarheid te houden. Kijk met behulp van de devtools waar voor jou website het eerste breakpoint ligt. Voeg door middel van een `media query` met `min-width` een breakpoint toe. Op deze manier voeg je nog twee breakpoints toe voor nog bredere viewports.

Tip: met een `container query` kan je elementen stijlen op basis van de grootte van de omliggende container. Hiermee bekijk je responsive disgn dus meer op component niveau. 

#### Bronnen
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
* https://web.dev/blog/cq-stable 

<!--
OUTLINE 

- Mobile First als design strategie
    Wat is Mobile first?
- One Column layout
    Begin met de One column layout (en de huisstijl)
- Breakpoints bepalen
- Media query toepassen met min-width
    (welke features heb je allemaal in een media query heb je allemaal? Vandaag met '`width')
    (Media queries nesten, zoals code conventions)


*Code/Design review - Mobile First*
Vrijdag de toegepaste huisstijl testen in de one-column layout. 
En de min-width in de media-query voor de layout

-->


<!--

# Your Tribe - Squad page
## Responsive Design

_In de workshop S01W2-03-responsive-design wordt behandeld wat Responsive Design is, waarom het belangrijk is en hoe je met een Media query in CSS de layout voor verschillende schermen kan maken._

Heb web is niet een statische plek qua verhoudingen, elk device en elk scherm kan weer een eigen verhouding hebben. Het is dus belangrijk dat wij als frontenders zorgen dat de informatie die overgebracht moet worden op al deze schermen/verhoudingen goed beschikbaar is. 

Met CSS kun je regels schrijven waarmee de browser de website anders toont op verschillende verhoudingen. Dit kan zowel in de breedte als de hoogte zijn, of bijv. portrait en landscape mode. Dit doen we met 'media queries': 

```css
    body {
        background: blue;
    }

    @media (min-width: 600px) {
        body {
            background: red;
        }
    }
```

### Aanpak

Schets en maak een responsive design voor je squadpage.

#### Opdracht 1

1. Zoek de pixelwaardes van elke telefoon aan de tafel op
2. Schrijf deze pixelwaardes op het whiteboard achter ieders naam
3. Vraag elkaar op welke devices je op internet zit, hoeveel procent op welk device?
4. Schrijf dit op het whiteboard achter ieders naam
5. Ga naar [ Gstat counter](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide) en vergelijk de antwoorden met de statistieken
6. Extra: verander van werelddeel op Gstat counter en bekijk de verschillen

#### Opdracht 2

1. Ga naar je favoriete nieuwssite, ieder aan de tafel een ander (zoals nos.nl, ad.nl, parool.nl, cnn.com)
2. Zoek uit op welke pixelwaardes de site een breakpoint inzet om de layout te veranderen
3. Schrijf deze pixelwaardes op het bord
4. Wat valt je op, bespreek dit met je tafel

#### Opdracht 3

1. Schets de squadpage voor een mobiel scherm (S) en een laptop scherm (L)
2. Maak een breakdownschets met HTML en pseudo CSS code
3. Bepaal het breakpoint, bij welke schermbreedte krijg je een andere layout te zien? Maak aantekeningen op je breakdown schets
4. Upload je breakdown schets in een issue en leg deze kort uit
5. Leg je breakdown schets uit aan iemand van je tafel en vraag om feedback, laat de persoon dit bij je issue schrijven
6. Bouw je squad page met één, of meerdere, media query
7. Test regelmatig in je browser of je media query goed werkt. Test het ook op je mobiel. 

<img width="1054" alt="Breakdownschets met breakpoint" src="https://user-images.githubusercontent.com/1391509/190015653-16903c62-09bc-4047-a186-dc368d18242e.png">
<small><i>Breakdownschets met breakpoint</i></small>

### Devtools & Responsive

De devtools heeft ook handige functionaliteiten om je website te debuggen op verschillende verhoudingen. 

1. Open de developer tools op een website, door een element te inspecteren met je rechtermuisknop.
2. Klik op de "Device toolbar" knop

<img width="1055" alt="Device mode toggle" src="https://github.com/user-attachments/assets/7be7048b-b0bc-4d1d-a98d-c490755d6463">

Dit is een screenshot van Chrome, in de andere browsers zit het knopje misschien op een andere plek en in Safari kun je het via de menu bar "develop" -> "enter responsive design mode" vinden.

3. Afhankelijk van je laatste instellingen zie je nu de site in een bepaalde verhouding, in dit geval alsof het een iphone 12 pro is.

<img width="1622" alt="Device mode" src="https://github.com/user-attachments/assets/5039dd6b-891f-41e2-a186-bb6569edf620">

4. Je kunt de verhoudingen aanpassen door de tools te gebruiken in deze device mode. Je kunt een bestaande verhouding kiezen of zelf de afmetingen bepalen. 
<img width="545" alt="Device mode toolbar" src="https://github.com/user-attachments/assets/c689544b-5aa4-4ce6-bc0f-d52f209f6eba">

Chrome probeert dan je de volledige verhouding in beeld te geven, dit kan er soms voor zorgen dat het uitgezoomd is (irritant!), gelukkig kun je dit ook instellen door het percentage op 100% te zetten. Over throttling gaan we het een andere keer hebben.

Naast dat je de devtools kunt gebruiken kun je natuurlijk ook met je browser heen en weer slepen om te kijken wat er gebeurt op verschillende verhoudingen. Als je de devtools open hebt staan, kun je als je heen en weer sleept ook de pixel waardes zien in de rechterbovenhoek van je website, handig als je wilt bepalen wanneer je een breakpoint wilt introduceren. 


#### Bronnen 

- [Beginner guide to Media Queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
- [Viewport meta tag op MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Gstat counter mobile/desktop/tablet](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide)
- [Whatsmyviewport](https://whatismyviewport.com/)
- Een browser die _Responsive_ makkelijker maakt? 🚀 Gebruik [Polypane](https://polypane.app/) (gratis voor studenten)



**Meer lezen over Responsive**
- [How Much Has The Web Really Changed?](https://www.smashingmagazine.com/2013/05/new-defaults-web-design/)
- [The New Multi-screen World](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/the-new-multi-screen-world-study/)
- [The ideal viewport doesn’t exist](https://viewports.fyi)


-->
