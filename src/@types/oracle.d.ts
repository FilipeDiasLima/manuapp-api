import { ExecuteOptions, Result } from "oracledb";

declare module "oracledb" {
  interface CustomOutBinds<T> {
    pRETORNO: T;
    [key: string]: any;
  }

  interface CustomExecuteOptions<T> extends ExecuteOptions {
    outBinds?: CustomOutBinds<T>;
  }

  interface Connection {
    execute<T>(
      sql: string,
      binds?: any,
      options?: CustomExecuteOptions<T>
    ): Promise<Result<T>>;
  }
}
