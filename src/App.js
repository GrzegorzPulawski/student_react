
import classes from './App.module.css';
import NavigationHeader from "./componenty/NavigationHeader";
import AppBody from "./componenty/AppBody";
function App() {
    return(
        <div className={classes.App}>
            <NavigationHeader/>
            <AppBody/>
        </div>
    );
}

export default App;