import { DataSource } from 'typeorm'
import * as path from 'path'

export const dataSource = new DataSource({
    type: 'postgres',
    username:"asror",
    host: 'localhost',
    port: 5432,
    database:'lavina',
    password: 'aaa13579#',
    synchronize: true,
    entities: [path.join(__dirname, '..', 'entities', '*.entity.{ts,js}')]
})

dataSource.initialize()