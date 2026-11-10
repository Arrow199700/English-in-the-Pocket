# English in the Pocket

Piccolo sito statico per consultare espressioni inglesi di tutti i giorni, divise in 8 sezioni.
Funziona senza installazioni: basta aprire `index.html` oppure pubblicarlo con GitHub Pages.

## Cosa fa
- 8 sezioni espandibili (circa 200 espressioni), con piccoli sottotitoli all'interno.
- Ricerca in italiano e inglese (ignora gli accenti).
- Preferiti, salvati nel browser.
- Pulsante 🔊 per ascoltare la frase, se il browser lo supporta.
- Tema chiaro/scuro automatico e layout pensato per il telefono.
- Accesso facoltativo via email (link magico) per sincronizzare i preferiti.

## Provarlo in locale
Apri `index.html` con doppio clic. Per un test più fedele:

    python -m http.server 8000

poi vai su http://localhost:8000

## Pubblicarlo con GitHub Pages
1. Crea un nuovo repository (separato da quello dei rifiuti), per esempio `english-in-the-pocket`.
2. Carica questi file nella cartella principale.
3. Su GitHub: Settings -> Pages -> Build and deployment -> Source: Deploy from a branch -> Branch: `main`, cartella `/ (root)` -> Save.
4. Dopo uno o due minuti il sito sarà all'indirizzo `https://TUOUSERNAME.github.io/english-in-the-pocket/`.

## Come lavorare con Git

**Idea di base:** `main` è la versione pubblica del sito. Per provare modifiche senza rischi si lavora su un ramo (branch) separato e poi lo si unisce a `main`.

## Comandi Git di tutti i giorni

### Il ciclo normale

1. Modifica i file e provali in locale (Go Live in VS Code).
2. Salva (Ctrl+S).
3. `git status` per vedere cosa è cambiato.
4. `git add .` per preparare i file.
5. `git commit -m "Cosa ho fatto"` per salvare lo scatto sul computer.
6. `git push` per inviarlo a GitHub: il sito si aggiorna in 1-2 minuti.

In VS Code i passi 4-6 sono: **+**, messaggio con la spunta, poi **Sync Changes**.

### I comandi

| Comando | Cosa fa | Quando |
|---|---|---|
| `git status` | Mostra i file modificati e se sei avanti rispetto a GitHub | Prima di ogni commit, o quando non sei sicuro |
| `git add .` | Prepara tutti i file modificati per il commit | Prima di `commit` |
| `git commit -m "…"` | Salva lo scatto in locale | Dopo `add` |
| `git push` | Invia i commit a GitHub (pubblica) | Quando il lavoro è pronto |
| `git pull origin main` | Scarica da GitHub le novità | Se hai modificato da un altro computer o dal sito di GitHub |
| `git log --oneline` | Elenca i commit passati | Per vedere la cronologia |
| `git restore nome-file` | Annulla le modifiche non ancora salvate in un commit | Se hai rotto un file e vuoi tornare indietro |

### Cosa ricordarsi

- **Push = pubblicazione.** Finché non lo fai, nulla cambia per gli altri.
- **Prova sempre prima in locale** e controlla in console (F12) che non ci siano errori.
- **Dopo il push** aspetta 1-2 minuti e ricarica con Ctrl+F5. Sull'iPhone, chiudi e riapri la pagina.
- **Nel repository pubblico** non vanno mai chiavi segrete (`service_role`, `sb_secret`). La chiave pubblica di Supabase in `config.js` va bene.
- **Prima di modificare**, se hai toccato i file da un altro posto (altro PC o editor su GitHub), fai `git pull origin main`.
- **Messaggi di commit** brevi e chiari (per esempio "Aggiungo modi di dire"): fra un mese ti servono per ritrovare cosa hai cambiato.

## Come aggiungere o modificare frasi
Apri `data.js`. Le frasi sono raggruppate in sotto-liste (`CATEGORIES`); in fondo al file, `SECTIONS` le riunisce in 8 sezioni. Ogni frase ha questa forma:

    ["inglese", "italiano", "esempio inglese", "esempio italiano", "nota facoltativa"]

Esempio e nota possono essere stringhe vuote `""`.
Per non perdere i preferiti già salvati, aggiungi le nuove frasi in fondo alla sotto-lista: l'identificativo di ogni frase dipende dalla sua posizione.

## Attivare l'accesso facoltativo (Supabase)
Senza questa parte il sito funziona già, con preferiti salvati solo nel browser.

1. Crea un progetto gratuito su https://supabase.com
2. Nel progetto apri SQL Editor ed esegui:

        create table public.favorites (
          user_id uuid not null references auth.users(id) on delete cascade,
          phrase_id text not null,
          created_at timestamptz not null default now(),
          primary key (user_id, phrase_id)
        );

        alter table public.favorites enable row level security;

        create policy "legge solo le proprie preferite"
          on public.favorites for select using (auth.uid() = user_id);
        create policy "aggiunge solo le proprie preferite"
          on public.favorites for insert with check (auth.uid() = user_id);
        create policy "aggiorna solo le proprie preferite"
          on public.favorites for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
        create policy "elimina solo le proprie preferite"
          on public.favorites for delete using (auth.uid() = user_id);

3. In Authentication -> URL Configuration imposta Site URL sull'indirizzo del sito
   (e aggiungi lo stesso indirizzo tra i Redirect URLs).
4. In Project Settings -> API copia Project URL e la chiave anon / public, poi incollale in `config.js`.

La chiave `anon` è fatta per essere pubblica: la protezione dei dati è affidata alle regole RLS dell'SQL qui sopra.
**Non inserire mai** nel repository la chiave `service_role`.

## Nota sulle traduzioni
Le traduzioni indicano il significato naturale nel contesto, non sempre la corrispondenza parola per parola.



## Nuove modifiche applicabili

- **Pulsanti-etichetta per saltare ai gruppi.** Se un giorno le frasi diventassero molte di più (diverse centinaia), una soluzione più comoda di un secondo livello di toggle sarebbe una fila di piccoli pulsanti-etichetta ("Organizzarsi", "Accettare", "Futuro") sotto la barra di ricerca, per saltare direttamente al gruppo. Con la quantità attuale (circa 230 frasi) sarebbe già troppo.