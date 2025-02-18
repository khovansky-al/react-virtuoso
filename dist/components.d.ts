import { ForwardRefExoticComponent, ReactElement, Ref } from 'react';
import { Grid, GridHandle } from './Grid';
import { Components, ComputeItemKey, FollowOutput, GridComponents, GridComputeItemKey, GridItemContent, GroupContent, GroupItemContent, IndexLocationWithAlign, ItemContent, ListItem, ListRange, ScrollSeekConfiguration, TableComponents, FixedHeaderContent } from './interfaces';
import { List, ListHandle } from './List';
import { TableHandle } from './Table';
import { ScrollIntoViewLocation } from './scrollIntoViewSystem';
declare type CompProps<T> = T extends ForwardRefExoticComponent<infer R> ? R : never;
declare type ListProps = CompProps<typeof List>;
declare type GridProps = CompProps<typeof Grid>;
export interface VirtuosoProps<D, C> extends Omit<ListProps, 'groupCounts' | 'groupContent' | 'itemsRendered'> {
    /**
     * The total amount of items to be rendered.
     */
    totalCount?: number;
    /**
     * The data items to be rendered. If data is set, the total count will be inferred from the length of the array.
     */
    data?: readonly D[];
    /**
     * Additional context available in the custom components and content callbacks
     */
    context?: C;
    /**
     * *The property accepts pixel values.*
     *
     * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
     * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
     * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
     * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
     *
     */
    overscan?: number | {
        main: number;
        reverse: number;
    };
    /**
     *
     * *The property accepts pixel values.*
     *
     * Set the increaseViewportBy property to artificially increase the viewport size, causing items to be rendered before outside of the viewport.
     * The property causes the component to render more items than the necessary, but can help with slow loading content.
     * Using `{ top?: number, bottom?: number }` lets you set the increase for each end separately.
     *
     */
    increaseViewportBy?: number | {
        top: number;
        bottom: number;
    };
    /**
     * Set the amount of items to remain fixed at the top of the list.
     *
     * For a header that scrolls away when scrolling, check the `components.Header` property.
     */
    topItemCount?: number;
    /**
     * Set to a value between 0 and totalCount - 1 to make the list start scrolled to that item.
     * Pass in an object to achieve additional effects similar to `scrollToIndex`.
     */
    initialTopMostItemIndex?: number | IndexLocationWithAlign;
    /**
     * Set this value to offset the initial location of the list.
     * Warning: using this property will still run a render cycle at the scrollTop: 0 list window.
     * If possible, avoid using it and stick to `initialTopMostItemIndex` instead.
     */
    initialScrollTop?: number;
    /**
     * Use for server-side rendering - if set, the list will render the specified amount of items
     * regardless of the container / item size.
     */
    initialItemCount?: number;
    /**
     * Use the `components` property for advanced customization of the elements rendered by the list.
     */
    components?: Components<C>;
    /**
     * Set the callback to specify the contents of the item.
     */
    itemContent?: ItemContent<D, C>;
    /**
     * If specified, the component will use the function to generate the `key` property for each list item.
     */
    computeItemKey?: ComputeItemKey<D, C>;
    /**
     * By default, the component assumes the default item height from the first rendered item (rendering it as a "probe").
     *
     * If the first item turns out to be an outlier (very short or tall), the rest of the rendering will be slower,
     * as multiple passes of rendering should happen for the list to fill the viewport.
     *
     * Setting `defaultItemHeight` causes the component to skip the "probe" rendering and use the property
     * value as default height instead.
     */
    defaultItemHeight?: number;
    /**
     * Allows customizing the height/width calculation of `Item` elements.
     *
     * The default implementation reads `el.getBoundingClientRect().height` and `el.getBoundingClientRect().width`.
     */
    itemSize?: (el: HTMLElement, field: 'offsetHeight' | 'offsetWidth') => number;
    /**
     * Can be used to improve performance if the rendered items are of known size.
     * Setting it causes the component to skip item measurements.
     */
    fixedItemHeight?: number;
    /**
     * Use to display placeholders if the user scrolls fast through the list.
     *
     * Set `components.ScrollSeekPlaceholder` to change the placeholder content.
     */
    scrollSeekConfiguration?: ScrollSeekConfiguration | false;
    /**
     * If set to `true`, the list automatically scrolls to bottom if the total count is changed.
     * Set to `"smooth"` for an animated scrolling.
     *
     * By default, `followOutput` scrolls down only if the list is already at the bottom.
     * To implement an arbitrary logic behind that, pass a function:
     *
     * ```tsx
     * <Virtuoso
     *  followOutput={(isAtBottom: boolean) => {
     *    if (expression) {
     *      return 'smooth' // can be 'auto' or false to avoid scrolling
     *    } else {
     *      return false
     *    }
     *  }} />
     * ```
     */
    followOutput?: FollowOutput;
    /**
     * Set to customize the wrapper tag for the header and footer components (default is `div`).
     */
    headerFooterTag?: string;
    /**
     * Use when implementing inverse infinite scrolling - decrease the value this property
     * in combination with  `data` or `totalCount` to prepend items to the top of the list.
     *
     * Warning: the firstItemIndex should **be a positive number**, based on the total amount of items to be displayed.
     */
    firstItemIndex?: number;
    /**
     * Called when the list starts/stops scrolling.
     */
    isScrolling?: (isScrolling: boolean) => void;
    /**
     * Gets called when the user scrolls to the end of the list.
     * Receives the last item index as an argument. Can be used to implement endless scrolling.
     */
    endReached?: (index: number) => void;
    /**
     * Called when the user scrolls to the start of the list.
     */
    startReached?: (index: number) => void;
    /**
     * Called with the new set of items each time the list items are rendered due to scrolling.
     */
    rangeChanged?: (range: ListRange) => void;
    /**
     * Called with true / false when the list has reached the bottom / gets scrolled up.
     * Can be used to load newer items, like `tail -f`.
     */
    atBottomStateChange?: (atBottom: boolean) => void;
    /**
     * Called with `true` / `false` when the list has reached the top / gets scrolled down.
     */
    atTopStateChange?: (atTop: boolean) => void;
    /**
     * Called when the total list height is changed due to new items or viewport resize.
     */
    totalListHeightChanged?: (height: number) => void;
    /**
     * Called with the new set of items each time the list items are rendered due to scrolling.
     */
    itemsRendered?: (items: ListItem<D>[]) => void;
    /**
     * Setting `alignToBottom` to `true` aligns the items to the bottom of the list if the list is shorter than the viewport.
     * Use `followOutput` property to keep the list aligned when new items are appended.
     */
    alignToBottom?: boolean;
    /**
     * Uses the document scroller rather than wrapping the list in its own.
     */
    useWindowScroll?: boolean;
    /**
     * Pass a reference to a scrollable parent element, so that the list won't wrap in its own.
     */
    customScrollParent?: HTMLElement;
    /**
     * Provides access to the root DOM element
     */
    scrollerRef?: (ref: HTMLElement | Window | null) => any;
    /**
     * By default `4`. Redefine to change how much away from the bottom the scroller can be before the list is not considered not at bottom.
     */
    atBottomThreshold?: number;
}
export interface GroupedVirtuosoProps<D, C> extends Omit<VirtuosoProps<D, C>, 'totalCount' | 'itemContent'>, Pick<ListProps, 'groupCounts' | 'groupContent'> {
    /**
     * Specifies the amount of items in each group (and, actually, how many groups are there).
     * For example, passing [20, 30] will display 2 groups with 20 and 30 items each.
     */
    groupCounts?: number[];
    /**
     * Specifies how each each group header gets rendered. The callback receives the zero-based index of the group.
     */
    groupContent?: GroupContent;
    /**
     * Specifies how each each item gets rendered.
     */
    itemContent?: GroupItemContent<D, C>;
}
export interface TableVirtuosoProps<D, C> extends Omit<VirtuosoProps<D, C>, 'components' | 'headerFooterTag' | 'topItemCount'> {
    /**
     * Use the `components` property for advanced customization of the elements rendered by the table.
     */
    components?: TableComponents<C>;
    /**
     * Set the contents of the table header.
     */
    fixedHeaderContent?: FixedHeaderContent;
    /**
     * The total amount of items to be rendered.
     */
    totalCount?: number;
    /**
     * The data items to be rendered. If data is set, the total count will be inferred from the length of the array.
     */
    data?: readonly D[];
    /**
     * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
     * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
     * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
     * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in `react-window`).
     */
    overscan?: number | {
        main: number;
        reverse: number;
    };
    /**
     * Set the increaseViewportBy property to artificially increase the viewport size, causing items to be rendered before outside of the viewport.
     * The property causes the component to render more items than the necessary, but can help with slow loading content.
     * Using `{ top?: number, bottom?: number }` lets you set the increase for each end separately.
     */
    increaseViewportBy?: number | {
        top: number;
        bottom: number;
    };
    /**
     * Set to a value between 0 and totalCount - 1 to make the list start scrolled to that item.
     */
    initialTopMostItemIndex?: number;
    /**
     * Set this value to offset the initial location of the list.
     * Warning: using this property will still run a render cycle at the scrollTop: 0 list window.
     * If possible, avoid using it and stick to `initialTopMostItemIndex` instead.
     */
    initialScrollTop?: number;
    /**
     * Use for server-side rendering - if set, the list will render the specified amount of items
     * regardless of the container / item size.
     */
    initialItemCount?: number;
    /**
     * Set the callback to specify the contents of the item.
     */
    itemContent?: ItemContent<D, C>;
    /**
     * If specified, the component will use the function to generate the `key` property for each list item.
     */
    computeItemKey?: ComputeItemKey<D, C>;
    /**
     * By default, the component assumes the default item height from the first rendered item (rendering it as a "probe").
     *
     * If the first item turns out to be an outlier (very short or tall), the rest of the rendering will be slower,
     * as multiple passes of rendering should happen for the list to fill the viewport.
     *
     * Setting `defaultItemHeight` causes the component to skip the "probe" rendering and use the property
     * value as default height instead.
     */
    defaultItemHeight?: number;
    /**
     * Allows customizing the height/width calculation of `Item` elements.
     *
     * The default implementation reads `el.getBoundingClientRect().height` and `el.getBoundingClientRect().width`.
     */
    itemSize?: (el: HTMLElement, field: 'offsetHeight' | 'offsetWidth') => number;
    /**
     * Can be used to improve performance if the rendered items are of known size.
     * Setting it causes the component to skip item measurements.
     */
    fixedItemHeight?: number;
    /**
     * Use to display placeholders if the user scrolls fast through the list.
     *
     * Set `components.ScrollSeekPlaceholder` to change the placeholder content.
     */
    scrollSeekConfiguration?: ScrollSeekConfiguration | false;
    /**
     * If set to `true`, the list automatically scrolls to bottom if the total count is changed.
     * Set to `"smooth"` for an animated scrolling.
     *
     * By default, `followOutput` scrolls down only if the list is already at the bottom.
     * To implement an arbitrary logic behind that, pass a function:
     *
     * ```tsx
     * <Virtuoso
     *  followOutput={(isAtBottom: boolean) => {
     *    if (expression) {
     *      return 'smooth' // can be 'auto' or false to avoid scrolling
     *    } else {
     *      return false
     *    }
     *  }} />
     * ```
     */
    followOutput?: FollowOutput;
    /**
     * Use when implementing inverse infinite scrolling - decrease the value this property
     * in combination with  `data` or `totalCount` to prepend items to the top of the list.
     *
     * Warning: the firstItemIndex should **be a positive number**, based on the total amount of items to be displayed.
     */
    firstItemIndex?: number;
    /**
     * Called when the list starts/stops scrolling.
     */
    isScrolling?: (isScrolling: boolean) => void;
    /**
     * Gets called when the user scrolls to the end of the list.
     * Receives the last item index as an argument. Can be used to implement endless scrolling.
     */
    endReached?: (index: number) => void;
    /**
     * Called when the user scrolls to the start of the list.
     */
    startReached?: (index: number) => void;
    /**
     * Called with the new set of items each time the list items are rendered due to scrolling.
     */
    rangeChanged?: (range: ListRange) => void;
    /**
     * Called with true / false when the list has reached the bottom / gets scrolled up.
     * Can be used to load newer items, like `tail -f`.
     */
    atBottomStateChange?: (atBottom: boolean) => void;
    /**
     * Called with `true` / `false` when the list has reached the top / gets scrolled down.
     */
    atTopStateChange?: (atTop: boolean) => void;
    /**
     * Called when the total list height is changed due to new items or viewport resize.
     */
    totalListHeightChanged?: (height: number) => void;
    /**
     * Called with the new set of items each time the list items are rendered due to scrolling.
     */
    itemsRendered?: (items: ListItem<D>[]) => void;
    /**
     * Setting `alignToBottom` to `true` aligns the items to the bottom of the list if the list is shorter than the viewport.
     * Use `followOutput` property to keep the list aligned when new items are appended.
     */
    alignToBottom?: boolean;
    /**
     * Uses the document scroller rather than wrapping the list in its own.
     */
    useWindowScroll?: boolean;
    /**
     * Pass a reference to a scrollable parent element, so that the table won't wrap in its own.
     */
    customScrollParent?: HTMLElement;
    /**
     * Provides access to the root DOM element
     */
    scrollerRef?: (ref: HTMLElement | Window | null) => any;
    /**
     * By default `4`. Redefine to change how much away from the bottom the scroller can be before the list is not considered not at bottom.
     */
    atBottomThreshold?: number;
}
export interface VirtuosoGridProps<C extends unknown = unknown> extends GridProps {
    /**
     * The total amount of items to be rendered.
     */
    totalCount: number;
    /**
     * Set the callback to specify the contents of the item.
     */
    itemContent?: GridItemContent<C>;
    /**
     * Use the `components` property for advanced customization of the elements rendered by the list.
     */
    components?: GridComponents<C>;
    /**
     * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
     * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
     * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
     */
    overscan?: number | {
        main: number;
        reverse: number;
    };
    /**
     * If specified, the component will use the function to generate the `key` property for each list item.
     */
    computeItemKey?: GridComputeItemKey;
    /**
     * Use to display placeholders if the user scrolls fast through the list.
     *
     * Set `components.ScrollSeekPlaceholder` to change the placeholder content.
     */
    scrollSeekConfiguration?: ScrollSeekConfiguration | false;
    /**
     * Called when the list starts/stops scrolling.
     */
    isScrolling?: (isScrolling: boolean) => void;
    /**
     * Gets called when the user scrolls to the end of the list.
     * Receives the last item index as an argument. Can be used to implement endless scrolling.
     */
    endReached?: (index: number) => void;
    /**
     * Called when the user scrolls to the start of the list.
     */
    startReached?: (index: number) => void;
    /**
     * Called with the new set of items each time the list items are rendered due to scrolling.
     */
    rangeChanged?: (range: ListRange) => void;
    /**
     * Called with true / false when the list has reached the bottom / gets scrolled up.
     * Can be used to load newer items, like `tail -f`.
     */
    atBottomStateChange?: (atBottom: boolean) => void;
    /**
     * Called with `true` / `false` when the list has reached the top / gets scrolled down.
     */
    atTopStateChange?: (atTop: boolean) => void;
    /**
     * Provides access to the root DOM element
     */
    scrollerRef?: (ref: HTMLElement | null) => any;
    /**
     * Sets the className for the list DOM element
     */
    listClassName?: string;
    /**
     * Sets the grid items' className
     */
    itemClassName?: string;
    /**
     * Uses the document scroller rather than wrapping the grid in its own.
     */
    useWindowScroll?: boolean;
    /**
     * Pass a reference to a scrollable parent element, so that the grid won't wrap in its own.
     */
    customScrollParent?: HTMLElement;
}
export interface VirtuosoHandle extends ListHandle {
    /**
     * Scrolls the component to the specified item index. See {{IndexLocationWithAlign}} for more options.
     */
    scrollToIndex(location: number | IndexLocationWithAlign): void;
    /**
     * Scrolls the item into view if necessary. See [the website example](http://virtuoso.dev/keyboard-navigation/) for an implementation.
     */
    scrollIntoView(location: ScrollIntoViewLocation): void;
    /**
     * Scrolls the component to the specified location. See [ScrollToOptions (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions)
     */
    scrollTo(location: ScrollToOptions): void;
    /**
     * Scrolls the component with the specified amount. See [ScrollToOptions (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions)
     */
    scrollBy(location: ScrollToOptions): void;
}
export interface GroupedVirtuosoHandle extends ListHandle {
    scrollToIndex(location: number | IndexLocationWithAlign): void;
    scrollTo(location: ScrollToOptions): void;
    scrollBy(location: ScrollToOptions): void;
}
export interface VirtuosoGridHandle extends GridHandle {
    scrollToIndex(location: number | IndexLocationWithAlign): void;
    scrollTo(location: ScrollToOptions): void;
    scrollBy(location: ScrollToOptions): void;
}
export declare const Virtuoso: <ItemData extends unknown = any, Context extends unknown = any>(props: VirtuosoProps<ItemData, Context> & {
    ref?: Ref<VirtuosoHandle> | undefined;
}) => ReactElement;
export declare const GroupedVirtuoso: <ItemData extends unknown = any, Context extends unknown = any>(props: GroupedVirtuosoProps<ItemData, Context> & {
    ref?: Ref<GroupedVirtuosoHandle> | undefined;
}) => ReactElement;
export declare const TableVirtuoso: <ItemData extends unknown = any, Context extends unknown = any>(props: TableVirtuosoProps<ItemData, Context> & {
    ref?: Ref<import("@virtuoso.dev/react-urx").MethodsFromPropMap<import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalCount, listRefresh }, { isAtBottom, atBottomState }, { scrollToIndex }, { scrolledToInitialItem }, { propsReady, didMount }, { log }, { scrollingInProgress },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        followOutput: import("@virtuoso.dev/urx").StatefulStream<FollowOutput>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }, {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }, {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }, {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }, {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ scrollBy, scrollTop, deviation, scrollingInProgress }, { isScrolling, isAtBottom, atBottomState, scrollDirection, lastJumpDueToItemResize }, { listState }, { beforeUnshiftWith, shiftWithOffset, sizes }, { log },]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }, {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }, {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }, {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }>], ([{ topItemsIndexes }]: [{
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }]) => {
        topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }, {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }, {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, firstItemIndex, data }, { listState }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>], ([{ scrollVelocity }]: [{
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }]) => {
        isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | ScrollSeekConfiguration | undefined>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }, {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }, {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }>], ([{ footerHeight, headerHeight }, { listState }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }]) => {
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }, {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }, {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }>], ([{ footerHeight, headerHeight }, { listState }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }]) => {
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalListHeight }, { didMount }, { scrollTo }]: [{
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }, {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }, {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }>], ([{ footerHeight, headerHeight }, { listState }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }]) => {
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    }>], ([{ viewportHeight }, { totalListHeight }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    }]) => {
        alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollTo, scrollContainerState }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
        windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
        windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }]) => {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ log }]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }, {
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }, {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ sizes, totalCount }, { scrollTop, viewportHeight, headerHeight, scrollingInProgress }, { scrollToIndex }]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        scrollIntoView: import("@virtuoso.dev/urx").Stream<ScrollIntoViewLocation>;
    }>], ([sizeRange, initialItemCount, propsReady, scrollSeek, totalListHeight, initialScrollTopSystem, alignToBottom, windowScroller, scrollIntoView,]: [{
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }, {
        initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    }, {
        isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | ScrollSeekConfiguration | undefined>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
    }, {
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    }, {
        initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
        windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
        windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    }, {
        scrollIntoView: import("@virtuoso.dev/urx").Stream<ScrollIntoViewLocation>;
    }]) => {
        scrollIntoView: import("@virtuoso.dev/urx").Stream<ScrollIntoViewLocation>;
        useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
        windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
        windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
        initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
        isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | ScrollSeekConfiguration | undefined>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
        initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }>], ([{ totalCount, sizeRanges, fixedItemSize, defaultItemSize, trackItemSizes, itemSize, data, firstItemIndex, groupIndices, statefulTotalCount, }, { initialTopMostItemIndex, scrolledToInitialItem }, domIO, followOutput, { listState, topItemsIndexes, ...flags }, { scrollToIndex }, _, { topItemCount }, { groupCounts }, featureGroup1, log,]: [{
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>; /**
         * Called when the list starts/stops scrolling.
         */
        defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWith: import("@virtuoso.dev/urx").Stream<number>;
        shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
        beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
        listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    }, {
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    }, {
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    }, {
        followOutput: import("@virtuoso.dev/urx").StatefulStream<FollowOutput>;
    }, {
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>; /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    }, {
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    }, {
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
    }, {
        scrollIntoView: import("@virtuoso.dev/urx").Stream<ScrollIntoViewLocation>;
        useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
        windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
        windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
        initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
        isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | ScrollSeekConfiguration | undefined>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
        initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    }, {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    }]) => {
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        scrollIntoView: import("@virtuoso.dev/urx").Stream<ScrollIntoViewLocation>;
        useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
        windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
        windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
        initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
        isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | ScrollSeekConfiguration | undefined>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
        initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        followOutput: import("@virtuoso.dev/urx").StatefulStream<FollowOutput>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    }>, import("@virtuoso.dev/urx").SystemSpec<import("@virtuoso.dev/urx").SystemSpecs, () => {
        context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
        itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, unknown>>;
        fixedHeaderContent: import("@virtuoso.dev/urx").StatefulStream<FixedHeaderContent>;
        components: import("@virtuoso.dev/urx").StatefulStream<TableComponents<unknown>>;
        computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, unknown>>;
        scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
        TableComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<import("./interfaces").TableProps & {
            context?: unknown;
        }> | null | undefined>;
        TableHeadComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<{
            context?: unknown;
        }> | null | undefined>;
        TableBodyComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
            ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
        }, "ref" | "style" | "children"> & {
            /**
             * Additional context available in the custom components and content callbacks
             */
            'data-test-id': string;
        } & {
            context?: unknown;
        }> | null | undefined>;
        TableRowComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<import("./interfaces").ItemProps & {
            context?: unknown;
        }> | null | undefined>;
        ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
            ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
        }, "ref" | "style" | "tabIndex" | "children"> & {
            'data-test-id'?: string | undefined;
            'data-virtuoso-scroller'?: boolean | undefined;
        } & {
            context?: unknown;
        }> | null | undefined>;
        EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<{
            context?: unknown;
        }> | null | undefined>;
        ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
            context?: unknown;
        }> | null | undefined>;
    }>], ([listSystem, propsSystem]: [{
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        scrollIntoView: import("@virtuoso.dev/urx").Stream<ScrollIntoViewLocation>;
        useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
        windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
        windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
        initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
        isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | ScrollSeekConfiguration | undefined>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
        initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        followOutput: import("@virtuoso.dev/urx").StatefulStream<FollowOutput>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    }, {
        context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
        itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, unknown>>;
        fixedHeaderContent: import("@virtuoso.dev/urx").StatefulStream<FixedHeaderContent>;
        components: import("@virtuoso.dev/urx").StatefulStream<TableComponents<unknown>>;
        computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, unknown>>;
        scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
        TableComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<import("./interfaces").TableProps & {
            context?: unknown;
        }> | null | undefined>;
        TableHeadComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<{
            context?: unknown;
        }> | null | undefined>;
        TableBodyComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
            ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
        }, "ref" | "style" | "children"> & {
            /**
             * Additional context available in the custom components and content callbacks
             */
            'data-test-id': string;
        } & {
            context?: unknown;
        }> | null | undefined>;
        TableRowComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<import("./interfaces").ItemProps & {
            context?: unknown;
        }> | null | undefined>;
        ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
            ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
        }, "ref" | "style" | "tabIndex" | "children"> & {
            'data-test-id'?: string | undefined;
            'data-virtuoso-scroller'?: boolean | undefined;
        } & {
            context?: unknown;
        }> | null | undefined>;
        EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<{
            context?: unknown;
        }> | null | undefined>;
        ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
            context?: unknown;
        }> | null | undefined>;
    }]) => {
        context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
        itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, unknown>>;
        fixedHeaderContent: import("@virtuoso.dev/urx").StatefulStream<FixedHeaderContent>;
        components: import("@virtuoso.dev/urx").StatefulStream<TableComponents<unknown>>;
        computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, unknown>>;
        scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
        TableComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<import("./interfaces").TableProps & {
            context?: unknown;
        }> | null | undefined>;
        TableHeadComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<{
            context?: unknown;
        }> | null | undefined>;
        TableBodyComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
            ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
        }, "ref" | "style" | "children"> & {
            /**
             * Additional context available in the custom components and content callbacks
             */
            'data-test-id': string;
        } & {
            context?: unknown;
        }> | null | undefined>;
        TableRowComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<import("./interfaces").ItemProps & {
            context?: unknown;
        }> | null | undefined>;
        ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
            ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
        }, "ref" | "style" | "tabIndex" | "children"> & {
            'data-test-id'?: string | undefined;
            'data-virtuoso-scroller'?: boolean | undefined;
        } & {
            context?: unknown;
        }> | null | undefined>;
        EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<{
            context?: unknown;
        }> | null | undefined>;
        ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | import("react").ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
            context?: unknown;
        }> | null | undefined>;
        log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
        logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
        scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        scrollTop: import("@virtuoso.dev/urx").Stream<number>;
        viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
        headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
        smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
        /**
         * *The property accepts pixel values.*
         *
         * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
         * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
         * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
         * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
         *
         */
        scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        scrollIntoView: import("@virtuoso.dev/urx").Stream<ScrollIntoViewLocation>;
        useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
        windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
        windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
        windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
        alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
        initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
        isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | ScrollSeekConfiguration | undefined>;
        scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
        scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        didMount: import("@virtuoso.dev/urx").Stream<boolean>;
        initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
        overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
        topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
        increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
        visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
        isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
        isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
        atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
        scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
        atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
        lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
        endReached: import("@virtuoso.dev/urx").Stream<number>;
        startReached: import("@virtuoso.dev/urx").Stream<number>;
        rangeChanged: import("@virtuoso.dev/urx").Stream<ListRange>;
        itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
        statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        /**
         * Use for server-side rendering - if set, the list will render the specified amount of items
         * regardless of the container / item size.
         */
        listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
        scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
        trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
        groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        followOutput: import("@virtuoso.dev/urx").StatefulStream<FollowOutput>;
        totalCount: import("@virtuoso.dev/urx").Stream<number>;
        data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
        firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
        sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
        initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
        scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
        topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
        topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
        groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
        fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
        defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    }>, {
        required: {};
        optional: {
            context: "context";
            followOutput: "followOutput";
            firstItemIndex: "firstItemIndex";
            itemContent: "itemContent";
            fixedHeaderContent: "fixedHeaderContent";
            overscan: "overscan";
            increaseViewportBy: "increaseViewportBy";
            totalCount: "totalCount";
            topItemCount: "topItemCount";
            initialTopMostItemIndex: "initialTopMostItemIndex";
            components: "components";
            groupCounts: "groupCounts";
            atBottomThreshold: "atBottomThreshold";
            computeItemKey: "computeItemKey";
            defaultItemHeight: "defaultItemHeight";
            fixedItemHeight: "fixedItemHeight";
            itemSize: "itemSize"; /**
             * Set the contents of the table header.
             */
            scrollSeekConfiguration: "scrollSeekConfiguration";
            data: "data";
            initialItemCount: "initialItemCount";
            initialScrollTop: "initialScrollTop";
            alignToBottom: "alignToBottom";
            useWindowScroll: "useWindowScroll";
            customScrollParent: "customScrollParent";
            scrollerRef: "scrollerRef"; /**
             * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
             * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
             * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
             * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in `react-window`).
             */
            logLevel: "logLevel";
        };
        methods: {
            scrollToIndex: "scrollToIndex";
            scrollIntoView: "scrollIntoView";
            scrollTo: "scrollTo";
            scrollBy: "scrollBy";
        };
        events: {
            isScrolling: "isScrolling";
            endReached: "endReached";
            startReached: "startReached";
            rangeChanged: "rangeChanged";
            atBottomStateChange: "atBottomStateChange";
            atTopStateChange: "atTopStateChange";
            totalListHeightChanged: "totalListHeightChanged";
            itemsRendered: "itemsRendered";
            groupIndices: "groupIndices";
        };
    }>> | undefined;
}) => ReactElement;
export declare const VirtuosoGrid: <Context extends unknown = any>(props: VirtuosoGridProps<Context> & {
    ref?: Ref<VirtuosoGridHandle> | undefined;
}) => ReactElement;
export {};
