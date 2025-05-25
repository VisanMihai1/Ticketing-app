# Ticketing-app

Project tech Stack:

- Tailwind CSS
- Next.js
- Node.js
- MongoDB / Mongoose
- Vercel (site hosting provider)

If you dont already have those technologies setup, here are some useful links:

- NodeJS - https://nodejs.org/en/download/
- Git - https://git-scm.com/downloads
- MongoDB Account - https://account.mongodb.com/account/login

## :romania: Pasi setup rapid, pentru instalare locala:

```
git clone https://github.com/VisanMihai1/Ticketing-app.git
npm install
npm run dev
```

> [!NOTE]
> Pentru a putea rula comenzile de mai sus, trebuie să avem instalat NodeJS.


[Prezentarea video](https://youtu.be/CP7TKFG1Cms) a aplicatiei

## Snapshots ale aplicatiei

![Screenshot 2025-05-25 at 23 50 41](https://github.com/user-attachments/assets/09014cdd-91b6-453a-8572-4542150c99e8)

![Screenshot 2025-05-25 at 23 51 03](https://github.com/user-attachments/assets/7ef5a609-0611-4e4b-888a-5e231276e3fb)

## Descriere API

  API-ul folosit este un serviciu RESTful pentru gestionarea tichetelor de suport sau de proiect. Este construit folosind rutele API Next.js și utilizează MongoDB (prin intermediul Mongoose) pentru stocarea datelor. API-ul permite clienților să creeze, să citească, să actualizeze și să șteargă înregistrări de tichete, ceea ce îl face potrivit pentru aplicații de tip helpdesk, management de proiect sau de urmărire a problemelor (issue tracking). Acest API oferă operațiuni CRUD (Creare, Citire, Actualizare, Ștergere) complete pentru tichete, cu validare robustă și răspunsuri la erori.

### Flux de date

  Modelul de date: un tichet contine urmatoarele campuri:
- title (string): Titlul tichetului (camp obligatoriu)
- description (string): Detailed description (camp obligatoriu)
- category (string): Categoria tichetului (problema hardware, software, dezvoltare aplicatie, proiect si altele) (camp obligatoriu)
- priority (number): Nivel de prioritate (camp obligatoriu)
- progress (number): Procent progres (intre 0–100, camp obligatoriu)
- status (string): Status tichet (camp obligatoriu)
- active (boolean): (optional, nu este cerut de catre API)

### End points si metode

Pentru returnarea tuturor înregistrărilor din colecția tickets, o să ne folosim de path-ul /api/records și cu metoda **GET**: http://localhost:3000/api/Tickets

<img width="805" alt="Image" src="https://github.com/user-attachments/assets/7afd22a5-ac72-451b-b142-57594213eda6" />

In cazul unei probleme cu baza de date, vom primi mesajul: 500 Internal Server Error

Daca dorim sa preluam un tichet specific, vom introduce urmatoarea adresa, folosind metoda **GET**: http://localhost:3000/api/Tickets/683223f847d67e46767fbbf5

<img width="815" alt="Screenshot 2025-05-25 at 23 45 35" src="https://github.com/user-attachments/assets/91eae670-73e7-464b-b679-be46d17a5396" />

Erorile pe care le-am definit sunt urmatoarele:
- 400 Bad Request. daca ID-ul din adresa lipseste
- 404 Not Found, daca tichetul nu exista
- 500 Internal Server Error, in cazul unei probleme cu baza de date

Pentru a incarca un nou ticket in baza de date, vom folosi metoda **POST**, pe acest link: http://localhost:3000/api/Tickets
Exemplu de request:

<img width="370" alt="Screenshot 2025-05-25 at 23 46 20" src="https://github.com/user-attachments/assets/4e8f409b-259b-4b52-b67d-61b6f8f5d0b7" />

Exemplu de response:

<img width="322" alt="Screenshot 2025-05-25 at 23 46 34" src="https://github.com/user-attachments/assets/30fb9a24-db35-42bc-8d51-d86d05128a12" />

Erorile pe care le-am definit sunt urmatoarele:
- în cazul în care se incearca trimiterea unui body din care lipseste un parametru, utilizatorul
primeste cod 400 Bad Request si mesajul “Missing required fields!” sau "error: Progress
must be a number between 0 and 100" in cazul in care se introduce date de tip non number
sau string.
- In cazul unei probleme cu baza de date, vom primi mesajul: 500 Internal Server Error

Pentru actualizarea unui tichet existent, vom folosi metoda **PUT**, pe acest link:
http://localhost:3000/api/Tickets/6832f160323591972fde4013

Exemplu de request:

<img width="403" alt="Screenshot 2025-05-25 at 23 47 22" src="https://github.com/user-attachments/assets/d9398963-0f37-4df7-86c7-ba40d5316b2e" />

Exemplu de response:

<img width="472" alt="Screenshot 2025-05-25 at 23 47 34" src="https://github.com/user-attachments/assets/76499e91-1ca2-4e37-ac14-cf3ac4d4f8c7" />

Erorile pe care le-am definit sunt urmatoarele:
- 404 Bad Request daca unul sau mai multe campuri lipsesc
- 404 Not Found daca ticketul nu exista
- 500 Internal Server Error daca exista erori cauzate de baza de date

Pentru stergerea unui ticket, folosim metoda **DELETE**, pe acest link: http://localhost:3000/api/Tickets/6832f160323591972fde4013

Exemplu de response:

<img width="304" alt="Screenshot 2025-05-25 at 23 48 18" src="https://github.com/user-attachments/assets/2cb6fed2-23f7-4c30-8aad-def43e0db7c7" />

Erorile pe care le-am definit sunt urmatoarele:
- 400 Bad Request. daca ID-ul din adresa lipseste
- 404 Not Found, daca tichetul nu exista
- 500 Internal Server Error, in cazul unei probleme cu baza de date

## Autentificare 

Pentru a folosi MongoDB, am avut nevoie de o cheie de logare, care e compusa din adresa serverului si credentiale de logare (user + parola), pe care le-am inclus in fisierul .env.

## Concluzii

Pentru a dezvolta mai departe aplicatia, ma gandesc la implementarea urmatoarelor functionalitati, crescand astfel utilitatea acesteia pentru angajatii Inovații Verzi SRL:
- Autentificare și Autorizare Utilizatori
- Comentarii la Tichete și Jurnal de Activitate
- Atașamente de Fișiere
- Notificări prin Email
- Filtrare și Căutare Avansată
- Interfață Utilizator (UI) Responsivă și Accesibilă
- Panou de Control (Dashboard) și Analize (Analytics)
- Îmbunătățiri de Performanță

## Nota personala
Am invatat sa folosesc mai bine GitHub si beneficiile aduse de aceasta, prin version control, am avut placerea sa dezvolt prima aplicatie web hostata pe un serviciu accesibil, ca Vercel si cea mai interesanta dintre toate: deploymentul imaginii docker pe o masina AWS.
