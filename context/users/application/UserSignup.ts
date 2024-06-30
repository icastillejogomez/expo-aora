import { UUID } from '@/types'
import { User, UserRepository } from '../domain'

type Params = {
  id: UUID
  nickname: string
  email: string
  password: string
}

export class UserSignUp {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute({ id, nickname, email, password }: Params): Promise<void> {
    // Search by email and nickname
    if (await this.userRepository.searchByEmail(email)) {
      throw new Error('Email is already taken by other users')
    }

    if (await this.userRepository.searchByNickname(nickname)) {
      throw new Error('Nickname is already taken by other users')
    }

    // Create user
    const user = new User({ id, nickname, email, password })
    await this.userRepository.save(user)
  }
}
