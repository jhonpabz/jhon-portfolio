"use client";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const DownloadPDFButton = () => {
  const handleDownload = () => {
    const pdfUrl = "/Jhon_Cesar_Pablo_CV.pdf";

    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "Jhon_Cesar_Pablo_CV.pdf";

    anchor.click();
  };

  return (
    <Button onClick={handleDownload} variant="ghost">
      Download CV <ArrowRight className="h-4 w-4 ml-2" />
    </Button>
  );
};

export default DownloadPDFButton;

