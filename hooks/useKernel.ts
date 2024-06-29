import { useState } from 'react'
import { Kernel, getKernel } from '@/constants/dependency-injection'

export const useKernel = (): Kernel => {
  const [kernel] = useState<Kernel>(getKernel())

  return kernel
}
