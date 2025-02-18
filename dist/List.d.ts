import { RefHandle } from '@virtuoso.dev/react-urx';
import { Stream } from '@virtuoso.dev/urx';
import * as React from 'react';
import { CSSProperties } from 'react';
import { Components, ComputeItemKey, GroupContent, GroupItemContent, ItemContent, ListRootProps } from './interfaces';
import { ScrollerProps } from '.';
import { LogLevel } from './loggerSystem';
export declare function identity<T>(value: T): T;
export declare function addDeprecatedAlias<T>(prop: Stream<T>, message: string): Stream<T>;
export declare const Items: React.NamedExoticComponent<{
    showTopList?: boolean | undefined;
}>;
export declare const scrollerStyle: CSSProperties;
export declare const viewportStyle: CSSProperties;
export declare function contextPropIfNotDomElement(element: unknown, context: unknown): {
    context: unknown;
} | undefined;
export interface Hooks {
    usePublisher: typeof usePublisher;
    useEmitterValue: typeof useEmitterValue;
    useEmitter: typeof useEmitter;
}
export declare function buildScroller({ usePublisher, useEmitter, useEmitterValue }: Hooks): React.FunctionComponent<ScrollerProps>;
export declare function buildWindowScroller({ usePublisher, useEmitter, useEmitterValue }: Hooks): React.FunctionComponent<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, "ref" | "style" | "tabIndex" | "children"> & {
    'data-test-id'?: string | undefined;
    'data-virtuoso-scroller'?: boolean | undefined;
} & {
    context?: unknown;
}>;
export declare type ListHandle = RefHandle<typeof List>;
export declare const List: React.ForwardRefExoticComponent<{} & {
    context?: unknown;
    itemContent?: ItemContent<any, any> | GroupItemContent<any, any> | undefined;
    components?: Components<any> | undefined;
    computeItemKey?: ComputeItemKey<any, any> | undefined;
    scrollerRef?: ((ref: HTMLElement | Window | null) => void) | undefined;
    data?: import("./sizeSystem").Data;
    footer?: any;
    header?: any;
    logLevel?: LogLevel | undefined;
    overscan?: import("./sizeRangeSystem").Overscan | undefined;
    increaseViewportBy?: import("./sizeRangeSystem").ViewportIncrease | undefined;
    atBottomThreshold?: number | undefined;
    scrollSeekConfiguration?: false | import("./interfaces").ScrollSeekConfiguration | undefined;
    useWindowScroll?: boolean | undefined;
    customScrollParent?: HTMLElement | undefined;
    totalCount?: number | undefined;
    initialItemCount?: number | undefined;
    scrollSeek?: any;
    item?: ItemContent<any, any> | GroupItemContent<any, any> | undefined;
    ItemContainer?: any;
    ScrollContainer?: any;
    ListContainer?: any;
    emptyComponent?: any;
    firstItemIndex?: number | undefined;
    itemSize?: import("./sizeSystem").SizeFunction | undefined;
    initialTopMostItemIndex?: import("./scrollToIndexSystem").IndexLocation | undefined;
    followOutput?: import("./interfaces").FollowOutput | undefined;
    groupCounts?: number[] | undefined;
    topItems?: number | undefined;
    topItemCount?: number | undefined;
    initialScrollTop?: number | undefined;
    alignToBottom?: boolean | undefined;
    fixedItemHeight?: number | undefined;
    defaultItemHeight?: number | undefined;
    groupContent?: GroupContent | undefined;
    headerFooterTag?: string | undefined;
    group?: GroupContent | undefined;
    itemHeight?: number | undefined;
    scrollingStateChange?: boolean | undefined;
    maxHeightCacheSize?: any;
    HeaderContainer?: any;
    FooterContainer?: any;
    GroupContainer?: any;
} & {
    isScrolling?: ((value: boolean) => void) | undefined;
    atTopStateChange?: ((value: boolean) => void) | undefined;
    atBottomStateChange?: ((value: boolean) => void) | undefined;
    startReached?: ((value: number) => void) | undefined;
    endReached?: ((value: number) => void) | undefined;
    rangeChanged?: ((value: import("./interfaces").ListRange) => void) | undefined;
    groupIndices?: ((value: number[]) => void) | undefined;
    itemsRendered?: ((value: import("./listStateSystem").ListItems) => void) | undefined;
    totalListHeightChanged?: ((value: number) => void) | undefined;
} & ListRootProps & React.RefAttributes<import("@virtuoso.dev/react-urx").MethodsFromPropMap<import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, listRefresh }, { isAtBottom, atBottomState }, { scrollToIndex }, { scrolledToInitialItem }, { propsReady, didMount }, { log }, { scrollingInProgress },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}, {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}, {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ scrollBy, scrollTop, deviation, scrollingInProgress }, { isScrolling, isAtBottom, atBottomState, scrollDirection, lastJumpDueToItemResize }, { listState }, { beforeUnshiftWith, shiftWithOffset, sizes }, { log },]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}, {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}, {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}>], ([{ topItemsIndexes }]: [{
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}]) => {
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}, {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, firstItemIndex, data }, { listState }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>], ([{ scrollVelocity }]: [{
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}]) => {
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: Stream<import("./interfaces").ListRange>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}, {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}>], ([{ footerHeight, headerHeight }, { listState }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}]) => {
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}, {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}>], ([{ footerHeight, headerHeight }, { listState }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}]) => {
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalListHeight }, { didMount }, { scrollTo }]: [{
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}, {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}>], ([{ footerHeight, headerHeight }, { listState }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}]) => {
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
}>], ([{ viewportHeight }, { totalListHeight }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
}]) => {
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollTo, scrollContainerState }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: Stream<[number, number]>;
    windowViewportRect: Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: Stream<ScrollToOptions>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}, {
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount }, { scrollTop, viewportHeight, headerHeight, scrollingInProgress }, { scrollToIndex }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    scrollIntoView: Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
}>], ([sizeRange, initialItemCount, propsReady, scrollSeek, totalListHeight, initialScrollTopSystem, alignToBottom, windowScroller, scrollIntoView,]: [{
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
}, {
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: Stream<import("./interfaces").ListRange>;
}, {
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
}, {
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: Stream<[number, number]>;
    windowViewportRect: Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: Stream<ScrollToOptions>;
}, {
    scrollIntoView: Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
}]) => {
    scrollIntoView: Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: Stream<[number, number]>;
    windowViewportRect: Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}>], ([{ totalCount, sizeRanges, fixedItemSize, defaultItemSize, trackItemSizes, itemSize, data, firstItemIndex, groupIndices, statefulTotalCount, }, { initialTopMostItemIndex, scrolledToInitialItem }, domIO, followOutput, { listState, topItemsIndexes, ...flags }, { scrollToIndex }, _, { topItemCount }, { groupCounts }, featureGroup1, log,]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: Stream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: Stream<number>;
    shiftWith: Stream<number>;
    shiftWithOffset: Stream<number>;
    beforeUnshiftWith: Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
}, {
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
}, {
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    groupCounts: Stream<number[]>;
    topItemsIndexes: Stream<[number]>;
}, {
    scrollIntoView: Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: Stream<[number, number]>;
    windowViewportRect: Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
}]) => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: Stream<[number, number]>;
    windowViewportRect: Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}>, import("@virtuoso.dev/urx").SystemSpec<import("@virtuoso.dev/urx").SystemSpecs, () => {
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: import("@virtuoso.dev/urx").StatefulStream<GroupContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<Components<any>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: import("@virtuoso.dev/urx").StatefulStream<string>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    HeaderComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    TopItemListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: any;
    }> | null | undefined>;
    ListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: any;
    }> | null | undefined>;
    GroupComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").GroupProps & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
}>], ([listSystem, propsSystem]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: Stream<[number, number]>;
    windowViewportRect: Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}, {
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: import("@virtuoso.dev/urx").StatefulStream<GroupContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<Components<any>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: import("@virtuoso.dev/urx").StatefulStream<string>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    HeaderComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    TopItemListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: any;
    }> | null | undefined>;
    ListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: any;
    }> | null | undefined>;
    GroupComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").GroupProps & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
}]) => {
    item: Stream<ItemContent<any, any> | GroupItemContent<any, any>>;
    group: Stream<GroupContent>;
    topItems: Stream<number>;
    itemHeight: Stream<number | undefined>;
    scrollingStateChange: Stream<boolean>;
    adjustForPrependedItems: Stream<any>;
    maxHeightCacheSize: Stream<any>;
    footer: Stream<any>;
    header: Stream<any>;
    HeaderContainer: Stream<any>;
    FooterContainer: Stream<any>;
    ItemContainer: Stream<any>;
    ScrollContainer: Stream<any>;
    GroupContainer: Stream<any>;
    ListContainer: Stream<any>;
    emptyComponent: Stream<any>;
    scrollSeek: Stream<any>;
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: import("@virtuoso.dev/urx").StatefulStream<GroupContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<Components<any>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: import("@virtuoso.dev/urx").StatefulStream<string>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    HeaderComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    TopItemListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: any;
    }> | null | undefined>;
    ListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: any;
    }> | null | undefined>;
    GroupComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").GroupProps & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: Stream<[number, number]>;
    windowViewportRect: Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}>, {
    required: {};
    optional: {
        context: "context";
        followOutput: "followOutput";
        firstItemIndex: "firstItemIndex";
        itemContent: "itemContent";
        groupContent: "groupContent";
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
        itemSize: "itemSize";
        scrollSeekConfiguration: "scrollSeekConfiguration";
        headerFooterTag: "headerFooterTag";
        data: "data";
        initialItemCount: "initialItemCount";
        initialScrollTop: "initialScrollTop";
        alignToBottom: "alignToBottom";
        useWindowScroll: "useWindowScroll";
        customScrollParent: "customScrollParent";
        scrollerRef: "scrollerRef";
        logLevel: "logLevel";
        item: "item";
        group: "group";
        topItems: "topItems";
        itemHeight: "itemHeight";
        scrollingStateChange: "scrollingStateChange";
        maxHeightCacheSize: "maxHeightCacheSize";
        footer: "footer";
        header: "header";
        ItemContainer: "ItemContainer";
        ScrollContainer: "ScrollContainer";
        ListContainer: "ListContainer";
        GroupContainer: "GroupContainer";
        emptyComponent: "emptyComponent";
        HeaderContainer: "HeaderContainer";
        FooterContainer: "FooterContainer";
        scrollSeek: "scrollSeek";
    };
    methods: {
        scrollToIndex: "scrollToIndex";
        scrollIntoView: "scrollIntoView";
        scrollTo: "scrollTo";
        scrollBy: "scrollBy";
        adjustForPrependedItems: "adjustForPrependedItems";
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
}>>>, usePublisher: <K_3 extends "context" | "itemContent" | "components" | "computeItemKey" | "scrollerRef" | "ScrollSeekPlaceholder" | "ListComponent" | "data" | "footer" | "header" | "ItemComponent" | "ScrollerComponent" | "scrollContainerState" | "scrollTop" | "viewportHeight" | "headerHeight" | "footerHeight" | "scrollHeight" | "smoothScrollTargetReached" | "scrollTo" | "scrollBy" | "statefulScrollTop" | "deviation" | "scrollingInProgress" | "log" | "logLevel" | "listBoundary" | "overscan" | "topListHeight" | "fixedHeaderHeight" | "increaseViewportBy" | "visibleRange" | "isScrolling" | "isAtTop" | "isAtBottom" | "atBottomThreshold" | "atBottomState" | "atTopStateChange" | "atBottomStateChange" | "scrollDirection" | "scrollVelocity" | "lastJumpDueToItemResize" | "isSeeking" | "scrollSeekConfiguration" | "scrollSeekRangeChanged" | "propsReady" | "didMount" | "useWindowScroll" | "customScrollParent" | "windowScrollContainerState" | "windowViewportRect" | "windowScrollTo" | "totalCount" | "scrollToIndex" | "initialItemCount" | "totalListHeight" | "startReached" | "endReached" | "rangeChanged" | "scrollSeek" | "item" | "ItemContainer" | "ScrollContainer" | "ListContainer" | "emptyComponent" | "sizeRanges" | "groupIndices" | "firstItemIndex" | "statefulTotalCount" | "trackItemSizes" | "itemSize" | "scrolledToInitialItem" | "initialTopMostItemIndex" | "followOutput" | "groupCounts" | "topItemsIndexes" | "listState" | "topItems" | "itemsRendered" | "topItemCount" | "totalListHeightChanged" | "initialScrollTop" | "alignToBottom" | "paddingTopAddition" | "scrollIntoView" | "fixedItemHeight" | "defaultItemHeight" | "groupContent" | "headerFooterTag" | "EmptyPlaceholder" | "FooterComponent" | "HeaderComponent" | "TopItemListComponent" | "GroupComponent" | "group" | "itemHeight" | "scrollingStateChange" | "adjustForPrependedItems" | "maxHeightCacheSize" | "HeaderContainer" | "FooterContainer" | "GroupContainer">(key: K_3) => (value: {
    item: Stream<ItemContent<any, any> | GroupItemContent<any, any>>;
    group: Stream<GroupContent>;
    topItems: Stream<number>;
    itemHeight: Stream<number | undefined>;
    scrollingStateChange: Stream<boolean>;
    adjustForPrependedItems: Stream<any>;
    maxHeightCacheSize: Stream<any>;
    footer: Stream<any>;
    header: Stream<any>;
    HeaderContainer: Stream<any>;
    FooterContainer: Stream<any>;
    ItemContainer: Stream<any>;
    ScrollContainer: Stream<any>;
    GroupContainer: Stream<any>;
    ListContainer: Stream<any>;
    emptyComponent: Stream<any>;
    scrollSeek: Stream<any>;
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: import("@virtuoso.dev/urx").StatefulStream<GroupContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<Components<any>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: import("@virtuoso.dev/urx").StatefulStream<string>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    HeaderComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    TopItemListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: any;
    }> | null | undefined>;
    ListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: any;
    }> | null | undefined>;
    GroupComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").GroupProps & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: Stream<[number, number]>;
    windowViewportRect: Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}[K_3] extends Stream<infer R_4> ? R_4 : never) => void, useEmitterValue: <K_4 extends "context" | "itemContent" | "components" | "computeItemKey" | "scrollerRef" | "ScrollSeekPlaceholder" | "ListComponent" | "data" | "footer" | "header" | "ItemComponent" | "ScrollerComponent" | "scrollContainerState" | "scrollTop" | "viewportHeight" | "headerHeight" | "footerHeight" | "scrollHeight" | "smoothScrollTargetReached" | "scrollTo" | "scrollBy" | "statefulScrollTop" | "deviation" | "scrollingInProgress" | "log" | "logLevel" | "listBoundary" | "overscan" | "topListHeight" | "fixedHeaderHeight" | "increaseViewportBy" | "visibleRange" | "isScrolling" | "isAtTop" | "isAtBottom" | "atBottomThreshold" | "atBottomState" | "atTopStateChange" | "atBottomStateChange" | "scrollDirection" | "scrollVelocity" | "lastJumpDueToItemResize" | "isSeeking" | "scrollSeekConfiguration" | "scrollSeekRangeChanged" | "propsReady" | "didMount" | "useWindowScroll" | "customScrollParent" | "windowScrollContainerState" | "windowViewportRect" | "windowScrollTo" | "totalCount" | "scrollToIndex" | "initialItemCount" | "totalListHeight" | "startReached" | "endReached" | "rangeChanged" | "scrollSeek" | "item" | "ItemContainer" | "ScrollContainer" | "ListContainer" | "emptyComponent" | "sizeRanges" | "groupIndices" | "firstItemIndex" | "statefulTotalCount" | "trackItemSizes" | "itemSize" | "scrolledToInitialItem" | "initialTopMostItemIndex" | "followOutput" | "groupCounts" | "topItemsIndexes" | "listState" | "topItems" | "itemsRendered" | "topItemCount" | "totalListHeightChanged" | "initialScrollTop" | "alignToBottom" | "paddingTopAddition" | "scrollIntoView" | "fixedItemHeight" | "defaultItemHeight" | "groupContent" | "headerFooterTag" | "EmptyPlaceholder" | "FooterComponent" | "HeaderComponent" | "TopItemListComponent" | "GroupComponent" | "group" | "itemHeight" | "scrollingStateChange" | "adjustForPrependedItems" | "maxHeightCacheSize" | "HeaderContainer" | "FooterContainer" | "GroupContainer", V = {
    item: Stream<ItemContent<any, any> | GroupItemContent<any, any>>;
    group: Stream<GroupContent>;
    topItems: Stream<number>;
    itemHeight: Stream<number | undefined>;
    scrollingStateChange: Stream<boolean>;
    adjustForPrependedItems: Stream<any>;
    maxHeightCacheSize: Stream<any>;
    footer: Stream<any>;
    header: Stream<any>;
    HeaderContainer: Stream<any>;
    FooterContainer: Stream<any>;
    ItemContainer: Stream<any>;
    ScrollContainer: Stream<any>;
    GroupContainer: Stream<any>;
    ListContainer: Stream<any>;
    emptyComponent: Stream<any>;
    scrollSeek: Stream<any>;
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: import("@virtuoso.dev/urx").StatefulStream<GroupContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<Components<any>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: import("@virtuoso.dev/urx").StatefulStream<string>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    HeaderComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    TopItemListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: any;
    }> | null | undefined>;
    ListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: any;
    }> | null | undefined>;
    GroupComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").GroupProps & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: Stream<[number, number]>;
    windowViewportRect: Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}[K_4] extends import("@virtuoso.dev/urx").StatefulStream<infer R_5> ? R_5 : never>(key: K_4) => V, useEmitter: <K_5 extends "context" | "itemContent" | "components" | "computeItemKey" | "scrollerRef" | "ScrollSeekPlaceholder" | "ListComponent" | "data" | "footer" | "header" | "ItemComponent" | "ScrollerComponent" | "scrollContainerState" | "scrollTop" | "viewportHeight" | "headerHeight" | "footerHeight" | "scrollHeight" | "smoothScrollTargetReached" | "scrollTo" | "scrollBy" | "statefulScrollTop" | "deviation" | "scrollingInProgress" | "log" | "logLevel" | "listBoundary" | "overscan" | "topListHeight" | "fixedHeaderHeight" | "increaseViewportBy" | "visibleRange" | "isScrolling" | "isAtTop" | "isAtBottom" | "atBottomThreshold" | "atBottomState" | "atTopStateChange" | "atBottomStateChange" | "scrollDirection" | "scrollVelocity" | "lastJumpDueToItemResize" | "isSeeking" | "scrollSeekConfiguration" | "scrollSeekRangeChanged" | "propsReady" | "didMount" | "useWindowScroll" | "customScrollParent" | "windowScrollContainerState" | "windowViewportRect" | "windowScrollTo" | "totalCount" | "scrollToIndex" | "initialItemCount" | "totalListHeight" | "startReached" | "endReached" | "rangeChanged" | "scrollSeek" | "item" | "ItemContainer" | "ScrollContainer" | "ListContainer" | "emptyComponent" | "sizeRanges" | "groupIndices" | "firstItemIndex" | "statefulTotalCount" | "trackItemSizes" | "itemSize" | "scrolledToInitialItem" | "initialTopMostItemIndex" | "followOutput" | "groupCounts" | "topItemsIndexes" | "listState" | "topItems" | "itemsRendered" | "topItemCount" | "totalListHeightChanged" | "initialScrollTop" | "alignToBottom" | "paddingTopAddition" | "scrollIntoView" | "fixedItemHeight" | "defaultItemHeight" | "groupContent" | "headerFooterTag" | "EmptyPlaceholder" | "FooterComponent" | "HeaderComponent" | "TopItemListComponent" | "GroupComponent" | "group" | "itemHeight" | "scrollingStateChange" | "adjustForPrependedItems" | "maxHeightCacheSize" | "HeaderContainer" | "FooterContainer" | "GroupContainer", V_1 = {
    item: Stream<ItemContent<any, any> | GroupItemContent<any, any>>;
    group: Stream<GroupContent>;
    topItems: Stream<number>;
    itemHeight: Stream<number | undefined>;
    scrollingStateChange: Stream<boolean>;
    adjustForPrependedItems: Stream<any>;
    maxHeightCacheSize: Stream<any>;
    footer: Stream<any>;
    header: Stream<any>;
    HeaderContainer: Stream<any>;
    FooterContainer: Stream<any>;
    ItemContainer: Stream<any>;
    ScrollContainer: Stream<any>;
    GroupContainer: Stream<any>;
    ListContainer: Stream<any>;
    emptyComponent: Stream<any>;
    scrollSeek: Stream<any>;
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: import("@virtuoso.dev/urx").StatefulStream<GroupContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<Components<any>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: import("@virtuoso.dev/urx").StatefulStream<string>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    HeaderComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    TopItemListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: any;
    }> | null | undefined>;
    ListComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: any;
    }> | null | undefined>;
    GroupComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").GroupProps & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<LogLevel>;
    scrollContainerState: Stream<[number, number]>;
    scrollTop: Stream<number>;
    viewportHeight: Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: Stream<number>;
    smoothScrollTargetReached: Stream<true>;
    scrollTo: Stream<ScrollToOptions>;
    scrollBy: Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: Stream<[number, number]>;
    windowViewportRect: Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: Stream<boolean>;
    atBottomStateChange: Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: Stream<number>;
    startReached: Stream<number>;
    rangeChanged: Stream<import("./interfaces").ListRange>;
    itemsRendered: Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}[K_5] extends Stream<infer R_6> ? R_6 : never>(key: K_5, callback: (value: V_1) => void) => void;
