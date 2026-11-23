// Ogni frase: [tedesco, italiano, esempio tedesco, esempio italiano, nota (facoltativa), tag di ricerca]
// TEDESCO (BETA). Gli id dei preferiti dipendono dalla categoria e dalla posizione: aggiungi le nuove frasi in fondo a ogni categoria.
window.LANG_DATA = window.LANG_DATA || {};

(function () {
var CATEGORIES = [
{ id:"sé", title:"Parlare di sé", items:[
 ["Ich komme aus…", "Vengo da… / Sono di…", "Ich komme aus Italien.", "Vengo dall'Italia.", "Con paesi e città si usa aus: Ich komme aus Rom.", "venire da provenienza origine italia"],
 ["Ich wohne in…", "Abito a / in…", "Ich wohne in einer kleinen Stadt.", "Abito in una cittadina.", "Wohnen = abitare; leben = vivere.", "abitare abito vivere città casa"],
 ["Ich arbeite als…", "Lavoro come…", "Ich arbeite als Krankenschwester.", "Lavoro come infermiera.", "Con le professioni non si usa l'articolo: Ich bin Lehrer.", "lavoro lavorare professione mestiere"],
 ["Ich bin verheiratet / ledig.", "Sono sposato / non sposato.", "Ich bin seit zwei Jahren verheiratet.", "Sono sposato da due anni.", "Ledig indica lo stato civile; Single è chi non ha un partner.", "stato civile sposato celibe nubile single"],
 ["Ich habe zwei Geschwister.", "Ho due tra fratelli e sorelle.", "Ich habe einen Bruder und eine Schwester.", "Ho un fratello e una sorella.", "Geschwister indica fratelli e sorelle insieme.", "fratelli sorelle famiglia"],
 ["In meiner Freizeit…", "Nel tempo libero…", "In meiner Freizeit lese ich gern.", "Nel tempo libero leggo volentieri.", "Dopo la prima parte della frase il verbo viene subito.", "tempo libero hobby passatempo"],
 ["Ich lerne Deutsch.", "Imparo il tedesco.", "Ich lerne seit einem Jahr Deutsch.", "Studio tedesco da un anno.", "Lernen = imparare; studieren = studiare all'università.", "imparare studiare lingua tedesco"],
 ["Ich spreche ein bisschen Deutsch.", "Parlo un po' di tedesco.", "Ich spreche ein bisschen Deutsch, aber nicht gut.", "Parlo un po' di tedesco, ma non bene.", "", "parlare lingua poco tedesco"],
 ["Ich mag…", "Mi piace…", "Ich mag Kaffee.", "Mi piace il caffè.", "Mögen = piacere, per cose e persone. Per le attività si usa gern.", "piacere mi piace gradire"],
 ["Ich … gern.", "Mi piace… (fare qualcosa)", "Ich koche gern.", "Mi piace cucinare.", "Gern va dopo il verbo: Ich lese gern.", "piace volentieri cucinare hobby"]
]},
{ id:"conoscere", title:"Conoscere qualcuno", items:[
 ["Wie geht's?", "Come va?", "Hallo Anna, wie geht's?", "Ciao Anna, come va?", "Informale. In modo formale: Wie geht es Ihnen?", "come va come stai stare salute"],
 ["Ich heiße…", "Mi chiamo…", "Ich heiße Marco.", "Mi chiamo Marco.", "Heißen = chiamarsi. Anche: Mein Name ist…", "nome chiamarsi presentarsi"],
 ["Woher kommst du?", "Di dove sei?", "Woher kommst du? — Ich komme aus Neapel.", "Di dove sei? — Sono di Napoli.", "Alla lettera: da dove vieni? Per la provenienza si usa kommen aus.", "provenienza origine di dove venire"],
 ["Freut mich!", "Piacere!", "Ich bin Sara. — Freut mich!", "Sono Sara. — Piacere!", "Anche, in modo formale: Freut mich, Sie kennenzulernen.", "piacere conoscere presentazione"],
 ["Guten Morgen / Guten Tag / Guten Abend", "Buongiorno / Buon giorno / Buonasera", "Guten Morgen, wie kann ich helfen?", "Buongiorno, come posso aiutarla?", "Guten Tag si usa durante il giorno, anche nel pomeriggio.", "saluto buongiorno buonasera buon pomeriggio salutare"],
 ["Wie alt bist du?", "Quanti anni hai?", "Wie alt bist du? — Ich bin dreißig.", "Quanti anni hai? — Ne ho trenta.", "In tedesco si dice sono trenta (ich bin dreißig), non ho trenta anni.", "età anni quanti anni"],
 ["Sprichst du Englisch?", "Parli inglese?", "Entschuldigung, sprichst du Englisch?", "Scusa, parli inglese?", "Formale: Sprechen Sie Englisch?", "parlare lingua inglese"],
 ["Ich verstehe nicht.", "Non capisco.", "Tut mir leid, ich verstehe nicht.", "Mi dispiace, non capisco.", "", "capire capisco comprendere"],
 ["Danke / Bitte", "Grazie / Prego (o per favore)", "Danke für deine Hilfe! — Bitte!", "Grazie per il tuo aiuto! — Prego!", "Bitte significa sia per favore sia prego.", "grazie prego per favore ringraziare"],
 ["Tschüss! / Auf Wiedersehen!", "Ciao! / Arrivederci!", "Auf Wiedersehen, bis morgen!", "Arrivederci, a domani!", "Tschüss è informale; Auf Wiedersehen è più formale.", "salutare arrivederci ciao addio"],
 ["Gute Nacht", "Buonanotte", "Gute Nacht, schlaf gut.", "Buonanotte, dormi bene.", "Si dice prima di andare a dormire, non come saluto generico serale.", "buonanotte notte dormire saluto"],
 ["Hallo!", "Ciao! / Salve!", "Hallo, ich bin Marco.", "Ciao, sono Marco.", "Hallo è informale. In Baviera e in Austria si sente anche Servus o Grüß Gott.", "ciao salve saluto"],
 ["du oder Sie?", "tu o Lei?", "Darf ich dich duzen?", "Posso darti del tu?", "Sie si usa con sconosciuti e nei contesti formali; du con amici, famiglia e coetanei.", "tu lei formale informale du sie duzen"],
 ["Das ist mein Freund / meine Freundin.", "Questo è il mio amico / la mia amica.", "Das ist mein Freund Paul.", "Questo è il mio amico Paul.", "Freund e Freundin possono significare anche fidanzato e fidanzata.", "amico amica presentare fidanzato"],
 ["Schön, dich kennenzulernen.", "Piacere di conoscerti.", "Schön, dich kennenzulernen!", "Piacere di conoscerti!", "Con Sie: Schön, Sie kennenzulernen.", "piacere conoscere incontrare"]
]},
{ id:"rapporti", title:"Rapporti e reazioni", items:[
 ["Vielen Dank!", "Grazie mille!", "Vielen Dank für Ihre Hilfe!", "Grazie mille per il suo aiuto!", "Varianti: Danke schön, Danke sehr.", "grazie mille ringraziare"],
 ["Entschuldigung", "Scusi / Scusa", "Entschuldigung, wo ist der Bahnhof?", "Scusi, dov'è la stazione?", "Serve per attirare l'attenzione o per scusarsi. Per un errore più serio: Es tut mir leid.", "scusa scusi permesso"],
 ["Es tut mir leid.", "Mi dispiace.", "Es tut mir leid, ich bin zu spät.", "Mi dispiace, sono in ritardo.", "Alla lettera: mi fa dispiacere.", "dispiacere scusa ritardo"],
 ["Kein Problem.", "Nessun problema.", "Danke! — Kein Problem.", "Grazie! — Nessun problema.", "", "problema prego di niente"],
 ["Viel Glück!", "Buona fortuna!", "Viel Glück bei der Prüfung!", "Buona fortuna per l'esame!", "", "fortuna auguri esame"],
 ["Herzlichen Glückwunsch!", "Congratulazioni! / Auguri!", "Herzlichen Glückwunsch zum Geburtstag!", "Tanti auguri di buon compleanno!", "Si usa per compleanni, nascite e successi.", "auguri compleanno congratulazioni complimenti"],
 ["Alles Gute!", "Tanti auguri! / Il meglio per te!", "Alles Gute zum Geburtstag!", "Tanti auguri per il tuo compleanno!", "", "auguri tutto il bene compleanno"],
 ["Gute Besserung!", "Guarisci presto!", "Du bist krank? Gute Besserung!", "Sei malato? Guarisci presto!", "", "guarire malattia auguri"],
 ["Prost!", "Salute! (brindisi)", "Prost! Auf dich!", "Salute! A te!", "Si dice facendo un brindisi.", "brindisi salute cin cin"],
 ["Guten Appetit!", "Buon appetito!", "Guten Appetit! — Danke, gleichfalls!", "Buon appetito! — Grazie, altrettanto!", "Gleichfalls = altrettanto.", "buon appetito mangiare"]
]},
{ id:"proporre", title:"Organizzarsi e proporre", items:[
 ["Hast du Lust, … zu …?", "Ti va di…?", "Hast du Lust, ins Kino zu gehen?", "Ti va di andare al cinema?", "Dopo la virgola si usa zu + infinito.", "ti va voglia proporre invito"],
 ["Wollen wir…?", "Vogliamo…?", "Wollen wir einen Kaffee trinken?", "Vogliamo bere un caffè?", "Il verbo sta all'inizio e l'infinito va in fondo.", "vogliamo proporre andiamo"],
 ["Lass uns… gehen.", "Andiamo a… / Dai, …", "Lass uns spazieren gehen.", "Andiamo a fare una passeggiata.", "Lass uns + infinito in fondo alla frase.", "dai andiamo proposta passeggiata"],
 ["Hast du am Samstag Zeit?", "Sei libero sabato?", "Hast du am Samstag Zeit?", "Sei libero sabato?", "Alla lettera: hai tempo sabato?", "libero tempo sabato appuntamento"],
 ["Wann treffen wir uns?", "Quando ci vediamo?", "Wann treffen wir uns? Um acht?", "Quando ci vediamo? Alle otto?", "Sich treffen = incontrarsi, vedersi.", "incontrarsi vedersi quando appuntamento"],
 ["Wo treffen wir uns?", "Dove ci vediamo?", "Wo treffen wir uns? Am Bahnhof?", "Dove ci vediamo? In stazione?", "", "dove incontrarsi vederci"],
 ["Ich lade dich ein.", "Ti invito.", "Ich lade dich zum Essen ein.", "Ti invito a cena.", "Einladen è un verbo separabile: ich lade … ein.", "invitare invito offrire cena"]
]},
{ id:"accettare", title:"Accettare e rifiutare", items:[
 ["Gern!", "Volentieri!", "Kommst du mit? — Gern!", "Vieni? — Volentieri!", "", "volentieri accettare sì"],
 ["Das klingt gut.", "Mi sembra una buona idea.", "Ein Spaziergang? Das klingt gut.", "Una passeggiata? Mi sembra una buona idea.", "", "sembra bene idea accettare"],
 ["Das passt mir.", "Per me va bene.", "Samstag um acht? Das passt mir.", "Sabato alle otto? Per me va bene.", "", "va bene orario comodo"],
 ["Leider kann ich nicht.", "Purtroppo non posso.", "Leider kann ich morgen nicht.", "Purtroppo domani non posso.", "Leider = purtroppo.", "purtroppo non posso rifiutare"],
 ["Vielleicht ein andermal.", "Magari un'altra volta.", "Heute geht es nicht. Vielleicht ein andermal.", "Oggi non va. Magari un'altra volta.", "", "magari altra volta rifiutare"],
 ["Ich habe schon etwas vor.", "Ho già un impegno.", "Am Freitag habe ich schon etwas vor.", "Venerdì ho già un impegno.", "Etwas vorhaben = avere in programma qualcosa.", "impegno programma già"]
]},
{ id:"futuro", title:"Progetti e futuro", items:[
 ["Ich habe vor, … zu …", "Ho intenzione di…", "Ich habe vor, im Sommer nach Berlin zu fahren.", "Ho intenzione di andare a Berlino in estate.", "Vorhaben è separabile. Per il futuro si usa spesso il presente con un'indicazione di tempo.", "intenzione progetto futuro vorhaben"],
 ["Ich möchte … werden.", "Vorrei diventare…", "Ich möchte Ärztin werden.", "Vorrei diventare dottoressa.", "Werden = diventare.", "diventare vorrei professione futuro"],
 ["Nächste Woche fahre ich…", "La prossima settimana vado…", "Nächste Woche fahre ich nach München.", "La prossima settimana vado a Monaco.", "Con il tempo all'inizio, il verbo viene subito dopo.", "futuro prossima settimana viaggio"],
 ["Vielleicht…", "Forse…", "Vielleicht bleibe ich zu Hause.", "Forse resto a casa.", "Dopo vielleicht il verbo viene subito.", "forse magari probabilmente"],
 ["Ich weiß es noch nicht.", "Non lo so ancora.", "Ich weiß noch nicht, was ich mache.", "Non so ancora che cosa faccio.", "", "non so ancora decisione"],
 ["Ich freue mich auf…", "Non vedo l'ora di…", "Ich freue mich auf den Urlaub.", "Non vedo l'ora che arrivi la vacanza.", "Sich freuen auf = attendere con piacere qualcosa che deve ancora accadere.", "non vedo l'ora felice attesa vacanza"]
]},
{ id:"gusti", title:"Gusti ed emozioni", items:[
 ["Ich fühle mich…", "Mi sento…", "Ich fühle mich müde.", "Mi sento stanco.", "", "sentirsi stanco sensazioni"],
 ["Mir ist kalt / heiß.", "Ho freddo / caldo.", "Mir ist kalt. Kannst du das Fenster schließen?", "Ho freddo. Puoi chiudere la finestra?", "Alla lettera: a me è freddo.", "freddo caldo temperatura"],
 ["Ich habe Hunger / Durst.", "Ho fame / sete.", "Ich habe Hunger. Gehen wir essen?", "Ho fame. Andiamo a mangiare?", "Qui si usa haben, come in italiano.", "fame sete mangiare bere"],
 ["Ich bin glücklich / traurig / wütend.", "Sono felice / triste / arrabbiato.", "Ich bin heute sehr glücklich.", "Oggi sono molto felice.", "", "felice triste arrabbiato emozioni"],
 ["Das gefällt mir.", "Mi piace. (ciò che vedo o sento)", "Das Bild gefällt mir.", "Il quadro mi piace.", "Gefallen vuole il dativo: mir, dir, ihm.", "piacere gradire dativo"],
 ["Ich finde das …", "Lo trovo…", "Ich finde das Buch interessant.", "Trovo il libro interessante.", "Finden = trovare, e anche pensare.", "trovo penso opinione interessante"],
 ["Ich bin müde.", "Sono stanco.", "Ich bin sehr müde, ich gehe schlafen.", "Sono molto stanco, vado a dormire.", "", "stanco stanchezza sonno"],
 ["Ich bin nervös.", "Sono nervoso / agitato.", "Vor der Prüfung bin ich immer nervös.", "Prima dell'esame sono sempre agitato.", "", "nervoso agitato ansia"],
 ["Ich langweile mich.", "Mi annoio.", "Ich langweile mich zu Hause.", "Mi annoio a casa.", "Verbo riflessivo: sich langweilen.", "annoiare noia riflessivo"]
]},
{ id:"opinioni", title:"Opinioni, dubbi e decisioni", items:[
 ["Ich glaube, dass…", "Penso che… / Credo che…", "Ich glaube, dass es regnet.", "Credo che piova.", "Dopo dass il verbo va in fondo alla frase.", "pensare credere opinione dass"],
 ["Meiner Meinung nach…", "Secondo me…", "Meiner Meinung nach ist das richtig.", "Secondo me è giusto.", "", "secondo me opinione parere"],
 ["Ich bin dafür / dagegen.", "Sono a favore / contrario.", "Ich bin dafür, dass wir früher anfangen.", "Sono a favore di cominciare prima.", "", "favore contro opinione"],
 ["Ich bin nicht sicher.", "Non sono sicuro.", "Ich bin nicht sicher, ob er kommt.", "Non sono sicuro che venga.", "Ob = se (dubbio); il verbo va in fondo.", "sicuro dubbio ob se"],
 ["Das stimmt.", "È vero. / Giusto.", "Das stimmt, du hast recht.", "È vero, hai ragione.", "", "vero giusto esatto"],
 ["Du hast recht.", "Hai ragione.", "Da hast du recht.", "Su questo hai ragione.", "", "ragione avere ragione"],
 ["Ich bin anderer Meinung.", "Non sono d'accordo.", "Da bin ich anderer Meinung.", "Su questo non sono d'accordo.", "", "non d'accordo opinione"],
 ["Ich bin einverstanden.", "Sono d'accordo.", "Gut, ich bin einverstanden.", "Va bene, sono d'accordo.", "", "d'accordo accetto"],
 ["Das hängt davon ab.", "Dipende.", "Wie teuer ist das? — Das hängt davon ab.", "Quanto costa? — Dipende.", "Abhängen è separabile: hängt … ab.", "dipende dipendere"],
 ["Ich habe mich entschieden.", "Ho deciso.", "Ich habe mich für das blaue Auto entschieden.", "Ho scelto l'auto blu.", "Sich entscheiden für = decidersi per.", "decidere scelta decisione"]
]},
{ id:"bisogni", title:"Volere e avere bisogno", items:[
 ["Ich brauche…", "Ho bisogno di…", "Ich brauche Hilfe.", "Ho bisogno di aiuto.", "Brauchen vuole l'accusativo.", "bisogno servire occorrere"],
 ["Ich möchte…", "Vorrei…", "Ich möchte ein Wasser, bitte.", "Vorrei un'acqua, per favore.", "Möchten è la forma gentile di mögen.", "vorrei desiderio ordinare"],
 ["Ich will…", "Voglio…", "Ich will nach Hause.", "Voglio andare a casa.", "Più diretto di ich möchte: usalo con chi conosci.", "volere voglio"],
 ["Ich muss…", "Devo…", "Ich muss morgen früh aufstehen.", "Domani devo alzarmi presto.", "Dopo muss l'infinito va in fondo.", "devo dovere obbligo"],
 ["Ich darf nicht…", "Non posso / Non mi è permesso…", "Hier darf man nicht rauchen.", "Qui non si può fumare.", "Dürfen = avere il permesso; können = essere in grado.", "permesso vietato non posso"],
 ["Ich kann…", "Posso… / So…", "Ich kann gut schwimmen.", "So nuotare bene.", "Können = potere e sapere fare qualcosa.", "sapere potere abilità"]
]},
{ id:"passato", title:"Raccontare il passato", items:[
 ["Ich bin … gewesen.", "Sono stato…", "Ich bin gestern im Kino gewesen.", "Ieri sono stato al cinema.", "Nel parlato si dice spesso anche: Ich war im Kino.", "stato essere passato gewesen war"],
 ["Ich habe … gemacht.", "Ho fatto…", "Was hast du am Wochenende gemacht?", "Che cosa hai fatto nel fine settimana?", "Perfekt: haben + participio passato (gemacht).", "fatto fare passato perfekt"],
 ["Ich bin nach… gefahren.", "Sono andato a… (con un mezzo)", "Wir sind nach Italien gefahren.", "Siamo andati in Italia.", "I verbi di movimento usano sein: ich bin gefahren.", "andato viaggiare passato sein"],
 ["Ich habe… gesehen.", "Ho visto…", "Ich habe einen guten Film gesehen.", "Ho visto un bel film.", "sehen - sah - gesehen.", "visto vedere film passato"],
 ["Ich habe… gegessen.", "Ho mangiato…", "Wir haben in einem Restaurant gegessen.", "Abbiamo mangiato in un ristorante.", "essen - aß - gegessen.", "mangiato mangiare passato"],
 ["Ich habe lange geschlafen.", "Ho dormito a lungo.", "Am Sonntag habe ich lange geschlafen.", "Domenica ho dormito a lungo.", "schlafen - schlief - geschlafen.", "dormire dormito passato"],
 ["Es war schön.", "È stato bello.", "Der Urlaub war wirklich schön.", "La vacanza è stata proprio bella.", "War = passato di sein, molto usato nel parlato.", "bello stato passato vacanza"],
 ["Ich habe… getroffen.", "Ho incontrato…", "Gestern habe ich Anna getroffen.", "Ieri ho incontrato Anna.", "treffen - traf - getroffen.", "incontrato incontrare passato"],
 ["Ich bin aufgestanden.", "Mi sono alzato.", "Ich bin um sieben Uhr aufgestanden.", "Mi sono alzato alle sette.", "Con i verbi separabili il ge- va in mezzo: auf-ge-standen.", "alzato alzarsi passato"],
 ["Ich habe angerufen.", "Ho telefonato.", "Ich habe dich gestern angerufen.", "Ti ho telefonato ieri.", "an-ge-rufen: il ge- va in mezzo nei verbi separabili.", "telefonato chiamato passato"]
]},
{ id:"routine", title:"Routine e cambiamenti", items:[
 ["Ich frühstücke um acht.", "Faccio colazione alle otto.", "Ich frühstücke immer um acht Uhr.", "Faccio sempre colazione alle otto.", "", "colazione mattina"],
 ["Ich gehe zur Arbeit.", "Vado al lavoro.", "Ich gehe zu Fuß zur Arbeit.", "Vado al lavoro a piedi.", "Zu Fuß = a piedi.", "lavoro andare piedi"],
 ["Ich fahre mit dem Bus.", "Vado in autobus.", "Ich fahre jeden Tag mit dem Bus.", "Vado ogni giorno in autobus.", "Con i mezzi: mit dem Bus, mit dem Zug, mit dem Auto.", "autobus mezzi trasporto"],
 ["Ich gehe ins Bett.", "Vado a letto.", "Ich gehe um elf Uhr ins Bett.", "Vado a letto alle undici.", "", "letto dormire sera"],
 ["Ich putze mir die Zähne.", "Mi lavo i denti.", "Ich putze mir zweimal am Tag die Zähne.", "Mi lavo i denti due volte al giorno.", "Zähne putzen = lavarsi i denti.", "denti lavare spazzolino"],
 ["Ich dusche jeden Morgen.", "Faccio la doccia ogni mattina.", "Ich dusche kurz und frühstücke dann.", "Faccio una doccia veloce e poi colazione.", "", "doccia lavarsi mattina"],
 ["Ich koche zu Hause.", "Cucino a casa.", "Am Wochenende koche ich gern.", "Nel fine settimana cucino volentieri.", "", "cucinare cucina casa"],
 ["Ich lese jeden Abend.", "Leggo ogni sera.", "Ich lese jeden Abend eine halbe Stunde.", "Leggo ogni sera mezz'ora.", "", "leggere libro sera"],
 ["Ich gehe einkaufen.", "Vado a fare la spesa.", "Heute Nachmittag gehe ich einkaufen.", "Oggi pomeriggio vado a fare la spesa.", "Einkaufen gehen = andare a fare spese.", "spesa fare la spesa"]
]},
{ id:"provare", title:"Provare e riuscire", items:[
 ["Ich versuche…", "Cerco di… / Provo a…", "Ich versuche, jeden Tag Deutsch zu lernen.", "Cerco di studiare tedesco ogni giorno.", "Dopo versuchen: zu + infinito.", "provare cercare di tentare"],
 ["Ich kann das noch nicht.", "Non ci riesco ancora.", "Ich kann das noch nicht, aber ich übe.", "Non ci riesco ancora, ma mi esercito.", "Noch nicht = non ancora.", "riuscire non riesco"],
 ["Das ist schwer / leicht.", "È difficile / facile.", "Deutsch ist nicht leicht, aber interessant.", "Il tedesco non è facile, ma interessante.", "", "difficile facile"],
 ["Ich übe jeden Tag.", "Mi esercito ogni giorno.", "Ich übe jeden Tag zehn Minuten.", "Mi esercito ogni giorno dieci minuti.", "", "esercitarsi allenarsi praticare"],
 ["Ich verstehe schon etwas.", "Qualcosa capisco già.", "Ich verstehe schon etwas, aber ich spreche noch wenig.", "Qualcosa capisco già, ma parlo ancora poco.", "", "capire già qualcosa"],
 ["Ich werde besser.", "Sto migliorando.", "Mein Deutsch wird langsam besser.", "Il mio tedesco sta lentamente migliorando.", "Werden + aggettivo = diventare.", "migliorare meglio"]
]},
{ id:"aiuto", title:"Chiedere e offrire aiuto", items:[
 ["Können Sie mir helfen?", "Può aiutarmi?", "Entschuldigung, können Sie mir helfen?", "Scusi, può aiutarmi?", "Con sconosciuti e in contesti formali si usa Sie.", "aiutare aiuto formale"],
 ["Kannst du mir helfen?", "Puoi aiutarmi?", "Kannst du mir bitte helfen?", "Puoi aiutarmi, per favore?", "Con amici e persone a cui dai del tu.", "aiutare aiuto informale"],
 ["Könnten Sie das bitte wiederholen?", "Potrebbe ripeterlo, per favore?", "Könnten Sie das bitte wiederholen?", "Potrebbe ripeterlo, per favore?", "Könnten è una forma molto gentile.", "ripetere ripeti gentile"],
 ["Wie bitte?", "Come, scusi? / Prego?", "Wie bitte? Ich habe Sie nicht verstanden.", "Come, scusi? Non l'ho capita.", "Si usa per chiedere di ripetere.", "ripetere non capito come"],
 ["Können Sie langsamer sprechen?", "Può parlare più lentamente?", "Können Sie bitte langsamer sprechen?", "Può parlare più lentamente, per favore?", "", "lentamente piano parlare"],
 ["Was bedeutet … ?", "Che cosa significa…?", "Was bedeutet das Wort „Heimweh“?", "Che cosa significa la parola «Heimweh»?", "", "significare significato parola"],
 ["Wie sagt man … auf Deutsch?", "Come si dice… in tedesco?", "Wie sagt man „thank you“ auf Deutsch?", "Come si dice «thank you» in tedesco?", "", "come si dice tradurre"],
 ["Wie schreibt man das?", "Come si scrive?", "Wie schreibt man Ihren Namen?", "Come si scrive il suo nome?", "", "scrivere come si scrive spelling"],
 ["Können Sie mir den Weg zeigen?", "Può indicarmi la strada?", "Können Sie mir den Weg zum Bahnhof zeigen?", "Può indicarmi la strada per la stazione?", "", "strada indicazioni stazione"]
]},
{ id:"viaggi", title:"Spostamenti e tempo", items:[
 ["Wo ist der Bahnhof?", "Dov'è la stazione?", "Entschuldigung, wo ist der Bahnhof?", "Scusi, dov'è la stazione?", "Bahnhof è maschile: der Bahnhof.", "stazione dove treno"],
 ["Wie komme ich zum…?", "Come arrivo a…?", "Wie komme ich zum Flughafen?", "Come arrivo all'aeroporto?", "Zum = zu + dem (maschile e neutro); zur = zu + der (femminile).", "arrivare strada come arrivo aeroporto"],
 ["Geradeaus, dann links.", "Sempre dritto, poi a sinistra.", "Gehen Sie geradeaus und dann links.", "Vada dritto e poi a sinistra.", "Rechts = destra, links = sinistra.", "dritto destra sinistra indicazioni"],
 ["Eine Fahrkarte nach…, bitte.", "Un biglietto per…, per favore.", "Eine Fahrkarte nach Berlin, bitte.", "Un biglietto per Berlino, per favore.", "Fahrkarte e Ticket si usano entrambi.", "biglietto treno acquistare"],
 ["Einmal hin und zurück, bitte.", "Andata e ritorno, per favore.", "Einmal hin und zurück nach Wien, bitte.", "Andata e ritorno per Vienna, per favore.", "Einmal = una volta, un biglietto.", "andata ritorno biglietto"],
 ["Von welchem Gleis fährt der Zug?", "Da quale binario parte il treno?", "Von welchem Gleis fährt der Zug nach Hamburg?", "Da quale binario parte il treno per Amburgo?", "Gleis = binario.", "binario treno partenza"],
 ["Der Zug hat Verspätung.", "Il treno è in ritardo.", "Der Zug hat zehn Minuten Verspätung.", "Il treno ha dieci minuti di ritardo.", "", "ritardo treno verspätung"],
 ["Ich habe mich verlaufen.", "Mi sono perso.", "Ich habe mich verlaufen. Wo ist die Stadtmitte?", "Mi sono perso. Dov'è il centro?", "Sich verlaufen = perdersi a piedi; sich verfahren = con un veicolo.", "perso perdersi strada orientarsi"],
 ["Ich hätte gern ein Zimmer.", "Vorrei una camera.", "Ich hätte gern ein Zimmer für zwei Nächte.", "Vorrei una camera per due notti.", "Ich hätte gern è una forma cortese per chiedere o ordinare.", "camera albergo hotel prenotare"],
 ["Ich habe ein Zimmer reserviert.", "Ho prenotato una camera.", "Ich habe ein Zimmer auf den Namen Rossi reserviert.", "Ho prenotato una camera a nome Rossi.", "", "prenotazione hotel nome"],
 ["Wie spät ist es?", "Che ore sono?", "Entschuldigung, wie spät ist es?", "Scusi, che ore sono?", "Anche: Wie viel Uhr ist es?", "ore orario tempo che ora è"],
 ["Es ist halb drei.", "Sono le due e mezza.", "Es ist halb drei. Wir sind spät dran.", "Sono le due e mezza. Siamo in ritardo.", "Attenzione: halb drei = mezz'ora prima delle tre, cioè 2:30.", "ore mezza orario halb"],
 ["Am Montag / Am Freitag…", "lunedì / venerdì… (in quel giorno)", "Am Freitag habe ich frei.", "Venerdì ho libero.", "Con i giorni si usa am. Giorni: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.", "giorni settimana lunedì martedì mercoledì giovedì venerdì sabato domenica"],
 ["Im Januar / Im Juli…", "a gennaio / a luglio…", "Im Juli fahre ich ans Meer.", "A luglio vado al mare.", "Con i mesi si usa im. Mesi: Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.", "mesi gennaio febbraio calendario"],
 ["heute / morgen / gestern", "oggi / domani / ieri", "Gestern war ich im Kino, morgen bleibe ich zu Hause.", "Ieri ero al cinema, domani resto a casa.", "", "oggi domani ieri tempo"],
 ["Zahlen von 1 bis 10", "Numeri da 1 a 10", "Eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn.", "Uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci.", "", "numeri contare uno due tre"],
 ["Muss ich diese Fahrkarte entwerten?", "Devo convalidare questo biglietto?", "Muss ich diese Fahrkarte vor der Fahrt entwerten?", "Devo convalidare questo biglietto prima del viaggio?", "Eine Fahrkarte entwerten = convalidare un biglietto.", "convalidare convalida timbrare biglietto viaggio treno autobus"],
 ["Gilt diese Fahrkarte auch im Bus?", "Questo biglietto vale anche sull'autobus?", "Gilt diese Fahrkarte auch im Bus oder nur in der U-Bahn?", "Questo biglietto vale anche sull'autobus o solo sulla metropolitana?", "Gelten = essere valido, valere: die Fahrkarte gilt.", "valido validità vale biglietto autobus metro metropolitana"],
 ["Wann fährt der letzte Zug?", "Quando parte l'ultimo treno?", "Wann fährt der letzte Zug zurück in die Innenstadt?", "Quando parte l'ultimo treno per tornare in centro?", "Der letzte Zug = l'ultimo treno. Innenstadt = centro città.", "ultimo ultima treno corsa ritorno tornare notte orario"],
 ["Wo kann ich meine Fahrkarte kaufen?", "Dove posso comprare il biglietto?", "Wo kann ich meine Fahrkarte kaufen? Gibt es hier einen Automaten?", "Dove posso comprare il biglietto? C'è una biglietteria automatica qui?", "Der Fahrkartenautomat = la biglietteria automatica.", "comprare acquistare acquisto biglietto biglietteria automatica distributore"]
]},
{ id:"cibo", title:"Cibo e ristoranti", items:[
 ["Ich hätte gern…", "Vorrei…", "Ich hätte gern einen Kaffee.", "Vorrei un caffè.", "", "vorrei ordinare cibo bere"],
 ["Die Speisekarte, bitte.", "Il menù, per favore.", "Könnten wir die Speisekarte haben?", "Potremmo avere il menù?", "Speisekarte = menù del cibo; Getränkekarte = lista delle bevande.", "menu menù carta ristorante"],
 ["Was empfehlen Sie?", "Che cosa consiglia?", "Was empfehlen Sie heute?", "Che cosa consiglia oggi?", "", "consigliare consiglio ristorante"],
 ["Ich bin Vegetarier / Vegetarierin.", "Sono vegetariano / vegetariana.", "Ich bin Vegetarierin. Gibt es etwas ohne Fleisch?", "Sono vegetariana. C'è qualcosa senza carne?", "Vegetarier = maschile; Vegetarierin = femminile.", "vegetariano vegetariana carne"],
 ["Ich bin allergisch gegen…", "Sono allergico a…", "Ich bin allergisch gegen Nüsse.", "Sono allergico alle noci.", "Si dice allergisch gegen + accusativo.", "allergia allergico noci"],
 ["Zahlen, bitte!", "Il conto, per favore!", "Wir möchten zahlen, bitte.", "Vorremmo pagare, per favore.", "Anche: Die Rechnung, bitte.", "conto pagare ristorante"],
 ["Zusammen oder getrennt?", "Insieme o separati?", "Zahlen Sie zusammen oder getrennt?", "Pagate insieme o separatamente?", "Domanda tipica del cameriere.", "conto pagare separati"],
 ["Das schmeckt gut.", "È buono.", "Die Suppe schmeckt sehr gut.", "La zuppa è molto buona.", "Schmecken = avere sapore, essere buono da mangiare.", "buono sapore assaggiare"],
 ["Was gibt es zum Frühstück?", "Che cosa c'è per colazione?", "Was gibt es heute zum Frühstück?", "Che cosa c'è oggi per colazione?", "Es gibt = c'è / ci sono.", "colazione mattina c'è"],
 ["Ein Glas Wasser, bitte.", "Un bicchiere d'acqua, per favore.", "Ein Glas Wasser und einen Kaffee, bitte.", "Un bicchiere d'acqua e un caffè, per favore.", "", "acqua bicchiere bere"],
 ["Noch ein Bier, bitte.", "Un'altra birra, per favore.", "Noch ein Bier und zwei Wasser, bitte.", "Un'altra birra e due acque, per favore.", "Noch ein = un altro.", "ancora un altro birra"],
 ["Mahlzeit!", "Buon appetito! (pausa pranzo)", "Mahlzeit! — Danke, ebenfalls!", "Buon appetito! — Grazie, altrettanto!", "Si usa soprattutto sul lavoro all'ora di pranzo.", "buon pranzo lavoro"]
]},
{ id:"acquisti", title:"Acquisti e alloggio", items:[
 ["Wie viel kostet das?", "Quanto costa?", "Wie viel kostet diese Jacke?", "Quanto costa questa giacca?", "Al plurale: Wie viel kosten die Schuhe?", "costa prezzo quanto"],
 ["Das ist zu teuer.", "È troppo caro.", "Das ist mir zu teuer.", "Per me è troppo caro.", "", "caro costoso prezzo"],
 ["Haben Sie das in einer anderen Größe?", "Lo avete in un'altra taglia?", "Haben Sie das in Größe M?", "Lo avete in taglia M?", "Größe = taglia o misura.", "taglia misura vestiti"],
 ["Kann ich das anprobieren?", "Posso provarlo?", "Kann ich diese Hose anprobieren?", "Posso provare questi pantaloni?", "Anprobieren è separabile: ich probiere … an.", "provare vestito camerino"],
 ["Kann ich mit Karte zahlen?", "Posso pagare con la carta?", "Kann ich hier mit Karte zahlen?", "Posso pagare con la carta qui?", "In contanti si dice bar.", "pagare carta contanti"],
 ["Ich nehme es.", "Lo prendo.", "Die Jacke gefällt mir. Ich nehme sie.", "La giacca mi piace. La prendo.", "", "prendere comprare acquisto"],
 ["Ich schaue mich nur um.", "Sto solo dando un'occhiata.", "Danke, ich schaue mich nur um.", "Grazie, sto solo dando un'occhiata.", "", "occhiata guardare negozio"],
 ["Wann schließt das Geschäft?", "A che ora chiude il negozio?", "Wann schließt das Geschäft heute?", "A che ora chiude oggi il negozio?", "Per l'apertura: Wann öffnet…?", "apertura chiusura orari negozio"],
 ["Die Quittung, bitte.", "La ricevuta, per favore.", "Kann ich bitte die Quittung haben?", "Posso avere la ricevuta, per favore?", "Anche: der Kassenbon.", "ricevuta scontrino"]
]},
{ id:"problemi", title:"Problemi e imprevisti", items:[
 ["Ich habe mein Handy verloren.", "Ho perso il telefono.", "Ich habe mein Handy im Bus verloren.", "Ho perso il telefono sull'autobus.", "Verlieren = perdere, anche una partita.", "perso perdere telefono smarrito"],
 ["Ich brauche einen Arzt.", "Ho bisogno di un medico.", "Ich brauche sofort einen Arzt.", "Ho bisogno subito di un medico.", "", "medico dottore urgente"],
 ["Mir tut der Kopf weh.", "Mi fa male la testa.", "Mir tut der Kopf weh. Haben Sie eine Tablette?", "Mi fa male la testa. Ha una pastiglia?", "Alla lettera: a me fa male la testa. Anche: Ich habe Kopfschmerzen.", "mal di testa dolore"],
 ["Ich bin krank.", "Sono malato.", "Ich bin krank und bleibe heute zu Hause.", "Sono malato e oggi resto a casa.", "", "malato malattia"],
 ["Das funktioniert nicht.", "Non funziona.", "Das Internet funktioniert nicht.", "Internet non funziona.", "", "funziona guasto rotto"],
 ["Es ist kaputt.", "È rotto.", "Mein Handy ist kaputt.", "Il mio telefono è rotto.", "", "rotto guasto"],
 ["Ich habe meinen Schlüssel vergessen.", "Ho dimenticato la chiave.", "Ich habe meinen Schlüssel zu Hause vergessen.", "Ho dimenticato la chiave a casa.", "", "dimenticare chiave"],
 ["Rufen Sie bitte die Polizei!", "Chiami la polizia, per favore!", "Rufen Sie bitte die Polizei!", "Chiami la polizia, per favore!", "In Germania: 110 polizia, 112 soccorso e vigili del fuoco.", "polizia emergenza aiuto"],
 ["Ich hatte einen Unfall.", "Ho avuto un incidente.", "Ich hatte gestern einen Unfall.", "Ieri ho avuto un incidente.", "Hatte = passato di haben.", "incidente"]
]},
{ id:"collegare", title:"Collegare le idee", items:[
 ["weil", "perché", "Ich bleibe zu Hause, weil ich müde bin.", "Resto a casa perché sono stanco.", "Dopo weil il verbo va in fondo.", "perché causa weil"],
 ["denn", "perché (spiega)", "Ich bleibe zu Hause, denn ich bin müde.", "Resto a casa, perché sono stanco.", "Dopo denn l'ordine delle parole non cambia.", "perché causa denn"],
 ["aber", "ma", "Ich möchte kommen, aber ich habe keine Zeit.", "Vorrei venire, ma non ho tempo.", "", "ma però aber"],
 ["und", "e", "Ich trinke Kaffee und esse Brot.", "Bevo caffè e mangio pane.", "", "e congiunzione und"],
 ["oder", "o", "Tee oder Kaffee?", "Tè o caffè?", "", "o oppure oder"],
 ["deshalb", "per questo", "Es regnet, deshalb bleibe ich zu Hause.", "Piove, per questo resto a casa.", "Dopo deshalb il verbo viene subito.", "per questo quindi deshalb"],
 ["wenn", "se / quando", "Wenn es regnet, bleibe ich zu Hause.", "Se piove, resto a casa.", "Dopo wenn il verbo va in fondo; la frase principale comincia col verbo.", "se quando wenn"],
 ["dass", "che", "Ich glaube, dass er recht hat.", "Credo che abbia ragione.", "Dopo dass il verbo va in fondo.", "che congiunzione dass"],
 ["obwohl", "anche se", "Ich gehe spazieren, obwohl es regnet.", "Vado a passeggio anche se piove.", "Dopo obwohl il verbo va in fondo.", "anche se nonostante obwohl"],
 ["zuerst… dann…", "prima… poi…", "Zuerst esse ich, dann gehe ich.", "Prima mangio, poi vado.", "Dopo zuerst e dann il verbo viene subito.", "prima poi sequenza"],
 ["außerdem", "inoltre", "Es ist günstig. Außerdem ist es nah.", "È economico. Inoltre è vicino.", "", "inoltre anche"],
 ["trotzdem", "comunque / lo stesso", "Es regnet, trotzdem gehe ich.", "Piove, ma io vado lo stesso.", "", "comunque lo stesso trotzdem"]
]},
{ id:"phrasal", title:"Verbi separabili", items:[
 ["aufstehen", "alzarsi dal letto", "Ich stehe um sieben Uhr auf.", "Mi alzo alle sette.", "Verbo separabile: il prefisso va in fondo alla frase.", "alzarsi alzare letto mattina svegliarsi"],
 ["anrufen", "telefonare / chiamare", "Ich rufe dich morgen an.", "Ti chiamo domani.", "Verbo separabile: rufe … an.", "telefonare chiamare telefono"],
 ["einkaufen", "fare la spesa", "Wir kaufen am Samstag ein.", "Facciamo la spesa il sabato.", "Verbo separabile: kaufen … ein.", "spesa comprare acquisti negozio"],
 ["mitkommen", "venire con", "Kommst du mit?", "Vieni anche tu?", "Verbo separabile: komm … mit.", "venire con accompagnare unirsi"],
 ["anfangen", "cominciare", "Der Film fängt um acht an.", "Il film comincia alle otto.", "Verbo separabile e irregolare: fängt … an.", "cominciare iniziare inizio"],
 ["ankommen", "arrivare", "Wann kommst du an?", "Quando arrivi?", "Verbo separabile: komm … an.", "arrivare arrivo"],
 ["aufmachen / zumachen", "aprire / chiudere", "Machst du bitte das Fenster auf?", "Apri la finestra, per favore?", "Verbo separabile: mache … auf.", "aprire chiudere finestra porta"],
 ["einsteigen / aussteigen", "salire / scendere (da un mezzo)", "Wir steigen am Hauptbahnhof aus.", "Scendiamo alla stazione centrale.", "Verbi separabili: steige … ein / steige … aus.", "salire scendere autobus treno"],
 ["umsteigen", "cambiare (treno, autobus)", "In Köln müssen wir umsteigen.", "A Colonia dobbiamo cambiare.", "Verbo separabile: steigen … um.", "cambiare treno coincidenza"],
 ["abfahren", "partire (di un mezzo)", "Der Zug fährt um acht Uhr ab.", "Il treno parte alle otto.", "Verbo separabile: fährt … ab. Per le persone: abreisen.", "partire partenza treno autobus"],
 ["anziehen / ausziehen", "mettersi / togliersi (vestiti)", "Zieh deine Jacke an, es ist kalt.", "Mettiti la giacca, fa freddo.", "Ausziehen significa anche traslocare.", "indossare vestire mettere togliere giacca"],
 ["sich anmelden", "iscriversi / registrarsi", "Ich möchte mich für den Kurs anmelden.", "Vorrei iscrivermi al corso.", "Riflessivo e separabile: ich melde mich … an.", "iscriversi registrarsi corso"],
 ["zurückkommen", "tornare", "Wann kommst du zurück?", "Quando torni?", "Verbo separabile: komm … zurück.", "tornare ritornare"],
 ["ausgehen", "uscire (per divertirsi)", "Gehst du heute Abend aus?", "Esci stasera?", "Verbo separabile: gehst … aus.", "uscire serata divertimento"],
 ["mitbringen", "portare con sé", "Bring bitte etwas zu trinken mit.", "Porta qualcosa da bere, per favore.", "Verbo separabile: bring … mit.", "portare con sé portare"],
 ["sich etwas anschauen", "guardare / dare un'occhiata", "Wir schauen uns die Stadt an.", "Diamo un'occhiata alla città.", "Verbo separabile: schauen … an.", "guardare osservare visitare città"],
 ["aufräumen", "mettere in ordine", "Ich räume mein Zimmer auf.", "Metto in ordine la mia stanza.", "Verbo separabile: räume … auf.", "riordinare ordine pulizie"],
 ["einschalten / ausschalten", "accendere / spegnere", "Kannst du das Licht ausschalten?", "Puoi spegnere la luce?", "Verbi separabili: schalte … ein / aus.", "accendere spegnere luce"],
 ["abholen", "passare a prendere", "Ich hole dich um acht Uhr ab.", "Passo a prenderti alle otto.", "Verbo separabile: hole … ab.", "passare a prendere"],
 ["vorbeikommen", "passare (da qualcuno)", "Komm doch heute Abend vorbei!", "Passa pure stasera!", "Verbo separabile: komm … vorbei.", "passare fare un salto"],
 ["aufpassen", "fare attenzione", "Pass auf!", "Attenzione!", "Verbo separabile: pass … auf.", "attenzione stare attento"],
 ["aufhören", "smettere", "Ich höre um fünf Uhr auf zu arbeiten.", "Smetto di lavorare alle cinque.", "Si costruisce con zu + infinito.", "smettere finire"]
]},
{ id:"idiomi-quot", title:"Commentare e conversare", items:[
 ["Das ist mir Wurst.", "Non mi importa. / Per me è uguale.", "Ob wir ins Kino oder essen gehen, das ist mir Wurst.", "Che andiamo al cinema o a mangiare, per me è uguale.", "Informale. Alla lettera: per me è una salsiccia.", "non mi importa indifferente uguale"],
 ["Ich drücke dir die Daumen!", "Faccio il tifo per te! / Incrocio le dita per te!", "Morgen ist deine Prüfung. Ich drücke dir die Daumen!", "Domani hai l'esame. Faccio il tifo per te!", "Alla lettera: ti premo i pollici.", "incrociare le dita fortuna tifare in bocca al lupo"],
 ["Ich verstehe nur Bahnhof.", "Non ci capisco niente.", "Bei diesem Thema verstehe ich nur Bahnhof.", "Su questo argomento non ci capisco niente.", "Informale. Alla lettera: capisco solo stazione.", "non capire niente confuso"],
 ["Alles klar?", "Tutto a posto? / Chiaro?", "Alles klar? — Ja, alles klar.", "Tutto a posto? — Sì, tutto a posto.", "Si usa per salutare o per controllare di aver capito.", "tutto a posto chiaro ok"],
 ["Kein Ding.", "Non c'è problema.", "Danke! — Kein Ding.", "Grazie! — Di niente.", "Informale.", "di niente nessun problema"],
 ["Na ja…", "Mah… / Beh…", "Na ja, es geht so.", "Beh, così così.", "Interiezione molto comune nella conversazione.", "mah beh così così"],
 ["Genau!", "Esatto!", "Du meinst Montag? — Genau!", "Intendi lunedì? — Esatto!", "", "esatto proprio così"],
 ["Mach's gut!", "Stammi bene! / Ciao!", "Tschüss, mach's gut!", "Ciao, stammi bene!", "Informale: si dice tra amici.", "ciao stammi bene saluto"],
 ["Schönen Tag noch!", "Buona giornata!", "Schönen Tag noch! — Danke, Ihnen auch!", "Buona giornata! — Grazie, altrettanto!", "Ihnen auch = anche a Lei; dir auch = anche a te.", "buona giornata saluto"]
]},
{ id:"idiomi-sit", title:"Descrivere situazioni", items:[
 ["Das ist ein Katzensprung.", "È a due passi.", "Mein Büro ist nur ein Katzensprung von hier.", "Il mio ufficio è a due passi da qui.", "Alla lettera: un salto di gatto.", "vicino due passi distanza"],
 ["Ich habe Schwein gehabt.", "Sono stato fortunato.", "Wir haben Schwein gehabt!", "Siamo stati fortunati!", "Informale. Alla lettera: ho avuto un maiale.", "fortuna fortunato"],
 ["Es regnet in Strömen.", "Piove a dirotto.", "Heute regnet es in Strömen.", "Oggi piove a dirotto.", "", "pioggia piove forte diluvio"],
 ["Ich habe die Nase voll.", "Ne ho abbastanza.", "Ich habe die Nase voll von dem Wetter.", "Ne ho abbastanza di questo tempo.", "Informale.", "stufo basta seccato"],
 ["Das ist nicht mein Bier.", "Non sono affari miei.", "Das ist nicht mein Bier.", "Non è affar mio.", "Informale.", "non mi riguarda affari miei"]
]},
{ id:"idiomi-azioni", title:"Parlare di azioni e comportamenti", items:[
 ["Das Eis brechen", "rompere il ghiaccio", "Ein Witz hat das Eis gebrochen.", "Una battuta ha rotto il ghiaccio.", "Come in italiano: espressione figurata.", "rompere il ghiaccio imbarazzo"],
 ["Auf dem Schlauch stehen", "non capire / avere un blocco", "Ich stehe heute total auf dem Schlauch.", "Oggi non ci arrivo proprio.", "Informale. Alla lettera: stare sul tubo.", "non capire bloccato"],
 ["Tomaten auf den Augen haben", "non vedere ciò che è evidente", "Du hast wohl Tomaten auf den Augen!", "Non vedi proprio ciò che hai davanti!", "Informale. Alla lettera: avere pomodori sugli occhi.", "non vedere distratto"]
]}
];

var SECTIONS = [
 { id:"parlare",  icon:"💬", title:"Conversare e conoscersi",         color:"#e4572e", groups:["sé","conoscere","rapporti"] },
 { id:"uscite",   icon:"📅", title:"Fare programmi",                  color:"#2a9d8f", groups:["proporre","accettare","futuro"] },
 { id:"opinioni", icon:"❤️", title:"Gusti, opinioni e desideri",      color:"#d6336c", groups:["gusti","opinioni","bisogni"] },
 { id:"racconti", icon:"🕰️", title:"Raccontare e spiegare",           color:"#8e6bbf", groups:["passato","routine","provare","collegare"] },
 { id:"ingiro",   icon:"🧭", title:"Viaggi, ristoranti e acquisti",   color:"#e09f1f", groups:["viaggi","cibo","acquisti"] },
 { id:"volere",   icon:"🆘", title:"Aiuto, imprevisti e chiarimenti", color:"#3b82c4", groups:["aiuto","problemi"] }
];

var SECTIONS_PHRASAL = [
 { id:"idiomi",  icon:"🗣️", title:"Modi di dire - Idiomi", color:"#5b6b7a", groups:["idiomi-quot","idiomi-sit","idiomi-azioni"] },
 { id:"phrasal", icon:"🧩", title:"Verbi separabili",      color:"#1f7a5c", groups:["phrasal"] }
];

window.LANG_DATA.de = { CATEGORIES: CATEGORIES, SECTIONS: SECTIONS, SECTIONS_PHRASAL: SECTIONS_PHRASAL };
})();
