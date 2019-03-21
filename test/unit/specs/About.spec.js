import Vue from 'vue'
import About from '@/components/about/About'

const Constructor = Vue.extend(About)
const vm = new Constructor().$mount()

describe('About', () => {
  it('should render', () => {
    expect(vm.$el.querySelector('h1').textContent).toEqual('Todo list')
  });
  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot()
  });
});