import { DataSource } from "typeorm";
import { pbInfoUser } from "./models/pbInfoUser";

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './src/database/pbinfo.sqlite',
    entities: [pbInfoUser],
    subscribers: [],
    synchronize: true,
    logging: false,
});