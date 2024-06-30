import { UUID } from '@/types'
import { AggregateRootPrimitives } from '../domain/AggregateRootPrimitives'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AggregateRoot } from '../domain'

export abstract class AsyncStorageRepository<
  P extends AggregateRootPrimitives,
  T extends AggregateRoot<P>,
> {
  private readonly aggregateRootKey: string

  constructor(aggregateRootKey: string) {
    this.aggregateRootKey = aggregateRootKey
  }

  protected getAggregateKey(id: UUID): string {
    return `${this.aggregateRootKey}/${id}`
  }

  protected async _persist(aggregate: T): Promise<void> {
    await AsyncStorage.setItem(
      this.getAggregateKey(aggregate.getId()),
      JSON.stringify(aggregate.toPrimitives()),
    )
  }

  protected async _get(key: string): Promise<P | null> {
    const aggregatePrimitives = await AsyncStorage.getItem(key)
    if (aggregatePrimitives === null) {
      return null
    }
    return JSON.parse(aggregatePrimitives) as P
  }

  protected async _delete(key: string): Promise<void> {
    await AsyncStorage.removeItem(key)
  }

  protected async _update(id: UUID, aggregate: T): Promise<void> {
    await this._delete(id)
    await this._persist(aggregate)
  }

  protected async _getAllAggregateKeys(): Promise<string[]> {
    const keys = await AsyncStorage.getAllKeys()
    return keys.filter((key) => {
      return key.indexOf(`${this.aggregateRootKey}/`) === 0
    })
  }
}
