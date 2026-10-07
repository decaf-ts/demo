import { Constructor } from "@decaf-ts/decoration";
import { Model } from "@decaf-ts/decorator-validation";

/**
 * @description Shape of a menu entry rendered by the demo navigation.
 * @summary Carries the required display `label` plus optional `title`, navigation
 * `url`, `icon` and `color` used to style the item.
 *
 * @interface IMenuItem
 * @memberOf module:demo.utils.types
 */
export interface IMenuItem {
  label: string;
  title?: string;
  url?: string;
  icon?: string;
  color?: string;
}

/**
 * @description Raw, in-memory query definition for a {@link Model} type.
 * @summary Describes a simple query over a model collection: which keys to `select`,
 * the model `Constructor` to query `from`, a `where` predicate, an optional `sort`
 * comparator, and optional `limit`/`skip` paging values.
 *
 * @interface IRawQuery
 * @template M - The model type being queried, extending {@link Model}.
 * @memberOf module:demo.utils.types
 */
export interface IRawQuery<M extends Model> {
    select: undefined | (keyof M)[];
    from: Constructor<M>;
    where: (el: M) => boolean;
    sort?: (el: M, el2: M) => number;
    limit?: number;
    skip?: number;
}
