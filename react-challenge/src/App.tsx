import "./App.css";
import NamesToBreakify from "./components/breaking-bad-text";
import FormNames from "./components/form-input";

function App() {
  

  return (
    
    <main className="main_wrapper">
      <section className="form_container">
        <NamesToBreakify />
        <FormNames/>
      </section>
      </main>
      
  );
}

export default App;