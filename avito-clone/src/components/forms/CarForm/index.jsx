import {TextField} from "@mui/material";

function CarForm({formData, setFormData}) {
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <>
            <TextField
                label="Марка"
                name="brand"
                value={formData.brand || ""}
                onChange={handleChange}
                fullWidth required
                sx={{mb: 2}}/>
            <TextField
                label="Модель"
                name="model"
                value={formData.model || ""}
                onChange={handleChange}
                fullWidth
                required
                sx={{mb: 2}}/>
            <TextField
                label="Год выпуска"
                name="year"
                type="number"
                value={formData.year || ""}
                onChange={(e) => {
                    const value = Math.max(1900, Number(e.target.value));
                    setFormData({...formData, year: value});
                }}
                fullWidth
                required
                sx={{mb: 2}}
            />

            <TextField
                label="Пробег (км)"
                name="mileage"
                type="number"
                value={formData.mileage || ""}
                onChange={(e) => {
                    const value = Math.max(0, Number(e.target.value));
                    setFormData({...formData, mileage: value});
                }}
                fullWidth
                sx={{mb: 2}}
            />
        </>
    );
}

export default CarForm;
