/**
 * This app do not use any backend service, so we encapsulate all the logic
 * in a domain/application/infrastructure layers. This kernel is responsible
 * for create all necesarry dependencies, use cases and repositories.
 */

// Domain imports
import { UserRepository } from '@/context/users/domain'

// Application imports
import { UserSignIn, UserSignUp } from '@/context/users/application'

// Infrastructure imports
import { AsyncStorageUserRepository } from '@/context/users/infrastructure'
import { SessionRepository } from '@/context/session/domain'
import { AsyncStorageSessionRepository } from '@/context/session/infrastructure'

export type Kernel = {
  useCases: {
    userSignIn: UserSignIn
    userSignUp: UserSignUp
  }
  repositories: {
    userRepository: UserRepository
    sessionRepository: SessionRepository
  }
}

let kernel: Kernel | null = null

export function getKernel(): Kernel {
  if (kernel === null) loadKernel()
  return kernel!
}

function loadKernel(): void {
  // Repositories
  const userRepository = new AsyncStorageUserRepository()
  const sessionRepository = new AsyncStorageSessionRepository()

  // Use cases
  const userSignIn = new UserSignIn(userRepository)
  const userSignUp = new UserSignUp(userRepository)

  kernel = {
    useCases: {
      userSignIn: userSignIn,
      userSignUp: userSignUp,
    },
    repositories: {
      userRepository,
      sessionRepository,
    },
  }
}
