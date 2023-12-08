import {PageType} from 'types/common';

export class Logger {
  private enabled: boolean;

  constructor(enabled: boolean = true) {
    this.enabled = enabled;
  }

  log(
    page: PageType = 'list',
    functionName: '데이터' | string = '데이터',
    data: string | object,
  ): void {
    if (this.enabled) {
      console.log(`[${page}] ${functionName}: `, data);
    }
  }

  dir(
    page: PageType = 'list',
    functionName: '데이터' | string = '데이터',
    object: any,
  ): void {
    if (this.enabled) {
      console.dir(`[${page}] ${functionName}:`, object);
    }
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }
}
