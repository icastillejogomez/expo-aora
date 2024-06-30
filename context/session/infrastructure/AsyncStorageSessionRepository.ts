import { Session, SessionPrimitives, SessionRepository } from '../domain'
import { AsyncStorageRepository } from '@/context/shared/infrastructure'

export class AsyncStorageSessionRepository
  extends AsyncStorageRepository<SessionPrimitives, Session>
  implements SessionRepository
{
  private static readonly aggregateRootKey = 'session'

  constructor() {
    super(AsyncStorageSessionRepository.aggregateRootKey)
  }

  public async save(user: Session): Promise<void> {
    const allSessionsKeys = await this._getAllAggregateKeys()
    for (const key of allSessionsKeys) {
      await this._delete(key)
    }

    return this._persist(user)
  }

  public async get(): Promise<Session | null> {
    const allSessionsKeys = await this._getAllAggregateKeys()
    if (allSessionsKeys.length === 0) return null
    if (allSessionsKeys.length > 1) throw new Error('More than one session found')

    const sessionKey = allSessionsKeys[0]
    const primitives = await this._get(sessionKey)
    if (!primitives) return null
    return !primitives ? null : new Session(primitives)
  }

  public async clear(): Promise<void> {
    const allSessionsKeys = await this._getAllAggregateKeys()
    await Promise.all(allSessionsKeys.map((key) => this._delete(key)))
  }
}
