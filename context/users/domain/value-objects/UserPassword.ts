import { NonEmptyStringValueObject } from '@/context/shared/domain'

export class UserPassword extends NonEmptyStringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureValueIsPassword()
  }

  private ensureValueIsPassword(): void {
    if (!UserPassword.isValidPassword(this.getValue())) {
      throw new Error('Value must be at least 8 characters long')
    }
  }

  static isValidPassword(password: string): boolean {
    return password.length >= 8
  }
}
