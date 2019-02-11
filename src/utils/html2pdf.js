import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const html2pdf = ({
  element = document.querySelector("body"),
  name = "resume"
}) => {
  const input = document.querySelector(".container");
  html2canvas(input, {
    // allowTaint: true,
    logging: true
  }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4", true);
    /** https://rawgit.com/MrRio/jsPDF/master/docs/module-addImage.html#~addImage */
    pdf.addImage(imgData, "JPEG", 0, 0, 595, 842, "resume", "FAST");
    pdf.save(name + ".pdf");
  });
};
export default html2pdf;
