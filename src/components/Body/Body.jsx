import { List } from "../List/List";
import { Main } from "../Main/Main";
import "./Body.css";

export const Body = () => {
    return (
        <>
            <div className="body">
                <List className="list" />
                <Main clasName="main" />
            </div>
        </>
    );
};
