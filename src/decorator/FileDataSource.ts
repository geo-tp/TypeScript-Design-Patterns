import { DataSource } from "./IDataSource";

export class FileDataSource implements DataSource {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  writeData(data: string): void {
    this.filename;
    console.log("I'm suppose to write " + data + " into a file");
  }
  readData(): string {
    this.filename;
    console.log("I'm suppose to read into a file");
    return "";
  }
}
