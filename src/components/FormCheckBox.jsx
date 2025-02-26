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
        <Label><strong>Ek Malzemeler</strong></Label>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div class="checkbox-container">
            {extraIngredients.map((ingredient, index) => (
                <FormGroup check key={index} className="checkbox-item">
                <Input
                    id={index}
                    type="checkbox"
                    value={ingredient}
                    onChange={handleChange}
                />
                <Label check htmlFor={index}>{ingredient}</Label>
                </FormGroup>
            ))}
        </div>
        </FormGroup>

);
}