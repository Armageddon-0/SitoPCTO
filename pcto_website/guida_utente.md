# Guida all'Utilizzo del Sito Web PCTO

## Introduzione
Questa guida fornisce istruzioni dettagliate su come utilizzare, modificare e personalizzare il sito web del tuo percorso PCTO. Il sito è stato progettato per essere facilmente gestibile anche senza conoscenze avanzate di programmazione.

## Struttura del Sito
Il sito è composto da 4 pagine principali:
- **index.html**: Homepage con panoramica generale del percorso PCTO
- **anno3.html**: Pagina dedicata all'esperienza presso MAST
- **anno4.html**: Pagina dedicata all'esperienza presso Lepida
- **anno5.html**: Pagina dedicata all'esperienza presso Project

## Come Inserire le Immagini
Per inserire le immagini nei placeholder predisposti:

1. **Preparazione delle Immagini**:
   - Assicurati che le immagini siano in formato JPG, PNG o WebP
   - Dimensioni consigliate: 800x600px per le immagini grandi, 400x300px per le card
   - Ottimizza le immagini per il web (compressione)

2. **Inserimento nel Sito**:
   - Copia le tue immagini nella cartella `/images`
   - Apri il file HTML della pagina che desideri modificare (es. `anno3.html`)
   - Cerca i blocchi con classe `image-placeholder`
   - Sostituisci il contenuto del placeholder con il tag immagine:
   
   ```html
   <!-- Da questo: -->
   <div class="image-placeholder">
       <p>Logo MAST</p>
   </div>
   
   <!-- A questo: -->
   <div class="image-placeholder">
       <img src="images/logo-mast.jpg" alt="Logo MAST">
   </div>
   ```

3. **Immagini per i Clienti e Progetti**:
   - Segui lo stesso procedimento per le sezioni dedicate ai clienti e ai progetti

## Come Modificare i Contenuti
Per modificare i testi e altri contenuti:

1. **Modifica dei Testi**:
   - Apri il file HTML della pagina che desideri modificare
   - Cerca il testo da modificare all'interno dei tag `<p>`, `<h1>`, `<h2>`, ecc.
   - Sostituisci il testo mantenendo i tag HTML

2. **Modifica dei Link**:
   - Per modificare un link, cerca i tag `<a href="...">` e cambia il valore dell'attributo `href`

3. **Aggiunta di Nuove Sezioni**:
   - Puoi copiare e incollare blocchi esistenti e modificarne il contenuto
   - Mantieni la struttura dei div e delle classi per preservare lo stile

## Personalizzazione dello Stile
Per modificare colori, font o altri elementi di stile:

1. **Modifica dei Colori**:
   - Apri il file `css/style.css`
   - Cerca la sezione `:root` all'inizio del file
   - Modifica i valori delle variabili dei colori (es. `--primary: #3498db;`)

2. **Modifica dei Font**:
   - Cerca la sezione di importazione dei font all'inizio del file CSS
   - Modifica i nomi dei font nelle regole per `body`, `h1`, ecc.

## Pubblicazione del Sito
Per pubblicare il sito online:

1. **Utilizzo di Servizi di Hosting**:
   - Carica tutti i file su un servizio di hosting web (es. GitHub Pages, Netlify, ecc.)
   - Mantieni la stessa struttura di cartelle

2. **Pubblicazione Locale**:
   - Puoi anche utilizzare il sito localmente aprendo i file HTML con un browser

## Risoluzione Problemi
Se riscontri problemi con il sito:

1. **Immagini non visualizzate**:
   - Verifica che il percorso delle immagini sia corretto
   - Controlla che le immagini siano nella cartella `/images`

2. **Stile non applicato**:
   - Assicurati che il file CSS sia nella cartella `/css`
   - Verifica che i link al file CSS nelle pagine HTML siano corretti

3. **Funzionalità JavaScript non funzionanti**:
   - Controlla che il file JavaScript sia nella cartella `/js`
   - Verifica che i link al file JS nelle pagine HTML siano corretti

## Contatti per Supporto
Per ulteriore assistenza o modifiche più complesse, contatta il creatore del sito.
