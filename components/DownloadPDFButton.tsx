"use client";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const DownloadPDFButton = () => {
  const handleDownload = () => {
    const pdfUrl = "/JhonCesarPablo-FrontEndDeveloperCV.pdf";

    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "JhonCesarPablo-FrontEndDeveloperCV.pdf";

    anchor.click();
  };

  return (
    <Button onClick={handleDownload} variant="ghost">
      View Full Resume <ArrowRight className="h-4 w-4 ml-2" />
    </Button>
  );
};

export default DownloadPDFButton;
