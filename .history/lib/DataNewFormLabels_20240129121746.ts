interface labelStructure {
    id?: string
    name: string
    type: string
    placeholder: string
    label: string
}
export const attributesHTML: labelStructure[] = [
    {
        name: "address",
        type: "text",
        placeholder: "Address",
        label: "Address",
    },
    {
        name: "suite",
        type: "text",
        placeholder: "Suite",
        label: "Suite",
    },
    {
        name: "postalCode",
        type: "text",
        placeholder: "Postal Code",
        label: "Postal Code",
    },
    {
        name: "city",
        type: "text",
        placeholder: "City",
        label: "City",
    },
    {
        name: "province",
        type: "text",
        placeholder: "Province",
        label: "Province",
    },
    {
        name: "country",
        type: "text",
        placeholder: "Country",
        label: "Country",
    },
    {
        name: "tenant",
        type: "number",
        placeholder: "Tenants",
        label: "Number of Tenants",
    },
    {
        name: "rent",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Rent",
    },
    {
        name: "surfaceArea",
        type: "number",
        placeholder: "Area (sq. ft)",
        label: "Surface Area (sq. ft)",
    },
    {
        name: "age",
        type: "number",
        placeholder: "Property Age",
        label: "Property Age",
    },
    {
        name: "electricity",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Electricity",
    },
    {
        name: "hydro",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Hydro",
    },
    {
        name: "gas",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Gas",
    },
]
