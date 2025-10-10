
import {
  Model,
  model,
  ModelArg
} from '@decaf-ts/decorator-validation';
import { uichild, uilayoutitem, uielement, uilayout, uimodel } from '@decaf-ts/ui-decorators';

@uilayout('ngx-decaf-fieldset')
@model()
class ProductBaseModel {
    @uielement('ngx-decaf-crud-field', {
        label: 'demo.code.label',
        placeholder: 'demo.code.placeholder',
        value: 1,
        className: 'dcf-width-1-2'
    })
    @uilayoutitem(1, 1)
    code!: string;


    @uielement('ngx-decaf-crud-field', {
        label: 'demo.brand.label',
        placeholder: 'demo.brand.placeholder',
        value: 1,
        className: 'dcf-width-1-2'
    })
    @uilayoutitem(2, 1)
    brand!: string;

    @uielement('ngx-decaf-crud-field', {
        label: 'demo.name.label',
        placeholder: 'demo.name.placeholder',
        value: 1,
    })
    @uilayoutitem(1, 2)
    name!: string;

    @uielement('ngx-decaf-crud-field', {
        label: 'demo.license.label',
        placeholder: 'demo.license.placeholder',
        value: 1,
    })
    @uilayoutitem(1, 3)
    license!: string;

    // Coluna 2


    @uielement('ngx-decaf-crud-field', {
        label: 'demo.materialCode.label',
        placeholder: 'demo.materialCode.placeholder',
        value: 1,
    })
    @uilayoutitem(2, 2)
    materialCode!: string;

    @uielement('ngx-decaf-crud-field', {
        label: 'demo.batch.label',
        placeholder: 'demo.batch.placeholder',
        value: 1,
    })
    @uilayoutitem(2, 2)
    batch!: string;


}


@uimodel('ngx-decaf-stepped-form', {disablePages: true, pages: 3, startPage: 1, pageTitles: [
  {title: 'stepped-form.step1.title', description: 'stepped-form.step1.description'},
  {title: 'stepped-form.step2.title', description: 'stepped-form.step2.description'},
  {title: 'stepped-form.step3.title', description: 'stepped-form.step3.description'},
]})
@model()
export class ProductForm extends Model {

  @uichild(ProductBaseModel.name, 'ngx-decaf-layout', {page: 1, cols: 2, rows: 3})
  productBase!: ProductBaseModel;

  @uielement('app-image-upload', {page: 2})
  productImage!: string;

  @uielement('app-epi-tab', {page: 3})
  epi!: Record<string, unknown>;

  constructor(args: ModelArg<ProductForm> = {}) {
    super(args);
  }

}
