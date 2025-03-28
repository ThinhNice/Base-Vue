import CouterTest from '@/views/CouterTest.vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

test('Counter tăng và giảm giá trị', async () => {
  const wrapper = mount(CouterTest)

  expect(wrapper.text()).toContain('Count: 0')

  await wrapper.find('button:first-of-type').trigger('click')
  expect(wrapper.text()).toContain('Count: 1')

  await wrapper.find('button:last-of-type').trigger('click')
  expect(wrapper.text()).toContain('Count: 0')
})
