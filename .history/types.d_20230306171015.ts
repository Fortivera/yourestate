declare module "\*.svg" {
    import React = require("react");
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
declare module "\*.jpg" {
    const content: string;
    export default content;
}

declare module "\*.png" {
    const content: string;
    export default content;
}

declare module "\*.json" {
    const content: string;
    export default content;
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

