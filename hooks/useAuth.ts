import { useCallback, useEffect, useState } from 'react'
import { randomUUID } from 'expo-crypto'

import { useKernel } from './useKernel'
import { Session } from '@/context/session/domain'
import { UUID } from '@/types'

type Profile = {
  userId: UUID
  nickname: string
  email: string
  sessionToken: string
}

type SetSessionPayload = {
  userId: UUID
  nickname: string
  email: string
  sessionToken: string
}

type UseAuthActions = {
  setSession: (payload: SetSessionPayload) => void
  logout: () => Promise<void>
}

type UseAuth = [
  Profile | null, // sessionToken
  boolean, // ready
  actions: UseAuthActions,
]

export const useAuth = (): UseAuth => {
  const kernel = useKernel()

  const [ready, setReady] = useState<boolean>(false)
  const [localProfile, setLocalProfile] = useState<Profile | null>(null)

  useEffect(() => {
    const sessionRepository = kernel.repositories.sessionRepository
    sessionRepository
      .get()
      .then((session) => {
        if (session) setLocalProfile(session.toPrimitives())
        return Promise.resolve()
      })
      .then(() => setReady(true))
  }, [kernel, setReady, setLocalProfile])

  const logout = useCallback(async () => {
    const sessionRepository = kernel.repositories.sessionRepository
    await sessionRepository.clear()
    setLocalProfile(null)
  }, [kernel, setLocalProfile])

  const setSession = useCallback(
    ({ userId, nickname, email, sessionToken }: SetSessionPayload) => {
      const session = new Session({ id: randomUUID(), userId, nickname, email, sessionToken })

      const sessionRepository = kernel.repositories.sessionRepository
      sessionRepository.save(session).then(() => setLocalProfile(session.toPrimitives()))
    },
    [kernel, setLocalProfile],
  )

  return [
    localProfile,
    ready,
    {
      setSession,
      logout,
    },
  ]
}
