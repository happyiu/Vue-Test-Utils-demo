import { mount } from '@vue/test-utils'
import Counter from './counter'

// 挂载组件，得到的 wrapper 上包含了 VNode 以及 VNode方法
// const wrapper = mount(Counter)
// console.log(wrapper)

// 得到的 vm 就是刚刚挂载的 Vue 实例，上面有实例的所有属性和方法
// const vm = wrapper.vm
// console.log(vm)

// 得到的 element 表示刚刚挂载实例的 根DOM节点
// const element = wrapper.element
// console.log(element)

describe('Counter.js', () => {
  const wrapper = mount(Counter)
  it('是否渲染出节点', () => {
    // wrapper.html 返回 Wrapper DOM节点的HTML字符串
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  it('是否存在button', () => {
    // 判断 Wrapper 是否包含一个 匹配选择器的元素或组件
    expect(wrapper.contains('button')).toBe(true)
  })

  it('点击button，data中值更新', () => {
    expect(wrapper.vm.count).toBe(0)
    // Wrapper.find() 返回匹配选择器的第一个DOM节点或Vue组件的Wrapper
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  it('点击button，UI页面值更新', () => {
    // 注意：上一个用例点击过一次button了，所以值不是初始值0了，而是1
    // Wrapper.text() 返回文本内容
    expect(wrapper.find('span').text()).toBe('1')
    wrapper.find('button').trigger('click')
    expect(wrapper.find('span').text()).toBe('2')
  })
})