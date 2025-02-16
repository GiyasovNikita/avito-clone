import {TextField, MenuItem} from "@mui/material";
import categories from "src/config/categories";

function CategoryFilter({category, setCategory}) {
    return (
        <TextField
            select
            label="Категория"
            variant="outlined"
            fullWidth
            sx={{mb: 2}}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        >
            <MenuItem value="">
                Все категории
            </MenuItem>
            {Object.keys(categories).map((cat) => (
                <MenuItem key={cat} value={cat}>
                    {cat}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default CategoryFilter;
