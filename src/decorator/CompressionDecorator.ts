import { DataSourceDecorator } from "./DataSourceDecorator";

export class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    // todo compress data
    this.wrappee.writeData(data);
  }

  readData(): string {
    // todo decompress data
    return this.wrappee.readData();
  }
}
