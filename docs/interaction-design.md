# The Startup - Responsive Interactive Website

## Interaction Design

Deze week ga je voor de opdracht een interactie ontwerpen, maken en testen. 

In een goed ontwerp hou je rekening met de gebruiker door goede feedback en feedforward te ontwerpen: *feedforward* zorgt ervoor dat een gebruiker weet wat die kan verwachten, met *feedback* zorg je ervoor dat een gebruiker weet dat een interactie is gelukt. 

Feedback en Feedforward zijn interactie principes, bijvoorbeeld door buttons goede labels en states te geven, en door het gebruik van animaties weet de gebruiker waar die aan toe is.

Joshua Porter, user experience designer, schrijft:
> Keep users in control by regularly surfacing system status, by describing causation (if you do this that will happen) and by giving insight into what to expect at every turn - Joshua Porter, [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/)


### Aanpak

Schrijf voor de interactie die je gaat maken eerst een User Story. Daarna ga je de interactie ontwerpen in een Wireflow, zodat je goed weet wat je gaat bouwen. Onderzoek voordat je gaat bouwen welke technieken je nodig hebt, maak een breakdown-schets zodat je een technisch plan hebt.

Maak een issue aan met als titel de User story. Voeg hier de user story en uitleg van de interactie aan toen, de wireflow en de breakdown. Koppel de commits aan het issue. Vrijdag ga je o.a. de interactie testen met een User Test.

Voor uitgebreide instructies en uitleg kun je de workshop [User Interface Design uit sprint 5](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/user-interface-design.md) gebruiken.



<!--
Met de User Interface (UI) wordt de ‘voorkant’ van een website of app bedoeld, het gedeelte dat de gebruiker ziet en interactie mee heeft. De UI bestaat uit het ontwerp, de layout met teksten en plaatjes, en interactieve elementen, zoals buttons, navigatie en formulieren.

In een goed ontwerp hou je rekening met de gebruiker. Zorg ervoor dat de UI voor de gebruiker duidelijk is door feedback en feedforward te ontwerpen: zorg ervoor dat een gebruiker weet wat die kan verwachten, *feedforward*, en of een interactie is gelukt, *feedback*. Niks is vervelender dan op een knop klikken en er gebeurt niets of iets anders dan je verwacht... Joshua Porter, user experience designer, schrijft:

> Keep users in control by regularly surfacing system status, by describing causation (if you do this that will happen) and by giving insight into what to expect at every turn - Joshua Porter, [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/)

Deze sprint ga je een interactie ontwerpen en bouwen. Voorbeelden van interactie zijn stap voor stap door een vragenlijst klikken, een filter systeem, of een menu open en dicht klappen.

## Aanpak

Eerst ga je bedenken welke interactie je gaat maken en voor wie. Hiervoor schrijf je een *User Story*.

Daarna ga je de interactie ontwerpen in een *Wireflow*, zodat je goed weet wat je gaat bouwen. 

Voor de interactie heb je JavaScript nodig. Onderzoek eerst het *JavaScript 3-stappenplan* dat je nodig hebt, en maak een breakdown-schets van je technische plan. 

Tijdens de code/design reviews deze sprint krijg je feedback op je code en ga je de interactie leren testen met een User test. 



## User Story

Voordat je een Wireflow gaat tekenen, moet je eerst goed beschrijven wie de gebruiker is en wat de doelen van de gebruiker zijn. Daarna kun je met een *User Story* de interactie beschrijven die je gaat ontwerpen.

Een *User Story* is een korte beschrijving (story) van wat een gebruiker (user) wil. Het is een kort verhaaltje, geschreven vanuit de gebruiker, en het maakt duidelijk wat een gebruiker wil. Bijvoobeeld: `Als een online shopper, wil ik de mogelijkheid hebben om producten te vergelijken, zodat ik de beste keuze kan maken en geld kan besparen.`

In een *User Story* staat niet de oplossing beschreven of hoe iets er uit moet zien. Het is een 'ontwerpprobleem". Een 'User Story' beschrijft wat een gebruiker moet kunnen doen plus het gewenste resultaat. Daarna kan je door iteratief te werken, door te ontwerpen en bouwen em testen, de beste oplossing voor het 'probleem' proberen te maken. 

Een *User Story* volg een vaste schrijfwijze: 

![Als <gebruiker> wil ik <functionaliteit> zodat <meerwaarde>.](user-story.png)

1. Schrijf eerst wie de gebruiker is van jouw opdracht en wat de gebruiker wil bereiken, wat is de _User Goal_?
2. Schrijf een _User Story_ van een interactief element dat je wil gaan maken: `Als <gebruiker> wil ik <functionaliteit> zodat <meerwaarde>` — bespreek eventueel met een mentor of docent of dit haalbaar is deze sprint.
3. Maak een issue aan met de *User Story*. Hier ga je het ontwerp en uitwerking van de interactie in bijhouden.

#### Bronnen

- [Wat is een User Story?](https://agilescrumgroup.nl/wat-is-een-user-story/)



## Wireflow

Voor deze opdracht ga je eerst de interactie uitwerken in een Wireflow. Daarna ga je de interactie coderen met HTML, CSS en JS.

Een Wireflow toont een aantal schermen van een interactie. Het is nuttig om uit te denken wat een gebruiker te zien krijgt als die iets op een pagina doet, zoals een filter systeem gebruiken of met een carrousel verschillende plaatjes of producten bekijken.

![Wireflow schets](wireflow-uitleg.png)
_Met een Wireflow laat je zien hoe een interactie op een pagina eruit komt te zien, hier zie je het gebruiken van een zoekformulier om verhalen te vinden._

Teken een Wireflow die alle mogelijke output, de belangrijkste userflow en de interactie duidelijk maakt. Een Wireflow toont opeenvolgende wireframes met de verschillende states/schermen die een gebruiker te zien krijgt.

1. Schets alle mogelijke output (states en/of schermen) die een gebruiker te zien krijgt
2. Geef met een andere kleur de interactie aan. Op welke elementen klikt een gebruiker? Of scrollen of draggen?
3. Geef met pijlen de _User Flow_ aan
4. Geef elke state een nummer en titel
5. Voeg de wireflow toe aan het issue dat je hebt aangemaakt en bespreek het met een mentor. Schrijf de feedback die je krijgt bij het issue (of laat de mentor feedback schrijven op het issue)

### Bronnen

- [Wireflows: When, Why & How to Use Them](https://medium.com/@webkeyz/wireflows-when-why-how-to-use-them-b4c04d169f81)




## JavaScript 3 stappenplan

Voor het bouwen van de interactie heb je JavaScript nodig. Met JS kun je een *Click* of bijvoorbeeld *Drag and Drop* detecteren en daar vervolgens iets mee doen... Dit noemen we het 3 stappenplan: Eerst _selecteer_ je de elementen die je nodig hebt voor de interactie, daarna voeg je een _event_ toe om de interactie te detecteren, als laatste koppel je een _CSS class_ met een animatie of iets anders. 

1. Maak van je Wireflow een Breakdown schets met de technieken die je nodig hebt voor de interactie.
2. Gebruik het artikel *Hey designers, if you only know one thing about JavaScript, this is what I would recommend* om te onderzoeken hoe je met HTML, CSS en JS een interactie kan bouwen.
3. Voeg de Breakdown schets toe aan het issue en bespreek met een mentor of docent of dat haalbaar is. Schrijf feedback op je plan bij het issue.
4. Code code code.
 
 ### Bronnen

- [Hey designers, if you only know one thing about JavaScript, this is what I would recommend](https://css-tricks.com/videos/150-hey-designers-know-one-thing-javascript-recommend/)

-->