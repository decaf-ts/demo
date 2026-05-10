import { model, Model, ModelArg } from '@decaf-ts/decorator-validation';
import {
  uilayoutprop,
  uielement,
  uilayout,
  uichild,
} from '@decaf-ts/ui-decorators';

@uilayout('ngx-decaf-layout', true)
@model()
export class FeaturesLayout extends Model {
  @uielement('app-features', {
    title: 'Discover the Power of Modules',
    description:
      'Browse all Decaf modules and learn how to use them with examples extracted from their documentation.',
    backgroundColor: 'muted',
    demoSide: 'left',
    button1Text: 'Explore Modules',
    button2Text: 'Documentation',
    demoIcon: 'ti-circle-check',
    demoDescription: 'Task Management Demo',
  })
  @uilayoutprop('full', 1)
  hero!: string;

  @uielement('app-features-list', {
    title: 'decoration',
    meta: 'MODULE',
    description:
      'Description @decaf-ts/decoration provides two complementary capabilities: - A small, builder-style API Decoration to define and apply decorators that can vary by "flavour" for example, different frameworks or environments while keeping a stable key-based API. - A centralized run…',
    buttonText: 'See How It Works',
    demoIcon: 'ti-circle-check',
    demoDescription: 'Task Management Demo',
  })
  @uilayoutprop('full', 2)
  features!: string;

  // @uielement('ngx-decaf-icon', {
  //   title: 'decoration',
  //   meta: 'MODULE',
  //   name: 'add-outline',
  //   data: { names: ['angela', 'marcus', 'john'] },
  //   // source: () => ({
  //   //   names: ['angela', 'marcus', 'john'],
  //   // }),
  //   description:
  //     'Description @decaf-ts/decoration provides two complementary capabilities: - A small, builder-style API Decoration to define and apply decorators that can vary by "flavour" for example, different frameworks or environments while keeping a stable key-based API. - A centralized run…',
  //   buttonText: 'See How It Works',
  //   demoIcon: 'ti-circle-check',
  //   demoDescription: 'Task Management Demo',
  // })
  // @uilayoutprop('full', 2)
  // test!: string;

  constructor(args: ModelArg<FeaturesLayout> = {}) {
    super(args);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
