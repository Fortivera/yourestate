'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error, reset: () => void; }) {


    return (


        alert(`${error.cause}`)

    );
}

