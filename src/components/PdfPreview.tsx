import React from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';

import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import { Box } from '@material-ui/core';

const PdfPreview: React.FC = () => {
  return (
    <Box my={4}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
        <div style={{ height: '750px' }}>
          <Viewer fileUrl="https://arxiv.org/pdf/quant-ph/0410100.pdf" />
        </div>
      </Worker>
    </Box>
  );
};

export default PdfPreview;
