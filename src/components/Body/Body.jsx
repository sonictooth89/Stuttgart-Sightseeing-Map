import { List } from "../List/List";
import { Main } from "../Main/Main";
import "./Body.css";

export const Body = () => {
    return (
        <>
            <div className="body">
                <div>
                    <List />
                </div>
                <div className="main">
                    <Main />
                </div>
            </div>
        </>
    );
};
