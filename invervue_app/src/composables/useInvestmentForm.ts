import { defineRule, configure } from 'vee-validate';
import { required, email, min, max, numeric, regex } from '@vee-validate/rules';

export function useValidation() {
    defineRule("required", required);
    defineRule("email", email);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("numeric", numeric);
    defineRule("regex", regex);

  configure({
    generateMessage: (ctx) => `${ctx.field} je povinné pole.`,
  });
}

