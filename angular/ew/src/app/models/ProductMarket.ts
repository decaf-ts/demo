import {
  max,
  min,
  Model,
  ModelArg,
  pattern,
  required,
} from "@decaf-ts/decorator-validation";

export class ProductMarket extends Model {
  @required()
  marketId!: string;

  @min(2)
  @max(2)
  nationalCode?: string;

  mahName?: string;

  legalEntityName?: string;

  mahAddress?: string;

  constructor(model?: ModelArg<ProductMarket>) {
    super(model);
  }
}
