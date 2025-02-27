import React, { useState, useEffect } from "react";
import mainLogo from "../../images/iteration-1-images/logo.svg";
import { Form, FormGroup, Label, Input, Button, Card, CardBody, FormFeedback, CardText } from "reactstrap";
import FormCheckBox from "./FormCheckBox";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const initialValues = {
  isim: "",
  size: "",
  dough: "",
  ingredients: [],
  note: "",
};

const errorMessages = {
  isim: "Adınız en az 3 karakter içermelidir.",
  size: "Boyut seçimi yapmalısınız.",
  dough: "Hamur kalınlığını seçmelisiniz.",
  ingredients: "En az 4 en fazla 10 malzeme seçebilirsiniz.",
};

export default function OrderPage() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({
    isim: false,
    size: false,
    dough: false,
    ingredients: false,
  });

  const history = useHistory();

  useEffect(() => {
    const newErrors = {
      isim: formData.isim.length > 0 && formData.isim.length < 3,
      size: formData.size === "",
      dough: formData.dough === "" || formData.dough === "empty",
      ingredients: formData.ingredients.length < 4 || formData.ingredients.length > 10,
    };
    setErrors(newErrors);
  }, [formData]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox" && name === "ingredients") {
      let updatedIngredients = checked
        ? [...formData.ingredients, value]
        : formData.ingredients.filter((item) => item !== value);

      setFormData({ ...formData, ingredients: updatedIngredients });
      setErrors({ ...errors, ingredients: updatedIngredients.length < 4 || updatedIngredients.length > 10 });
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === "isim") {
        setErrors({ ...errors, isim: value.length > 0 && value.length < 3 });
      } else if (name === "size") {
        setErrors({ ...errors, size: value === "" });
      } else if (name === "dough") {
        setErrors({ ...errors, dough: value === "empty" });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.values(errors).includes(true)) {
      history.push("/success");
    }
  };

  return (
    <>
      <div className="main-order-content">
        <header className="order-header">
          <img src={mainLogo} alt="Logo" />
          <nav className="breadcrumb">
            Anasayfa - Seçenekler - <span className="active">Sipariş Oluştur</span>
          </nav>
        </header>
        <div>
          <main className="order-content">
            <Card className="card">
              <CardBody className="card-body">
                <h2>Position Absolute Acı Pizza</h2>
                <div className="price-container">
                  <h1 className="price">85.50 ₺</h1>
                  <p className="ratings">4.9</p>
                  <p className="reviews">(200)</p>
                </div>

                <CardText>
                  Frontend Dev olarak hala position:absolute kullanıyorsan bu acı pizza tam sana göre...
                </CardText>

                <Form className="pizza-form" onSubmit={handleSubmit}>
                  <section className="section-form">
                    <div className="size-dough">
                      <FormGroup>
                        <Label>
                          <strong>
                            Boyut Seç <span style={{ color: "red" }}> *</span>
                          </strong>
                        </Label>
                        <FormGroup check>
                          <Input name="size" type="radio" value="S" onChange={handleChange} checked={formData.size === "S"} />
                          <Label check>Küçük</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input name="size" type="radio" value="M" onChange={handleChange} checked={formData.size === "M"} />
                          <Label check>Orta</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input name="size" type="radio" value="L" onChange={handleChange} checked={formData.size === "L"} />
                          <Label check>Büyük</Label>
                        </FormGroup>
                        {errors.size && <FormFeedback style={{ display: "block" }}>{errorMessages.size}</FormFeedback>}
                      </FormGroup>

                      <FormGroup>
                        <Label for="dough">
                          <strong>
                            Hamur Seç <span style={{ color: "red" }}> * </span>
                          </strong>
                        </Label>
                        <Input id="dough" name="dough" type="select" onChange={handleChange} value={formData.dough}>
                          <option value="empty">Hamur Kalınlığı Seç</option>
                          <option value="thin">İnce</option>
                          <option value="medium">Orta</option>
                          <option value="thick">Kalın</option>
                        </Input>
                        {errors.dough && <FormFeedback style={{ display: "block" }}>{errorMessages.dough}</FormFeedback>}
                      </FormGroup>
                    </div>
                    
                    <FormCheckBox handleChange={handleChange} errors={errors} />

                    <FormGroup>
                      <Label>Adınız</Label>
                      <Input
                        type="text"
                        name="isim"
                        placeholder="Adınızı Giriniz.."
                        value={formData.isim}
                        onChange={handleChange}
                        invalid={errors.isim}
                      />
                      {errors.isim && <FormFeedback>{errorMessages.isim}</FormFeedback>}
                    </FormGroup>

                    <FormGroup>
                      <Label>Sipariş Notu</Label>
                      <Input type="textarea" name="note" placeholder="Siparişine eklemek istediğin bir not var mı?" value={formData.note} onChange={handleChange} />
                    </FormGroup>

                    <div className="order-container">
                      <div className="counter">
                        <button type="button">-</button>
                        <span>1</span>
                        <button type="button">+</button>
                      </div>
                      <div className="order-summary">
                        <Card>
                          <CardBody>
                            <h4>Sipariş Toplamı</h4>
                            <p>Seçimler <span>25.00₺</span></p>
                            <p className="total-price" style={{ color: "#CE2829" }}>
                              Toplam <span>110.50₺</span>
                            </p>
                          </CardBody>
                          <Button style={{ backgroundColor: "#FDC913", border: "none" }} type="submit">
                            SİPARİŞ VER
                          </Button>
                        </Card>
                      </div>
                    </div>
                  </section>
                </Form>
              </CardBody>
            </Card>
          </main>
        </div>
      </div>
    </>
  );
}
