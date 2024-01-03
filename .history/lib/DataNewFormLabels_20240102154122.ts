interface labelStructure {
    id?: string
    name: string
    type: string
    placeholder: string
    label: string
    ariaLabel: string
}
export const labelsHTML: labelStructure[] = [
    {
        name: "address",
        type: "text",
        placeholder: "Address",
        label: "Address",
        ariaLabel: "Address",
    },
    {
        name: "suite",
        type: "text",
        placeholder: "Suite",
        label: "Suite",
        ariaLabel: "Suite",
    },
    {
        name: "postalCode",
        type: "text",
        placeholder: "Postal Code",
        label: "Postal Code",
        ariaLabel: "PostalCode",
    },
    {
        name: "city",
        type: "text",
        placeholder: "City",
        label: "City",
        ariaLabel: "City",
    },
    {
        name: "province",
        type: "text",
        placeholder: "Province",
        label: "Province",
        ariaLabel: "Province",
    },
    {
        name: "country",
        type: "text",
        placeholder: "Country",
        label: "Country",
        ariaLabel: "Country",
    },
    {
        name: "tenant",
        type: "number",
        placeholder: "Tenants",
        label: "Number of Tenants",
        ariaLabel: "Tenants",
    },
    {
        name: "rent",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Rent",
        ariaLabel: "Rent",
    },
    {
        name: "surfaceArea",
        type: "number",
        placeholder: "Area (sq. ft)",
        label: "Surface Area (sq. ft)",
        ariaLabel: "SurfaceArea",
    },
    {
        name: "age",
        type: "number",
        placeholder: "Property Age",
        label: "Property Age",
        ariaLabel: "Age",
    },
    {
        name: "electricity",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Electricity",
        ariaLabel: "Electricity",
    },
    {
        name: "hydro",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Hydro",
        ariaLabel: "Hydro",
    },
    {
        name: "gas",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Gas",
        ariaLabel: "Gas",
    },
]
