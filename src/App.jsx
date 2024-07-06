import "./App.css";

import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "./Invoice";
import PdfCard from "./PdfCard";

function App() {
  const cards = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gap: "1rem",
    padding: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  };
  return (
    <div>
      {/* Single */}
      <div>
        <PDFViewer width="1000" height="650" className="app">
          <Invoice />
        </PDFViewer>
      </div>

      {/* Cards  */}
      <div>
        <h2 style={{ textAlign: "center" }}>List of invoices</h2>
        <div style={cards}>
          <PdfCard title="Oasic ltd Invoice" />
          <PdfCard title="Libra ltd Invoice" />
          <PdfCard title="Xpress ltd Invoice" />
          <PdfCard title="Cardic ltd Invoice" />
        </div>
      </div>
    </div>
  );
}

export default App;
