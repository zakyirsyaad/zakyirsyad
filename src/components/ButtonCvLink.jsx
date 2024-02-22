'use client';
import React from 'react';
import useDownloader from 'react-use-downloader';
import { useToast } from './ui/use-toast';
import ButtonLink from './ButtonLink';

export default function ButtonCvLink({ children }) {
    const { download } = useDownloader();
    const { toast } = useToast();

    const fileUrl =
        'https://utaboiwoepvwdhnczsgd.supabase.co/storage/v1/object/sign/project/Curriculum%20Vitae%20-%20Zaky%20Irsyad%20Rais.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0L0N1cnJpY3VsdW0gVml0YWUgLSBaYWt5IElyc3lhZCBSYWlzLnBkZiIsImlhdCI6MTcwNzE2MTkxMiwiZXhwIjoxNzM4Njk3OTEyfQ.eLLdmJ3xaB6BC1GavfNz-5hqR5tU9AvXDjDjDmMX1yc&t=2024-02-05T19%3A38%3A32.472Z';
    const filename = 'CV Zaky Irsyad Rais';

    const handleDownload = async () => {
        try {
            await download(fileUrl, filename);
            toast({
                title: 'Download Successful',
                description: 'Your CV has been downloaded successfully!',
            });
        } catch (error) {
            console.error('Download failed:', error);
            toast({
                title: 'Download Failed',
                description: 'There was an error while downloading your CV. Please try again.',
                status: 'error',
            });
        }
    };
    return (
        <ButtonLink onClick={handleDownload}>{children}</ButtonLink>
    )
}
