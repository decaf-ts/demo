import {
  date,
  list,
  model,
  Model,
  ModelArg,
  pattern,
  required,
  url,
} from "@decaf-ts/decorator-validation";
import { pk } from "@decaf-ts/core";
import { HTML5InputTypes, uichild, uielement, uilistitem, uilistprop, uimodel } from "@decaf-ts/ui-decorators";
import { Product } from "./Product";

@uimodel('ngx-decaf-crud-form')
@model()
class ManufacturerForm {
  @required()
  @uielement('ngx-decaf-crud-field', {
    label: 'batch.manufacturerName.label',
    placeholder: 'batch.manufacturerName.placeholder',
    className: 'dcf-width-1-2@s dcf-width-1-1',
    page: 1,
  })
  name!: string;

  @uielement('ngx-decaf-crud-field', {
    label: 'batch.manufacturerAddress.label',
    placeholder: 'batch.manufacturerAddress.placeholder',
    className: 'dcf-width-1-2@s dcf-width-1-1',
    page: 1,
  })
  address?: string;
}


@uilistitem('ngx-decaf-list-item', {icon: 'cafe-outline'})
@uimodel('ngx-decaf-crud-form')
@model()
export class Batch extends Model {

  @required()
  @uielement('ngx-decaf-crud-field', {
    label: "batch.productCode.label",
    placeholder: "batch.productCode.placeholder",
    type: HTML5InputTypes.SELECT,
    optionsMapper: (item: Product) => ({text: item.inventedName, value: item.productCode}),
    options: () => Product
  })
  @uilistprop('title')
  @required()
  productCode!: string;

  @pk({type: String.name })
  @uielement('ngx-decaf-crud-field', {
    label: 'batch.batchNumber.label',
    placeholder: 'batch.batchNumber.placeholder',
    className: 'dcf-width-1-2@s dcf-width-1-1',
    page: 1,
  })
  @required()
  batchNumber!: string;

  @uielement('ngx-decaf-crud-field', {
    label: 'batch.packagingSiteName.label',
    placeholder: 'batch.packagingSiteName.placeholder',
    className: 'dcf-width-1-2@s dcf-width-1-1',
    page: 1,
  })
  @url()
  packagingSiteName?: string;


  @uielement('ngx-decaf-crud-field', {
    label: 'batch.packagingSiteName.label',
    placeholder: 'batch.packagingSiteName.placeholder',
    className: 'dcf-width-1-2@s dcf-width-1-1',
    page: 1,
  })
  @required()
  @date('yyyy-MM-dd')
  expiryDate!: string;

  @uielement('ngx-decaf-crud-field', {
    label: 'batch.importLicenseNumber.label',
    placeholder: 'batch.importLicenseNumber.placeholder',
    className: 'dcf-width-1-2@s dcf-width-1-1',
    page: 1,
  })
  importLicenseNumber?: string;

  // @uichild(ManufacturerForm.name, 'ngx-decaf-layout', {cols: 2, rows: 1})

  @uielement('ngx-decaf-crud-field', {
    label: 'batch.manufacturerName.label',
    placeholder: 'batch.manufacturerName.placeholder',
    className: 'dcf-width-1-2@s dcf-width-1-1',
    page: 1,
  })
  manufacturerName?: string;

  @uielement('ngx-decaf-crud-field', {
    label: 'batch.packagingSiteName.label',
    placeholder: 'batch.packagingSiteName.placeholder',
    className: 'dcf-width-1-2@s dcf-width-1-1',
    page: 1,
  })
  @required()
  @date('yyyy-MM-dd')
  dateOfManufacturing?: string;


  @uielement('ngx-decaf-crud-field', {
    label: 'batch.batchRecall.label',
    placeholder: 'batch.batchRecall.placeholder',
    className: 'dcf-width-1-1',
    page: 1,
    type: HTML5InputTypes.CHECKBOX
  })
  batchRecall!: boolean;

  // dateOfManufacturing?: string;

  // manufacturerAddress1?: string;

  // manufacturerAddress2?: string;

  // manufacturerAddress3?: string;

  // manufacturerAddress4?: string;

  // manufacturerAddress5?: string;


  epiLeafletVersion?: number;

  flagEnableEXPVerification: boolean = false;

  flagEnableExpiredEXPCheck: boolean = false;

  batchMessage?: string;

  flagEnableBatchRecallMessage: boolean = false;

  recallMessage?: string;

  flagEnableACFBatchCheck: boolean = false;

  acfBatchCheckURL?: string;

  flagEnableSNVerification: boolean = false;

  /** ACDC PATCH */
  acdcAuthFeatureSSI?: string;

  snValidReset: boolean = false;

  @list(String)
  snValid?: string[];

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(model?: ModelArg<Batch>) {
    super(model);
  }
}

