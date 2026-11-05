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

### Parole da conoscere

| Parola | Significato |
|---|---|
| repository | La cartella del progetto con tutta la sua cronologia |
| commit | Uno "scatto" salvato in locale, con un messaggio |
| push | Invia i commit a GitHub |
| pull | Scarica da GitHub le novità |
| branch (ramo) | Una linea di lavoro separata da `main` |
| pull request | Richiesta su GitHub per unire un branch a `main` |
| merge | L'unione vera e propria dei due rami |

### Flusso di lavoro

1. Aggiorna `main`: `git switch main` poi `git pull origin main`
2. Crea un branch: `git switch -c nome-del-ramo`
3. Modifica i file e salva
4. Controlla cosa è cambiato: `git status`
5. Prepara e salva: `git add .` poi `git commit -m "Cosa ho fatto"`
6. Invia il ramo: `git push -u origin nome-del-ramo` (le volte successive basta `git push`)
7. Su GitHub apri la pull request verso `main`, controlla "Files changed" e unisci
8. Torna in locale: `git switch main`, `git pull origin main`, `git branch -d nome-del-ramo`

Il sito pubblico si aggiorna da solo (1-2 minuti) dopo l'unione in `main`.

### In VS Code

Pannello Controllo del codice sorgente (Ctrl+Shift+G): `+` prepara il file, il messaggio e la spunta fanno il commit, **Sync Changes** invia. La lettera accanto ai file è `M` (modificato), `A` (aggiunto), `U` (non ancora seguito).

### Cose utili

- Annullare una modifica non ancora salvata in un commit: `git restore nome-file`
- Vedere la cronologia: `git log --oneline`
- Nel file `.gitignore` si scrivono i file che Git deve ignorare (es. la vecchia versione `vecchio.html`)
- Mai pubblicare chiavi segrete (`service_role`, `sb_secret`): nel repository pubblico sono leggibili da tutti
- Prima di toccare più file insieme, fai `git status` per sapere sempre a che punto sei

Il sito pubblicato è raggiungibile da chiunque abbia il link.

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