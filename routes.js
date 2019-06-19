import {createStackNavigation} from 'react-navigation';

import Main from './app';

export default createStackNavigation({
    Main
}, { 

    navigationOptions: {
        headerStyle: {
            backgroundcolor: "#DA552F"

        }, 
        headerTintColor:"#FFF"
    }
}

);