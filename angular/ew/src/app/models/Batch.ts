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
import { hideOn, HTML5InputTypes, uichild, uielement, uilayout, uilayoutprop, uilistmodel, uilistprop, uimodel, uiorder } from "@decaf-ts/ui-decorators";
import { Product } from "./Product";
import { OperationKeys } from "@decaf-ts/db-decorators";

@uimodel('ngx-decaf-fieldset')
@model()
class ManufacturerAddress {
  @uielement('ngx-decaf-crud-field', {
    label: 'batch.manufacturerAddress.label',
    placeholder: 'batch.manufacturerAddress.placeholder',
    className: 'dcf-width-1-2@s dcf-width-1-1',
    page: 1,
  })
  address?: string;
}


@uilistmodel('ngx-decaf-list-item', {icon: 'cafe-outline'})
@uilayout('ngx-decaf-crud-form', 2, 1)
@model()
export class Batch extends Model {

  @required()
  @uielement('ngx-decaf-crud-field', {
    label: "batch.productcode.label",
    placeholder: "batch.productcode.placeholder",
    type: HTML5InputTypes.SELECT,
    optionsMapper: (item: Product) => ({text: item.inventedName, value: `${item.productCode}`}),
    options: () => Product
  })
  @uilistprop('title')
  @uilayoutprop(2)
  @required()
  productCode!: string;

  @pk({type: String.name })
  @uielement('ngx-decaf-crud-field', {
    label: 'batch.batchNumber.label',
    placeholder: 'batch.batchNumber.placeholder',
    page: 1,
  })
  @required()
  @uilayoutprop(1, 1)
  @hideOn(OperationKeys.CREATE)
  batchNumber!: string;

  @uielement('ngx-decaf-crud-field', {
    label: 'batch.packagingSiteName.label',
    placeholder: 'batch.packagingSiteName.placeholder',
  })
  @url()
  @uilayoutprop(1, 1)
  packagingSiteName?: string;


  @uielement('ngx-decaf-crud-field', {
    label: 'batch.expiryDate.label',
    placeholder: 'batch.expiryDate.placeholder',
  })
  @required()
  @date('yyyy-MM-dd')
  @uilayoutprop(1, 1)
  expiryDate!: string;

  @uielement('ngx-decaf-crud-field', {
    label: 'batch.importLicenseNumber.label',
    placeholder: 'batch.importLicenseNumber.placeholder',
  })
  @uilayoutprop(1, 1)
  importLicenseNumber?: string;

    @uielement('ngx-decaf-crud-field', {
    label: 'batch.batchRecall.label',
    placeholder: 'batch.batchRecall.placeholder',
    page: 1,
    type: HTML5InputTypes.CHECKBOX
  })
  @uilayoutprop(1, 1)
  batchRecall!: boolean;

  @uielement('ngx-decaf-crud-field', {
    label: 'batch.manufacturerName.label',
    placeholder: 'batch.manufacturerName.placeholder',
    page: 1,
  })
  @uilayoutprop(1, 2)
  manufacturerName?: string;

  @uielement('ngx-decaf-crud-field', {
    label: 'batch.dateOfManufacturing.label',
    placeholder: 'batch.dateOfManufacturing.placeholder',
    page: 1,
  })
  @required()
  @date('yyyy-MM-dd')
  @uilayoutprop(1, 2)
  dateOfManufacturing?: string;

  @uichild(ManufacturerAddress.name, 'ngx-decaf-fieldset', {}, true)
  @uiorder(2)
  @uilayoutprop(2, 2)
  manufacturerAddress!: ManufacturerAddress;

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

