'use client'; // Error components must be Client components

import { useEffect } from 'react';
import { Modal } from '../components/Modal';

export default function Error({ error, reset }: { error: Error; reset: () => void; }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <Modal>
            <div>
                <h2>{error.message}</h2>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try againnn2
                </button>
            </div>
        </Modal>
    );
}

