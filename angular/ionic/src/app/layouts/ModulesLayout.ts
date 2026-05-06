import { OnInit } from '@angular/core';
import { model, Model, ModelArg } from '@decaf-ts/decorator-validation';
import {
  uilayoutprop,
  uielement,
  uilayout,
  uichild,
} from '@decaf-ts/ui-decorators';

@uilayout('ngx-decaf-layout', true)
@model()
export class ModulesLayout extends Model implements OnInit {
  @uielement('app-modules', {
    title: 'Explore Modules',
    description:
      'Browse all Decaf modules and learn how to use them with examples extracted from their documentation.',
    backgroundColor: 'muted',
    demoSide: 'left',
    button1Text: 'Eplore Modules',
    button2Text: 'Documentation',
    demoIcon: 'ti-circle-check',
    demoDescription: 'Task Management Demo',
  })
  @uilayoutprop('full', 1)
  hero!: string;

  @uielement('app-modules-list', {
    title: 'Explore Modules',
    description:
      'Browse all Decaf modules and learn how to use them with examples extracted from their documentation.',
    backgroundColor: 'muted',
    demoSide: 'left',
    button1Text: 'See Examples',
    button2Text: 'See Tutorials',
    demoIcon: 'ti-circle-check',
    demoDescription: 'Task Management Demo',
  })
  @uilayoutprop('full', 1)
  list!: string;

  constructor(args: ModelArg<ModulesLayout> = {}) {
    super(args);
  }

  ngOnInit(): void {
    console.log('ts');
  }
}
