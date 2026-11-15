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
