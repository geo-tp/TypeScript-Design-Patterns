import { DataSourceDecorator } from "./DataSourceDecorator";

export class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    // todo encrypt data
    this.wrappee.writeData(data);
  }

  readData(): string {
    // todo decrypt data
    return this.wrappee.readData();
  }
}
