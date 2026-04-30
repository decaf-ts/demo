import { description } from '@decaf-ts/decoration';
import {
  model,
  Model,
  ModelArg,
} from '@decaf-ts/decorator-validation';
import {  uilayoutprop, uielement, uilayout } from '@decaf-ts/ui-decorators';

@uilayout('ngx-decaf-layout', true)
@model()
export class HomeLayout extends Model {

  @uielement('app-hero')
  @uilayoutprop('full', 1)
  hero!: string;

  @uielement('app-trusted-section', {
    title: 'Trusted around the world',
    description: "Leading renowned brands uniting for relentless innovation and exceptional excellence, forging truly groundbreaking digital solutions.",
    backgroundColor: 'muted',
    demoSide: 'left',
    buttonText: 'See How It Works',
    demoIcon: 'ti-circle-check',
    demoDescription: "Task Management Demo",
  })
  @uilayoutprop('full', 2)
  trusted!: string;

  @uielement('app-section-demo', {
    title: 'Manage a dynamic task list.',
    meta: "Showcasing Innovation",
    description: "Add, view, and remove tasks effortlessly. Use the class methods addTask and removeTask to manage your task list dynamically and display the results.",
    buttonText: 'See How It Works',
    demoIcon: 'ti-circle-check',
    demoDescription: "Task Management Demo",
  })
  @uilayoutprop('full', 4)
  tasks!: string;

  @uielement('app-section-demo', {
    title: 'Showcase Grid Title',
    meta: "Showcasing Innovation",
    description: "Add, view, and remove tasks effortlessly. Use the class methods addTask and removeTask to manage your task list dynamically and display the results.",
    backgroundColor: 'muted',
    demoSide: 'left',
    buttonText: 'See How It Works',
    demoIcon: 'ti-circle-check',
    demoDescription: "Task Management Demo",
  })
  @uilayoutprop('full', 4)
  grid!: string;

  @uielement('app-code-section', {
    title: 'Code Smarter, Build Faster.',
    description: "Streamline your development workflow with Decaf and bring efficiency to every project, effortlessly.",
    demoSide: 'left',
    button1Text: 'Get started',
    button2Text: 'See Documentation',
    demoIcon: 'ti-circle-check',
    demoDescription: "Task Management Demo",
  })
  @uilayoutprop('full', 3)
  code!: string;

  constructor(args: ModelArg<HomeLayout> = {}) {
    super(args);
  }
}
