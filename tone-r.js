import React, { Component } from "react";
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

export default class FetchApi extends React.Component {
    state = {
        loading:true,
        tone:null
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

        if (this.state.loading){
            return <div>didn't get a tone</div>
        }

        return <div>
            {this.state.loading || !this.state.tone ? (
            <div>loading...</div> ) 
            : (
            <div>
                <div>
                    <div>{this.state.tone.tone_id}</div>
                </div>
            </div>
            )}
        </div>
    }
}












// export class FetchApi extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			loading: true,
// 			person: null,
// 		};
// 	}

// 	//fetch data from an Api
// 	async componentDidMount() {
// 		const url = "https://api.randomuser.me/";
// 		const response = await fetch(url);
// 		const data = await response.json();
// 		this.setState({
// 			person: data.results[0],
// 			loading: false,
// 		});
// 	}
// 	render() {
// 		return (
// 			<div>
// 				{this.state.loading || !this.state.person ? (
// 					<div>loading...</div>
// 				) : (
// 					<div>
// 						<div>{this.state.person.name.first}</div>
// 						<div>{this.state.person.name.last}</div>
// 						<div>{this.state.person.name.title}</div>
// 						<img src={this.state.person.picture.large} />
// 					</div>
// 				)}
// 			</div>
// 		);
// 	}
// }

// export default FetchApi;





// // To map for multiple people

// import React, { Component } from "react";

// export class FetchApi extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			loading: true,
// 			person: null,
// 		};
// 	}

// 	//fetch data from an Api
// 	async componentDidMount() {
// 		const url = "https://api.randomuser.me/";
// 		const response = await fetch(url);
// 		const data = await response.json();
// 		this.setState({
// 			person: data.results[0],
// 			loading: false,
// 		});
// 	}
// 	render() {
// 		return (
// 			<div>
// 				{this.state.loading || !this.state.person ? (
// 					<div>loading...</div>
// 				) : (
// 					<div>
// 						<div>{this.state.person.name.first}</div>
// 						<div>{this.state.person.name.last}</div>
// 						<div>{this.state.person.name.title}</div>
// 						<img src={this.state.person.picture.large} />
// 					</div>
// 				)}
// 			</div>
// 		);
// 	}
// }

// export default FetchApi;

