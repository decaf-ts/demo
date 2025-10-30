import {
  list,
  model,
  Model,
  ModelArg,
  required,
  url,
} from "@decaf-ts/decorator-validation";
import { pk } from "@decaf-ts/core";
import { uichild, uielement, uilayout, uilayoutprop, uilistmodel, uilistprop, uimodel, uipageprop, uisteppedmodel } from "@decaf-ts/ui-decorators";
import { Leaflet } from "../models/Leaflet";
import { ProductMarket } from "../models/ProductMarket";
import { SubstanceForm } from "./SubstanceForm";

@uimodel('ngx-decaf-fieldset', {})
@model()
export class EpiForm extends Model {
  @pk({type: 'Number' })
  id!: number;

  @uipageprop(1)
  @uichild(Leaflet.name, 'ngx-decaf-fieldset', {}, false)
  document!: Leaflet;

  @uipageprop(1)
  @uichild(SubstanceForm.name, 'ngx-decaf-fieldset', {}, false)
  strengths!: SubstanceForm;

  @uipageprop(1)
  @uichild(ProductMarket.name, 'ngx-decaf-fieldset', {}, false)
  markets!: ProductMarket;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(args?: ModelArg<EpiForm>) {
    super(args);
  }
}
