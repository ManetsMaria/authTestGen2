import React from 'react';
import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

function CustomFileUploader() {
    return (
        <FileUploader
            acceptedFileTypes={['image/*']}
            path="picture-submissions/"
            maxFileCount={1}
            isResumable
        />
    );
}
export default CustomFileUploader;