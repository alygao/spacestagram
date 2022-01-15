import './Feed.css';
import { useState, useEffect} from "react";
import Card from '../Card/Card';
import fetchData from '../fetchData';
import Loader from '../Loader/Loader';

function Feed() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            const data = await fetchData();
            console.log(data);
            setLoading(false);
            setData(data.reverse());
        };
        fetch();
    }, []);


    return (
        <div className="Feed">
            {loading 
                ?   <Loader/> 
                :   data.map((cardData) => (
                        <Card key={cardData.title} cardData={cardData}/>
                    ))
            }
        </div>
    );
}

export default Feed;