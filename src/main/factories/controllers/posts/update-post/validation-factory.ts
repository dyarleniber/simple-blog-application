import { ValidationComposite } from '@infra/http/validations/ValidationComposite';
import { RequiredFieldValidation } from '@infra/http/validations/RequiredFieldValidation';

export const makeUpdatePostValidation = (): ValidationComposite => new ValidationComposite([
  new RequiredFieldValidation('title'),
  new RequiredFieldValidation('text'),
], 'body');
