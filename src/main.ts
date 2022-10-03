import App from "./App.svelte";

const app = new App({
  target: document.body,
});
console.log(Neutralino);

// Need to initialize Neutralino. If there are errors reltated to unknown or undefined variables
// caused by this call (Like NL_PORT), it could be that neutralino.js isn't being loaded from
// the neutralino.js server. Neutralino ADDS VARIABLES TO THE CLIENT LIB on request, so loading it
// from some other place (like the Vite dev server) WILL cause problems
Neutralino.init();
Neutralino.events.on("windowClose", () => {
  Neutralino.app.exit();
});

export default app;
