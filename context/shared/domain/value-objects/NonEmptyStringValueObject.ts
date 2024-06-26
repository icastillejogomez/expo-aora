import { PrimitiveValueObject } from './PrimitiveValueObject'

export class NonEmptyStringValueObject extends PrimitiveValueObject<string> {
  constructor(value: string) {
    super(value)
    this.ensureValueIsNonEmpty()
  }

  private ensureValueIsNonEmpty(): void {
    if (super.getValue().length === 0) {
      throw new Error('Value must be non-empty')
    }
  }
}
