import {TextField, MenuItem} from "@mui/material";
import WorkSchedulePicker from "src/components/WorkSchedulePicker";

function ServiceForm({formData, setFormData}) {
    const handleScheduleChange = (newScheduleStr) => {
        setFormData({...formData, workSchedule: newScheduleStr});
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <>
            <TextField
                select
                label="Тип услуги"
                name="serviceType"
                value={formData.serviceType || ""}
                onChange={handleChange}
                fullWidth
                required
                sx={{mb: 2}}
            >
                <MenuItem value="Ремонт">
                    Ремонт
                </MenuItem>
                <MenuItem value="Консультация">
                    Консультация
                </MenuItem>
                <MenuItem value="Красота и здоровье">
                    Красота и здоровье
                </MenuItem>
                <MenuItem value="Образование">
                    Образование
                </MenuItem>
            </TextField>

            <TextField
                label="Опыт (лет)"
                name="experience"
                type="number"
                value={formData.experience || ""}
                onChange={(e) => {
                    const value = Math.max(1, Number(e.target.value));
                    setFormData({...formData, experience: value});
                }}
                fullWidth
                required
                sx={{mb: 2}}
            />

            <TextField
                label="Стоимость (₽)"
                name="cost"
                type="number"
                value={formData.cost || ""}
                onChange={(e) => {
                    const value = Math.max(1, Number(e.target.value));
                    setFormData({...formData, cost: value});
                }}
                fullWidth
                required
                sx={{mb: 2}}
            />
            <WorkSchedulePicker
                value={formData.workSchedule}
                onChange={handleScheduleChange}
            />
        </>
    );
}

export default ServiceForm;
