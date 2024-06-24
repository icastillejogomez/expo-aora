import * as React from 'react'
import renderer from 'react-test-renderer'

import { AoraText } from '@/ui'

it(`renders correctly`, () => {
  const tree = renderer.create(<AoraText>Snapshot test!</AoraText>).toJSON()

  expect(tree).toMatchSnapshot()
})
