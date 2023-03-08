declare module '*.jpg';
declare module '*.png';
declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';

declare module '*.svg' {
    import React = require('react');

    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

interface Property {
    id: number,
    type: string,
    address: string,
    city: string,
    suite: string,
    postalCode: string,
    province: string,
    country: string,
    tenant: number,
    rent: number,
    surfaceArea: number,
    age: number,
    electricity: number,
    hydro: number,
    gas: number,
}

interface UserCredentials {
    email: string,
    name: string,
    password: any
}

