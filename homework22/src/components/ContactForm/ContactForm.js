    import React, { Component } from 'react'

    export class ContactForm extends Component {

        state = {
            values: {
                name: '',
                surname: '',
                email: '',
            },
            errors: null,
            isDirty: {
                name: false,
                surname: false,
                email: false,
            },
        }


    onInputChange = (e) => {

        const values = {
            ...this.state.values,
            [e.target.name]: e.target.value,
        };
        this.setState({
            values: values,
            errors: this.validate(values),
            isDirty: {
            ...this.state.isDirty,
            [e.target.name]: true,
            }
        });

    
    }

        onFormSubmit = (e) => {
            e.preventDefault();

            this.props.onSave(this.state.values);
        }

    validate(name, surname, email) {
        const errors = {};
        
        if (name === '') {
            errors.name = 'Name is required'
        }
        if (surname === '') {
            errors.surname = 'Name is required'
        }
        if (email === '') {
            errors.email = 'Name is required'
        }
        
        return Object.keys(errors).length ? errors : null;
    }
     

    render() {
        return (
            
        <div className="row">
            <form onSubmit={this.onFormSubmit}>
            <div className="columns">
                    <input
                    
                    name="name"
                    value={this.state.values.name}
                    onChange={this.onInputChange}
                    />
                
                </div>

        <div className="columns"><input name="surname" value={this.state.values.surname} onChange={this.onInputChange}/></div>
        <div className="columns"><input name="email" value={this.state.values.email} onChange={this.onInputChange}/></div>
        <div className="columns">
        <button>Save</button>
        </div>
        </form>
    </div>
        )
    }
    }

    export default ContactForm;