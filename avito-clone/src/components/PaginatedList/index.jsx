import {useState} from "react";
import {Pagination, Box} from "@mui/material";

function PaginatedList({items, itemsPerPage, renderItem}) {
    const [page, setPage] = useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const paginatedItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <Box>
            {paginatedItems.map(renderItem)}

            <Pagination
                count={Math.ceil(items.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                sx={{mt: 3, display: "flex", justifyContent: "center"}}
            />
        </Box>
    );
}

export default PaginatedList;
