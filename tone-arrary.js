import React, { Component } from "react";
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

export default class FetchApi extends React.Component {
    state = {
        loading:true,
        tone: []
    }

    async componentDidMount(){
        const toneAnalyzer = new ToneAnalyzerV3({
            version: '2017-09-21',
            authenticator: new IamAuthenticator({
            apikey: 'rq9dU-r31NCyAD6EAmKfCzwH6xrImP_-QWo5wUVDH1f8',
            }),
            url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
          });

          const response = fetch(url);
          const data = await response.json();
          this.setState({tone:data.result.document_tone.tones.tone_id[0], loading:false});
          console.log(data.result.document_tone.tones.tone_id);

    }

    render(){
        if (this.state.loading){
            return <div>loading...</div>
        }

        if (this.state.tone.length){
            return <div>didn't get a tone</div>
        }

        return (
            <div>
                {this.state.people.map(tone =>(
                    <div>
                        {tone.tone_id}
                    </div>
                ) )}
            </div>
        )
        
    }
}