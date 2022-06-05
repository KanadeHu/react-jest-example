import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import HelloWorld from '../src/component/HelloWorld'

describe('HelloWorld Component', () => {
  it('render', async () => {
    const onClick = jest.fn()
    render(<HelloWorld onClick={onClick}></HelloWorld>)
    // 是在写单测不清楚渲染出来的是啥，可以进行debug
    expect(await screen.findByText('hello world')).toBeInTheDocument()
    // 模拟事件
    fireEvent.click(screen.getByText(/增加/i))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})