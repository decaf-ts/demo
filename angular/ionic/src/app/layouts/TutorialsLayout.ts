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
export class TutorialsLayout extends Model implements OnInit {
  @uielement('app-tutorials', {
    title: 'Explore Tutorials',
    description:
      'Browse all Decaf modules and learn how to use them with examples extracted from their documentation.',
    backgroundColor: 'muted',
    demoSide: 'left',
    button1Text: 'Explore Tutorials',
    button2Text: 'Documentation',
    demoIcon: 'ti-circle-check',
    demoDescription: 'Task Management Demo',
  })
  @uilayoutprop('full', 1)
  hero!: string;

  constructor(args: ModelArg<TutorialsLayout> = {}) {
    super(args);
  }

  ngOnInit(): void {
    console.log('ts');
  }
}
