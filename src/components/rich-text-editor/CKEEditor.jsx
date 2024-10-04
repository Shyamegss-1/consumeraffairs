"use client"
import React, { useEffect, useRef } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dynamic from 'next/dynamic';
const CKEditor = dynamic(() => import('@ckeditor/ckeditor5-react').then(mod => mod.CKEditor), {
    ssr: false,
});

const EditorComponent = ({ data, onChange, name, id }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editorInstance = editorRef.current;

        if (editorInstance) {
            ClassicEditor
                .create(editorInstance, {
                    // CKEditor configuration
                })
                .then(editor => {
                    console.log('Editor initialized successfully:', editor);
                })
                .catch(error => {
                    console.error('Error initializing editor:', error);
                });

            // Optional: Cleanup function
            return () => {
                editorInstance.destroy().then(() => {
                    console.log('Editor destroyed');
                }).catch(error => {
                    console.error('Error destroying editor:', error);
                });
            };
        }
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <CKEditor
            id={id}
            editor={ClassicEditor}
            config={{
                // CKEditor config if needed
            }}
            name={name}
            data={data}
            onChange={(event, editor) => {
                const newData = editor.getData();
                onChange(newData);
            }}
        />
    );
};

export default EditorComponent;


