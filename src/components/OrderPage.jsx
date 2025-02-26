import React, { useState } from "react";
import mainLogo from "../../images/iteration-1-images/logo.svg";
import { Form,FormGroup, Label, Input, Button, Card, CardHeader, CardBody, FormFeedback, CardText } from "reactstrap";
import FormCheckBox from "./FormCheckBox";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


/*const initialValues={
  name:"",
  size:"",
  dough:"",
  ingredients:[],
  note:""
};*/


/*const errorMessages ={
  name:"Adınız en az 3 karakter içermelidir.",
  size:"Boyut seçimi yapmalısınız.",
  dough:"Hamur kalınlığını seçmelisiniz.",
  ingredients:"En az 4 en fazla 10 malzeme seçebilirsiniz.",
};*/

export default function OrderPage() {

  //const[formData, setFormData] = useState(initialValues);

  const[errors, setErrors] = useState({
    name:false,
    size:false,
    dough:false,
    ingredients:false
  });

  //const[isValid, setIsValid] = useState(false);
    const handleChange = (event) => {
      console.log(event.target.value);
  }

  /*const handleSubmit = (event) => {
    event.preventDefault();
  }*/

    const history = useHistory();
    
    const handleOrderButton = (event) => {
      history.push("/success");
    }

    return (
        <>
        <div class="main-order-content">
          <header className="order-header">
            <img src={mainLogo} />
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
                  Frontend Dev olarak hala posisiton:absolute kullanıyorsan bu acı pizza tam sana göre. Pizza, domatesi peynir ve 
                  genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra gelenksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, 
                  genellikle yuvarlak, düzelştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. 
                  Küçük bir pizzaya bazen pizzetta denir.
                  </CardText>

                  <Form className="pizza-form">
                    <section className="section-form">
                      <FormGroup>
                        <Label><strong>Boyut Seç <span style={{ color: "red" }}> *</span></strong></Label>
                        <FormGroup check>
                          <Input name="size" type="radio" value="S" onChange={handleChange} />
                          <Label check>Küçük</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input name="size" type="radio" value="M" onChange={handleChange} />
                          <Label check>Orta</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input name="size" type="radio" value="L" onChange={handleChange} />
                          <Label check>Büyük</Label>
                        </FormGroup>
                      </FormGroup>

                      <FormGroup>
                        <Label for="dough"><strong>Hamur Seç <span style={{ color: "red" }}> * </span></strong></Label>
                        <Input id="dough" name="dough" type="select" onChange={handleChange}>
                          <option value="empty"><strong>Hamur Kalınlığı</strong></option>
                          <option value="thin">İnce</option>
                          <option value="medium">Orta</option>
                          <option value="thick">Kalın</option>
                        </Input>
                      </FormGroup>
                      <FormCheckBox handleChange={handleChange} />
                      <FormGroup>
                        <Label>Adınız</Label>
                        <Input type="text"
                        placeholder="Adınızı Giriniz.." />
                      </FormGroup>
                      <FormGroup>
                      <Label>Sipariş Notu</Label>
                      <Input
                        type="textarea"
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                      />
                    </FormGroup>
                    <div className="quantity-selector">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                    <div className="order-summary">
                      <Card>
                        <CardBody>
                          <h4>Sipariş Toplamı</h4>
                          <p>Seçimler <span>25.00₺</span></p>
                          <p className="total-price">Toplam <span>110.50₺</span></p>
                        </CardBody>
                        <button style={{backgroundColor:"#FDC913", border:"none"}} onClick={handleOrderButton}>SİPARİŞ VER</button>
                      </Card>
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
