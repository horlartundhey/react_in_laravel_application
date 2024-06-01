import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class Example extends Component{
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Employee List</div>
    
                            <div className="card-body">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>Moe</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>Dooley</td>
                                    <td>july@example.com</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Example;

if (document.getElementById('employeeApp')) {
    const Index = ReactDOM.createRoot(document.getElementById("employeeApp"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
