import { UUID } from '@/types'
import { AggregateRootId } from './value-objects/AggregateRootId'
import { AggregateRootPrimitives } from './AggregateRootPrimitives'

export abstract class AggregateRoot<T extends AggregateRootPrimitives> {
  private readonly id: AggregateRootId

  constructor({ id }: AggregateRootPrimitives) {
    this.id = new AggregateRootId(id)
  }

  public getId(): UUID {
    return this.id.getValue()
  }

  public abstract toPrimitives(): T
}
