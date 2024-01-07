import { Link } from "react-router-dom";
import { supportedLanguages } from "./LanguageConfig";
import "./LanguageSelection.css";

function LanguageSelection() {
  return (
    <>
      {supportedLanguages.map((lang) => (
        <Link
          to={`/codeArea/${lang.languageCode}`}
          key={lang.language}
          className="text-decoration-none"
        >
          <span className="languageBox d-flex align-items-center justify-content-center mt-4">
            {lang.language}
          </span>
        </Link>
      ))}
    </>
  );
}

function LanguageSelectionMenu() {
  return (
    <div id="languageSelectionMenu">
      <div
        id="appTitle"
        className="d-flex align-items-center justify-content-center"
      >
        Code Air
      </div>
      <div
        id="languageSelectionArea"
        className="d-flex align-items-center flex-column mt-5"
      >
        <LanguageSelection />
      </div>
    </div>
  );
}

export default LanguageSelectionMenu;
