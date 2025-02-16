import {Card, CardContent, CardMedia, Typography, Button, Box} from '@mui/material';
import DEFAULT_IMAGE from 'src/assets/image.png';
import {Link} from 'react-router-dom';

function AdCard({ad}) {
    return (
        <Card
            sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                padding: 1,
                borderRadius: 3,
                boxShadow: 3,
            }}
        >
            <CardMedia
                component="img"
                image={ad?.image && ad.image.trim() ? ad.image : DEFAULT_IMAGE}
                alt={ad?.name || "Без названия"}
                sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    objectFit: 'cover',
                    marginLeft: 2
                }}
            />
            <CardContent sx={{flex: 1, paddingLeft: 2}}>
                <Typography variant="h6" sx={{fontWeight: "bold", mb: 0.5}}>
                    {ad?.name || "Без названия"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {ad?.location || "Не указано"}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                    {ad?.type || "Без категории"}
                </Typography>
            </CardContent>
            <Box sx={{pr: 2}}>
                <Button
                    component={Link}
                    to={`/item/${ad?.id}`}
                    variant="contained"
                    color="primary"
                    sx={{
                        borderRadius: "8px",
                        textTransform: "none",
                        fontSize: "14px",
                        padding: "8px 16px"
                    }}
                >
                    Открыть
                </Button>
            </Box>
        </Card>
    );
}

export default AdCard;

