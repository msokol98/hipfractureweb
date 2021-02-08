import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import './styles.css';

class FormTemplate extends Component {

    state = { 
        fields: this.props.fields,
        validationError: false
     };

    handleChange(e) {
        const { fields } = this.state;
        const name = e.target.name, newValue = e.target.value;
        const oldField = fields[name];
        const updatedField = {...oldField, value: newValue};

        this.setState({fields: {...fields, [name]: updatedField}});
    }

    handleSubmit(e) {
        e.preventDefault();
        const { fields } = this.state, { validate, submit } = this.props;

        if(!validate || validate(fields)) {
            const formData = {};

            for (let name in fields)
                formData[name] = fields[name].value;

            submit(formData);
        } else {
            this.setState({validationError: true});
        }
    }

    render() { 

        const { fields, validationError } = this.state, formFields = [];

        for (let name in fields) {
            formFields.push({
                name,
                ...fields[name]
            })
        }

        return(
            <div style={{paddingTop: "3%"}}>
                <form onSubmit={e => this.handleSubmit(e)} className="content container bordered has-background-white auth-form">
                    
                    <h3 className="title has-text-weight-light ">{this.props.header}</h3>

                    {formFields.map(field => (
                        <div key={field.name} style={{padding: "10px 0"}}>
                            <label>{field.displayName}</label>

                            <input 
                                required
                                className="input"
                                type={field.type} 
                                name={field.name} 
                                value={field.value}
                                onChange={e => this.handleChange(e)} 
                                placeholder={field.displayName}
                            />
                        </div>
                    ))}
                    <br />

                    {validationError && <Alert variant="danger">{this.props.validationErrorMessage}</Alert>}
                    {this.props.error && <Alert variant="danger">{this.props.serverErrorMessage}</Alert>}

                    <button className="button is-info is-fullwidth" type="submit">Submit</button>
                    
                    {this.props.extraJsx && this.props.extraJsx}    
                </form>
            </div>
        );

    }
}
 
export default FormTemplate;