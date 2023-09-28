/* eslint-disable prettier/prettier */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NewProperty from '@/app/dashboard/createproperty/page';
import '@testing-library/jest-dom/extend-expect'


describe("CreateProperty page", () => {
    test("render without errors", () => {
        render(<NewProperty />)

        expect(screen.getByTestId("property-form")).toBeInTheDocument()
        // fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St' } });
        // fireEvent.change(screen.getByLabelText('Type'), { target: { value: 'House' } });

        // // form submission
        // fireEvent.click(screen.getByText('Submit'));
    })
}

)