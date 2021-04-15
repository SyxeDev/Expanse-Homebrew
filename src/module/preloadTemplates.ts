export const preloadTemplates = async function () {
  const templatePaths = [
    // Add paths to "systems/ExpanseHomebrew/templates"
    "systems/ExpanseHomebrew/templates/sheets/crew-sheet.hbs",
  ];

  return loadTemplates(templatePaths);
};
