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

//Text that to be analyzed.
const text = "Coding is too hard. This program is too hard.";

//The format that the tone analyzer needs.
const toneParams = {
    toneInput: { 'text': text },
    content_type: 'application/json',
    };
//Use Tone Analyzer varibale to analyze the text
    toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
//The tone of the text, as determined by watson
    console.log(JSON.stringify(toneAnalysis, null, 2));
    })
    .catch(err => {
    console.log('error:', err);
    });