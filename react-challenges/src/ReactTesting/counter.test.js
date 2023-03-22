/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, getByRole, getByTestId, render } from '@testing-library/react';
import Counter from './Counter';


test('Check the Initial value of count',() => {
    const { getByTestId} = render(<Counter initialValue={0}/>)
    let counter = getByTestId("count").textContent;

    expect(Number(counter)).toEqual(0)
})

test('check the Increment Button', () => {
    const { getByTestId, getByRole } = render (
        <Counter initialValue={0}/>
    )
    let counter = getByTestId("count").textContent;
    expect(Number(counter)).toEqual(0);

    let IncrementBtn = getByRole('button', {name:"Increment count"})
    
    fireEvent.click(IncrementBtn);
    let counterInc = getByTestId("count").textContent;
    expect(Number(counterInc)).toEqual(1);
    

})