import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { MyNewPluginSchematicSchema } from './schema';

describe('my-new-plugin schematic', () => {
  let appTree: Tree;
  const options: MyNewPluginSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@nx-example/my-new-plugin',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner
        .runSchematicAsync('my-new-plugin', options, appTree)
        .toPromise()
    ).resolves.not.toThrowError();
  });
});
