import { UUID } from '@/types'
import { User } from './User'

export interface UserRepository {
  save(user: User): Promise<void>
  find(id: UUID): Promise<User | null>
  searchByEmail(email: string): Promise<User | null>
  searchByNickname(nickname: string): Promise<User | null>
}
