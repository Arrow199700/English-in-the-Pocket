// Ogni frase: [inglese, italiano, esempio inglese, esempio italiano, nota (facoltativa)]
// Gli ID dei preferiti dipendono dall'id della sotto-lista e dalla posizione: aggiungi le nuove frasi in fondo.
window.CATEGORIES = [
{ id:"sé", title:"Parlare di sé", items:[
 ["I'm from…","Sono di… / Vengo da…","I'm from Italy.","Vengo dall'Italia."],
 ["I live in…","Vivo a / in…","I live in a small town.","Vivo in una cittadina."],
 ["I grew up in…","Sono cresciuto a / in…","I grew up near the sea.","Sono cresciuto vicino al mare."],
 ["I've been living here for…","Vivo qui da…","I've been living here for two years.","Vivo qui da due anni."],
 ["In my free time, I like…","Nel tempo libero mi piace…","In my free time, I like going for walks.","Nel tempo libero mi piace fare passeggiate."],
 ["I'm really into…","Mi appassiona… / Mi piace molto…","I'm really into photography.","Sono appassionato di fotografia.","Informale."],
 ["I'm not much of a…","Non sono un gran…","I'm not much of a cook.","Non sono un gran cuoco."],
 ["What about you?","E tu?"]
]},
{ id:"conoscere", title:"Conoscere qualcuno", items:[
 ["How's it going?","Come va?","","","Informale."],
 ["How have you been?","Come stai (ultimamente)?","","","Per riprendere i contatti."],
 ["What have you been up to?","Che cosa hai fatto di recente?","","","Informale."],
 ["How was your weekend?","Com'è andato il fine settimana?"],
 ["Have you been here before?","Sei già stato qui?"],
 ["How do you know each other?","Come vi conoscete?"],
 ["What kind of music do you listen to?","Che genere di musica ascolti?"],
 ["Tell me more about it.","Raccontami qualcosa in più."],
 ["It was nice talking to you.","È stato un piacere parlare con te."]
]},
{ id:"rapporti", title:"Rapporti e reazioni", items:[
 ["Thanks for…","Grazie per…","Thanks for helping me.","Grazie per avermi aiutato.","Dopo “thanks for” il verbo prende -ing."],
 ["I really appreciate it.","Lo apprezzo molto."],
 ["I'm sorry about…","Mi dispiace per…","I'm sorry about the misunderstanding.","Mi dispiace per l'equivoco."],
 ["Sorry for being late.","Scusa per il ritardo."],
 ["Don't worry about it.","Non preoccupartene."],
 ["That sounds difficult.","Sembra una situazione difficile."],
 ["I'd rather not talk about it.","Preferirei non parlarne."],
 ["Let's keep in touch.","Restiamo in contatto."],
 ["Really?","Davvero?"],
 ["Fair enough.","Ci sta. / Capisco la tua ragione."],
 ["No worries.","Nessun problema.","","","Informale."],
 ["Same here.","Anche per me. / Anch'io.","","","Informale."]
]},
{ id:"proporre", title:"Organizzarsi e proporre", items:[
 ["Do you feel like…?","Ti va di…?","Do you feel like going out?","Ti va di uscire?","Dopo “feel like” si usa -ing."],
 ["Would you like to join us?","Ti piacerebbe unirti a noi?"],
 ["Let's…","Facciamo… / Dai, …","Let's go for a walk.","Facciamo una passeggiata."],
 ["Why don't we…?","Perché non…?","Why don't we eat out?","Perché non andiamo a mangiare fuori?"],
 ["How about…?","Che ne dici di…?","How about meeting at eight?","Che ne dici di vederci alle otto?"],
 ["Are you free on…?","Sei libero…?","Are you free on Saturday?","Sei libero sabato?"],
 ["What time works for you?","Quale orario ti va bene?"],
 ["I'll let you know.","Ti faccio sapere."]
]},
{ id:"accettare", title:"Accettare e rifiutare", items:[
 ["I'd love to.","Mi piacerebbe molto. / Volentieri."],
 ["That sounds good.","Mi sembra una buona idea."],
 ["I'm up for it.","Ci sto.","","","Informale."],
 ["That works for me.","Per me va bene."],
 ["I don't mind.","Per me va bene. / Non ho nulla in contrario.","Tea or coffee? — I don't mind.","Tè o caffè? — Per me è uguale."],
 ["I'm afraid I can't.","Mi dispiace, ma non posso."],
 ["I'd love to, but I already have plans.","Mi piacerebbe, ma ho già un impegno."],
 ["Maybe another time.","Magari un'altra volta."],
 ["I'd rather not, thanks.","Preferirei di no, grazie."]
]},
{ id:"futuro", title:"Progetti e futuro", items:[
 ["I'm going to…","Ho intenzione di…","I'm going to visit a friend this weekend.","Questo fine settimana andrò a trovare un amico."],
 ["I'm planning to…","Ho in programma di…","I'm planning to travel in May.","Ho in programma di viaggiare a maggio."],
 ["I'm thinking of…","Sto pensando di…","I'm thinking of buying a bike.","Sto pensando di comprare una bici.","Dopo “thinking of” il verbo prende -ing."],
 ["I hope to…","Spero di…","I hope to see you soon.","Spero di vederti presto."],
 ["I'll probably…","Probabilmente…","I'll probably stay home.","Probabilmente resterò a casa."],
 ["I might…","Potrei…","I might go out later.","Potrei uscire più tardi."],
 ["I haven't decided yet.","Non ho ancora deciso."],
 ["I'll see how I feel.","Vedrò come mi sento."]
]},
{ id:"gusti", title:"Gusti ed emozioni", items:[
 ["I feel…","Mi sento…","I feel a bit tired.","Mi sento un po' stanco."],
 ["I'm not a big fan of…","Non mi piace molto…","I'm not a big fan of crowds.","Non amo molto i posti affollati."],
 ["It's not really my thing.","Non fa molto per me."],
 ["I prefer … to …","Preferisco … a …","I prefer tea to coffee.","Preferisco il tè al caffè."],
 ["It depends on my mood.","Dipende da come mi sento."],
 ["I don't feel like cooking.","Non mi va di cucinare."],
 ["I'm worried about…","Sono preoccupato per…","I'm worried about the trip.","Sono preoccupato per il viaggio."],
 ["I'm looking forward to it.","Non vedo l'ora.","I'm looking forward to seeing you.","Non vedo l'ora di vederti.","Dopo “look forward to” il verbo prende -ing."],
 ["I can't wait to…","Non vedo l'ora di…","I can't wait to see you.","Non vedo l'ora di vederti."],
 ["It bothers me when…","Mi dà fastidio quando…","It bothers me when people interrupt me.","Mi dà fastidio quando mi interrompono."],
 ["I'm happy for you.","Sono felice per te."]
]},
{ id:"opinioni", title:"Opinioni, dubbi e decisioni", items:[
 ["I think…","Penso che…","I think it's a good idea.","Penso che sia una buona idea."],
 ["I don't think…","Non penso che…","I don't think it's worth it.","Non penso che ne valga la pena."],
 ["If you ask me, …","Se vuoi la mia opinione, …"],
 ["I see your point, but…","Capisco il tuo punto di vista, ma…"],
 ["That makes sense.","Ha senso."],
 ["I'm not sure…","Non sono sicuro…","I'm not sure that's a good idea.","Non sono sicuro che sia una buona idea."],
 ["I don't know if…","Non so se…","I don't know if he's coming.","Non so se viene."],
 ["I'm not sure whether…","Non sono sicuro se…","I can't decide whether to stay or leave.","Non riesco a decidere se restare o andare via.","Prima di “to + verbo” si usa “whether”, non “if”."],
 ["It depends on…","Dipende da…","It depends on the weather.","Dipende dal tempo."],
 ["Let me think about it.","Fammi pensare."],
 ["I've changed my mind.","Ho cambiato idea."],
 ["It's up to you.","Decidi tu."]
]},
{ id:"bisogni", title:"Volere e avere bisogno", items:[
 ["I need to…","Devo… / Ho bisogno di…","I need to get some sleep.","Ho bisogno di dormire un po'.","Dopo “need to” si usa il verbo base."],
 ["I'd like to…","Vorrei… / Mi piacerebbe…","I'd like to stay a little longer.","Mi piacerebbe restare ancora un po'.","I'd = I would."],
 ["I want to…","Voglio…","I want to learn how to cook.","Voglio imparare a cucinare."],
 ["I don't want to…","Non voglio…","I don't want to rush.","Non voglio avere fretta."],
 ["What would you like to do?","Che cosa ti piacerebbe fare?","What would you like to do tonight?","Che cosa ti piacerebbe fare stasera?"],
 ["I'd rather…","Preferirei…","I'd rather stay home.","Preferirei restare a casa.","Dopo “I'd rather” il verbo è alla forma base, senza “to”."],
 ["All I need is…","Mi serve solo…","All I need is a little time.","Mi serve solo un po' di tempo."]
]},
{ id:"provare", title:"Provare e riuscire", items:[
 ["I'm trying to…","Sto cercando di…","I'm trying to eat better.","Sto cercando di mangiare meglio."],
 ["I don't know how to…","Non so come…","I don't know how to swim.","Non so nuotare."],
 ["I'm learning how to…","Sto imparando a…","I'm learning how to cook.","Sto imparando a cucinare."],
 ["I managed to…","Sono riuscito a…","I managed to catch the train.","Sono riuscito a prendere il treno."],
 ["I couldn't…","Non riuscivo a… / Non sono riuscito a…","I couldn't sleep last night.","Stanotte non sono riuscito a dormire."],
 ["I find it hard to…","Faccio fatica a…","I find it hard to concentrate.","Faccio fatica a concentrarmi."],
 ["I'm getting better at…","Sto migliorando in…","I'm getting better at speaking English.","Sto migliorando nel parlare inglese."],
 ["It's worth trying.","Vale la pena provare.","It's difficult, but it's worth trying.","È difficile, ma vale la pena provare."]
]},
{ id:"aiuto", title:"Chiedere e offrire aiuto", items:[
 ["Could you help me with…?","Potresti aiutarmi con…?","Could you help me with this bag?","Potresti aiutarmi con questa borsa?"],
 ["Could you show me how to…?","Potresti farmi vedere come…?","Could you show me how to open this?","Potresti farmi vedere come si apre?"],
 ["Can you give me a hand?","Mi dai una mano?","Can you give me a hand with the boxes?","Mi dai una mano con gli scatoloni?"],
 ["Could you do me a favour?","Potresti farmi un favore?"],
 ["Would you mind…?","Ti dispiacerebbe…?","Would you mind opening the window?","Ti dispiacerebbe aprire la finestra?","Dopo “mind” il verbo prende -ing."],
 ["Do you want me to…?","Vuoi che io…?","Do you want me to wait?","Vuoi che aspetti?"],
 ["Let me help you.","Lascia che ti aiuti. / Ti aiuto io."],
 ["Don't worry, I'll take care of it.","Non preoccuparti, me ne occupo io."],
 ["I'll handle it.","Me ne occupo io.","Don't worry, I'll handle it.","Non preoccuparti, me ne occupo io.","“Handle” = gestire, occuparsi di qualcosa."],
 ["Leave it to me.","Lascia fare a me.","Leave it to me. I'll call them.","Lascia fare a me. Li chiamo io."],
 ["I can deal with it.","Ci penso io.","I can deal with the bank.","Ci penso io alla banca.","“Deal with” = affrontare, occuparsi di."],
 ["Who's in charge of…?","Chi si occupa di…?","Who's in charge of the booking?","Chi si occupa della prenotazione?"],
 ["Can I count on you?","Posso contare su di te?"],
 ["You saved my life.","Mi hai salvato.","","","Informale: si dice anche per scherzo."]
]},
{ id:"passato", title:"Raccontare il passato", items:[
 ["I went to…","Sono andato a…","I went to a concert last night.","Ieri sera sono andato a un concerto.","go → went → gone"],
 ["I met…","Ho incontrato… / Ho conosciuto…","I met some friends for dinner.","Ho visto degli amici a cena.","meet → met → met"],
 ["I was about to…","Stavo per…","I was about to call you.","Stavo per chiamarti."],
 ["I was … when…","Stavo… quando…","I was cooking when you called.","Stavo cucinando quando hai chiamato."],
 ["At first, I thought…","All'inizio pensavo…","At first, I thought he was joking.","All'inizio pensavo che scherzasse."],
 ["Then I realised…","Poi mi sono reso conto…","Then I realised I had the wrong address.","Poi mi sono reso conto di avere l'indirizzo sbagliato."],
 ["It turned out that…","Alla fine si è scoperto che…","It turned out that we knew the same people.","Alla fine abbiamo scoperto di conoscere le stesse persone."],
 ["In the end, we…","Alla fine abbiamo…","In the end, we stayed home.","Alla fine siamo rimasti a casa."],
 ["Have you ever…?","Hai mai…?","Have you ever travelled alone?","Hai mai viaggiato da solo?","have/has + participio passato: esperienza fino a oggi."],
 ["I've never…","Non ho mai…","I've never tried surfing.","Non ho mai provato a fare surf."]
]},
{ id:"routine", title:"Routine e cambiamenti", items:[
 ["I usually…","Di solito…","I usually have breakfast at home.","Di solito faccio colazione a casa."],
 ["I tend to…","Tendo a…","I tend to go to bed late.","Tendo ad andare a letto tardi."],
 ["I've started…","Ho cominciato a…","I've started going for walks.","Ho cominciato a fare passeggiate."],
 ["I've stopped…","Ho smesso di…","I've stopped drinking coffee at night.","Ho smesso di bere caffè la sera."],
 ["I used to…","Una volta… / Prima…","I used to play football.","Una volta giocavo a calcio.","Abitudine passata, ora cambiata."],
 ["I'm used to…","Sono abituato a…","I'm used to getting up early.","Sono abituato ad alzarmi presto.","Dopo “be used to” il verbo prende -ing."],
 ["I'm getting used to…","Mi sto abituando a…","I'm getting used to living alone.","Mi sto abituando a vivere da solo."],
 ["It takes me … to…","Ci metto… a…","It takes me twenty minutes to get ready.","Ci metto venti minuti a prepararmi."],
 ["I spend a lot of time…","Passo molto tempo a…","I spend a lot of time reading.","Passo molto tempo a leggere."]
]},
{ id:"viaggi", title:"Spostamenti e tempo", items:[
 ["I'm on my way.","Sto arrivando."],
 ["I'm running late.","Sono in ritardo."],
 ["I'll be there in ten minutes.","Sarò lì tra dieci minuti."],
 ["Take your time.","Fai con calma."],
 ["There's no rush.","Non c'è fretta."],
 ["How long does it take?","Quanto tempo ci vuole?"],
 ["Could you tell me how to get to…?","Potresti dirmi come arrivare a…?","Could you tell me how to get to the station?","Potresti dirmi come arrivare alla stazione?"],
 ["Does this bus go to…?","Questo autobus va a…?","Does this bus go to the city centre?","Questo autobus va in centro?"],
 ["I think we're going the wrong way.","Credo che stiamo andando dalla parte sbagliata."]
]},
{ id:"cibo", title:"Cibo e ristoranti", items:[
 ["Could we have a table for two?","Potremmo avere un tavolo per due?"],
 ["What would you recommend?","Che cosa consiglieresti?"],
 ["I'd like…","Vorrei…","I'd like a glass of water.","Vorrei un bicchiere d'acqua."],
 ["Could I have this without…?","Potrei averlo senza…?","Could I have this without cheese?","Potrei averlo senza formaggio?"],
 ["I'm allergic to…","Sono allergico a…","I'm allergic to peanuts.","Sono allergico alle arachidi."],
 ["Does this contain…?","Questo contiene…?","Does this contain milk?","Contiene latte?"],
 ["Could we have the bill, please?","Potremmo avere il conto, per favore?"],
 ["Shall we split the bill?","Dividiamo il conto?"],
 ["That was delicious.","Era buonissimo."]
]},
{ id:"acquisti", title:"Acquisti e alloggio", items:[
 ["I'm looking for…","Sto cercando…","I'm looking for a jacket.","Sto cercando una giacca."],
 ["I'm just looking, thanks.","Sto solo dando un'occhiata, grazie."],
 ["Do you have this in a different size?","Lo avete in un'altra taglia?"],
 ["Can I try it on?","Posso provarlo?","","","Per un capo d'abbigliamento."],
 ["Can I pay by card?","Posso pagare con la carta?"],
 ["I'd like to return this.","Vorrei restituire questo articolo."],
 ["I have a reservation under…","Ho una prenotazione a nome…","I have a reservation under Rossi.","Ho una prenotazione a nome Rossi."],
 ["Is breakfast included?","La colazione è inclusa?"],
 ["Would it be possible to check out later?","Sarebbe possibile lasciare la camera più tardi?"]
]},
{ id:"problemi", title:"Problemi e imprevisti", items:[
 ["There's something wrong with…","C'è qualcosa che non va con…","There's something wrong with my phone.","Il mio telefono ha qualcosa che non va."],
 ["It isn't working.","Non funziona."],
 ["It worked. / It didn't work.","Ha funzionato. / Non ha funzionato."],
 ["I've lost my…","Ho perso…","I've lost my wallet.","Ho perso il portafoglio."],
 ["I've run out of…","Ho finito…","I've run out of cash.","Ho finito i contanti."],
 ["I forgot to…","Mi sono dimenticato di…","I forgot to bring my charger.","Mi sono dimenticato di portare il caricabatterie."],
 ["I didn't mean to…","Non volevo…","I didn't mean to upset you.","Non volevo farti stare male."],
 ["I need a doctor.","Ho bisogno di un medico."],
 ["Is there another way?","C'è un altro modo?"]
]},
{ id:"capire", title:"Capire e farsi capire", items:[
 ["Sorry, I didn't catch that.","Scusa, non ho capito quello che hai detto."],
 ["Could you say that again?","Potresti ripeterlo?"],
 ["Could you speak a little more slowly?","Potresti parlare un po' più lentamente?"],
 ["What does … mean?","Che cosa significa…?","What does “whether” mean?","Che cosa significa “whether”?"],
 ["What do you mean by that?","Che cosa intendi con questo?"],
 ["Do you mean…?","Intendi…?","Do you mean tomorrow morning?","Intendi domattina?"],
 ["Could you explain it another way?","Potresti spiegarlo in un altro modo?"],
 ["How do you say … in English?","Come si dice … in inglese?"],
 ["Let me put it another way.","Provo a dirlo in un altro modo."],
 ["Just to confirm, you want me to…, right?","Per conferma, vuoi che io…, giusto?"]
]},
{ id:"phrasal", title:"Phrasal verbs di tutti i giorni", items:[
 ["come over","passare da qualcuno","Do you want to come over later?","Ti va di passare da me più tardi?"],
 ["pick someone up","passare a prendere qualcuno","I'll pick you up at eight.","Passo a prenderti alle otto.","Con un pronome: pick me up (non “pick up me”)."],
 ["meet up","vedersi / incontrarsi","Let's meet up this weekend.","Vediamoci questo fine settimana."],
 ["hang out","passare del tempo insieme","We hung out at his place.","Abbiamo passato un po' di tempo a casa sua.","Informale."],
 ["put on","indossare / mettersi","Put your jacket on.","Mettiti la giacca.","Con un pronome: put it on."],
 ["take off","togliersi (un indumento)","Can I take my shoes off?","Posso togliermi le scarpe?"],
 ["turn on / turn off","accendere / spegnere","Could you turn the light off?","Potresti spegnere la luce?","Con un pronome: turn it off."],
 ["look for","cercare","I'm looking for my glasses.","Sto cercando gli occhiali."],
 ["look after","occuparsi di / badare a","Can you look after my cat?","Puoi badare al mio gatto?","Non si separa: look after her."],
 ["get along with","andare d'accordo con","I get along with my neighbours.","Vado d'accordo con i vicini."],
 ["run into","incontrare per caso","I ran into an old friend.","Ho incontrato per caso un vecchio amico."],
 ["find out","scoprire","How did you find out?","Come l'hai scoperto?"],
 ["figure out","capire / trovare la soluzione","I can't figure out how this works.","Non riesco a capire come funziona."],
 ["end up","finire per","We ended up staying home.","Alla fine siamo rimasti a casa."],
 ["run out of","finire / esaurire","We've run out of milk.","Abbiamo finito il latte."],
 ["catch up","aggiornarsi / mettersi in pari","Let's catch up over coffee.","Aggiorniamoci davanti a un caffè.","Tra amici: raccontarsi cosa è successo di recente."],
 ["show up","presentarsi / farsi vedere","He didn't show up.","Non si è presentato.","Informale."],
 ["work out","funzionare / allenarsi","Don't worry, it'll work out.","Non preoccuparti, si sistemerà.","Significa anche “fare esercizio”: I work out three times a week."],
 ["come up with","inventare / avere un'idea","She came up with a great idea.","Le è venuta un'ottima idea."],
 ["check out","dare un'occhiata / lasciare l'hotel","Check out this song!","Ascolta questa canzone!","Informale."],
 ["sort out","sistemare / risolvere","I need to sort out a few things.","Devo sistemare un paio di cose."],
 ["set up","organizzare / configurare","Could you help me set up my phone?","Mi aiuti a configurare il telefono?"],
 ["carry on","andare avanti","Sorry to interrupt. Please carry on.","Scusa se ti ho interrotto. Continua pure."],
 ["drop by","fare un salto da qualcuno","Drop by whenever you like.","Fai un salto quando vuoi.","Informale."],
 ["cut down on","ridurre","I'm trying to cut down on sugar.","Sto cercando di ridurre lo zucchero."],
 ["hold on","aspettare un attimo","Hold on, I'll be right back.","Aspetta un attimo, torno subito.","Al telefono: resti in linea."],
 ["give up","rinunciare / mollare","Don't give up.","Non mollare."],
 ["put off","rimandare","Let's not put it off again.","Non rimandiamolo di nuovo."],
 ["bring up","tirare fuori un argomento","Why did you bring that up?","Perché hai tirato fuori quell'argomento?"],
 ["calm down","calmarsi","I need a minute to calm down.","Mi serve un minuto per calmarmi."],
 ["wake up","svegliarsi","I usually wake up at seven.","Di solito mi sveglio alle sette."],
 ["get up","alzarsi dal letto","I woke up at seven, but I got up at eight.","Mi sono svegliato alle sette, ma mi sono alzato alle otto."],
 ["go out","uscire (per svago)","Are you going out tonight?","Esci stasera?"],
]},
{ id:"collegare", title:"Collegare le idee", items:[
 ["because","perché","I'm staying home because I'm tired.","Resto a casa perché sono stanco."],
 ["so","quindi / perciò","I'm tired, so I'm staying home.","Sono stanco, quindi resto a casa."],
 ["although","anche se / sebbene","Although I'm tired, I'd like to go out.","Anche se sono stanco, mi piacerebbe uscire."],
 ["unless","a meno che / se non","I'll come unless something comes up.","Vengo, a meno che non salti fuori un imprevisto."],
 ["as long as","purché","We can walk, as long as you're not in a hurry.","Possiamo andare a piedi, purché tu non abbia fretta."],
 ["as soon as","appena","I'll call you as soon as I arrive.","Ti chiamo appena arrivo."],
 ["by the way","a proposito","By the way, how was your trip?","A proposito, com'è andato il viaggio?"],
 ["actually","in realtà / a dire il vero","Actually, I've already seen it.","In realtà l'ho già visto.","Non significa “attualmente”: per quello usa “currently” o “at the moment”."],
 ["anyway","comunque","Anyway, let's talk about something else.","Comunque, parliamo d'altro."],
 ["instead","invece / in alternativa","Let's stay home instead.","Restiamo a casa, invece."],
 ["at least","almeno","At least we tried.","Almeno ci abbiamo provato."],
 ["besides","inoltre / e poi","It's too far. Besides, it's expensive.","È troppo lontano. E poi è caro."]
]},
{ id:"idiomi-quot", title:"Commentare E Conversare", items:[
["Long story short, …","Per farla breve, …","Long story short, we missed the train.","Per farla breve, abbiamo perso il treno.","Si dice anche “to make a long story short”."],
["It's a long story.","È una lunga storia.","","","Si usa per non entrare nei dettagli."],
["Easier said than done.","Più facile a dirsi che a farsi."],
["Better late than never.","Meglio tardi che mai."],
["You can say that again!","Puoi dirlo forte!","It's freezing! — You can say that again!","Si gela! — Puoi dirlo forte!"],
["Tell me about it.","Me lo dici a me! / Lo so bene.","","","Non significa “raccontamelo”: dai ragione a chi parla."],
["I'm all ears.","Ti ascolto. / Sono tutto orecchi."],
["Speak of the devil!","Parli del diavolo!","Speak of the devil! We were just talking about you.","Parli del diavolo! Stavamo parlando proprio di te.","Si dice quando la persona arriva proprio mentre si parla di lei."],
["Fingers crossed.","Incrociamo le dita.","Fingers crossed for tomorrow!","Incrociamo le dita per domani!"]
]},
{ id:"idiomi-sit", title:"Descrivere situazioni", items:[
["to sell like hot cakes","andare a ruba","Their new sneakers are selling like hot cakes.","Le loro nuove scarpe vanno a ruba."],
["once in a blue moon","molto raramente","I only eat fast food once in a blue moon.","Mangio fast food molto raramente."],
["a piece of cake","un gioco da ragazzi","The exam was a piece of cake.","L'esame era un gioco da ragazzi."],
["to cost an arm and a leg","costare un occhio della testa","That car cost an arm and a leg.","Quell'auto è costata un occhio della testa."],
["to be under the weather","non sentirsi in forma","I'm feeling a bit under the weather.","Non mi sento molto in forma.","Per malesseri leggeri: raffreddore, stanchezza."],
["the last straw","la goccia che fa traboccare il vaso","When he forgot my birthday again, that was the last straw.","Quando si è dimenticato di nuovo del mio compleanno, è stata la goccia."],
["in the middle of nowhere","in capo al mondo","Their house is in the middle of nowhere.","La loro casa è in capo al mondo."],
["a blessing in disguise","una fortuna inaspettata","Losing that job was a blessing in disguise.","Perdere quel lavoro si è rivelato una fortuna."],
["to get out of hand","sfuggire di mano","The party got out of hand.","La festa è sfuggita di mano."],
["to be up in the air","essere ancora incerto","Our summer plans are still up in the air.","I nostri programmi per l'estate sono ancora incerti."]
]},
{ id:"idiomi-azioni", title:"Parlare Di Azioni E Comportamenti", items:[
["to break the ice","rompere il ghiaccio","He told a joke to break the ice.","Ha fatto una battuta per rompere il ghiaccio."],
["to hit the nail on the head","centrare il punto","You hit the nail on the head.","Hai centrato il punto."],
["to beat around the bush","girare intorno al problema","Stop beating around the bush and tell me.","Smettila di girarci intorno e dimmelo."],
["to let the cat out of the bag","lasciarsi sfuggire un segreto","She let the cat out of the bag about the party.","Si è lasciata sfuggire il segreto sulla festa."],
["to call it a day","chiuderla qui per oggi","It's late. Let's call it a day.","È tardi. Chiudiamola qui per oggi."],
["to bite the bullet","stringere i denti e farlo","I hate the dentist, but I'll just bite the bullet.","Odio il dentista, ma stringerò i denti e ci andrò."],
["to go the extra mile","fare uno sforzo in più","She always goes the extra mile for her clients.","Fa sempre uno sforzo in più per i suoi clienti."],
["to keep an eye on","tenere d'occhio","Can you keep an eye on my bag?","Puoi tenere d'occhio la mia borsa?"],
["to jump the gun","anticipare i tempi","Don't jump the gun. We haven't decided yet.","Non anticipare i tempi. Non abbiamo ancora deciso."],
["to get cold feet","avere un ripensamento all'ultimo","He got cold feet before the wedding.","Ha avuto un ripensamento prima del matrimonio."],
["to be on the same page","la pensiamo allo stesso modo","Let's make sure we're all on the same page.","Assicuriamoci di essere tutti sulla stessa lunghezza d'onda."],
["The ball is in your court.","Tocca a te.","I've made my offer. The ball is in your court.","Ho fatto la mia offerta. Ora tocca a te."],
["to kill two birds with one stone","prendere due piccioni con una fava","I'll post the letter on my way to work and kill two birds with one stone.","Imbuco la lettera andando al lavoro e prendo due piccioni con una fava."]
]}
];

// OLD
/*
    // Le 20 sotto-liste vengono raggruppate in 8 sezioni.
    window.SECTIONS = [
    { id:"parlare",  icon:"💬", title:"Parlare e conoscersi",            color:"#e4572e", groups:["sé","conoscere","rapporti"] },
    { id:"uscite",   icon:"📅", title:"Uscite e programmi",              color:"#2a9d8f", groups:["proporre","accettare","futuro"] },
    { id:"opinioni", icon:"❤️", title:"Gusti, emozioni e opinioni",      color:"#d6336c", groups:["gusti","opinioni"] },
    { id:"volere",   icon:"🎯", title:"Volere, provare, chiedere aiuto", color:"#3b82c4", groups:["bisogni","provare","aiuto"] },
    { id:"racconti", icon:"🕰️", title:"Raccontare e routine",            color:"#8e6bbf", groups:["passato","routine"] },
    { id:"ingiro",   icon:"🧭", title:"In giro per il mondo",            color:"#e09f1f", groups:["viaggi","cibo","acquisti","problemi"] },
    { id:"capire",   icon:"👂", title:"Capire e farsi capire",            color:"#1f7a5c", groups:["capire"] },
    { id:"parole",   icon:"🧩", title:"Parole utili",                     color:"#5b6b7a", groups:["phrasal","collegare"] }
    ];
*/

window.SECTIONS = [
 { id:"parlare",  icon:"💬", title:"Conversare e conoscersi",         color:"#e4572e", groups:["sé","conoscere","rapporti"] },
 { id:"uscite",   icon:"📅", title:"Fare programmi",                  color:"#2a9d8f", groups:["proporre","accettare","futuro"] },
 { id:"opinioni", icon:"❤️", title:"Gusti, opinioni e desideri",      color:"#d6336c", groups:["gusti","opinioni","bisogni"] },
 { id:"racconti", icon:"🕰️", title:"Raccontare e spiegare",           color:"#8e6bbf", groups:["passato","routine","provare","collegare"] },
 { id:"ingiro",   icon:"🧭", title:"Viaggi, ristoranti e acquisti",   color:"#e09f1f", groups:["viaggi","cibo","acquisti"] },
 { id:"volere",   icon:"🆘", title:"Aiuto, imprevisti e chiarimenti", color:"#3b82c4", groups:["aiuto","problemi","capire"] },
];

window.SECTIONS_PHRASAL = [
 { id:"idiomi",  icon:"🗣️", title:"Modi di dire - Idiomi",  color:"#5b6b7a", groups:["idiomi-quot","idiomi-sit","idiomi-azioni"] },
 { id:"phrasal", icon:"🧩", title:"Phrasal verbs", color:"#1f7a5c", groups:["phrasal"] }
];