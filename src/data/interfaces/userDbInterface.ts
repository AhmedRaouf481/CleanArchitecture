export interface DbInterface<T, R> {
    create(user: T): Promise<R>;
    getAll(): Promise<R[]>
    getOne(id: string): Promise<R>
    updateOne(id: string, data: T): Promise<R>
    deleteOne(id: string): void;
}