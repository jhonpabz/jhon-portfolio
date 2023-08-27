'use client';

import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const DownloadPDFButton = () => {
  const handleDownload = () => {
    // Construct the URL to the PDF file
    const pdfUrl = '/Jhon-Cesar-Pablo-Resume.pdf';

    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Jhon-Cesar-Pablo-Resume.pdf';

    // Trigger a click event on the anchor element
    anchor.click();
  };

  return (
    <Button onClick={handleDownload} variant="ghost">
      View Full Resume <ArrowRight className="h-4 w-4 ml-2" />
    </Button>
  );
};

export default DownloadPDFButton;
