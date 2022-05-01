import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entity";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "main",
  useUnifiedTopology: true,
  synchronize: true,
  logging: false,
  entities: [Product],
  migrations: [],
  subscribers: []
});
