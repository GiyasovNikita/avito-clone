import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import {Container, Typography, Grid, Button, Box} from '@mui/material';
import SearchBar from 'src/components/SearchBar';
import CategoryFilter from 'src/components/CategoryFilter';
import AdCard from 'src/components/AdCard';
import PaginatedList from 'src/components/PaginatedList';

function ListPage() {
    const [ads, setAds] = useState([]);
    const [filteredAds, setFilteredAds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:3000/items')
            .then(response => {
                console.log("Данные с сервера:", response.data);
                setAds(response.data);
                setFilteredAds(response.data);
            })
            .catch(error => console.error('Ошибка при получении данных:', error));
    }, []);

    useEffect(() => {
        let results = ads.filter(ad => ad.name && ad.name.toLowerCase().includes(searchTerm.toLowerCase()));
        if (category) {
            results = results.filter(ad => ad.type === category);
        }
        setFilteredAds(results);
        setPage(1);
    }, [searchTerm, category, ads]);

    return (
        <Container>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", mt: 2, mb: 2}}>
                <Typography variant="h4">Список объявлений</Typography>
                <Button
                    component={Link}
                    to={`/form`}
                    variant="contained"
                    color="primary"
                >
                    Разместить объявление
                </Button>
            </Box>
            <SearchBar searchTerm={searchTerm} setSearchTerm={(value) => {
                setSearchTerm(value);
                setPage(1);
            }}/>
            <CategoryFilter category={category} setCategory={(value) => {
                setCategory(value);
                setPage(1);
            }}/>

            <PaginatedList
                items={filteredAds}
                itemsPerPage={5}
                renderItem={(ad) => (
                    <Grid item xs={12} key={ad?.id || Math.random()}>
                        <AdCard ad={ad}/>
                    </Grid>
                )}
                page={page}
                setPage={setPage}
            />
        </Container>
    );
}

export default ListPage;
