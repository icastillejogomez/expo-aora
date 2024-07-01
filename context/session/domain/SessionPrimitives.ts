import { AggregateRootPrimitives } from '@/context/shared/domain/AggregateRootPrimitives'
import { UUID } from '@/types'

export interface SessionPrimitives extends AggregateRootPrimitives {
  userId: UUID
  nickname: string
  email: string
  sessionToken: string
}
