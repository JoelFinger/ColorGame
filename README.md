# ColorGame

Nachfolgend wurde das Vorgehen zur Umsetzung der Programmieraufgabe dokumentiert.

Vorgehen:
-Spielregeln/Aufgabe lesen und verstehen
-Klassen erarbeiten, die benötigt werden
-Öffentliche Schnittstellen überlegen


Erkenntnisse aus den Spielregeln:
Jede Karte enthält genau eine Farbe (es gibt 6 verschiedene Farben). Eine Farbe darf im Kartendeck nur einmal vorkommen.
Die Karten sind zu Beginn zugedeckt. Der "Würfel" wählt
eine zufällige Farbe. Ein Spieler nach dem anderen kommt zum Spielzug. Der Spieler darf seine Karten nur dann umdrehen, wenn
er am Zug ist und dieselbe Farbe gewürfelt hat. Wenn ein Spieler alle Karten vor sich umgedreht hat, ist das Spiel gewonnen.
Die vier Spieler Alice, Bob, Carol und Mario sind dabei fix gesetzt.


Benötigte Klassen:
-Würfel (Dice)
    -Enthält eine Methode rollDice() und gibt dabei eine Color zurück

-Farbe (Color)
    -In dieser Klasse sind die 6 Farben definiert
    -Es ist eine random()-Methode definiert, die eine zufällige Farbe zurückgibt

-Karte (Card)
    -Eine Karte enthält genau eine Farbe
    -Enthält einen Zustand: Aufgedeckt(Visible) oder Verdeckt(Hidden)

-Spieler (Player)
    -Hat 5 Karten erhalten
    -Hat einen Namen

-Spiel (Game)
    -Enthält start(), um das Spiel zu initialisieren$
        -Initialisiert die Spieler
    -Enthält playing(), um den ganzen Spielverlauf darzustellen
    -Enthält finished(), um das Spiel zu beenden
        -Soll eine Rangliste ausgeben mit dem Sieger und der Anzahl zugedeckter Karten pro Spieler
