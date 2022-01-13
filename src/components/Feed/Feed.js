import './Feed.css';
import { useState, useEffect} from "react";
import Card from '../Card/Card';
import fetchDataFromDateRange from '../fetchDataFromDateRange';
import Loader from '../Loader/Loader';

function Feed() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        const fetchData = async () => {
            let endDate = new Date();
            let startDate = new Date(endDate);
            startDate = new Date(startDate.setDate(endDate.getDate() - 14))
            setLoading(true);
            const data = await fetchDataFromDateRange(startDate, endDate);
            setLoading(false);
            setData(data.reverse());
        };
        fetchData();
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