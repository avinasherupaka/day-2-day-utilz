import React from 'react';

const csvtojson = require('csvtojson')
import copy from 'copy-to-clipboard';

export default class CsvToJson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputJsonData: "",
            sampleCsvData: `carModel,price,color,mileage
Aston Martin DB11,250000,blue,7200
Bentley  Bentayga,201000,red,null
Ferrari 458 Italia,269000,yellow,null
Porsche718 Boxster ,74000,green,null`,
        };
    }

    convertToJson = () => {
        csvtojson().fromString(this.csvtext.value)
            .on('end_parsed', (jsonArrObj) => {
                const result = JSON.stringify(jsonArrObj, null, 2);
                copy(result);
                return this.setState({"inputJsonData": result});
            })
    };

    render() {
        return (
            <div className="my-container col-xlg-6 col-xlg-push-3 col-sm-8 col-sm-push-2 col-xsm-12 form-group">
                <h2>Convert CSV To JSON</h2>
                <hr/>
								<br/>
                <strong style={{fontSize: "large"}}>CSV Data To Convert</strong>
                <br/><br/>
                <textarea defaultValue={this.state.sampleCsvData} ref={(c) => this.csvtext = c} rows="6"/>
                <br/><br/>
                <button className="btn btn-primary" onClick={this.convertToJson}>
                    Convert To JSON & Copy
                </button>
                &nbsp;
                <br/><br/><br/>
                <strong style={{fontSize: "large"}}>JSON Data</strong>
                <br/><br/>
                <span className="prettify">
                 <pre>{this.state.inputJsonData}</pre>
                </span>
            </div>
        );
    }
}
