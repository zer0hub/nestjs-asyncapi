import { Type } from '@nestjs/common';

import { DECORATORS } from '@lib';

export const exploreAsyncapiServiceMetadata = (metatype: Type<unknown>) => {
  return Reflect.getMetadata(DECORATORS.ASYNCAPI_SERVICE, metatype);
};
