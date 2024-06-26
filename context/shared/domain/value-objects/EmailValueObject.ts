import { emailRegex } from '@/utils'

import { NonEmptyStringValueObject } from './NonEmptyStringValueObject'

export class EmailValueObject extends NonEmptyStringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureValueIsEmail()
  }

  private ensureValueIsEmail(): void {
    if (!super.getValue().match(emailRegex)) {
      throw new Error('Value must be a valid email')
    }
  }
}
