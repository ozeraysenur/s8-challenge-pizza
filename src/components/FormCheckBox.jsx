import { FormGroup, Label, Input } from "reactstrap";
const extraIngredients = [
    "Pepperoni", "Domates", "Biber",
    "Sosis", "Mısır", "Sucuk",
    "Kanada Jambonu", "Tavuk Izgara", "Jalepeno",
    "Ananas", "Soğan", "Sarımsak",
    "Kabak"];

export default function FormCheckBox ({ handleChange, errors }){
    return (
        <FormGroup>
        <Label><strong>Ek Malzemeler</strong></Label>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="checkbox-container">
            {extraIngredients.map((ingredient, index) => (
                <FormGroup check key={index} className="checkbox-item">
                <Input
                    name="ingredients"
                    id={index}
                    type="checkbox"
                    value={ingredient}
                    onChange={handleChange}
                    invalid={errors.ingredient}
                />
                <Label check htmlFor={index}>{ingredient}</Label>
                </FormGroup>
            ))}
        </div>
        {errors.ingredients && (
                <p style={{ display:"block", color:"#CE2829" }}>
                    En az 4, en fazla 10 malzeme seçmelisiniz!
                </p>
            )}
        </FormGroup>

);
}