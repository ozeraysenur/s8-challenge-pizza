import mainLogo from "../../images/iteration-1-images/logo.svg";
export default function Success() {

    return (
      <header className="success-container">
        <img src={mainLogo} alt="Logo" class="logo"/>
        <section>
          <h1 className="main-title">
            TEBRİKLER! <br />
            SİPARİŞİNİZ ALINDI!
          </h1>
        </section>
      </header>
    );
    
}