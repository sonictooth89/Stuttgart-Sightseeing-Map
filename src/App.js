import "./App.css";
import { Main } from "./components/Main/Main";
import { MyHeader } from "./components/MyHeader/MyHeader";

export const App = () => {
    return (
        <div className="App">
            <MyHeader />
            <Main />
        </div>
    );
};
