import {TextField, MenuItem} from "@mui/material";

function RealEstateForm({formData, setFormData}) {
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <>
            <TextField select
                       label="Тип недвижимости"
                       name="propertyType"
                       value={formData.propertyType || ""}
                       onChange={handleChange}
                       fullWidth
                       required
                       sx={{mb: 2}}
            >
                <MenuItem value="Квартира">
                    Квартира
                </MenuItem>
                <MenuItem value="Дом">
                    Дом
                </MenuItem>
                <MenuItem value="Коммерческая недвижимость">
                    Коммерческая недвижимость
                </MenuItem>
                <MenuItem value="Склад">
                    Склад
                </MenuItem>
                <MenuItem value="Коттедж">
                    Коттедж
                </MenuItem>
            </TextField>

            <TextField
                label="Площадь (м²)"
                name="area"
                type="number"
                value={formData.area || ""}
                onChange={(e) => {
                    const value = Math.max(1, Number(e.target.value));
                    setFormData({...formData, area: value});
                }}
                fullWidth
                required
                sx={{mb: 2}}
            />

            <TextField
                label="Количество комнат"
                name="rooms"
                type="number"
                value={formData.rooms || ""}
                onChange={(e) => {
                    const value = Math.max(1, Number(e.target.value));
                    setFormData({...formData, rooms: value});
                }}
                fullWidth
                required
                sx={{mb: 2}}
            />

            <TextField
                label="Цена (₽)"
                name="price"
                type="number"
                value={formData.price || ""}
                onChange={(e) => {
                    const value = Math.max(1, Number(e.target.value));
                    setFormData({...formData, price: value});
                }}
                fullWidth
                required
                sx={{mb: 2}}
            />
        </>
    );
}

export default RealEstateForm;
