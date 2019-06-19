import React from 'react';


class CreatePlaylist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            type: "",
            description: "",

            formState: {
                isFormValid: true,
                isFormValid: true,
                isDescriptionValid: true
            }

        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onChange(event){
        let name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    validateForm(){
let newFormState = this.state.formState;

        if(!this.state.name){

           newFormState.isNameValid = false;
            newFormState.isFormValid = false;
    }

        if(!this.state.description){

            newFormState.isDescriptionValid = false;
            newFormState.isDescriptionValid = false;
    
    }

        this.setState({
            formState: newFormState
        });
    }

    handleSubmit(event){
        event.preventDefault();

        this.validateForm();
            
        }

      
    render() {
        return (
            <div>
                <h2 className="text-danger">Create Playlist</h2>

                <hr/>
                { !this.state.formState.isFormValid && 
                 <div className="alert alert-danger">

                 Please fill all the details and try again

                </div>
                
                }
            
                <form>
                    <div className="form-group">
                        <label htmlFor="">
                            Playlist Name:
                            <input name="name" 
                            onChange={this.onChange}  
                            className={`form-control ${
                                !this.state.formState.isNameValid && 
                                "is-invalid"
                            }`} 
                            type="text"/>
                        </label>
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="">
                             Select Playlist Type:
                             
                           <select name= "select" onChange={this.onChange} className="form-control">
                               <option value="public">Public</option>
                               <option value="private">Private</option>
                               <option value="unlisted">Unlisted</option>
                           </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">
                            Description:
                            <textarea
                            name="description" 
                            onChange={this.onChange} 
                            cols="40" 
                            rows="15" 
                            className={`form-control ${
                                !this.state.formState.isDescriptionValid && 
                                "is-invalid"
                            }`} 
                            >
                            </textarea>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-info">Create Playlist</button>
                </form>
            </div>
        );

    }
}


export default CreatePlaylist;