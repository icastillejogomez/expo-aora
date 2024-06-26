import { AggregateRoot } from '@/context/shared/domain'

import { UserPrimitives } from './UserPrimitives'
import { UserEmail, UserNickname, UserPassword } from './value-objects'

export class User extends AggregateRoot<UserPrimitives> {
  private readonly nickname: UserNickname
  private readonly email: UserEmail
  private readonly password: UserPassword

  constructor(primitives: UserPrimitives) {
    super(primitives)

    this.nickname = new UserNickname(primitives.nickname)
    this.email = new UserEmail(primitives.email)
    this.password = new UserPassword(primitives.password)
  }

  public getNickname(): string {
    return this.nickname.getValue()
  }

  public getEmail(): string {
    return this.email.getValue()
  }

  public getPassword(): string {
    return this.password.getValue()
  }

  static isPasswordValid(password: string): boolean {
    return UserPassword.isValidPassword(password)
  }

  public getPrimitives(): UserPrimitives {
    return {
      id: this.getId(),
      nickname: this.nickname.getValue(),
      email: this.email.getValue(),
      password: this.password.getValue(),
    }
  }
}
