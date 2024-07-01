import { UUID } from '@/types'
import { UserRepository } from '../domain'

type Result = {
  userId: UUID
  nickname: string
  email: string
  sessionToken: string
}

export class UserSignIn {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(email: string, password: string): Promise<Result> {
    const user = await this.userRepository.searchByEmail(email)
    if (!user) {
      throw new Error('User not found')
    }

    if (user.getPassword() !== password) {
      throw new Error('Invalid password')
    }

    return {
      userId: user.getId(),
      nickname: user.getNickname(),
      email: user.getEmail(),
      sessionToken: '123',
    }
  }
}
