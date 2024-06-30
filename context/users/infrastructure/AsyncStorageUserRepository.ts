import { UUID } from '@/types'
import { User, UserPrimitives, UserRepository } from '../domain'
import { AsyncStorageRepository } from '@/context/shared/infrastructure'

export class AsyncStorageUserRepository
  extends AsyncStorageRepository<UserPrimitives, User>
  implements UserRepository
{
  private static readonly aggregateRootKey = 'users'

  constructor() {
    super(AsyncStorageUserRepository.aggregateRootKey)
  }

  public async save(user: User): Promise<void> {
    return this._persist(user)
  }

  public async find(id: UUID): Promise<User | null> {
    const primitives = await this._get(this.getAggregateKey(id))
    return !primitives ? null : new User(primitives)
  }

  public async searchByEmail(email: string): Promise<User | null> {
    const allUsersKeys = await this._getAllAggregateKeys()
    let foundUser: User | null = null
    for (const key of allUsersKeys) {
      const primitives = await this._get(key)
      if (primitives !== null && primitives.email === email) {
        foundUser = new User(primitives)
        break
      }
    }

    return foundUser
  }

  public async searchByNickname(nickname: string): Promise<User | null> {
    const allUsersKeys = await this._getAllAggregateKeys()
    let foundUser: User | null = null
    for (const key of allUsersKeys) {
      const primitives = await this._get(key)
      if (primitives !== null && primitives.nickname === nickname) {
        foundUser = new User(primitives)
        break
      }
    }

    return foundUser
  }
}
