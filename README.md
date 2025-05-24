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

## (:romania:) Pasi instalare:

### Vom realiza template-ul proiectului folosind urmatoarea comanda:

```
npx create-next-app
```

> [!NOTE]
> Pentru a putea rula comanda, trebuie să avem instalat NodeJS. Urmati pasii de setup descrisi in poza de mai jos.

![Image](https://github.com/user-attachments/assets/d3819f61-a87d-4661-ba5f-6b4ea3e7001b)

Ulterior, vom naviga in ticket-app -> app -> globals.css (vom sterge tot si vom inlocui cu ce avem jos)

```
@import "tailwindcss";
npm install mongodb mongoose
```

Vom crea un nou folder in ticket-app -> app, numit "TicketPage" (aici vom avea paginile aplicatiei noastre). Aici vom realiza un fisier nou, numit "page.jsx". De asemenea, redenumim fisierul "page.js" (/ticket-app/app/page.js) in "page.jsx".

```
// ticket-app/app/TicketPage/page.jsx

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;
```

### API:

formData - variabila folosita in API Calls
