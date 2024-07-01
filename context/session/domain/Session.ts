import { AggregateRoot } from '@/context/shared/domain'
import { SessionPrimitives } from './SessionPrimitives'
import { UUID } from '@/types'

export class Session extends AggregateRoot<SessionPrimitives> {
  private readonly userId: UUID
  private readonly nickname: string
  private readonly email: string
  private readonly sessionToken: string

  constructor({ id, userId, nickname, email, sessionToken }: SessionPrimitives) {
    super({ id })
    this.userId = userId
    this.nickname = nickname
    this.email = email
    this.sessionToken = sessionToken
  }

  public getSessionToken(): string {
    return this.sessionToken
  }

  public toPrimitives(): SessionPrimitives {
    return {
      id: this.getId(),
      userId: this.userId,
      nickname: this.nickname,
      email: this.email,
      sessionToken: this.sessionToken,
    }
  }
}
