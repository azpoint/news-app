import {
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";

//Hooks
import useNews from "../Hooks/useNews";

const CATEGORIES = [
    { value: "general", label: "General" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sport" },
    { value: "technology", label: "Tech" },
];

function Form() {
    const { category, handleChangeCategory } = useNews();

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>

                <Select
                    label="Category"
                    onChange={handleChangeCategory}
                    value={category}
                >
                    {CATEGORIES.map((category) => (
                        <MenuItem key={category.value} value={category.value}>
                            {category.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    );
}
export default Form;
