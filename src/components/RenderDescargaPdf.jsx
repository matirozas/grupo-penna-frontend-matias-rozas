import { useState } from "react";

export default function RenderDescargaPdf() {
  const pdfUrl = "http://localhost:3001/api/prueba/pdf/8";
  console.log(pdfUrl);
  const [preview, setPreview] = useState(false);

  return (
    <section style={{display:"flex", flexDirection:'column', alignItems:"center"}}>
      <h2>Preview PDF</h2>

      <button
        style={{
          width: 150,
          marginBottom: "10px",
          padding: "10px 15px",
          backgroundColor: "#0F6525",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          setPreview(!preview);
        }}
      >
        Preview Pdf{" "}
      </button>

      {preview ? (
        <embed src={pdfUrl} type="application/pdf" width="60%" height="500px" />
      ) : null}
    </section>
  );
}
