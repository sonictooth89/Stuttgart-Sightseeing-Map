import "./App.css";
import { Body } from "./components/Body/Body";
import { MyHeader } from "./components/MyHeader/MyHeader";

export const App = () => {
    return (
        <div className="App">
            <MyHeader />
            <Body />
        </div>
    );
};
