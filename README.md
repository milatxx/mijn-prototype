# Skincare MVP - Glide vs JS

**Glide:** https://radmilas-app.glide.page  
**Git:** https://github.com/milatxx/mijn-prototype.git

## Scope
Eén kernflow:
1) **Product toevoegen** aan persoonlijke routine  
2) **Routine tonen** (overzicht)

Vergelijking tussen **Glide (low-code)** en **klassiek JS** (klein prototype in HTML/CSS/JS).

## Onderzoeksvraag
“Kan ik met Glide een volwaardige MVP maken die bruikbaar, performant en uitbreidbaar genoeg is voor dit type toepassing?”

## Methode
- 5 gebruikerstesten (kwalitatief)  
- Metingen: **SUS**, **taak-succes%**, **LCP** (ms, doel < 800)  
- Extra analyse: **kosten/limieten** (~100 users) + **privacy/security** (auth & data-toegang in Glide)

## Resultaten (samenvatting)
| Metric | Doel | Glide | JS |
|---|---:|---:|---:|
| SUS | ≥ 70 | **66** | **78** |
| Taak-succes | ≥ 85% | **84%** | **92%** |
| LCP (ms) | < 800 | **930** | **610** |

**Kort besluit:** Glide levert deze kernflow op maar zat voor mij net onder UX/performance-drempels en voelde minder flexibel; **JS** was sneller en gaf meer controle.

## Run (JS-prototype) 

1. Open je projectmap in VS Code.
2. Installeer de extensie **“Live Server”** (Ritwick Dey).
3. Open `prototype/index.html`.
4. Rechterklik → **Open with Live Server** (of klik onderaan op **Go Live**).
5. Je app opent op een URL zoals  
   `http://127.0.0.1:5500/index.html` (pad kan licht verschillen).

> Live Server refresht automatisch bij opslaan.
