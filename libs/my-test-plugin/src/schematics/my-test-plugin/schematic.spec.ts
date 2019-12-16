import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { MyTestPluginSchematicSchema } from './schema';

describe('my-test-plugin schematic', () => {
  let appTree: Tree;
  const options: MyTestPluginSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@nx-example/my-test-plugin',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('myTestPlugin', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
