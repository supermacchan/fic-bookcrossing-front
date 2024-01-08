# FiCTiON bookcrossing website

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Technologies used:

- Next.js (app router)
- TypeScript
- Tailwind CSS

## Getting Started

1. Clone repo
2. Recommended for use **npm** - `npm i` or `npm install`
3. Create file `.env` in the project root using `.env.local.example` as a
   template.
4. Run the local server via `npm run dev` command.
5. Access the website at `http://localhost:3000`.

### Pre-commit actions

1. Run `npm run format` so that prettier could check and adjust your formatting.
2. Run `npm run test-all` if you'd like to perform a full code test. This
   command will also be executed automatically before commiting your changes to
   GH.
3. Fix the errors and if there are none - you can go ahead with commiting your
   changes to your branch.
4. Make sure to give your commit a name that clearly states what has been done:
   **add/update/fix/remove** + **feature/component name**. Example: _"update
   Header types & styles"_.

## Project structure

> Attention! The project structure is not final and can be changed at any time.

**☝️ Create a components folder for each module**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```
# ✅ Good

├── components
    ├── Header
        ├── Header.tsx
    ├── Footer
        ├── Footer.tsx
```

</details>

---

**☝️ Use the default export for the component**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```ts
# ✅ Good

const Header = () => { ... }

export default Header;
```

</details>

---

**☝️ Perform a re-export of your component from the `index.ts` file in the
`components` folder**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```ts
# ✅ Good

// @/components/index.ts

export { default as Header } from '@/components/Header/Header';
```

</details>

---

**☝️ Add `Section` to the section name when performing a re-export**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```ts
# ✅ Good

// @/sections/About/About.tsx

const About = () => { ... }

export default About;

// @/sections/index.ts

export { default as AboutSection } from '@/sections/About/About';
```

</details>

---

**☝️ Reusable css classes should be placed in the `styles` folder .**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```css
/*globals.css */

@layer components {
  .your-class {
    @apply ...;
  }
}
```

</details>

---

**☝️ Description of object structure**

<details>

<summary><b>💡 Structure: </b></summary>

<br/>

```
|-- components -> folder with reusable components
  |-- NameComponent -> folders for each component
    |-- NameComponent.tsx -> main component
    |-- NameComponent.props.ts -> prop types for this component
    |-- NameComponent.module.css -> additional styles for the component (only if necessary)
  |-- index.ts -> file for re-exports
|-- app
   -> layout, pages and routing
|-- public -> static files
  |-- icons -> folder with icons
  |-- images -> folder with images
|-- styles -> global styles
|-- sections -> folder with section components
  |-- SectionComponent -> folders for each section component
    |-- SectionComponent.tsx -> main section component
    |-- SectionComponent.props.ts -> prop types for this section component
    |-- SectionComponent.module.css -> additional styles for the component (only if necessary)
  |-- index.ts -> file for re-exports
|-- types -> global types
|-- data -> data for the project (website content )
|-- hooks -> custom users hooks (can be created if necessary)
|-- utils -> helpers, functions, etc.
|-- api -> data fetching requests
```

</details>

---
