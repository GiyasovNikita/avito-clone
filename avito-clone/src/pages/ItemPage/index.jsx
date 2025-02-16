import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItemCard from 'src/components/ItemCard';

function ItemPage() {
    const { id } = useParams();
    const [ad, setAd] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/items/${id}`)
            .then(response => setAd(response.data))
            .catch(error => console.error('Ошибка при загрузке объявления:', error));
    }, [id]);

    return (
        <ItemCard ad={ad} />
    );
}

export default ItemPage;
