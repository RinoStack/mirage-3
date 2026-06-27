export class VirtualFilesystem {
  constructor() {
    this.files = new Map();
  }

  public writeFile(path: string, content: string) {
    this.files.set(path, content);
  }

  public readFile(path: string): string {
    return this.files.get(path) || '';
  }
}