import { foo } from '~/lib/enums'

export function testUtil2() {
  const d = dates().format('YYYY-MM-DD')
  return `${testUtil()}${foo}${d}2`;
}
