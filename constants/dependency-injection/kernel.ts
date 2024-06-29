/**
 * This app do not use any backend service, so we encapsulate all the logic
 * in a domain/application/infrastructure layers. This kernel is responsible
 * for create all necesarry dependencies, use cases and repositories.
 */

// Domain imports
import { UserRepository } from '@/context/users/domain'

// Application imports
import { UserSignIn } from '@/context/users/application'

// Infrastructure imports
import { AsyncStorageUserRepository } from '@/context/users/infrastructure'

export type Kernel = {
  useCases: {
    userSignIn: UserSignIn
  }
  repositories: {
    userRepository: UserRepository
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

  // Use cases
  const userSignIn = new UserSignIn(userRepository)

  kernel = {
    useCases: {
      userSignIn: userSignIn,
    },
    repositories: {
      userRepository: userRepository,
    },
  }
}
