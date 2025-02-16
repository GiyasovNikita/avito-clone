import {TextField} from '@mui/material';

function SearchBar({searchTerm, setSearchTerm}) {
    return (
        <TextField
            label="Поиск по названию"
            variant="outlined"
            fullWidth
            sx={{mb: 2}}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;
