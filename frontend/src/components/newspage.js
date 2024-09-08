import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function View() {
    const { id }=useParams();
    const [news, setData] = useState([]);
    useEffect(() => {
        fetch(' http://127.0.0.1:8000/webapp/' + id )
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
                <div>
                    <h1>{news.title}</h1>
                    <p>{news.description}</p>
                    <p>{news.author}</p>
                </div>  
        </div>
    )
}