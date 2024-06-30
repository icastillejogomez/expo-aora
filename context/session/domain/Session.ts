import { AggregateRoot } from '@/context/shared/domain'
import { SessionPrimitives } from './SessionPrimitives'

export class Session extends AggregateRoot<SessionPrimitives> {
  private readonly sessionToken: string

  constructor({ id, sessionToken }: SessionPrimitives) {
    super({ id })
    this.sessionToken = sessionToken
  }

  public getSessionToken(): string {
    return this.sessionToken
  }

  public toPrimitives(): SessionPrimitives {
    return {
      id: this.getId(),
      sessionToken: this.sessionToken,
    }
  }
}
