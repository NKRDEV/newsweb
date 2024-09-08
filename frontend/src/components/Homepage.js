import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Fetch() {
    const [news, setData] = useState([]);
    useEffect(() => {
        fetch(' http://127.0.0.1:8000/')
        .then((response) =>  {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setData(data);
        });
    },[]);
    return (
        <div>
            {news.map((dataObj) => {
                return(
                    <div>
                        <h1><Link to={"/View/" + dataObj.id}> {dataObj.title}</Link></h1>
                        <p>{dataObj.id}</p>
                    </div>
                )
            })}
        </div>
    )
};
