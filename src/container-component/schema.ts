import { Path } from '@angular-devkit/core';

export interface Schema {
  entryComponent: boolean;
  export: boolean;
  inlineStyle: boolean;
  inlineTemplate: boolean;
  flat: boolean;
  lintFix: boolean;
  module?: Path;
  name: string;
  path: string;
  prefix: string;
  project: string;
  selector: string;
  skipImport: boolean;
  spec: boolean;
}
