import {Card, CardContent, Typography, Button, Box, Grid, Breadcrumbs, Link} from '@mui/material';
import ItemDetails from 'src/components/ItemDetails';
import {useNavigate} from "react-router-dom";

function ItemCard({ad}) {
    const navigate = useNavigate();

    if (!ad) return <Typography variant="h5">Загрузка...</Typography>;

    return (
        <Box sx={{maxWidth: "900px", mx: "auto", mt: 4}}>
            <Breadcrumbs aria-label="breadcrumb" sx={{mb: 2}}>
                <Link
                    color="inherit"
                    sx={{cursor: "pointer", textDecoration: "none", "&:hover": {textDecoration: "underline"}}}
                    onClick={() => navigate('/list')}
                >
                    Объявления
                </Link>
                <Typography color="text.primary">{ad.name}</Typography>
            </Breadcrumbs>

            <Card sx={{
                p: 4,
                boxShadow: 4,
                borderRadius: "12px",
                minHeight: "450px"
            }}>
                <CardContent>
                    <Grid container spacing={4} alignItems="stretch">
                        <Grid item xs={5}>
                            {ad.image ? (
                                <img
                                    src={ad.image}
                                    alt={ad.name}
                                    style={{
                                        width: "100%",
                                        height: "250px",
                                        borderRadius: "12px",
                                        objectFit: "cover"
                                    }}
                                />
                            ) : (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "250px",
                                        backgroundColor: "#f0f0f0",
                                        borderRadius: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "14px",
                                        color: "#888"
                                    }}
                                >
                                    Нет изображения
                                </Box>
                            )}
                        </Grid>

                        <Grid item xs={7}
                              sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <Box>
                                <Typography variant="h4" sx={{fontWeight: "bold", mb: 1}}>{ad.name}</Typography>
                                <Typography variant="body1" color="text.secondary" sx={{mb: 1}}>
                                    <b>Локация:</b> {ad.location || "Не указано"}
                                </Typography>
                                <Typography variant="body1">
                                    <b>Категория:</b> {ad.type || "Без категории"}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box sx={{mt: 4}}>
                        <Typography variant="h6" sx={{fontWeight: "bold", mb: 1}}>Характеристики</Typography>
                        <ItemDetails ad={ad}/>
                    </Box>

                    {ad.description && (
                        <Box sx={{mt: 3}}>
                            <Typography variant="h6" sx={{fontWeight: "bold", mb: 1}}>Описание</Typography>
                            <Typography variant="body1" sx={{color: "text.secondary"}}>
                                {ad.description}
                            </Typography>
                        </Box>
                    )}

                    <Box sx={{mt: 4, display: "flex", justifyContent: "flex-end"}}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate(`/form/${ad?.id}`)}
                            sx={{
                                borderRadius: "8px",
                                padding: "10px 18px",
                                fontSize: "16px",
                                minWidth: "140px"
                            }}
                        >
                            Редактировать
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ItemCard;
