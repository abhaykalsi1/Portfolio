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
In the age where websites are often weighed down by bloated client-side rendering (CSR) frameworks, hurting both user experience and search engine optimization (SEO), I prioritized principles that align with a focus on minimal JavaScript, accessibility, and environmental consciousness. SvelteKit proved to be an ideal framework for achieving these goals:

- Component-based Architecture:<br/>
Breaks your website into smaller reusable components. This promotes better organization, making the website easier to manage and scale as it grows.

- Minimal JavaScript Footprint:<br/>
SvelteKit is a compiler-based framework, meaning it pre-processes much of the logic during the build phase, and results in smaller JavaScript files sent to the browser, leading to faster page loads, less energy used on user devices, and a smoother experience compared to other frameworks that heavily rely on manipulating the DOM at runtime.

- Prefetching and Smart Updates:<br/>
SvelteKit includes prefetching for near-instant page transitions. It intelligently updates only the necessary parts of the page when any content needs to be changed. This avoids full page reloads, minimizing data transfer and browser work.

# Tailwind CSS
To streamline development, I used Tailwind CSS. It provides a collection of utility classes for styling, like "flex" for flexbox layouts or "text-red-500" for red text. These classes are directly added to HTML elements, allowing for quick and consistent styling. While this approach can result in code with many seemingly cryptic class names, it helps avoid bloated stylesheets. Often, traditional CSS leads to redundant or unused styles; Tailwind's approach keeps the CSS tightly coupled with the components that need it.

# Why Vercel for deployment?
It's free, directly linked and updates to my GitHub repository, and UI looks cooler than Netlify🤷🏻‍♀️
