import MainContent from "./components/MainContact/MainContact";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
export default function App() {
  return (
    <div>
      <Navigation />
      <main className="main-container">
        {" "}
        <MainContent />
        <ContactForm />
      </main>
    </div>
  );
}
