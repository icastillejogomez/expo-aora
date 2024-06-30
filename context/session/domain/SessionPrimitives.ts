import { AggregateRootPrimitives } from '@/context/shared/domain/AggregateRootPrimitives'

export interface SessionPrimitives extends AggregateRootPrimitives {
  sessionToken: string
}
