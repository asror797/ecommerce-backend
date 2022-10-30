import { DataSource } from 'typeorm'
import * as path from 'path'

export const dataSource = new DataSource({
    type: 'postgres',
    username:"asrorbek",
    host: 'localhost',
    port: 5432,
    database:'lavina',
    password: 'asrorbek797',
    synchronize: true,
    entities: [path.join(__dirname, '..', 'entities', '*.entity.{ts,js}')]
})

dataSource.initialize()