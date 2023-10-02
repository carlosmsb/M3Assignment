let languageCode = prompt("Enter a language code (es, de, en, fr):").toLowerCase(); // Convert to lowercase

let translations = {
  es: "Hola Mundo",
  de: "Hallo Welt",
  en: "Hello World",
  fr: "Bonjour le monde",
};
//Check the entered language
if (translations[languageCode]) {
  console.log(`Hello World translated in ${languageCode} is: ${translations[languageCode]}`);
} else {
  console.log("Hello World translated in English is: Hello World"); 
//Default to English
}
