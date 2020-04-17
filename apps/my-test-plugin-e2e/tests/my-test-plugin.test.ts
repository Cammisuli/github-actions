import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq
} from '@nrwl/nx-plugin/testing';
describe('my-test-plugin e2e', () => {
  it('should create my-test-plugin', async done => {
    const plugin = uniq('my-test-plugin');
    ensureNxProject('@nx-example/my-test-plugin', 'dist/libs/my-test-plugin');
    await runNxCommandAsync(
      `generate @nx-example/my-test-plugin:myTestPlugin ${plugin}`
    );

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Builder ran');

    done();
  });

  describe('--directory', () => {
    it('should create src in the specified directory', async done => {
      const plugin = uniq('my-test-plugin');
      ensureNxProject('@nx-example/my-test-plugin', 'dist/libs/my-test-plugin');
      await runNxCommandAsync(
        `generate @nx-example/my-test-plugin:myTestPlugin ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async done => {
      const plugin = uniq('my-test-plugin');
      ensureNxProject('@nx-example/my-test-plugin', 'dist/libs/my-test-plugin');
      await runNxCommandAsync(
        `generate @nx-example/my-test-plugin:myTestPlugin ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    });
  });
});
