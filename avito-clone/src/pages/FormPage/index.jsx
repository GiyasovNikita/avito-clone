import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Container, TextField, Button, MenuItem, Typography} from '@mui/material';
import categories from "src/config/categories.js";
import RealEstateForm from "src/components/forms/RealEstateForm";
import CarForm from "src/components/forms/CarForm";
import ServiceForm from "src/components/forms/ServiceForm";

function FormPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
        type: '',
        image: '',
    });

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/items/${id}`)
                .then(response => {
                    if (response.data) {
                        setFormData(response.data);
                    }
                })
                .catch(error => console.error('Ошибка при загрузке объявления:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id ? `http://localhost:3000/items/${id}` : 'http://localhost:3000/items';

        axios[method](url, formData)
            .then(() => navigate('/list'))
            .catch(error => console.error('Ошибка при сохранении объявления:', error));
    };

    let CategoryForm = null;
    switch (formData.type) {
        case "Недвижимость":
            CategoryForm = <RealEstateForm formData={formData} setFormData={setFormData}/>;
            break;
        case "Авто":
            CategoryForm = <CarForm formData={formData} setFormData={setFormData}/>;
            break;
        case "Услуги":
            CategoryForm = <ServiceForm formData={formData} setFormData={setFormData}/>;
            break;
        default:
            CategoryForm = null;
    }

    return (
        <Container>
            <Typography variant="h4" sx={{mb: 2, mt: 2}}>{id ? 'Редактирование' : 'Создание'} объявления</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Название"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{mb: 2}}
                />
                <TextField
                    label="Описание"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    required
                    multiline
                    rows={3}
                    sx={{mb: 2}}
                />
                <TextField
                    label="Локация"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{mb: 2}}
                />
                <TextField
                    label="Ссылка на изображение"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    fullWidth
                    sx={{mb: 2}}
                />
                <TextField
                    select
                    label="Категория"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{mb: 2}}
                >
                    {Object.keys(categories).map((cat) => (
                        <MenuItem key={cat} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </TextField>

                {CategoryForm}

                <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt: 2}}>
                    {id ? 'Сохранить изменения' : 'Создать объявление'}
                </Button>
            </form>
        </Container>
    );
}

export default FormPage;
