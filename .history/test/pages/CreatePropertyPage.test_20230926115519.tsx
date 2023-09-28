/* eslint-disable prettier/prettier */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NewProperty from '@/app/dashboard/createproperty/page';

describe("CreateProperty page", () => {
    it("render without errors", () => {
        render(<NewProperty />)

        fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St' } });
        fireEvent.change(screen.getByLabelText('Type'), { target: { value: 'House' } });

        // Trigger form submission
        fireEvent.click(screen.getByText('Submit'));
    })
}

)