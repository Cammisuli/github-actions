module.exports = {
  name: 'ng-lib-twp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng-lib-twp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
