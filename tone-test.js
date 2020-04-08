const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

//Initialize the Tone Analyzer by giving it credentials
const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: 'rq9dU-r31NCyAD6EAmKfCzwH6xrImP_-QWo5wUVDH1f8',
  }),
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
});
export default toneAnalyzer