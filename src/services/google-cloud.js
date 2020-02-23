const language = require('@google-cloud/language')

const client = new language.LanguageServiceClient();

module.exports = {
  language: client
}
