import { FormGroup, Label, Input } from "reactstrap";
const extraIngredients = [
    "Pepperoni", "Domates", "Biber",
    "Sosis", "Mısır", "Sucuk",
    "Kanada Jambonu", "Tavuk Izgara", "Jalepeno",
    "Ananas", "Soğan", "Sarımsak",
    "Kabak"];

export default function FormCheckBox ({ handleChange }){
    return (
        <FormGroup>
        <Label>Ekstra Malzemeler</Label>
        {extraIngredients.map((ingredient, index) => (
            <FormGroup check key={index}>
            <Input
                id={index}
                type="checkbox"
                value={ingredient}
                onChange={handleChange}
            />
            <Label check htmlFor={index}>{ingredient}</Label>
            </FormGroup>
        ))}
        </FormGroup>

);
}