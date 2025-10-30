import { BaseModel, pk } from "@decaf-ts/core";
import { model, ModelArg, required } from "@decaf-ts/decorator-validation";
import { HTML5InputTypes, uielement, uilistprop, uimodel } from "@decaf-ts/ui-decorators";
import { getDocumentTypes, getLeafletLanguages, getMarkets } from "../utils/helpers";
import { generate } from "rxjs";

@uimodel('ngx-crud-form')
@model()
export class Leaflet extends BaseModel {

  // @uielement('ngx-decaf-crud-field', {
  //   label: 'leaflet.productCode.label',
  //   placeholder: 'leaflet.productCode.placeholder',
  //   className: 'dcf-width-1-2@s dcf-width-1-1',
  // })
  // productCode!: string;

  // @uielement('ngx-decaf-crud-field', {
  //     label: 'leaflet.batchNumber.label',
  //     placeholder: 'leaflet.batchNumber.placeholder',
  //     className: 'dcf-width-1-2@s dcf-width-1-1',
  // })
  // batchNumber?: string;
  @pk({ type:String.name, generated: false })
  @uielement('ngx-decaf-crud-field', {
    label: 'leaflet.language.label',
    placeholder: 'leaflet.language.placeholder',
    type: HTML5InputTypes.SELECT,
    options: getLeafletLanguages()
  })
  language!: string;

  @required()
  @uielement('ngx-decaf-crud-field', {
    label: 'leaflet.language.label',
    placeholder: 'leaflet.language.placeholder',
    type: HTML5InputTypes.SELECT,
    options: () => getDocumentTypes()
  })
  type!: string;

  @required()
  @uielement('ngx-decaf-crud-field', {
    label: 'leaflet.language.label',
    placeholder: 'leaflet.language.placeholder',
    type: HTML5InputTypes.SELECT,
    options: () => getMarkets(false)
  })
  market!: string;

  @uielement('app-image-upload', {
    label: 'product.nameMedicinalProduct.label',
    placeholder: 'product.nameMedicinalProduct.placeholder',
    multiple: true
  })
  @uilistprop('description')
  xmlFileContent!: string;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(model?: ModelArg<Leaflet>) {
      super(model);
  }
}
