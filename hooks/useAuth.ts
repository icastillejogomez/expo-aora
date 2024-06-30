import { useCallback, useEffect, useState } from 'react'
import { randomUUID } from 'expo-crypto'

import { useKernel } from './useKernel'
import { Session } from '@/context/session/domain'

type UseAuthActions = {
  logout: () => Promise<void>
  setSessionToken: (sessionToken: string) => void
}

type UseAuth = [
  string | null, // sessionToken
  boolean, // ready
  actions: UseAuthActions,
]

export const useAuth = (): UseAuth => {
  const kernel = useKernel()

  const [ready, setReady] = useState<boolean>(false)
  const [localSessionToken, setLocalSessionToken] = useState<string | null>(null)

  useEffect(() => {
    const sessionRepository = kernel.repositories.sessionRepository
    sessionRepository
      .get()
      .then((session) => {
        if (session) setLocalSessionToken(session.getSessionToken())
        return Promise.resolve()
      })
      .then(() => setReady(true))
  }, [kernel, setReady, setLocalSessionToken])

  const logout = useCallback(async () => {
    const sessionRepository = kernel.repositories.sessionRepository
    console.log(sessionRepository)
    await sessionRepository.clear()
    setLocalSessionToken(null)
  }, [kernel, setLocalSessionToken])

  const setSessionToken = useCallback(
    (sessionToken: string) => {
      const session = new Session({ id: randomUUID(), sessionToken })

      const sessionRepository = kernel.repositories.sessionRepository
      sessionRepository.save(session).then(() => setLocalSessionToken(session.getSessionToken()))
    },
    [kernel, setLocalSessionToken],
  )

  return [
    localSessionToken,
    ready,
    {
      logout,
      setSessionToken,
    },
  ]
}
