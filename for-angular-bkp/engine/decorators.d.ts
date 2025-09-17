/**
 * @description Marks an Angular component as dynamically loadable
 * @summary Decorator that registers an Angular component with the NgxRenderingEngine for dynamic loading.
 * This decorator must be applied before the @Component decorator to properly extract component metadata.
 * It adds metadata to the component class and registers it with the rendering engine using its selector.
 * @function Dynamic
 * @return {Function} A decorator function that can be applied to Angular component classes
 * @mermaid
 * sequenceDiagram
 *   participant C as Component Class
 *   participant D as Dynamic Decorator
 *   participant R as NgxRenderingEngine
 *   participant M as Angular Metadata
 *   C->>D: Apply decorator
 *   D->>M: reflectComponentType()
 *   M-->>D: Return component metadata
 *   alt No metadata found
 *     D->>D: Throw InternalError
 *   else Metadata found
 *     D->>R: registerComponent(selector, constructor)
 *     D->>C: Apply metadata
 *   end
 * @category Decorators
 */
export declare function Dynamic(): (target: object, propertyKey?: string | symbol | unknown, descriptor?: PropertyDescriptor) => void;
//# sourceMappingURL=decorators.d.ts.map