import { AggregateRootPrimitives } from '@/context/shared/domain/AggregateRootPrimitives'

export interface UserPrimitives extends AggregateRootPrimitives {
  nickname: string
  email: string
  password: string
}
