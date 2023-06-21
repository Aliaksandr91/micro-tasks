import React from "react";

export const NewComponent = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <table>
            <thead>
            <tr>
                <th colSpan={2}>Top Cars</th>
            </tr>
            </thead>
            <tbody>

            {topCars.map((car, index) => {
                return (
                    <tr key={index}>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}