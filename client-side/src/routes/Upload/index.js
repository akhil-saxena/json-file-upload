import React from 'react';
import FileUpload from './../../components/Upload/FileUpload';

const Upload = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> JSON File Upload
    </h4>

    <FileUpload />
  </div>
);

export default Upload;
