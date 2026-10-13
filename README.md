# Dev Stack

A responsive website where developers can browse popular technologies and build their own tech stack.


## About
Dev Stack lists frontend, backend, database, language, styling, DevOps and tool technologies. You can read a short description, check rating and difficulty, and add what you like to a "Your Stack" panel.

## Technologies Used
React 18, Vite, Tailwind CSS, DaisyUI, React-Toastify, JavaScript (ES6+), JSON

## Features
- **Build your stack:** add technologies from cards, see them in the sidebar, remove one or all at once.
- **No duplicates:** an added card is disabled and shows "✓ Added to Stack"; a duplicate attempt shows a warning toast.
- **Fully responsive with a single gradient theme:** change `--brand-gradient` in `src/index.css` to re-theme the whole UI.

## Run locally
bash
npm install
npm un dev


## Reac Questions

**1. What is JSX, and why is it used in React?**
JSX is HTML-like syntax written inside JavaScript. It lets us describe the UI right next to the logic, and it gets compiled int normal JavaScript function calls.

**2. What is the difference between props and state?**
Props are data passed into a component from its parent and are read-only. State is data a component owns and can change; when it changes, the component re-renders.

**3. What does the useState hook do, and where did you use it?**
It stores a value that can change and triggers a re-render when updated. I used it in `App.jsx` for `technologies`, `loading` and `stack`.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
It runs side effects after render. Fetching the JSON is a side effect, so I used `useEffect` with an empty dependency array to load the data once when the app starts.

**5. Why does every item in a .map() list need a unique key prop?**
React uses the key to tell which items were added, changed or removed, so it updates only the rght ones and keeps the list correct and fast.

**6. What is conditional rendering?**
Showing different UI based on a codition. In `StackPanel.jsx`, if `stack.length === 0` I show the empty message, otherwise I show the list of selected technologies.

**7. How do you pass data from parent to chil, and how does a child send something back?**
The parent passes data as props (`<TechCard tech={tech} />`). For the child to send something back, the parent passes a function as a prop (`onAdd`) and the child calls it, like `onAdd(tech)`.
