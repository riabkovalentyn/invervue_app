import { defineRule } from 'vee-validate';

type RuleNames = 'required' | 'email' | 'min' | 'max' | 'numeric' | 'regex';

const messages: { [key in RuleNames]: string } = {
  required: "Toto pole je povinné.",
  email: "Neplatný email.",
  min: "Hodnota je příliš nízká.",
  max: "Hodnota je příliš vysoká.",
  numeric: "Musí být číslo.",
  regex: "Neplatný formát.",
};

defineRule('customRule', (value: any, ctx: any) => {
  const ruleName = ctx.rule.name as RuleNames;
  const message = messages[ruleName];

  return message ? message : `${ctx.field} je neplatné.`;
});
