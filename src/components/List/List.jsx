import { dataBase } from "../../utils/db";
import "./List.css";

export const List = () => {
    return (
        <>
            <ul>
                {dataBase.map((el) => (
                    <li>{el.place}</li>
                ))}
            </ul>
        </>
    );
};
