import { useKernel } from './useKernel'

type UseCase = 'userSignIn' | 'userSignUp'

export const useUseCase = <T>(useCase: UseCase): T => {
  const kernel = useKernel()
  return kernel.useCases[useCase] as T
}
