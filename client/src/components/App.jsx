import React from 'react';
import MainImage from './MainImage.jsx'


 class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

     render() {
        return (
            <div>
                <MainImage />
            </div>
        )
    }
}
export default App; 