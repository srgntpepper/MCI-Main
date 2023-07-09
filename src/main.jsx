import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import "./i18n";

// i18next
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ["en", "es", "fr", "it", "de", "pt", "zh", "ru"],
//     fallbackLng: "en",
//     debug: false,
//     // Options for language detector
//     detection: {
//       order: ["path", "cookie", "htmlTag"],
//       caches: ["cookie"],
//     },
//     // react: { useSuspense: false },
//     backend: {
//       loadPath: "src/assets/locales/{{lng}}/translation.json",
//     },
//   });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
