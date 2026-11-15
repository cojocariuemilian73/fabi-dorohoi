# Fabi food&coffee · Dorohoi

Site static pentru Fabi food&coffee (Aleea Cristalului 11, Dorohoi), făcut din șablonul pentru cafenele. Pentru a-l testa local, rulează `python -m http.server 8791 --bind 127.0.0.1` din acest folder și deschide `http://127.0.0.1:8791/`.

## Actualizare
Toate datele sunt în `sursa/date-site.json`. După ce le modifici, rulează:
```
python sursa/optimizeaza_imagini.py
python sursa/genereaza.py
```
Pozele sunt în `assets/img/fabi/`.

## Surse
- Adresa, telefonul, programul (zilnic 07:00–22:00) și scorul (4,8 din 78 de recenzii) vin de pe fișa Google Maps.
- Meniul (20 de produse) e transcris din fotografia meniului de pe Google Maps, din august 2026. Prețurile trebuie confirmate de local, apoi pui `meniuExemplu` pe `false`.
- Recenziile sunt cele 18 trimise de proprietar, copiate exact.
- Toate pozele sunt ilustrative: coperta e o imagine generată, iar pizza, burgerul și crispy-ul sunt de pe Pexels ([licența Pexels](https://www.pexels.com/license/)). Le înlocuiești cu poze reale de la Fabi.

## De completat înainte de lansare
1. Poze reale: fațada, interiorul și produsele. Pentru coperta mare îți trebuie cel puțin 1600 px lățime.
2. Confirmarea meniului, plus cafeaua și băuturile cu prețuri.
3. Facebook, Instagram, WhatsApp și e-mail, dacă există.
4. Aprobarea patronului pentru oferte: voucherul „Prima cafea e din partea casei” și premiile de la roată. Până atunci `extra.activ` se poate pune pe `false`.
5. Adresa finală. Acum e propusă `https://cojocariuemilian73.github.io/fabi-dorohoi/`. Dacă se schimbă, actualizezi `publicUrl` și rulezi `python sursa/qr.py`, apoi `genereaza.py`.

## Comenzi online
- Coșul (mărimi, extra, meniu, ridicare / livrare / la masă, comandă din nou) e pe site și pe `meniu.html`. Pentru masă: `meniu.html?masa=5`.
- `comenzi.prezentare: true` = comanda nu pleacă, clientul e rugat să sune. Pune `false` când Fabi urmărește `panou.html` (Supabase e deja legat).
- Panoul pentru local: `panou.html` (tableta de la bar, cu sunet la comandă nouă). Butoane: Accept 15/20/30 min, Refuz, E gata, Predată. Clientul vede starea pe telefon.
- Fără Supabase rulează în mod demonstrație: comanda rămâne în browser și se vede în panou doar pe același dispozitiv.
- Datele sunt în `date-site.json` → `comenzi`. Prețurile pentru mărimi, extra și meniu sunt EXEMPLE (`exemple: true`) până le confirmă Fabi.

### Pornire pe bune
1. Cont gratuit pe supabase.com → proiect nou (regiunea Frankfurt).
2. SQL Editor → lipește și rulează `sursa/comenzi.sql`.
3. Authentication: oprește înscrierile noi, adaugă utilizatorul patronului (e-mail + parolă), apoi rulează linia `insert into personal …` din capul fișierului SQL.
4. În `date-site.json` → `comenzi`: `supabaseUrl` și `supabaseCheie` (cheia publică anon/publishable, NU service_role), prețurile confirmate, `exemple: false`, `activ: true`.
5. `python sursa/genereaza.py`, commit, push. Fă o comandă de test și verific-o în panou.
