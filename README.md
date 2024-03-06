Hi there! This site was made using:<br/>
— Sveltekit<br/>
— Tailwind CSS<br/>
— Vercel (deployment/hosting)

#Install Dependencies and Run Dev-Server Locally:
- Install/update NodeJS
- Run terminal:
```
cd <folderpath>
npm install
npm run dev
```

# Why Svelte / Sveltekit?
Modern websites often feel slow and bloated because they send too much JavaScript to the user's browser. This hurts the experience and search engine rankings.  I wanted a solution that was fast, accessible, and didn't waste energy.  SvelteKit does this in a few ways:

- Component-based Architecture:<br/>
Breaks the website into smaller reusable components. This promotes better organization, making the website easier to manage and scale as it grows.

- Minimal JavaScript Footprint:<br/>
SvelteKit does a lot of the work during the build process before deployment instead of in the user's browser. This means smaller files to download and a snappier experience.

- Prefetching and Smart Updates:<br/>
SvelteKit includes prefetching for near-instant page transitions. It intelligently updates only the necessary parts of the page when any content needs to be changed. This avoids full page reloads, minimizing data transfer and browser work.

# Tailwind CSS
To streamline development, I used Tailwind CSS. It provides a collection of utility classes for styling, like "flex" for flexbox layouts or "text-red-500" for red text. These classes are directly added to HTML elements, allowing for quick and consistent styling.<br/>
While this approach can result in seemingly ugly HTML code, it helps avoid bloated stylesheets by:

- Having easy-to-understand names for each property rather than random class names that are complex and can lead to conflicts.

- Internalising styles with the elements without having to use in-line CSS.

- Reducing specifity, making it easy to override styles if needed.

- Removing all unused classes/styles, dramatically reducing the file size.

# Why Vercel for deployment?
It's free, directly linked and updates to my GitHub repository, and UI looks cooler than Netlify 🤷🏻‍♀️
