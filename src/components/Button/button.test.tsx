import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import {ButtonType, ButtonSize,ButtonProps} from './button'
import Button from './button'

// test('our first react test case', ()=> {
//     const wrapper = render(<Button></Button>)
//     const element = wrapper.queryByText('Nice')
//     expect(element).toBeTruthy()
//     expect(element).toBeInTheDocument()
// })

const defaultProps = {
    onClick:jest.fn()
  }
  
  const testProps:ButtonProps = {
    btnType:ButtonType.Primary,
    size:ButtonSize.Small,
    className:'test'
  }


describe('test Button component', () => {
    it('should render the corrent default button', ()=> {
        const wrapper = render(<Button {...defaultProps}>Hello</Button>)
        const el = wrapper.getByText('Hello')
        expect(el).toBeInTheDocument()
        expect(el.tagName).toEqual('BUTTON')
        expect(el).toHaveClass('btn btn-default')
        fireEvent.click(el)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })

    it( 'should render the correct component based on different props', ()=> {
        const wrapper = render(<Button {...testProps}>Hello</Button>)
        const el = wrapper.getByText('Hello')
        expect(el).toBeInTheDocument()
        expect(el).toHaveClass('btn-primary')

    })

    it( 'should render a link when btnType equals link and href id provided', ()=> {

    })
    it('should render disabled button when disabled set to true', ()=> {

    })
})