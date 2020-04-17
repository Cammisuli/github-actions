import {
  BuilderContext,
  BuilderOutput,
  createBuilder
} from '@angular-devkit/architect';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MyTestPluginBuilderSchema } from './schema';

export function runBuilder(
  options: MyTestPluginBuilderSchema,
  context: BuilderContext
): Observable<BuilderOutput> {
  return of({ success: true }).pipe(
    tap(() => {
      context.logger.info('Builder ran for my-test-plugin');
    })
  );
}

export default createBuilder(runBuilder);
