import { OnInit } from '@angular/core';
import {
  model,
  Model,
  ModelArg,
} from '@decaf-ts/decorator-validation';
import {  uilayoutprop, uielement, uilayout } from '@decaf-ts/ui-decorators';

@uilayout('ngx-decaf-layout', true)
@model()
export class ExamplesLayout extends Model implements OnInit{

  @uielement('app-examples', {
    title: 'Explore examples',
    description: "Browse all Decaf modules and learn how to use them with examples extracted from their documentation.",
    backgroundColor: 'muted',
    demoSide: 'left',
    button1Text: 'Eplore Modules',
    button2Text: 'Documentation',
    demoIcon: 'ti-circle-check',
    demoDescription: "Task Management Demo",
  })
  @uilayoutprop('full', 1)
  hero!: string;

  @uielement('app-section-demo', {
    title: 'decoration',
    meta: "MODULE",
    description: "Description @decaf-ts/decoration provides two complementary capabilities: - A small, builder-style API Decoration to define and apply decorators that can vary by \"flavour\" for example, different frameworks or environments while keeping a stable key-based API. - A centralized run…",
    buttonText: 'See How It Works',
    demoIcon: 'ti-circle-check',
    demoDescription: "Task Management Demo",
  })
  @uilayoutprop('full', 2)
  tasks!: string;

  @uielement('app-section-demo', {
    title: 'logging',
    meta: "MODULE",
    description: "Logging Library — Detailed Description The logging package is a lightweight, extensible logging solution for TypeScript projects. It centers on two main constructs: - MiniLogger — a minimal, context-aware logger used by default. - Logging — a static facade that manages global co…",
    backgroundColor: 'muted',
    demoSide: 'left',
    buttonText: 'See How It Works',
    demoIcon: 'ti-circle-check',
    demoDescription: "Task Management Demo",
  })
  @uilayoutprop('full', 3)
  grid!: string;

  constructor(args: ModelArg<ExamplesLayout> = {}) {
    super(args);
  }

  ngOnInit(): void {
    console.log('ts');
    
  }
  
}
