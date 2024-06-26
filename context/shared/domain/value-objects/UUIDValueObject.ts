import { NonEmptyStringValueObject } from './NonEmptyStringValueObject'

import { UUIDv4Regex } from '@/utils'

export class UUIDValueObject extends NonEmptyStringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureValueIsUUID()
  }

  private ensureValueIsUUID(): void {
    if (!super.getValue().match(UUIDv4Regex)) {
      throw new Error('Value must be a UUID (v4)')
    }
  }
}
