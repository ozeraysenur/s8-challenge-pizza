import React from "react";
import mainLogo from "../../images/iteration-1-images/logo.svg";
import { Form,FormGroup, Label, Input, Button, Card, CardHeader, CardBody, FormFeedback, CardText } from "reactstrap";

export default function OrderPage() {
  return (
    <div className="order-page">
      <header className="order-header">
        <img src={mainLogo} alt="headerlogo" className="logo"/>
        <nav className="breadcrumb">
            Anasayfa - Seçenekler - <span className="active">Sipariş Oluştur</span>
        </nav>
      </header>

      <main className="order-content">
        <Card>
            <CardBody>
                <CardHeader>Position Absolute Acı Pizza</CardHeader>
                <CardText>Frontend Dev olarak hala posisiton:absolute kullanıyorsan bu acı pizza tam sana göre. Pizza, domatesi peynir ve genellikle çeşitli
                    diğer malzemelerle kaplanmış, daha sonra gelenksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzelştirilmiş
                    mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.
                </CardText>
                <Form>
                    <FormGroup>
                        <Label for="size">Boyut Seç</Label>
                        <Input 
                        id="size"
                        name="size"
                        type="radio"/>
                    </FormGroup>
                </Form>
                </CardBody>
        </Card>
      </main>
    </div>
  );
}
