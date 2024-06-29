import { useKernel } from './useKernel'

type UseCase = 'userSignIn'

export const useUseCase = <T>(useCase: UseCase): T => {
  const kernel = useKernel()
  return kernel.useCases[useCase] as T
}
