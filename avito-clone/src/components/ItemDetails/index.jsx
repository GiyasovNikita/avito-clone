import {Box, Typography} from "@mui/material";
import categories from "src/config/categories";

function ItemDetails({ad}) {
    if (!ad || !ad.type) return <Typography variant="body2">Нет данных.</Typography>;

    const fields = categories[ad.type] || [];

    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 1, mt: 1}}>
            {fields.map((field) => (
                ad[field.name] && (
                    <Typography key={field.name} variant="body1" sx={{display: "flex", gap: 0.5}}>
                        <b style={{fontWeight: 600}}>{field.label}:</b>
                        <span style={{fontWeight: 400}}>{ad[field.name]}</span>
                    </Typography>
                )
            ))}
        </Box>

    );
}

export default ItemDetails;
