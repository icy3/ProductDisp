import React from 'react';


 class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

     render() {
        return (
            <div class="main-image-component">
                <img class="main-image"src="https://i.etsystatic.com/18215769/r/il/1e4591/1930365686/il_1588xN.1930365686_5lyo.jpg"></img>
                <img class="side-image" src="https://images-na.ssl-images-amazon.com/images/I/81td6K65nsL._AC_SX679_.jpg"></img> 
                <img class="side-image" src="https://images-na.ssl-images-amazon.com/images/I/81td6K65nsL._AC_SX679_.jpg"></img> 
                <img class="side-image" src="https://images-na.ssl-images-amazon.com/images/I/81td6K65nsL._AC_SX679_.jpg"></img> 
                <img class="side-image" src="https://images-na.ssl-images-amazon.com/images/I/81td6K65nsL._AC_SX679_.jpg"></img> 


            </div>


            // <div class="main-image-component" style="height: 443px;">
            //     <img src="https://images-na.ssl-images-amazon.com/images/I/81td6K65nsL._AC_SX679_.jpg" 
            //     class="a-dynamic-image" id="" style="max-height: 443px; max-width: 443px;" 
            //     data-old-hires="https://images-na.ssl-images-amazon.com/images/I/81td6K65nsL._AC_SL1500_.jpg"
            //     data-a-manual-replacement="true"></img>
            // </div>
        )
    }
}
export default App; 