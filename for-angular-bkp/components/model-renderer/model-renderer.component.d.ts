import { EventEmitter, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Model } from '@decaf-ts/decorator-validation';
import { AngularDynamicOutput, RenderedModel } from '../../engine';
import { RendererCustomEvent } from '../../engine/types';
import * as i0 from "@angular/core";
/**
 * @description Component for rendering dynamic models
 * @summary This component is responsible for dynamically rendering models,
 * handling model changes, and managing event subscriptions for the rendered components.
 * It uses the NgxRenderingEngine to render the models and supports both string and Model inputs.
 * @class
 * @template M - Type extending Model
 * @param {Injector} injector - Angular Injector for dependency injection
 * @example
 * <ngx-decaf-model-renderer
 *   [model]="myModel"
 *   [globals]="globalVariables"
 *   (listenEvent)="handleEvent($event)">
 * </ngx-decaf-model-renderer>
 * @mermaid
 * sequenceDiagram
 *   participant App
 *   participant ModelRenderer
 *   participant RenderingEngine
 *   participant Model
 *   App->>ModelRenderer: Input model
 *   ModelRenderer->>Model: Parse if string
 *   Model-->>ModelRenderer: Parsed model
 *   ModelRenderer->>RenderingEngine: Render model
 *   RenderingEngine-->>ModelRenderer: Rendered output
 *   ModelRenderer->>ModelRenderer: Subscribe to events
 *   ModelRenderer-->>App: Emit events
 */
export declare class ModelRendererComponent<M extends Model> implements OnChanges, OnDestroy, RenderedModel {
    /**
     * @description Input model to be rendered
     * @summary Can be a Model instance or a JSON string representation of a model
     */
    model: M | string | undefined;
    /**
     * @description Global variables to be passed to the rendered component
     */
    globals: Record<string, unknown>;
    /**
     * @description Template reference for inner content
     */
    inner?: TemplateRef<unknown>;
    /**
     * @description Output of the rendered model
     */
    output?: AngularDynamicOutput;
    /**
     * @description Unique identifier for the renderer
     */
    rendererId?: string;
    /**
     * @description View container reference for dynamic component rendering
     */
    vcr: ViewContainerRef;
    /**
     * @description Event emitter for custom events from the rendered component
     */
    listenEvent: EventEmitter<RendererCustomEvent>;
    /**
     * @description Instance of the rendered component
     */
    private instance;
    private injector;
    /**
     * @description Refreshes the rendered model
     * @param {string | M} model - The model to be rendered
     */
    private refresh;
    /**
     * @description Lifecycle hook that is called when data-bound properties of a directive change
     * @param {SimpleChanges} changes - Object containing changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @description Lifecycle hook that is called when a directive, pipe, or service is destroyed
     * @return {Promise<void>}
     */
    ngOnDestroy(): Promise<void>;
    private subscribeEvents;
    /**
     * @description Unsubscribes from events emitted by the rendered component
     */
    private unsubscribeEvents;
    protected readonly JSON: JSON;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModelRendererComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModelRendererComponent<any>, "ngx-decaf-model-renderer", never, { "model": { "alias": "model"; "required": true; }; "globals": { "alias": "globals"; "required": false; }; "rendererId": { "alias": "rendererId"; "required": false; }; }, { "listenEvent": "listenEvent"; }, never, never, true, never>;
}
//# sourceMappingURL=model-renderer.component.d.ts.map